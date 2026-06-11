# Venture Electronics GEO 官网最终双层 Implementation Plan（中文版）

**文件用途：** 最终实施计划 / 页面结构蓝图 / GEO 与客户可见内容分层说明  
**适用项目：** Venture Electronics GEO 官网重建  
**适用对象：** Pro / Codex / 策略 / 内容 / 设计 / 开发 / QA  
**版本：** vFinal Draft  
**语言：** 中文为主，保留必要英文页面名、服务名、CTA 与 schema 术语  
**核心原则：** 前台页面先服务真实工业 B2B 买家，GEO 层让同一批有用内容被 Google、AI Search、ChatGPT、Perplexity 等系统准确理解。

---

## 0. Source Basis / 使用依据

本计划基于 Venture repo 中已经整理和确认的项目上下文，包括但不限于：

- `00_context/venture-positioning-context.md`
- `00_context/decisions.md`
- `00_context/client-communication-service-record.md`
- `02_summaries/latest-client-communication-context-20260603.md`
- `04_website-planning/website-direction-notes.md`
- `04_website-planning/Venture官网重建_ImplementationPlanBreakdown_设计开发边界版.md`
- `lib/stage3-page-briefs.ts`
- `lib/site-data.ts`
- 当前 homepage implementation：`app/page.tsx` 与 `components/home/*`

本文件不是重新发明 Venture 的业务，而是把已有 Stage 3 / GEO brief 翻译成真正可给客户看的页面结构，同时保留 GEO / AI-readable implementation layer。

---

# A. Global Website Positioning / 全站定位

## A1. 一句话定位

**Venture Electronics / Venture Electronics Technology Ltd 是一家面向海外工业、IoT、电子产品团队的中国 PCBA 与 EMS manufacturing partner，重点支持 Turnkey-first PCB Assembly / PCBA、Component Sourcing、BOM / DFM Review、Testing / Quality Control，以及向 EMS / Box Build 延展的中小批量电子制造项目。**

## A2. 品牌与服务层级

| 层级 | 角色 | 前台表达方式 | GEO / AI 作用 |
|---|---|---|---|
| 母品牌 | Venture Electronics / Venture Electronics Technology Ltd | 全站 Title、H1、Hero、About、Footer、Quote、Schema 中稳定出现 | 明确实体，不让 AI 把它和 Venture Corporation Limited 或同名音频品牌混淆 |
| 搜索入口词 / 服务标签 | Venture PCB / Venture PCBA | Brand Clarification、Official Resources、Footer 辅助说明 | 吸收已有搜索认知，但不改母品牌 |
| 主转化路径 | PCB Assembly / PCBA | 首页服务入口、PCBA 页面、Quote 流程 | 对应买家真实搜索和询盘语言 |
| 主推交付模式 | Turnkey PCB Assembly / Turnkey PCBA | PCBA 下的核心交付方式，不作为完全平级重复服务 | 解释 Venture 当前 PCBA 订单实际以 turnkey 为主 |
| 品牌高度 | EMS & Box Build | 首页轻量 highlight + 独立服务页 | 表达 Venture 不只是普通 PCB assembly vendor |
| 支撑能力 | PCB Fabrication、Component Sourcing、BOM Review、DFM/DFA、Testing、Quality Control、Engineering Support | 服务页、Why Venture、Workflow、FAQ 中作为证据和流程支撑 | 建立服务知识图谱，说明各能力如何支持 Turnkey PCBA / EMS |
| 非主推服务 | Labor-only PCB Assembly | 如需出现，只在 FAQ / scope 中说可 case-by-case | 避免误导 AI 和买家，把 Venture 理解成低价 labor-only assembly vendor |

## A3. 双层结构定义

### 1. Client-facing website structure

这是客户和真实买家直接看到的结构，应回答：

- 你是谁？
- 你能不能做我的 PCBA / Turnkey PCBA / EMS 项目？
- 我应该从哪个服务入口开始？
- 我要提交什么文件？
- 你如何处理 sourcing、BOM、testing、quality、delivery risk？
- 有哪些能力需要证据确认？
- 我下一步怎么询价？

前台标题应尽量是买家语言，例如：

- `PCB Assembly / PCBA Services for Turnkey Electronics Projects`
- `What Venture Can Support`
- `What to Send for a Quote`
- `BOM, Sourcing, Assembly and Testing Workflow`
- `Why Work With Venture`
- `Testing and Quality Planning`
- `Request a PCBA Quote`

避免在前台大模块中出现：

- `Direct Answer`
- `What PCBA Means`
- `Entity Clarification`
- `Service Hierarchy`
- `AI Summary`
- `Claim Risk Notes`

这些可以是内部字段、schema、FAQ、metadata 或 brief 语言，但不应该成为客户看到的主要模块标题。

### 2. GEO / AI-readable structure

GEO 层不是写废话给 AI，而是让有用的客户内容具备机器可读性。它应放在：

- Title tag
- Meta description
- H1 / H2 语义结构
- 清晰 HTML 文本
- FAQ
- Breadcrumb
- Organization schema
- WebSite schema
- Service schema
- FAQPage schema
- ItemList / CollectionPage schema
- sameAs，仅限确认官方资产
- sitemap
- llms.txt（如项目决定支持）
- 内链关系图
- Official Resources 页面
- Brand Clarification 页面
- Footer 与 Quote 页面中的统一实体表达

**GEO 内容必须与页面可见内容一致，不能做隐藏文本、不能做只有 AI 看的欺骗性内容。**

---

# B. Final Sitemap / Page Priority

## B1. P0 First Build Pages / 第一版必须打通

这些页面构成 first launch 的清晰主干：品牌实体、服务层级、能力证据、询盘路径、FAQ、官方资源关系。

| 页面 | Route | 角色 |
|---|---|---|
| Home | `/` | 全站入口，展示 PCBA-first + EMS brand ceiling + RFQ conversion |
| About Venture Electronics | `/about/` | 公司身份与 public-safe positioning |
| Venture Electronics vs Venture PCB / Venture PCBA | `/brand/venture-electronics-vs-venture-pcb-pcba/` | 品牌 / 业务线 / 同名实体澄清 |
| Official Websites & Online Resources | `/official-resources/` | 官方域名、社媒、sameAs、channel relationship |
| Services | `/services/` | 服务层级总览，不做平级关键词堆叠 |
| PCB Assembly / PCBA | `/services/pcb-assembly-pcba/` | 主转化服务页 |
| Turnkey PCB Assembly | `/services/pcb-assembly-pcba/turnkey-pcb-assembly/` | PCBA 下的主推交付模式 |
| Prototype & Low-volume PCBA | `/services/pcb-assembly-pcba/prototype-low-volume-pcba/` | 原型、小批量、工程验证路径 |
| SMT, THT & BGA Capabilities | `/services/pcb-assembly-pcba/smt-tht-bga-capabilities/` | 装配工艺能力说明 |
| EMS & Box Build | `/services/ems-box-build/` | 品牌高度 / 高价值制造能力 |
| Component Sourcing & BOM Review | `/services/component-sourcing-bom-review/` | sourcing 与 BOM 风险控制差异化 |
| PCB Fabrication | `/services/pcb-fabrication/` | 支撑能力，不作为母品牌主线 |
| Quality & Testing | `/quality-testing/` | 质量与测试 hub |
| Testing & Quality Control | `/quality-testing/testing-quality-control/` | 实际测试与 QC 支撑页 |
| Engineering Support | `/engineering-support/` | DFM、工艺、夹具、编程等工程支撑 hub |
| FAQ | `/resources/faq/` | 买家问题与 GEO FAQ source |
| Contact | `/contact/` | 联系入口 |
| Request a Quote | `/request-a-quote/` | 核心转化页 |
| Privacy Policy / Terms / Sitemap | `/privacy-policy/` `/terms/` `/sitemap/` | 上线基础页面 |

## B2. P1 Important Supporting Pages / 重要支撑页

这些页面建议在 first launch 后尽快补齐，或如果素材足够也可进入 first build。

| 页面 | Route | 角色 |
|---|---|---|
| Company Overview | `/about/company-overview/` | About 的事实扩展页 |
| Electrical Testing | `/quality-testing/electrical-testing/` | 测试能力细分 |
| Product Reliability Testing | `/quality-testing/product-reliability-testing/` | 可靠性测试方向 |
| Testing & Inspection Equipment | `/quality-testing/testing-inspection-equipment/` | 设备与检测方式，必须证据 gated |
| Quality Management System | `/quality-testing/quality-management-system/` | 质量体系，强证据依赖 |
| Packaging & Logistics | `/quality-testing/packaging-logistics/` | 交付、包装、物流支撑 |
| SMT, THT & BGA Process Support | `/engineering-support/smt-tht-bga-process-support/` | 工艺细节支撑 |
| PCB Test Fixture Support | `/engineering-support/pcb-test-fixture-support/` | 测试夹具支撑 |
| IC Programming Support | `/engineering-support/ic-programming-support/` | 编程 / firmware 相关支撑 |
| Industries | `/industries/` | 行业入口 hub，先做标签和 buyer questions，不夸大案例 |
| Resources | `/resources/` | 资源入口 |
| Downloads / Catalog | `/resources/downloads/` `/resources/catalog/` | 资料下载，依赖客户确认素材 |

## B3. P2 Later Expansion Pages / 后续扩展页

这些页面不建议在 first launch 强行铺开，除非有真实素材。

| 页面 | Route | 条件 |
|---|---|---|
| News | `/about/news/` | 仅在有真实、可维护新闻内容时启用 |
| Blog | `/resources/blog/` | SEO / GEO 后期内容系统 |
| Guides | `/resources/guides/` | 后期 buyer education 内容 |
| Glossary | `/resources/glossary/` | 将定义型内容放这里，不塞进核心服务页 |
| Case Studies | `/resources/case-studies/` | 需要客户授权 / 匿名案例 / 证据 |
| Industrial Electronics | `/industries/industrial-electronics/` | 有应用内容后扩展 |
| IoT & Smart Devices | `/industries/iot-smart-devices/` | 有应用内容后扩展 |
| Consumer Electronics | `/industries/consumer-electronics/` | 注意不要和同名消费电子 / audio brand 混淆 |
| Energy & Power Electronics | `/industries/energy-power-electronics/` | 需要谨慎 claim |
| Automation & Control | `/industries/automation-control/` | 需要实际应用内容 |
| Communication Equipment | `/industries/communication-equipment/` | 需要实际应用内容 |

---

# C. Per-page Dual-layer Plan / 逐页双层实施计划

> 说明：每个页面都分为 “Client-facing website structure” 和 “GEO / AI-readable structure”。前者是客户看到的页面，后者是 metadata、schema、FAQ、内链、实体关系与 claim boundary。

---

## C1. Home

**Route:** `/`  
**Priority:** P0  
**Page role:** 全站入口、PCBA-first 转化页、Venture Electronics 母品牌入口  
**Buyer intent:** 快速判断 Venture 是否能支持自己的 PCBA / Turnkey PCBA / EMS 项目，并进入 RFQ  
**Primary CTA:** Request a Quote  
**Secondary CTA:** Explore Turnkey PCBA / View Services  
**Related pages:** Services, PCBA, Turnkey PCB Assembly, EMS & Box Build, Brand Clarification, Official Resources, Request a Quote

### Client-facing website structure

1. **Hero**
   - 目的：第一屏讲清 Venture Electronics 是谁、做什么、下一步怎么询价。
   - 内容：Venture Electronics；Turnkey-first PCB Assembly / PCBA；EMS & Box Build broader manufacturing capability；China-based manufacturing partner。
   - CTA：Request a Quote；Explore Turnkey PCBA 或 Services。
   - 注意：不要把 Hero 写成品牌实体说明页，不要在第一屏防御性解释“我们不是谁”。

