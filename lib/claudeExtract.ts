import Anthropic from "@anthropic-ai/sdk";
import type {
  ExtractedQuestion,
  MappedAnswer,
  PageImage,
  ProcessResult,
  GradingSummary
} from "./types";

const MODEL = process.env.CLAUDE_MODEL || "claude-sonnet-5";

function client() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error(
      "ANTHROPIC_API_KEY is not set. Add it to your environment to enable extraction."
    );
  }
  return new Anthropic({ apiKey });
}

function imageBlocksFromPages(pages: PageImage[]) {
  return pages.map((p) => {
    const match = p.dataUrl.match(/^data:(image\/[a-zA-Z]+);base64,(.*)$/);
    const mediaType = (match?.[1] as "image/jpeg" | "image/png") || "image/jpeg";
    const data = match?.[2] || p.dataUrl;
    return {
      type: "image" as const,
      source: {
        type: "base64" as const,
        media_type: mediaType,
        data
      }
    };
  });
}

function extractJson<T>(text: string): T {
  const cleaned = text
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "");
  const start = cleaned.indexOf("{") === -1 ? cleaned.indexOf("[") : cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");
  const lastBracket = cleaned.lastIndexOf("]");
  const end = Math.max(lastBrace, lastBracket);
  const slice = start >= 0 && end >= 0 ? cleaned.slice(start, end + 1) : cleaned;
  return JSON.parse(slice) as T;
}

export async function extractQuestions(
  questionPages: PageImage[]
): Promise<ExtractedQuestion[]> {
  const anthropic = client();

  const system = `You are an exam paper analyst. You read scanned question papers (which may be printed or slightly skewed) and produce a precise, structured list of every question, in the original printed order.

Rules:
- Treat labelled sub-parts as SEPARATE entries. E.g. question 11 with parts (a) and (b) becomes two entries numbered "11 (a)" and "11 (b)".
- Preserve the EXACT original numbering/labels as printed (e.g. "1", "2 (i)", "Q3", "SECTION B - 4").
- Include the full question text (OCR it faithfully; fix obvious OCR noise but do not invent content).
- If a max-mark value is printed next to the question (e.g. "[5 marks]", "(10)"), capture it as a number in maxMarks, else null.
- Record which page (1-indexed, matching the order of images given to you) each question appears on.
- Output ONLY valid JSON, no prose, no markdown fences. Shape:
{"questions": [{"id": "q1", "number": "1", "text": "...", "maxMarks": 5, "page": 1, "topic": "Physics"}, ...]}
- Generate "id" as a short url-safe slug derived from the number (e.g. "11 (a)" -> "q11a"), unique across all entries.`;

  const msg = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 4096,
    system,
    messages: [
      {
        role: "user",
        content: [
          ...imageBlocksFromPages(questionPages),
          {
            type: "text",
            text: "Extract every question from this question paper, in printed order, following the system rules exactly. Return only the JSON object."
          }
        ]
      }
    ]
  });

  const textBlock = msg.content.find((b) => b.type === "text");
  const raw = textBlock && textBlock.type === "text" ? textBlock.text : "{}";
  const parsed = extractJson<{ questions: ExtractedQuestion[] }>(raw);
  return parsed.questions || [];
}

