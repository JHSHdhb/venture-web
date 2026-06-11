# Venture 官网重建 Implementation Plan Breakdown

**文件类型：** Implementation guideline / 设计与开发边界划分版  
**适用项目：** Venture Electronics GEO 官网重建  
**适用对象：** Zbot 内部策略、内容、设计、开发、QA 协作  
**版本：** v1.0  
**日期：** 2026-05-25  

---

## 0. 文件定位


它的作用是：

> 基于 Venture repo 中已经整理好的客户 context，结合 Zbot 的 GEO-friendly / vibe-coding B2B 建站方式，形成一个可以直接指导后续设计、开发、内容和 QA 协作的 implementation plan breakdown。

本文件重点划分：

- 每个阶段的目标；
- 每个阶段的输入与输出；
- 设计团队负责到什么边界；
- 开发团队负责到什么边界；
- 内容 / GEO / SEO 团队负责到什么边界；
- 每个阶段结束时需要达到什么交付状态。

本文件不展开：

- 具体代码实现；
- 具体组件代码；
- Next.js 目录细节；
- Payload CMS 字段细节；
- schema JSON-LD 具体代码；
- 部署流程；
- 每个页面的完整英文文案；
- 精确时间排期。

---

## 1. 项目实施基础

### 1.1 Venture repo 中的核心客户 context

Venture 官网重建不能按普通企业官网处理。repo 中已经明确，本项目的核心不是简单换设计，而是要解决 Venture 在 Google 和 AI 系统中的品牌 / 实体识别问题。

当前实施基础如下：

1. **Venture Electronics 是母品牌。**  
   不应因为 `venture-pcba.com` 或 “Venture PCB” 当前有一定搜索可见度，就把母品牌改成 Venture PCB。

2. **新官网应作为 Venture Electronics 的 AI-readable official source。**  
   这里的 canonical source 指品牌 / 实体关系层面的权威说明源，不是技术 SEO 里的 `rel=canonical` 标签。

3. **服务层级需要稳定。**
   - PCBA / PCB Assembly：当前主要询盘入口和主销售线；
   - EMS / Box Build：高价值能力和长期品牌高度；
   - Component Sourcing、DFM / BOM Review、Testing / Quality Control：信任建立与差异化支撑；
   - PCB Fabrication：支持服务，不作为核心差异化。

4. **网站必须解释 Venture Electronics、Venture PCB、Venture PCBA、`venture-mfg.com`、`venture-pcba.com` 之间的关系。**  
   这是新站不同于普通 SEO 站的关键。

5. **所有强 claim 都必须 evidence-gated。**  
   证书、客户名称、工厂规模、产能、行业合规、认证能力等内容，不能在没有证据的情况下直接写成强营销表述。

---

### 1.2 Zbot GEO-friendly / vibe-coding B2B 建站方式

本项目采用的是 Zbot 的结构型 B2B 建站方式，而不是传统“先画漂亮页面，再填内容”的方式。

核心原则：

> 先让 AI / Pro 基于客户 context 生成结构化建站 plan，再由策略、内容、设计、开发分别确认边界，最后进入具体实现。

在这个方法里，AI / Pro 的角色不是直接替代设计师或开发者，而是帮助团队快速把客户资料转成：

- 网站角色判断；
- 服务层级；
- 页面结构；
- GEO 内容结构；
- claim boundary；
- 设计边界；
- 开发边界；
- QA 标准。

Zbot 的 B2B GEO-friendly 建站标准是：

> 不只做一个好看的公司 brochure site，而是做一个 crawlable、structured、AI-readable 的 company knowledge structure。

因此，后续设计和开发都需要围绕“可被人读懂，也可被搜索引擎和 AI 系统理解”来执行。

---

## 2. Implementation Plan 总目标

本次 Venture 官网重建的 implementation 目标是：

> 建立一个以 Venture Electronics 为母品牌、以 PCBA 为主要转化入口、以 EMS / Box Build 为高价值品牌方向、以 GEO-friendly 结构支撑 AI 和搜索理解的 B2B 官网系统。

网站最终需要同时满足四类目标：