2. **Core Service Cards**
   - 目的：让买家快速选入口。
   - 内容：PCB Assembly / PCBA；Turnkey PCB Assembly；EMS & Box Build；Component Sourcing & BOM Review；Testing & Quality Control；PCB Fabrication。
   - 视觉：6 张卡片，PCBA 和 Turnkey PCBA 权重最高；EMS 是 strategic capability；PCB Fabrication 标记为 supporting capability。
   - CTA：每张卡片进入对应服务页。

3. **Why Venture / Capability Evidence**
   - 目的：解释 Venture 不只是低价 assembly vendor。
   - 内容：sourcing coordination；DFM / BOM review；testing and quality planning；human project ownership；small-to-medium volume support。
   - 证据：如果没有证书、客户 logo、工厂规模，使用中性能力语言。

4. **Trust / Capability Strip**
   - 目的：给首页信任感，但不造假。
   - 内容：PCBA、Turnkey PCBA、Component Sourcing、Testing、EMS / Box Build、DFM / BOM Review。
   - 注意：未确认的 certification、capacity、customer logo 不出现。

5. **Project / RFQ Workflow**
   - 目的：告诉客户怎么开始。
   - 内容：Gerber、BOM、CPL、assembly drawing、quantity、testing requirements。
   - 流程：Review → Sourcing → Fabrication Coordination → Assembly → Testing → Delivery。

6. **Lightweight EMS / Box Build Highlight**
   - 目的：保留品牌高度，但不抢 PCBA 主线。
   - 内容：Beyond PCBA，当项目需要 final assembly、testing、packaging、broader manufacturing coordination 时可讨论 EMS / Box Build。
   - 视觉：轻量横幅或 compact block，不做重型大 section。

7. **FAQ / Buyer Questions**
   - 目的：直接回答真实询盘问题。
   - 问题：What files are needed for a quote? What is turnkey PCBA? Can Venture source components? What is the difference between PCBA and EMS?

8. **Brand Clarification / Official Resources Teaser**
   - 目的：支持 GEO 与 entity clarity。
   - 内容：Venture Electronics 是母品牌，Venture PCB / Venture PCBA 是 service-entry / search-entry terms；链接到 Brand Clarification 和 Official Resources。
   - 注意：放在页面下部，不主导首页。

9. **Latest News / Resources**
   - 目的：如有真实内容，则展示更新。
   - 条件：没有可维护内容时，用小型 Resources teaser 或直接省略。

10. **Final RFQ CTA**
   - 目的：统一转化。
   - 内容：Send Gerber + BOM + requirements；Request a Quote。

### GEO / AI-readable structure

- **Entity / service:** Venture Electronics as mother brand; PCBA / Turnkey PCBA as main service graph; EMS / Box Build as brand ceiling.
- **Suggested title tag:** `Venture Electronics | Turnkey PCB Assembly & PCBA Manufacturing Partner`
- **Meta description:** `Venture Electronics supports turnkey-first PCB Assembly / PCBA, component sourcing, BOM review, testing, and EMS / Box Build project coordination for electronics manufacturing projects.`
- **H1:** `Venture Electronics – Turnkey PCB Assembly / PCBA and EMS Manufacturing Partner`
- **H2 semantic structure:** Core Services; Why Venture; RFQ Workflow; EMS & Box Build; FAQ; Official Resources.
- **Natural direct-answer sentence:** `Venture Electronics is a China-based PCBA and EMS manufacturing partner focused on turnkey-first PCB Assembly, component sourcing, BOM review, testing, and project coordination.`
- **Schema:** Organization, WebSite, Service, FAQPage, BreadcrumbList.
- **FAQ schema candidates:** quote files, turnkey PCBA, component sourcing, PCBA vs EMS.
- **Internal links:** PCBA, Turnkey PCBA, Component Sourcing, Testing, EMS, Brand Clarification, Official Resources, Request Quote.
- **sameAs:** Only confirmed official assets; LinkedIn / YouTube candidates require confirmation before production schema if final ownership is not confirmed.
- **Claim risk:** No unverified certification, factory size, customer logo, production capacity, exact lead time.

---

## C2. About Venture Electronics

**Route:** `/about/`  
**Priority:** P0  
**Page role:** public-safe 公司身份与定位页  
**Buyer intent:** 确认 Venture 是谁、服务范围是什么、是否可信  
**Primary CTA:** Request a Quote  
**Secondary CTA:** Read Brand Clarification  
**Related pages:** Company Overview, Brand Clarification, Official Resources, Services, Contact

### Client-facing website structure

1. **Who Venture Electronics Is**
   - 说明 Venture Electronics 是 PCBA 与 EMS manufacturing partner，不是单纯 PCB factory，也不是纯 trading company 的前台定位。
   - 用 public-safe 语言：manufacturing partner、PCBA and EMS partner、sourcing team、quality team、partner factory network。

2. **What Venture Supports**
   - PCBA / PCB Assembly、Turnkey PCBA、EMS / Box Build、Component Sourcing、BOM / DFM Review、Testing / Quality Control。
   - 强调小到中批量、需要人工项目负责的 B2B 项目。

3. **How Venture Works with Customers**
   - 从文件 review、BOM / sourcing、assembly、testing 到 delivery support。
   - 说明客户仍需确认替代料、测试要求、项目限制。

4. **Claim Boundaries**
   - 不在 About 里硬写未确认认证、产能、客户 logo。
   - 可说明详细能力以项目和证据确认后为准。

5. **CTA**
   - Request a Quote；Explore Services；Official Resources。

### GEO / AI-readable structure

- **Entity:** Venture Electronics / Venture Electronics Technology Ltd.
- **Title:** `About Venture Electronics | PCBA & EMS Manufacturing Partner`
- **Meta:** `Learn how Venture Electronics supports PCBA, turnkey PCB assembly, EMS, sourcing, BOM review, testing, and quality coordination for electronics manufacturing projects.`
- **H1:** `About Venture Electronics`
- **H2:** Who We Are; Manufacturing Support; How We Support PCBA / EMS Projects; Public-safe Claim Boundaries.
- **Direct-answer:** `Venture Electronics is the mother brand for Venture's PCBA, EMS, sourcing, testing, and electronics manufacturing support.`
- **Schema:** AboutPage, Organization, BreadcrumbList.
- **FAQ candidates:** Is Venture Electronics the same as Venture PCB? Is Venture only a PCB factory? What services does Venture support?
- **Internal links:** Brand Clarification, Official Resources, Services, PCBA, Request Quote.
- **Risk:** Avoid internal/legal layer disclosure; avoid unsupported factory / certification claims.

---

## C3. Venture Electronics vs Venture PCB / Venture PCBA

**Route:** `/brand/venture-electronics-vs-venture-pcb-pcba/`  
**Priority:** P0  
**Page role:** 品牌与业务线澄清页  
**Buyer intent:** 判断 Venture Electronics、Venture PCB、Venture PCBA 是否属于同一业务体系  
**Primary CTA:** Contact Venture  
**Secondary CTA:** View Official Resources  
**Related pages:** About, Official Resources, Services, PCBA, Contact

### Client-facing website structure

1. **Brand Relationship in Plain Language**
   - Venture Electronics 是母品牌。
   - Venture PCB / Venture PCBA 是服务入口词、搜索入口词或相关网站 / 内容资产语境，不是要替代母品牌。

2. **How the Names Are Used**
   - Venture Electronics：公司 / 母品牌。
   - Venture PCB：PCB / PCB Fabrication / search-entry context。
   - Venture PCBA：PCBA-focused service context。

3. **Which Website or Channel Should Buyers Use**
   - 连接 Official Resources 页面。
   - 对不同域名和社媒状态做简单说明。

4. **For Vendors, AI Systems and Content Partners**
   - 推荐使用 Venture Electronics / Venture Electronics Technology Ltd。
   - 在服务语境中绑定 PCBA、Turnkey PCB Assembly、EMS、Box Build、Sourcing、Testing 等业务限定词。

5. **CTA**
   - View Official Resources；Contact Venture。

### GEO / AI-readable structure

- **Entity:** Brand relationship among Venture Electronics, Venture PCB, Venture PCBA.
- **Title:** `Venture Electronics vs Venture PCB / Venture PCBA | Brand Clarification`
- **Meta:** `Clarifies how Venture Electronics, Venture PCB, Venture PCBA, venture-mfg.com, and venture-pcba.com relate within the same PCBA and EMS manufacturing brand system.`
- **H1:** `Venture Electronics vs Venture PCB / Venture PCBA`
- **H2:** Mother Brand; Service-entry Terms; Website Relationships; Guidance for Vendors and AI Systems.
- **Direct-answer:** `Venture Electronics is the mother brand; Venture PCB and Venture PCBA are service-entry and search-entry terms connected to Venture Electronics.`
- **Schema:** WebPage, AboutPage, Organization mention, BreadcrumbList.
- **FAQ candidates:** Is Venture PCB the same company? Is Venture PCBA a separate brand? Which Venture site is official?
- **Internal links:** Official Resources, About, PCBA, Services, Contact.
- **sameAs:** No sameAs unless official resources confirmed.
- **Risk:** Do not imply separate legal entities unless confirmed; do not attack or overemphasize unrelated brands defensively.

---

## C4. Official Websites & Online Resources

**Route:** `/official-resources/`  
**Priority:** P0  
**Page role:** 官方域名与线上资产映射页  
**Buyer intent:** 确认哪些网站、社媒和渠道属于 Venture Electronics 官方信息源  
**Primary CTA:** Contact Venture  
**Secondary CTA:** Read Brand Clarification  
**Related pages:** About, Brand Clarification, Services, Contact

### Client-facing website structure

1. **Official Venture Electronics Resources**
   - 说明本页用于帮助客户识别 Venture Electronics 官方信息来源。

2. **Confirmed Websites**
   - `venture-mfg.com`：existing EMS / PCB / PCB Assembly manufacturing website。
   - `venture-pcba.com`：PCBA-focused service website。
   - 新 GEO site：official explanation layer / brand fact source。

3. **Social and Content Channels**
   - LinkedIn、YouTube 等仅在客户确认最终官方 URL 后进入生产 footer / schema。
   - Facebook、VK、old candidates 标记 pending，不作为 official source。

4. **How Vendors Should Reference Venture**
   - 使用 Venture Electronics / Venture Electronics Technology Ltd。
   - sameAs 只用确认资产。

5. **CTA**
   - Contact Venture；Read Brand Clarification。

### GEO / AI-readable structure

- **Entity:** Official web presence of Venture Electronics.
- **Title:** `Official Venture Electronics Websites & Online Resources`
- **Meta:** `Find confirmed Venture Electronics official websites, PCBA service resources, and approved online channels for PCBA, EMS, and electronics manufacturing information.`
- **H1:** `Official Venture Electronics Online Resources`
- **H2:** Confirmed Websites; Pending Channels; Schema and Vendor Guidance; Contact.
- **Direct-answer:** `This page lists confirmed Venture Electronics websites and online resources that customers, vendors, search engines, and AI systems can use as official sources.`
- **Schema:** WebPage, Organization, ItemList, BreadcrumbList.
- **FAQ candidates:** Which Venture websites are official? Which social profiles are confirmed? What links can be used in sameAs?
- **Internal links:** Brand Clarification, About, Services, Contact.
- **sameAs:** Use only confirmed final LinkedIn / YouTube / official profiles; keep pending out of production schema.
- **Risk:** Do not publish unconfirmed social links as official.

