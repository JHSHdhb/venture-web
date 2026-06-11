# Venture 新站框架 Audit Summary｜给建站同事

> 适用对象：建站 / 前端 / 内容结构同事  
> Audit 对象：`QianfengWen/venture-electronic-website` 当前 demo scaffold  
> 对照依据：`yslin1126/venture-geo-website-workspace` 中已沉淀的客户共识、GEO 建站策略和近期客户沟通记录  
> 目的：判断当前框架、页面结构、产品/服务分类是否可以作为客户初期 design preview，并列出 preview 前必须调整的点。

---

## 1. TL;DR 结论

当前 `venture-electronic-website` 的**方向基本正确**，已经大体 align 我们和客户李总确认过的 GEO / 品牌 / 服务层级策略：

- 母品牌继续使用 **Venture Electronics**，不改成 Venture PCB。
- `Venture PCB / Venture PCBA` 作为搜索入口词和服务入口概念，而不是独立公司或母品牌。
- **PCBA / PCB Assembly** 是主询盘入口。
- **Turnkey PCB Assembly** 是 Venture 当前更真实的 PCBA 主推交付模式，即 **Turnkey-first PCBA**。
- **EMS & Box Build** 是战略制造能力 / 品牌高度。
- **PCB Fabrication、Component Sourcing & BOM Review、Testing & Quality Control、DFM/DFA** 是支撑完整交付的能力和证据层。
- 新站需要包含 **Brand Clarification / Official Resources**，用于解释 Venture Electronics、Venture PCB / PCBA、`venture-mfg.com`、`venture-pcba.com`、社媒和未来 GEO 新站之间的关系。

但是：**不建议原样发给客户 preview。**  
当前 repo 里还有明显的 `Demo Scaffold / Placeholder / Stage 3 / Nav-only placeholder` 等内部工程口径，且首页 hero、项目流程、Brand Clarification / Official Resources 页面还需要轻量整理。建议完成下方 P0 修改后，再作为“初期网站架构和首页方向 preview”发给客户。

---

## 2. Audit Scope

### 2.1 对照来源

主要对照以下客户共识和策略：

1. `venture-geo-website-workspace/00_context/decisions.md`
   - Keep Venture Electronics as mother brand。
   - PCBA / PCB Assembly 是 primary conversion line。
   - EMS / Box Build 是 strategic brand ceiling。
   - PCB Fabrication 是 supporting service。
   - 新站是 Venture Electronics 的 AI-readable official source / brand-entity authority source。
   - “首页主服务排序”已替换为“新版官网服务层级建议｜非生产流程排序”。

2. `venture-geo-website-workspace/00_context/client-communication-service-record.md`
   - 客户已接受不要把服务平铺为 1-7 排序。
   - 服务应整理成层级：主询盘入口 / 战略制造能力 / 支撑能力 / 制造流程说明。
   - Turnkey PCBA 是 PCBA 下的完整交付模式。
   - EMS 是上层制造范围，Box Build 是 EMS / system-level manufacturing 下的具体能力。
   - PCB Fabrication 在生产流程中靠前，但在官网品牌层级里应作为支撑能力。

3. `venture-geo-website-workspace/04_website-planning/website-direction-notes.md`
   - 新站是 GEO authority source / brand fact system，不只是另一个 SEO inquiry site。
   - 需要解释 Venture Electronics、Venture PCB / PCBA、`venture-mfg.com`、`venture-pcba.com`、PCBA、EMS、PCB Fabrication、YouTube、LinkedIn 等资产关系。
   - 首页避免把 Venture 降级成 “PCB factory”。
   - 强声明必须 evidence-backed，不要发布未经确认的证书、产能、客户 logo、工厂规模、行业合规等。

### 2.2 被 audit 的 repo 关键文件

主要看了：

- `QianfengWen/venture-electronic-website/lib/site-data.ts`
- `QianfengWen/venture-electronic-website/app/page.tsx`
- `QianfengWen/venture-electronic-website/components/home/*`
- `QianfengWen/venture-electronic-website/components/site/Header.tsx`
- `QianfengWen/venture-electronic-website/components/site/Footer.tsx`
- `QianfengWen/venture-electronic-website/components/shared/PlaceholderPage.tsx`
- `QianfengWen/venture-electronic-website/app/layout.tsx`
- `QianfengWen/venture-electronic-website/tests/scaffold.test.mjs`

