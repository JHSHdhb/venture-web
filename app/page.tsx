import { BrandClarificationTeaser } from "@/components/home/BrandClarificationTeaser";
import { BrandPositioning } from "@/components/home/BrandPositioning";
import { EMSBoxBuildBlock } from "@/components/home/EMSBoxBuildBlock";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { OfficialResourcesTeaser } from "@/components/home/OfficialResourcesTeaser";
import { PCBAServiceBlock } from "@/components/home/PCBAServiceBlock";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { SupportCapabilitiesBlock } from "@/components/home/SupportCapabilitiesBlock";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BrandPositioning />
      <ServicesOverview />
      <PCBAServiceBlock />
      <EMSBoxBuildBlock />
      <SupportCapabilitiesBlock />
      <BrandClarificationTeaser />
      <OfficialResourcesTeaser />
      <FinalCTA />
    </main>
  );
}
