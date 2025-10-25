export class TagUtils {
  static applyTagFilterToDOM(
    entityTitle: string = 'Posts',
    tagParam: string = 'tag',
    postSelector: string = '.post',
    titleSelector: string = 'h1',
    tagSelector: string = '.tags'
  ): void {
    const params = new URLSearchParams(window.location.search);
    const tag = params.get(tagParam);
    const titleElement =
      document.querySelector<HTMLHeadingElement>(titleSelector);
    const postElements = document.querySelectorAll<HTMLElement>(postSelector);

    if (!tag) return;

    if (titleElement) {
      titleElement.textContent = `${entityTitle} tagged with "${tag}"`;
    }

    Array.from(postElements).forEach((post) => {
      const tagElement = post.querySelector(tagSelector);
      if (tagElement) {
        const postTags = tagElement.textContent
          ?.split(',')
          .map((t) => t.trim());
        if (!postTags?.includes(tag)) {
          post.parentElement!.style.display = 'none';
        }
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static filterPostsByTag(posts: any[], tag: string): any[] {
    if (!tag) return posts;

    return posts.filter((post) => {
      return post.data.tags?.includes(tag);
    });
  }
}
