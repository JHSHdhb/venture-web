import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { serviceHierarchy } from "@/lib/site-data";

export function ServicesOverview() {
  const [pcba, ...otherServices] = serviceHierarchy;

  return (
    <section className="home-section" aria-labelledby="services-overview-title">
      <div className="home-section__inner">
        <SectionHeader
          label="Services"
          title="Updated service hierarchy with PCBA as the lead entry."
          intro="The first-build service hub uses /services/ and keeps PCBA child pages nested under PCB Assembly / PCBA."
        />
        <div className="grid-2">
          <ServiceCard service={pcba} featured />
          <div className="info-panel">
            <h3>PCBA child paths</h3>
            <ul className="mini-list">
              {pcba.children?.map((child) => (
                <li key={child.href}>{child.label}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid-3" style={{ marginTop: 18 }}>
          {otherServices.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