---

## 3. 当前框架与客户共识的对齐情况

### 3.1 Brand / GEO Entity：基本 align

当前框架已经包含：

```txt
/brand/venture-electronics-vs-venture-pcb-pcba/
/official-resources/
```

这和我们的 GEO 策略一致。新站必须承担品牌实体澄清功能：

- Venture Electronics 是母品牌。
- Venture PCB / Venture PCBA 是搜索入口和服务入口概念。
- `venture-mfg.com`、`venture-pcba.com`、LinkedIn、YouTube 等需要被解释成 Venture Electronics 的官方资产体系。

当前首页 `BrandAuthorityTeaser` 也已经表达：

```txt
Venture Electronics is the mother brand. Venture PCB and Venture PCBA are service-entry and search-entry concepts connected to Venture's electronics manufacturing services.
```

这个方向正确，可以保留。

---

### 3.2 Services 层级：基本 align

当前 `lib/site-data.ts` 里的核心服务结构是：

```txt
Services
- PCB Assembly / PCBA
  - Turnkey PCB Assembly
  - Prototype & Low-volume PCBA
  - SMT, THT & BGA Capabilities
- EMS & Box Build
- PCB Fabrication
- Component Sourcing & BOM Review
```

这个结构基本符合我们和客户确认过的理解：

```txt
PCB Assembly / PCBA = 主服务大类 / 行业入口词
Turnkey PCB Assembly = 交付方式 / Venture 主推 PCBA 模式
Prototype & Low-volume PCBA = 交付阶段 / 订单量
SMT, THT & BGA Capabilities = 装配工艺 / 技术能力
EMS & Box Build = 更高层级的系统级制造能力
PCB Fabrication = 前端裸板制造 / 支撑 PCBA 的基础能力
Component Sourcing & BOM Review = 支撑 Turnkey PCBA / EMS 的供应链和工程能力
Testing & Quality Control = 贯穿所有服务的质量与测试能力
```

**结论：服务层级方向通过。**

---

### 3.3 Homepage 结构：整体合理

当前首页顺序是：

```txt
HomeHero
ProjectPathStepper
VentureIdentityBlock
PCBAPrimaryBlock
PCBAPathCards
EMSBoxBuildBlock
SupportCapabilitiesBlock
RFQGuidanceBlock
BrandAuthorityTeaser
HomeFinalCTA
```

这个顺序大体合理：

- Hero 先说明 PCBA / EMS 定位。
- Project Path 展示项目交付路径。
- Identity Block 解释 Venture Electronics / Venture PCB / Venture PCBA 的品牌关系。
- PCBA Primary Block 强化 PCBA 作为主入口。
- PCBA Path Cards 展示 Turnkey、Prototype / Low-volume、SMT / THT / BGA。
- EMS & Box Build Block 保留战略高度。
- Supporting Capabilities Block 把 Sourcing、Testing、PCB Fabrication 放到支撑层。
- RFQ Guidance 强化询盘路径。
- Brand Authority Teaser 引导到品牌澄清和官方资源。

**结论：首页模块方向通过。**  
但 preview 前要做下方 P0 文案和结构微调。

---

## 4. Preview 前必须修的 P0 项

### P0-1. 移除或改写所有内部 scaffold / placeholder 口径

当前存在的问题：

- `app/layout.tsx` 里 metadata title 是：

```txt
Venture Electronics Demo Scaffold
```

- metadata description 里有：

```txt
Client-review demo scaffold...
```

- `PlaceholderPage.tsx` 会显示：

```txt
Final copy will be created in Stage 3.
```

- `lib/site-data.ts` 里的 placeholder summary 大量出现：

```txt
Nav-only placeholder for...
validate sitemap coverage...
route wiring...
```

这些是内部工程语气，不适合给客户看。

#### 建议改法

把 metadata 改成客户可读版本，例如：

```ts
export const metadata: Metadata = {
  title: "Venture Electronics Website Architecture Preview",
  description:
    "Initial website architecture preview for Venture Electronics, focused on turnkey PCBA, PCB assembly, EMS, quality, and official brand-resource clarification.",
};
```

把 placeholder note 改成：

```txt
This page is included in the proposed site architecture. Detailed copy and evidence-backed content will be developed after Venture confirms the relevant facts, capabilities, and public-safe claims.
```