| 目标类型 | 说明 |
|---|---|
| 品牌目标 | 解释 Venture Electronics、Venture PCB、Venture PCBA 及相关域名 / 渠道的关系 |
| 转化目标 | 让 PCBA / Turnkey PCBA / Component Sourcing / Testing 等服务更容易产生询盘 |
| 信任目标 | 通过质量、测试、供应链、DFM / BOM、FAQ、案例 / 证据内容建立可信度 |
| GEO 目标 | 让 Google、AI search、ChatGPT / Perplexity 等系统更容易理解、引用和归类 Venture |

---

## 3. First Build Scope

第一版网站不追求页面数量最大化，而是先建立正确的网站骨架和品牌事实系统。

### 3.1 First build 建议包含

| 页面 / 模块 | 主要作用 |
|---|---|
| Home | 定义 Venture Electronics 的母品牌身份和 PCBA / EMS 定位 |
| About Venture Electronics | 解释公司身份、服务范围、公开安全表述 |
| Capabilities | 总览 PCBA、EMS、Box Build、Sourcing、Testing 等能力 |
| PCBA / PCB Assembly | 主要询盘入口 |
| Turnkey PCBA | 高意图转化服务页 |
| EMS Manufacturing | 长期品牌高度与高价值能力 |
| Box Build Assembly | 展示完整产品组装能力 |
| Component Sourcing | 体现供应链和 BOM 支持能力 |
| DFM & BOM Review | 体现工程支持和项目前期风险控制 |
| Testing & Quality Control | 支撑质量信任和证据表达 |
| PCB Fabrication | 作为 one-stop workflow 的支持服务 |
| Brand & Business Line Clarification | 解释 Venture Electronics / Venture PCB / Venture PCBA 关系 |
| Official Resources / Online Presence | 说明官方域名、社媒、内容渠道，减少 AI / Google 混乱 |
| FAQ / Resources | 回答真实买家问题，支撑 GEO 和转化 |
| Contact / Request a Quote | 统一询盘入口 |

### 3.2 暂不作为 first build 核心的内容

以下内容可以作为后续扩展，不建议在第一版中强行铺开：

- 大量行业页；
- 大量国家 / 地区页；
- 没有证据支撑的 case study；
- 没有客户确认的证书页；
- 没有确认官方身份的社媒入口；
- 过深的技术博客体系；
- 复杂下载中心；
- 复杂产品数据库。

---

## 4. Implementation Breakdown Overview

以下阶段不是详细排期，而是实施边界。每个阶段结束后，都应该形成可交付、可 review、可进入下一步的结果。

| 阶段 | 阶段名称 | 核心产出 | 主要责任 |
|---|---|---|---|
| 1 | Context & Claim Boundary Lock | 项目 context brief、服务层级、claim boundary、first build scope | 策略 / 内容 / GEO |
| 2 | Site Architecture & Page Responsibility | 站点结构、页面责任、导航层级、first build 页面清单 | 策略 / 内容 / 设计 / 开发 |
| 3 | Content & GEO Structure | 页面内容框架、GEO 信息块、FAQ / proof / CTA 结构 | 内容 / GEO |
| 4 | Visual Design System & Page Layout | 视觉方向、页面模板、组件分组、设计交付稿 | 设计 |
| 5 | Frontend Implementation Boundary | 可爬取页面、页面模板、组件落地、基础交互 | 开发 |
| 6 | CMS / Content Operations Boundary | 内容管理范围、编辑权限、内容更新流程 | 开发 / 内容 |
| 7 | SEO / GEO / Machine-readable Layer | metadata、sitemap、robots、llms.txt、schema 支撑 | 开发 / GEO / SEO |
| 8 | QA & Launch Readiness | 上线检查、claim 检查、设计还原、可爬取性检查 | 全团队 |
| 9 | Post-launch Iteration | 数据观察、内容补强、AI / 搜索可见度迭代 | SEO / GEO / 内容 / 开发 |

---

# 5. Stage 1 — Context & Claim Boundary Lock

## 目标

把 Venture repo 中分散的客户 context 转换成可以指导建站的实施约束。

这个阶段的重点不是设计网站，也不是写代码，而是确认网站不能偏离哪些事实。

## 输入

