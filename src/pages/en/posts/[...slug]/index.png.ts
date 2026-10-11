import type { GetStaticPaths } from "astro";
import { getOgImagePaths } from "@/utils/routePaths";
export { GET } from "../../../../pages/posts/[...slug]/index.png";

export const getStaticPaths = (async () =>
  getOgImagePaths("en")) satisfies GetStaticPaths;
