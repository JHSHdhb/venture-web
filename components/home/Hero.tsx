import { CTAButton } from "@/components/site/CTAButton";
import { routes } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <div className="home-section__inner hero__inner">
        <div>
          <h1 id="home-hero-title">Venture Electronics</h1>
          <p className="hero__lead">
            PCBA-first electronics manufacturing support, from PCB assembly to EMS & box build coordination,
            organized as an official source for buyers, search systems, and AI-readable brand facts.
          </p>
          <div className="hero__actions">
            <CTAButton href={routes.contact}>Request a Quote</CTAButton>
            <CTAButton href={routes.services} variant="dark">
              Explore Services
            </CTAButton>
          </div>
        </div>

        <aside className="hero-map" aria-label="Venture Electronics service hierarchy preview">
          <p className="hero-map__title">Stage 2 service hierarchy</p>
          <div className="hero-map__node">
            <strong>PCB Assembly / PCBA</strong>
            <span>Primary service category and main quote entry</span>
          </div>
          <div className="hero-map__children">
            <div className="hero-map__node">
              <strong>Turnkey PCB Assembly</strong>
              <span>Full-process delivery path</span>
            </div>
            <div className="hero-map__node">
              <strong>Prototype & Low-volume PCBA</strong>
              <span>Early-stage and small-batch path</span>
            </div>
            <div className="hero-map__node">
              <strong>SMT, THT & BGA Capabilities</strong>
              <span>Assembly process and technical path</span>
            </div>
          </div>
          <div className="hero-map__node">
            <strong>EMS & Box Build</strong>
            <span>System-level manufacturing capability</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