- Venture positioning context；
- project source map；
- decisions；
- website direction notes；
- 客户确认包；
- Zbot B2B GEO-friendly 建站 SOP；
- 现有 Venture 官网和相关域名信息；
- 已确认或待确认的社媒 / 官方渠道。

## 输出

- 项目 context brief；
- Venture 品牌关系说明；
- 服务层级表；
- first build scope；
- claim boundary list；
- public-safe / evidence-needed / partner-network wording / internal-only / prohibited 分类；
- 官方渠道确认状态表。

## 设计边界

设计团队在本阶段可以参与：

- 理解品牌定位；
- 判断网站整体视觉气质；
- 提出需要哪些图片、图标、证据素材；
- 初步判断首页和核心服务页的信息层级。

设计团队在本阶段不负责：

- 决定 Venture 是否改名为 Venture PCB；
- 决定服务优先级；
- 决定证书 / 客户名 / 工厂规模是否能公开；
- 输出最终 UI；
- 改写客户事实。

## 开发边界

开发团队在本阶段可以参与：

- 判断 first build scope 对网站结构的影响；
- 判断哪些内容需要结构化管理；
- 判断哪些页面需要可爬取、可复用、可扩展；
- 提醒团队哪些内容不适合只放在图片、PDF 或前端交互中。

开发团队在本阶段不负责：

- 写代码；
- 创建项目目录；
- 设计 CMS 字段；
- 写 schema；
- 做部署方案。

## 阶段验收标准

进入下一阶段前，需要确认：

- Venture Electronics 作为母品牌的方向已确认；
- PCBA / EMS / Box Build / PCB Fabrication 的层级已确认；
- 新站作为 AI-readable official source 的角色已确认；
- first build scope 已确认；
- 强 claim 的处理原则已确认；
- 未确认官方渠道不会被直接放进 footer 或 schema。

---

# 6. Stage 2 — Site Architecture & Page Responsibility

## 目标

把业务定位转成网站结构，明确每个页面承担什么责任。

这个阶段的重点是站点骨架，而不是页面文案和视觉细节。

## 输出

- sitemap；
- 主导航结构；
- footer 信息结构；
- 页面责任表；
- first build / later build 页面划分；
- 页面之间的内部链接关系。

## 页面责任分类

| 页面类型 | 责任 |
|---|---|
| Brand authority pages | 解决品牌 / 实体识别问题，如 About、Brand Clarification、Official Resources |
| Conversion pages | 承接询盘，如 PCBA、Turnkey PCBA、Component Sourcing、Contact |
| Trust / evidence pages | 建立可信度，如 Testing & Quality、FAQ、Quality、案例 / 证据内容 |
| Strategic positioning pages | 抬高品牌，如 EMS、Box Build、Supply Chain Integration |
| Supporting service pages | 补完整 one-stop 能力，如 PCB Fabrication |

## 设计边界

设计团队负责：

- 站点导航层级的可用性建议；
- 页面模板类型识别；
- 首页、服务页、品牌解释页、FAQ、Contact 等页面的布局方向；
- 判断哪些页面需要更强的视觉信任感；
- 判断哪些内容需要图表、流程、卡片或证据模块呈现。

设计团队不负责：

- 重新定义服务主次；
- 为了视觉简洁删除关键 GEO 信息；
- 把重要文本只做成图片；
- 在没有内容确认的情况下扩展行业页或案例页。

## 开发边界

开发团队负责：

- 根据 sitemap 识别页面类型；
- 判断哪些页面需要静态页面，哪些页面需要内容管理；
- 提醒 IA 是否可扩展；
- 判断页面模板能否复用；
- 为后续可爬取、SEO、GEO、schema、llms.txt 预留结构。

开发团队不负责：

- 在 sitemap 未确认前开始正式开发；
- 直接根据旧站复制 URL 结构；
- 自行决定页面删减；
- 把所有页面做成自由拼装 page builder。

## 阶段验收标准

- first build sitemap 已确认；
- 页面责任清楚；
- 导航与 footer 方向清楚；
- Brand Clarification 和 Official Resources 被纳入架构；
- PCBA 作为核心转化入口被突出；
- EMS / Box Build 作为高价值方向被保留；
- PCB Fabrication 没有被误放成主品牌定位。

