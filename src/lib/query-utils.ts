/**
 * Filters posts by search query and updates the title and message elements.
 * @param entityTitle - The title of the entity being filtered.
 * @param searchParam - The URL query parameter for search.
 * @param tagParam - The URL query parameter for tag.
 * @param postSelector - The CSS selector for the list of posts.
 * @param titleSelector - The CSS selector for the title element.
 * @param messageSelector - The CSS selector for the message element.
 */
export class QueryUtils {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static filterPostsByQuery<T extends { data: Record<string, any> }>(
    posts: T[],
    query: string
  ): T[] {
    if (!query) return posts;

    const lowerQuery = query.toLowerCase();

    return posts.filter((post) => {
      const searchable = [
        post.data.title,
        post.data.description,
        post.data.tags?.join(' '),
        post.data.role,
        post.data.companyName,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchable.includes(lowerQuery);
    });
  }

  static applyQueryFilterToDOM(
    entityTitle: string = 'Posts',
    searchParam: string = 'q',
    tagParam: string = 'tag',
    postSelector: string = '.post',
    titleSelector: string = 'h1',
    messageSelector: string = '#filter-message'
  ): void {
    const params = new URLSearchParams(window.location.search);
    const query = params.get(searchParam)?.toLowerCase();
    const tag = params.get(tagParam);
    const titleElement =
      document.querySelector<HTMLHeadingElement>(titleSelector);
    const messageElement = document.querySelector<HTMLElement>(messageSelector);
    const postElements = document.querySelectorAll<HTMLElement>(postSelector);

    if (!query && !tag) return;

    if (titleElement) {
      if (query && tag) {
        titleElement.textContent = `${entityTitle} tagged with "${tag}" matching "${query}"`;
      } else if (query) {
        titleElement.textContent = `${entityTitle} matching "${query}"`;
      }
    }

    if (messageElement) {
      if (query && tag) {
        messageElement.textContent = `Showing results for '${query}' in tag '${tag}'`;
      } else if (query) {
        messageElement.textContent = `Showing results for '${query}'`;
      }
      messageElement.style.display = 'block';
    }

    if (query) {
      Array.from(postElements).forEach((post) => {
        const textContent = post.textContent?.toLowerCase() || '';
        if (!textContent.includes(query)) {
          (post.parentElement as HTMLElement).style.display = 'none';
        }
      });
    }
  }
}
