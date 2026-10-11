import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";

// 动态 OG 图片生成被禁用（astro-paper.config.ts 中 dynamicOgImage: false），
// 该端点直接返回静态的默认 OG 图片，保证 og:image 链接始终可用。
export const GET: APIRoute = async () => {
  try {
    const data = await readFile("public/default-og.jpg");
    return new Response(new Uint8Array(data), {
      headers: { "Content-Type": "image/jpeg" },
    });
  } catch {
    return new Response(null, { status: 404, statusText: "Not found" });
  }
};