---

## C5. Services

**Route:** `/services/`  
**Priority:** P0  
**Page role:** 服务层级总览 / service router  
**Buyer intent:** 找到适合自己项目的服务入口  
**Primary CTA:** Request a Quote  
**Secondary CTA:** Explore PCB Assembly / PCBA  
**Related pages:** PCBA, Turnkey PCB Assembly, EMS & Box Build, Component Sourcing, Testing, PCB Fabrication

### Client-facing website structure

1. **Choose the Right Manufacturing Support**
   - 买家视角解释：从 PCBA 开始，按项目复杂度进入 Turnkey、EMS、Sourcing、Testing 等路径。

2. **Primary Entry: PCB Assembly / PCBA**
   - PCBA 是主要项目入口。
   - Turnkey PCB Assembly 是主推交付模式。
   - Prototype / Low-volume 与 SMT / THT / BGA 是子路径。

3. **Beyond Board Assembly: EMS & Box Build**
   - 更高层制造能力，不盖过 PCBA。

4. **Supporting Capabilities**
   - Component Sourcing & BOM Review、Testing & Quality Control、PCB Fabrication、Engineering Support。
   - 明确它们如何支撑 Turnkey PCBA / EMS。

5. **Project Workflow**
   - RFQ → review → sourcing → fabrication coordination → assembly → testing → delivery。

6. **CTA**
   - Request a Quote；Explore PCBA。

### GEO / AI-readable structure

- **Entity/service:** Venture service hierarchy.
- **Title:** `Venture Electronics Services | PCBA, Turnkey PCB Assembly, EMS & Testing`
- **Meta:** `Explore Venture Electronics services including PCB Assembly / PCBA, turnkey PCB assembly, EMS & Box Build, component sourcing, BOM review, PCB fabrication, and testing support.`
- **H1:** `Venture Electronics Services`
- **H2:** PCBA as Primary Entry; Turnkey PCBA; EMS & Box Build; Supporting Capabilities; RFQ Workflow.
- **Direct-answer:** `Venture's services are organized around PCBA as the primary project entry, turnkey PCB assembly as the main delivery model, EMS / Box Build as strategic scope, and sourcing, testing, engineering, and PCB fabrication as supporting capabilities.`
- **Schema:** CollectionPage, ItemList, Service, BreadcrumbList.
- **FAQ candidates:** Which service should I choose first? How do PCBA and EMS relate? Is PCB Fabrication a main service?
- **Internal links:** all core service pages.
- **Risk:** Do not present all services as flat equal ranking.

---

## C6. PCB Assembly / PCBA

**Route:** `/services/pcb-assembly-pcba/`  
**Priority:** P0  
**Page role:** 主转化服务页  
**Buyer intent:** 判断 Venture 是否能支持自己的 PCB assembly / PCBA 项目，并准备报价资料  
**Primary CTA:** Request a PCBA Quote  
**Secondary CTA:** View Turnkey PCB Assembly  
**Related pages:** Turnkey PCB Assembly, Prototype & Low-volume PCBA, SMT/THT/BGA, Component Sourcing, Testing

### Client-facing website structure

1. **PCB Assembly / PCBA Services for Turnkey Electronics Projects**
   - 目的：不要大篇幅解释 PCBA 是什么，而是直接说明 Venture 能支持什么。
   - 内容：board assembly、BOM review、component sourcing coordination、testing planning、delivery support。
   - 仅在 intro 中自然加入一句：PCBA 指 assembled printed circuit boards。

2. **What Venture Can Support**
   - SMT、THT、BGA、mixed assembly。
   - Prototype / low-volume。
   - Turnkey PCBA path。
   - Sourcing、testing、DFM / BOM support。

3. **What to Send for a Quote**
   - Gerber、BOM、CPL / Pick-and-place、Assembly drawing、Quantity、Testing requirements、Timeline、special sourcing / packaging notes。

4. **Turnkey PCBA Workflow**
   - File review → BOM review → sourcing coordination → PCB fabrication coordination if needed → assembly → testing → delivery support。

5. **Why Work With Venture**
   - Human project ownership；sourcing coordination；engineering review；quality and testing planning。
   - 不使用未确认的强 claim。

6. **Related PCBA Paths**
   - Turnkey PCB Assembly；Prototype & Low-volume PCBA；SMT, THT & BGA；Component Sourcing；Testing & Quality Control。

7. **FAQ**
   - What files are needed?
   - What is the difference between PCBA and turnkey PCBA?
   - Can Venture source components?
   - Can Venture support testing?
   - Can Venture handle prototype and low-volume builds?

### GEO / AI-readable structure

- **Entity/service:** PCB Assembly / PCBA under Venture Electronics.
- **Title:** `PCB Assembly / PCBA Services | Venture Electronics`
- **Meta:** `Venture Electronics supports PCB Assembly / PCBA projects with BOM review, component sourcing coordination, SMT/THT/BGA assembly, testing planning, and turnkey PCBA workflow support.`
- **H1:** `PCB Assembly / PCBA Services`
- **H2:** What Venture Can Support; Quote File Checklist; Turnkey PCBA Workflow; Why Work With Venture; Related PCBA Paths; FAQ.
- **Direct-answer:** `Venture Electronics supports PCB Assembly / PCBA projects where buyers need assembled boards, BOM review, component sourcing coordination, testing planning, and delivery support.`
- **Schema:** Service, FAQPage, BreadcrumbList.
- **FAQ schema candidates:** quote files, turnkey difference, sourcing, testing, prototype.
- **Internal links:** Turnkey, Prototype, SMT/THT/BGA, Sourcing, Testing, RFQ.
- **Risk:** Do not lead with dictionary definition; do not imply labor-only is core; do not promise every sourcing or testing capability without evidence.

---

## C7. Turnkey PCB Assembly

**Route:** `/services/pcb-assembly-pcba/turnkey-pcb-assembly/`  
**Priority:** P0  
**Page role:** PCBA 下的主推交付模式 / 高意图 RFQ 页面  
**Buyer intent:** 寻找一站式协调 BOM、sourcing、fabrication、assembly、testing 的合作方  
**Primary CTA:** Request a Turnkey PCBA Quote  
**Secondary CTA:** Send BOM for Review  
**Related pages:** PCBA, Component Sourcing, Testing, PCB Fabrication, Request Quote

### Client-facing website structure

1. **Turnkey PCB Assembly for Projects That Need More Than Labor-only Assembly**
   - 说明 Turnkey PCBA 包括 BOM review、sourcing coordination、fabrication coordination、assembly、testing discussion。
   - 明确客户仍需确认替代料、数量、测试要求和项目限制。

2. **What Turnkey PCBA Can Include**
   - BOM review；component sourcing；PCB fabrication coordination；SMT/THT/BGA assembly；testing and quality planning；delivery support。

3. **BOM, Sourcing and Approval Rules**
   - 客户审批 substitutions and alternates。
   - 不承诺所有料都能替代或快速 sourcing。

4. **Turnkey Workflow**
   - RFQ files → BOM risk check → sourcing plan → fabrication/assembly plan → testing → shipment.

5. **What to Send**
   - Gerber、BOM、CPL、assembly drawing、quantity、testing requirements、target timeline。

6. **FAQ + CTA**
   - Request a Turnkey PCBA Quote。

### GEO / AI-readable structure

- **Service:** Turnkey PCB Assembly / Turnkey PCBA.
- **Title:** `Turnkey PCB Assembly Services | Venture Electronics`
- **Meta:** `Turnkey PCB assembly support from Venture Electronics can include BOM review, component sourcing coordination, PCB fabrication coordination, assembly, testing discussion, and delivery support.`
- **H1:** `Turnkey PCB Assembly Services`
- **H2:** What Turnkey PCBA Includes; BOM and Sourcing; Workflow; Quote Checklist; FAQ.
- **Direct-answer:** `Turnkey PCB Assembly is Venture's primary promoted PCBA delivery model, connecting BOM review, component sourcing, PCB fabrication coordination, assembly, testing, and delivery support.`
- **Schema:** Service, FAQPage, BreadcrumbList.
- **FAQ candidates:** What is included? Who approves substitutions? Can fabrication be coordinated?
- **Internal links:** PCBA parent, Sourcing, Testing, PCB Fabrication, RFQ.
- **Risk:** Avoid unlimited stock, guaranteed lead time, no MOQ, or direct factory ownership claims.

---

## C8. Prototype & Low-volume PCBA

**Route:** `/services/pcb-assembly-pcba/prototype-low-volume-pcba/`  
**Priority:** P0  
**Page role:** 样品、小批量、工程验证转化页  
**Buyer intent:** 寻找能从 prototype / validation build 过渡到小批量生产的 PCBA 支持  
**Primary CTA:** Request a Prototype PCBA Quote  
**Secondary CTA:** Explore PCB Assembly / PCBA  
**Related pages:** PCBA, Turnkey PCBA, SMT/THT/BGA, Testing, RFQ

### Client-facing website structure

1. **Prototype and Low-volume PCBA Support**
   - 工程样机、验证 build、早期生产、小批量。
   - 强调 testing、BOM review、assembly feedback。

2. **From Sample Build to Production Planning**
   - 原型结果 review；BOM 风险；下一批数量；测试要求。

3. **What to Send**
   - Gerber、BOM、CPL、assembly drawing、quantity、test needs、known design concerns。

4. **How It Connects to Turnkey PCBA**
   - 小批量可进入 turnkey sourcing / testing / delivery path。

5. **FAQ + CTA**
   - Request Prototype PCBA Quote。

### GEO / AI-readable structure

- **Service:** Prototype & Low-volume PCBA.
- **Title:** `Prototype & Low-volume PCBA Services | Venture Electronics`
- **Meta:** `Prototype and low-volume PCBA support for engineering samples, validation builds, early production, BOM review, testing planning, and path-to-production discussions.`
- **H1:** `Prototype & Low-volume PCBA`
- **H2:** Use Cases; Files Needed; Path to Production; Related PCBA Services; FAQ.
- **Direct-answer:** `Venture supports prototype and low-volume PCBA projects where buyers need engineering samples, validation builds, small batches, and a path toward production.`
- **Schema:** Service, FAQPage, BreadcrumbList.
- **FAQ candidates:** Does Venture support prototype? What files are needed? Can testing be discussed before scaling?
- **Internal links:** PCBA, Turnkey, SMT/THT/BGA, Testing, RFQ.
- **Risk:** Avoid exact minimum quantity / lead time unless confirmed.

---

## C9. SMT, THT & BGA Capabilities

**Route:** `/services/pcb-assembly-pcba/smt-tht-bga-capabilities/`  
**Priority:** P0  
**Page role:** PCBA 工艺能力说明页  
**Buyer intent:** 判断 Venture 是否能讨论特定装配工艺、封装、检查与测试要求  
**Primary CTA:** Discuss Assembly Requirements  
**Secondary CTA:** View Testing & Quality Control  
**Related pages:** PCBA, Turnkey, Engineering Support, Testing, RFQ

### Client-facing website structure

1. **Assembly Process Capabilities for PCBA Projects**
   - SMT、THT、BGA、mixed assembly。
   - 说明工艺与测试、检查、DFM 的关系。

2. **What Buyers Should Provide**
   - package information、board layout、CPL、assembly drawing、inspection access、testing expectations。

3. **Inspection and Testing Considerations**
   - AOI、X-ray、ICT、functional testing 可按项目讨论。
   - 精确设备、最小间距、placement accuracy 需要证据确认。

