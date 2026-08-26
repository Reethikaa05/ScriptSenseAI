import type { PageImage, ProcessResult } from "./types";

export const sampleQuestionPaperPage: PageImage = {
  page: 1,
  width: 800,
  height: 1050,
  dataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1050" viewBox="0 0 800 1050">
    <rect width="800" height="1050" fill="%23FFFFFF"/>
    <text x="400" y="70" font-family="serif" font-size="20" font-weight="bold" fill="%23111827" text-anchor="middle">DELHI PUBLIC SCHOOL — CLASS 10 SCIENCE</text>
    <text x="400" y="95" font-family="sans-serif" font-size="12" fill="%236B7280" text-anchor="middle">Biology &amp; Life Processes Unit Test | Total Marks: 20</text>
    <line x1="60" y1="115" x2="740" y2="115" stroke="%23E5E7EB" stroke-width="1.5"/>

    <text x="60" y="160" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">1. Which blood vessel carries blood away from the heart?</text>
    <text x="700" y="160" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[2 marks]</text>

    <text x="60" y="240" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">2. Which of the following organelles is primarily involved in photosynthesis?</text>
    <text x="700" y="240" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[2 marks]</text>

    <text x="60" y="320" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">3. Explain the role of chloroplasts in photosynthesis, naming the main pigments involved.</text>
    <text x="700" y="320" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[2 marks]</text>

    <text x="60" y="410" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">4. Describe the flow of blood through the human heart starting from right atrium.</text>
    <text x="700" y="410" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23DC2626" text-anchor="end">[2 marks]</text>

    <text x="60" y="500" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">5. Draw a labelled diagram of an alveolus showing capillaries and air space.</text>
    <text x="700" y="500" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[2 marks]</text>

    <text x="60" y="590" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">6. Draw a neat labelled diagram of the human digestive system.</text>
    <text x="700" y="590" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23D97706" text-anchor="end">[5 marks]</text>
  </svg>`
};

export const sampleAnswerSheetPage: PageImage = {
  page: 1,
  width: 800,
  height: 1050,
  dataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1050" viewBox="0 0 800 1050">
    <!-- Lined Paper Background -->
    <rect width="800" height="1050" fill="%23FAFAF7"/>
    <line x1="80" y1="0" x2="80" y2="1050" stroke="%23EF4444" stroke-width="1.5" opacity="0.6"/>
    <!-- Blue Notebook Horizontal Lines -->
    <line x1="0" y1="80" x2="800" y2="80" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="140" x2="800" y2="140" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="200" x2="800" y2="200" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="260" x2="800" y2="260" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="320" x2="800" y2="320" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="380" x2="800" y2="380" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="440" x2="800" y2="440" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="500" x2="800" y2="500" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="560" x2="800" y2="560" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="620" x2="800" y2="620" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="680" x2="800" y2="680" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="740" x2="800" y2="740" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="800" x2="800" y2="800" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="860" x2="800" y2="860" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="920" x2="800" y2="920" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>

    <!-- Q1 Handwriting Text -->
    <text x="25" y="115" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q1.</text>
    <text x="100" y="115" font-family="cursive, Georgia, sans-serif" font-size="16" fill="%231E3A8A">Photosynthesis is the process used by green plants and some other</text>
    <text x="100" y="150" font-family="cursive, Georgia, sans-serif" font-size="16" fill="%231E3A8A">organisms to convert light energy into chemical energy.</text>

    <!-- Chemical Equation Box -->
    <rect x="110" y="175" width="560" height="40" fill="none" stroke="%231E3A8A" stroke-width="1.5"/>
    <text x="130" y="200" font-family="cursive, Georgia, sans-serif" font-size="15" font-weight="bold" fill="%231E3A8A">6CO₂  +  6H₂O   ---(Light / Chlorophyll)--->   C₆H₁₂O₆  +  6O₂</text>

    <!-- Plant Diagram Sketch -->
    <!-- Sun -->
    <circle cx="500" cy="270" r="18" fill="none" stroke="%231E3A8A" stroke-width="1.5"/>
    <line x1="500" y1="244" x2="500" y2="236" stroke="%231E3A8A" stroke-width="1.5"/>
    <line x1="520" y1="250" x2="526" y2="244" stroke="%231E3A8A" stroke-width="1.5"/>
    <line x1="526" y1="270" x2="534" y2="270" stroke="%231E3A8A" stroke-width="1.5"/>
    <text x="536" y="275" font-family="cursive, Georgia, sans-serif" font-size="14" fill="%231E3A8A">Sunlight</text>

    <!-- Plant Stem & Leaves -->
    <path d="M 450 430 Q 450 350 450 310" fill="none" stroke="%231E3A8A" stroke-width="2"/>
    <!-- Leaves -->
    <path d="M 450 360 Q 410 340 400 360 Q 420 380 450 360" fill="none" stroke="%231E3A8A" stroke-width="1.5"/>
    <path d="M 450 340 Q 490 320 500 340 Q 480 360 450 340" fill="none" stroke="%231E3A8A" stroke-width="1.5"/>
    <!-- Roots -->
    <path d="M 450 430 L 430 470 M 450 430 L 450 480 M 450 430 L 470 465" stroke="%231E3A8A" stroke-width="1.5"/>
    <line x1="380" y1="430" x2="520" y2="430" stroke="%231E3A8A" stroke-width="1" stroke-dasharray="3,3"/>

    <!-- Diagram Labels & Arrows -->
    <text x="260" y="360" font-family="cursive, Georgia, sans-serif" font-size="14" fill="%231E3A8A">Carbon dioxide</text>
    <line x1="365" y1="355" x2="395" y2="355" stroke="%231E3A8A" stroke-width="1.5"/>
    <polygon points="395,352 402,355 395,358" fill="%231E3A8A"/>

    <text x="540" y="360" font-family="cursive, Georgia, sans-serif" font-size="14" fill="%231E3A8A">Oxygen</text>
    <line x1="535" y1="355" x2="505" y2="355" stroke="%231E3A8A" stroke-width="1.5"/>
    <polygon points="535,352 542,355 535,358" fill="%231E3A8A"/>

    <text x="490" y="465" font-family="cursive, Georgia, sans-serif" font-size="14" fill="%231E3A8A">Water</text>

    <!-- Q2 Handwriting Text -->
    <g transform="translate(0, 500)">
      <text x="25" y="60" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q2.</text>
      <text x="100" y="60" font-family="cursive, Georgia, sans-serif" font-size="16" fill="%231E3A8A">The process mainly occurs in the chloroplast of the plant cell.</text>
      <text x="100" y="95" font-family="cursive, Georgia, sans-serif" font-size="16" fill="%231E3A8A">It has two main stages:</text>
      <text x="100" y="130" font-family="cursive, Georgia, sans-serif" font-size="16" fill="%231E3A8A">1. Light reaction — Captures light energy.</text>
      <text x="100" y="165" font-family="cursive, Georgia, sans-serif" font-size="16" fill="%231E3A8A">2. Dark reaction — Uses energy to make glucose.</text>
    </g>
  </svg>`
};

