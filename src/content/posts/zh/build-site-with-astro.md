---
title: 用 Astro 搭建这个网站
description: 记录从选型到上线的完整过程：为什么是 Astro、AstroPaper 主题做了什么改造、GitHub Pages 如何自动部署。
pubDatetime: 2026-10-10T15:30:00+08:00
tags:
  - 技术
  - Astro
---

这篇文章记录这个个人网站从零到上线的过程，供想搭类似网站的朋友参考。

## 为什么是 Astro

个人网站的主流方案有好几种：WordPress 太重，纯手写 HTML 太原始，React/Vue 单页应用对博客这种内容型站点又过于复杂。Astro 的优势正好契合需求：

- **内容优先**：Markdown 写作，构建时生成静态 HTML，访问飞快
- **岛屿架构**：只有需要交互的地方才加载 JavaScript
- **生态成熟**：内容集合（Content Collections）、分页、RSS、站点地图都是内置能力

## 主题选择与双语改造

我选了 [AstroPaper](https://github.com/satnaing/astro-paper) 主题作为基础，它自带深浅色模式、搜索、归档和优秀的排版。但默认是单语言的，我做了这些改造实现中英双语：

1. 开启 Astro 的 i18n 路由，`zh` 为默认语言，`en` 放在 `/en/` 前缀下
2. 文章按 `posts/zh/`、`posts/en/` 目录区分语言，列表页按当前语言过滤
3. 补充了完整的中文界面文案，页头加了语言切换按钮
4. 英文站有独立的 RSS 订阅

## 部署

代码推送到 GitHub 后，由 GitHub Actions 自动构建并发布到 GitHub Pages，全程免费。后续只需要专注于写作——新增一篇博客就是提交一个 Markdown 文件的事。

## 小结

从决定建站到第一篇文章上线，只用了一个周末。如果你也想拥有自己的网站，现在就是最好的时机。
