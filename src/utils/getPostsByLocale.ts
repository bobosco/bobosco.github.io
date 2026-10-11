import { BLOG_PATH } from "@/content.config";
import config from "@/config";

/** 站点支持的语言代码，需与 astro.config.ts 中的 i18n.locales 保持一致 */
export const LOCALES = ["zh", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale =
  (LOCALES as readonly string[]).includes(config.site.lang)
    ? (config.site.lang as Locale)
    : "zh";

/**
 * 约定：src/content/posts/<locale>/** 下的文章属于该语言；
 * 直接放在 posts/ 根目录的文章归属默认语言。
 */
export function getPostLocale(filePath: string | undefined): Locale {
  const segments = (filePath ?? "")
    .replace(`${BLOG_PATH}/`, "")
    .split("/")
    .filter(Boolean);
  const first = segments[0];
  return (LOCALES as readonly string[]).includes(first)
    ? (first as Locale)
    : DEFAULT_LOCALE;
}

/** 按语言过滤文章集合 */
export function filterPostsByLocale<T extends { filePath?: string }>(
  posts: T[],
  locale: string
): T[] {
  return posts.filter(post => getPostLocale(post.filePath) === locale);
}