不要出现：

```txt
Demo Scaffold
Nav-only placeholder
validate sitemap coverage
route wiring
Stage 3
```

---

### P0-2. Hero 需要强化客户最新确认的 “Turnkey-first PCBA”

客户已经明确：Venture 现在 PCBA 订单基本都是 Turnkey PCB Assembly，不主推 labor-only / standard assembly。

当前 Hero：

```txt
Venture Electronics
PCB Assembly / PCBA and EMS Support for Electronics Projects
```

这不算错，但容易让客户担心又回到 labor-only PCB Assembly 的理解。

#### 推荐改成

```txt
Venture Electronics
Turnkey PCB Assembly / PCBA and EMS Support for Electronics Projects
```

或：

```txt
Venture Electronics
Turnkey-first PCBA and EMS Support for Electronics Projects
```

Hero lead 建议改成：

```txt
Venture Electronics supports electronics product teams with turnkey-first PCB assembly / PCBA, including BOM review, component sourcing, PCB fabrication coordination, assembly, testing, and EMS / box build support under one accountable manufacturing partner.
```

注意：这里用 `PCB fabrication coordination` 比直接承诺裸板生产更安全，除非客户确认裸板自有能力和公开参数。

---

### P0-3. Project Path Stepper 需要补上 PCB Fabrication / Bare-board Coordination

当前 Project Path 是：

```txt
01 Design Files
02 BOM Review
03 PCB Assembly
04 Testing
05 EMS & Box Build
```

客户之前已经问过：PCB Fabrication 按生产流程是不是应该排在 PCBA 前面。我们给客户解释过：服务层级不是生产流程，但生产流程可以单独展示。

如果流程图里完全没有 PCB Fabrication，可能会再次触发这个问题。

#### 推荐流程

```txt
01 RFQ / Design Files
02 PCB Fabrication or Bare-board Coordination
03 BOM Review & Component Sourcing
04 PCB Assembly / PCBA
05 Testing & Quality Control
06 EMS / Box Build / Delivery Support
```

如果页面空间有限，也至少在 Step 1 / Step 2 的文案里加：

```txt
PCB fabrication may be included or coordinated before assembly depending on project scope.
```

---

### P0-4. Brand Clarification 和 Official Resources 不应只保留 placeholder

这两个页面是 GEO 核心页面。客户前面已经明确关心：

- Venture Corporation Limited 是同名 EMS 大厂。
- Venture Electronics 搜索结果里也有耳机品牌干扰。
- Venture PCB 搜索结果更干净。

因此 Brand Clarification / Official Resources 是新站最关键的 GEO 解释层之一。不能让客户点进去看到 placeholder。

#### Brand Clarification 最少应包含

```txt
Venture Electronics is the mother brand for the PCB / PCBA / EMS manufacturing-related online resources operated by Venture Electronics Technology Ltd.

Venture PCB and Venture PCBA are service-entry and search-entry concepts connected to Venture Electronics' PCB assembly, turnkey PCBA, PCB fabrication, component sourcing, testing, and EMS / box build-related services.

The purpose of this page is to clarify the relationship among Venture Electronics, Venture PCB, Venture PCBA, venture-mfg.com, venture-pcba.com, and other confirmed official online resources.
```

可以温和避免同名混淆，但不要在页面上大篇幅攻击或点名竞品：

```txt
Venture Electronics Technology Ltd is an independent PCB / PCBA manufacturing-related company and should not be confused with similarly named companies in other product or technology sectors.
```

#### Official Resources 最少应包含

```txt
Official Venture Electronics Online Resources

- venture-mfg.com: Venture Electronics' existing EMS / PCB / PCB assembly manufacturing website.
- venture-pcba.com: Venture Electronics' PCBA-focused service website.
- LinkedIn: final official URL to be confirmed.
- YouTube: final official channel to be confirmed.
- Other social profiles: to be confirmed before footer or schema use.
```

---

### P0-5. Footer note 改成客户可读口径

当前 footer：

```txt
Public-safe demo copy only. Final factual claims, official channels, certifications, production details, and regulated-industry statements require Stage 3 evidence review.
```

建议改成：

```txt
This preview uses public-safe draft wording. Final website content will be completed after Venture confirms public facts, capabilities, certifications, official channels, and evidence-backed claims.
```