export async function extractMapAndGrade(
  answerPages: PageImage[],
  questions: ExtractedQuestion[]
): Promise<{ answers: MappedAnswer[]; unmatchedAnswers: MappedAnswer[]; summary: GradingSummary }> {
  const anthropic = client();

  const system = `You are an expert exam grader. You are given (1) a list of exam questions already extracted from a question paper, and (2) images of a student's handwritten answer sheet (one or more pages).

Your job, in order:
1. Read the handwriting on every page as accurately as possible. Estimate a handwriting legibility confidence score (0-100%).
2. Match each block of handwritten answer content to the question it answers, using whatever labels/numbers the student wrote, or the content itself if unlabelled. A question may be answered out of order - match by meaning/label, not by position.
3. For every question in the provided list that has NO matching handwritten content anywhere, include it in "answers" with matched=false, text="", boundingBox=null, marksAwarded=null, correctness="ungraded", feedback="No answer found on the answer sheet.", transcriptionConfidence=0, conceptsIdentified=[].
4. If you find handwritten content that does not correspond to any provided question (e.g. rough work), put it in "unmatchedAnswers" with questionId=null.
5. For every matched answer, determine a normalized bounding box (0 to 1 floating point, relative to the FULL page image width/height) tightly around the handwritten region that constitutes that answer, and the 1-indexed page number it is on.
6. Grade each matched answer: assign marksAwarded (number <= maxMarks), correctness ("correct" | "partial" | "incorrect"), 1-2 sentence feedback, conceptsIdentified (list of key subject concepts demonstrated), strengths, and improvements.
7. Produce an overall grading summary including gradeDistribution, topStrengths, and topWeaknesses.

Output ONLY valid JSON in this exact shape:
{
  "answers": [
    {
      "questionId": "q1",
      "matched": true,
      "text": "transcribed answer text",
      "page": 1,
      "boundingBox": {"x":0.1,"y":0.2,"width":0.3,"height":0.15},
      "marksAwarded": 4,
      "maxMarks": 5,
      "correctness": "partial",
      "feedback": "...",
      "transcriptionConfidence": 95,
      "conceptsIdentified": ["Newton's Second Law"],
      "strengths": "Good formula recall",
      "improvements": "Check calculation steps"
    }
  ],
  "unmatchedAnswers": [
    {
      "questionId": null,
      "matched": false,
      "text": "...",
      "page": 2,
      "boundingBox": {"x":0,"y":0,"width":0.2,"height":0.1},
      "marksAwarded": null,
      "maxMarks": null,
      "correctness": "ungraded",
      "feedback": "This content did not match any known question."
    }
  ],
  "summary": {
    "totalQuestions": 10,
    "answeredCount": 8,
    "unansweredCount": 2,
    "unmatchedCount": 1,
    "totalMarksAwarded": 27,
    "totalMaxMarks": 40,
    "overallFeedback": "2-3 sentence holistic summary.",
    "gradeDistribution": {"correct": 5, "partial": 2, "incorrect": 1, "ungraded": 2},
    "topStrengths": ["Core concepts", "Clean equations"],
    "topWeaknesses": ["Missed derivations", "Skipped Q12"],
    "averageLegibilityScore": 94
  }
}`;

  const questionList = questions
    .map((q) => `${q.id} | ${q.number} | maxMarks=${q.maxMarks ?? "unknown"} | ${q.text}`)
    .join("\n");

  const msg = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 8192,
    system,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Here is the list of extracted questions (id | number | maxMarks | text):\n${questionList}\n\nHere are the answer sheet page images, in page order:`
          },
          ...imageBlocksFromPages(answerPages),
          {
            type: "text",
            text: "Now transcribe, match, locate (bounding boxes), and grade every answer, following the system rules exactly. Return only the JSON object."
          }
        ]
      }
    ]
  });

  const textBlock = msg.content.find((b) => b.type === "text");
  const raw = textBlock && textBlock.type === "text" ? textBlock.text : "{}";
  const parsed = extractJson<{
    answers: MappedAnswer[];
    unmatchedAnswers: MappedAnswer[];
    summary: GradingSummary;
  }>(raw);

  const answers = parsed.answers || [];
  const correct = answers.filter((a) => a.correctness === "correct").length;
  const partial = answers.filter((a) => a.correctness === "partial").length;
  const incorrect = answers.filter((a) => a.correctness === "incorrect").length;
  const ungraded = answers.filter((a) => !a.matched || a.correctness === "ungraded").length;

  const summary: GradingSummary = parsed.summary || {
    totalQuestions: questions.length,
    answeredCount: answers.filter((a) => a.matched).length,
    unansweredCount: ungraded,
    unmatchedCount: parsed.unmatchedAnswers?.length || 0,
    totalMarksAwarded: answers.reduce((acc, a) => acc + (a.marksAwarded || 0), 0),
    totalMaxMarks: questions.reduce((acc, q) => acc + (q.maxMarks || 0), 0),
    overallFeedback: "Assessment processing completed.",
    gradeDistribution: { correct, partial, incorrect, ungraded }
  };

  if (!summary.gradeDistribution) {
    summary.gradeDistribution = { correct, partial, incorrect, ungraded };
  }

  return {
    answers,
    unmatchedAnswers: parsed.unmatchedAnswers || [],
    summary
  };
}

