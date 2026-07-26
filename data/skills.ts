export interface SkillModule {
    category: string;
    items: string[];
  }
  
  // PLACEHOLDER DATA — edit to match your actual stack.
  // Categories match PRD.md §14 exactly; keep the order, it reads top-to-bottom
  // like a system boot log (Languages first, "Currently Learning" last).
  export const skillModules: SkillModule[] = [
    { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT Auth"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
    { category: "DevOps", items: ["Docker", "GitHub Actions", "Nginx", "Vercel", "Railway"] },
    { category: "AI", items: ["OpenAI API", "FastAPI"]},
    { category: "ML", items: ["scikit-learn", "Pandas" ,"NumPy" ,"PyTorch"] },
    { category: "Design", items: ["Figma", "Design Systems", "Framer"] },
    { category: "Tools", items: ["Git", "Docker", "Cursor", "Postman"] },
    { category: "Research", items: ["Federated Learning","Cybersecurity","Intrusion Detection"] },
    { category: "Currently Learning", items: ["FastAPI", "System Design", "AWS", "Docker Networking"] },
  ];
  