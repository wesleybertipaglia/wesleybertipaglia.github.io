import { TagUtils } from './tag-utils';
import { QueryUtils } from './query-utils';

class PageUtils {
  initBlogPage(): void {
    TagUtils.applyTagFilterToDOM('Posts');
    QueryUtils.applyQueryFilterToDOM('Posts');
    this.applyPaginationToDOM();
  }

  initProjectsPage(): void {
    TagUtils.applyTagFilterToDOM('Projects');
    QueryUtils.applyQueryFilterToDOM('Projects');
    this.applyPaginationToDOM();
  }

  initSeriesPage(): void {
    TagUtils.applyTagFilterToDOM('Series');
    QueryUtils.applyQueryFilterToDOM('Series');
    this.applyPaginationToDOM();
  }

  initWorkPage(): void {
    TagUtils.applyTagFilterToDOM('Work');
    QueryUtils.applyQueryFilterToDOM('Work');
    this.applyPaginationToDOM();
  }

  applyPaginationToDOM(
    postSelector: string = '.post',
    paginationSelector: string = '.pagination'
  ): void {
    const params = new URLSearchParams(window.location.search);
    const page = Math.max(1, parseInt(params.get('page') || '1'));
    const size = Math.max(1, parseInt(params.get('size') || '10'));

    const postElements = document.querySelectorAll<HTMLElement>(postSelector);
    const visibleLis = Array.from(postElements)
      .filter(
        (post) => (post.parentElement as HTMLElement).style.display !== 'none'
      )
      .map((post) => post.parentElement as HTMLElement);

    const totalPages = Math.ceil(visibleLis.length / size);
    const start = (page - 1) * size;
    const end = start + size;

    visibleLis.forEach((li, index) => {
      if (index >= start && index < end) {
        li.style.display = '';
      } else {
        li.style.display = 'none';
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

  private buildPaginationUrl(page: number, size: number): string {
    const params = new URLSearchParams(window.location.search);
    params.set('page', page.toString());
    params.set('size', size.toString());
    const query = params.toString();
    return `${window.location.pathname}${query ? '?' + query : ''}`;
  }
}

export const pageUtils = new PageUtils();