export const sampleProcessResult: ProcessResult = {
  isDemo: true,
  questions: [
    {
      id: "q1",
      number: "1",
      text: "Which blood vessel carries blood away from the heart?",
      maxMarks: 2,
      page: 1,
      topic: "Biology — Circulatory System"
    },
    {
      id: "q2",
      number: "2",
      text: "Which of the following organelles is primarily involved in photosynthesis?",
      maxMarks: 2,
      page: 1,
      topic: "Biology — Cell Biology"
    },
    {
      id: "q3",
      number: "3",
      text: "Explain the role of chloroplasts in photosynthesis, naming the main pigments involved and briefly outlining the two major stages.",
      maxMarks: 2,
      page: 1,
      topic: "Biology — Photosynthesis"
    },
    {
      id: "q4",
      number: "4",
      text: "Describe the flow of blood through the human heart starting from the right atrium and ending at the aorta; include the names of valves crossed.",
      maxMarks: 2,
      page: 1,
      topic: "Biology — Circulatory System"
    },
    {
      id: "q5",
      number: "5",
      text: "Draw a labelled diagram of an alveolus showing capillaries and air space (label alveolar sac, capillary, and direction of gas exchange).",
      maxMarks: 2,
      page: 1,
      topic: "Biology — Respiration"
    },
    {
      id: "q6",
      number: "6",
      text: "Draw a neat labelled diagram of the human digestive system (stomach, small intestine, large intestine, liver, pancreas) and label absorption site.",
      maxMarks: 5,
      page: 1,
      topic: "Biology — Human Physiology"
    },
    {
      id: "q7",
      number: "7",
      text: "Draw and label a nephron (Bowman's capsule, glomerulus, proximal tubule, loop of Henle, distal tubule, collecting duct).",
      maxMarks: 5,
      page: 1,
      topic: "Biology — Excretion"
    },
    {
      id: "q8",
      number: "8",
      text: "Explain the structural differences between palisade mesophyll and spongy mesophyll and state how each structure aids its function in the leaf.",
      maxMarks: 5,
      page: 1,
      topic: "Biology — Plant Structure"
    },
    {
      id: "q9",
      number: "9",
      text: "Define Osmosis and Diffusion and state two key differences between active and passive transport.",
      maxMarks: 3,
      page: 1,
      topic: "Biology — Cell Transport"
    },
    {
      id: "q10",
      number: "10",
      text: "State Ohm's Law and calculate the total resistance of two 6-ohm resistors connected in parallel.",
      maxMarks: 3,
      page: 1,
      topic: "Physics — Electricity"
    },
    {
      id: "q11",
      number: "11",
      text: "Describe the atomic structure of Carbon-12 and define Isotopes with an example.",
      maxMarks: 4,
      page: 1,
      topic: "Chemistry — Atomic Structure"
    },
    {
      id: "q12",
      number: "12",
      text: "Draw a flowchart of the Water Cycle showing Evaporation, Transpiration, Condensation, and Precipitation.",
      maxMarks: 5,
      page: 1,
      topic: "Environmental Science — Ecosystems"
    }
  ],
  answers: [
    {
      questionId: "q1",
      matched: true,
      text: "Arteries carry oxygenated blood away from the heart to body tissues (except pulmonary artery).",
      page: 1,
      boundingBox: { x: 0.03, y: 0.07, width: 0.92, height: 0.12 },
      marksAwarded: 2,
      maxMarks: 2,
      correctness: "correct",
      feedback: "Correct! You accurately identified arteries as the vessels carrying blood away from the heart.",
      transcriptionConfidence: 98,
      conceptsIdentified: ["Arteries", "Circulatory Flow"]
    },
    {
      questionId: "q2",
      matched: true,
      text: "The process mainly occurs in the chloroplast of the plant cell. It has two main stages: 1. Light reaction - Captures light energy. 2. Dark reaction - Uses energy to make glucose.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.52, width: 0.92, height: 0.22 },
      marksAwarded: 2,
      maxMarks: 2,
      correctness: "correct",
      feedback: "Excellent work! You correctly identified the chloroplast as the organelle responsible for photosynthesis. Keep it up!",
      transcriptionConfidence: 99,
      conceptsIdentified: ["Chloroplast", "Light & Dark Reactions", "Glucose Synthesis"],
      strengths: "Clear breakdown of light vs dark reactions."
    },
    {
      questionId: "q3",
      matched: true,
      text: "Photosynthesis is the process used by green plants and some other organisms to convert light energy into chemical energy. 6CO2 + 6H2O -> C6H12O6 + 6O2.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.22, width: 0.92, height: 0.28 },
      marksAwarded: 2,
      maxMarks: 2,
      correctness: "correct",
      feedback: "Great job stating the definition and balanced chemical equation with chlorophyll and sunlight factors.",
      transcriptionConfidence: 97,
      conceptsIdentified: ["Photosynthesis Equation", "Chlorophyll Pigment"]
    },
    {
      questionId: "q4",
      matched: false,
      text: "",
      page: 1,
      boundingBox: null,
      marksAwarded: 0,
      maxMarks: 2,
      correctness: "incorrect",
      feedback: "This question was left unanswered on the answer sheet.",
      transcriptionConfidence: 0,
      conceptsIdentified: []
    },
    {
      questionId: "q5",
      matched: true,
      text: "Labelled diagram of alveolus with capillary network and gas exchange arrows.",
      page: 1,
      boundingBox: { x: 0.4, y: 0.24, width: 0.55, height: 0.25 },
      marksAwarded: 2,
      maxMarks: 2,
      correctness: "correct",
      feedback: "Accurate diagram with correct gas exchange arrows (O2 in, CO2 out).",
      transcriptionConfidence: 94,
      conceptsIdentified: ["Alveolus", "Gas Exchange"]
    },
    {
      questionId: "q6",
      matched: true,
      text: "Diagram of digestive system showing stomach, small intestine, large intestine, and liver.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.75, width: 0.92, height: 0.2 },
      marksAwarded: 4,
      maxMarks: 5,
      correctness: "partial",
      feedback: "Well drawn digestive tract! Missed labelling the pancreas explicitly.",
      transcriptionConfidence: 92,
      conceptsIdentified: ["Digestive Tract", "Small Intestine Absorption"],
      improvements: "Pancreas label omitted."
    },
    {
      questionId: "q7",
      matched: true,
      text: "Nephron diagram showing Bowman's capsule, glomerulus, loop of Henle, and collecting duct.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.75, width: 0.92, height: 0.2 },
      marksAwarded: 5,
      maxMarks: 5,
      correctness: "correct",
      feedback: "Flawless nephron diagram with all 6 required labels.",
      transcriptionConfidence: 98,
      conceptsIdentified: ["Nephron", "Bowman's Capsule"]
    },
    {
      questionId: "q8",
      matched: true,
      text: "Palisade mesophyll cells are column shaped with high chloroplast density; spongy mesophyll has air spaces.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.75, width: 0.92, height: 0.2 },
      marksAwarded: 3,
      maxMarks: 5,
      correctness: "partial",
      feedback: "Good structural distinction, but could elaborate more on gas diffusion in spongy mesophyll.",
      transcriptionConfidence: 93,
      conceptsIdentified: ["Palisade Mesophyll", "Spongy Layer"]
    }
  ],
  unmatchedAnswers: [],
  answerSheetPages: [
    { page: 1, width: 800, height: 1050 }
  ],
  summary: {
    totalQuestions: 8,
    answeredCount: 7,
    unansweredCount: 1,
    unmatchedCount: 0,
    totalMarksAwarded: 20,
    totalMaxMarks: 25,
    overallFeedback: "Strong overall performance across Biology unit test! The student displayed excellent mastery of photosynthesis (Q1, Q2, Q3) and anatomical diagrams. Only Q4 (heart blood flow) was left unanswered.",
    gradeDistribution: {
      correct: 5,
      partial: 2,
      incorrect: 1,
      ungraded: 1
    },
    topStrengths: [
      "Perfect chloroplast & photosynthesis explanation",
      "Accurate chemical equations and plant diagrams",
      "High handwriting clarity and clean step-by-step layout"
    ],
    topWeaknesses: [
      "Skipped heart blood flow sequence (Q4)",
      "Missed pancreas label on digestive diagram"
    ],
    averageLegibilityScore: 96
  }
};
