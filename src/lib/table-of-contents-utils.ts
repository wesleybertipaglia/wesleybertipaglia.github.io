interface TocItem {
  level: number;
  text: string;
  id: string;
}

export class TableOfContentsUtils {
  static generateTOC(markdown: string): TocItem[] {
    const headings: TocItem[] = [];
    const lines = markdown.split('\n');

    for (const line of lines) {
      const match = line.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        if (level === 2) {
          const text = match[2].trim();
          const id = TableOfContentsUtils.slugify(text);
          headings.push({ level, text, id });
        }
      }
    }

    return headings;
  }

  private static slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
}
