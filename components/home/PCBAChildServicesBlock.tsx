import { ServiceGroup } from "@/components/shared/ServiceGroup";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { serviceHierarchy } from "@/lib/site-data";

export function PCBAChildServicesBlock() {
  const pcbaChildren = serviceHierarchy[0].children ?? [];

  return (
    <section className="home-section" aria-labelledby="pcba-child-services-title">
      <div className="home-section__inner">
        <SectionHeader
          label="PCBA child paths"
          title="Turnkey, prototype, and process capability stay nested under PCBA."
          intro="The first-build IA treats these as child routes of PCB Assembly / PCBA, so buyers and crawlers can understand the service relationship clearly."
        />
        <ServiceGroup
          title="PCB Assembly / PCBA child services"
          intro="Each child route supports a specific buyer intent while preserving PCB Assembly / PCBA as the primary category."
          services={pcbaChildren}
        />
      </div>
    </section>
  );
}
