export interface Project {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;

  description: string;
  features: string[];
  architecture: string;
  lessons: string;
}

export const projects: Project[] = [
  {
    slug: "cineverse",
    name: "CineVerse",
    tagline: "AI-powered movie discovery platform built with a scalable microservices architecture.",
    stack: [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Redis",
      "FastAPI",
      "Docker",
    ],
    featured: true,
    githubUrl: "https://github.com/srreeenn/cineverse",
    demoUrl: "",
    description:
      "CineVerse is a full-stack movie discovery platform that allows users to explore movies, manage watchlists and favorites, write reviews, and receive AI-powered personalized recommendations using a production-style microservices architecture.",
    features: [
      "JWT Authentication",
      "Favorites & Watchlists",
      "Movie Reviews & Ratings",
      "AI-Powered Recommendations",
      "TMDB Integration",
      "Responsive Modern UI",
    ],
    architecture:
      "Built using a microservices architecture with a Next.js frontend, Express authentication and movie services, FastAPI recommendation service, PostgreSQL, Redis caching, Docker, and Nginx reverse proxy.",
    lessons:
      "Learned how to design scalable backend architectures, manage multiple services with Docker, implement secure authentication, and integrate external APIs efficiently.",
  },

  {
    slug: "qiqistore",
    name: "QiQi Store",
    tagline: "Premium fashion e-commerce platform with a modern shopping experience.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Razorpay",
    ],
    githubUrl: "https://github.com/srreeenn/qiqi-store",
    demoUrl: "https://qiqi-store.vercel.app",
    description:
      "QiQi Store is a premium fashion e-commerce application featuring a clean shopping experience, animated interfaces, secure checkout, and responsive design.",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Wishlist",
      "Live Search & Filtering",
      "Razorpay Payment Integration",
      "Responsive UI with Smooth Animations",
    ],
    architecture:
      "Built with Next.js App Router, TypeScript, Tailwind CSS, React Context for state management, Framer Motion animations, and Razorpay payment integration.",
    lessons:
      "Improved frontend architecture, state management, payment integration, and designing polished user experiences with reusable components.",
  },

  {
    slug: "phishguard",
    name: "PhishGuard",
    tagline: "Machine learning phishing detection system developed during a cybersecurity hackathon.",
    stack: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Jupyter Notebook",
    ],
    githubUrl: "https://github.com/Devinandhana/hackathena",
    description:
      "PhishGuard is a machine learning project that analyzes website features to detect phishing attacks. Developed during a cybersecurity hackathon using supervised learning techniques.",
    features: [
      "Phishing URL Detection",
      "Feature Engineering",
      "Exploratory Data Analysis",
      "Model Training & Evaluation",
      "97.4% Accuracy with Gradient Boosting",
    ],
    architecture:
      "Dataset preprocessing using Pandas, feature engineering, model training with scikit-learn, and evaluation performed inside Jupyter Notebook.",
    lessons:
      "Learned the complete machine learning workflow including data cleaning, feature selection, model evaluation, and interpreting classification metrics.",
  },
];