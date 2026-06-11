# Venture Electronics 官网重建 — Stage 3 内容与 GEO 结构计划（中文人审版）

**文件用途：**给 Zbot / 客户沟通 / 设计与内容团队进行人工 review。  
**项目：**Venture Electronics GEO-friendly 官网重建  
**阶段：**Stage 3 — Content & GEO Structure  
**日期：**2026-06-04  
**状态：**Stage 3 planning draft，供确认后进入页面 brief、内容结构、wireframe-level layout 与 Stage 4 视觉设计。

---

## 0. 本文件的定位

Stage 3 不是最终英文页面文案，也不是 Figma 视觉稿。它的作用是把 Stage 1 / Stage 2 已经确认的品牌定位、服务层级、sitemap、导航结构和当前代码 scaffold，转换成每个页面可以执行的内容结构和页面 layout 规则。

换句话说：

> Stage 3 要回答“每个页面讲什么、按什么顺序讲、哪些内容必须是 HTML 可抓取文本、哪些 claim 需要证据、CTA 和内链怎么走”。

Stage 4 才会回答：

> 页面最终长什么样、组件视觉样式、色彩系统、响应式细节、设计稿 handoff。

---

## 1. 已检查的项目输入

本计划基于以下两类 repo 状态：

### 1.1 Website planning repo

核心输入：

- `04_website-planning/Venture官网重建_ImplementationPlanBreakdown_设计开发边界版.md`
- `04_website-planning/website-direction-notes.md`
- `00_context/venture-positioning-context.md`
- `00_context/client-communication-service-record.md`
- `00_context/decisions.md`

已确认方向：

1. Venture Electronics 是母品牌。
2. PCBA / PCB Assembly 是当前主要询盘入口。
3. EMS / Box Build 是更高价值的品牌高度。
4. PCB Fabrication 是 supporting capability，不应作为母品牌第一定位。
5. 新站要成为 Venture Electronics 的 AI-readable official source / canonical source，解释 Venture Electronics、Venture PCB、Venture PCBA、`venture-mfg.com`、`venture-pcba.com`、服务线和官方渠道之间的关系。
6. 所有强 claim 必须 evidence-gated。

### 1.2 Current website implementation repo

核心输入：

- `lib/site-data.ts`
- `app/page.tsx`
- `components/home/*`
- `components/shared/PlaceholderPage.tsx`
- `tests/scaffold.test.mjs`

当前状态判断：

1. Stage 2 的网站骨架已经存在：routes、nav、footer、sitemap 数据已在 `lib/site-data.ts` 中定义。
2. 首页已经不是 placeholder，已经拆成多个低保真业务 section。
3. 除首页外，当前大多数 route 仍是 `PlaceholderPage`。
4. 测试明确要求 non-home routes remain placeholder，因此 Stage 3 的重点是先定义页面 brief 和内容结构，不应跳过内容结构直接进入完整视觉开发。

---

## 2. Stage 3 的目标

Stage 3 需要完成以下目标：

1. 为 first build 核心页面生成 page brief。
2. 为不同页面类型定义可复用 layout / content module。
3. 明确每个页面的 direct answer / AI summary。
4. 明确每个页面应该回答的 buyer questions。
5. 明确 proof points 与 evidence needs。
6. 明确 CTA 路径与内部链接逻辑。
7. 标注 claim 风险，避免未证实的证书、规模、客户、产能等强声明。
8. 为 Stage 4 视觉设计和 Stage 5 前端实现提供稳定输入。

---

## 3. Stage 3 的非目标

Stage 3 不负责：

- 输出最终 UI 视觉稿。
- 完成所有页面的最终英文营销文案。
- 创建复杂 CMS 字段。
- 写 schema JSON-LD 代码。
- 决定未确认的证书、客户 logo、工厂规模、产能、行业合规声明是否可以公开。
- 把核心信息做成图片或不可抓取视觉元素。
- 在客户未确认 claim boundary 前发布强证明型内容。

