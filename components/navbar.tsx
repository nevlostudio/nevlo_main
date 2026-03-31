import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/logo-mark";

export function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-50">
      <div className="container-shell pointer-events-auto">
        <div className="nav-panel flex items-center justify-between rounded-[1.75rem] px-4 py-3 md:px-5">
          <a href="#top" className="flex items-center gap-3">
            <LogoMark size="sm" />
            <div>
              <div className="font-display text-lg font-semibold text-primary-deep">Nevlo</div>
              <div className="text-xs text-foreground/65">Android utility apps</div>
            </div>
          </a>

          <nav className="hidden items-center gap-3 rounded-full border border-white/55 bg-white/42 px-3 py-2 text-sm text-foreground/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.58)] md:flex">
            <a href="#apps" className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-primary-deep">
              Apps
            </a>
            <a href="#features" className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-primary-deep">
              Features
            </a>
            <a href="#about" className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-primary-deep">
              About
            </a>
            <a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-primary-deep">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button href="#apps" variant="secondary">
              Explore Apps
            </Button>
          </div>

          <a
            href="#apps"
            className="rounded-full bg-[linear-gradient(180deg,#185FA5,#0C447C)] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(24,95,165,0.25)] md:hidden"
          >
            Explore
          </a>
        </div>
      </div>
    </header>
  );
}
