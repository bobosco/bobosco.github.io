---
title: Building This Site with Astro
description: "A record of the full journey from choosing a stack to going live: why Astro, how the AstroPaper theme was adapted for bilingual content, and how GitHub Pages deployment works."
pubDatetime: 2026-10-10T15:30:00+08:00
tags:
  - tech
  - astro
---

This post documents how this personal site went from zero to live, for anyone considering a similar setup.

## Why Astro

There are many ways to build a personal site: WordPress is too heavy, hand-written HTML too primitive, and a React/Vue SPA is overkill for a content-driven blog. Astro hits the sweet spot:

- **Content-first**: write in Markdown, ship static HTML at build time — fast by default
- **Islands architecture**: JavaScript only loads where interactivity is actually needed
- **Mature tooling**: content collections, pagination, RSS and sitemaps are all built in

## Theme choice and the bilingual adaptation

I started from the [AstroPaper](https://github.com/satnaing/astro-paper) theme, which ships with dark/light mode, search, archives and excellent typography. It is single-language by default, so I adapted it for Chinese + English:

1. Enabled Astro's i18n routing with `zh` as the default locale and `en` under the `/en/` prefix
2. Organized posts into `posts/zh/` and `posts/en/` directories, with list pages filtered by the current locale
3. Added complete Chinese UI translations and a language switcher in the header
4. Gave the English site its own RSS feed

## Deployment

Every push to GitHub triggers a GitHub Actions workflow that builds the site and publishes it to GitHub Pages — completely free. From then on, publishing a new post is just committing a Markdown file.

## Takeaway

From decision to first post took a single weekend. If you've been thinking about having your own site, now is a good time to start.
