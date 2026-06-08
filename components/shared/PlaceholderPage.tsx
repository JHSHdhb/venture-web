import type { ReactNode } from "react";
import Link from "next/link";
import { CTAButton } from "@/components/site/CTAButton";
import type { PlaceholderPageData } from "@/lib/site-data";
import { PageShell } from "./PageShell";

type PlaceholderPageProps = PlaceholderPageData & {
  children?: ReactNode;
};

export function PlaceholderPage({ title, role, summary, cta, relatedLinks, children }: PlaceholderPageProps) {
  return (
    <PageShell>
      <article className="placeholder-card">
        <h1>{title}</h1>
        <p className="placeholder-card__role">{role}</p>
        <p className="placeholder-card__summary">{summary}</p>
        <div className="section-actions">
          <CTAButton href={cta.href}>{cta.label}</CTAButton>
        </div>

        {children}

        <p className="placeholder-card__note">
          This page is included in the proposed site architecture. Detailed copy and evidence-backed
          content will be developed after Venture confirms the relevant facts, capabilities, and
          public-safe claims.
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