---

## 4. Stage 3 总交付物

Stage 3 应输出以下内容：

| 交付物 | 用途 | 给谁用 |
|---|---|---|
| Page brief matrix | 页面责任、内容模块、CTA、内链、claim risk 一览 | 内容 / 设计 / 开发 |
| Template layout plan | 把 40+ route 归并为少数页面模板 | 设计 / 开发 |
| Core page briefs | P0 页面逐页内容结构 | 内容 / 客户 review |
| FAQ / buyer question map | 支撑 GEO 和转化 | 内容 / SEO / GEO |
| Proof & evidence needs list | 标注需要客户补证据的点 | 客户 / 内容 |
| CTA & internal linking map | 确认询盘路径和页面之间关系 | 内容 / 开发 |
| Implementation data contract | 英文给 Codex / Claude 使用 | 开发 / AI coding |
| Stage 4 handoff notes | 视觉设计输入 | 设计 |

---

## 5. 页面优先级

当前 route 较多，不建议 Stage 3 一次性把所有页面写成最终内容。建议按 P0 / P1 / P2 处理。

### 5.1 P0 — First build 核心页面

P0 页面用于第一版客户 review 和首轮实现。

| 页面 | Route | 责任 |
|---|---|---|
| Home | `/` | 定义母品牌、PCBA-first、EMS ceiling、信任路径和询盘入口 |
| About | `/about/` | 解释 Venture Electronics 是谁，使用 public-safe 公司身份 |
| Brand Clarification | `/brand/venture-electronics-vs-venture-pcb-pcba/` | 解释 Venture Electronics / Venture PCB / Venture PCBA / 域名关系 |
| Official Resources | `/official-resources/` | 列出确认官方域名、已知社媒和待确认渠道 |
| Services Hub | `/services/` | 按服务层级解释，而不是平铺关键词 |
| PCB Assembly / PCBA | `/services/pcb-assembly-pcba/` | 核心转化服务页 |
| Turnkey PCB Assembly | `/services/pcb-assembly-pcba/turnkey-pcb-assembly/` | 高意图询盘页 |
| Prototype & Low-volume PCBA | `/services/pcb-assembly-pcba/prototype-low-volume-pcba/` | 样品、小批量、工程验证询盘页 |
| SMT, THT & BGA Capabilities | `/services/pcb-assembly-pcba/smt-tht-bga-capabilities/` | 解释 assembly process capability |
| EMS & Box Build | `/services/ems-box-build/` | 高价值能力和品牌高度页面 |
| PCB Fabrication | `/services/pcb-fabrication/` | supporting service，不抢主定位 |
| Component Sourcing & BOM Review | `/services/component-sourcing-bom-review/` | 差异化和信任页 |
| Quality & Testing Hub | `/quality-testing/` | 质量能力总览 |
| Testing & Quality Control | `/quality-testing/testing-quality-control/` | 转化支撑，解释 AOI / ICT / FCT 等 |
| Engineering | `/engineering-support/` | 工程支持总览 |
| FAQ | `/resources/faq/` | 买家问题与 GEO answer page |
| Contact | `/contact/` | 联系入口 |
| Request a Quote | `/request-a-quote/` | 统一 RFQ 入口 |

### 5.2 P1 — 第二批结构页面

这些页面可以先使用同一模板和较短内容，不必首轮完全展开。

- `/quality-testing/electrical-testing/`
- `/quality-testing/product-reliability-testing/`
- `/quality-testing/testing-inspection-equipment/`
- `/quality-testing/quality-management-system/`
- `/quality-testing/packaging-logistics/`
- `/engineering-support/smt-tht-bga-process-support/`
- `/engineering-support/pcb-test-fixture-support/`
- `/engineering-support/ic-programming-support/`
- `/industries/`
- `/industries/industrial-electronics/`
- `/industries/iot-smart-devices/`
- `/industries/consumer-electronics/`
- `/industries/energy-power-electronics/`
- `/industries/automation-control/`
- `/industries/communication-equipment/`