---

# 7. Stage 3 — Content & GEO Structure

## 目标

把每个页面需要承载的信息结构定义清楚，让后续设计和开发有稳定输入。

这个阶段不写完整页面文案，而是确定每类页面必须有哪些内容块。

## 输出

- page brief；
- 每类页面的内容模块；
- AI summary / direct answer 需求；
- FAQ / buyer questions 结构；
- proof points / evidence needs；
- CTA 逻辑；
- internal linking 逻辑；
- claim risk notes。

## 核心页面内容结构建议

### Home

必须表达：

- Venture Electronics 是谁；
- PCBA 是当前主要项目入口；
- EMS / Box Build 是高价值能力；
- Venture 的差异化是 sourcing、DFM / BOM、testing、quality、human project ownership；
- 新站是官方解释 Venture 品牌和服务关系的地方。

### PCBA / PCB Assembly

必须表达：

- PCBA 是什么；
- 适合什么客户；
- quotation 需要哪些资料；
- BOM / DFM / sourcing / testing 如何支持；
- 为什么选择 Venture；
- 询盘 CTA。

### EMS / Box Build

必须表达：

- EMS 和 PCBA 的关系；
- 什么时候客户需要 EMS / Box Build；
- Venture 可以如何协调 PCBA、sourcing、testing、final assembly；
- 哪些说法需要 evidence 支撑；
- 不夸大直接工厂能力。

### Brand & Business Line Clarification

必须表达：

- Venture Electronics、Venture PCB、Venture PCBA 的关系；
- `venture-mfg.com` 和 `venture-pcba.com` 的关系；
- 哪些是母品牌，哪些是服务 / 关键词 / 子站资产；
- 未来内容、社媒、官网如何统一到 Venture Electronics 品牌体系下。

### Official Resources / Online Presence

必须表达：

- 已确认官方域名；
- 已确认社媒账号；
- 待确认账号不能直接作为 official source；
- 未来 SEO / GEO / social vendor 应使用的统一品牌表述。

## 设计边界

设计团队负责：

- 把内容结构转成清晰的页面层级；
- 确保 AI summary、key facts、FAQ、proof points 等内容有清晰视觉位置；
- 让服务页既能转化，也能解释；
- 让品牌解释页不显得像法律声明，而像清晰的官方说明页。

设计团队不负责：

- 省略关键解释内容；
- 把 FAQ、key facts、service scope 等重要内容做成不可抓取图片；
- 自行添加未经确认的证书、客户 logo 或能力 claim；
- 让页面只剩营销 slogan。

## 开发边界

开发团队负责：

- 确保核心内容可以作为 HTML 文本被抓取；
- 支持可复用的内容区块；
- 支持 FAQ、key facts、proof points、CTA、related pages 等结构；
- 避免核心服务内容只通过 client-side JS 才出现；
- 为后续 metadata、schema、llms.txt 等能力保留数据来源。

开发团队不负责：

- 判断 claim 是否真实；
- 自动生成未审核内容；
- 用技术结构替代内容审核；
- 在 page brief 未确认前写死页面内容。

## 阶段验收标准

- 核心页面都有 page brief；
- 每类页面都有固定内容模块；
- FAQ / buyer questions 有初步结构；
- 重要 claim 已标注风险；
- 设计和开发都能根据 brief 开始工作。

---

# 8. Stage 4 — Visual Design System & Page Layout

## 目标

把 strategy、IA 和 content structure 转换成稳定的设计系统和页面模板。

这个阶段要让网站看起来像可信的 B2B 电子制造合作伙伴，而不是普通模板站或过度营销站。

## 输出

- visual direction；
- design system；
- homepage design；
- service page template；
- brand clarification page template；
- official resources page template；
- FAQ / resources layout；
- contact / quote layout；
- responsive design rules；
- asset requirements list。

## 设计边界

设计团队负责：

- 视觉风格；
- 页面层级；
- 信息密度控制；
- 组件样式；
- 响应式设计；
- 转化路径呈现；
- proof / FAQ / key facts 等模块的视觉表达；
- 设计 handoff。

