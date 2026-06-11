# Venture Website Rebuild — Stage 2 Site Architecture & Page Responsibility  
## Venture 官网重建 — 第二阶段：站点结构、页面责任、导航层级与 Demo Page 依据

**文件类型：** Site Architecture / Page Responsibility / Demo Planning  
**适用项目：** Venture Electronics GEO 官网重建  
**适用对象：** 策略 / 内容 / GEO / 设计 / 开发 / Codex demo scaffold / 客户沟通  
**阶段：** Stage 2  
**版本：** 中文工作稿 v0.2 — Updated Service Architecture  
**日期：** 2026-05-28  

---

## 0. 本版更新说明

本版根据客户最新确认的 service structure，更新 Stage 2 的 sitemap、导航、footer、页面责任、内部链接、设计影响、开发影响和 demo page 方向。

本版服务架构取代前一版较平铺的服务页面结构。后续内容、设计、开发和 Codex demo scaffold 均应以本版结构为准。

### 0.1 客户最新要求的 service structure

```txt
Services
- PCB Assembly / PCBA  （主服务大类 / 行业入口词）
  - Turnkey PCB Assembly  （交付方式：全流程交付）
  - Prototype & Low-volume PCBA  （交付阶段 / 订单量）
  - SMT, THT & BGA Capabilities （装配工艺 / 技术能力）
- EMS & Box Build  （更高层级的系统级制造能力）
- PCB Fabrication  （前端裸板制造 / 支撑 PCBA 的基础能力）
- Component Sourcing & BOM Review  （支撑 Turnkey PCBA / EMS 的供应链能力）
- Testing & Quality Control  （贯穿所有服务的质量与测试能力）
```

### 0.2 本版取代的旧结构

旧结构中曾将以下页面作为相对平铺的服务页处理：

```txt
PCBA / PCB Assembly
Turnkey PCBA
EMS Manufacturing
Box Build Assembly
Component Sourcing
DFM & BOM Review
Testing & Quality Control
PCB Fabrication
```

本版改为：

```txt
PCB Assembly / PCBA 作为主服务大类
Turnkey / Prototype / SMT-THT-BGA 作为 PCBA 子页
EMS & Box Build 合并为系统级制造能力页
Component Sourcing & BOM Review 合并为供应链与工程审核支持页
Testing & Quality Control 作为跨服务质量信任页
PCB Fabrication 作为支撑 PCBA 的前端裸板制造能力页
```

---

## 1. Stage 2 目标

Stage 2 的目标是把 Stage 1 已确认的业务定位和 claim boundary，转换成可以指导后续内容、设计和开发的网站结构。

这一阶段不写完整页面文案，不做最终 UI，也不开始正式开发。重点是确认：

1. First build 应该做哪些页面；
2. 每个页面承担什么责任；
3. service hierarchy 如何组织；
4. 主导航如何组织；
5. footer 如何组织；
6. 哪些页面 first build 做，哪些 later build 再做；
7. 哪些页面承担转化，哪些页面承担品牌解释，哪些页面承担信任建立；
8. 后续 demo page 应该基于哪一个页面来做；
9. Codex 如果参与 demo scaffold，应遵循哪些 route 和 component 边界。

本项目的新官网不是普通 SEO 询盘站，而是 Venture Electronics 的 **AI-readable official source / GEO authority source / brand fact system**。也就是说，新站不仅要给客户看，也要让 Google、AI search、ChatGPT、Perplexity 等系统更清楚理解 Venture Electronics、Venture PCB、Venture PCBA、`venture-mfg.com`、`venture-pcba.com` 之间的关系。

---

## 2. Stage 2 的基础判断

本阶段沿用以下已确认方向，并结合客户最新 service structure 调整页面层级。

| 项目 | 判断 |
|---|---|
| 母品牌 | Venture Electronics |
| 主服务大类 / 主转化入口 | PCB Assembly / PCBA |
| PCBA 子服务 | Turnkey PCB Assembly、Prototype & Low-volume PCBA、SMT, THT & BGA Capabilities |
| 高价值品牌方向 | EMS & Box Build |
| 差异化支撑 | Component Sourcing & BOM Review、Testing & Quality Control、human project ownership |
| 支持服务 | PCB Fabrication |
| 官网角色 | AI-readable official source / brand entity canonical source |
| 关键架构任务 | 解释 Venture Electronics、Venture PCB、Venture PCBA、现有域名和官方渠道的关系 |
| Claim 原则 | 所有强 claim 必须 evidence-gated，不得发布未确认的证书、客户名、产能、工厂规模、行业合规等内容 |

Stage 2 的核心产出仍然是：

- sitemap；
- 主导航结构；
- footer 信息结构；
- 页面责任表；
- first build / later build 页面划分；
- 页面之间的内部链接关系；
- demo page recommendation；
- Codex demo scaffold 的结构依据。

---

## 3. Architecture Principles / 架构原则

### 3.1 Venture Electronics 必须是母品牌

网站不能因为 “Venture PCB” 或 `venture-pcba.com` 目前有搜索可见度，就把母品牌改成 Venture PCB。

正确表达应该是：

> Venture Electronics 是母品牌；Venture PCB / Venture PCBA 是服务入口、关键词入口或业务线表达，不是新的母品牌。

---

### 3.2 PCB Assembly / PCBA 必须被突出为主服务大类

本版中，**PCB Assembly / PCBA** 不再只是一个普通 service page，而是 first build services 中最重要的主服务大类，也是行业入口词和主转化入口。

它应该在导航、首页、Services hub、footer 和 internal links 中被优先呈现。

网站结构中应该让客户快速进入：

- PCB Assembly / PCBA；
- Turnkey PCB Assembly；
- Prototype & Low-volume PCBA；
- SMT, THT & BGA Capabilities；
- Submit BOM / Gerber；
- Request a Quote。

PCBA 不应该被埋在普通能力卡片中，也不应该被 PCB Fabrication 抢走主定位。

---

### 3.3 PCBA 子页必须服务不同买家意图

PCBA 下设三个子页，分别承接不同搜索意图和买家问题：

| 子页 | 页面责任 |
|---|---|
| Turnkey PCB Assembly | 承接“全流程交付”意图，重点说明 BOM、sourcing、assembly、testing、project coordination |
| Prototype & Low-volume PCBA | 承接样机、小批量、早期阶段项目意图 |
| SMT, THT & BGA Capabilities | 承接装配工艺、技术能力、可制造性和质量问题 |

这三个页面应作为 PCBA 的子级页面，而不是与 PCBA 平级的独立业务方向。

---

### 3.4 EMS & Box Build 必须保留为系统级制造能力

EMS & Box Build 是更高层级的系统级制造能力页，承担品牌高度和长期价值表达。

它的作用是让 Venture 不只是被理解成 “PCB supplier” 或 “PCB factory”，而是被理解成可以支持从 PCBA 到 sourcing、testing、final assembly、project coordination 的电子制造合作伙伴。

