import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceTabs from "@/components/ui/ServiceTabs";

export default function Services() {
  return (
    <Section id="servicos">
      <SectionTitle>serviços</SectionTitle>

      <Reveal>
        <ServiceTabs />
      </Reveal>
    </Section>
  );
}