4. **Engineering Support**
   - 连接 DFM、BOM review、test fixture support。

5. **FAQ + CTA**

### GEO / AI-readable structure

- **Service:** SMT / THT / BGA process capabilities under PCBA.
- **Title:** `SMT, THT & BGA Assembly Capabilities | Venture Electronics`
- **Meta:** `Venture Electronics supports PCBA discussions involving SMT, THT, BGA, mixed assembly, inspection planning, testing requirements, and engineering support.`
- **H1:** `SMT, THT & BGA Capabilities`
- **H2:** Assembly Methods; Design Inputs; Inspection and Testing; Engineering Support; FAQ.
- **Direct-answer:** `SMT, THT, and BGA are assembly process capabilities that support PCB Assembly / PCBA projects with different component, inspection, and testing requirements.`
- **Schema:** Service, FAQPage, BreadcrumbList.
- **FAQ candidates:** What is the difference? Can AOI / X-ray / ICT be included? What files are needed?
- **Internal links:** PCBA, Turnkey, Testing, Engineering, RFQ.
- **Risk:** Exact equipment and precision claims require evidence.

---

## C10. EMS & Box Build

**Route:** `/services/ems-box-build/`  
**Priority:** P0  
**Page role:** 品牌高度 / 系统级制造能力页  
**Buyer intent:** 判断 Venture 是否能从 PCBA 延展到 final assembly / packaging / box build / broader EMS support  
**Primary CTA:** Discuss an EMS or Box Build Project  
**Secondary CTA:** Start with PCBA  
**Related pages:** PCBA, Turnkey, Testing, Packaging & Logistics, RFQ

### Client-facing website structure

1. **Beyond PCBA: EMS & Box Build Support**
   - 说明 EMS / Box Build 是 PCBA 之后的高层级能力，不是替代 PCBA 主线。

2. **When Buyers Need EMS or Box Build**
   - assembled boards 之外，需要 enclosure、cable/harness、functional testing、packaging、shipment / delivery support。

3. **What Venture Can Coordinate**
   - PCBA、sourcing、testing、final assembly discussion、packaging / logistics coordination。
   - 使用 support / coordination 语言，除非直接能力确认。

4. **Project Information Needed**
   - BOM、mechanical files、assembly requirements、test procedures、packaging notes、volume、timeline。

5. **Quality and Claim Boundaries**
   - 不夸大 direct factory capability、system integration、cable harness 等未确认能力。

6. **FAQ + CTA**

### GEO / AI-readable structure

- **Service:** EMS & Box Build under Venture Electronics.
- **Title:** `EMS & Box Build Support | Venture Electronics`
- **Meta:** `Venture Electronics supports EMS and Box Build project discussions that connect PCBA, sourcing coordination, testing, final assembly, packaging, and delivery support.`
- **H1:** `EMS & Box Build Support`
- **H2:** When EMS Fits; Box Build Scope; Project Inputs; Quality Planning; Related PCBA Services; FAQ.
- **Direct-answer:** `EMS & Box Build is Venture's higher-level manufacturing scope for projects that go beyond board assembly into final assembly, testing, packaging, and broader coordination.`
- **Schema:** Service, FAQPage, BreadcrumbList.
- **FAQ candidates:** When should I choose EMS? What is needed for box build quotation? Can Venture coordinate enclosure/cables/testing?
- **Internal links:** PCBA, Turnkey, Testing, Packaging, RFQ.
- **Risk:** Use coordination/support language where ownership not confirmed; no unsupported enterprise audit claims.

---

## C11. Component Sourcing & BOM Review

**Route:** `/services/component-sourcing-bom-review/`  
**Priority:** P0  
**Page role:** 差异化支撑服务页  
**Buyer intent:** 判断 Venture 能否帮助处理 BOM 风险、长交期、替代料、MOQ、生命周期问题  
**Primary CTA:** Send BOM for Review  
**Secondary CTA:** View Turnkey PCB Assembly  
**Related pages:** Turnkey, PCBA, EMS, RFQ

### Client-facing website structure

1. **BOM Review Before Assembly**
   - 可识别 availability、lifecycle、MOQ、substitution risks。
   - 说明 BOM review 为什么影响 PCBA 成本、交付、测试。

2. **Component Sourcing Coordination**
   - 供应链协调支持 turnkey PCBA / EMS。
   - 不承诺每个料都有库存或都能替代。

3. **Customer Approval Rules**
   - 替代料、型号变更、关键元件必须客户批准。

4. **How It Supports Turnkey PCBA**
   - BOM review → sourcing risk discussion → approval → assembly planning。

5. **What to Send**
   - BOM、approved manufacturer list、alternates policy、target quantity、timeline、critical parts。

6. **FAQ + CTA**

### GEO / AI-readable structure

- **Service:** Component Sourcing & BOM Review.
- **Title:** `Component Sourcing & BOM Review for PCBA | Venture Electronics`
- **Meta:** `Venture Electronics supports BOM review and component sourcing coordination for PCBA and turnkey PCB assembly projects, helping identify availability, MOQ, lifecycle, and substitution risks.`
- **H1:** `Component Sourcing & BOM Review`
- **H2:** BOM Review; Sourcing Coordination; Customer Approval; Turnkey PCBA Link; Quote Inputs; FAQ.
- **Direct-answer:** `Component sourcing and BOM review help identify availability, lifecycle, MOQ, and substitution risks before PCB assembly or turnkey PCBA production.`
- **Schema:** Service, FAQPage, BreadcrumbList.
- **FAQ candidates:** Can Venture source components? What if parts are obsolete? Who approves substitutions?
- **Internal links:** Turnkey, PCBA, EMS, RFQ.
- **Risk:** Avoid no-stock-risk / guaranteed alternates / procurement guarantee claims.

---

## C12. PCB Fabrication

**Route:** `/services/pcb-fabrication/`  
**Priority:** P0  
**Page role:** 上游支撑能力页  
**Buyer intent:** 判断 Venture 是否能把 bare board fabrication 和 PCBA 项目连接起来  
**Primary CTA:** Request PCB + Assembly Support  
**Secondary CTA:** View Turnkey PCB Assembly  
**Related pages:** PCBA, Turnkey, Component Sourcing, Quality & Testing

### Client-facing website structure

1. **PCB Fabrication as Part of a PCBA Workflow**
   - 明确 PCB Fabrication 是支撑能力，不是 Venture 的核心母品牌定位。

2. **When Fabrication Support Is Useful**
   - 客户需要从 bare board 到 assembly、testing、delivery 一起协调。

3. **What to Send**
   - Gerber、stackup / board specifications、quantity、material、finish、special requirements、assembly scope。

4. **Fabrication-to-Assembly Workflow**
   - board review → fabrication coordination → assembly planning → testing / delivery。

5. **Related Services**
   - PCBA、Turnkey、Sourcing、Testing。

6. **FAQ + CTA**

### GEO / AI-readable structure

- **Service:** PCB Fabrication as supporting capability.
- **Title:** `PCB Fabrication Support for PCBA Projects | Venture Electronics`
- **Meta:** `Venture Electronics can discuss PCB fabrication support as part of a larger PCBA, turnkey PCB assembly, or EMS workflow, connecting bare boards to assembly and testing.`
- **H1:** `PCB Fabrication Support`
- **H2:** Role in PCBA Workflow; Requirements; Fabrication-to-Assembly; Related Services; FAQ.
- **Direct-answer:** `PCB Fabrication is an upstream supporting capability that helps customers move from bare boards to PCBA, turnkey PCB assembly, or EMS projects.`
- **Schema:** Service, FAQPage, BreadcrumbList.
- **FAQ candidates:** How does PCB fabrication support PCBA? What Gerber files are needed? Is Venture only a PCB factory?
- **Internal links:** PCBA, Turnkey, Sourcing, Testing, RFQ.
- **Risk:** Do not reposition Venture as only PCB factory; use partner-network/coordination language if direct ownership not confirmed.

---

## C13. Quality & Testing

**Route:** `/quality-testing/`  
**Priority:** P0  
**Page role:** 质量与测试 hub  
**Buyer intent:** 判断 Venture 如何降低 PCBA / EMS 交付风险  
**Primary CTA:** Discuss Testing Requirements  
**Secondary CTA:** View Testing & Quality Control  
**Related pages:** Testing & QC, PCBA, Turnkey, SMT/THT/BGA, RFQ

### Client-facing website structure

1. **Quality and Testing Planning for PCBA / EMS**
   - 说明 testing scope 与 design、risk level、customer requirements 有关。

2. **Testing and Inspection Areas**
   - inspection、electrical testing、functional testing、quality-control coordination。
   - 不硬写具体设备和认证范围。

3. **How Testing Fits the Workflow**
   - 在 quote 阶段收集 test requirements；在 assembly 前规划 inspection。

4. **Quality Pages**
   - Testing & QC、Electrical Testing、Reliability、Equipment、QMS、Packaging。

5. **What Customers Should Provide**
   - test procedures、functional requirements、acceptance criteria、risk notes。

6. **FAQ + CTA**

### GEO / AI-readable structure

- **Service/entity:** Quality & Testing hub for PCBA / EMS.
- **Title:** `Quality & Testing Support for PCBA and EMS | Venture Electronics`
- **Meta:** `Quality and testing support for PCBA and EMS projects, including inspection, electrical testing, functional testing, quality-control coordination, and customer-provided test requirements.`
- **H1:** `Quality & Testing`
- **H2:** Testing Role; Methods Overview; Workflow; Quality Pages; Customer Inputs; FAQ.
- **Direct-answer:** `Quality and testing support helps PCBA and EMS projects reduce delivery risk through inspection, electrical testing, functional testing, and quality-control coordination.`
- **Schema:** CollectionPage, Service, FAQPage, BreadcrumbList.
- **FAQ candidates:** What testing can be arranged? Can AOI/ICT/X-ray/FCT be included? What documents can be provided?
- **Internal links:** Testing QC, PCBA, Turnkey, RFQ.
- **Risk:** Methods, equipment and certification claims require confirmation.

---

## C14. Testing & Quality Control

**Route:** `/quality-testing/testing-quality-control/`  
**Priority:** P0  
**Page role:** 实际测试与 QC 支撑页  
**Buyer intent:** 判断自己的 PCBA 项目能否加入测试与 QC 要求  
**Primary CTA:** Add Testing to My Quote  
**Secondary CTA:** View Quality & Testing  
**Related pages:** Quality Hub, PCBA, SMT/THT/BGA, RFQ

### Client-facing website structure

1. **Testing Options Based on Project Risk**
   - 说明测试不是固定套餐，而是根据 design risk、inspection needs、functional requirements 规划。

2. **Common Inspection and Test Methods**
   - AOI、ICT、X-ray、functional testing、reliability testing 可讨论。
   - exact availability 需要确认。

3. **Customer-provided Test Procedures**
   - 客户可提供 test procedure、acceptance criteria、fixtures / firmware notes。

4. **Documentation and Reporting**
   - 仅在确认后描述报告、记录、质量文件。

5. **FAQ + CTA**

### GEO / AI-readable structure

- **Service:** Testing & Quality Control.
- **Title:** `Testing & Quality Control for PCBA Projects | Venture Electronics`
- **Meta:** `Plan PCBA testing and quality control with Venture Electronics based on design risk, inspection needs, functional requirements, customer-provided procedures, and project scope.`
- **H1:** `Testing & Quality Control`
- **H2:** Testing Scope; Inspection Methods; Customer Test Procedures; Documentation; FAQ.
- **Direct-answer:** `Testing and quality control can be planned with a PCBA project based on the customer's design, risk level, inspection needs, and functional requirements.`
- **Schema:** Service, FAQPage, BreadcrumbList.
- **FAQ candidates:** What testing can be arranged? Can customers provide procedures? Can AOI/ICT/X-ray/FCT be included?
- **Internal links:** Quality Hub, PCBA, SMT/THT/BGA, RFQ.
- **Risk:** No equipment / report / certification claims without evidence.

