import type { APIRoute, GetStaticPaths } from "astro";
import { getOgImagePaths } from "@/utils/routePaths";
import config from "@/config";

export const getStaticPaths = (async () =>
  getOgImagePaths("zh")) satisfies GetStaticPaths;

// 动态 OG 图片生成被禁用（astro-paper.config.ts 中 dynamicOgImage: false），
// 文章使用静态默认 OG 图片（resolveDefaultOgImagePath）。
export const GET: APIRoute = async () => {
  return new Response(null, { status: 404, statusText: "Not found" });
};
