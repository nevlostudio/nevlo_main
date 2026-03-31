import { About } from "@/components/about";
import { AppsShowcase } from "@/components/apps-showcase";
import { ContactFooter } from "@/components/contact-footer";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { TrustStrip } from "@/components/trust-strip";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="mesh-orb left-[-7rem] top-[24rem] h-72 w-72 bg-[#D6EAFB]" />
      <div className="mesh-orb right-[-6rem] top-[58rem] h-80 w-80 bg-[#C0DCF4]" />
      <Navbar />
      <Hero />
      <TrustStrip />
      <AppsShowcase />
      <Features />
      <About />
      <ContactFooter />
    </main>
  );
}
