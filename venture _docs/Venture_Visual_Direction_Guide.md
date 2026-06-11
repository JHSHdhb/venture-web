# Venture Visual Direction Guide

**版本：** v0.1  
**用途：** Venture 官网重建前的视觉方向与轻量 UI Foundation 指南  
**适用阶段：** Visual Direction / UI Foundation，位于网站战略与信息架构确认之后，高保真 UI 设计与开发实现之前。

---

## 0. 这份文件应该怎么用

这份文件不是最终首页设计稿，也不是完整 Design System，更不是代码实现文档。

它的作用是先把 Venture 新官网的视觉方向统一下来，让策略、内容、设计、开发在进入具体页面设计前，对以下内容形成一致判断：

- Venture 的品牌气质关键词；
- 推荐视觉方向；
- 色彩系统；
- 字体与排版方向；
- 按钮、卡片、标签、图标、图片风格；
- 深色页面与浅色页面如何搭配；
- 哪些视觉表达适合 Venture，哪些不适合。

如果需要给客户或团队展示，建议使用：

```txt
Markdown 文件 = 方向说明 / 决策记录 / 使用规则
PNG / SVG 图片 = 色板、组件风格、深浅页面示例
Figma = 后续可编辑设计稿与完整页面 UI
```

---

## 1. 项目视觉前提

Venture 新官网不是单纯换皮官网，也不是只追求好看的展示页。

根据项目 context，新官网需要承担三个角色：

1. **B2B 制造业官网**：面向海外客户，建立 PCBA / EMS / Box Build 制造伙伴的信任感。
2. **GEO-friendly 公司网站**：内容要清晰、结构化、可被搜索引擎与 AI 系统理解。
3. **AI-readable official source / brand-entity canonical source**：解释 Venture Electronics、Venture PCB / Venture PCBA、`venture-mfg.com`、`venture-pcba.com`、服务线和官方渠道之间的关系。

Repo 中的核心方向：

- Venture Electronics 是母品牌；
- PCBA / PCB Assembly 是主要询盘入口；
- EMS / Box Build 是高价值能力与长期品牌高度；
- PCB Fabrication 是支持服务，不应作为核心差异化；
- 新站应是 Venture Electronics 的官方解释层，而不是“再多一个官网”。

**内部依据路径：**

```txt
00_context/venture-positioning-context.md
04_website-planning/website-direction-notes.md
03_research/geo-website-methodology-report.md
```

---

## 2. 品牌气质关键词

### 英文关键词

```txt
Industrial
Technical
Reliable
Global
Precision
Engineering-focused
Premium but not flashy
B2B manufacturing trust
```

### 中文表达

```txt
工业感
技术感
可靠
全球化
精密制造
工程导向
高级但不浮夸
B2B 制造业可信感
```

### 不建议的方向

```txt
过度 SaaS 化
过度卡通化
过度绿色环保感
纯 PCB 板厂感
廉价工厂站感
过度炫酷但内容不可读
```

---

## 3. 视觉方向提案

### Direction A：Industrial Premium

**关键词：** 深蓝、工业、制造、高级、可信、全球供应链  
**适合表达：** EMS、Box Build、供应链整合、质量控制、高价值制造伙伴  
**适合位置：** 首页 Hero、重点 proof block、品牌定位区、Footer

这是目前最推荐的主方向。

---

### Direction B：Clean Technical

**关键词：** 清晰、工程、内容友好、白底、结构化、可读性强  
**适合表达：** 服务说明、FAQ、质量页面、DFM / BOM Review、Component Sourcing  
**适合位置：** 服务页主体、FAQ、资源页、Quote 页面、质量说明页面

这是 Venture 后续 GEO-friendly 内容承载的基础。

---

### Direction C：Electronics Precision

**关键词：** 电子制造、PCBA、精密检测、电路、工程细节  
**适合表达：** PCBA、检测、BOM、DFM、生产流程  
**使用注意：** 不能过度偏 PCB 绿色，否则容易把 Venture 降维成“PCB 板厂”。

---

## 4. 推荐视觉方向

建议采用：

```txt
Direction A + Direction B
=
Industrial Premium first impression
+
Clean Technical content system
```

