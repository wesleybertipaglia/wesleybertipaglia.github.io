export interface Pagination {
  page: number;
  size: number;
  offset: number;
}

export class PaginationUtils {
  static applyPaginationToDOM(
    postSelector: string = '.post',
    paginationSelector: string = '.pagination'
  ): void {
    const params = new URLSearchParams(window.location.search);
    const page = Math.max(1, parseInt(params.get('page') || '1'));
    const size = Math.max(1, parseInt(params.get('size') || '10'));

    const postElements = document.querySelectorAll<HTMLElement>(postSelector);
    const visiblePosts = Array.from(postElements).filter(
      (post) => post.style.display !== 'none'
    );

    const totalPages = Math.ceil(visiblePosts.length / size);
    const start = (page - 1) * size;
    const end = start + size;

    visiblePosts.forEach((post, index) => {
      if (index >= start && index < end) {
        post.style.display = '';
      } else {
        post.style.display = 'none';
      }
    });

    const paginationElement =
      document.querySelector<HTMLElement>(paginationSelector);
    if (paginationElement) {
      const currentSpan = paginationElement.querySelector('span');
      if (currentSpan) {
        currentSpan.textContent = `${page} / ${totalPages}`;
      }
      const prevLink = paginationElement.querySelector(
        'a[title="Go to previous page"]'
      ) as HTMLAnchorElement;
      const nextLink = paginationElement.querySelector(
        'a[title="Go to next page"]'
      ) as HTMLAnchorElement;
      if (prevLink) {
        if (page > 1) {
          prevLink.style.opacity = '1';
          prevLink.style.cursor = 'pointer';
          prevLink.href = this.buildPaginationUrl(page - 1, size);
        } else {
          prevLink.style.opacity = '0.5';
          prevLink.style.cursor = 'not-allowed';
          prevLink.removeAttribute('href');
        }
      }
      if (nextLink) {
        if (page < totalPages) {
          nextLink.style.opacity = '1';
          nextLink.style.cursor = 'pointer';
          nextLink.href = this.buildPaginationUrl(page + 1, size);
        } else {
          nextLink.style.opacity = '0.5';
          nextLink.style.cursor = 'not-allowed';
          nextLink.removeAttribute('href');
        }
      }
    }
  }

  static buildPaginationUrl(page: number, size: number): string {
    const params = new URLSearchParams(window.location.search);
    params.set('page', page.toString());
    params.set('size', size.toString());
    const query = params.toString();
    return `${window.location.pathname}${query ? '?' + query : ''}`;
  }
}