### 5.3 P2 — Resource / legal / expansion pages

这些页面保留 route，但首轮可以轻量处理。

- `/resources/`
- `/resources/blog/`
- `/resources/guides/`
- `/resources/downloads/`
- `/resources/catalog/`
- `/resources/glossary/`
- `/resources/case-studies/`
- `/about/company-overview/`
- `/about/news/`
- `/thank-you/`
- `/privacy-policy/`
- `/terms/`
- `/sitemap/`

---

## 6. 全站页面模板规划

为了避免 40+ 页面全部单独设计，Stage 3 应先稳定页面模板。

### Template A — Homepage

适用：`/`

当前首页已有 section scaffold，可保留并升级内容。

推荐模块顺序：

1. Hero / direct positioning
2. Trust strip / quick facts，避免未证实强 claim
3. Typical project path
4. Venture identity / mother brand explanation
5. PCBA primary entry
6. PCBA child paths
7. EMS & Box Build strategic path
8. Support capabilities：PCB fabrication、component sourcing、testing、engineering
9. RFQ guidance：客户需要准备哪些资料
10. Brand authority teaser：引导到 Brand Clarification / Official Resources
11. Final CTA

Stage 3 重点：

- 首页必须说明 Venture Electronics 是 PCBA & EMS manufacturing partner。
- PCBA 是当前主要入口。
- EMS / Box Build 是高价值延展。
- Sourcing、DFM/BOM、Testing、Quality 是差异化和信任点。
- 避免 “No.1 manufacturer”、未证实规模、未确认认证等强 claim。

### Template B — Service Conversion Page

适用：

- PCBA / PCB Assembly
- Turnkey PCB Assembly
- Prototype & Low-volume PCBA
- SMT, THT & BGA Capabilities
- Component Sourcing & BOM Review

推荐模块：

1. Hero with direct answer
2. Who this service is for
3. What Venture can support
4. What files / information are needed for quotation
5. Process or workflow
6. Related support：BOM / DFM / sourcing / testing
7. Proof points and evidence needs
8. FAQ / buyer questions
9. Related services
10. CTA：Request a Quote

页面语气：务实、工程化、适合 B2B buyer，不夸大。

### Template C — Strategic Service Page

适用：

- EMS & Box Build
- future Cable Assembly / Final Assembly / System Integration，如客户确认后加入

推荐模块：

1. Hero：EMS / Box Build 与 PCBA 的关系
2. When buyers need EMS / Box Build
3. Scope：PCBA + sourcing + testing + final assembly + packaging / logistics coordination
4. What must be confirmed：mechanical parts、cables、enclosures、test requirements、packaging
5. Evidence-gated capability section
6. Process map
7. FAQ
8. CTA

注意：

- 不写成 Venture 拥有所有直接工厂能力。
- 可使用 “coordinate / support / partner network / production-line resources” 等谨慎语言。

### Template D — Supporting Capability Page

适用：

- PCB Fabrication
- 未来扩展 DFM / DFA / NPI support

推荐模块：

1. Hero：supporting capability, not core brand positioning
2. How it supports PCBA / Turnkey / EMS
3. What customers need to provide
4. Scope boundaries
5. Related downstream services
6. FAQ
7. CTA

### Template E — Quality / Trust Page

适用：

- Quality & Testing
- Testing & Quality Control
- Electrical Testing
- Product Reliability Testing
- Testing & Inspection Equipment
- Quality Management System
- Packaging & Logistics

推荐模块：

1. Hero：quality role in PCBA / EMS delivery
2. Testing / inspection methods overview
3. Where this appears in workflow
4. Equipment / method list，按证据状态标注
5. What customers can request
6. Claim risk / evidence-needed note，内部使用，不一定公开显示
7. FAQ
8. CTA

注意：

