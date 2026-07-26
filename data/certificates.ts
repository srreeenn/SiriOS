
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
    {
      id: "cisco-introduction-cybersecurity",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Skills for All",
      date: "Jul 2026",
      category: "Course",
      description:
        "Completed Cisco's introductory cybersecurity course covering cyber threats, security principles, networking fundamentals, and career pathways in cybersecurity.",
      fileUrl: "/assets/certificates/cisco-introduction-to-cybersecurity.pdf",
    },
  ];