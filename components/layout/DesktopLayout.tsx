import { Sidebar } from "@/components/layout/Sidebar";
import { TerminalBar } from "@/components/layout/TerminalBar";

export function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="scanlines flex min-h-screen flex-col md:flex-row">
      <Sidebar isOpen={true} onClose={() => {}} />
      <div className="flex min-h-screen flex-1 flex-col md:ml-0">
        <main id="main-content" className="flex-1 px-4 py-16 md:px-8 md:py-8">
          {children}
        </main>
        <TerminalBar />
      </div>
    </div>
  );
}