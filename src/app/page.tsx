import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import TerminalSection from "@/components/sections/TerminalSection";
import GlossaryTeaser from "@/components/sections/GlossaryTeaser";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Projects />
      <Stack />
      <GlossaryTeaser />
      <TerminalSection />
      <About />
      <Contact />
    </>
  );
}
