import { BrandAuthorityTeaser } from "@/components/home/BrandAuthorityTeaser";
import { EMSBoxBuildBlock } from "@/components/home/EMSBoxBuildBlock";
import { HomeFinalCTA } from "@/components/home/HomeFinalCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { PCBAPrimaryBlock } from "@/components/home/PCBAPrimaryBlock";
import { PCBAPathCards } from "@/components/home/PCBAPathCards";
import { RFQGuidanceBlock } from "@/components/home/RFQGuidanceBlock";
import { SupportCapabilitiesBlock } from "@/components/home/SupportCapabilitiesBlock";
import { VentureIdentityBlock } from "@/components/home/VentureIdentityBlock";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <VentureIdentityBlock />
      <PCBAPrimaryBlock />
      <PCBAPathCards />
      <EMSBoxBuildBlock />
      <SupportCapabilitiesBlock />
      <RFQGuidanceBlock />
      <BrandAuthorityTeaser />
      <HomeFinalCTA />
    </main>
  );
}