- ISO / UL 等证书必须按证据使用。
- ISO 13485、IATF 16949、AS9100、IPC Class 3 等不能无证据直接写成 Venture-held certification。

### Template F — Engineering Support Page

适用：

- Engineering support hub
- SMT, THT & BGA Process Support
- PCB Test Fixture Support
- IC Programming Support

推荐模块：

1. Hero：engineering support before / during production
2. Problems this page solves
3. Support scope
4. Inputs needed from customer
5. Related service links
6. FAQ
7. CTA

### Template G — Brand Authority Page

适用：

- About
- Brand Clarification
- Official Resources
- Company Overview

推荐模块：

1. Hero：official identity statement
2. AI summary / direct answer
3. Key facts table
4. Brand / domain / service relationship map
5. Confirmed official resources
6. Pending / unconfirmed resources handling
7. Public-safe claims only
8. FAQ
9. CTA / related pages

重点：

- 这类页面不是普通 marketing 页，而是 Venture 的 official explanation layer。
- 需要帮助 Google / AI / 客户理解 Venture Electronics、Venture PCB、Venture PCBA 和不同域名的关系。

### Template H — Industry Page

适用：

- Industries hub
- Industrial Electronics
- IoT & Smart Devices
- Consumer Electronics
- Energy & Power Electronics
- Automation & Control
- Communication Equipment

推荐模块：

1. Hero：industry application context
2. Common buyer needs in this industry
3. Relevant Venture services
4. Typical manufacturing concerns
5. Quality / testing considerations
6. FAQ
7. CTA

注意：

- 行业页应以 practical buyer questions 为主。
- 不要写成 Venture 已经有大量行业客户案例，除非证据确认。

### Template I — Resource Page

适用：

- FAQ
- Blog
- Guides
- Downloads
- Catalog
- Glossary
- Case Studies

推荐模块：

1. Resource hero
2. Search / category structure，后续可加
3. Question / article / download cards
4. Internal links to service pages
5. CTA

### Template J — Contact / RFQ Page

适用：

- Contact
- Request a Quote
- Thank You

推荐模块：

1. Hero：clear next step
2. RFQ checklist：Gerber、BOM、CPL / PnP、assembly drawing、testing requirements、quantity、target delivery
3. Contact options
4. Form fields
5. What happens after submission
6. Privacy / NDA reassurance，避免过度法律化
7. Related service links

---

## 7. P0 页面 brief 概要

### 7.1 Home

**页面目标：**定义 Venture Electronics 的新站定位，承接 PCBA-first 询盘，同时保留 EMS / Box Build 品牌高度。

**Direct answer：**Venture Electronics is a PCBA and EMS manufacturing partner for electronics product teams, with PCB assembly, sourcing, testing, and box-build coordination support.

**核心模块：**

1. Hero positioning
2. Project path stepper
3. Mother brand identity
4. PCBA primary service
5. PCBA path cards
6. EMS & Box Build
7. Supporting capabilities
8. RFQ guidance
9. Brand authority teaser
10. Final CTA

**主要 CTA：**Request a Quote  
**次要 CTA：**Explore PCB Assembly / PCBA  
**内链：**PCBA、Turnkey、EMS & Box Build、Component Sourcing、Quality & Testing、Brand Clarification、Official Resources

**Claim notes：**避免 No.1、top brands、factory scale、production volume、unsupported certification。

---

### 7.2 About

**页面目标：**用 public-safe 方式解释 Venture Electronics 是谁。

**核心模块：**

1. Official identity statement
2. Public-safe company positioning
3. What Venture supports：PCBA、EMS、sourcing、testing、quality coordination
4. What Venture should not be reduced to：not only PCB factory, not pure trading company
5. Brand relationship teaser
6. CTA

**Claim notes：**不公开内部法律结构，不夸大直接工厂归属。

---

### 7.3 Brand Clarification

**页面目标：**解决 Venture Electronics、Venture PCB、Venture PCBA、`venture-mfg.com`、`venture-pcba.com` 的关系混淆。

