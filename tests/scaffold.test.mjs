import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import test from "node:test";
import { join } from "node:path";

const root = process.cwd();

function readMaybe(relativePath) {
  const fullPath = join(root, relativePath);
  return existsSync(fullPath) ? readFileSync(fullPath, "utf8") : "";
}

const stage3TemplateTypes = [
  "service-conversion",
  "strategic-service",
  "supporting-capability",
  "quality-trust",
  "engineering-support",
  "brand-authority",
  "industry",
  "resource",
  "contact-rfq",
];

const stage3SectionTypes = [
  "direct-answer",
  "key-facts",
  "scope",
  "process",
  "quote-checklist",
  "proof",
  "faq",
  "related-pages",
];

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

const p0Stage3Routes = [
  "/about/",
  "/brand/venture-electronics-vs-venture-pcb-pcba/",
  "/official-resources/",
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
  "/engineering-support/",
  "/resources/faq/",
  "/contact/",
  "/request-a-quote/",
];

const p1Stage3Routes = [
  "/quality-testing/electrical-testing/",
  "/quality-testing/product-reliability-testing/",
  "/quality-testing/testing-inspection-equipment/",
  "/quality-testing/quality-management-system/",
  "/quality-testing/packaging-logistics/",
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
];

const p2Stage3Routes = [
  "/about/company-overview/",
  "/about/news/",
  "/resources/",
  "/resources/blog/",
  "/resources/guides/",
  "/resources/downloads/",
  "/resources/catalog/",
  "/resources/glossary/",
  "/resources/case-studies/",
  "/thank-you/",
  "/privacy-policy/",
  "/terms/",
  "/sitemap/",
];

const stage3TemplateRoutes = [...p0Stage3Routes, ...p1Stage3Routes, ...p2Stage3Routes];

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
    "CoreServicesBlock",
    "VentureIdentityBlock",
    "CapabilityEvidence",
    "ProjectPathStepper",
    "CatalogBanner",
    "FactoryShowcase",
    "EMSBoxBuildBlock",
    "BrandAuthorityTeaser",
    "HomeResourcesTeaser",
    "HomeFAQBlock",
    "HomeFinalCTA",
  ];

  for (const componentName of componentNames) {
    assert.match(homepage, new RegExp(`import \\{ ${componentName} \\}`), `${componentName} should be imported`);
    assert.match(homepage, new RegExp(`<${componentName} \\/>`), `${componentName} should render on the homepage`);
  }

  const renderedOrder = componentNames.map((componentName) => homepage.indexOf(`<${componentName} />`));
  assert.deepEqual(
    renderedOrder,
    renderedOrder.toSorted((a, b) => a - b),
    "homepage sections should follow the C1 client-facing structure order",
  );

  assert.doesNotMatch(homepage, /PlaceholderPage/);
});

test("client preview copy removes internal scaffold language", () => {
  const sourceFiles = [
    "app/layout.tsx",
    "components/shared/PlaceholderPage.tsx",
    "components/site/Footer.tsx",
    "lib/site-data.ts",
    ...readSourceFiles("components/home"),
  ];
  const source = sourceFiles.map((file) => readFileSync(join(root, file), "utf8")).join("\n");
  const normalizedSource = source.replace(/\s+/g, " ");
  const internalPhrases = [
    /Demo Scaffold/i,
    /demo scaffold/i,
    /Stage 3/i,
    /Nav-only placeholder/i,
    /validate sitemap coverage/i,
    /route wiring/i,
    /nav-only scaffold/i,
  ];

  assert.match(normalizedSource, /Venture Electronics Website Architecture Preview/);
  assert.match(
    normalizedSource,
    /public facts, capabilities, certifications, official channels, and evidence-backed claims/,
  );

  for (const phrase of internalPhrases) {
    assert.doesNotMatch(source, phrase);
  }
});

