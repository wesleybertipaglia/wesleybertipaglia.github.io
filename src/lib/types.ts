export type Site = {
  title: string;
  description: string;
  author: string;
  keywords: string;
  twitter?: string;
};

export type Metadata = {
  title: string;
  description: string;
};

export type Link = {
  title: string;
  url: string;
  icon?: string;
  main: boolean;
};

export interface TocItem {
  level: number;
  text: string;
  id: string;
}

export interface ExcerptProps {
  text: string;
  maxLength?: number;
}

export interface ReadingTimeProps {
  text: string;
  wordsPerMinute?: number;
}

export interface Pagination {
  page: number;
  size: number;
  offset: number;
}

export interface FormatDateProps {
  date: Date;
  options?: Intl.DateTimeFormatOptions;
}

export interface FormatDateRangeProps {
  startDate: Date;
  endDate?: Date;
  options?: Intl.DateTimeFormatOptions;
}

export interface PostCreateDto {
  id: string;
  title: string;
  claps?: number;
  views?: number;
}

export interface PostDto {
  id: string;
  claps: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostViewsCountDto {
  id: string;
  views: number;
}

export interface PostClapsCountDto {
  id: string;
  claps: number;
}
