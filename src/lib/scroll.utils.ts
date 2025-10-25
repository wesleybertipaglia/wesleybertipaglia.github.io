export class ScrollUtils {
  static scrollToTop(
    buttonId: string,
    threshold: number = 100,
    scrollBehavior: ScrollBehavior = 'smooth'
  ): void {
    const button = document.getElementById(buttonId);

    if (!button) {
      console.error(`Button with ID "${buttonId}" not found.`);
      return;
    }

    const scroll = () => {
      window.scrollTo({ top: 0, behavior: scrollBehavior });
    };

    button.addEventListener('click', scroll);

    window.onscroll = () => {
      if (
        document.body.scrollTop > threshold ||
        document.documentElement.scrollTop > threshold
      ) {
        button.classList.remove('hidden');
      } else {
        button.classList.add('hidden');
      }
    };
  }

  static initScrollToTop(
    buttonId: string = 'top',
    threshold: number = 100,
    scrollBehavior: ScrollBehavior = 'smooth'
  ): void {
    ScrollUtils.scrollToTop(buttonId, threshold, scrollBehavior);
  }
}
