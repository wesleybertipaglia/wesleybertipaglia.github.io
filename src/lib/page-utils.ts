import { tagUtils } from './post-utils';
import { searchUtils } from './search';

class PageUtils {
  initBlogPage(): void {
    tagUtils.filterPostsByTag();
    searchUtils.filterPostsBySearch();
  }

  initProjectsPage(): void {
    tagUtils.filterPostsByTag('Projects');
    searchUtils.filterPostsBySearch('Projects');
  }

  initSeriesPage(): void {
    tagUtils.filterPostsByTag();
    searchUtils.filterPostsBySearch();
  }

  initWorkPage(): void {
    tagUtils.filterPostsByTag();
    searchUtils.filterPostsBySearch();
  }
}

export const pageUtils = new PageUtils();