本版不再把 EMS Manufacturing 和 Box Build Assembly 拆成两个 first build 一级服务页，除非客户后续明确要求。

---

### 3.5 PCB Fabrication 作为 supporting service

PCB Fabrication 可以保留为一级服务页，但它的定位必须清楚：

> PCB Fabrication 是前端裸板制造能力，是支撑 PCBA 的基础能力，不是 Venture 新官网的主品牌定位。

它可以出现在 Services 下，但不应排在 PCB Assembly / PCBA 前面，也不应被设计成主服务大类。

---

### 3.6 Component Sourcing & BOM Review 作为供应链与工程审核支持能力

本版将 Component Sourcing 和 BOM Review 合并为一个服务页：

```txt
Component Sourcing & BOM Review
```

它的责任是支撑 Turnkey PCB Assembly 和 EMS & Box Build，体现供应链、BOM 风险识别、替代料沟通、工程审核和项目协调能力。

本版不再将 Component Sourcing 和 DFM / BOM Review 拆成两个 first build 独立服务页，除非客户后续明确要求。

---

### 3.7 Testing & Quality Control 是跨服务信任能力

Testing & Quality Control 不是某一个单独服务的附属内容，而是贯穿 PCBA、Turnkey PCB Assembly、Prototype & Low-volume PCBA、SMT / THT / BGA、EMS & Box Build 的信任支撑能力。

页面应重点说明：

- testing / inspection / quality control 的范围；
- 与 PCBA / EMS 的关系；
- 哪些内容需要客户提供 evidence 后才能强表达；
- 不应夸大未确认的认证、合规、设备、测试能力。

---

### 3.8 Brand Clarification 必须进入 first build

本项目和普通官网不同的地方在于：必须解释 Venture Electronics、Venture PCB、Venture PCBA 之间的关系。

因此，first build 中必须包含：

```txt
Brand & Business Line Clarification
```

这个页面不是普通 About 页面，而是品牌实体关系说明页。

---

### 3.9 Official Resources 必须进入 first build

为减少 AI / Google 对 Venture 资产的混乱，first build 中必须包含：

```txt
Official Resources / Online Presence
```

这个页面负责列出已确认的官网、子站、社媒、内容渠道，并说明它们与 Venture Electronics 的关系。

未确认官方身份的账号不能放入 footer，也不能进入 schema `sameAs`。

---

### 3.10 不在 first build 中铺大量行业页

Industries 可以保留为 later build，或者在 first build 中只作为轻量的 application labels 出现。

原因是：如果没有证据支撑，不应该创建大量行业页并写成 Venture 在每个行业都有深案例、认证或合规能力。

---

### 3.11 页面结构必须支持 GEO

每个重要页面后续都应该支持：

- AI summary；
- key facts；
- buyer questions；
- FAQ；
- proof / evidence notes；
- related pages；
- internal links；
- schema / metadata / llms.txt 数据来源。

Stage 2 不写这些内容，但站点结构要为它们预留位置。

---

### 3.12 核心内容必须可爬取

重要品牌说明、服务说明、FAQ、key facts、CTA 不应该只放在图片、PDF 或纯前端交互里。

后续开发时，核心页面内容应以可抓取 HTML 文本呈现。

---

## 4. Current Nav-Only Sitemap / 当前导航验证版页面清单

### 4.1 Nav-only 推荐页面

当前实现目标是验证 sitemap、header dropdown、footer groups 和 route placeholders。以下页面均为 nav-only placeholder，不代表最终内容页已完成。

| 页面 | URL 建议 | 页面类型 | Scaffold 状态 | 核心责任 |
|---|---|---|---|---|
| Home | `/` | Placeholder | 必做 | 首页占位，验证 sitemap 与导航入口 |
| About | `/about/` | About hub | 必做 | About dropdown hub |
| Brand & Business Line Clarification | `/brand/venture-electronics-vs-venture-pcb-pcba/` | Brand authority placeholder | 必做 | 后续解释 Venture Electronics / Venture PCB / Venture PCBA 关系 |
| Official Resources / Online Presence | `/official-resources/` | Brand authority placeholder | 必做 | 后续说明官方域名、社媒、内容渠道 |
| Company Overview | `/about/company-overview/` | About child placeholder | 必做 | 公司概览占位 |
| News | `/about/news/` | About child placeholder | 必做 | 新闻占位 |
| Services | `/services/` | Service hub | 必做 | Services dropdown hub |
| PCB Assembly / PCBA | `/services/pcb-assembly-pcba/` | Primary service placeholder | 必做 | 主服务大类 route |
| Turnkey PCB Assembly | `/services/pcb-assembly-pcba/turnkey-pcb-assembly/` | PCBA child placeholder | 必做 | PCBA 子 route |
| Prototype & Low-volume PCBA | `/services/pcb-assembly-pcba/prototype-low-volume-pcba/` | PCBA child placeholder | 必做 | PCBA 子 route |
| SMT, THT & BGA Capabilities | `/services/pcb-assembly-pcba/smt-tht-bga-capabilities/` | PCBA child placeholder | 必做 | PCBA 子 route |
| EMS & Box Build | `/services/ems-box-build/` | Service placeholder | 必做 | 服务 route |
| PCB Fabrication | `/services/pcb-fabrication/` | Supporting service placeholder | 必做 | 支撑服务 route |
| Component Sourcing & BOM Review | `/services/component-sourcing-bom-review/` | Support service placeholder | 必做 | 支撑服务 route |
| Quality & Testing | `/quality-testing/` | Quality hub | 必做 | Quality & Testing dropdown hub |
| Testing & Quality Control | `/quality-testing/testing-quality-control/` | Quality child placeholder | 必做 | Quality child route |
| Electrical Testing | `/quality-testing/electrical-testing/` | Quality child placeholder | 必做 | Quality child route |
| Product Reliability Testing | `/quality-testing/product-reliability-testing/` | Quality child placeholder | 必做 | Quality child route |
| Testing & Inspection Equipment | `/quality-testing/testing-inspection-equipment/` | Quality child placeholder | 必做 | Quality child route |
| Quality Management System | `/quality-testing/quality-management-system/` | Quality child placeholder | 必做 | Quality child route |
| Packaging & Logistics | `/quality-testing/packaging-logistics/` | Quality child placeholder | 必做 | Quality child route |
| Engineering | `/engineering-support/` | Engineering hub | 必做 | Header / footer label 使用 Engineering，URL 保持 `/engineering-support/` |
| SMT, THT & BGA Process Support | `/engineering-support/smt-tht-bga-process-support/` | Engineering child placeholder | 必做 | Engineering child route |
| PCB Test Fixture Support | `/engineering-support/pcb-test-fixture-support/` | Engineering child placeholder | 必做 | Engineering child route |
| IC Programming Support | `/engineering-support/ic-programming-support/` | Engineering child placeholder | 必做 | Engineering child route |
| Industries | `/industries/` | Industries hub | 必做 | Industries dropdown hub |
| Industrial Electronics | `/industries/industrial-electronics/` | Industry child placeholder | 必做 | Industry child route |
| IoT & Smart Devices | `/industries/iot-smart-devices/` | Industry child placeholder | 必做 | Industry child route |
| Consumer Electronics | `/industries/consumer-electronics/` | Industry child placeholder | 必做 | Industry child route |
| Energy & Power Electronics | `/industries/energy-power-electronics/` | Industry child placeholder | 必做 | Industry child route |
| Automation & Control | `/industries/automation-control/` | Industry child placeholder | 必做 | Industry child route |
| Communication Equipment | `/industries/communication-equipment/` | Industry child placeholder | 必做 | Industry child route |
| Resources | `/resources/` | Resources hub | 必做 | Resources dropdown hub |
| FAQ | `/resources/faq/` | Resource child placeholder | 必做 | Resource child route |
| Blog | `/resources/blog/` | Resource child placeholder | 必做 | Resource child route |
| Guides | `/resources/guides/` | Resource child placeholder | 必做 | Resource child route |
| Downloads | `/resources/downloads/` | Resource child placeholder | 必做 | Resource child route |
| Catalog | `/resources/catalog/` | Resource child placeholder | 必做 | Resource child route |
| Glossary | `/resources/glossary/` | Resource child placeholder | 必做 | Resource child route |
| Case Studies | `/resources/case-studies/` | Resource child placeholder | 必做 | Resource child route |
| Contact | `/contact/` | Contact placeholder | 必做 | Contact route |
| Request a Quote | `/request-a-quote/` | RFQ placeholder | 必做 | RFQ route |
| Thank You | `/thank-you/` | Post-submit placeholder | 必做 | Post-submit route |
| Privacy Policy | `/privacy-policy/` | Legal placeholder | 必做 | Legal route |
| Terms | `/terms/` | Legal placeholder | 必做 | Legal route |
| Sitemap | `/sitemap/` | Sitemap placeholder | 必做 | Human-readable sitemap route |