**核心模块：**

1. Direct answer
2. Mother brand vs service-entry terms
3. Domain relationship table
4. Service naming explanation
5. Guidance for vendors / AI / search systems
6. FAQ
7. Related links：Official Resources、About、Contact

**Claim notes：**避免把 Venture PCB 写成独立公司或母品牌。

---

### 7.4 Official Resources

**页面目标：**列出 Venture 官方资源和待确认资源，建立 canonical source。

**核心模块：**

1. Official resources direct answer
2. Confirmed domains
3. Confirmed social profiles
4. Pending / unconfirmed channels
5. How external vendors should refer to Venture
6. SameAs / schema preparation notes，内部给 SEO/GEO 使用
7. CTA

**Claim notes：**未确认 Facebook / VK 等不能直接放成 official。

---

### 7.5 Services Hub

**页面目标：**解释服务层级，而不是平铺所有服务。

**核心模块：**

1. Service hierarchy direct answer
2. Primary inquiry entry：PCBA / Turnkey / Prototype / SMT-THT-BGA
3. Strategic manufacturing scope：EMS / Box Build
4. Supporting capabilities：PCB fabrication、sourcing、testing、engineering
5. Manufacturing process overview
6. CTA

---

### 7.6 PCB Assembly / PCBA

**页面目标：**核心询盘服务页。

**核心模块：**

1. What PCBA means
2. Who this is for
3. Assembly scope
4. Quotation file checklist
5. Turnkey / prototype / SMT-THT-BGA path routing
6. BOM / DFM / sourcing / testing support
7. FAQ
8. CTA

**Primary CTA：**Request a PCBA Quote

---

### 7.7 Turnkey PCB Assembly

**页面目标：**承接“希望供应商负责 BOM、采购、PCB、装配、测试”的高意图用户。

**核心模块：**

1. Turnkey PCBA direct answer
2. What is included
3. What customer still needs to confirm
4. BOM review and sourcing process
5. Assembly and testing workflow
6. FAQ
7. CTA

**Claim notes：**不要暗示所有零件库存充足或无 MOQ，除非客户确认。

---

### 7.8 Prototype & Low-volume PCBA

**页面目标：**样品、小批量、工程验证项目询盘。

**核心模块：**

1. Prototype / low-volume direct answer
2. Use cases：EVT / DVT / engineering sample / small batch
3. Files needed
4. Engineering review
5. Testing options
6. Path to production
7. CTA

---

### 7.9 SMT, THT & BGA Capabilities

**页面目标：**解释 assembly process capability，支撑 PCBA 页和工程页。

**核心模块：**

1. Process capability overview
2. SMT / THT / BGA explanation
3. Design and manufacturing considerations
4. Inspection / testing linkage
5. Related services
6. FAQ
7. CTA

**Claim notes：**具体精度、最小 pitch、BGA/X-ray 能力如果无证据，需要 evidence-needed 标注。

---

### 7.10 EMS & Box Build

**页面目标：**抬高品牌高度，解释从 PCBA 到系统级组装的路径。

**核心模块：**

1. EMS / Box Build direct answer
2. Relationship to PCBA
3. When buyers need this
4. Coordination scope
5. Components / enclosure / cable / packaging checklist
6. Evidence-gated capability area
7. FAQ
8. CTA

---

### 7.11 PCB Fabrication

**页面目标：**作为 one-stop workflow 的 upstream supporting service。

**核心模块：**

1. PCB fabrication as supporting capability
2. How it supports PCBA / Turnkey / EMS
3. Gerber and stackup requirements
4. Fabrication-to-assembly workflow
5. Related pages
6. CTA

**Claim notes：**不把 Venture 定位成纯 PCB factory。

---

### 7.12 Component Sourcing & BOM Review

**页面目标：**突出 Venture 的供应链和 BOM 支持差异化。

**核心模块：**