这样仍然保留证据边界，但不像内部审核提示。

---

## 5. P1 建议修改项

### P1-1. RFQ checklist 补充 PCBA / Turnkey PCBA 常见文件

当前 RFQ checklist 已有：

```txt
Gerber files
BOM
Quantity
PCB specifications
Assembly requirements
Testing requirements
Target timeline
Box build or final assembly notes
```

建议补充：

```txt
Pick-and-place / CPL
Assembly drawing
NDA requirement, if applicable
Firmware / programming requirement, if applicable
Consigned / partially consigned parts, if applicable
```

推荐最终 RFQ checklist：

```txt
Gerber files
BOM
Pick-and-place / CPL
Assembly drawing
Quantity
PCB specifications
Assembly requirements
Testing requirements
Target timeline
NDA requirement, if applicable
Firmware / programming requirement, if applicable
Box build or final assembly notes, if applicable
Consigned / partially consigned parts, if applicable
```

---

### P1-2. Engineering 一级导航需要谨慎

当前主导航里有：

```txt
Engineering
- SMT, THT & BGA Process Support
- PCB Test Fixture Support
- IC Programming Support
```

这几个方向可以存在，但目前客户并未逐项确认这些能力是否要重点公开。特别是 IC Programming、Fixture Support 等，如果没有证据或客户确认，不宜在 preview 中显得过重。

#### 建议两种处理方式

**方案 A：保留 Engineering，但弱化为 “Engineering Support” 并标注后续确认。**

适合我们想展示完整架构，但要避免强声明。

**方案 B：暂时不做一级导航，把 DFM / BOM Review / Engineering Support 放入 Services 或 Capabilities 下。**

我更推荐方案 B，尤其是给客户初期 preview 时，避免页面范围显得过大。

---

### P1-3. Industries 需要改成 draft labels，并重新对齐客户优先级

当前行业页：

```txt
Industrial Electronics
IoT & Smart Devices
Consumer Electronics
Energy & Power Electronics
Automation & Control
Communication Equipment
```

这些不一定错，但不完全等于之前建议的首批行业方向。之前更倾向：

```txt
Industrial Automation / Industrial Controls
Medical & Optical Systems / Digital Health
Telecommunications / Networking
Energy & Power / Renewable Energy
Automotive / EV
Security & Safety
```

建议：

1. Preview 中把 Industries 标成 `Draft Industry Labels`。
2. 不要让客户理解成 Venture 已经有每个行业的深度案例证据。
3. `Consumer Electronics` 要谨慎。Venture 主要是 B2B 工业半成品服务，不要过早把方向做得太像消费电子成品。
4. 行业页首期可以先作为应用标签和 buyer-question structure，后续根据客户素材再扩展。

---

### P1-4. Quality & Testing 可以保留一级导航，但所有强声明要 evidence-gated

当前 `Quality & Testing` 一级导航是合理的。它符合 GEO 需要：测试、质量、证据、能力参数会增强 AI 和买家理解。

但要避免未确认强声明：

不要写死：

```txt
ISO 9001
RoHS
No MOQ
24/7 support
24h response
employee count
factory scale
lead time
customer logos
regulated industry compliance
```

除非客户提供证书、证据、有效期、授权或明确确认。

---

### P1-5. Sitemap 页可以保留，但 preview 时不一定暴露给客户

当前 repo 有 `/sitemap/`，这对工程验证和后续 SEO 有用。  
但如果非首页页面都还是 placeholder，preview 时可以不主动引导客户点 sitemap，否则客户会看到大量未完成页面。

---

## 6. 推荐客户 preview 版导航

建议客户 preview 使用以下结构：

```txt
Home
About
  - About Venture Electronics
  - Venture Electronics vs Venture PCB / Venture PCBA
  - Official Resources
  - Company Overview
Services
  - PCB Assembly / PCBA
    - Turnkey PCB Assembly
    - Prototype & Low-volume PCBA
    - SMT, THT & BGA Capabilities
  - EMS & Box Build
  - PCB Fabrication
  - Component Sourcing & BOM Review
Quality & Testing
  - Testing & Quality Control
  - Electrical Testing
  - Testing & Inspection Equipment
  - Quality Management System
  - Packaging & Logistics
Industries
  - Draft industry labels to confirm
Resources
  - FAQ
  - Guides
  - Downloads / Catalog
  - Glossary
  - Case Studies
Contact
Request a Quote
```

