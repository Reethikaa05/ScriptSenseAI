import { NextRequest, NextResponse } from "next/server";
import { extractQuestions, extractMapAndGrade } from "@/lib/claudeExtract";
import type { PageImage, ProcessResult } from "@/lib/types";

export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const questionPages: PageImage[] = body.questionPages || [];
    const answerPages: PageImage[] = body.answerPages || [];

    if (!questionPages.length || !answerPages.length) {
      return NextResponse.json(
        { error: "Both a question paper and an answer sheet are required." },
        { status: 400 }
      );
    }

    const questions = await extractQuestions(questionPages);

    if (!questions.length) {
      return NextResponse.json(
        { error: "No questions could be extracted from the question paper." },
        { status: 422 }
      );
    }

    const { answers, unmatchedAnswers, summary } = await extractMapAndGrade(
      answerPages,
      questions
    );

    const result: ProcessResult = {
      questions,
      answers,
      unmatchedAnswers,
      answerSheetPages: answerPages.map((p) => ({
        page: p.page,
        width: p.width,
        height: p.height
      })),
      summary
    };

    return NextResponse.json(result);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err?.message || "Something went wrong while processing the files." },
      { status: 500 }
    );
  }
}
