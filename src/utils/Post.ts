import { getCollection } from "astro:content";
export const enum PostView {
  compact,
  normal,
  full,
}

export const Posts = (await getCollection("posts")).sort(
  (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
);