---

### 4.2 Current Nav-Only 页面树

```txt
/
├── /about/
│   ├── /brand/venture-electronics-vs-venture-pcb-pcba/
│   ├── /official-resources/
│   ├── /about/company-overview/
│   └── /about/news/
│
├── /services/
│   ├── /services/pcb-assembly-pcba/
│   │   ├── /services/pcb-assembly-pcba/turnkey-pcb-assembly/
│   │   ├── /services/pcb-assembly-pcba/prototype-low-volume-pcba/
│   │   └── /services/pcb-assembly-pcba/smt-tht-bga-capabilities/
│   ├── /services/ems-box-build/
│   ├── /services/pcb-fabrication/
│   └── /services/component-sourcing-bom-review/
│
├── /quality-testing/
│   ├── /quality-testing/testing-quality-control/
│   ├── /quality-testing/electrical-testing/
│   ├── /quality-testing/product-reliability-testing/
│   ├── /quality-testing/testing-inspection-equipment/
│   ├── /quality-testing/quality-management-system/
│   └── /quality-testing/packaging-logistics/
│
├── /engineering-support/
│   ├── /engineering-support/smt-tht-bga-process-support/
│   ├── /engineering-support/pcb-test-fixture-support/
│   └── /engineering-support/ic-programming-support/
│
├── /industries/
│   ├── /industries/industrial-electronics/
│   ├── /industries/iot-smart-devices/
│   ├── /industries/consumer-electronics/
│   ├── /industries/energy-power-electronics/
│   ├── /industries/automation-control/
│   └── /industries/communication-equipment/
│
├── /resources/
│   ├── /resources/faq/
│   ├── /resources/blog/
│   ├── /resources/guides/
│   ├── /resources/downloads/
│   ├── /resources/catalog/
│   ├── /resources/glossary/
│   └── /resources/case-studies/
│
├── /contact/
├── /request-a-quote/
├── /thank-you/
├── /privacy-policy/
├── /terms/
└── /sitemap/
```

---

### 4.3 关于 `/capabilities/` 的处理

本版将主导航和 first build service hub 统一为：

```txt
/services/
```

不再将 `/capabilities/` 作为 first build 的独立必要页面。

如后续客户希望保留 “Capabilities” 作为更偏能力总览的页面，可以有两种处理方式：

1. 将 `/capabilities/` 作为 later build；
2. 将 `/capabilities/` redirect 或 internally link 到 `/services/`；
3. 在首页或 Services 页面中保留 “Capabilities overview” 作为 section，而不是独立页面。

当前 Codex demo scaffold 应以 `/services/` 为主，不应使用旧的 `/capabilities/` 作为核心 service hub。

---

## 5. Later Build / Not First Build Yet

以下内容建议暂不作为 first build 核心内容：

| 页面 / 内容 | 建议状态 | 原因 |
|---|---|---|
| 大量 Industries 子页面 | Later build | 容易产生 unsupported industry claims |
| 国家 / 地区 SEO 页面 | Later build | 第一版先解决品牌和服务结构，不急于铺薄页面 |
| Case Studies | Later build / evidence-ready 后做 | 需要客户授权、证据、项目细节 |
| Certifications 页面 | Evidence-ready 后做 | 证书必须确认后才能公开 |
| Customer Logos 页面 | Evidence-ready 后做 | 客户名称 / logo 必须确认授权 |
| Factory / Capacity 页面 | Evidence-ready 后做 | 工厂规模、产能、设备、审核能力属于高风险 claim |
| Download Center | Later build | 第一版不需要复杂下载中心 |
| Blog / 深资源体系 | Later build | 第一版可先用 FAQ / Resources 支撑 GEO |
| `/capabilities/` 独立页面 | Optional later build | 本版 first build 用 `/services/` 承担 service hub |
| EMS Manufacturing 独立页 | Later build only if needed | 本版用 EMS & Box Build 合并页 |
| Box Build Assembly 独立页 | Later build only if needed | 本版用 EMS & Box Build 合并页 |
| DFM & BOM Review 独立页 | Later build only if needed | 本版合并入 Component Sourcing & BOM Review |
| Component Sourcing 独立页 | Later build only if needed | 本版合并入 Component Sourcing & BOM Review |
| 多语言版本 | Later build | 先确认英文主站结构和内容口径 |
| 复杂产品数据库 | Not first build | 与本阶段目标不匹配 |

---

## 6. Main Navigation Structure / 主导航结构

### 6.1 推荐主导航

