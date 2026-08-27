import type { PageImage, ProcessResult } from "./types";

export const sampleQuestionPaperPage: PageImage = {
  page: 1,
  width: 800,
  height: 1400,
  dataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1400" viewBox="0 0 800 1400">
    <rect width="800" height="1400" fill="%23FFFFFF"/>
    <text x="400" y="60" font-family="serif" font-size="20" font-weight="bold" fill="%23111827" text-anchor="middle">DELHI PUBLIC SCHOOL — CLASS 10 SCIENCE</text>
    <text x="400" y="85" font-family="sans-serif" font-size="12" fill="%236B7280" text-anchor="middle">Biology, Physics &amp; Chemistry Comprehensive Unit Test | Total Marks: 41</text>
    <line x1="50" y1="100" x2="750" y2="100" stroke="%23E5E7EB" stroke-width="1.5"/>

    <text x="50" y="140" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">1. Which blood vessel carries blood away from the heart?</text>
    <text x="750" y="140" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[2 marks]</text>

    <text x="50" y="220" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">2. Which organelle is primarily involved in photosynthesis?</text>
    <text x="750" y="220" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[2 marks]</text>

    <text x="50" y="300" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">3. Explain the role of chloroplasts and write the balanced photosynthesis equation.</text>
    <text x="750" y="300" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[2 marks]</text>

    <text x="50" y="380" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">4. Describe the flow of blood through the human heart starting from right atrium.</text>
    <text x="750" y="380" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23DC2626" text-anchor="end">[2 marks]</text>

    <text x="50" y="460" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">5. Draw a labelled diagram of an alveolus showing capillaries and gas exchange.</text>
    <text x="750" y="460" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[2 marks]</text>

    <text x="50" y="540" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">6. Draw a neat labelled diagram of the human digestive system.</text>
    <text x="750" y="540" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23D97706" text-anchor="end">[5 marks]</text>

    <text x="50" y="640" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">7. Draw and label a nephron with Bowman's capsule and collecting duct.</text>
    <text x="750" y="640" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[5 marks]</text>

    <text x="50" y="740" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">8. Explain structural differences between palisade and spongy mesophyll.</text>
    <text x="750" y="740" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[5 marks]</text>

    <text x="50" y="840" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">9. Define Osmosis and Diffusion and state differences between active &amp; passive transport.</text>
    <text x="750" y="840" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[3 marks]</text>

    <text x="50" y="940" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">10. State Ohm's Law and calculate total resistance of two 6-ohm resistors in parallel.</text>
    <text x="750" y="940" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[3 marks]</text>

    <text x="50" y="1040" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">11. Describe Carbon-12 subatomic structure and define Isotopes.</text>
    <text x="750" y="1040" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[4 marks]</text>

    <text x="50" y="1140" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23111827">12. Draw a flowchart of the Water Cycle showing Evaporation, Transpiration &amp; Precipitation.</text>
    <text x="750" y="1140" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23059669" text-anchor="end">[5 marks]</text>
  </svg>`
};

export const sampleAnswerSheetPage: PageImage = {
  page: 1,
  width: 800,
  height: 1800,
  dataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1800" viewBox="0 0 800 1800">
    <!-- Lined Paper Background -->
    <rect width="800" height="1800" fill="%23FAFAF7"/>
    <line x1="80" y1="0" x2="80" y2="1800" stroke="%23EF4444" stroke-width="1.5" opacity="0.6"/>
    <!-- Blue Notebook Lines -->
    ${Array.from({ length: 30 }, (_, i) => `<line x1="0" y1="${(i + 1) * 60}" x2="800" y2="${(i + 1) * 60}" stroke="%2393C5FD" stroke-width="1" opacity="0.4"/>`).join("")}

    <!-- Q1 Answer (Correct) -->
    <g transform="translate(0, 50)">
      <text x="25" y="35" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q1.</text>
      <text x="100" y="35" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Arteries carry oxygenated blood away from the heart to body tissues.</text>
      <text x="720" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="%2316A34A">✓ [2/2]</text>
    </g>

    <!-- Q3 Answer (Correct) -->
    <g transform="translate(0, 160)">
      <text x="25" y="35" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q3.</text>
      <text x="100" y="35" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Photosynthesis converts light energy into chemical energy in green plants.</text>
      <rect x="100" y="50" width="560" height="30" fill="none" stroke="%231E3A8A" stroke-width="1.5"/>
      <text x="115" y="70" font-family="cursive, Georgia, sans-serif" font-size="13" font-weight="bold" fill="%231E3A8A">6CO₂ + 6H₂O  ---(Light/Chlorophyll)--->  C₆H₁₂O₆ + 6O₂</text>
      <text x="720" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="%2316A34A">✓ [2/2]</text>
    </g>

    <!-- Q4 Answer (INCORRECT - RED HIGHLIGHT) -->
    <g transform="translate(0, 290)">
      <text x="25" y="35" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%23E11D48">Q4.</text>
      <text x="100" y="35" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%23E11D48" text-decoration="line-through">Blood enters the right atrium and flows directly into the aorta to body tissues.</text>
      <text x="720" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="%23E11D48">✗ [0/2]</text>
      <text x="100" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="%23E11D48">[Teacher Note: Incorrect sequence! Blood must cross tricuspid valve to RV first.]</text>
    </g>

    <!-- Q5 Answer (Correct) -->
    <g transform="translate(0, 410)">
      <text x="25" y="35" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q5.</text>
      <text x="100" y="35" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Alveolus diagram showing capillary network &amp; gas exchange arrows (O₂ in, CO₂ out).</text>
      <circle cx="500" cy="75" r="28" fill="none" stroke="%231E3A8A" stroke-width="2"/>
      <text x="720" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="%2316A34A">✓ [2/2]</text>
    </g>

    <!-- Q2 Answer (Correct) -->
    <g transform="translate(0, 550)">
      <text x="25" y="35" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q2.</text>
      <text x="100" y="35" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Chloroplast contains thylakoids &amp; stroma for light and dark reactions.</text>
      <text x="100" y="60" font-family="cursive, Georgia, sans-serif" font-size="14" fill="%231E3A8A">1. Light Reaction: Absorbs light via chlorophyll. 2. Dark Reaction: Fixes CO₂.</text>
      <text x="720" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="%2316A34A">✓ [2/2]</text>
    </g>

    <!-- Q6 Answer (Partial - Amber) -->
    <g transform="translate(0, 690)">
      <text x="25" y="35" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%23D97706">Q6.</text>
      <text x="100" y="35" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Digestive system sketch showing esophagus, stomach, small intestine &amp; large intestine.</text>
      <text x="720" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="%23D97706">! [4/5]</text>
    </g>

    <!-- Q7 Answer (Correct) -->
    <g transform="translate(0, 830)">
      <text x="25" y="35" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q7.</text>
      <text x="100" y="35" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Nephron diagram showing Bowman's capsule, glomerulus, loop of Henle &amp; collecting duct.</text>
      <text x="720" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="%2316A34A">✓ [5/5]</text>
    </g>

    <!-- Q8 Answer (Correct) -->
    <g transform="translate(0, 970)">
      <text x="25" y="35" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q8.</text>
      <text x="100" y="35" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Palisade mesophyll cells are column shaped for light capture; spongy layer has air spaces.</text>
      <text x="720" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="%2316A34A">✓ [5/5]</text>
    </g>

    <!-- Q9 Answer (Correct) -->
    <g transform="translate(0, 1110)">
      <text x="25" y="35" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q9.</text>
      <text x="100" y="35" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Osmosis is water movement across semi-permeable membrane. Active transport requires ATP.</text>
      <text x="720" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="%2316A34A">✓ [3/3]</text>
    </g>

    <!-- Q10 Answer (Correct) -->
    <g transform="translate(0, 1250)">
      <text x="25" y="35" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q10.</text>
      <text x="100" y="35" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Ohm's Law V = IR. Parallel calculation: 1/R = 1/6 + 1/6 = 2/6 -> R = 3 ohms.</text>
      <text x="720" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="%2316A34A">✓ [3/3]</text>
    </g>

    <!-- Q11 Answer (Correct) -->
    <g transform="translate(0, 1390)">
      <text x="25" y="35" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q11.</text>
      <text x="100" y="35" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Carbon-12 has 6 protons, 6 neutrons, 6 electrons. Isotopes have identical Z but different A.</text>
      <text x="720" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="%2316A34A">✓ [4/4]</text>
    </g>

    <!-- Q12 Answer (Correct) -->
    <g transform="translate(0, 1530)">
      <text x="25" y="35" font-family="cursive, Georgia, sans-serif" font-size="18" font-weight="bold" fill="%231E3A8A">Q12.</text>
      <text x="100" y="35" font-family="cursive, Georgia, sans-serif" font-size="15" fill="%231E3A8A">Water Cycle: Evaporation &amp; Transpiration -> Condensation in clouds -> Precipitation.</text>
      <text x="720" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="%2316A34A">✓ [5/5]</text>
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
      text: "Which organelle is primarily involved in photosynthesis?",
      maxMarks: 2,
      page: 1,
      topic: "Biology — Cell Biology"
    },
    {
      id: "q3",
      number: "3",
      text: "Explain the role of chloroplasts and write the balanced photosynthesis equation.",
      maxMarks: 2,
      page: 1,
      topic: "Biology — Photosynthesis"
    },
    {
      id: "q4",
      number: "4",
      text: "Describe the flow of blood through the human heart starting from right atrium.",
      maxMarks: 2,
      page: 1,
      topic: "Biology — Circulatory System"
    },
    {
      id: "q5",
      number: "5",
      text: "Draw a labelled diagram of an alveolus showing capillaries and gas exchange.",
      maxMarks: 2,
      page: 1,
      topic: "Biology — Respiration"
    },
    {
      id: "q6",
      number: "6",
      text: "Draw a neat labelled diagram of the human digestive system.",
      maxMarks: 5,
      page: 1,
      topic: "Biology — Human Physiology"
    },
    {
      id: "q7",
      number: "7",
      text: "Draw and label a nephron with Bowman's capsule and collecting duct.",
      maxMarks: 5,
      page: 1,
      topic: "Biology — Excretion"
    },
    {
      id: "q8",
      number: "8",
      text: "Explain structural differences between palisade and spongy mesophyll.",
      maxMarks: 5,
      page: 1,
      topic: "Biology — Plant Structure"
    },
    {
      id: "q9",
      number: "9",
      text: "Define Osmosis and Diffusion and state differences between active & passive transport.",
      maxMarks: 3,
      page: 1,
      topic: "Biology — Cell Transport"
    },
    {
      id: "q10",
      number: "10",
      text: "State Ohm's Law and calculate total resistance of two 6-ohm resistors in parallel.",
      maxMarks: 3,
      page: 1,
      topic: "Physics — Electricity"
    },
    {
      id: "q11",
      number: "11",
      text: "Describe Carbon-12 subatomic structure and define Isotopes.",
      maxMarks: 4,
      page: 1,
      topic: "Chemistry — Atomic Structure"
    },
    {
      id: "q12",
      number: "12",
      text: "Draw a flowchart of the Water Cycle showing Evaporation, Transpiration & Precipitation.",
      maxMarks: 5,
      page: 1,
      topic: "Environmental Science — Ecosystems"
    }
  ],
  answers: [
    {
      questionId: "q1",
      matched: true,
      text: "Arteries carry oxygenated blood away from the heart to body tissues.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.03, width: 0.92, height: 0.05 },
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
      text: "Chloroplast contains thylakoids & stroma for light and dark reactions.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.31, width: 0.92, height: 0.06 },
      marksAwarded: 2,
      maxMarks: 2,
      correctness: "correct",
      feedback: "Excellent work! You correctly identified chloroplast and light vs dark reaction stages.",
      transcriptionConfidence: 99,
      conceptsIdentified: ["Chloroplast", "Light & Dark Reactions"],
      strengths: "Clear breakdown of light vs dark reactions."
    },
    {
      questionId: "q3",
      matched: true,
      text: "Photosynthesis converts light energy into chemical energy in green plants. 6CO2 + 6H2O -> C6H12O6 + 6O2.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.09, width: 0.92, height: 0.06 },
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
      boundingBox: { x: 0.03, y: 0.16, width: 0.92, height: 0.06 },
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
      text: "Alveolus diagram showing capillary network & gas exchange arrows.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.23, width: 0.92, height: 0.06 },
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
      text: "Digestive system sketch showing esophagus, stomach, small intestine, and large intestine.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.38, width: 0.92, height: 0.07 },
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
      text: "Nephron diagram showing Bowman's capsule, glomerulus, loop of Henle & collecting duct.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.46, width: 0.92, height: 0.07 },
      marksAwarded: 5,
      maxMarks: 5,
      correctness: "correct",
      feedback: "Flawless nephron anatomical diagram with all 4 required region labels.",
      transcriptionConfidence: 98,
      conceptsIdentified: ["Nephron", "Bowman's Capsule"]
    },
    {
      questionId: "q8",
      matched: true,
      text: "Palisade mesophyll cells are column shaped for light capture; spongy layer has air spaces.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.54, width: 0.92, height: 0.07 },
      marksAwarded: 5,
      maxMarks: 5,
      correctness: "correct",
      feedback: "Comprehensive explanation contrasting palisade vs spongy mesophyll structure & function.",
      transcriptionConfidence: 98,
      conceptsIdentified: ["Leaf Anatomy", "Palisade & Spongy Mesophyll"]
    },
    {
      questionId: "q9",
      matched: true,
      text: "Osmosis is water movement across semi-permeable membrane. Active transport requires ATP.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.62, width: 0.92, height: 0.07 },
      marksAwarded: 3,
      maxMarks: 3,
      correctness: "correct",
      feedback: "Accurate definition of osmosis and distinction between active vs passive transport.",
      transcriptionConfidence: 97,
      conceptsIdentified: ["Osmosis", "ATP Energy"]
    },
    {
      questionId: "q10",
      matched: true,
      text: "Ohm's Law V = IR. Parallel calculation: 1/R = 1/6 + 1/6 = 2/6 -> R = 3 ohms.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.69, width: 0.92, height: 0.07 },
      marksAwarded: 3,
      maxMarks: 3,
      correctness: "correct",
      feedback: "Perfect parallel resistance calculation and formula statement!",
      transcriptionConfidence: 99,
      conceptsIdentified: ["Ohm's Law", "Parallel Resistance"]
    },
    {
      questionId: "q11",
      matched: true,
      text: "Carbon-12 has 6 protons, 6 neutrons, 6 electrons. Isotopes have identical Z but different A.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.77, width: 0.92, height: 0.07 },
      marksAwarded: 4,
      maxMarks: 4,
      correctness: "correct",
      feedback: "Excellent explanation of atomic composition and isotope definition with carbon example.",
      transcriptionConfidence: 98,
      conceptsIdentified: ["Subatomic Particles", "Isotopes"]
    },
    {
      questionId: "q12",
      matched: true,
      text: "Water Cycle: Evaporation & Transpiration -> Condensation in clouds -> Precipitation.",
      page: 1,
      boundingBox: { x: 0.03, y: 0.85, width: 0.92, height: 0.07 },
      marksAwarded: 5,
      maxMarks: 5,
      correctness: "correct",
      feedback: "Full 4-stage water cycle flowchart with clear arrows!",
      transcriptionConfidence: 96,
      conceptsIdentified: ["Evaporation", "Transpiration", "Precipitation"]
    }
  ],
  unmatchedAnswers: [],
  answerSheetPages: [
    { page: 1, width: 800, height: 1800 }
  ],
  summary: {
    totalQuestions: 12,
    answeredCount: 12,
    unansweredCount: 0,
    unmatchedCount: 0,
    totalMarksAwarded: 38,
    totalMaxMarks: 41,
    overallFeedback: "Outstanding overall performance across all 12 questions in Biology, Physics, & Chemistry! Excellent mastery of photosynthesis (Q1, Q2, Q3), nephron anatomy (Q7), Ohm's Law (Q10), and water cycle (Q12). Q4 (heart blood flow) requires review.",
    gradeDistribution: {
      correct: 10,
      partial: 1,
      incorrect: 1,
      ungraded: 0
    },
    topStrengths: [
      "100% answer sheet coverage across all 12 questions",
      "Perfect physics calculations and chemistry subatomic definitions",
      "Accurate photosynthesis equations and anatomical diagrams"
    ],
    topWeaknesses: [
      "Incorrect heart valve flow sequence on Question 4"
    ],
    averageLegibilityScore: 97
  }
};
