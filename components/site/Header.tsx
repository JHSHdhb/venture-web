import Link from "next/link";
import { navItems, routes, type NavItem } from "@/lib/site-data";
import { CTAButton } from "./CTAButton";

function NavigationChildren({ items, nested = false }: { items: NavItem[]; nested?: boolean }) {
  return (
    <ul className={nested ? "nav-submenu" : "nav-menu"}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
          {item.children ? <NavigationChildren items={item.children} nested /> : null}
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand-mark" href={routes.home} aria-label="Venture Electronics home">
          <span className="brand-mark__name">Venture Electronics</span>
          <span className="brand-mark__descriptor">Official demo scaffold</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
                <Link className={item.children ? "nav-trigger" : "nav-link"} href={item.href}>
                  {item.label}
                </Link>
                {item.children ? <NavigationChildren items={item.children} /> : null}
              </li>
            ))}
          </ul>
        </nav>

        <CTAButton className="header-cta" href={routes.contact}>
          Request a Quote
        </CTAButton>
      </div>
    </header>
  );
}
