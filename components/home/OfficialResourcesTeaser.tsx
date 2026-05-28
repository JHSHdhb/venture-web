import { CTAButton } from "@/components/site/CTAButton";
import { routes } from "@/lib/site-data";

export function OfficialResourcesTeaser() {
  return (
    <section className="home-section" aria-labelledby="official-resources-title">
      <div className="home-section__inner teaser-row">
        <div>
          <h2 id="official-resources-title">Official Resources / Online Presence</h2>
          <p>
            The official resources page is reserved for confirmed websites, PCBA-focused assets, and official
            channels only. Unconfirmed accounts stay out of the footer and any future sameAs source list.
          </p>
        </div>
        <CTAButton href={routes.officialResources} variant="secondary">
          View Official Resources
        </CTAButton>
      </div>
    </section>
  );
}
