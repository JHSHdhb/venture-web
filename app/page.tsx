import { BrandAuthorityTeaser } from "@/components/home/BrandAuthorityTeaser";
import { CapabilityEvidence } from "@/components/home/CapabilityEvidence";
import { CatalogBanner } from "@/components/home/CatalogBanner";
import { CoreServicesBlock } from "@/components/home/CoreServicesBlock";
import { EMSBoxBuildBlock } from "@/components/home/EMSBoxBuildBlock";
import { FactoryShowcase } from "@/components/home/FactoryShowcase";
import { HomeFAQBlock } from "@/components/home/HomeFAQBlock";
import { HomeFinalCTA } from "@/components/home/HomeFinalCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeResourcesTeaser } from "@/components/home/HomeResourcesTeaser";
import { ProjectPathStepper } from "@/components/home/ProjectPathStepper";
import { VentureIdentityBlock } from "@/components/home/VentureIdentityBlock";

export default function HomePage() {
  return (
    <main>
      {/* Order follows the EN Implementation Plan §C1 Home structure */}
      <HomeHero />               {/* 1. Hero */}
      <CoreServicesBlock />      {/* 2. Core services — PCBA-first + paths + supporting */}
      <VentureIdentityBlock />   {/* 3. Why Venture / capability evidence */}
      <CapabilityEvidence />     {/* Capabilities — before the timeline */}
      <ProjectPathStepper />     {/* Typical project path */}
      <CatalogBanner />          {/* Download Catalog banner */}
      <FactoryShowcase />        {/* Venture Electronics & our EMS factory */}
      <EMSBoxBuildBlock />       {/* 6. Lightweight EMS / Box Build highlight */}
      <BrandAuthorityTeaser />   {/* 8. Brand clarification / official resources teaser */}
      <HomeResourcesTeaser />    {/* 9. Our latest blog */}
      <HomeFAQBlock />           {/* 7. FAQ / buyer questions — after the blog */}
      <HomeFinalCTA />           {/* 10. Final RFQ CTA */}
    </main>
  );
}
