export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { id: "hero", label: "home", href: "#hero" },
  { id: "about", label: "about", href: "#about" },
  { id: "applications", label: "applications", href: "#applications" },
  { id: "skills", label: "skills", href: "#skills" },
  { id: "journey", label: "journey", href: "#journey" },
  { id: "certificates", label: "cerficates", href: "#certificates"},
  { id: "github", label: "github", href: "#github" },
  { id: "contact", label: "contact", href: "#contact" },
];

export const systemInfo = {
  version: "1.0.0",
  ram: "16GB",
  uptime: "2y+",
  location: "Kerala, IN",
};
