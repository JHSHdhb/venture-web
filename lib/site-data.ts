export type SiteLink = {
  label: string;
  href: string;
};

export type NavItem = SiteLink & {
  children?: NavItem[];
};

export type ServiceItem = SiteLink & {
  role: string;
  description: string;
  children?: ServiceItem[];
};

export type PlaceholderPageData = SiteLink & {
  title: string;
  role: string;
  summary: string;
  cta: SiteLink;
  relatedLinks: SiteLink[];
};

export const routes = {
  home: "/",
  about: "/about/",
  brandClarification: "/brand/venture-electronics-vs-venture-pcb-pcba/",
  officialResources: "/official-resources/",
  companyOverview: "/about/company-overview/",
  news: "/about/news/",
  services: "/services/",
  pcba: "/services/pcb-assembly-pcba/",
  turnkey: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/",
  prototype: "/services/pcb-assembly-pcba/prototype-low-volume-pcba/",
  smtThtBga: "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/",
  emsBoxBuild: "/services/ems-box-build/",
  pcbFabrication: "/services/pcb-fabrication/",
  componentSourcingBomReview: "/services/component-sourcing-bom-review/",
  qualityTesting: "/quality-testing/",
  testingQualityControl: "/quality-testing/testing-quality-control/",
  electricalTesting: "/quality-testing/electrical-testing/",
  productReliabilityTesting: "/quality-testing/product-reliability-testing/",
  testingInspectionEquipment: "/quality-testing/testing-inspection-equipment/",
  qualityManagementSystem: "/quality-testing/quality-management-system/",
  packagingLogistics: "/quality-testing/packaging-logistics/",
  engineeringSupport: "/engineering-support/",
  smtThtBgaProcessSupport: "/engineering-support/smt-tht-bga-process-support/",
  pcbTestFixtureSupport: "/engineering-support/pcb-test-fixture-support/",
  icProgrammingSupport: "/engineering-support/ic-programming-support/",
  industries: "/industries/",
  industrialElectronics: "/industries/industrial-electronics/",
  iotSmartDevices: "/industries/iot-smart-devices/",
  consumerElectronics: "/industries/consumer-electronics/",
  energyPowerElectronics: "/industries/energy-power-electronics/",
  automationControl: "/industries/automation-control/",
  communicationEquipment: "/industries/communication-equipment/",
  resources: "/resources/",
  faq: "/resources/faq/",
  blog: "/resources/blog/",
  guides: "/resources/guides/",
  downloads: "/resources/downloads/",
  catalog: "/resources/catalog/",
  glossary: "/resources/glossary/",
  caseStudies: "/resources/case-studies/",
  contact: "/contact/",
  requestQuote: "/request-a-quote/",
  thankYou: "/thank-you/",
  privacyPolicy: "/privacy-policy/",
  terms: "/terms/",
  sitemap: "/sitemap/",
};