是否保留 `Engineering` 一级导航，建议内部再决定。我的建议是：**Preview 阶段先弱化，不要作为太强的一级导航。**

---

## 7. 推荐首页文案调整片段

### 7.1 Hero H1

```txt
Venture Electronics
Turnkey PCB Assembly / PCBA and EMS Support for Electronics Projects
```

### 7.2 Hero Lead

```txt
Venture Electronics supports electronics product teams with turnkey-first PCB assembly / PCBA, including BOM review, component sourcing, PCB fabrication coordination, assembly, testing, and EMS / box build support under one accountable manufacturing partner.
```

### 7.3 PCBA Primary Block

当前：

```txt
For most electronics projects, PCB assembly is the practical starting point. Venture supports PCBA projects with assembly coordination, BOM review, sourcing support, and testing requirements.
```

建议：

```txt
For most overseas inquiries, PCB Assembly / PCBA is the practical starting point. Venture's PCBA work is positioned as turnkey-first: BOM review, component sourcing coordination, assembly, testing, and delivery support can be discussed under one project workflow.
```

### 7.4 EMS Block

当前方向正确，可以轻微强化：

```txt
EMS & Box Build appears as a strategic manufacturing capability, while turnkey PCB Assembly / PCBA remains the primary homepage inquiry entry.
```

### 7.5 Support Capabilities Block

当前方向正确。可以把标题保留：

```txt
Supporting Capabilities That Make PCBA and EMS Projects Work
```

---

## 8. 客户 preview 包装建议

不要把当前页面称为：

```txt
final design
final sitemap
final website structure
```

建议称为：

```txt
Initial Website Architecture & Homepage Direction Preview
```

中文给客户可以说：

```txt
这是新版 GEO 官网的初期网站架构和首页方向 preview，主要用于确认品牌定位、服务层级、首页表达和询盘路径，不是最终文案和最终页面范围。具体事实、参数、证书、案例、官方渠道链接和行业内容会在后续资料确认后再完善。
```

---

## 9. Action Checklist for Build Team

### Must fix before client preview

- [ ] `app/layout.tsx`：去掉 `Demo Scaffold`，改成客户可读 metadata。
- [ ] `components/shared/PlaceholderPage.tsx`：去掉 `Final copy will be created in Stage 3`。
- [ ] `lib/site-data.ts`：去掉或隐藏客户可见的 `Nav-only placeholder / validate sitemap coverage / route wiring` 语气。
- [ ] `components/site/Footer.tsx`：改写 footer note。
- [ ] `components/home/HomeHero.tsx`：强化 `Turnkey PCB Assembly / PCBA` 或 `Turnkey-first PCBA`。
- [ ] `components/home/ProjectPathStepper.tsx`：补上 `PCB Fabrication / Bare-board Coordination`。
- [ ] `/brand/venture-electronics-vs-venture-pcb-pcba/`：填一版客户可读的品牌澄清 copy。
- [ ] `/official-resources/`：填一版客户可读的官方资产关系 copy。

### Should fix soon after preview

- [ ] RFQ checklist 补充 Pick-and-place / CPL、Assembly drawing、NDA、programming requirement 等字段。
- [ ] 决定 Engineering 是否保留一级导航，或移动到 Services / Capabilities 下。
- [ ] Industries 改成 draft labels，并避免强行业案例声明。
- [ ] Quality & Testing 页面后续要做 evidence-backed content，不要提前写死证书、产能和强声明。
- [ ] 后续加 Organization / Service / FAQ / Breadcrumb schema 时，只使用页面可见且客户确认的信息。

---

## 10. Final Recommendation

当前框架可以继续推进，整体方向通过。  
但客户 preview 前，请先完成 P0 清理：

1. 去掉 scaffold / placeholder / Stage 3 内部口径；
2. 强化 Turnkey-first PCBA；
3. Project Path 补上 PCB Fabrication / Bare-board Coordination；
4. Brand Clarification / Official Resources 做成真正可读页面；
5. Footer 和 placeholder 文案改成客户可读的 preview 说明。

完成后，可以给客户作为：

```txt
Venture GEO 新站初期网站架构与首页方向 Preview
```

不建议称为最终设计或最终 sitemap。
