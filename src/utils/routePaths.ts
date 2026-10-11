import type { GetStaticPathsOptions } from "astro";
import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import { getSortedPosts } from "./getSortedPosts";
import { getUniqueTags } from "./getUniqueTags";
import { filterPostsByLocale } from "./getPostsByLocale";
import { getPostSlug } from "./getPostPaths";
import { slugifyAll } from "./slugify";
import config from "@/config";

type Paginate = GetStaticPathsOptions["paginate"];

export type AdjacentPost = {
  id: string;
  title: string;
  filePath: string | undefined;
} | null;

/** 文章列表分页（/posts 与 /en/posts 共用） */
export async function getPostsIndexPaths(paginate: Paginate, locale: string) {
  const posts = await getCollection("posts");
  const localePosts = getSortedPosts(filterPostsByLocale(posts, locale));

  return paginate(localePosts, { pageSize: config.posts.perPage });
}

/** 文章详情页与相邻文章导航（按语言过滤） */
export async function getPostDetailPaths(locale: string) {
  const posts = await getCollection("posts");
  const sortedPosts = getSortedPosts(filterPostsByLocale(posts, locale));

  return sortedPosts.map((post, index) => ({
    params: { slug: getPostSlug(post.id, post.filePath) },
    props: {
      post,
      // sortedPosts is newest-first, so "older" (prev) is a higher index
      // and "newer" (next) is a lower index.
      prevPost:
        index < sortedPosts.length - 1
          ? {
              id: sortedPosts[index + 1].id,
              title: sortedPosts[index + 1].data.title,
              filePath: sortedPosts[index + 1].filePath,
            }
          : null,
      nextPost:
        index > 0
          ? {
              id: sortedPosts[index - 1].id,
              title: sortedPosts[index - 1].data.title,
              filePath: sortedPosts[index - 1].filePath,
            }
          : null,
    },
  }));
}

/** 标签文章分页（/tags/[tag] 与 /en/tags/[tag] 共用） */
export async function getTagPostsPaths(paginate: Paginate, locale: string) {
  const posts = await getCollection("posts");
  const localePosts = filterPostsByLocale(posts, locale);
  const tags = getUniqueTags(localePosts);

  return tags.flatMap(({ tag, tagName }) => {
    const tagPosts = getSortedPosts(
      localePosts.filter(({ data }) => slugifyAll(data.tags).includes(tag))
    );

    return paginate(tagPosts, {
      params: { tag },
      props: { tagName },
      pageSize: config.posts.perPage,
    });
  });
}

/** 文章 OG 图片端点（按语言过滤） */
export async function getOgImagePaths(locale: string) {
  if (!config.features.dynamicOgImage) {
    return [];
  }

  const posts = await getCollection("posts").then(allPosts =>
    filterPostsByLocale(
      allPosts.filter(({ data }) => !data.draft && !data.ogImage),
      locale
    )
  );

  return posts.map((post: CollectionEntry<"posts">) => ({
    params: { slug: getPostSlug(post.id, post.filePath) },
    props: post,
  }));
}