设计团队不负责：

- 决定技术实现方式；
- 决定 CMS 数据模型；
- 决定 schema 结构；
- 修改客户确认事实；
- 把不确定 claim 设计成强证明；
- 为了视觉效果隐藏关键文字。

## 开发边界

开发团队负责：

- 评估设计是否可实现；
- 提醒哪些模块应做成可复用组件；
- 提醒哪些内容需要结构化；
- 区分静态内容、可管理内容、交互内容；
- 参与设计 handoff，避免后续返工。

开发团队不负责：

- 在设计未确认前提前实现最终页面；
- 用开发便利性强行改变核心视觉层级；
- 把设计稿变成无法维护的一次性页面；
- 让客户在 CMS 中自由改变核心页面结构。

## 阶段验收标准

- 核心页面设计稿已确认；
- 页面模板足够覆盖 first build；
- 设计结构支持 GEO 内容块；
- 设计稿没有隐藏重要文本；
- 开发确认设计可落地；
- 内容团队确认设计没有放大未证实 claim。

---

# 9. Stage 5 — Frontend Implementation Boundary

## 目标

把已确认的页面结构和设计模板实现成稳定、可爬取、可维护的前端页面系统。

此阶段可以进入开发，但仍不需要在本 plan 中展开代码细节。

## 输出

- 可运行的前端页面；
- 核心页面模板；
- 可复用 section；
- 基础导航和 footer；
- contact / quote 基础交互；
- responsive 页面；
- 为 SEO / GEO / schema 预留的页面数据入口。

## 设计边界

设计团队负责：

- 检查页面还原度；
- 检查响应式视觉质量；
- 检查 CTA、FAQ、proof points 等模块是否符合设计意图；
- 对偏离设计的问题提出修正意见。

设计团队不负责：

- 介入具体代码实现；
- 直接修改页面代码；
- 在开发过程中临时改变页面信息架构；
- 在没有内容团队确认时新增营销 claim。

## 开发边界

开发团队负责：

- 实现可爬取页面；
- 实现可复用页面模板和 section；
- 实现导航、footer、breadcrumb、CTA、表单等基础功能；
- 保证核心内容在 HTML 中可见；
- 控制 client-side interaction 的范围；
- 为 SEO / GEO / schema / llms.txt 接入提供结构基础。

开发团队不负责：

- 自行定义最终文案；
- 自行判断证书或客户案例是否可公开；
- 把核心页面做成纯 client-side SPA；
- 把所有页面做成自由拖拽 page builder；
- 在没有 review 的情况下上线。

## 阶段验收标准

- first build 页面可以访问；
- 核心内容不是空壳；
- 主要内容可以被 crawler 读取；
- 页面视觉与设计稿基本一致；
- 导航和 CTA 可用；
- 表单路径可测试；
- 后续 CMS / SEO / GEO 层可以接入。

---

# 10. Stage 6 — CMS / Content Operations Boundary

## 目标

建立内容管理边界，让 Venture / Zbot 可以更新内容，但不能破坏设计和页面结构。

## 输出

- CMS 管理范围；
- 内容类型范围；
- 编辑权限；
- 内容审核流程；
- 图片 / 下载文件管理规则；
- public / internal / evidence-needed 状态规则。

## CMS 应该管理的内容

建议 CMS 管理：

- 服务页内容；
- FAQ；
- media / images；
- downloads；
- contact info；
- official resources；
- blog / resources；
- cases，前提是有证据和客户批准；
- SEO / GEO 摘要字段。

## CMS 不应该让客户自由管理的内容

不建议普通客户编辑：

- 页面布局；
- 组件样式；
- 颜色；
- 字体；
- spacing；
- schema JSON；
- technical SEO rules；
- arbitrary page builder blocks；
- 未审核的证书、客户 logo、行业合规 claim。

## 设计边界

设计团队负责：

- 定义哪些内容槽位可以被 CMS 更新；
- 确保可编辑内容变化后页面仍然稳定；
- 定义图片比例、内容长度建议、模块视觉规则。

设计团队不负责：

- CMS 权限设计；
- CMS 技术实现；
- 客户发布流程；
- 内容审核责任。

