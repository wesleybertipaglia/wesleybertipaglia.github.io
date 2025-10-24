interface PaginationProps {
  url: URL;
}

export interface Pagination {
  page: number;
  size: number;
  offset: number;
}

export class PaginationUtils {
  static getPagination({ url }: PaginationProps): Pagination {
    const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'));
    const size = Math.max(1, parseInt(url.searchParams.get('size') || '10'));

    return {
      page,
      size,
      offset: (page - 1) * size,
    };
  }
}
