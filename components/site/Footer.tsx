import Link from "next/link";
import { footerGroups } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="footer-grid">
          {footerGroups.map((group) => (
            <section
              className="footer-group"
              key={group.title}
              aria-labelledby={`footer-${group.title.toLowerCase().replaceAll(" ", "-")}`}
            >
              <h2 id={`footer-${group.title.toLowerCase().replaceAll(" ", "-")}`}>{group.title}</h2>
              <ul className="footer-list">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="footer-note">
          This preview uses public-safe draft wording. Final website content will be completed after
          Venture confirms public facts, capabilities, certifications, official channels, and
          evidence-backed claims.
        </p>
      </div>
    </footer>
  );
}