```txt
Home

Services
- PCB Assembly / PCBA
  - Turnkey PCB Assembly
  - Prototype & Low-volume PCBA
  - SMT, THT & BGA Capabilities
- EMS & Box Build
- PCB Fabrication
- Component Sourcing & BOM Review
- Testing & Quality Control

About
- About Venture Electronics
- Venture Electronics vs Venture PCB / Venture PCBA
- Official Resources / Online Presence

Resources
- FAQ / Resources

Request a Quote
```

---

### 6.2 导航设计逻辑

主导航应该服务三个目标：

第一，让买家快速找到 PCB Assembly / PCBA 和 RFQ 入口。  
第二，让客户理解 Venture 不只是 PCB fabrication，而是 PCBA + EMS & Box Build 的制造协作伙伴。  
第三，让 Google 和 AI 系统能够通过明确页面结构理解品牌关系和服务层级。

因此：

- PCB Assembly / PCBA 应该作为 Services 下的第一个主服务大类；
- Turnkey PCB Assembly、Prototype & Low-volume PCBA、SMT, THT & BGA Capabilities 应作为 PCBA 子项；
- EMS & Box Build 应作为系统级制造能力保留在 Services 一级；
- PCB Fabrication 可以在 Services 中出现，但不要排在 PCBA 前面；
- Component Sourcing & BOM Review 应作为支撑 Turnkey PCBA / EMS 的能力；
- Testing & Quality Control 应作为跨服务质量信任页；
- Brand Clarification 和 Official Resources 应放在 About 下，同时 footer 中也要出现；
- Request a Quote 应作为主 CTA 常驻导航右侧。

---

## 7. Footer Structure / Footer 信息结构

Footer 不只是普通页脚，它在本项目中还承担官方资产说明和品牌实体对齐的作用。

### 7.1 推荐 Footer

```txt
Company
- About Venture Electronics
- Brand & Business Line Clarification
- Official Resources / Online Presence
- Contact Venture Electronics

Services
- PCB Assembly / PCBA
  - Turnkey PCB Assembly
  - Prototype & Low-volume PCBA
  - SMT, THT & BGA Capabilities
- EMS & Box Build
- PCB Fabrication
- Component Sourcing & BOM Review
- Testing & Quality Control

Resources
- FAQ / Resources
- Request a Quote

Official Channels
- Main Website
- PCBA-focused Website
- LinkedIn
- YouTube
- Other confirmed official channels only

Contact
- Email
- Quote Form
- Location / Contact Details
```

---

### 7.2 Footer 官方渠道规则

已确认或待确认渠道应分开处理。

| Channel | 状态 | 处理建议 |
|---|---|---|
| Main site / `venture-mfg.com` | 应作为主站 | 可进入 Official Resources |
| PCBA-focused site / `venture-pcba.com` | 服务 / keyword 入口资产 | 可进入 Official Resources，并说明与母品牌关系 |
| LinkedIn | 已知 | 可进入 Official Resources 和 footer，前提是客户确认当前仍使用 |
| YouTube | 已知 | 可进入 Official Resources 和 footer，前提是客户确认当前仍使用 |
| Facebook candidate | 待确认 | 不进 footer，不进 schema `sameAs` |
| VK | 待确认 | 不进 footer，不进 schema `sameAs` |
| Old Facebook candidate | 待确认 | 不作为主 footer account，除非 Venture 确认为 current official account |
| 同名但无关的 consumer electronics / audio 账号 | 排除 | 不进入 official mapping |

---

## 8. Page Responsibility Classification / 页面责任分类

| 页面类型 | 页面 | 责任 |
|---|---|---|
| Brand authority pages | About、Brand Clarification、Official Resources | 解决品牌 / 实体识别问题 |
| Service hub page | Services | 汇总服务层级，让客户理解 PCBA、EMS & Box Build 和支撑能力关系 |
| Primary conversion page | PCB Assembly / PCBA | 主服务大类、行业入口词、核心询盘入口 |
| PCBA child pages | Turnkey PCB Assembly、Prototype & Low-volume PCBA、SMT, THT & BGA Capabilities | 承接 PCBA 下不同买家意图 |
| Strategic positioning page | EMS & Box Build | 抬高 Venture 到系统级制造能力 |
| Supporting service page | PCB Fabrication | 支撑 PCBA 的前端裸板制造能力 |
| Supply-chain / engineering support page | Component Sourcing & BOM Review | 支撑 Turnkey PCBA / EMS 的供应链和 BOM 审核 |
| Trust / evidence page | Testing & Quality Control、FAQ | 建立可信度，回答买家顾虑 |
| Conversion page | Contact / Request a Quote | 统一询盘入口 |

---

## 9. Page Responsibility Map / 页面责任表

| Page | URL | 页面责任 | 主 CTA | 内容重点 | 模板类型 |
|---|---|---|---|---|---|
| Home | `/` | 定义 Venture Electronics 的母品牌身份、PCBA 主入口、EMS & Box Build 高价值方向 | Request a Quote / Explore Services | 品牌定位、服务层级、PCBA 转化、GEO 解释入口 | Homepage template |
| About Venture Electronics | `/about/` | 解释 Venture Electronics 是谁，服务范围是什么 | Contact Venture | 公司身份、公开安全事实、服务范围 | Brand page template |
| Services | `/services/` | 汇总客户确认的服务层级，并引导进入具体服务页 | Explore PCB Assembly / Request Quote | PCBA 主服务大类、PCBA 子页、EMS & Box Build、supporting capabilities | Service hub template |
| PCB Assembly / PCBA | `/services/pcb-assembly-pcba/` | 主服务大类 / 行业入口词 / 核心转化页 | Request PCBA Quote | PCBA 是什么、适合客户、报价资料、与 turnkey / prototype / SMT-THT-BGA 的关系 | Primary service template |
| Turnkey PCB Assembly | `/services/pcb-assembly-pcba/turnkey-pcb-assembly/` | PCBA 子页 / 全流程交付方式 | Submit BOM / Gerber | BOM、component sourcing、assembly、testing、project coordination | PCBA child page template |
| Prototype & Low-volume PCBA | `/services/pcb-assembly-pcba/prototype-low-volume-pcba/` | PCBA 子页 / 样机和小批量项目 | Request Prototype Quote | prototype、low-volume、early-stage builds、iteration support | PCBA child page template |
| SMT, THT & BGA Capabilities | `/services/pcb-assembly-pcba/smt-tht-bga-capabilities/` | PCBA 子页 / 装配工艺与技术能力 | Discuss Assembly Requirements | SMT、THT、BGA、assembly methods、manufacturability notes | Technical capability template |
| EMS & Box Build | `/services/ems-box-build/` | 系统级制造能力页 / 战略品牌高度页 | Discuss EMS / Box Build Project | 从 PCBA 到 sourcing、testing、final assembly、project coordination 的系统级制造协作 | Strategic service template |
| PCB Fabrication | `/services/pcb-fabrication/` | 支持服务页 | Include PCB Fabrication in Quote | front-end bare board fabrication as support for PCBA | Supporting service template |
| Component Sourcing & BOM Review | `/services/component-sourcing-bom-review/` | 供应链与工程审核支持页 | Send BOM for Review | BOM review、component sourcing、alternative parts、risk notes、support for turnkey / EMS | Support service template |
| Testing & Quality Control | `/quality-testing/testing-quality-control/` | Quality & Testing 子页面 | Discuss Testing Requirements | testing、inspection、quality control、evidence-needed notes | Quality placeholder template |
| Brand Clarification | `/brand/venture-electronics-vs-venture-pcb-pcba/` | 解释 Venture Electronics / Venture PCB / Venture PCBA 关系 | View Official Resources | 母品牌、服务名、关键词入口、子站 / 域名关系 | Brand authority template |
| Official Resources | `/official-resources/` | 说明官方域名、社媒、内容渠道 | Contact Official Team | 官方网站、PCBA-focused site、已确认社媒、待确认资产规则 | Official resources template |
| FAQ / Resources | `/resources/faq/` | 回答真实买家问题，支撑 GEO | Request Quote | PCBA quote、BOM、turnkey、prototype、testing、brand relationship FAQ | FAQ / resource template |
| Contact / RFQ | `/contact/` | 统一询盘入口 | Submit RFQ | 表单、邮箱、项目资料要求、RFQ guidance | Contact template |

