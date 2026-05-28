import type { ServiceItem } from "@/lib/site-data";
import { ServiceCard } from "./ServiceCard";

type ServiceGroupProps = {
  title: string;
  intro: string;
  services: ServiceItem[];
};

export function ServiceGroup({ title, intro, services }: ServiceGroupProps) {
  return (
    <div className="service-group">
      <div className="service-group__header">
        <h3>{title}</h3>
        <p>{intro}</p>
      </div>
      <div className="grid-3">
        {services.map((service) => (
          <ServiceCard key={service.href} service={service} />
        ))}
      </div>
    </div>
  );
}
