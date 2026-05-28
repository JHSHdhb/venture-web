import Link from "next/link";
import type { ServiceItem } from "@/lib/site-data";

type ServiceCardProps = {
  service: ServiceItem;
  featured?: boolean;
};

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <article className={`service-card ${featured ? "service-card--featured" : ""}`.trim()}>
      <p className="service-card__role">{service.role}</p>
      <h3>{service.label}</h3>
      <p>{service.description}</p>
      <Link className="service-card__link" href={service.href}>
        View page
      </Link>
    </article>
  );
}