---

## 10. Internal Linking Logic / 内部链接逻辑

### 10.1 Home 的链接责任

Home 应该链接到：

- Services；
- PCB Assembly / PCBA；
- Turnkey PCB Assembly；
- Prototype & Low-volume PCBA；
- SMT, THT & BGA Capabilities；
- EMS & Box Build；
- Component Sourcing & BOM Review；
- Testing & Quality Control；
- PCB Fabrication；
- Brand Clarification；
- Official Resources；
- Contact / Request a Quote。

Home 是网站的主解释层，必须同时服务品牌理解、服务层级和转化。

---

### 10.2 Services hub 的链接责任

Services 是服务 hub，应链接到所有 first build 服务页，并以清晰层级展示：

```txt
Services
→ PCB Assembly / PCBA
   → Turnkey PCB Assembly
   → Prototype & Low-volume PCBA
   → SMT, THT & BGA Capabilities
→ EMS & Box Build
→ PCB Fabrication
→ Component Sourcing & BOM Review
→ Testing & Quality Control
```

Services 页面不要写成泛泛的公司介绍，而应该帮助客户判断应该进入哪个服务页。

---

### 10.3 PCB Assembly / PCBA 页的链接责任

PCB Assembly / PCBA 应该链接到：

- Turnkey PCB Assembly；
- Prototype & Low-volume PCBA；
- SMT, THT & BGA Capabilities；
- Component Sourcing & BOM Review；
- Testing & Quality Control；
- PCB Fabrication；
- Contact / RFQ；
- FAQ。

PCBA 页是主转化页，所以页面中的 CTA 和相关服务链接要明显。

---

### 10.4 Turnkey PCB Assembly 页的链接责任

Turnkey PCB Assembly 应该链接到：

- PCB Assembly / PCBA；
- Component Sourcing & BOM Review；
- Testing & Quality Control；
- EMS & Box Build；
- Contact / RFQ。

这个页面适合承接已经有 BOM / Gerber / assembly requirement 的买家。

---

### 10.5 Prototype & Low-volume PCBA 页的链接责任

Prototype & Low-volume PCBA 应该链接到：

- PCB Assembly / PCBA；
- Turnkey PCB Assembly；
- SMT, THT & BGA Capabilities；
- Testing & Quality Control；
- Contact / RFQ。

这个页面适合承接样机、小批量、设计验证、早期项目阶段的买家，但不应夸大 Venture 在特定行业或产品阶段的 case evidence。

---

### 10.6 SMT, THT & BGA Capabilities 页的链接责任

SMT, THT & BGA Capabilities 应该链接到：

- PCB Assembly / PCBA；
- Turnkey PCB Assembly；
- Prototype & Low-volume PCBA；
- Testing & Quality Control；
- Component Sourcing & BOM Review；
- Contact / RFQ。

这个页面应承担技术能力解释，但不要发布未经确认的设备数量、最小 pitch、产能、BGA rework capability、inspection equipment 等强 claim。

---

### 10.7 EMS & Box Build 页的链接责任

EMS & Box Build 应该链接到：

- PCB Assembly / PCBA；
- Turnkey PCB Assembly；
- Component Sourcing & BOM Review；
- Testing & Quality Control；
- Contact / RFQ。

它的作用是把网站从“单一 PCBA 询盘站”抬高到“系统级电子制造协作伙伴”。

---

### 10.8 PCB Fabrication 页的链接责任

PCB Fabrication 应该链接到：

- PCB Assembly / PCBA；
- Turnkey PCB Assembly；
- Component Sourcing & BOM Review；
- Testing & Quality Control；
- Contact / RFQ。

这个页面的定位是支撑 PCBA，而不是把 Venture 重新定位成 PCB bare board supplier。

---

### 10.9 Component Sourcing & BOM Review 页的链接责任

Component Sourcing & BOM Review 应该链接到：

- Turnkey PCB Assembly；
- EMS & Box Build；
- PCB Assembly / PCBA；
- Testing & Quality Control；
- Contact / RFQ。

它应突出 sourcing 和 BOM review 对 turnkey / EMS 项目的支撑，不应写成无限制 supply chain guarantee。

---

### 10.10 Testing & Quality Control 页的链接责任

Testing & Quality Control 应该链接到：

- PCB Assembly / PCBA；
- Turnkey PCB Assembly；
- Prototype & Low-volume PCBA；
- SMT, THT & BGA Capabilities；
- EMS & Box Build；
- Contact / RFQ。

这个页面是跨服务 trust page，应避免未经证据支持的认证、合规和测试设备 claim。

---

### 10.11 Brand Clarification 的链接责任

Brand Clarification 应该链接到：

- About Venture Electronics；
- Official Resources；
- Services；
- PCB Assembly / PCBA；
- Contact。

它应该回答：

- Venture Electronics 是什么；
- Venture PCB 是什么；
- Venture PCBA 是什么；
- `venture-mfg.com` 和 `venture-pcba.com` 的关系是什么；
- 哪些渠道是官方来源。

---

### 10.12 Official Resources 的链接责任

Official Resources 应该链接到：

- 主官网；
- PCBA-focused site；
- 已确认社媒；
- Brand Clarification；
- Contact。

这个页面不应该收录未确认官方身份的渠道。

---

## 11. Design Implications / 设计影响

Stage 2 之后，设计团队不应该直接开始“自由发挥首页”，而应该基于页面责任设计模板。

### 11.1 First build 至少需要这些模板