test("homepage emphasizes turnkey-first PCBA and bare-board coordination", () => {
  const hero = readFileSync(join(root, "components/home/HomeHero.tsx"), "utf8").replace(/\s+/g, " ");
  const heroCss = readFileSync(join(root, "app/globals.css"), "utf8").replace(/\s+/g, " ");
  const coreServices = readFileSync(join(root, "components/home/CoreServicesBlock.tsx"), "utf8").replace(/\s+/g, " ");
  const identity = readFileSync(join(root, "components/home/VentureIdentityBlock.tsx"), "utf8").replace(/\s+/g, " ");
  const projectPath = readFileSync(join(root, "components/home/ProjectPathStepper.tsx"), "utf8").replace(/\s+/g, " ");
  const emsBlock = readFileSync(join(root, "components/home/EMSBoxBuildBlock.tsx"), "utf8").replace(/\s+/g, " ");

  assert.match(hero, /Turnkey PCB Assembly \/ /);
  assert.match(hero, /PCBA and EMS Support for Electronics Projects/);
  assert.match(hero, /Turnkey-first PCB Assembly \/ PCBA/);
  assert.match(hero, /China-based manufacturing partner/);
  assert.match(heroCss, /url\("\/hero-pcba-smt\.jpg"\)/);
  assert.match(heroCss, /url\("\/hero-ems-factory\.jpg"\)/);
  assert.match(heroCss, /box-shadow:/);
  assert.match(hero, /BOM review/);
  assert.match(hero, /Component sourcing/);
  assert.match(hero, /PCB fabrication/);
  assert.doesNotMatch(hero, /under one accountable manufacturing partner/);
  assert.match(coreServices, /turnkey-first/);
  assert.match(coreServices, /label: "PCB Assembly \/ PCBA"/);
  assert.match(coreServices, /label: "Turnkey PCB Assembly"/);
  assert.match(coreServices, /label: "EMS & Box Build"/);
  assert.match(coreServices, /label: "Component Sourcing & BOM Review"/);
  assert.match(coreServices, /label: "PCB Fabrication"/);
  assert.match(identity, /human project ownership/);
  assert.match(identity, /small-to-medium volume/);
  assert.match(identity, /testing and quality planning/);
  assert.match(emsBlock, /turnkey PCB Assembly \/ PCBA remains the primary homepage inquiry entry/);
  assert.match(projectPath, /Assembly drawing/);
  assert.match(projectPath, /quantity/);
  assert.match(projectPath, /testing requirements/);
  assert.match(projectPath, /Review project files/);
  assert.doesNotMatch(projectPath, /Bare-board Coordination/);
  assert.doesNotMatch(projectPath, /be included or/);
  assert.ok(
    projectPath.indexOf("BOM Review & Component Sourcing") < projectPath.indexOf("PCB Fabrication"),
    "BOM review and sourcing should appear before PCB fabrication coordination",
  );
  assert.match(projectPath, /BOM Review & Component Sourcing/);
  assert.match(projectPath, /PCB Fabrication/);
  assert.match(projectPath, /Testing & Quality Control/);
  assert.match(projectPath, /EMS \/ Box Build \/ Delivery Support/);
  assert.match(projectPath, /index: "06"/);
});

test("brand clarification and official resources are readable GEO pages", () => {
  const brandPage = readFileSync(join(root, "app/brand/venture-electronics-vs-venture-pcb-pcba/page.tsx"), "utf8");
  const officialResourcesPage = readFileSync(join(root, "app/official-resources/page.tsx"), "utf8");
  const stage3Data = readFileSync(join(root, "lib/stage3-page-briefs.ts"), "utf8");

  assert.doesNotMatch(brandPage, /PlaceholderPage/);
  assert.doesNotMatch(officialResourcesPage, /PlaceholderPage/);
  assert.match(brandPage, /Stage3PageTemplate/);
  assert.match(officialResourcesPage, /Stage3PageTemplate/);
  assert.match(stage3Data, /Venture Electronics is the mother brand/);
  assert.match(stage3Data, /should not be confused with similarly named companies/);
  assert.match(stage3Data, /Official Venture Electronics Online Resources/);
  assert.match(stage3Data, /venture-mfg\.com/);
  assert.match(stage3Data, /venture-pcba\.com/);
  assert.match(stage3Data, /final official URL to be confirmed/);
});

test("RFQ guidance includes turnkey PCBA files and conditional requirements", () => {
  const rfq = readFileSync(join(root, "components/home/RFQGuidanceBlock.tsx"), "utf8");

  for (const item of [
    "Pick-and-place / CPL",
    "Assembly drawing",
    "NDA requirement, if applicable",
    "Firmware / programming requirement, if applicable",
    "Consigned / partially consigned parts, if applicable",
  ]) {
    assert.match(rfq, new RegExp(item.replaceAll("/", "\\/")));
  }
});

