# HTML 轻阅 · 正式 Logo 资产

> **锁定方向**：C v2（`<h1>` 弱括号版）
> **锁定时间**：2026-05-31
> **品牌色规范**：见 `../brand/colors.html`

## 文件清单

### 源 SVG

| 文件 | 用途 | 关键元素 |
|---|---|---|
| `logo-final.svg` | **完整版**（App Store / 大场景 / 品牌物料） | 圆形徽章 + 弧线文字 `HTML · READER` / `EST · 2026` + 中央 `<h1>`（h1 主，括号 opacity 0.35） |
| `logo-final-minimal.svg` | **极简版**（≤180px 小尺寸 / iOS home screen） | 圆形徽章（无文字）+ 放大中央 `<h1>`（h1 字号 480，括号 opacity 0.35） |

### 1024 母版预览

| 文件 | 说明 |
|---|---|
| `logo-final-1024.png` | 完整版 1024 母版 |
| `logo-final-minimal-1024.png` | 极简版 1024 母版 |
| `logo-final-minimal-180.png` | 极简版 180 home screen 预览 |
| `logo-final-minimal-60.png` | 极简版 60 Spotlight 预览 |

### iOS Asset

`AppIcon.appiconset/` — 13 个尺寸 + `Contents.json`，可直接拖入 Xcode。
打包：`AppIcon.appiconset.tar.gz`

## 适应性图标分配

| 尺寸 | 来源 SVG | iOS 用途 |
|---|---|---|
| 1024 | logo-final.svg | App Store 上架图 |
| 180 / 167 / 152 / 120 / 87 / 80 / 76 / 60 / 58 / 40 / 29 / 20 | logo-final-minimal.svg | iPhone / iPad / Spotlight / Notification / Settings |

## 设计参数（防止后续被改动）

### 完整版 (logo-final.svg)

| 元素 | 参数 |
|---|---|
| 画布 | 1024 × 1024 |
| 外环 | r=400, stroke=`#D97757`, stroke-width=8 |
| 中环 | r=378, stroke=`#D97757`, stroke-width=2, opacity=0.6 |
| 主印章 | r=350, fill=`url(#sealC2vBg)`, stroke=`#B8542A`, stroke-width=6 |
| 上弧文字 | `HTML · READER`, 衬线 700, fill=`#B8542A`, letter-spacing=14 |
| 下弧文字 | `EST · 2026`, 衬线 500 opacity=0.7, fill=`#B8542A`, letter-spacing=10 |
| 左 `<` | x=320, y=615, mono 400, size=160, fill=`#D97757`, **opacity=0.35** |
| 中 `h1` | x=512, y=640, serif italic 700, size=320, fill=`#C2613E` |
| 右 `>` | x=700, y=615, mono 400, size=160, fill=`#D97757`, **opacity=0.35** |

### 极简版 (logo-final-minimal.svg)

| 元素 | 参数 |
|---|---|
| 外环 | r=440, stroke=`#D97757`, stroke-width=**18** (小尺寸可见加粗) |
| 主印章 | r=405, stroke=`#B8542A`, stroke-width=10 |
| 左 `<` | x=240, y=660, size=220, opacity=0.35 |
| 中 `h1` | x=512, y=695, serif italic 700, **size=480** (大尺寸主导), fill=`#C2613E` |
| 右 `>` | x=784, y=660, size=220, opacity=0.35 |

## 品牌色（应用于 logo）

| 色名 | HEX | 用途 |
|---|---|---|
| 米白 Cream 100 | `#FAF7F0` | 背景渐变起点 |
| 米黄 Cream 200 | `#F5EFE0` | 印章内部渐变 |
| 深米 Cream 300 | `#F0E9DA` | 背景渐变终点 |
| 珊瑚橘 Brand Coral | `#D97757` | 外环 + 弱化括号 |
| 深赭石 Burnt Orange | `#B8542A` | 弧线文字 + 装饰星点 |
| h1 主色 | `#C2613E` | 中央 h1 主字符（深赭石的中间值） |
