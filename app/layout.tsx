import type { Metadata } from "next";
import { JetBrains_Mono, Playfair_Display } from "next/font/google";
import { BootScreen } from "@/components/boot/BootScreen";
import { Shell } from "@/components/layout/Shell";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Placeholder for DESIGN_TOKENS.md's "Editorial serif (TBD)" — swap for the
// final display face once chosen; every hero/heading font-display usage
// updates automatically since it's driven by the CSS variable.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SiriOS — Sreenandana Panangattu",
  description: "Full-stack developer portfolio, presented as a personal operating system.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${playfair.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-accent focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <BootScreen>
          <Shell>
            <div id="main-content">{children}</div>
          </Shell>
        </BootScreen>
      </body>
    </html>
  );
}
