import { FileText, Mail, MoveRight, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";

export function ContactFooter() {
  return (
    <footer id="contact" className="section-anchor section-padding pb-8">
      <div className="container-shell">
        <div className="surface-panel overflow-hidden rounded-[2rem]">
          <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.28em] text-primary/70">
                Contact
              </div>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-primary-deep md:text-5xl">
                Ready for the next generation of practical Android tools?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-foreground/72">
                Nevlo is building a growing portfolio of clean, trustworthy utility apps. Reach out
                for collaborations, publishing updates, or product inquiries.
              </p>
            </div>

            <a
              href="mailto:support.nevlo@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(24,95,165,0.28)] transition hover:bg-primary-deep"
            >
              Contact Nevlo
              <MoveRight className="h-4 w-4" />
            </a>
          </div>

          <div className="border-t border-[rgba(12,68,124,0.08)] bg-white/45 px-8 py-5 md:px-10">
            <div className="flex flex-col gap-4 text-sm text-foreground/68 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <LogoMark size="sm" />
                <div>
                  <div className="font-display text-base font-semibold text-primary-deep">Nevlo</div>
                  <div>Smart apps for everyday life</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <a href="mailto:support.nevlo@gmail.com" className="inline-flex items-center gap-2 transition hover:text-primary-deep">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <Link href="/privacy-policy" className="inline-flex items-center gap-2 transition hover:text-primary-deep">
                  <FileText className="h-4 w-4" />
                  Privacy Policy
                </Link>
                <a href="#top" className="inline-flex items-center gap-2 transition hover:text-primary-deep">
                  <Twitter className="h-4 w-4" />
                  Social
                </a>
                <a href="#top" className="inline-flex items-center gap-2 transition hover:text-primary-deep">
                  <Send className="h-4 w-4" />
                  Updates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
