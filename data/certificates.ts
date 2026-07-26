
export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    category: "Internship" | "Course" | "Achievement";
    description: string;
    fileUrl?: string; // path under /public/assets/certificates/
  }
  
  export const certificates: Certificate[] = [
    {
      id: "stratabiz-internship",
      title: "Software Platform Management",
      issuer: "StrataBiz Ventures",
      date: "Jun 2026",
      category: "Internship",
      description:
        "Two-week internship working with an integrated LMS platform — hands-on with how software platforms and business process work in tandem.",
      fileUrl: "/assets/certificates/stratabiz-internship.pdf",
    },
  ];