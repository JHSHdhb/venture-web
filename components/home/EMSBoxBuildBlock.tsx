import { CTAButton } from "@/components/site/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { routes } from "@/lib/site-data";

export function EMSBoxBuildBlock() {
  return (
    <section className="home-section home-section--dark" aria-labelledby="ems-box-build-title">
      <div className="home-section__inner">
        <SectionHeader
          label="System-level capability"
          title="EMS & Box Build raises the site beyond a single-service PCBA inquiry path."
          intro="This combined route presents higher-level manufacturing support while keeping the first-build service tree focused and consolidated."
        />
        <div className="dark-panel">
          <div className="grid-3">
            <article className="service-card">
              <p className="service-card__role">Connects from</p>
              <h3>PCBA</h3>
              <p>System manufacturing starts from assembly context and quote-stage requirements.</p>
            </article>
            <article className="service-card">
              <p className="service-card__role">Supported by</p>
              <h3>Sourcing and testing</h3>
              <p>Component sourcing, BOM review, and quality discussion support the route.</p>
            </article>
            <article className="service-card">
              <p className="service-card__role">Leads to</p>
              <h3>Final assembly coordination</h3>
              <p>Final copy will define scope only after Stage 3 evidence and client review.</p>
            </article>
          </div>
          <div className="section-actions">
            <CTAButton href={routes.emsBoxBuild}>View EMS & Box Build</CTAButton>
            <CTAButton href={routes.contact} variant="dark">
              Discuss Project
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
