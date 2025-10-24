const themeKey = 'theme';

class ThemeUtils {
    getTheme(): string {
        let theme = localStorage.getItem(themeKey);

        if (!theme) {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        return theme;
    }

    setTheme(theme: string): void {
        localStorage.setItem(themeKey, theme);
        document.firstElementChild?.classList.toggle('dark', theme === 'dark');
    }

    toggleTheme(): void {
        this.setTheme(this.getTheme() === 'dark' ? 'light' : 'dark');
    }

    initTheme(): void {
        this.setTheme(this.getTheme());
    }

    initThemeToggle(buttonId: string = 'theme-toggle'): void {
        this.initTheme();
        const themeToggle = document.getElementById(buttonId);
        themeToggle?.addEventListener("click", () => this.toggleTheme());
    }
}

export const themeUtils = new ThemeUtils();