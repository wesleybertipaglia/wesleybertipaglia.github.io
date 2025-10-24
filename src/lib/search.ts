/**
 * Filters posts by search query and updates the title and message elements.
 * @param entityTitle - The title of the entity being filtered.
 * @param searchParam - The URL query parameter for search.
 * @param tagParam - The URL query parameter for tag.
 * @param postSelector - The CSS selector for the list of posts.
 * @param titleSelector - The CSS selector for the title element.
 * @param messageSelector - The CSS selector for the message element.
 */
class SearchUtils {
  filterPostsBySearch(
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

    // Update title
    if (titleElement) {
      if (query && tag) {
        titleElement.textContent = `${entityTitle} tagged with "${tag}" matching "${query}"`;
      } else if (query) {
        titleElement.textContent = `${entityTitle} matching "${query}"`;
      }
      // If only tag, tagUtils handles it
    }

    // Update message
    if (messageElement) {
      if (query && tag) {
        messageElement.textContent = `Showing results for '${query}' in tag '${tag}'`;
      } else if (query) {
        messageElement.textContent = `Showing results for '${query}'`;
      }
      messageElement.style.display = 'block';
    }

    // Filter posts by search if query exists
    if (query) {
      Array.from(postElements).forEach((post) => {
        const textContent = post.textContent?.toLowerCase() || '';
        if (!textContent.includes(query)) {
          post.style.display = 'none';
        }
      });
    }
  }
}

export const searchUtils = new SearchUtils();