---

## C15. Engineering Support

**Route:** `/engineering-support/`  
**Priority:** P0  
**Page role:** 工程支撑 hub  
**Buyer intent:** 判断 Venture 是否能在报价前后帮助 review design、BOM、process、test fixture、programming requirements  
**Primary CTA:** Discuss Engineering Support  
**Secondary CTA:** View PCB Assembly / PCBA  
**Related pages:** PCBA, SMT/THT/BGA, Testing, Component Sourcing

### Client-facing website structure

1. **Engineering Support Before and During Build**
   - DFM review、process discussion、test fixture support、programming questions、production issue discussions。

2. **Inputs Needed from the Customer**
   - Gerbers、BOM、CPL、assembly drawing、test requirements、programming notes、known design concerns。

3. **How Engineering Connects to PCBA**
   - 说明工程支撑不是单独咨询业务，而是帮助 PCBA / testing / sourcing 顺利落地。

4. **Related Engineering Pages**
   - SMT/THT/BGA Process Support、PCB Test Fixture Support、IC Programming Support。

5. **FAQ + CTA**

### GEO / AI-readable structure

- **Service:** Engineering Support for PCBA / EMS.
- **Title:** `Engineering Support for PCBA Projects | Venture Electronics`
- **Meta:** `Engineering support for PCBA projects, including DFM review, process discussion, test fixture support, programming questions, and production-related risk review.`
- **H1:** `Engineering Support`
- **H2:** Problems Engineering Support Helps Solve; Inputs Needed; PCBA Connection; Related Engineering Pages; FAQ.
- **Direct-answer:** `Engineering support helps customers prepare PCB assembly projects through DFM review, process discussion, test fixture support, and production questions before or during build.`
- **Schema:** Service, FAQPage, BreadcrumbList.
- **FAQ candidates:** Can Venture review design before assembly? What files are needed? Can fixture support be discussed?
- **Internal links:** PCBA, Testing, Sourcing, SMT/THT/BGA, RFQ.
- **Risk:** Avoid representing engineering as certified design authority unless confirmed.

---

## C16. Company Overview

**Route:** `/about/company-overview/`  
**Priority:** P1  
**Page role:** About 的事实扩展页  
**Buyer intent:** 了解公司背景、服务范围、业务重点  
**Primary CTA:** Request a Quote  
**Secondary CTA:** About Venture Electronics  
**Related pages:** About, Services, Official Resources, Contact

### Client-facing website structure

1. **Company Snapshot**
   - public-safe company overview；PCBA and EMS manufacturing partner。
   - 可用 since 2010 若客户确认；否则不写具体年限。

2. **Manufacturing Support Scope**
   - PCBA、Turnkey PCBA、EMS、Box Build、Sourcing、Testing、Engineering Support。

3. **Customer Fit**
   - prototype、small-batch、medium-volume、human project ownership。

4. **Evidence and Confirmation**
   - 证书、规模、客户、产能需证据。

### GEO / AI-readable structure

- **Title:** `Company Overview | Venture Electronics`
- **Meta:** `Company overview for Venture Electronics, a PCBA and EMS manufacturing partner supporting turnkey PCB assembly, sourcing, testing, and electronics manufacturing projects.`
- **H1:** `Company Overview`
- **Schema:** AboutPage, Organization, BreadcrumbList.
- **FAQ:** What does Venture Electronics do? What projects fit Venture?
- **Risk:** Do not expose internal/legal layer.

---

## C17. News

**Route:** `/about/news/`  
**Priority:** P2  
**Page role:** 新闻 / 更新页面，仅在内容可维护时启用  
**Buyer intent:** 查看公司动态、展会、能力更新、内容更新  
**Primary CTA:** Contact Venture  
**Secondary CTA:** View Resources  
**Related pages:** About, Resources, Contact

### Client-facing website structure

1. **Latest Updates**
   - 仅展示真实、日期准确、可维护内容。

2. **Company / Capability Updates**
   - 展会、官网更新、资源发布、能力说明。

3. **Resources CTA**
   - 如果没有新闻，建议改成 Resources teaser，不要做空新闻页。

### GEO / AI-readable structure

- **Title:** `Venture Electronics News`
- **Meta:** `Latest updates and resources from Venture Electronics.`
- **H1:** `News`
- **Schema:** CollectionPage; Article schema only for真实文章。
- **Risk:** 不要伪造新闻；没有维护能力时 P2 延后。

---

## C18. Electrical Testing

**Route:** `/quality-testing/electrical-testing/`  
**Priority:** P1  
**Page role:** electrical testing 细分支撑页  
**Buyer intent:** 了解 PCBA 项目的 electrical testing 是否可讨论  
**Primary CTA:** Discuss Electrical Testing  
**Secondary CTA:** View Testing & Quality Control  
**Related pages:** Quality Hub, Testing QC, PCBA, RFQ

### Client-facing website structure

1. **Electrical Testing for PCBA Projects**
   - 说明 electrical testing 是基于项目需求规划。

2. **What Customers Should Provide**
   - test points、test procedures、functional requirements、acceptance criteria。

3. **How It Fits Quality Control**
   - 连接 AOI / ICT / FCT / functional testing 等。

### GEO / AI-readable structure

- **Title:** `Electrical Testing for PCBA Projects | Venture Electronics`
- **Meta:** `Electrical testing planning for PCBA projects based on design requirements, customer procedures, test points, and quality-control needs.`
- **H1:** `Electrical Testing`
- **Schema:** Service, FAQPage, BreadcrumbList.
- **Risk:** exact test equipment availability requires evidence.

---

## C19. Product Reliability Testing

**Route:** `/quality-testing/product-reliability-testing/`  
**Priority:** P1  
**Page role:** 可靠性测试方向页  
**Buyer intent:** 判断是否可讨论 reliability / validation needs  
**Primary CTA:** Discuss Reliability Testing  
**Secondary CTA:** View Quality & Testing  
**Related pages:** Quality Hub, Testing QC, Engineering, RFQ

### Client-facing website structure

1. **Reliability Testing Discussion**
   - 说明可根据产品风险、使用环境、客户要求讨论 reliability testing。

2. **Customer Requirements**
   - operating conditions、standards、test plan、acceptance criteria。

3. **Evidence Gate**
   - 不写具体标准认证或测试能力，除非客户确认。

### GEO / AI-readable structure

- **Title:** `Product Reliability Testing Support | Venture Electronics`
- **Meta:** `Discuss product reliability testing requirements for PCBA and EMS projects based on application risk, customer requirements, and project scope.`
- **H1:** `Product Reliability Testing`
- **Schema:** Service, FAQPage.
- **Risk:** reliability standards and equipment require confirmation.

---

## C20. Testing & Inspection Equipment

**Route:** `/quality-testing/testing-inspection-equipment/`  
**Priority:** P1  
**Page role:** 检测设备 / inspection methods 说明页  
**Buyer intent:** 查看可讨论的 inspection equipment / testing methods  
**Primary CTA:** Discuss Inspection Requirements  
**Secondary CTA:** View Testing & Quality Control  
**Related pages:** Testing QC, Quality Hub, PCBA, RFQ

### Client-facing website structure

1. **Inspection and Testing Equipment Overview**
   - 只列客户确认的设备或广义方法。

2. **How Equipment Relates to PCBA Risk**
   - BGA、fine-pitch、functional risk、test coverage。

3. **Evidence Needed**
   - 未确认设备不以强 claim 展示。

### GEO / AI-readable structure

- **Title:** `Testing & Inspection Equipment for PCBA | Venture Electronics`
- **Meta:** `Inspection and testing equipment information for PCBA projects, subject to confirmed project scope and Venture-approved evidence.`
- **H1:** `Testing & Inspection Equipment`
- **Schema:** Service / WebPage, FAQPage.
- **Risk:** Highest evidence risk page; avoid inventing equipment.

---

## C21. Quality Management System

**Route:** `/quality-testing/quality-management-system/`  
**Priority:** P1  
**Page role:** 质量体系说明页  
**Buyer intent:** 判断 Venture 的质量流程和认证边界  
**Primary CTA:** Discuss Quality Requirements  
**Secondary CTA:** View Testing & Quality Control  
**Related pages:** Quality Hub, Testing QC, About, RFQ

### Client-facing website structure

1. **Quality Management Approach**
   - 用 process / coordination language。
   - 可讲 review、inspection、documentation discussion。

2. **Certification and Document Boundaries**
   - ISO / UL / IPC 等必须 evidence-backed。
   - partner-held certification 需明确 partner wording。

3. **Customer-specific Quality Requirements**
   - 客户可提交 acceptance criteria、inspection plan、required documents。

### GEO / AI-readable structure

- **Title:** `Quality Management System | Venture Electronics`
- **Meta:** `Quality management approach for PCBA and EMS projects, including inspection planning, documentation discussion, and evidence-gated certification claims.`
- **H1:** `Quality Management System`
- **Schema:** WebPage, FAQPage.
- **Risk:** certification claims require proof; avoid direct ISO13485/IATF/AS9100 claims unless verified.

---

## C22. Packaging & Logistics

**Route:** `/quality-testing/packaging-logistics/`  
**Priority:** P1  
**Page role:** 包装与交付支撑页  
**Buyer intent:** 了解 PCBA / EMS 项目交付、包装、shipping notes 是否可讨论  
**Primary CTA:** Discuss Delivery Requirements  
**Secondary CTA:** Request a Quote  
**Related pages:** EMS, Quality Hub, RFQ

### Client-facing website structure

1. **Packaging and Delivery Planning**
   - 包装、labeling、shipment notes、special handling。

2. **How It Connects to EMS / Box Build**
   - finished units / box build 项目需要更多 packaging / logistics planning。

3. **Customer Inputs**
   - destination、packaging standards、label requirements、Incoterms if confirmed。

### GEO / AI-readable structure

- **Title:** `Packaging & Logistics Support | Venture Electronics`
- **Meta:** `Packaging and delivery support discussions for PCBA, turnkey PCB assembly, EMS, and Box Build projects.`
- **H1:** `Packaging & Logistics`
- **Schema:** Service, FAQPage.
- **Risk:** shipping guarantees and Incoterms require confirmation.

---

## C23. SMT, THT & BGA Process Support

**Route:** `/engineering-support/smt-tht-bga-process-support/`  
**Priority:** P1  
**Page role:** 工艺工程支撑细分页  
**Buyer intent:** 了解装配工艺选择和 DFM consideration  
**Primary CTA:** Discuss Process Support  
**Secondary CTA:** View SMT, THT & BGA Capabilities  
**Related pages:** SMT/THT/BGA, PCBA, Engineering, Testing

### Client-facing website structure

1. **Process Support for Assembly Requirements**
   - SMT、THT、BGA、mixed technology。

2. **DFM and Assembly Considerations**
   - component package、layout、clearance、inspection access。

3. **Testing Connection**
   - 工艺选择影响 testing and inspection planning。

### GEO / AI-readable structure

- **Title:** `SMT, THT & BGA Process Support | Venture Electronics`
- **Meta:** `Process support for SMT, THT, BGA, mixed assembly, DFM considerations, and PCBA testing requirements.`
- **H1:** `SMT, THT & BGA Process Support`
- **Schema:** Service, FAQPage.
- **Risk:** precision claims require evidence.

