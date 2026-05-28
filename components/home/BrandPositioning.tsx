import { SectionHeader } from "@/components/shared/SectionHeader";

export function BrandPositioning() {
  return (
    <section className="home-section home-section--white" aria-labelledby="brand-positioning-title">
      <div className="home-section__inner">
        <SectionHeader
          label="Mother brand"
          title="Venture Electronics remains the official brand layer."
          intro="This demo treats Venture Electronics as the mother brand and uses the website structure to explain services, business-line wording, official resources, and evidence boundaries."
        />
        <div className="grid-3">
          <article className="info-panel">
            <h3>Brand entity first</h3>
            <p>
              Venture PCB and Venture PCBA are presented as service, keyword, or business-line expressions
              connected back to Venture Electronics.
            </p>
          </article>
          <article className="info-panel">
            <h3>AI-readable structure</h3>
            <p>
              Navigation, page routes, footer groups, and page responsibilities are organized so machines and
              buyers can read the same hierarchy.
            </p>
          </article>
          <article className="info-panel">
            <h3>Evidence-gated claims</h3>
            <p>
              Detailed proof points, official channel status, and regulated factual claims are reserved for
              Stage 3 evidence review instead of being invented in this scaffold.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
