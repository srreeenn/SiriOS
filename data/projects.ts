export interface Project {
    slug: string;
    name: string;
    tagline: string;
    stack: string[];
    featured?: boolean;
    githubUrl?: string;
    demoUrl?: string;
  }
  
  // PLACEHOLDER DATA — swap in real projects. CineVerse is kept first and
  // `featured: true` per PRD.md §13 ("Featured: CineVerse").
  export const projects: Project[] = [
    {
      slug: "cineverse",
      name: "CineVerse",
      tagline: "A movie discovery platform with personalized recommendations.",
      stack: ["Next.js", "TypeScript", "TMDB API"],
      featured: true,
      githubUrl: "https://github.com/srreeenn/cineverse",
    },
    {
      slug: "exammark",
      name: "ExamMark",
      tagline: "AI-powered exam grading with rubric-based feedback.",
      stack: ["Next.js", "TypeScript", "Python", "OpenAI"],
      githubUrl: "https://github.com/srreeenn/exammark",
    },
    {
      slug: "project-three",
      name: "Project Three",
      tagline: "Replace with your next application.",
      stack: ["Add", "Stack", "Here"],
    },
  ];
  