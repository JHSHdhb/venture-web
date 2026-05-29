import { CTAButton } from "@/components/site/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { routes, serviceHierarchy } from "@/lib/site-data";

const buyerNeeds = [
  "PCB assembly for new electronics projects",
  "BOM and Gerber review before quotation",
  "Turnkey assembly support",
  "Prototype or low-volume builds",
  "Testing requirements before delivery",
];

export function PCBAPrimaryBlock() {
  const pcba = serviceHierarchy[0];

  return (
    <section className="home-section home-section--white" aria-labelledby="pcba-primary-title">
      <div className="home-section__inner">
        <SectionHeader
          label="Primary service entry"
          title="Start with PCB Assembly / PCBA"
          intro="For most electronics projects, PCB assembly is the practical starting point. Venture supports PCBA projects with assembly coordination, BOM review, sourcing support, and testing requirements."
        />

        <div className="grid-2">
          <article className="service-card service-card--featured home-feature-card">
            <p className="service-card__role">{pcba.role}</p>
            <h3>{pcba.label}</h3>
            <p>
              PCB Assembly / PCBA remains the homepage's main conversion path, with child routes for turnkey
              builds, prototype and low-volume work, and SMT/THT/BGA process context.
            </p>
            <div className="card-actions">
              <CTAButton href={routes.pcba}>View PCBA Page</CTAButton>
              <CTAButton href={routes.requestQuote} variant="secondary">
                Request a PCBA Quote
              </CTAButton>
            </div>
          </article>

          <aside className="info-panel">
            <h3>Common buyer needs</h3>
            <ul className="mini-list">
              {buyerNeeds.map((need) => (
                <li key={need}>{need}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
