import type { ReactNode } from "react";
import Link from "next/link";
import { CTAButton } from "@/components/site/CTAButton";
import type { PlaceholderPageData } from "@/lib/site-data";
import { PageShell } from "./PageShell";

type PlaceholderPageProps = PlaceholderPageData & {
  children?: ReactNode;
};

export function PlaceholderPage({ title, role, cta, relatedLinks, children }: PlaceholderPageProps) {
  return (
    <PageShell>
      <article className="placeholder-card">
        <h1>{title}</h1>
        <p className="placeholder-card__role">{role}</p>
        <div className="section-actions">
          <CTAButton href={cta.href}>{cta.label}</CTAButton>
        </div>

        {children}

        <p className="placeholder-card__note">
          Final page copy, proof points, key facts, FAQs, and evidence-gated claims will be created in Stage 3.
        </p>

        <ul className="related-list" aria-label={`Related pages for ${title}`}>
          {relatedLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </article>
    </PageShell>
  );
}
