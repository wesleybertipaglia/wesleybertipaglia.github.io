interface ExcerptProps {
    text: string;
    maxLength?: number;
}

interface ReadingTimeProps {
    text: string;
    wordsPerMinute?: number;
}

class TextUtils {
    excerpt({ text, maxLength = 48 }: ExcerptProps): string {
        if (text.length <= maxLength) {
            return text;
        }
        return text.trim().substring(0, maxLength - 3).concat("...");
    }

    readingTime({ text, wordsPerMinute = 200 }: ReadingTimeProps): string {
        const words = text.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${minutes} min read`;
    }
}

export const textUtils = new TextUtils();