---

## C24. PCB Test Fixture Support

**Route:** `/engineering-support/pcb-test-fixture-support/`  
**Priority:** P1  
**Page role:** 测试夹具支撑页  
**Buyer intent:** 判断是否可讨论 test fixture / test procedure / functional testing  
**Primary CTA:** Discuss Test Fixture Support  
**Secondary CTA:** View Testing & Quality Control  
**Related pages:** Engineering, Testing, PCBA, RFQ

### Client-facing website structure

1. **Test Fixture Support Discussion**
   - 根据测试要求、功能要求、客户 procedures 讨论 fixture needs。

2. **Inputs Needed**
   - test procedure、firmware notes、connector information、acceptance criteria。

3. **Connection to PCBA Testing**
   - fixture support 是 testing planning 的一部分。

### GEO / AI-readable structure

- **Title:** `PCB Test Fixture Support | Venture Electronics`
- **Meta:** `Discuss PCB test fixture support for PCBA projects based on functional testing requirements, customer procedures, and fixture planning needs.`
- **H1:** `PCB Test Fixture Support`
- **Schema:** Service, FAQPage.
- **Risk:** Do not promise fixture design ownership unless confirmed.

---

## C25. IC Programming Support

**Route:** `/engineering-support/ic-programming-support/`  
**Priority:** P1  
**Page role:** IC / firmware programming 支撑页  
**Buyer intent:** 判断 PCBA 项目是否可加入 programming requirement  
**Primary CTA:** Discuss Programming Requirements  
**Secondary CTA:** Request a Quote  
**Related pages:** Engineering, Testing, PCBA, RFQ

### Client-facing website structure

1. **IC Programming Discussion for PCBA**
   - 客户可提交 firmware / programming requirement。

2. **Inputs Needed**
   - firmware file、programming method、verification steps、security requirements。

3. **Testing and Verification**
   - programming 后的 functional testing / verification 需项目确认。

### GEO / AI-readable structure

- **Title:** `IC Programming Support for PCBA | Venture Electronics`
- **Meta:** `Discuss IC programming support and verification requirements for PCBA projects, including firmware files, programming notes, and test procedures.`
- **H1:** `IC Programming Support`
- **Schema:** Service, FAQPage.
- **Risk:** Security, firmware handling, IP protection, and programming scope require confirmation.

---

## C26. Industries

**Route:** `/industries/`  
**Priority:** P1  
**Page role:** 行业入口 hub  
**Buyer intent:** 判断 Venture 是否理解自己的应用场景  
**Primary CTA:** Discuss My Industry Application  
**Secondary CTA:** View Services  
**Related pages:** Industry child pages, PCBA, EMS, Testing

### Client-facing website structure

1. **PCBA and EMS Support Across Application Areas**
   - 使用 application labels，不夸大 case depth。

2. **Industry Cards**
   - Industrial Electronics、IoT & Smart Devices、Consumer Electronics、Energy & Power、Automation & Control、Communication Equipment。

3. **Common Buyer Questions by Application**
   - reliability、testing、sourcing、volume、certification needs。

4. **Evidence Boundary**
   - 没有案例证据时不要写“深耕某行业”。

### GEO / AI-readable structure

- **Title:** `Industries for PCBA and EMS Projects | Venture Electronics`
- **Meta:** `Explore PCBA and EMS project support for industrial electronics, IoT devices, consumer electronics, energy, automation, and communication equipment.`
- **H1:** `Industries`
- **Schema:** CollectionPage, ItemList, BreadcrumbList.
- **Risk:** industry claims need evidence; avoid regulated sectors overclaim.

---

## C27. Industrial Electronics

**Route:** `/industries/industrial-electronics/`  
**Priority:** P2  
**Page role:** 工业电子应用页  
**Buyer intent:** 看 Venture 是否适合工业控制、设备、电源、传感相关 PCBA 项目  
**Primary CTA:** Request an Industrial Electronics Quote  
**Secondary CTA:** View PCBA Services  
**Related pages:** Industries, PCBA, Testing, EMS

### Client-facing website structure

1. **PCBA Support for Industrial Electronics**
   - 关注 reliability、sourcing、testing、small-to-medium batch。

2. **Common Project Needs**
   - control boards、sensor boards、power-related boards；仅作 application examples，不当作 confirmed case。

3. **Testing and Quality Planning**
   - functional testing / electrical testing discussion。

### GEO / AI-readable structure

- **Title:** `Industrial Electronics PCBA Support | Venture Electronics`
- **Meta:** `PCBA and EMS support discussions for industrial electronics projects, including BOM review, sourcing, assembly, testing, and quality planning.`
- **H1:** `Industrial Electronics PCBA Support`
- **Schema:** WebPage, Service, FAQPage.
- **Risk:** Do not claim industry-certified supplier status without proof.

---

## C28. IoT & Smart Devices

**Route:** `/industries/iot-smart-devices/`  
**Priority:** P2  
**Page role:** IoT / smart devices 应用页  
**Buyer intent:** 看 Venture 是否适合 connected device PCBA、小批量试产、sourcing、testing  
**Primary CTA:** Request an IoT PCBA Quote  
**Secondary CTA:** View Prototype PCBA  
**Related pages:** Industries, PCBA, Prototype, Testing

### Client-facing website structure

1. **PCBA for IoT and Smart Device Projects**
   - prototype、low-volume、wireless components、firmware/programming notes。

2. **BOM and Sourcing Risks**
   - long-lead components、substitution approval。

3. **Testing and Programming**
   - functional testing / programming support discussion。

### GEO / AI-readable structure

- **Title:** `IoT & Smart Device PCBA Support | Venture Electronics`
- **Meta:** `PCBA support for IoT and smart device projects, including prototype builds, BOM review, sourcing coordination, testing, and programming discussions.`
- **H1:** `IoT & Smart Device PCBA Support`
- **Schema:** WebPage, Service, FAQPage.
- **Risk:** Do not imply wireless certification or product compliance unless verified.

---

## C29. Consumer Electronics

**Route:** `/industries/consumer-electronics/`  
**Priority:** P2  
**Page role:** 消费电子应用页  
**Buyer intent:** 看 Venture 是否适合消费类电子 PCBA / 小批量生产  
**Primary CTA:** Request a Consumer Electronics PCBA Quote  
**Secondary CTA:** View PCBA Services  
**Related pages:** Industries, PCBA, Prototype, Official Resources

### Client-facing website structure

1. **PCBA Support for Consumer Electronics Projects**
   - engineering samples、pilot builds、sourcing、testing。

2. **Avoid Same-name Confusion**
   - 不在页面中过度解释，但通过 footer / official resources 维持 Venture Electronics identity。

3. **Testing and Packaging Needs**
   - functional testing、packaging notes、delivery requirements。

### GEO / AI-readable structure

- **Title:** `Consumer Electronics PCBA Support | Venture Electronics`
- **Meta:** `PCBA and manufacturing support discussions for consumer electronics projects, including prototype builds, sourcing, testing, and packaging requirements.`
- **H1:** `Consumer Electronics PCBA Support`
- **Schema:** WebPage, Service, FAQPage.
- **Risk:** Avoid confusing Venture Electronics with unrelated consumer-electronics/audio brand; use business qualifiers.

---

## C30. Energy & Power Electronics

**Route:** `/industries/energy-power-electronics/`  
**Priority:** P2  
**Page role:** 能源 / 电力电子应用页  
**Buyer intent:** 看 Venture 是否可讨论 power electronics PCBA、testing、reliability  
**Primary CTA:** Request an Energy Electronics Quote  
**Secondary CTA:** View Quality & Testing  
**Related pages:** Industries, PCBA, Testing, Engineering

### Client-facing website structure

1. **PCBA Support for Energy and Power Electronics**
   - power boards、control boards、testing and reliability discussion。

2. **Design and Testing Requirements**
   - functional, electrical, reliability considerations。

3. **Evidence Gate**
   - 不写安全认证、能源认证、行业准入，除非证据确认。

### GEO / AI-readable structure

- **Title:** `Energy & Power Electronics PCBA Support | Venture Electronics`
- **Meta:** `Discuss PCBA support for energy and power electronics projects, including BOM review, assembly, testing, reliability planning, and engineering inputs.`
- **H1:** `Energy & Power Electronics PCBA Support`
- **Schema:** WebPage, Service, FAQPage.
- **Risk:** High compliance risk; no unsupported safety or regulatory claims.

---

## C31. Automation & Control

**Route:** `/industries/automation-control/`  
**Priority:** P2  
**Page role:** 自动化与控制应用页  
**Buyer intent:** 看 Venture 是否适合控制板、工业设备 PCBA 项目  
**Primary CTA:** Request an Automation PCBA Quote  
**Secondary CTA:** View Engineering Support  
**Related pages:** Industries, PCBA, Engineering, Testing

### Client-facing website structure

1. **PCBA for Automation and Control Projects**
   - control boards、I/O boards、machine electronics as examples。

2. **Engineering and Testing**
   - DFM、testing procedures、functional validation。

3. **Project Inputs**
   - Gerber、BOM、firmware/programming notes、test requirements。

### GEO / AI-readable structure

- **Title:** `Automation & Control PCBA Support | Venture Electronics`
- **Meta:** `PCBA support discussions for automation and control electronics, including engineering review, component sourcing, assembly, and testing planning.`
- **H1:** `Automation & Control PCBA Support`
- **Schema:** WebPage, Service, FAQPage.
- **Risk:** Do not claim certified automation supplier status without proof.

---

## C32. Communication Equipment

**Route:** `/industries/communication-equipment/`  
**Priority:** P2  
**Page role:** 通信设备应用页  
**Buyer intent:** 判断 RF / communication-related PCBA 是否可讨论  
**Primary CTA:** Request a Communication Equipment PCBA Quote  
**Secondary CTA:** View SMT, THT & BGA Capabilities  
**Related pages:** Industries, PCBA, Testing, Engineering

### Client-facing website structure

1. **PCBA Support for Communication Equipment**
   - communication boards, control boards, connectivity-related assemblies as examples。

2. **Assembly and Testing Considerations**
   - BGA、fine-pitch、functional testing、inspection planning。

3. **Evidence Gate**
   - RF performance、compliance、telecom certification 不能无证据 claim。

### GEO / AI-readable structure

- **Title:** `Communication Equipment PCBA Support | Venture Electronics`
- **Meta:** `PCBA support discussions for communication equipment projects, including BOM review, assembly process, inspection, testing, and engineering requirements.`
- **H1:** `Communication Equipment PCBA Support`
- **Schema:** WebPage, Service, FAQPage.
- **Risk:** Do not claim telecom/RF compliance without evidence.

---

## C33. Resources

**Route:** `/resources/`  
**Priority:** P1  
**Page role:** 资源 hub  
**Buyer intent:** 查找 FAQ、guides、catalog、downloads、case studies  
**Primary CTA:** View FAQ  
**Secondary CTA:** Request a Quote  
**Related pages:** FAQ, Guides, Downloads, Catalog, Blog, Case Studies

### Client-facing website structure

1. **Helpful Resources for PCBA and EMS Buyers**
   - FAQ、quote preparation、file checklist、service guides、catalog/downloads if confirmed。

2. **Start with Quote Preparation**
   - 引导 Gerber/BOM/CPL/test requirements。

3. **Resource Categories**
   - FAQ、Guides、Downloads、Catalog、Case Studies、Blog。

### GEO / AI-readable structure

