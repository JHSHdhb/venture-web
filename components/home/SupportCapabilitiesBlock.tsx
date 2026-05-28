import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { supportCapabilities } from "@/lib/site-data";

export function SupportCapabilitiesBlock() {
  return (
    <section className="home-section" aria-labelledby="support-capabilities-title">
      <div className="home-section__inner">
        <SectionHeader
          label="Supporting capabilities"
          title="Fabrication, sourcing, BOM review, testing, and quality support the main PCBA path."
          intro="These routes are visible, linkable, and crawlable, but they do not overtake PCB Assembly / PCBA as the main service category."
        />
        <div className="grid-3">
          {supportCapabilities.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
