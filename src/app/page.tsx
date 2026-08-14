import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import VisionMission from "@/components/VisionMission";
import Legacy from "@/components/Legacy";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <VisionMission />
      <Legacy />
      <Services />
      <Stats />
      <CTA />
      <Contact />
    </main>
  );
}
