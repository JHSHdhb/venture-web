import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import test from "node:test";
import { join } from "node:path";

const root = process.cwd();

const expectedRoutes = [
  "/",
  "/about/",
  "/brand/venture-electronics-vs-venture-pcb-pcba/",
  "/official-resources/",
  "/about/company-overview/",
  "/about/news/",
  "/services/",
  "/services/pcb-assembly-pcba/",
  "/services/pcb-assembly-pcba/turnkey-pcb-assembly/",
  "/services/pcb-assembly-pcba/prototype-low-volume-pcba/",
  "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/",
  "/services/ems-box-build/",
  "/services/pcb-fabrication/",
  "/services/component-sourcing-bom-review/",
  "/quality-testing/",
  "/quality-testing/testing-quality-control/",
  "/quality-testing/electrical-testing/",
  "/quality-testing/product-reliability-testing/",
  "/quality-testing/testing-inspection-equipment/",
  "/quality-testing/quality-management-system/",
  "/quality-testing/packaging-logistics/",
  "/engineering-support/",
  "/engineering-support/smt-tht-bga-process-support/",
  "/engineering-support/pcb-test-fixture-support/",
  "/engineering-support/ic-programming-support/",
  "/industries/",
  "/industries/industrial-electronics/",
  "/industries/iot-smart-devices/",
  "/industries/consumer-electronics/",
  "/industries/energy-power-electronics/",
  "/industries/automation-control/",
  "/industries/communication-equipment/",
  "/resources/",
  "/resources/faq/",
  "/resources/blog/",
  "/resources/guides/",
  "/resources/downloads/",
  "/resources/catalog/",
  "/resources/glossary/",
  "/resources/case-studies/",
  "/contact/",
  "/request-a-quote/",
  "/thank-you/",
  "/privacy-policy/",
  "/terms/",
  "/sitemap/",
];

const expectedNavLabels = [
  "Home",
  "About",
  "Services",
  "Quality & Testing",
  "Engineering",
  "Industries",
  "Resources",
  "Contact",
];

const expectedFooterGroups = [
  "About",
  "Services",
  "Quality & Testing",
  "Engineering",
  "Industries",
  "Resources",
  "Contact",
  "Legal",
];

const obsoleteRoutes = [
  "/services/testing-quality-control/",
  "/capabilities/",
  "/services/ems-manufacturing/",
  "/services/box-build-assembly/",
  "/services/component-sourcing/",
  "/services/dfm-bom-review/",
];

function routeToPageFile(route) {
  return route === "/" ? "app/page.tsx" : `app${route}page.tsx`;
}

function readSourceFiles(dir) {
  return readdirSync(join(root, dir), { withFileTypes: true }).flatMap((entry) => {
    const relativePath = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      return readSourceFiles(relativePath);
    }

    return statSync(join(root, relativePath)).isFile() ? [relativePath] : [];
  });
}

test("creates every route file in the current sitemap", () => {
  for (const route of expectedRoutes) {
    const pageFile = routeToPageFile(route);
    assert.equal(existsSync(join(root, pageFile)), true, `${pageFile} should exist for ${route}`);
  }
});

test("does not keep obsolete service routes from the previous scaffold", () => {
  for (const route of obsoleteRoutes) {
    const pageFile = routeToPageFile(route);
    assert.equal(existsSync(join(root, pageFile)), false, `${pageFile} should not exist`);
  }
});

test("site data contains the complete sitemap href set", () => {
  const data = readFileSync(join(root, "lib/site-data.ts"), "utf8");

  for (const route of expectedRoutes) {
    assert.match(data, new RegExp(`href: "${route.replaceAll("/", "\\/")}"`), `${route} should be present`);
  }
});

test("header navigation exposes the required dropdown groups", () => {
  const data = readFileSync(join(root, "lib/site-data.ts"), "utf8");
  const header = readFileSync(join(root, "components/site/Header.tsx"), "utf8");
  const css = readFileSync(join(root, "app/globals.css"), "utf8");

  for (const label of expectedNavLabels) {
    assert.match(data, new RegExp(`label: "${label}"`), `${label} should be in nav data`);
  }

  assert.doesNotMatch(data, /label: "Engineering Support", href: routes\.engineeringSupport/);
  assert.match(header, /navItems/);
  assert.match(header, /NavigationChildren/);
  assert.match(header, /Request a Quote/);
  assert.match(css, /white-space:\s*nowrap/);
});

test("footer navigation exposes the required footer groups", () => {
  const data = readFileSync(join(root, "lib/site-data.ts"), "utf8");
  const footer = readFileSync(join(root, "components/site/Footer.tsx"), "utf8");

  for (const group of expectedFooterGroups) {
    assert.match(data, new RegExp(`title: "${group}"`), `${group} footer group should exist`);
  }

  assert.match(footer, /footerGroups/);
});

test("homepage renders the low-fidelity buyer-router sections", () => {
  const homepage = readFileSync(join(root, "app/page.tsx"), "utf8");
  const componentNames = [
    "HomeHero",
    "VentureIdentityBlock",
    "PCBAPrimaryBlock",
    "PCBAPathCards",
    "EMSBoxBuildBlock",
    "SupportCapabilitiesBlock",
    "RFQGuidanceBlock",
    "BrandAuthorityTeaser",
    "HomeFinalCTA",
  ];

  for (const componentName of componentNames) {
    assert.match(homepage, new RegExp(`import \\{ ${componentName} \\}`), `${componentName} should be imported`);
    assert.match(homepage, new RegExp(`<${componentName} \\/>`), `${componentName} should render on the homepage`);
  }

  assert.doesNotMatch(homepage, /PlaceholderPage/);
});

test("non-home routes remain PlaceholderPage scaffolds", () => {
  const routePageFiles = readSourceFiles("app").filter((file) => file.endsWith("page.tsx") && file !== "app/page.tsx");
  const appSource = routePageFiles.map((file) => readFileSync(join(root, file), "utf8")).join("\n");

  for (const pageFile of routePageFiles) {
    assert.match(readFileSync(join(root, pageFile), "utf8"), /PlaceholderPage/, `${pageFile} should remain a placeholder`);
  }

  assert.doesNotMatch(appSource, /Static form placeholder/);
  assert.doesNotMatch(appSource, /HomeHero/);
  assert.doesNotMatch(appSource, /HomeFinalCTA/);
});

test("homepage source avoids unsupported manufacturing claims", () => {
  const source = [
    readFileSync(join(root, "app/page.tsx"), "utf8"),
    ...readSourceFiles("components/home").map((file) => readFileSync(join(root, file), "utf8")),
  ].join("\n");
  const unsupportedClaims = [
    /No\.1 PCB manufacturer/i,
    /Certified global EMS leader/i,
    /Trusted by top brands/i,
    /Large-scale factory capacity/i,
    /factory scale/i,
    /production volume/i,
    /industry compliance/i,
  ];

  for (const claim of unsupportedClaims) {
    assert.doesNotMatch(source, claim);
  }
});

test("placeholder data includes page role and related links", () => {
  const data = readFileSync(join(root, "lib/site-data.ts"), "utf8");
  const placeholder = readFileSync(join(root, "components/shared/PlaceholderPage.tsx"), "utf8");

  assert.match(data, /role:/);
  assert.match(data, /relatedLinks:/);
  assert.match(placeholder, /role/);
  assert.match(placeholder, /relatedLinks/);
});
