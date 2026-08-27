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
    <line x1="0" y1="70" x2="800" y2="70" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="130" x2="800" y2="130" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="190" x2="800" y2="190" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="250" x2="800" y2="250" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="310" x2="800" y2="310" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="370" x2="800" y2="370" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="430" x2="800" y2="430" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="490" x2="800" y2="490" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="550" x2="800" y2="550" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="610" x2="800" y2="610" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="670" x2="800" y2="670" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="730" x2="800" y2="730" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="790" x2="800" y2="790" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="850" x2="800" y2="850" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="910" x2="800" y2="910" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>
    <line x1="0" y1="970" x2="800" y2="970" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>

    <!-- Q1 Answer (Correct - Green Checkmark) -->
    <text x="25" y="95" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q1.</text>
    <text x="100" y="95" font-family="cursive, Georgia, sans-serif" font-size="16" fill="%231E3A8A">Arteries carry oxygenated blood away from the heart to body tissues.</text>
    <text x="730" y="95" font-family="sans-serif" font-size="20" font-weight="bold" fill="%2316A34A">✓ [2/2]</text>

    <!-- Q3 Answer: Chemical Equation & Plant Diagram -->
    <g transform="translate(0, 120)">
      <text x="25" y="45" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q3.</text>
      <text x="100" y="45" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Photosynthesis converts light energy into chemical energy in green plants.</text>
      <rect x="100" y="60" width="560" height="35" fill="none" stroke="%231E3A8A" stroke-width="1.5"/>
      <text x="115" y="82" font-family="cursive, Georgia, sans-serif" font-size="14" font-weight="bold" fill="%231E3A8A">6CO₂ + 6H₂O  ---(Sunlight / Chlorophyll)--->  C₆H₁₂O₆ + 6O₂</text>
      <text x="730" y="45" font-family="sans-serif" font-size="20" font-weight="bold" fill="%2316A34A">✓ [2/2]</text>
    </g>

    <!-- Q4 Answer: INCORRECT ANSWER (Highlighted Red) -->
    <g transform="translate(0, 240)">
      <text x="25" y="45" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%23E11D48">Q4.</text>
      <text x="100" y="45" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%23E11D48" text-decoration="line-through">Blood enters the right atrium and flows directly into the aorta to body tissues.</text>
      <!-- Red Cross Mark -->
      <text x="730" y="45" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23E11D48">✗ [0/2]</text>
      <text x="100" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23E11D48">[Teacher Note: Incorrect sequence! Blood must cross tricuspid valve to RV first.]</text>
    </g>

    <!-- Q5 Answer: Alveolus Diagram -->
    <g transform="translate(0, 330)">
      <text x="25" y="45" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q5.</text>
      <text x="100" y="45" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Alveolus diagram showing capillary network &amp; gas exchange arrows (O₂ in, CO₂ out).</text>
      <circle cx="500" cy="90" r="35" fill="none" stroke="%231E3A8A" stroke-width="2"/>
      <path d="M 450 90 Q 500 130 550 90" fill="none" stroke="%231E3A8A" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="560" y="95" font-family="cursive, Georgia, sans-serif" font-size="13" fill="%231E3A8A">Capillary Network</text>
      <text x="730" y="45" font-family="sans-serif" font-size="20" font-weight="bold" fill="%2316A34A">✓ [2/2]</text>
    </g>

    <!-- Q2 Answer: Chloroplast Stages -->
    <g transform="translate(0, 480)">
      <text x="25" y="45" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q2.</text>
      <text x="100" y="45" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Chloroplast contains thylakoids &amp; stroma for light and dark reactions.</text>
      <text x="100" y="75" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">1. Light Reaction: Absorbs light energy via chlorophyll pigments.</text>
      <text x="100" y="105" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">2. Dark Reaction (Calvin Cycle): Fixes CO₂ into glucose sugar.</text>
      <text x="730" y="45" font-family="sans-serif" font-size="20" font-weight="bold" fill="%2316A34A">✓ [2/2]</text>
    </g>

    <!-- Q6 Answer: Digestive System (Partial Credit - Amber) -->
    <g transform="translate(0, 620)">
      <text x="25" y="45" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%23D97706">Q6.</text>
      <text x="100" y="45" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Digestive system sketch showing esophagus, stomach, small intestine, and large intestine.</text>
      <path d="M 450 70 Q 470 110 440 150 Q 480 180 430 220" fill="none" stroke="%231E3A8A" stroke-width="2"/>
      <text x="500" y="120" font-family="cursive, Georgia, sans-serif" font-size="13" fill="%231E3A8A">Stomach</text>
      <text x="500" y="170" font-family="cursive, Georgia, sans-serif" font-size="13" fill="%231E3A8A">Small Intestine</text>
      <text x="730" y="45" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23D97706">! [4/5]</text>
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
      matched: true,
      text: "Blood enters the right atrium and flows directly into the aorta to body tissues.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.23, width: 0.92, height: 0.08 },
      marksAwarded: 0,
      maxMarks: 2,
      correctness: "incorrect",
      feedback: "Incorrect sequence! Blood must flow from the right atrium across the tricuspid valve into the right ventricle before entering pulmonary circulation.",
      transcriptionConfidence: 95,
      conceptsIdentified: ["Circulatory System", "Heart Flow"],
      improvements: "Review heart valve order (Right Atrium -> Tricuspid Valve -> Right Ventricle -> Pulmonary Artery)."
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
