import type { FormatDateProps, FormatDateRangeProps } from './types';

export class DateUtils {
  static formatDate({ date, options }: FormatDateProps): string {
    if (!date) {
      return '';
    }

    if (options) {
      return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  static formatDateRange({
    startDate,
    endDate,
    options,
  }: FormatDateRangeProps): string {
    if (!startDate) {
      return '';
    }

    if (!endDate) {
      return DateUtils.formatDate({ date: startDate, options }) + ' - Current';
    }

    return `${DateUtils.formatDate({ date: startDate, options })} - ${DateUtils.formatDate(
      {
        date: endDate,
        options,
      }
    )}`;
  }
}
