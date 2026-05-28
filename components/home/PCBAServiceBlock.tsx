import { CTAButton } from "@/components/site/CTAButton";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { routes, serviceHierarchy } from "@/lib/site-data";

export function PCBAServiceBlock() {
  const pcba = serviceHierarchy[0];

  return (
    <section className="home-section home-section--white" aria-labelledby="pcba-block-title">
      <div className="home-section__inner">
        <SectionHeader
          label="Primary service"
          title="PCB Assembly / PCBA is the main conversion category."
          intro="The demo makes PCBA the structural and visual lead, then places turnkey, prototype, and SMT/THT/BGA as child routes under the PCBA page."
        />
        <div className="grid-2">
          <div className="info-panel">
            <h3>What this page will own</h3>
            <p>
              The future PCBA page will explain the main service category, buyer fit, quote inputs, and links
              into related delivery models without using unsupported production or certification claims.
            </p>
            <div className="section-actions">
              <CTAButton href={routes.pcba}>View PCBA Page</CTAButton>
              <CTAButton href={routes.contact} variant="secondary">
                Request PCBA Quote
              </CTAButton>
            </div>
          </div>
          <div className="grid-1">
            {pcba.children?.map((child) => (
              <ServiceCard key={child.href} service={child} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