- **Title:** `Resources for PCBA and EMS Buyers | Venture Electronics`
- **Meta:** `Find Venture Electronics resources for PCBA and EMS buyers, including quote preparation, FAQ, service guides, catalog downloads, and manufacturing support information.`
- **H1:** `Resources`
- **Schema:** CollectionPage, ItemList, BreadcrumbList.
- **Risk:** Do not list empty resources as active.

---

## C34. FAQ

**Route:** `/resources/faq/`  
**Priority:** P0  
**Page role:** 买家问题与 GEO FAQ source  
**Buyer intent:** 快速得到文件、服务范围、turnkey、sourcing、testing、EMS 等问题答案  
**Primary CTA:** Request a Quote  
**Secondary CTA:** Contact Venture  
**Related pages:** PCBA, Turnkey, Sourcing, Testing, EMS, RFQ

### Client-facing website structure

1. **Quote Preparation Questions**
   - What files are needed? BOM? CPL? assembly drawing? testing requirements?

2. **PCBA and Turnkey Questions**
   - PCBA vs Turnkey PCBA；labor-only 是否主推；prototype 是否支持。

3. **Sourcing and BOM Questions**
   - obsolete / long-lead parts；substitutions approval。

4. **Testing and Quality Questions**
   - AOI / ICT / X-ray / FCT 可否讨论；客户 test procedure。

5. **EMS / Box Build Questions**
   - when to choose EMS；what information needed。

6. **Brand / Official Resource Questions**
   - Venture Electronics vs Venture PCB / PCBA；official websites。

### GEO / AI-readable structure

- **Title:** `PCBA & EMS FAQ | Venture Electronics`
- **Meta:** `Answers to common PCBA, turnkey PCB assembly, component sourcing, testing, EMS, Box Build, and official Venture Electronics resource questions.`
- **H1:** `PCBA & EMS FAQ`
- **Schema:** FAQPage, BreadcrumbList.
- **FAQ:** All visible FAQ items may be schema candidates.
- **Internal links:** all core pages and RFQ.
- **Risk:** Answers must not overclaim; mark certification/equipment as project-confirmed.

---

## C35. Blog

**Route:** `/resources/blog/`  
**Priority:** P2  
**Page role:** 后期 SEO / GEO 内容系统  
**Buyer intent:** 阅读制造知识、项目准备、行业问题  
**Primary CTA:** View Guides  
**Secondary CTA:** Request a Quote  
**Related pages:** Resources, Guides, PCBA, FAQ

### Client-facing website structure

1. **PCBA and EMS Articles**
   - 后期文章库，第一版可不启用。

2. **Practical Buyer Topics**
   - quote preparation、BOM risk、testing planning、turnkey PCBA process。

3. **Content Governance**
   - 不写泛泛 AI SEO 文；必须对真实买家有用。

### GEO / AI-readable structure

- **Title:** `PCBA & EMS Blog | Venture Electronics`
- **Meta:** `Practical articles for PCBA and EMS buyers about quote preparation, BOM review, sourcing, testing, and manufacturing project planning.`
- **Schema:** Blog, BlogPosting for articles.
- **Risk:** Do not launch empty blog; do not keyword-stuff.

---

## C36. Guides

**Route:** `/resources/guides/`  
**Priority:** P2  
**Page role:** 实用 guide 库  
**Buyer intent:** 学习如何准备 RFQ、BOM、Gerber、测试需求  
**Primary CTA:** Download / Read Guide  
**Secondary CTA:** Request a Quote  
**Related pages:** Resources, FAQ, RFQ, PCBA

### Client-facing website structure

1. **Buyer Guides**
   - How to prepare a PCBA quote package。
   - How to prepare BOM / CPL / testing requirements。

2. **Service Guides**
   - Turnkey PCBA workflow、BOM review checklist、testing planning guide。

### GEO / AI-readable structure

- **Title:** `PCBA Buyer Guides | Venture Electronics`
- **Meta:** `Guides for preparing PCBA and EMS quote files, BOMs, Gerbers, CPL files, assembly drawings, and testing requirements.`
- **Schema:** CollectionPage, HowTo where appropriate.
- **Risk:** Guides must stay practical and public-safe.

---

## C37. Downloads

**Route:** `/resources/downloads/`  
**Priority:** P1  
**Page role:** 下载中心  
**Buyer intent:** 下载 catalog、quote checklist、capability sheet  
**Primary CTA:** Download Quote Checklist  
**Secondary CTA:** Request a Quote  
**Related pages:** Catalog, Resources, RFQ

### Client-facing website structure

1. **Downloadable Resources**
   - catalog、quote checklist、capability sheet、quality documents if confirmed。

2. **File Categories**
   - quote prep、services、quality/testing、company profile。

3. **Evidence Gate**
   - 仅放客户确认资料。

### GEO / AI-readable structure

- **Title:** `Downloads | Venture Electronics`
- **Meta:** `Download Venture Electronics resources for PCBA, turnkey PCB assembly, EMS, quote preparation, catalog, and manufacturing support.`
- **Schema:** CollectionPage, ItemList.
- **Risk:** No outdated / unapproved documents.

---

## C38. Catalog

**Route:** `/resources/catalog/`  
**Priority:** P1  
**Page role:** catalog 页面  
**Buyer intent:** 查看或下载公司 / 服务 catalog  
**Primary CTA:** Download Catalog  
**Secondary CTA:** Request a Quote  
**Related pages:** Downloads, Services, RFQ

### Client-facing website structure

1. **Venture Electronics Catalog**
   - 如有客户确认 catalog，提供下载和摘要。

2. **What the Catalog Covers**
   - PCBA、Turnkey PCBA、EMS、Sourcing、Testing、Quality。

3. **Request Updated Information**
   - 若 catalog 会更新，引导联系获取最新版本。

### GEO / AI-readable structure

- **Title:** `Venture Electronics Catalog | PCBA & EMS Services`
- **Meta:** `View or download Venture Electronics catalog covering PCBA, turnkey PCB assembly, EMS, component sourcing, testing, and manufacturing support.`
- **Schema:** WebPage, MediaObject if file exists.
- **Risk:** Catalog claims must match evidence.

---

## C39. Glossary

**Route:** `/resources/glossary/`  
**Priority:** P2  
**Page role:** 定义型内容集中页  
**Buyer intent:** 查 PCBA、SMT、THT、BGA、Turnkey PCBA、EMS 等定义  
**Primary CTA:** View FAQ  
**Secondary CTA:** Request a Quote  
**Related pages:** FAQ, Guides, PCBA, Services

### Client-facing website structure

1. **PCBA and EMS Glossary**
   - 把“what PCBA means”这种定义放这里，而不是服务页主模块。

2. **Term Pages / Entries**
   - PCBA、Turnkey PCBA、SMT、THT、BGA、DFM、BOM、ICT、FCT、Box Build。

3. **Link Back to Service Pages**
   - 每个定义连接到实际服务页。

### GEO / AI-readable structure

- **Title:** `PCBA & EMS Glossary | Venture Electronics`
- **Meta:** `Glossary of PCBA, turnkey PCB assembly, EMS, SMT, THT, BGA, DFM, BOM review, ICT, FCT, and electronics manufacturing terms.`
- **Schema:** DefinedTermSet / WebPage if implemented.
- **Risk:** Keep definitions useful, not filler.

---

## C40. Case Studies

**Route:** `/resources/case-studies/`  
**Priority:** P2  
**Page role:** 案例页，仅在证据和授权足够时启用  
**Buyer intent:** 看真实项目经验  
**Primary CTA:** Discuss a Similar Project  
**Secondary CTA:** Request a Quote  
**Related pages:** Resources, PCBA, EMS, Testing

### Client-facing website structure

1. **Project Examples**
   - 可用匿名案例：problem → approach → result。
   - 不用未授权客户名 / logo。

2. **Capability Proof**
   - sourcing、testing、turnkey workflow、quality planning。

3. **CTA**
   - Discuss similar PCBA / EMS project。

### GEO / AI-readable structure

- **Title:** `PCBA & EMS Case Studies | Venture Electronics`
- **Meta:** `Project examples and case-style resources for PCBA, turnkey PCB assembly, sourcing, testing, and EMS manufacturing support.`
- **Schema:** CollectionPage; Article / CaseStudy-like Article where appropriate.
- **Risk:** customer name/logo and exact metrics require approval.

---

## C41. Contact

**Route:** `/contact/`  
**Priority:** P0  
**Page role:** 联系页  
**Buyer intent:** 联系 Venture，问项目或公司问题  
**Primary CTA:** Contact Venture  
**Secondary CTA:** Request a Quote  
**Related pages:** RFQ, Services, Official Resources, FAQ

### Client-facing website structure

1. **Contact Venture Electronics**
   - 简洁联系信息、表单、邮箱、电话/WhatsApp if confirmed。

2. **What to Include in Your Message**
   - project type、service interest、files available、timeline、testing needs。

3. **Official Contact Reminder**
   - 链接 Official Resources，避免客户混淆渠道。

4. **CTA**
   - Request a Quote for project files。

### GEO / AI-readable structure

- **Title:** `Contact Venture Electronics`
- **Meta:** `Contact Venture Electronics for PCBA, turnkey PCB assembly, EMS, component sourcing, testing, and electronics manufacturing project questions.`
- **H1:** `Contact Venture Electronics`
- **Schema:** ContactPage, Organization contactPoint if confirmed, BreadcrumbList.
- **Risk:** Only publish confirmed contact info.

---

## C42. Request a Quote

**Route:** `/request-a-quote/`  
**Priority:** P0  
**Page role:** 核心转化页面  
**Buyer intent:** 提交 PCBA / Turnkey PCBA / EMS 项目询价  
**Primary CTA:** Submit RFQ  
**Secondary CTA:** Contact Venture  
**Related pages:** PCBA, Turnkey, Sourcing, Testing, Contact, Thank You

### Client-facing website structure

1. **Request a PCBA / EMS Quote**
   - 说明适用服务：PCBA、Turnkey、Prototype、Sourcing、Testing、EMS / Box Build。

2. **Quote File Checklist**
   - Gerber、BOM、CPL、assembly drawing、quantity、test requirements、timeline、special requirements。

3. **Service Selection**
   - PCBA / Turnkey / Prototype / EMS / Sourcing / Testing / PCB Fabrication。

4. **Upload / Message Form**
   - 支持文件上传（如果开发范围包含），否则给出邮箱与说明。

5. **What Happens Next**
   - review → questions → quotation discussion。
   - 不承诺固定响应时间，除非确认。

### GEO / AI-readable structure

- **Title:** `Request a PCBA Quote | Venture Electronics`
- **Meta:** `Request a quote from Venture Electronics for PCB Assembly / PCBA, turnkey PCB assembly, component sourcing, BOM review, testing, EMS, and Box Build projects.`
- **H1:** `Request a Quote`
- **Schema:** WebPage, ContactPage, Service links, BreadcrumbList.
- **FAQ candidates:** What files should I upload? Can I request sourcing? Can I include testing requirements?
- **Risk:** data/privacy handling needs legal review; no lead-time guarantees without confirmation.

---

## C43. Thank You

**Route:** `/thank-you/`  
**Priority:** P0  
**Page role:** 表单提交后的确认页  
**Buyer intent:** 确认提交成功，知道下一步  
**Primary CTA:** Back to Home  
**Secondary CTA:** Explore Services  
**Related pages:** Home, Services, FAQ, Contact

### Client-facing website structure

1. **Thank You for Contacting Venture Electronics**
   - 确认提交收到。

