import { CTAButton } from "@/components/site/CTAButton";
import { routes } from "@/lib/site-data";

const projectFlow = ["Design files", "BOM review", "PCB Assembly / PCBA", "Testing", "EMS & Box Build"];

export function HomeHero() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <div className="home-section__inner hero__inner">
        <div>
          <p className="hero__kicker">PCBA-first electronics manufacturing support</p>
          <h1 id="home-hero-title">Venture Electronics</h1>
          <p className="hero__lead">PCB Assembly / PCBA and EMS Support for Electronics Projects</p>
          <p className="hero__summary">
            Venture Electronics supports electronics teams with PCB assembly, turnkey PCBA, component
            sourcing, testing, and EMS & box build project coordination.
          </p>
          <div className="hero__actions">
            <CTAButton href={routes.requestQuote}>Request a Quote</CTAButton>
            <CTAButton href={routes.pcba} variant="dark">
              Explore PCB Assembly / PCBA
            </CTAButton>
          </div>
        </div>

        <aside className="hero-map" aria-label="Typical electronics project path">
          <p className="hero-map__title">Typical project path</p>
          <ol className="workflow-steps workflow-steps--hero">
            {projectFlow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