export const sitemapLinks: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  {
    label: "Venture Electronics vs Venture PCB / Venture PCBA",
    href: "/brand/venture-electronics-vs-venture-pcb-pcba/",
  },
  { label: "Official Resources", href: "/official-resources/" },
  { label: "Company Overview", href: "/about/company-overview/" },
  { label: "News", href: "/about/news/" },
  { label: "Services", href: "/services/" },
  { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
  { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
  { label: "Prototype & Low-volume PCBA", href: "/services/pcb-assembly-pcba/prototype-low-volume-pcba/" },
  { label: "SMT, THT & BGA Capabilities", href: "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/" },
  { label: "EMS & Box Build", href: "/services/ems-box-build/" },
  { label: "PCB Fabrication", href: "/services/pcb-fabrication/" },
  { label: "Component Sourcing & BOM Review", href: "/services/component-sourcing-bom-review/" },
  { label: "Quality & Testing", href: "/quality-testing/" },
  { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
  { label: "Electrical Testing", href: "/quality-testing/electrical-testing/" },
  { label: "Product Reliability Testing", href: "/quality-testing/product-reliability-testing/" },
  { label: "Testing & Inspection Equipment", href: "/quality-testing/testing-inspection-equipment/" },
  { label: "Quality Management System", href: "/quality-testing/quality-management-system/" },
  { label: "Packaging & Logistics", href: "/quality-testing/packaging-logistics/" },
  { label: "Engineering Support", href: "/engineering-support/" },
  { label: "SMT, THT & BGA Process Support", href: "/engineering-support/smt-tht-bga-process-support/" },
  { label: "PCB Test Fixture Support", href: "/engineering-support/pcb-test-fixture-support/" },
  { label: "IC Programming Support", href: "/engineering-support/ic-programming-support/" },
  { label: "Industries", href: "/industries/" },
  { label: "Industrial Electronics", href: "/industries/industrial-electronics/" },
  { label: "IoT & Smart Devices", href: "/industries/iot-smart-devices/" },
  { label: "Consumer Electronics", href: "/industries/consumer-electronics/" },
  { label: "Energy & Power Electronics", href: "/industries/energy-power-electronics/" },
  { label: "Automation & Control", href: "/industries/automation-control/" },
  { label: "Communication Equipment", href: "/industries/communication-equipment/" },
  { label: "Resources", href: "/resources/" },
  { label: "FAQ", href: "/resources/faq/" },
  { label: "Blog", href: "/resources/blog/" },
  { label: "Guides", href: "/resources/guides/" },
  { label: "Downloads", href: "/resources/downloads/" },
  { label: "Catalog", href: "/resources/catalog/" },
  { label: "Glossary", href: "/resources/glossary/" },
  { label: "Case Studies", href: "/resources/case-studies/" },
  { label: "Contact", href: "/contact/" },
  { label: "Request a Quote", href: "/request-a-quote/" },
  { label: "Thank You", href: "/thank-you/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
  { label: "Sitemap", href: "/sitemap/" },
];

const aboutLinks: NavItem[] = [
  { label: "About", href: routes.about },
  { label: "Venture Electronics vs Venture PCB / Venture PCBA", href: routes.brandClarification },
  { label: "Official Resources", href: routes.officialResources },
  { label: "Company Overview", href: routes.companyOverview },
  { label: "News", href: routes.news },
];

const pcbaChildren: ServiceItem[] = [
  {
    label: "Turnkey PCB Assembly",
    href: routes.turnkey,
    role: "PCBA child route for full-process delivery",
    description: "Nav-only placeholder for turnkey PCB assembly under PCB Assembly / PCBA.",
  },
  {
    label: "Prototype & Low-volume PCBA",
    href: routes.prototype,
    role: "PCBA child route for prototype and low-volume builds",
    description: "Nav-only placeholder for prototype and low-volume PCBA under PCB Assembly / PCBA.",
  },
  {
    label: "SMT, THT & BGA Capabilities",
    href: routes.smtThtBga,
    role: "PCBA child route for assembly capability navigation",
    description: "Nav-only placeholder for SMT, THT, and BGA capability routing under PCB Assembly / PCBA.",
  },
];

export const serviceHierarchy: ServiceItem[] = [
  {
    label: "PCB Assembly / PCBA",
    href: routes.pcba,
    role: "Primary service category and main conversion entry",
    description: "Nav-only placeholder for the primary PCB Assembly / PCBA service route.",
    children: pcbaChildren,
  },
  {
    label: "EMS & Box Build",
    href: routes.emsBoxBuild,
    role: "System-level manufacturing service route",
    description: "Nav-only placeholder for EMS and Box Build service navigation.",
  },
  {
    label: "PCB Fabrication",
    href: routes.pcbFabrication,
    role: "Supporting bare-board service route",
    description: "Nav-only placeholder for PCB fabrication as a supporting service.",
  },
  {
    label: "Component Sourcing & BOM Review",
    href: routes.componentSourcingBomReview,
    role: "Supply-chain and engineering support service route",
    description: "Nav-only placeholder for component sourcing and BOM review.",
  },
];

const qualityTestingLinks: NavItem[] = [
  { label: "Testing & Quality Control", href: routes.testingQualityControl },
  { label: "Electrical Testing", href: routes.electricalTesting },
  { label: "Product Reliability Testing", href: routes.productReliabilityTesting },
  { label: "Testing & Inspection Equipment", href: routes.testingInspectionEquipment },
  { label: "Quality Management System", href: routes.qualityManagementSystem },
  { label: "Packaging & Logistics", href: routes.packagingLogistics },
];

const engineeringSupportLinks: NavItem[] = [
  { label: "SMT, THT & BGA Process Support", href: routes.smtThtBgaProcessSupport },
  { label: "PCB Test Fixture Support", href: routes.pcbTestFixtureSupport },
  { label: "IC Programming Support", href: routes.icProgrammingSupport },
];

const industryLinks: NavItem[] = [
  { label: "Industrial Electronics", href: routes.industrialElectronics },
  { label: "IoT & Smart Devices", href: routes.iotSmartDevices },
  { label: "Consumer Electronics", href: routes.consumerElectronics },
  { label: "Energy & Power Electronics", href: routes.energyPowerElectronics },
  { label: "Automation & Control", href: routes.automationControl },
  { label: "Communication Equipment", href: routes.communicationEquipment },
];

const resourceLinks: NavItem[] = [
  { label: "FAQ", href: routes.faq },
  { label: "Blog", href: routes.blog },
  { label: "Guides", href: routes.guides },
  { label: "Downloads", href: routes.downloads },
  { label: "Catalog", href: routes.catalog },
  { label: "Glossary", href: routes.glossary },
  { label: "Case Studies", href: routes.caseStudies },
];

export const navItems: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about, children: aboutLinks },
  {
    label: "Services",
    href: routes.services,
    children: serviceHierarchy.map((service) => ({
      label: service.label,
      href: service.href,
      children: service.children?.map((child) => ({ label: child.label, href: child.href })),
    })),
  },
  { label: "Quality & Testing", href: routes.qualityTesting, children: qualityTestingLinks },
  { label: "Engineering Support", href: routes.engineeringSupport, children: engineeringSupportLinks },
  { label: "Industries", href: routes.industries, children: industryLinks },
  { label: "Resources", href: routes.resources, children: resourceLinks },
  { label: "Contact", href: routes.contact },
];

export const footerGroups: { title: string; links: SiteLink[] }[] = [
  { title: "About", links: aboutLinks },
  {
    title: "Services",
    links: serviceHierarchy.flatMap((service) => [
      { label: service.label, href: service.href },
      ...(service.children?.map((child) => ({ label: child.label, href: child.href })) ?? []),
    ]),
  },
  { title: "Quality & Testing", links: qualityTestingLinks },
  { title: "Engineering Support", links: engineeringSupportLinks },
  { title: "Industries", links: industryLinks },
  { title: "Resources", links: resourceLinks },
  {
    title: "Contact",
    links: [
      { label: "Contact", href: routes.contact },
      { label: "Request a Quote", href: routes.requestQuote },
      { label: "Thank You", href: routes.thankYou },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: routes.privacyPolicy },
      { label: "Terms", href: routes.terms },
      { label: "Sitemap", href: routes.sitemap },
    ],
  },
];

