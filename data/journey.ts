export interface JourneyEntry {
  phase: "Education" | "Learning" | "Projects" | "Internship" | "Current Goals";
  year: string;
  title: string;
  description: string;
}

export const journey: JourneyEntry[] = [
  {
    phase: "Education",
    year: "2023",
    title: "B.Tech Computer Science Engineering",
    description:
      "Started my Computer Science journey, building a strong foundation in programming, algorithms, databases, and software engineering.",
  },
  {
    phase: "Learning",
    year: "2024–2025",
    title: "Exploring Full-Stack Development",
    description:
      "Transitioned from academic programming to modern web development by learning React, Next.js, TypeScript, Node.js, PostgreSQL, and building real-world applications.",
  },
  {
    phase: "Projects",
    year: "2025–2026",
    title: "Building Production-Ready Projects",
    description:
      "Developed CineVerse, QiQi Store, and PhishGuard, gaining hands-on experience with microservices, Docker, AI integration, machine learning, and modern frontend development.",
  },
  {
    phase: "Internship",
    year: "Jun 2026",
    title: "Software Platform Management @ StrataBiz Ventures",
    description:
      "Two-week internship working with an integrated LMS platform — got a firsthand look at how software and business process decisions intersect outside a purely engineering context.",
  },
  {
    phase: "Current Goals",
    year: "2026",
    title: "Becoming a Better Software Engineer",
    description:
      "Currently learning FastAPI, AWS, Kubernetes, and system design while building scalable applications and preparing for software engineering roles.",
  },
];