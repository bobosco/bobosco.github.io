# Bosco 的个人网站

基于 [Astro](https://astro.build) + [AstroPaper](https://github.com/satnaing/astro-paper) 主题构建的中英双语个人网站，部署在 GitHub Pages：<https://bobosco.github.io>

## 功能

- 中文为主站（默认语言），英文站位于 `/en/` 前缀下
- 博客：Markdown 写作，支持标签、归档、全文搜索（Pagefind）、RSS（中英各一份）
- 深浅色模式切换
- 推送 `main` 分支后由 GitHub Actions 自动构建部署

## 写作

- 中文文章放在 `src/content/posts/zh/`，英文文章放在 `src/content/posts/en/`
- 新文章只需复制现有 `.md` 文件修改 frontmatter（`title`、`description`、`pubDatetime`、`tags` 等）
- 关于页内容：`src/content/pages/about.md`（中文）和 `src/content/pages/en/about.md`（英文）
- 站点信息（标题、简介、社交链接）：`astro-paper.config.ts`
- 界面文案：`src/i18n/lang/zh.ts` / `src/i18n/lang/en.ts`

## 本地开发

```bash
npm install
npm run dev      # 开发服务器 http://localhost:4321
npm run build    # 构建到 dist/（含搜索索引）
npm run preview  # 预览构建产物
```

## 部署

仓库已配置 `.github/workflows/deploy.yml`：推送到 `main` 自动构建并发布到 GitHub Pages。
首次使用需在仓库 Settings → Pages 中将 Source 设为 "GitHub Actions"。
