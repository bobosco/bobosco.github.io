import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://bobosco.github.io/",
    title: "Bosco",
    description: "Bosco 的个人网站：博客、经历与思考。Personal site of Bosco: blog, experience and thoughts.",
    author: "Bosco",
    profile: "https://github.com/bobosco",
    ogImage: "default-og.jpg",
    lang: "zh",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/bobosco/bobosco.github.io/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/bobosco" },
    { name: "mail", url: "mailto:hello@example.com" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
