const themeKey = 'theme';

export class ThemeUtils {
  static getTheme(): string {
    let theme = localStorage.getItem(themeKey);

    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }

    return theme;
  }

  static setTheme(theme: string): void {
    localStorage.setItem(themeKey, theme);
    document.firstElementChild?.classList.toggle('dark', theme === 'dark');
  }

  static toggleTheme(): void {
    ThemeUtils.setTheme(ThemeUtils.getTheme() === 'dark' ? 'light' : 'dark');
  }

  static initTheme(): void {
    ThemeUtils.setTheme(ThemeUtils.getTheme());
  }

  static initThemeToggle(buttonId: string = 'theme-toggle'): void {
    ThemeUtils.initTheme();
    const themeToggle = document.getElementById(buttonId);
    themeToggle?.addEventListener('click', () => ThemeUtils.toggleTheme());
  }
}
