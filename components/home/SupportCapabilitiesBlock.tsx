import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { routes, type ServiceItem } from "@/lib/site-data";

const supportingCapabilities: ServiceItem[] = [
  {
    label: "Component Sourcing & BOM Review",
    href: routes.componentSourcingBomReview,
    role: "Supply-chain support",
    description: "Supply-chain and engineering review support for turnkey PCBA and EMS projects.",
  },
  {
    label: "Testing & Quality Control",
    href: routes.testingQualityControl,
    role: "Quality support",
    description: "Cross-service quality and testing support across PCBA, EMS, and box build workflows.",
  },
  {
    label: "PCB Fabrication",
    href: routes.pcbFabrication,
    role: "Bare-board support",
    description: "Bare-board manufacturing support connected to the PCBA workflow.",
  },
];

export function SupportCapabilitiesBlock() {
  return (
    <section className="home-section home-section--white" aria-labelledby="support-capabilities-title">
      <div className="home-section__inner">
        <SectionHeader
          label="Supporting capabilities"
          title="Supporting Capabilities That Make PCBA and EMS Projects Work"
          intro="These capabilities support PCBA and EMS projects without competing with PCB Assembly / PCBA as the main service entry."
        />
        <div className="grid-3">
          {supportingCapabilities.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
