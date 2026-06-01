import { CTAButton } from "@/components/site/CTAButton";
import { routes } from "@/lib/site-data";

export function HomeHero() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__inner">
        <h1 id="home-hero-title">
          Venture Electronics <br />
          <span className="hero__accent">PCB Assembly / PCBA and EMS Support for Electronics Projects</span>
        </h1>

        <p className="hero__lead">
          Venture Electronics supports electronics product teams with PCB assembly, turnkey PCBA,
          component sourcing, testing, and EMS &amp; box build coordination — under one accountable
          manufacturing partner.
        </p>

        <div className="hero__actions">
          <CTAButton href={routes.requestQuote}>Request a Quote</CTAButton>
          <CTAButton href={routes.pcba} variant="dark">
            Explore PCB Assembly / PCBA
          </CTAButton>
        </div>
      </div>

      <svg
        className="hero__wave"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waveStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#4f8bff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ab6f04" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path
          d="M0,72 C220,140 440,140 720,80 C1000,20 1220,20 1440,72 L1440,140 L0,140 Z"
          fill="#f4f7fa"
        />
        <path
          d="M0,68 C220,136 440,136 720,76 C1000,16 1220,16 1440,68"
          fill="none"
          stroke="url(#waveStroke)"
          strokeWidth="2"
        />
      </svg>
    </section>
  );
}
