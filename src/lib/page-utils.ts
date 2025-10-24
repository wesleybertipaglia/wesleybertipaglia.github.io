import { tagUtils } from "./tag";

class PageUtils {
    initBlogPage(): void {
        tagUtils.filterPostsByTag();
    }

    initProjectsPage(): void {
        tagUtils.filterPostsByTag("Projects");
    }

    initSeriesPage(): void {
        tagUtils.filterPostsByTag();
    }

    initWorkPage(): void {
        tagUtils.filterPostsByTag();
    }
}

export const pageUtils = new PageUtils();