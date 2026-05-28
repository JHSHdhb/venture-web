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
  "Engineering Support",
  "Industries",
  "Resources",
  "Contact",
];

const expectedFooterGroups = [
  "About",
  "Services",
  "Quality & Testing",
  "Engineering Support",
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

test("creates every route placeholder in the nav-only sitemap", () => {
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

  for (const label of expectedNavLabels) {
    assert.match(data, new RegExp(`label: "${label}"`), `${label} should be in nav data`);
  }

  assert.match(header, /navItems/);
  assert.match(header, /NavigationChildren/);
  assert.match(header, /Request a Quote/);
});

test("footer navigation exposes the required footer groups", () => {
  const data = readFileSync(join(root, "lib/site-data.ts"), "utf8");
  const footer = readFileSync(join(root, "components/site/Footer.tsx"), "utf8");

  for (const group of expectedFooterGroups) {
    assert.match(data, new RegExp(`title: "${group}"`), `${group} footer group should exist`);
  }

  assert.match(footer, /footerGroups/);
});

test("routes render nav-only PlaceholderPage content instead of full page content", () => {
  const appSource = readSourceFiles("app")
    .map((file) => readFileSync(join(root, file), "utf8"))
    .join("\n");

  assert.match(readFileSync(join(root, "app/page.tsx"), "utf8"), /PlaceholderPage/);
  assert.doesNotMatch(appSource, /Static form placeholder/);
  assert.doesNotMatch(appSource, /Hero \/>/);
  assert.doesNotMatch(appSource, /FinalCTA \/>/);
});

test("placeholder data includes page role and related links", () => {
  const data = readFileSync(join(root, "lib/site-data.ts"), "utf8");
  const placeholder = readFileSync(join(root, "components/shared/PlaceholderPage.tsx"), "utf8");

  assert.match(data, /role:/);
  assert.match(data, /relatedLinks:/);
  assert.match(placeholder, /role/);
  assert.match(placeholder, /relatedLinks/);
});