test("Stage 3 page briefs define server-rendered P0, P1, and P2 content structure", () => {
  const data = readFileSync(join(root, "lib/stage3-page-briefs.ts"), "utf8");
  const template = readFileSync(join(root, "components/stage3/Stage3PageTemplate.tsx"), "utf8");
  const css = readFileSync(join(root, "app/globals.css"), "utf8");

  assert.match(data, /export type Stage3PageBrief/);
  assert.match(data, /export const stage3PageBriefs/);
  assert.match(data, /priority: "P0"/);
  assert.match(data, /priority: "P1"/);
  assert.match(data, /priority: "P2"/);
  assert.match(data, /template: "service-conversion"/);
  assert.match(data, /template: "brand-authority"/);
  assert.match(data, /template: "quality-trust"/);
  assert.match(data, /template: "engineering-support"/);
  assert.match(data, /template: "industry"/);
  assert.match(data, /directAnswer:/);
  assert.match(data, /faqSeeds:/);
  assert.match(data, /claimNotes:/);
  assert.match(data, /Request a Quote/);

  for (const route of stage3TemplateRoutes) {
    assert.match(data, new RegExp(`route: "${route.replaceAll("/", "\\/")}"`), `${route} should have a Stage 3 brief`);
  }

  for (const componentName of [
    "Stage3Hero",
    "Stage3Section",
    "Stage3FAQ",
    "Stage3RelatedPages",
    "Stage3CTA",
  ]) {
    assert.match(template, new RegExp(componentName), `${componentName} should be used in the template`);
  }

  assert.match(css, /stage3-page/);
});

test("all non-home sitemap routes render Stage 3 templates", () => {
  const routePageFiles = readSourceFiles("app").filter((file) => file.endsWith("page.tsx") && file !== "app/page.tsx");
  const appSource = routePageFiles.map((file) => readFileSync(join(root, file), "utf8")).join("\n");
  const stage3PageFiles = new Set(stage3TemplateRoutes.map(routeToPageFile));

  for (const pageFile of routePageFiles) {
    const source = readFileSync(join(root, pageFile), "utf8");
    assert.equal(stage3PageFiles.has(pageFile), true, `${pageFile} should be listed as a Stage 3 route`);
    assert.match(source, /Stage3PageTemplate/, `${pageFile} should render Stage3PageTemplate`);
    assert.match(source, /stage3PageBriefs/, `${pageFile} should read from stage3PageBriefs`);
    assert.doesNotMatch(source, /PlaceholderPage/, `${pageFile} should not remain a placeholder`);
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

test("each Stage 3 template type has a distinct, plan-aligned rendering path", () => {
  const layouts = readMaybe("components/stage3/templateLayouts.ts");
  const template = readFileSync(join(root, "components/stage3/Stage3PageTemplate.tsx"), "utf8");
  const css = readFileSync(join(root, "app/globals.css"), "utf8");

  // A registry maps every template type to its own layout, and the page
  // template dispatches on it instead of rendering one fixed layout.
  assert.match(layouts, /export const templateLayouts/);
  assert.match(template, /templateLayouts/);

  for (const templateType of stage3TemplateTypes) {
    assert.match(
      layouts,
      new RegExp(`"${templateType}"`),
      `templateLayouts should define the ${templateType} template`,
    );
    assert.match(
      layouts,
      new RegExp(`stage3-page--${templateType}`),
      `${templateType} should map to a distinct wrapper class`,
    );
    assert.match(
      css,
      new RegExp(`stage3-page--${templateType}`),
      `${templateType} should have a template-specific CSS accent`,
    );
  }
});

test("Stage 3 sections render by their section type", () => {
  const sections = readMaybe("components/stage3/Stage3Sections.tsx");

  assert.match(sections, /Stage3Section/);

  for (const sectionType of stage3SectionTypes) {
    assert.match(
      sections,
      new RegExp(`"${sectionType}"`),
      `Stage3Sections should provide a renderer for the ${sectionType} section type`,
    );
  }
});