也就是说：

- 首页首屏和品牌重点模块使用深色工业科技感；
- 服务页、FAQ、质量说明、资源页、Contact / Quote 使用浅色高可读内容系统；
- 用 Tech Blue 负责行动路径；
- 用 Amber Copper 做小面积高级强调；
- 蓝灰色负责结构、卡片、图标、信息层级。

一句话：

> 深色建立第一印象，浅色承载长期内容可信度。

---

## 5. 色彩系统

### 5.1 核心色板

| 色彩名称 | HEX | 用途 |
|---|---:|---|
| Deep Navy | `#111822` | Hero、Footer、深色品牌区 |
| Industrial Navy | `#172033` | 深色 section、暗色 panel |
| Steel Blue | `#4D5D76` | 图标、次级卡片、结构线索 |
| Cool Blue Gray | `#7992B8` | 柔和辅助色、信息层级 |
| Tech Blue | `#2563EB` | Primary CTA、链接、active state |
| Amber Copper | `#AB6F04` | 高价值能力、小标签、重点数字、premium accent |
| Soft Surface | `#F4F7FA` | 页面浅灰背景 |
| Card White | `#FFFFFF` | 内容卡片、正文区域 |
| Line Gray | `#D8E0EA` | border、divider |
| Text Dark | `#0B1220` | 主要正文 |
| Text Muted | `#5A6472` | 辅助说明 |

### 5.2 色彩使用比例建议

```txt
Deep Navy / Industrial Navy：30–40%
White / Soft Surface：35–45%
Steel Blue / Cool Blue Gray：10–20%
Tech Blue：5–10%
Amber Copper：3–5%
```

### 5.3 色彩使用原则

- **Tech Blue** 主要用于 CTA、链接、active state，不要到处铺满。
- **Amber Copper** 只做小面积强调，适合 EMS / Box Build / Supply Chain Integration / key number。
- **Cool Blue Gray** 和 **Steel Blue** 用于结构和信息层级，避免页面只有黑白蓝三色。
- 不建议用青绿色作为主强调色；青绿色可以作为 PCB / verified / status 类非常小比例辅助色，但不是主色。

---

## 6. 色彩系统可视化

![Venture Color Board](assets/venture_color_board_clean_v2.png)

---

## 7. 字体与排版方向

### 字体方向

建议使用现代无衬线字体，要求：

```txt
清晰
工程感
国际 B2B
阅读友好
不太圆润
不太 SaaS
不太奢侈品
```

可参考字体方向：

```txt
Inter
Manrope
IBM Plex Sans
Roboto
Sora
```

### 排版方向

| 层级 | 建议 |
|---|---|
| H1 | 清晰、有力量，适合制造业品牌 statement |
| H2 | 服务页和内容页的主要信息分区 |
| H3 | 用于 process、FAQ、proof points |
| Body | 阅读舒适，适合长内容和 GEO 内容 |
| Label / Tag | 技术感、小而清晰，帮助信息分类 |
| Table / Specs | 对齐清楚，适合 BOM、DFM、testing、quality 信息 |

---

## 8. 组件风格方向

### 8.1 按钮

| 类型 | 风格 |
|---|---|
| Primary CTA | Tech Blue 实心按钮 |
| Secondary CTA | 白底蓝描边，或深色区的浅色描边 |
| Dark CTA | 深色背景上的蓝色按钮 |
| Ghost Button | 用于低优先级动作 |

按钮原则：

```txt
Quote / Contact / Request a Quote 必须明显。
不要做过度花哨或不清晰的按钮。
不要让琥珀铜色成为主要 CTA 色。
```

---

### 8.2 卡片

| 卡片类型 | 用途 |
|---|---|
| Service Card | PCBA、EMS、Box Build、Sourcing、Testing |
| Process Step Card | DFM / BOM Review、Quote、Production、Testing |
| Proof Point Card | 质量、检测、证据、认证边界 |
| FAQ Card | 常见买家问题 |
| Official Resource Card | 官方网站、LinkedIn、YouTube、子站关系 |

卡片原则：