export const supportCapabilities = serviceHierarchy.slice(2);

function createPlaceholderPage(
  label: string,
  href: string,
  role: string,
  relatedLinks: SiteLink[],
): PlaceholderPageData {
  return {
    label,
    title: label,
    href,
    role,
    summary: `Nav-only placeholder for ${label}. This page exists to validate sitemap coverage, header navigation, footer grouping, and route wiring.`,
    cta: { label: "Request a Quote", href: routes.requestQuote },
    relatedLinks,
  };
}

const topLevelLinks: SiteLink[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Services", href: routes.services },
  { label: "Quality & Testing", href: routes.qualityTesting },
  { label: "Engineering Support", href: routes.engineeringSupport },
  { label: "Industries", href: routes.industries },
  { label: "Resources", href: routes.resources },
  { label: "Contact", href: routes.contact },
];

export const placeholderPages = {
  home: createPlaceholderPage("Home", routes.home, "Homepage placeholder for validating the nav-only scaffold.", [
    { label: "Services", href: routes.services },
    { label: "Quality & Testing", href: routes.qualityTesting },
    { label: "Request a Quote", href: routes.requestQuote },
  ]),
  about: createPlaceholderPage("About", routes.about, "About hub placeholder for company and authority routes.", aboutLinks),
  brandClarification: createPlaceholderPage(
    "Venture Electronics vs Venture PCB / Venture PCBA",
    routes.brandClarification,
    "Brand relationship placeholder under the About navigation group.",
    [
      { label: "About", href: routes.about },
      { label: "Official Resources", href: routes.officialResources },
      { label: "Contact", href: routes.contact },
    ],
  ),
  officialResources: createPlaceholderPage(
    "Official Resources",
    routes.officialResources,
    "Official online presence placeholder under the About navigation group.",
    [
      { label: "About", href: routes.about },
      { label: "Brand Clarification", href: routes.brandClarification },
      { label: "Contact", href: routes.contact },
    ],
  ),
  companyOverview: createPlaceholderPage(
    "Company Overview",
    routes.companyOverview,
    "Company overview placeholder under the About navigation group.",
    aboutLinks,
  ),
  news: createPlaceholderPage("News", routes.news, "News placeholder under the About navigation group.", aboutLinks),
  services: createPlaceholderPage("Services", routes.services, "Services hub placeholder for the service dropdown.", serviceHierarchy),
  pcba: createPlaceholderPage(
    "PCB Assembly / PCBA",
    routes.pcba,
    "Primary service placeholder with nested PCBA child routes.",
    pcbaChildren,
  ),
  turnkey: createPlaceholderPage("Turnkey PCB Assembly", routes.turnkey, "PCBA child route placeholder.", [
    { label: "PCB Assembly / PCBA", href: routes.pcba },
    { label: "Component Sourcing & BOM Review", href: routes.componentSourcingBomReview },
    { label: "Request a Quote", href: routes.requestQuote },
  ]),
  prototype: createPlaceholderPage("Prototype & Low-volume PCBA", routes.prototype, "PCBA child route placeholder.", [
    { label: "PCB Assembly / PCBA", href: routes.pcba },
    { label: "SMT, THT & BGA Capabilities", href: routes.smtThtBga },
    { label: "Request a Quote", href: routes.requestQuote },
  ]),
  smtThtBga: createPlaceholderPage("SMT, THT & BGA Capabilities", routes.smtThtBga, "PCBA child route placeholder.", [
    { label: "PCB Assembly / PCBA", href: routes.pcba },
    { label: "SMT, THT & BGA Process Support", href: routes.smtThtBgaProcessSupport },
    { label: "Request a Quote", href: routes.requestQuote },
  ]),
  emsBoxBuild: createPlaceholderPage("EMS & Box Build", routes.emsBoxBuild, "Service route placeholder.", [
    { label: "Services", href: routes.services },
    { label: "PCB Assembly / PCBA", href: routes.pcba },
    { label: "Request a Quote", href: routes.requestQuote },
  ]),
  pcbFabrication: createPlaceholderPage("PCB Fabrication", routes.pcbFabrication, "Service route placeholder.", [
    { label: "Services", href: routes.services },
    { label: "PCB Assembly / PCBA", href: routes.pcba },
    { label: "Request a Quote", href: routes.requestQuote },
  ]),
  componentSourcingBomReview: createPlaceholderPage(
    "Component Sourcing & BOM Review",
    routes.componentSourcingBomReview,
    "Service route placeholder.",
    [
      { label: "Services", href: routes.services },
      { label: "Turnkey PCB Assembly", href: routes.turnkey },
      { label: "Request a Quote", href: routes.requestQuote },
    ],
  ),
  qualityTesting: createPlaceholderPage(
    "Quality & Testing",
    routes.qualityTesting,
    "Quality and testing hub placeholder for the dropdown group.",
    qualityTestingLinks,
  ),
  testingQualityControl: createPlaceholderPage(
    "Testing & Quality Control",
    routes.testingQualityControl,
    "Quality and testing child route placeholder.",
    qualityTestingLinks,
  ),
  electricalTesting: createPlaceholderPage(
    "Electrical Testing",
    routes.electricalTesting,
    "Quality and testing child route placeholder.",
    qualityTestingLinks,
  ),
  productReliabilityTesting: createPlaceholderPage(
    "Product Reliability Testing",
    routes.productReliabilityTesting,
    "Quality and testing child route placeholder.",
    qualityTestingLinks,
  ),
  testingInspectionEquipment: createPlaceholderPage(
    "Testing & Inspection Equipment",
    routes.testingInspectionEquipment,
    "Quality and testing child route placeholder.",
    qualityTestingLinks,
  ),
  qualityManagementSystem: createPlaceholderPage(
    "Quality Management System",
    routes.qualityManagementSystem,
    "Quality and testing child route placeholder.",
    qualityTestingLinks,
  ),
  packagingLogistics: createPlaceholderPage(
    "Packaging & Logistics",
    routes.packagingLogistics,
    "Quality and testing child route placeholder.",
    qualityTestingLinks,
  ),
  engineeringSupport: createPlaceholderPage(
    "Engineering Support",
    routes.engineeringSupport,
    "Engineering support hub placeholder for the dropdown group.",
    engineeringSupportLinks,
  ),
  smtThtBgaProcessSupport: createPlaceholderPage(
    "SMT, THT & BGA Process Support",
    routes.smtThtBgaProcessSupport,
    "Engineering support child route placeholder.",
    engineeringSupportLinks,
  ),
  pcbTestFixtureSupport: createPlaceholderPage(
    "PCB Test Fixture Support",
    routes.pcbTestFixtureSupport,
    "Engineering support child route placeholder.",
    engineeringSupportLinks,
  ),
  icProgrammingSupport: createPlaceholderPage(
    "IC Programming Support",
    routes.icProgrammingSupport,
    "Engineering support child route placeholder.",
    engineeringSupportLinks,
  ),
  industries: createPlaceholderPage("Industries", routes.industries, "Industries hub placeholder.", industryLinks),
  industrialElectronics: createPlaceholderPage(
    "Industrial Electronics",
    routes.industrialElectronics,
    "Industry child route placeholder.",
    industryLinks,
  ),
  iotSmartDevices: createPlaceholderPage(
    "IoT & Smart Devices",
    routes.iotSmartDevices,
    "Industry child route placeholder.",
    industryLinks,
  ),
  consumerElectronics: createPlaceholderPage(
    "Consumer Electronics",
    routes.consumerElectronics,
    "Industry child route placeholder.",
    industryLinks,
  ),
  energyPowerElectronics: createPlaceholderPage(
    "Energy & Power Electronics",
    routes.energyPowerElectronics,
    "Industry child route placeholder.",
    industryLinks,
  ),
  automationControl: createPlaceholderPage(
    "Automation & Control",
    routes.automationControl,
    "Industry child route placeholder.",
    industryLinks,
  ),
  communicationEquipment: createPlaceholderPage(
    "Communication Equipment",
    routes.communicationEquipment,
    "Industry child route placeholder.",
    industryLinks,
  ),
  resources: createPlaceholderPage("Resources", routes.resources, "Resources hub placeholder.", resourceLinks),
  faq: createPlaceholderPage("FAQ", routes.faq, "Resource child route placeholder.", resourceLinks),
  blog: createPlaceholderPage("Blog", routes.blog, "Resource child route placeholder.", resourceLinks),
  guides: createPlaceholderPage("Guides", routes.guides, "Resource child route placeholder.", resourceLinks),
  downloads: createPlaceholderPage("Downloads", routes.downloads, "Resource child route placeholder.", resourceLinks),
  catalog: createPlaceholderPage("Catalog", routes.catalog, "Resource child route placeholder.", resourceLinks),
  glossary: createPlaceholderPage("Glossary", routes.glossary, "Resource child route placeholder.", resourceLinks),
  caseStudies: createPlaceholderPage("Case Studies", routes.caseStudies, "Resource child route placeholder.", resourceLinks),
  contact: createPlaceholderPage("Contact", routes.contact, "Contact route placeholder.", [
    { label: "Request a Quote", href: routes.requestQuote },
    { label: "Services", href: routes.services },
    { label: "Resources", href: routes.resources },
  ]),
  requestQuote: createPlaceholderPage("Request a Quote", routes.requestQuote, "RFQ route placeholder.", [
    { label: "Contact", href: routes.contact },
    { label: "Services", href: routes.services },
    { label: "Thank You", href: routes.thankYou },
  ]),
  thankYou: createPlaceholderPage("Thank You", routes.thankYou, "Post-submit placeholder route.", [
    { label: "Home", href: routes.home },
    { label: "Services", href: routes.services },
    { label: "Contact", href: routes.contact },
  ]),
  privacyPolicy: createPlaceholderPage("Privacy Policy", routes.privacyPolicy, "Legal route placeholder.", topLevelLinks),
  terms: createPlaceholderPage("Terms", routes.terms, "Legal route placeholder.", topLevelLinks),
  sitemap: createPlaceholderPage("Sitemap", routes.sitemap, "Sitemap placeholder route.", sitemapLinks),
};