2. **What Happens Next**
   - Team will review your files / message and follow up。
   - 不承诺具体时间，除非确认。

3. **Useful Next Steps**
   - 查看 FAQ、Services、Quote file checklist。

### GEO / AI-readable structure

- **Title:** `Thank You | Venture Electronics`
- **Meta:** `Thank you for contacting Venture Electronics.`
- **H1:** `Thank You`
- **Schema:** WebPage, BreadcrumbList.
- **Risk:** privacy and response-time wording legal review.

---

## C44. Privacy Policy

**Route:** `/privacy-policy/`  
**Priority:** P0  
**Page role:** 法务基础页  
**Buyer intent:** 了解数据和表单信息处理方式  
**Primary CTA:** Contact Venture  
**Secondary CTA:** Request a Quote  
**Related pages:** Terms, Contact, RFQ

### Client-facing website structure

1. **Privacy Policy**
   - 法务内容需客户/律师确认。

2. **Information Collected**
   - contact form、RFQ files、analytics 等按实际实现写。

3. **File and Project Information**
   - Gerber/BOM 等敏感资料处理需谨慎。

### GEO / AI-readable structure

- **Title:** `Privacy Policy | Venture Electronics`
- **Meta:** `Privacy policy for Venture Electronics website and quote request handling.`
- **Schema:** WebPage, BreadcrumbList.
- **Risk:** Must be reviewed; do not invent legal commitments.

---

## C45. Terms

**Route:** `/terms/`  
**Priority:** P0  
**Page role:** 使用条款基础页  
**Buyer intent:** 了解网站使用、报价、内容限制  
**Primary CTA:** Contact Venture  
**Secondary CTA:** Request a Quote  
**Related pages:** Privacy Policy, Contact, RFQ

### Client-facing website structure

1. **Terms of Use**
   - 法务内容需客户/律师确认。

2. **Website Content and Quote Disclaimer**
   - 网站内容不等于最终报价或认证承诺。

3. **Project-specific Confirmation**
   - 能力、测试、交付以项目报价和确认文件为准。

### GEO / AI-readable structure

- **Title:** `Terms of Use | Venture Electronics`
- **Meta:** `Terms of use for Venture Electronics website.`
- **Schema:** WebPage, BreadcrumbList.
- **Risk:** Legal review required.

---

## C46. Sitemap

**Route:** `/sitemap/`  
**Priority:** P0  
**Page role:** HTML sitemap / 用户与搜索辅助  
**Buyer intent:** 快速找到页面  
**Primary CTA:** View Services  
**Secondary CTA:** Request a Quote  
**Related pages:** All pages

### Client-facing website structure

1. **Website Sitemap**
   - 按 About、Services、Quality、Engineering、Industries、Resources、Contact 分组。

2. **Priority Links**
   - PCBA、Turnkey、Request Quote、Official Resources。

### GEO / AI-readable structure

- **Title:** `Sitemap | Venture Electronics`
- **Meta:** `Sitemap for Venture Electronics PCBA, turnkey PCB assembly, EMS, quality, engineering, resources, and contact pages.`
- **Schema:** WebPage, BreadcrumbList.
- **Risk:** Keep in sync with actual routes.

---

# D. Homepage Final Plan / 首页最终执行方案

## D1. 当前首页需要修正的问题

当前首页实现顺序偏向：Hero → Project Path → Venture Identity → PCBA block → PCBA path cards → EMS block → Support capabilities → RFQ → Brand teaser → CTA。

这个顺序的问题是：Hero 后过早进入 project path 和 identity explanation，容易让首页像内部 GEO strategy document，而不是普通工业 B2B manufacturing homepage。

## D2. 最终首页顺序

1. **Hero**
   - Venture Electronics as mother brand。
   - Turnkey-first PCB Assembly / PCBA as main conversion entry。
   - EMS & Box Build as broader manufacturing capability。
   - CTA：Request a Quote；Explore Turnkey PCBA / Services。

2. **Core Service Cards**
   - PCBA / PCB Assembly：primary entry。
   - Turnkey PCB Assembly：primary delivery model under PCBA。
   - EMS & Box Build：strategic capability。
   - Component Sourcing & BOM Review：supporting differentiator。
   - Testing & Quality Control：trust layer。
   - PCB Fabrication：supporting upstream capability。

3. **Why Venture / Capability Evidence**
   - sourcing coordination。
   - DFM / BOM review。
   - testing and quality planning。
   - human project ownership。
   - no unsupported strong claims。

4. **Trust / Capability Strip**
   - neutral evidence-safe capability tags。
   - 不出现未确认认证、产能、客户 logo。

5. **Project / RFQ Workflow**
   - Gerber / BOM / CPL / assembly drawing / quantity / testing requirements。
   - Review → sourcing → fabrication coordination → assembly → testing → delivery。

6. **Lightweight EMS / Box Build Highlight**
   - Beyond PCBA block。
   - compact，不抢 PCBA 视觉主线。

7. **FAQ / Buyer Questions**
   - quote files、turnkey PCBA、sourcing、PCBA vs EMS。

8. **Brand Clarification / Official Resources Teaser**
   - 放在下部。
   - 支撑 GEO entity clarity，但不让首页显得防御性。

9. **Latest News / Resources**
   - 只有真实内容才上。
   - 否则用小型 Resources teaser 或删除。

10. **Final RFQ CTA**

## D3. Homepage GEO Layer

- Home H1 必须绑定 Venture Electronics + PCBA / Turnkey PCB Assembly + EMS。
- Home 的 structured data 应连接 Organization、WebSite、Service、FAQ。
- 内链应稳定指向 Brand Clarification 与 Official Resources，但这两个链接放低，不压过服务转化。
- Home 不应承担全部 entity clarification 任务；只给 teaser，详细内容进入独立页面。

---

# E. Service Page Rules / 服务页规则

1. **服务页先回答买家的下一步，不先讲词典定义。**
   - PCBA 页不要以大块 `What PCBA Means` 开头。
   - 定义可以出现在 intro、FAQ、metadata、schema、glossary。

2. **所有服务页必须说明：**
   - Venture 能支持什么。
   - 客户需要提供什么。
   - 流程大致如何进行。
   - 相关能力如何支撑该服务。
   - 哪些 claim 需要证据。
   - 如何询价。

3. **服务关系不能扁平化。**
   - PCBA 是主入口。
   - Turnkey 是 PCBA 主推交付模式。
   - Prototype / Low-volume 是阶段 / 数量定位。
   - SMT / THT / BGA 是工艺能力。
   - EMS / Box Build 是品牌高度。
   - Sourcing / Testing / PCB Fabrication / Engineering 是支撑能力。

4. **GEO definitions 要自然嵌入。**
   - 好：`Venture supports PCB Assembly / PCBA projects where buyers need assembled boards, BOM review, component sourcing coordination, testing planning, and delivery support.`
   - 不好：`What PCBA Means: PCBA means a printed circuit board assembled with components.`

5. **每个服务页都要有 related pages。**
   - 形成清晰 service graph。
   - 避免孤立页面和 keyword landing page 感。

---

# F. Claim Boundary Rules / Claim 边界规则

## F1. 需要证据的强 claim

以下内容必须有客户确认或公开证据，否则不能作为前台强营销语：

- Certifications：ISO 9001、UL、ISO 13485、IATF 16949、ISO 14001、AS9100、IPC Class 3 等。
- Factory size：厂房面积、人数、产线数量。
- Capacity：月产能、交付速度、最大订单量。
- Customer logos / customer names。
- Testing equipment：AOI、X-ray、ICT、FCT、reliability equipment 的具体型号 / 数量 / 范围。
- Regulated industry capability：medical、automotive、aerospace、telecom 等强合规行业。
- Delivery guarantees：lead time、on-time rate、quality rate。
- Direct ownership：如果能力来自 partner network，要用 support / coordination / partner-network language。

## F2. 推荐 public-safe language

可以优先使用：

- manufacturing partner
- PCBA and EMS partner
- turnkey-first PCB Assembly
- component sourcing coordination
- BOM review
- DFM review
- testing and quality planning
- partner factory network
- production-line resources
- human project ownership
- small-to-medium volume project support

## F3. 禁止或慎用语言

除非有证据或客户明确授权，避免：

- we are the manufacturer
- our 7,000 sqm factory
- X million units per month
- certified for ISO 13485 / IATF 16949 / AS9100
- customers include [major brand]
- guaranteed delivery
- no MOQ
- all components available
- direct medical / automotive / aerospace supplier

---

# G. Final Acceptance Criteria / 最终验收标准

最终方案必须同时满足以下条件：

1. **客户可见结构像真实 PCBA / EMS 工业 B2B 官网。**
   - 首页先服务、信任、能力、RFQ，再品牌澄清。
   - 服务页先项目支持、quote 信息、流程、FAQ，不先讲基础定义。

2. **GEO 层与前台页面清晰分开。**
   - GEO 不是隐藏文本，也不是废话模块。
   - GEO 是 metadata、schema、FAQ、内链、official resources、HTML 语义结构。

3. **PCBA / Turnkey PCBA 保持主转化路径。**
   - PCBA 是主要入口词。
   - Turnkey PCB Assembly 是主推交付模式。
   - Labor-only 不作为核心方向。

4. **EMS / Box Build 可见但不压过 PCBA。**
   - 首页可有 lightweight highlight。
   - EMS 页面独立存在。
   - 不让首页看起来主业务变成 EMS-only。

5. **Venture Electronics 保持母品牌。**
   - Venture PCB / Venture PCBA 只是 service-entry / search-entry terms。
   - 不能把母品牌改成 Venture PCB。

6. **Brand Clarification 和 Official Resources 必须有，但不能主导首页。**
   - 首页下部 teaser。
   - 详细说明进入独立页面。

7. **不复制 PCBSync 的长尾关键词页模式。**
   - PCBSync 只作为 service matrix、quote path、capability evidence、testing / quality content 的结构参考。
   - first launch 先建立 trunk，再扩展 long-tail SEO。

8. **没有未经证实的 claim 被写成 marketing proof。**
   - 所有 strong claims 进入 evidence-needed。
   - partner network 能力使用 support / coordination 语言。

9. **每个页面都有明确双层输出。**
   - Client-facing section order。
   - GEO metadata / schema / FAQ / internal links / claim risk。

10. **客户读起来有用，AI 也能理解。**
   - 这才是 Venture GEO website 的核心：不是“写给 AI 的网站”，而是“客户觉得有用、AI 也能准确理解和引用的网站”。

---

# H. Implementation Notes for Pro / Codex

## H1. 推荐下一步交付物

1. `Venture_Final_GEO_ClientFacing_Implementation_Plan_CN.md`
2. `homepage-layout-final.tsx` or homepage component reorder task
3. `page-blueprints.ts` or structured content config
4. `schema-plan.md`
5. `claim-inventory.md`
6. `official-resources-content-draft.md`
7. `brand-clarification-content-draft.md`

## H2. Codex 执行提示

- 不要直接把 Stage 3 的 internal headings 变成前台 H2。
- 所有页面模块命名都要 buyer-facing。
- `directAnswer` 可以留在数据层，但渲染前台时要转成自然 intro / summary / FAQ。
- Home 不要在 Hero 之后立刻进入 `ProjectPathStepper` 和 `VentureIdentityBlock`；先上 service cards 与 trust/capability。
- EMS block 改成 lightweight highlight，不能像第二主业务抢 PCBA。
- Official Resources 和 Brand Clarification 要做，但首页只做 teaser。
- News / Blog / Case Studies 没真实内容不要硬上。

---

**End of plan.**