```txt
浅色卡片用于长内容和服务说明。
深色卡片用于关键 proof point 和品牌重点模块。
圆角适中，阴影克制。
不要做成过度 SaaS 或过度卡通。
```

---

### 8.3 标签 / Badge

适合使用的标签：

```txt
PCBA
EMS
Box Build
Quality
Sourcing
DFM Review
BOM Review
Testing
Official Source
Partner Network
```

使用原则：

```txt
标签是为了帮助用户和 AI 理解服务层级，不是装饰。
Amber Copper 只用于重点能力或高级价值提示。
```

---

### 8.4 图标风格

建议：

```txt
线性图标
轻量 solid icon
工程 / 制造 / 检测 / 供应链相关
简单、克制、可读
```

避免：

```txt
卡通图标
过度 3D 图标
过度 SaaS 插画
与真实制造无关的泛科技图形
```

---

### 8.5 图片风格

建议图片方向：

```txt
PCBA 产线
SMT / THT / inspection
测试与质量控制
工程沟通 / BOM review
供应链与包装出货
工厂或生产环境细节
```

图片处理建议：

```txt
冷色调
干净
专业
可以使用深蓝 overlay
避免过度假科技感
避免无法证明真实能力的夸张视觉
```

---

## 9. UI Foundation 可视化

![Venture UI Foundation Board](assets/venture_ui_foundation_board.png)

---

## 10. 深色 / 浅色页面搭配规则

### 深色区域适合

```txt
首页 Hero
品牌定位 statement
EMS / Box Build 高价值模块
关键 proof point
Quote CTA block
Footer
Official source / brand clarification 的重点区块
```

### 浅色区域适合

```txt
服务详情页主体
PCBA / Turnkey PCBA 页面主体
DFM / BOM Review
Component Sourcing
Testing & Quality Control
FAQ
Resources / Blog
Contact / Quote 表单
长文本内容
```

### 页面搭配原则

```txt
不是全站黑底。
深色负责品牌第一印象和高价值感。
浅色负责可读性、信息解释、GEO 内容承载和转化路径。
```

---

## 11. 设计边界

这份 Visual Direction 文件负责：

```txt
品牌气质
视觉方向
色彩系统
字体方向
基础组件风格
深色 / 浅色页面搭配
图标与图片方向
```

这份文件不负责：

```txt
最终首页 UI
全部页面高保真设计
CMS 字段设计
前端代码实现
SEO / Schema 具体代码
上线排期
```

---

## 12. 后续建议交付物

建议下一步按这个顺序推进：

```txt
1. 确认 Visual Direction
2. 产出首页 wireframe
3. 产出 PCBA / Turnkey PCBA 服务页 wireframe
4. 产出 Brand & Business Line Clarification 页面 wireframe
5. 产出首页高保真 UI
6. 产出核心服务页高保真 UI
7. 抽象轻量 design system
8. 进入开发实现
```

---

## 13. 给设计师 / Pro / Figma 的简短 Prompt

```txt
Create a visual direction and light UI foundation for Venture Electronics, a China-based PCBA and EMS manufacturing partner.

The brand should feel industrial, technical, reliable, global, precise, engineering-focused, and premium but not flashy.

Use the fixed palette:
Deep Navy #111822
Industrial Navy #172033
Steel Blue #4D5D76
Cool Blue Gray #7992B8
Tech Blue #2563EB
Amber Copper #AB6F04

Design direction:
Industrial Premium + Clean Technical.
Use dark sections for hero, proof, high-value EMS/Box Build modules, and footer.
Use light sections for service pages, FAQ, quality, resources, and quote/contact content.
Tech Blue is the main CTA color.
Amber Copper is only a small premium accent.
Avoid overly SaaS, cartoon, luxury, or green PCB-only visual style.

Create:
- color board
- typography direction
- button style
- card style
- tag/badge style
- icon/photo direction
- dark/light page usage examples
```

---

## 14. 一句话总结

Venture 的视觉方向应是：

> **深蓝建立工业科技与信任感，浅色内容系统承载 B2B 长内容和 GEO 结构，科技蓝负责行动转化，琥珀铜色只做高价值制造能力的克制强调。**
