import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { routes, type ServiceItem } from "@/lib/site-data";

const pcbaPaths: ServiceItem[] = [
  {
    label: "Turnkey PCB Assembly",
    href: routes.turnkey,
    role: "PCBA child path",
    description: "For projects that need BOM review, sourcing coordination, assembly, and testing support.",
  },
  {
    label: "Prototype & Low-volume PCBA",
    href: routes.prototype,
    role: "PCBA child path",
    description: "For early-stage builds, engineering validation, samples, and small-batch production.",
  },
  {
    label: "SMT, THT & BGA Capabilities",
    href: routes.smtThtBga,
    role: "PCBA child path",
    description: "For buyers comparing assembly processes and technical assembly support.",
  },
];

export function PCBAPathCards() {
  return (
    <section className="home-section" aria-labelledby="pcba-paths-title">
      <div className="home-section__inner">
        <SectionHeader
          label="Choose your PCBA path"
          title="Choose the PCBA Path That Matches Your Project Stage"
          intro="These routes stay grouped under PCB Assembly / PCBA so the homepage keeps PCBA as the main service category."
        />

        <div className="grid-3">
          {pcbaPaths.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
