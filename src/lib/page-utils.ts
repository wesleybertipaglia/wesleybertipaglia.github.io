import { TagUtils } from './tag-utils';
import { QueryUtils } from './query-utils';

class PageUtils {
  initBlogPage(): void {
    TagUtils.applyTagFilterToDOM();
    QueryUtils.applyQueryFilterToDOM();
  }

  initProjectsPage(): void {
    TagUtils.applyTagFilterToDOM();
    QueryUtils.applyQueryFilterToDOM();
  }

  initSeriesPage(): void {
    TagUtils.applyTagFilterToDOM();
    QueryUtils.applyQueryFilterToDOM();
  }

  initWorkPage(): void {
    TagUtils.applyTagFilterToDOM();
    QueryUtils.applyQueryFilterToDOM();
  }
}

export const pageUtils = new PageUtils();
