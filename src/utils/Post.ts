import { getCollection } from "astro:content";
export const enum PostView {
  compact,
  normal,
  full,
}

export const Projects = (await getCollection("projects")).sort(
  (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
);

export const Posts = (await getCollection("blog")).sort(
  (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
);