## 开发边界

开发团队负责：

- 实现内容管理能力；
- 限制客户不能破坏页面结构；
- 实现 draft / publish 或等效审核流程；
- 确保 CMS 内容可以映射到页面；
- 确保更新内容不会破坏 SEO / GEO / schema 基础。

开发团队不负责：

- 替客户确认 claim 真实性；
- 让客户随意创建大量薄页面；
- 把 CMS 做成无限自由模板系统；
- 允许客户直接编辑结构化数据代码。

## 阶段验收标准

- CMS 可管理 first build 所需内容；
- 客户或编辑不会轻易破坏页面布局；
- 关键内容有发布 / 审核机制；
- public / internal / evidence-needed 边界可以执行；
- 内容更新后页面、sitemap、llms.txt、schema 逻辑不会失控。

---

# 11. Stage 7 — SEO / GEO / Machine-readable Layer

## 目标

让网站不只是视觉上完成，而是在结构上适合搜索引擎和 AI 系统理解。

本阶段不展开具体代码，但需要明确网站必须支持哪些能力。

## 输出

- 页面 metadata；
- canonical 规则；
- sitemap；
- robots；
- llms.txt；
- JSON-LD schema 支撑；
- Organization / WebSite / Service / FAQ / Breadcrumb 等结构化数据；
- confirmed sameAs official profiles；
- 页面级 AI summary / key facts / FAQ 显示规则。

## 设计边界

设计团队负责：

- 确保 breadcrumb、FAQ、key facts、summary 等结构有可见位置；
- 确保 schema 中需要出现的内容也在页面上可见；
- 避免把 machine-readable 所需信息只做成图片；
- 确保页面不是只有视觉 slogan。

设计团队不负责：

- 写 metadata 规则；
- 写 schema；
- 写 sitemap / robots / llms.txt；
- 决定 AI crawler policy；
- 判断技术 SEO 是否合格。

## 开发边界

开发团队负责：

- 实现 metadata；
- 实现 sitemap / robots；
- 实现 llms.txt 或等效 AI-readable site map；
- 实现 schema layer；
- 确保 schema 与页面可见内容一致；
- 确保 official profile 只使用已确认渠道；
- 确保核心页面可被爬取。

开发团队不负责：

- 伪造 proof points；
- 为了 schema 补充页面上不存在的内容；
- 把待确认社媒账号写入 official sameAs；
- 用技术标签替代真实内容建设。

## 内容 / GEO 边界

内容 / GEO 团队负责：

- 提供 AI summary；
- 提供 short answer；
- 提供 buyer questions；
- 提供 key facts；
- 提供 proof points；
- 判断 claim 是否 public-safe；
- 决定哪些页面进入 llms.txt；
- 维护 Brand Entity Alignment 口径。

内容 / GEO 团队不负责：

- 写代码；
- 修改页面布局；
- 自行发布未经客户确认的证据；
- 把没有证据的内容写成强 claim。

## 阶段验收标准

- 核心页面有唯一 title / description；
- sitemap 可访问并包含核心页面；
- robots 不阻挡重要页面；
- llms.txt 包含核心品牌和服务页面；
- schema 与页面内容一致；
- official social / site links 只使用已确认资产；
- FAQ schema 只对应页面可见 FAQ；
- 没有虚假认证、虚假客户、虚假工厂规模 claim。

---

# 12. Stage 8 — QA & Launch Readiness

## 目标

上线前确认网站在视觉、内容、开发、SEO/GEO、claim boundary 上都可以交付。

## 输出

- launch QA checklist；
- design QA notes；
- content / claim QA notes；
- SEO / GEO QA notes；
- crawlability QA notes；
- launch blocker list；
- post-launch backlog。

## 设计边界

设计团队负责：

- 检查 UI 还原；
- 检查移动端；
- 检查视觉层级；
- 检查 CTA 可见性；
- 检查图片质量和页面观感。

设计团队不负责：

- 技术 crawlability 检查；
- schema 验证；
- sitemap 验证；
- 表单后端验证；
- 客户事实确认。

## 开发边界

开发团队负责：