1. BOM review direct answer
2. Common BOM risks
3. Sourcing coordination
4. Alternate / lifecycle / MOQ discussion
5. What customer must approve
6. Link to Turnkey PCBA
7. FAQ
8. CTA

**Claim notes：**替代料最终决定权应在客户；不要承诺所有料可替代。

---

### 7.13 Quality & Testing / Testing & Quality Control

**页面目标：**建立信任，支撑 PCBA / Turnkey / EMS 转化。

**核心模块：**

1. Quality and testing direct answer
2. Testing methods overview：AOI、SPI、X-ray、ICT、FCT、functional testing 等，按证据确认
3. Where testing fits in workflow
4. What customers can request
5. Quality documentation / packaging / logistics connection
6. FAQ
7. CTA

**Claim notes：**认证、设备清单、测试范围需要证据支持。

---

### 7.14 Engineering Support

**页面目标：**解释 DFM、process support、test fixture、IC programming 等如何降低生产风险。

**核心模块：**

1. Engineering support direct answer
2. Common problems before quote / before build
3. Support scope
4. Inputs needed
5. Related PCBA / testing pages
6. FAQ
7. CTA

---

### 7.15 FAQ

**页面目标：**集中回答真实买家问题，支撑 AI retrieval 和转化。

**推荐 FAQ 分组：**

1. Company / brand identity
2. PCBA quotation
3. Turnkey PCBA
4. BOM / component sourcing
5. Testing and quality
6. EMS / Box Build
7. Shipping / packaging
8. NDA / files / communication

---

### 7.16 Contact / Request a Quote

**页面目标：**统一询盘入口，减少用户不知道提交什么资料的问题。

**核心模块：**

1. Request quote direct answer
2. RFQ checklist
3. Form
4. Email / alternate contact
5. What happens next
6. Related pages

---

## 8. Claim boundary 规则

所有页面内容应按以下分类处理。

| 分类 | 处理方式 | 示例 |
|---|---|---|
| Public-safe | 可以公开使用 | PCBA、EMS partner、BOM review、sourcing support、testing support |
| Evidence-needed | 需要客户证据后才能强写 | factory scale、capacity、exact equipment specs、customer logos |
| Partner-network wording only | 只能用 partner network / routing 方式表达 | 医疗、汽车、航空相关特殊认证能力 |
| Internal-only | 不公开 | 内部法律结构、贸易公司结构、敏感合作关系 |
| Prohibited | 不写 | No.1、top brand clients、未证实认证、夸大产能 |

---

## 9. 全站 FAQ / Buyer Questions 初始池

Stage 3 不需要写最终答案，但需要确认问题结构。

### Brand / company

- Is Venture Electronics the same as Venture PCB or Venture PCBA?
- Which Venture website is the official source?
- Is Venture Electronics a PCB factory, PCBA supplier, or EMS partner?

### PCBA / RFQ

- What files are needed for a PCB assembly quotation?
- Can Venture help review my BOM before assembly?
- Does Venture support prototype or low-volume PCBA?
- What is the difference between PCBA and turnkey PCBA?

### Sourcing / BOM

- Can Venture source components for my project?
- What happens if some components are obsolete or long-lead?
- Who approves component substitutions?

### Testing / quality

- What testing can be arranged for a PCBA project?
- Can AOI, ICT, X-ray, or functional testing be included?
- What quality documents can be provided?

### EMS / Box Build

- When should I choose EMS or Box Build instead of PCBA only?
- What information is needed for a box build quotation?
- Can Venture coordinate PCBA, enclosure, cables, testing, and packaging?

### Logistics / communication

- How does the quotation process work?
- Can I sign an NDA before sending files?
- How does Venture communicate engineering questions during production?

---

## 10. Internal linking 逻辑

### 首页

