interface FormatDateProps {
    date: Date;
    options?: Intl.DateTimeFormatOptions;
}

interface FormatDateRangeProps {
    startDate: Date;
    endDate?: Date;
    options?: Intl.DateTimeFormatOptions;
}

class DateUtils {
    formatDate({ date, options }: FormatDateProps): string {
        if (!date) {
            return "";
        }

        if (options) {
            return new Intl.DateTimeFormat("en-US", options).format(date);
        }

        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    formatDateRange({
        startDate,
        endDate,
        options
    }: FormatDateRangeProps): string {
        if (!startDate) {
            return "";
        }

        if (!endDate) {
            return this.formatDate({ date: startDate, options }) + ' - Current';
        }

        return `${this.formatDate({ date: startDate, options })} - ${this.formatDate({
            date: endDate,
            options,
        })}`;
    }
}

export const dateUtils = new DateUtils();