| 模板 | 覆盖页面 |
|---|---|
| Homepage template | Home |
| Service hub template | Services |
| Primary service template | PCB Assembly / PCBA |
| PCBA child page template | Turnkey PCB Assembly、Prototype & Low-volume PCBA |
| Technical capability template | SMT, THT & BGA Capabilities |
| Strategic service template | EMS & Box Build |
| Supporting service template | PCB Fabrication、Component Sourcing & BOM Review |
| Trust page template | Testing & Quality Control |
| Brand authority template | About、Brand Clarification、Official Resources |
| FAQ / resource template | FAQ / Resources |
| Contact / RFQ template | Contact |

---

### 11.2 设计重点

设计团队需要确保：

1. PCB Assembly / PCBA 在首页和导航中足够突出；
2. Turnkey、Prototype、SMT / THT / BGA 明确作为 PCBA 子项出现；
3. EMS & Box Build 有品牌高度，不像普通小服务卡片；
4. PCB Fabrication 作为支持服务出现，不抢主定位；
5. Component Sourcing & BOM Review 被表达为支撑 Turnkey / EMS 的能力；
6. Testing & Quality Control 被表达为贯穿所有服务的质量能力；
7. Brand Clarification 页面清晰、正式，但不要像法律声明；
8. Official Resources 页面可信、清楚、适合 AI / Google 理解；
9. FAQ、key facts、proof points、CTA 有明确视觉位置；
10. 重要解释内容不能只做成图片；
11. 页面不能只剩 slogan，要有可读的信息结构。

---

### 11.3 首页 Demo 的设计要求

后续 demo page 推荐做首页，因此首页设计必须能展示：

- Venture Electronics 母品牌；
- PCB Assembly / PCBA 主服务大类；
- PCBA 下的 Turnkey / Prototype / SMT-THT-BGA 子结构；
- EMS & Box Build 的系统级制造高度；
- PCB Fabrication / Component Sourcing & BOM Review / Testing & Quality Control 的支撑关系；
- Brand Clarification / Official Resources 的入口；
- RFQ 转化路径。

---

## 12. Development Implications / 开发影响

Stage 2 之后，开发团队需要基于 sitemap 判断后续实现方式。

### 12.1 页面实现建议

| 页面类型 | 实现建议 |
|---|---|
| Home | 静态页面 + 可管理内容区块 |
| About | 静态 / CMS 可编辑内容 |
| Services | Service hub 页面，可复用服务分组和服务卡片 |
| PCB Assembly / PCBA | 主服务 category 页面，支持子页导航 |
| PCBA child pages | 可复用 child service template |
| EMS & Box Build | Strategic service template |
| PCB Fabrication | Supporting service template |
| Component Sourcing & BOM Review | Support service template |
| Testing & Quality Control | Trust page template |
| Brand Clarification | 静态页面，内容需要严格审核 |
| Official Resources | 可管理官方渠道，但需要审核状态 |
| FAQ / Resources | CMS 管理 FAQ 条目 |
| Contact / RFQ | 表单 + 项目资料字段 |

---

### 12.2 推荐 Next.js App Router route structure

Codex demo scaffold 应使用以下 route structure：

```txt
app/
├── page.tsx
├── layout.tsx
├── globals.css
├── about/
│   ├── page.tsx
│   ├── company-overview/
│   │   └── page.tsx
│   └── news/
│       └── page.tsx
├── services/
│   ├── page.tsx
│   ├── pcb-assembly-pcba/
│   │   ├── page.tsx
│   │   ├── turnkey-pcb-assembly/
│   │   │   └── page.tsx
│   │   ├── prototype-low-volume-pcba/
│   │   │   └── page.tsx
│   │   └── smt-tht-bga-capabilities/
│   │       └── page.tsx
│   ├── ems-box-build/
│   │   └── page.tsx
│   ├── pcb-fabrication/
│   │   └── page.tsx
│   └── component-sourcing-bom-review/
│       └── page.tsx
├── quality-testing/
│   ├── page.tsx
│   ├── testing-quality-control/
│   │   └── page.tsx
│   ├── electrical-testing/
│   │   └── page.tsx
│   ├── product-reliability-testing/
│   │   └── page.tsx
│   ├── testing-inspection-equipment/
│   │   └── page.tsx
│   ├── quality-management-system/
│   │   └── page.tsx
│   └── packaging-logistics/
│       └── page.tsx
├── engineering-support/
│   ├── page.tsx
│   ├── smt-tht-bga-process-support/
│   │   └── page.tsx
│   ├── pcb-test-fixture-support/
│   │   └── page.tsx
│   └── ic-programming-support/
│       └── page.tsx
├── industries/
│   ├── page.tsx
│   ├── industrial-electronics/
│   │   └── page.tsx
│   ├── iot-smart-devices/
│   │   └── page.tsx
│   ├── consumer-electronics/
│   │   └── page.tsx
│   ├── energy-power-electronics/
│   │   └── page.tsx
│   ├── automation-control/
│   │   └── page.tsx
│   └── communication-equipment/
│       └── page.tsx
├── brand/
│   └── venture-electronics-vs-venture-pcb-pcba/
│       └── page.tsx
├── official-resources/
│   └── page.tsx
├── resources/
│   ├── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   ├── guides/
│   │   └── page.tsx
│   ├── downloads/
│   │   └── page.tsx
│   ├── catalog/
│   │   └── page.tsx
│   ├── glossary/
│   │   └── page.tsx
│   └── case-studies/
│       └── page.tsx
├── contact/
│   └── page.tsx
├── request-a-quote/
│   └── page.tsx
├── thank-you/
│   └── page.tsx
├── privacy-policy/
│   └── page.tsx
├── terms/
│   └── page.tsx
└── sitemap/
    └── page.tsx
```

---

### 12.3 推荐组件结构

Codex demo scaffold 可按以下组件结构组织：

```txt
components/
├── site/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── CTAButton.tsx
├── home/
│   ├── Hero.tsx
│   ├── BrandPositioning.tsx
│   ├── ServicesOverview.tsx
│   ├── PCBAQuoteBlock.tsx
│   ├── EMSBoxBuildBlock.tsx
│   ├── SupportCapabilitiesBlock.tsx
│   ├── BrandClarificationTeaser.tsx
│   ├── OfficialResourcesTeaser.tsx
│   └── FinalCTA.tsx
└── shared/
    ├── PageShell.tsx
    ├── SectionHeader.tsx
    ├── ServiceCard.tsx
    └── ServiceGroup.tsx

lib/
└── site-data.ts
```

---

### 12.4 开发需要预留的结构

开发团队需要为后续 SEO / GEO / machine-readable layer 预留：

- page title；
- meta description；
- canonical 规则；
- breadcrumb；
- FAQ 数据；
- key facts 数据；
- service summary；
- related pages；
- schema 数据来源；
- sitemap；
- robots；
- llms.txt；
- official sameAs links。

