export type NotificationItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  unread: boolean;
  type: "ai" | "submission" | "system" | "alert";
  linkNav?: string;
};

export type StudentProfile = {
  id: string;
  name: string;
  roll: string;
  email: string;
  score: string;
  pct: number;
  legibility: string;
  status: "Top Performer" | "Satisfactory" | "Needs Review";
  avatarUrl: string;
  attendance: string;
  strengths: string[];
  weaknesses: string[];
  recentExam: string;
};

export const teacherProfile = {
  name: "Madhur Rastogi",
  role: "Senior Biology & Physics Educator",
  institution: "Delhi Public School",
  location: "Bokaro Steel City",
  email: "madhur.rastogi@dpsbokaro.edu.in",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80"
};

export const seededNotifications: NotificationItem[] = [
  {
    id: "n1",
    title: "AI Assessment Extraction Complete",
    description: "Class 10 Biology Unit Test for 30 students extracted and mapped with 98.6% accuracy.",
    time: "10 mins ago",
    unread: true,
    type: "ai",
    linkNav: "exams"
  },
  {
    id: "n2",
    title: "New Answer Sheet Submitted",
    description: "Sarah Chen submitted Class 10 Biology Unit Test answer sheet.",
    time: "45 mins ago",
    unread: true,
    type: "submission",
    linkNav: "classroom"
  },
  {
    id: "n3",
    title: "Classroom Benchmark Alert",
    description: "Class 10 Science average score reached 81.2%, exceeding term target by +4.2%.",
    time: "2 hours ago",
    unread: false,
    type: "alert",
    linkNav: "home"
  },
  {
    id: "n4",
    title: "System Update Installed",
    description: "VedaAI Claude 3.5 Sonnet Vision model updated with enhanced handwriting OCR recognition.",
    time: "1 day ago",
    unread: false,
    type: "system"
  }
];

export const seededStudents: StudentProfile[] = [
  {
    id: "s1",
    name: "Alex Morgan",
    roll: "1001",
    email: "alex.morgan@dps.edu.in",
    score: "20 / 25",
    pct: 80,
    legibility: "98%",
    status: "Top Performer",
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    attendance: "96%",
    strengths: ["Newton's Laws", "Photosynthesis Equations", "Clean Diagrams"],
    weaknesses: ["Heart blood flow sequence"],
    recentExam: "Class 10 Biology Unit Test"
  },
  {
    id: "s2",
    name: "Sarah Chen",
    roll: "1002",
    email: "sarah.chen@dps.edu.in",
    score: "24 / 25",
    pct: 96,
    legibility: "99%",
    status: "Top Performer",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
    attendance: "98%",
    strengths: ["Flawless chemical balancing", "Nephron anatomical labels", "Speed vs Velocity"],
    weaknesses: ["None noted"],
    recentExam: "Class 10 Biology Unit Test"
  },
  {
    id: "s3",
    name: "David Miller",
    roll: "1003",
    email: "david.miller@dps.edu.in",
    score: "18 / 25",
    pct: 72,
    legibility: "94%",
    status: "Satisfactory",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    attendance: "92%",
    strengths: ["Core definitions", "Kinematic formulas"],
    weaknesses: ["Elaborating on dark reactions", "Digestive organ labels"],
    recentExam: "Class 10 Biology Unit Test"
  },
  {
    id: "s4",
    name: "Priya Sharma",
    roll: "1004",
    email: "priya.sharma@dps.edu.in",
    score: "22 / 25",
    pct: 88,
    legibility: "97%",
    status: "Top Performer",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    attendance: "95%",
    strengths: ["Photosynthesis stages", "Alveolus gas exchange diagram"],
    weaknesses: ["SI unit formatting"],
    recentExam: "Class 10 Biology Unit Test"
  },
  {
    id: "s5",
    name: "Rohan Gupta",
    roll: "1005",
    email: "rohan.gupta@dps.edu.in",
    score: "14 / 25",
    pct: 56,
    legibility: "91%",
    status: "Needs Review",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    attendance: "88%",
    strengths: ["Basic definitions"],
    weaknesses: ["Skipped Q4 & Q8", "Unlabelled diagrams"],
    recentExam: "Class 10 Biology Unit Test"
  },
  {
    id: "s6",
    name: "Emily Watson",
    roll: "1006",
    email: "emily.watson@dps.edu.in",
    score: "23 / 25",
    pct: 92,
    legibility: "98%",
    status: "Top Performer",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&q=80",
    attendance: "97%",
    strengths: ["Excellent handwriting", "Chloroplast structure"],
    weaknesses: ["Minor numerical rounding"],
    recentExam: "Class 10 Biology Unit Test"
  }
];

export const seededLibraryItems = [
  {
    id: "lib1",
    title: "Class 10 Biology Unit Test — Question Paper & Markscheme",
    category: "Question Paper",
    subject: "Biology",
    date: "2026-08-20",
    pages: "2 Pages",
    format: "PDF",
    author: "Madhur Rastogi",
    downloads: 142,
    score: "25 Max Marks"
  },
  {
    id: "lib2",
    title: "Alex Morgan — Graded Handwritten Answer Sheet",
    category: "Student Answer Sheet",
    subject: "Biology",
    date: "2026-08-22",
    pages: "1 Page",
    format: "SVG / Canvas",
    author: "Alex Morgan (Roll 1001)",
    downloads: 89,
    score: "20 / 25 (80%)"
  },
  {
    id: "lib3",
    title: "Class 9 Physics Dynamics Examination Paper",
    category: "Question Paper",
    subject: "Physics",
    date: "2026-07-15",
    pages: "4 Pages",
    format: "PDF",
    author: "Madhur Rastogi",
    downloads: 210,
    score: "40 Max Marks"
  },
  {
    id: "lib4",
    title: "VedaAI Official Science Evaluation Rubric 2026",
    category: "Markscheme Template",
    subject: "Chemistry",
    date: "2026-06-10",
    pages: "6 Pages",
    format: "PDF",
    author: "VedaAI Academic Board",
    downloads: 380,
    score: "Rubric Standard"
  }
];