- Hero CTA → Request a Quote
- Secondary CTA → PCBA
- PCBA section → Turnkey / Prototype / SMT-THT-BGA
- EMS section → EMS & Box Build
- Support capabilities → PCB Fabrication / Component Sourcing / Quality & Testing / Engineering
- Brand authority → Brand Clarification / Official Resources

### PCBA 页面

- Turnkey → Turnkey PCBA
- Prototype → Prototype & Low-volume PCBA
- Process capability → SMT, THT & BGA
- Support → Component Sourcing / Quality & Testing
- Final CTA → RFQ

### Brand pages

- About → Brand Clarification → Official Resources
- Official Resources → Contact / RFQ
- Brand Clarification → Services hub

### Quality pages

- Quality hub → Testing & Quality Control / Electrical Testing / Reliability / Inspection Equipment / QMS / Packaging
- Testing pages → PCBA / Turnkey / RFQ

### Industry pages

- Industry pages should link back to PCBA, Turnkey PCBA, EMS & Box Build, Quality & Testing, and RFQ.

---

## 11. Stage 3 到 Stage 4 的 handoff

Stage 3 完成后，设计团队应拿到：

1. 页面模板清单。
2. 每个模板的模块顺序。
3. P0 页面 brief。
4. 每个页面的主 CTA / 次 CTA。
5. 哪些模块是 proof / FAQ / key facts / process / related pages。
6. 哪些 claim 不能被视觉上做成强证明。
7. 图片需求：真实生产线、SMT/PCBA、testing、quality、engineering、factory environment，避免过度 AI 科幻图。
8. 色彩和 UI 系统可在 Stage 4 使用现有 palette：Deep Navy、Industrial Navy、Steel Blue、Cool Blue Gray、Tech Blue、Amber Copper 小面积点缀。

---

## 12. Stage 3 到开发 / Codex / Claude 的 handoff

建议英文实现文件中建立结构化数据，不直接硬写散落页面：

```ts
export type Stage3PageBrief = {
  route: string;
  priority: "P0" | "P1" | "P2";
  template: string;
  pageRole: string;
  h1: string;
  directAnswer: string;
  targetUserQuestions: string[];
  sections: {
    id: string;
    type: string;
    heading: string;
    purpose: string;
    requiredContent: string[];
  }[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  relatedPages: { label: string; href: string }[];
  faqSeeds: string[];
  claimNotes: string[];
};
```

开发实现原则：

1. 重要内容必须 server-rendered HTML。
2. FAQ、key facts、service scope、direct answer 不能只放在图片里。
3. P0 页面可以先由统一模板渲染，再进入 Stage 4 UI refine。
4. 首页现有 section 顺序可以保留，但文案与视觉需根据 Stage 3 brief 调整。
5. Non-home PlaceholderPage 应逐步替换为 template-driven stage 3 pages。
6. 测试应从 “non-home routes remain placeholder” 更新为 “P0 routes render Stage3PageTemplate / page brief data”。

---

## 13. Stage 3 验收标准

Stage 3 结束前应确认：

- P0 页面都有 page brief。
- 每类页面都有明确 template layout。
- 每个 P0 页面都有 direct answer / AI summary。
- 每个 P0 页面都有 FAQ seeds。
- 每个 P0 页面都有 CTA 和 related pages。
- Strong claims 已分类并标注风险。
- 设计团队能基于这些 brief 进入 Stage 4。
- 开发 / Codex / Claude 能基于英文 plan 建立结构化 page brief data。
- 客户可以 review 页面内容责任，而不是被迫 review 视觉细节。

---

## 14. 建议下一步

1. 先让内部团队确认 P0 / P1 / P2 划分。
2. 让客户确认 Brand Clarification 和 Official Resources 是否接受作为 first build 核心页。
3. 给客户确认社媒 / 官方渠道状态。
4. 内容团队基于本文件生成 P0 页面详细 brief。
5. Codex / Claude 基于英文版本建立 `stage3-page-briefs` 数据结构和 P0 模板页面。
6. Stage 4 再开始正式视觉系统和页面设计稿。