- 检查页面可访问；
- 检查表单；
- 检查 sitemap / robots / llms.txt；
- 检查 metadata；
- 检查 schema；
- 检查性能；
- 检查 responsive 技术问题；
- 检查无明显 404 / broken links。

开发团队不负责：

- 最终批准内容 claim；
- 决定客户是否接受某个定位；
- 代替内容团队判断文案风险。

## 内容 / GEO 边界

内容 / GEO 团队负责：

- 检查所有强 claim；
- 检查证书 / 工厂 / 客户 / 产能 / 行业能力是否 evidence-backed；
- 检查 Brand Clarification 是否清晰；
- 检查 Official Resources 是否只包含确认资产；
- 检查 FAQ 是否符合真实买家问题；
- 检查页面是否仍符合 PCBA-first / EMS-ceiling 的定位。

## 阶段验收标准

上线前必须满足：

- 页面可访问；
- 首页、核心服务页、品牌解释页、Contact 页面无阻塞问题；
- 重要内容可被 crawler 读取；
- 没有 accidental noindex；
- sitemap / robots / llms.txt 可访问；
- 表单可提交；
- 设计和移动端无严重问题；
- 所有强 claim 经过 review；
- 未确认官方账号未进入 footer / schema sameAs；
- 客户确认项没有被跳过。

---

# 13. Stage 9 — Post-launch Iteration

## 目标

上线后根据搜索、AI visibility、用户行为和询盘质量继续优化网站，而不是上线即结束。

## 输出

- post-launch monitoring notes；
- indexing / crawl issue list；
- brand query observation；
- content gap list；
- FAQ expansion list；
- case / proof asset request list；
- second build backlog。

## 设计边界

设计团队负责：

- 根据数据和反馈优化页面层级；
- 支持新模块或新页面模板设计；
- 优化移动端和转化路径体验。

设计团队不负责：

- 判断搜索排名变化原因；
- 判断 AI 是否准确引用；
- 单独决定新增大量页面。

## 开发边界

开发团队负责：

- 修复技术问题；
- 改进性能；
- 支持新增页面类型或内容模块；
- 修复 crawl / metadata / schema / form 问题；
- 支持后续 CMS 扩展。

开发团队不负责：

- 独立制定内容扩展策略；
- 直接创建没有内容质量的行业页；
- 用技术优化替代证据建设。

## 内容 / GEO 边界

内容 / GEO 团队负责：

- 观察 Venture Electronics / Venture PCB / Venture PCBA 的搜索和 AI 理解情况；
- 扩展 FAQ；
- 补充 buyer guides；
- 补充 evidence-backed case / quality / process 内容；
- 更新 Brand Entity Alignment；
- 判断哪些行业页、资源页、案例页进入第二轮建设。

## 阶段验收标准

- 上线后问题有记录；
- 技术问题和内容问题分开处理；
- 第二轮扩展基于数据和证据，不基于凭空页面扩张；
- Venture 的品牌实体关系表达持续保持一致。

---

# 14. Cross-team Boundary Summary

## 14.1 Strategy / Content / GEO 团队

负责：

- 客户 context 提炼；
- 品牌定位；
- 服务层级；
- claim boundary；
- page brief；
- FAQ / buyer questions；
- AI summary；
- proof points；
- official resource 判断；
- 内容 review。

不负责：

- 设计系统；
- 具体代码；
- CMS 技术实现；
- 页面部署；
- 视觉细节。

## 14.2 Design 团队

负责：

- 视觉方向；
- 页面层级；
- 模板设计；
- 组件视觉；
- responsive design；
- 转化路径视觉；
- 设计 QA。

不负责：

- 改变客户事实；
- 判断 claim 真实性；
- 写技术实现；
- 管理 CMS；
- 写 SEO / GEO 技术层。

## 14.3 Development 团队

负责：

- 前端实现；
- 页面模板；
- CMS 接入；
- crawlable rendering；
- metadata / sitemap / robots / llms.txt；
- schema layer；
- 表单；
- 性能；
- 技术 QA。

不负责：

- 客户事实判断；
- claim 审核；
- 最终品牌定位；
- 自行新增页面范围；
- 把 CMS 做成无限自由 page builder。

---

# 15. Pro / AI 使用边界

