import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import test from "node:test";
import { join } from "node:path";

const root = process.cwd();

const requiredFiles = [
  "app/layout.tsx",
  "app/page.tsx",
  "app/globals.css",
  "app/about/page.tsx",
  "app/services/page.tsx",
  "app/services/pcb-assembly-pcba/page.tsx",
  "app/services/pcb-assembly-pcba/turnkey-pcb-assembly/page.tsx",
  "app/services/pcb-assembly-pcba/prototype-low-volume-pcba/page.tsx",
  "app/services/pcb-assembly-pcba/smt-tht-bga-capabilities/page.tsx",
  "app/services/ems-box-build/page.tsx",
  "app/services/pcb-fabrication/page.tsx",
  "app/services/component-sourcing-bom-review/page.tsx",
  "app/services/testing-quality-control/page.tsx",
  "app/brand/venture-electronics-vs-venture-pcb-pcba/page.tsx",
  "app/official-resources/page.tsx",
  "app/resources/faq/page.tsx",
  "app/contact/page.tsx",
  "components/site/Header.tsx",
  "components/site/Footer.tsx",
  "components/site/CTAButton.tsx",
  "components/home/Hero.tsx",
  "components/home/BrandPositioning.tsx",
  "components/home/ServicesOverview.tsx",
  "components/home/PCBAServiceBlock.tsx",
  "components/home/PCBAChildServicesBlock.tsx",
  "components/home/EMSBoxBuildBlock.tsx",
  "components/home/SupportCapabilitiesBlock.tsx",
  "components/home/BrandClarificationTeaser.tsx",
  "components/home/OfficialResourcesTeaser.tsx",
  "components/home/FinalCTA.tsx",
  "components/shared/PageShell.tsx",
  "components/shared/SectionHeader.tsx",
  "components/shared/ServiceCard.tsx",
  "components/shared/ServiceGroup.tsx",
  "components/shared/PlaceholderPage.tsx",
  "lib/site-data.ts",
];

const forbiddenPaths = [
  "app/capabilities/page.tsx",
  "app/services/ems-manufacturing/page.tsx",
  "app/services/box-build-assembly/page.tsx",
  "app/services/component-sourcing/page.tsx",
  "app/services/dfm-bom-review/page.tsx",
];

function readSourceFiles(dir) {
  return readdirSync(join(root, dir), { withFileTypes: true }).flatMap((entry) => {
    const relativePath = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      return readSourceFiles(relativePath);
    }

    return statSync(join(root, relativePath)).isFile() ? [relativePath] : [];
  });
}

test("creates the required Next.js App Router scaffold files", () => {
  for (const file of requiredFiles) {
    assert.equal(existsSync(join(root, file)), true, `${file} should exist`);
  }
});

test("does not create old or explicitly forbidden first-build service routes", () => {
  for (const file of forbiddenPaths) {
    assert.equal(existsSync(join(root, file)), false, `${file} should not exist`);
  }
});

test("site data preserves the updated Stage 2 service hierarchy", () => {
  const data = readFileSync(join(root, "lib/site-data.ts"), "utf8");

  assert.match(data, /PCB Assembly \/ PCBA/);
  assert.match(data, /Turnkey PCB Assembly/);
  assert.match(data, /Prototype & Low-volume PCBA/);
  assert.match(data, /SMT, THT & BGA Capabilities/);
  assert.match(data, /EMS & Box Build/);
  assert.match(data, /PCB Fabrication/);
  assert.match(data, /Component Sourcing & BOM Review/);
  assert.match(data, /Testing & Quality Control/);
  assert.doesNotMatch(data, /EMS Manufacturing/);
  assert.doesNotMatch(data, /Box Build Assembly/);
  assert.doesNotMatch(data, /DFM \/ BOM Review/);
});

test("homepage composes the required client-review demo sections", () => {
  const home = readFileSync(join(root, "app/page.tsx"), "utf8");

  for (const component of [
    "Hero",
    "BrandPositioning",
    "ServicesOverview",
    "PCBAServiceBlock",
    "PCBAChildServicesBlock",
    "EMSBoxBuildBlock",
    "SupportCapabilitiesBlock",
    "BrandClarificationTeaser",
    "OfficialResourcesTeaser",
    "FinalCTA",
  ]) {
    assert.match(home, new RegExp(`<${component} ?/?>`), `${component} should render on the homepage`);
  }
});

test("placeholder pages include summaries and the exact Stage 3 copy note", () => {
  const data = readFileSync(join(root, "lib/site-data.ts"), "utf8");
  const placeholder = readFileSync(join(root, "components/shared/PlaceholderPage.tsx"), "utf8");

  assert.match(data, /summary:/, "placeholder page data should include public-safe summaries");
  assert.match(placeholder, /summary/, "PlaceholderPage should render each page summary");
  assert.match(placeholder, /Final copy will be created in Stage 3\./);
});

test("footer includes the required contact link group", () => {
  const data = readFileSync(join(root, "lib/site-data.ts"), "utf8");

  assert.match(data, /title: "Contact"/);
  assert.match(data, /Email placeholder/);
  assert.match(data, /Quote form/);
  assert.match(data, /Location \/ contact details placeholder/);
});

test("required internal links from the structure lock are represented", () => {
  const data = readFileSync(join(root, "lib/site-data.ts"), "utf8");

  for (const route of [
    "routes.pcbFabrication",
    "routes.contact",
    "routes.brandClarification",
    "routes.officialResources",
  ]) {
    assert.match(data, new RegExp(route), `${route} should appear in related links`);
  }
});

test("visible scaffold source does not retain old flat service labels", () => {
  const source = readSourceFiles("app")
    .concat(readSourceFiles("components"), readSourceFiles("lib"))
    .map((file) => readFileSync(join(root, file), "utf8"))
    .join("\n");

  assert.doesNotMatch(source, /EMS Manufacturing/);
  assert.doesNotMatch(source, /Box Build Assembly/);
  assert.doesNotMatch(source, /DFM \/ BOM Review/);
});
