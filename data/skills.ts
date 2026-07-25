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
    { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
    { category: "DevOps", items: ["Docker", "GitHub Actions", "Vercel", "Railway"] },
    { category: "AI", items: ["OpenAI API", "LangChain"] },
    { category: "ML", items: ["scikit-learn", "Pandas"] },
    { category: "Design", items: ["Figma", "Design Systems", "Framer"] },
    { category: "Tools", items: ["Git", "VS Code", "Cursor", "Antigravity", "Claude Code"] },
    { category: "Currently Learning", items: ["FastAPI", "Microservices", "System Design", "AWS", "Kubernetes"] },
  ];
  