## Pro 可以做什么

Pro 可以用于：

- 读取 Venture repo context；
- 总结客户定位；
- 生成 implementation plan breakdown；
- 输出 page responsibility map；
- 生成 page brief 初稿；
- 生成 FAQ / buyer questions 初稿；
- 生成设计 / 开发边界初稿；
- 辅助检查 claim risk；
- 后续辅助生成页面初稿或组件实现建议。

## Pro 不应该直接决定什么

Pro 不应该绕过团队直接决定：

- 母品牌是否改变；
- 哪些证书可以公开；
- 哪些社媒一定是官方账号；
- 哪些客户案例可以公开；
- 哪些行业 claim 可以强表述；
- 最终 UI；
- 最终代码实现；
- 上线批准。

## 推荐给 Pro 的任务输入

```txt
请基于 Venture repo 中的客户 context、website direction notes、decisions、positioning context，以及 Zbot 的 GEO-friendly B2B 建站方法，输出 Venture 官网重建的 implementation plan breakdown。

要求：
1. 不写具体代码；
2. 不展开详细开发排期；
3. 不写完整页面文案；
4. 重点划分每个阶段的目标、输入、输出、设计边界、开发边界、内容/GEO边界和验收标准；
5. 保持 Venture Electronics 为母品牌；
6. 以 PCBA 作为主转化入口；
7. 以 EMS / Box Build 作为高价值能力；
8. 将 PCB Fabrication 作为支持服务；
9. 将新官网定位为 AI-readable official source / brand-entity canonical source；
10. 所有强 claim 需要 evidence-gated，不得扩大客户未确认能力。
```

---

# 16. 不应做的事情

本项目实施中应避免：

- 把 Venture Electronics 改成 Venture PCB 作为母品牌；
- 把新站做成另一个普通 SEO landing site；
- 只追求视觉，不解决品牌实体关系；
- 把 PCBA、EMS、Box Build、PCB Fabrication 关系写混；
- 在没有证据时写强认证、强产能、强客户 logo claim；
- 把重要内容只放在图片或 PDF 中；
- 把官网做成纯 client-side React SPA；
- 让客户通过 CMS 自由改变页面结构；
- 在 Official Resources 中加入未确认官方账号；
- 建大量薄行业页或国家页；
- 用 schema 或 llms.txt 替代真实可见内容。

---

# 17. 最终交付判断标准

这个 implementation plan 可以进入正式执行，必须满足以下判断：

```txt
1. 网站角色清楚：AI-readable official source，而不是普通 SEO 站。
2. 母品牌清楚：Venture Electronics 不被 Venture PCB 替代。
3. 服务层级清楚：PCBA first，EMS / Box Build as brand ceiling，PCB Fabrication as support.
4. first build scope 清楚：核心页面先完成，不盲目铺开薄页面。
5. 设计边界清楚：设计负责视觉和信息层级，不决定 claim 真实性。
6. 开发边界清楚：开发负责可爬取、可维护、可结构化实现，不决定客户事实。
7. 内容/GEO边界清楚：内容团队负责客户事实、FAQ、AI summary、claim boundary 和 evidence。
8. CMS 边界清楚：客户可以更新内容，但不能破坏页面结构和 schema 逻辑。
9. SEO/GEO 技术能力清楚：sitemap、robots、llms.txt、metadata、schema、可见 HTML 内容都需要支持。
10. QA 边界清楚：上线前需要同时通过设计、内容、claim、技术、GEO 检查。
```

最终原则：

> Venture 官网不是“多做一个网站”，而是为 Venture Electronics 建立一个面向客户、Google 和 AI 系统都清晰的官方品牌事实系统。

---

## 18. 参考依据

本文件基于以下内部资料和方法论整理：

- `yslin1126/venture-geo-website-workspace/README.md`
- `00_context/venture-positioning-context.md`
- `00_context/project-source-map.md`
- `00_context/decisions.md`
- `04_website-planning/website-direction-notes.md`
- `03_research/geo-website-methodology-report.md`
- `02_summaries/initial-client-concerns-summary.md`
- Zbot Company Website Build SOP
- Next.js Crawlable Site SEO / GEO Structure note

