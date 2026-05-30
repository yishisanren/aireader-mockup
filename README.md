# AIReader · AI 阅 · 产品原型

> 移动端 AI 产物（HTML/Markdown）专用轻量阅读器的高保真 HTML 原型。

**在线预览**：https://yishisanren.github.io/aireader-mockup/

## 设计目标

解决一个真实痛点：**在 iOS 微信里收到 AI 生成的 HTML/MD 文件，无法预览**。

AIReader 提供：
- 三路文件入口（"用其他应用打开" / 分享菜单 / 剪贴板检测）
- 双渲染模式（默认阅读模式 / 一键切原样模式）
- AI 产物专用渲染（Mermaid 流程图、LaTeX 公式、代码高亮、响应式表格）
- 自动历史记录（最近 50 个文件）
- 完全本地，零数据收集

## 原型范围

| 页面 | 路径 | 说明 |
|---|---|---|
| 主界面 | `screens/home.html` | 最近阅读列表 + 剪贴板检测 + 文件按钮 |
| 阅读界面 | `screens/reader.html` | 含真实 Mermaid/LaTeX/代码/表格渲染 |
| 设置 | `screens/settings.html` | 渲染 / 数据 / 关于 三组 |
| 用户旅程 | `screens/flow.html` | 4 步流程：微信 → 选 App → 导入 → 阅读 |
| 入口 | `index.html` | 所有界面 + 特性聚合 |

## 技术细节

- **iPhone 15 屏幕比例**（390 × 844 logical pixels）
- **iOS Design Tokens**：颜色、字号、间距、圆角、阴影完整映射 iOS HIG
- **苹方字体栈**：`-apple-system, "PingFang SC", ...` 跨平台优雅回退
- **真实交互**：iOS 风格 Switch / Segmented Control 可点击
- **真实渲染**：阅读界面内的 Mermaid / LaTeX / Code 全部由对应 JS 库渲染（CDN 加载）
- **明暗双主题**：右上角按钮一键切换 + 跟随系统

## 相关文件

- 产品设计文档：`/home/abc/Documents/obsidian/4-助理/AIReader/2026-05-30-aireader-design.md`
- 后续开发：iOS 原生（Swift + SwiftUI + WKWebView）

## 本地预览

```bash
cd ~/Projects/aireader-mockup
python3 -m http.server 8000
# 访问 http://localhost:8000
```

## 部署

GitHub Pages 自动部署（`main` 分支根目录）。

---
Made by Weiwei Zhang · 2026-05-30