但 Stage 2 不要求写 schema 代码，只要求 sitemap 和页面责任支持后续实现。

---

### 12.5 开发边界

开发团队和 Codex 不应该在 sitemap 未确认前开始正式开发。

开发团队和 Codex 也不应该：

- 使用旧的 flat service structure；
- 使用 `/capabilities/` 作为核心 service hub；
- 将 EMS Manufacturing 和 Box Build Assembly 拆成两个 first build 一级页面；
- 将 Component Sourcing 和 DFM / BOM Review 拆成两个 first build 一级页面；
- 直接复制旧站 URL 结构；
- 自行删减 Brand Clarification 或 Official Resources；
- 把核心内容做成纯 client-side JS；
- 把所有页面做成自由拖拽 page builder；
- 允许客户自由修改 schema / 页面结构；
- 把未确认社媒写入 footer 或 schema `sameAs`；
- 发明证书、工厂规模、客户名称、产能、设备、行业合规等 claim。

---

## 13. Content / GEO Implications / 内容与 GEO 影响

Stage 2 不写完整文案，但它决定 Stage 3 的 page brief 方向。

### 13.1 Stage 3 需要基于本架构输出

后续每个页面应该有：

- page purpose；
- target audience；
- AI summary；
- key facts；
- service scope；
- buyer questions；
- FAQ；
- CTA；
- proof / evidence notes；
- claim risk notes；
- related pages；
- internal linking requirements。

---

### 13.2 各服务页的内容方向

| 页面 | Stage 3 内容方向 |
|---|---|
| PCB Assembly / PCBA | 解释 PCBA 主服务、适合客户、报价资料、与子页和支撑能力的关系 |
| Turnkey PCB Assembly | 解释全流程交付方式、BOM、component sourcing、assembly、testing、project coordination |
| Prototype & Low-volume PCBA | 解释样机、小批量、迭代、早期项目阶段的支持方式 |
| SMT, THT & BGA Capabilities | 解释装配工艺和技术能力，但避免未经确认的设备、最小尺寸、产能 claim |
| EMS & Box Build | 解释系统级制造协作、final assembly、testing、project follow-through |
| PCB Fabrication | 解释 front-end bare board fabrication 如何支撑 PCBA |
| Component Sourcing & BOM Review | 解释 BOM review、sourcing coordination、alternative parts、risk notes |
| Testing & Quality Control | 解释 testing / inspection / quality control 作为跨服务信任能力 |
| Brand Clarification | 解释 Venture Electronics / Venture PCB / Venture PCBA / domain relationship |
| Official Resources | 解释已确认官方渠道和未确认渠道处理规则 |

---

### 13.3 Claim handling

所有页面内容需要按以下类别处理：

| Claim 类型 | 处理方式 |
|---|---|
| Public-safe | 可公开写，但保持准确 |
| Evidence-needed | 需要客户提供证据后才能强表达 |
| Partner-network wording only | 只能用合作 / 协调 / support 表述，不能写成自有能力 |
| Internal-only | 不公开 |
| Prohibited | 不写 |

尤其需要注意：

- certification；
- factory scale；
- production volume；
- customer names；
- customer logos；
- audit readiness；
- industry compliance；
- medical / automotive / aerospace 等高风险行业 claim；
- SMT / THT / BGA 相关设备和参数；
- testing equipment；
- BGA rework / X-ray / AOI / ICT / FCT 等具体能力，除非有证据；
- sourcing guarantee 或 supply chain guarantee；
- prototype lead time 或 low-volume production capacity。

---

## 14. Nav-Only Scaffold Recommendation / 导航验证版建议

### 14.1 推荐 demo：Sitemap + Header / Footer Navigation

当前阶段推荐给客户看的第一版 demo 是：

```txt
Venture Nav-Only Sitemap Scaffold — Route Tree + Header Dropdowns + Footer Groups
```

此版本不验证最终首页视觉、不写最终页面内容、不做行业 claim。它只验证：

1. 当前 sitemap 是否完整；
2. header dropdown 分组是否合理；
3. footer groups 是否覆盖核心页面；
4. 每个 route placeholder 是否可访问；
5. `/services/`、`/quality-testing/`、`/engineering-support/`、`/industries/`、`/resources/` 等 hub 是否清楚。

### 14.2 后续 Home Demo

当前 sitemap 和导航结构确认后，下一阶段可以再做 Home demo。Home demo 才负责验证：

1. Venture Electronics 是否被正确呈现为母品牌；
2. PCB Assembly / PCBA 是否被正确突出为主服务大类和主转化入口；
3. Turnkey / Prototype / SMT-THT-BGA 是否被正确表达为 PCBA 子结构；
4. EMS & Box Build 是否被保留为系统级制造高度；
5. Brand Clarification / Official Resources 是否自然进入新官网结构。

---

## 15. Codex Demo Scaffold Instructions / 给 Codex 的结构指令

如果使用 Codex 根据本 Stage 2 文档生成 Next.js demo scaffold，应给出以下约束。

### 15.1 Source of truth

```txt
Use this updated Stage 2 Markdown document as the source of truth for site architecture, page responsibility, navigation, current nav-only route structure, and placeholder route scope.
```

### 15.2 Required service architecture

```txt
Services
- PCB Assembly / PCBA
  - Turnkey PCB Assembly
  - Prototype & Low-volume PCBA
  - SMT, THT & BGA Capabilities
- EMS & Box Build
- PCB Fabrication
- Component Sourcing & BOM Review
- Testing & Quality Control
```

### 15.3 Codex must do

```txt
1. Build a Next.js App Router demo scaffold.
2. Create app/page.tsx as a nav-only homepage placeholder.
3. Create /services/ as the service hub.
4. Create PCB Assembly / PCBA as the primary service route.
5. Create Turnkey, Prototype, and SMT-THT-BGA as child routes under PCB Assembly / PCBA.
6. Create route placeholders for EMS & Box Build, PCB Fabrication, and Component Sourcing & BOM Review.
7. Create /quality-testing/ and its child route placeholders, including Testing & Quality Control.
8. Create /engineering-support/ routes, with top-level navigation label "Engineering".
9. Create placeholder routes for About, Brand Clarification, Official Resources, Industries, Resources, Contact, Request a Quote, Thank You, legal pages, and Sitemap.
10. Create reusable Header, Footer, CTAButton, PageShell, SectionHeader, ServiceCard, ServiceGroup components.
11. Store service/navigation data in lib/site-data.ts.
12. Keep all content as public-safe placeholder copy.
13. Keep core content crawlable as HTML text.
```

### 15.4 Codex must not do

```txt
1. Do not use the old flat service structure.
2. Do not use /capabilities/ as the core service hub.
3. Do not use /services/testing-quality-control/; use /quality-testing/testing-quality-control/.
4. Do not split EMS Manufacturing and Box Build Assembly into two first-build service routes.
5. Do not split Component Sourcing and DFM / BOM Review into two first-build service routes.
6. Do not create final industry content; industry routes are placeholders only.
7. Do not implement CMS.
8. Do not implement schema.
9. Do not implement llms.txt yet.
10. Do not invent certifications, factory scale, customer names, production volume, equipment specs, testing equipment, industry compliance, or unsupported lead time claims.
11. Do not make core service content client-side only.
```

---

## 16. Team Responsibility in Stage 2 / 团队分工

### 16.1 Strategy / Content / GEO

负责：

- 确认 first build 页面；
- 确认客户最新 service hierarchy；
- 确认页面责任；
- 确认 PCB Assembly / PCBA 的主服务大类地位；
- 确认 Turnkey / Prototype / SMT-THT-BGA 的 PCBA 子页地位；
- 确认 EMS & Box Build 的系统级制造定位；
- 确认 Component Sourcing & BOM Review 的合并页定位；
- 确认 Testing & Quality Control 的跨服务 trust page 定位；
- 确认 Brand Clarification 和 Official Resources 的架构位置；
- 确认 claim 风险边界；
- 确认 demo page 应该用 Home。

不负责：

- 画最终 UI；
- 写完整英文页面文案；
- 写代码；
- 自行发布未确认 claim。

---

### 16.2 Design

负责：

- 判断导航是否清晰；
- 判断 Services 层级是否容易理解；
- 判断页面模板是否可复用；
- 判断首页 demo 的信息层级；
- 判断哪些页面需要更强 trust / proof 视觉；
- 确保关键 GEO 信息不会被设计隐藏。

不负责：

- 重新定义服务主次；
- 把 PCBA 子页重新拉平成一级服务；
- 删除 Brand Clarification / Official Resources；
- 决定 claim 真实性；
- 添加未经确认的证书、客户 logo 或产能信息。

---

### 16.3 Development / Codex

负责：

- 判断 sitemap 是否可实现；
- 判断 URL 结构是否清楚；
- 判断页面模板如何复用；
- 判断哪些内容未来需要 CMS；
- 按本 Stage 2 文档创建 demo scaffold；
- 为后续 crawlability、metadata、schema、llms.txt 预留结构。

不负责：

- 在 sitemap 未确认前开发正式站；
- 自行复制旧站 URL；
- 自行删减页面范围；
- 判断客户事实是否可公开；
- 发明页面内容或 claim。

---

## 17. Open Questions Before Client Confirmation / 客户确认前问题

Stage 2 可以先形成内部版，但客户确认前建议列出这些问题：

| 问题 | 用途 |
|---|---|
| `venture-mfg.com` 和 `venture-pcba.com` 的最终关系如何对外表述？ | Brand Clarification / Official Resources |
| LinkedIn 和 YouTube 是否确认为当前官方渠道？ | Footer / schema sameAs |
| Facebook、VK、旧 Facebook candidate 是否官方且仍使用？ | Official Resources |
| PCB Assembly / PCBA 页面是否使用 “PCB Assembly / PCBA” 这个最终页面标题？ | Service naming |
| Turnkey 子页是否使用 “Turnkey PCB Assembly” 而不是 “Turnkey PCBA”？ | Service naming |
| Prototype 页面是否强调 low-volume，还是同时覆盖 prototype / pilot run？ | Service scope |
| SMT, THT & BGA 页面是否有可公开技术参数或设备证据？ | Claim boundary |
| EMS & Box Build 是否需要后续拆分成两个页面？ | Later build decision |
| Component Sourcing & BOM Review 是否需要包含 DFM wording？ | Content scope |
| 是否有可公开证书？ | Testing / Quality / trust pages |
| 是否有可公开客户案例或 logo？ | Later build case pages |
| 是否有可公开工厂、设备、产能资料？ | Claim boundary |
| RFQ 表单需要哪些字段？ | Contact / PCBA quote flow |
| 是否有优先国家或地区？ | Later build geo pages |
| 是否有优先行业标签？ | Later build industries / homepage labels |

---

## 18. Stage 2 Acceptance Criteria / 验收标准

Stage 2 完成后，必须能清楚回答以下问题：

1. First build 到底做哪些页面？
2. 每个页面的责任是否清楚？
3. Services 是否已改为客户最新确认的结构？
4. PCB Assembly / PCBA 是否被明确突出为主服务大类和主转化入口？
5. Turnkey PCB Assembly 是否作为 PCBA 子页，而不是平级服务？
6. Prototype & Low-volume PCBA 是否作为 PCBA 子页？
7. SMT, THT & BGA Capabilities 是否作为 PCBA 子页？
8. EMS & Box Build 是否作为系统级制造能力被保留？
9. PCB Fabrication 是否没有被误放成主品牌定位？
10. Component Sourcing & BOM Review 是否作为支撑 Turnkey / EMS 的合并页？
11. Testing & Quality Control 是否作为跨服务 trust page？
12. Brand & Business Line Clarification 是否进入 first build？
13. Official Resources / Online Presence 是否进入 first build？
14. 主导航是否能体现服务层级？
15. Footer 是否能体现服务层级和官方资产关系？
16. 未确认社媒是否没有进入 footer / schema `sameAs`？
17. Industries、case studies、certifications 是否没有在无证据情况下强行铺开？
18. 页面结构是否支持后续 Content / GEO / SEO / schema / llms.txt？
19. 设计团队是否可以基于此开始首页 demo？
20. Codex / 开发团队是否可以基于此判断 Next.js route structure、组件结构和 CMS 边界？
21. 客户是否可以通过该文档理解新官网不是普通 redesign，而是品牌事实系统？

---

## 19. Recommended Next Step / 下一步建议

Stage 2 文档确认后，下一步不应该直接进入全站设计，而是先做一个首页 demo：

```txt
Venture Homepage Demo — Brand + PCBA-first Service Hierarchy
```

这个 demo page 用来验证：

- Venture Electronics 的母品牌表达；
- PCB Assembly / PCBA 的主服务大类地位；
- Turnkey / Prototype / SMT-THT-BGA 的 PCBA 子结构；
- EMS & Box Build 的系统级制造高度；
- PCB Fabrication、Component Sourcing & BOM Review、Testing & Quality Control 的支撑关系；
- Brand Clarification 和 Official Resources 的结构入口；
- 新官网作为 GEO authority source / brand fact system 的整体方向。

客户确认首页 demo 后，再进入 Stage 3 的 page brief 和 Stage 4 的 visual design system。

---

## 20. 参考依据

本文件基于本次对话中已整理的 Stage 2 方向、客户最新 service structure，以及以下项目资料：

- `Venture官网重建_ImplementationPlanBreakdown_设计开发边界版(1).md`
- `website-direction-notes.md`
- `venture-stage2-site-architecture-page-responsibility.zh(1).md`
