import { SHARE_LINKS } from '@lib/consts';

export class ShareUtils {
  static getText(title: string): string {
    return `Hi! 👋 I'm reading ${title} on Wesley's Website. Check it out!`;
  }

  static encode(text: string): string {
    return encodeURIComponent(text);
  }

  static getSocialLinks(
    title: string,
    description: string | undefined,
    url: string
  ) {
    const text = ShareUtils.getText(title);
    return [
      {
        name: 'X',
        url: SHARE_LINKS.x
          .replace('{url}', ShareUtils.encode(url))
          .replace('{text}', ShareUtils.encode(text)),
        icon: 'x',
      },
      {
        name: 'Facebook',
        url: SHARE_LINKS.facebook
          .replace('{url}', ShareUtils.encode(url))
          .replace('{text}', ShareUtils.encode(text)),
        icon: 'facebook',
      },
      {
        name: 'LinkedIn',
        url: SHARE_LINKS.linkedin
          .replace('{url}', ShareUtils.encode(url))
          .replace('{title}', ShareUtils.encode(title))
          .replace('{text}', ShareUtils.encode(text)),
        icon: 'linkedin',
      },
      {
        name: 'WhatsApp',
        url: SHARE_LINKS.whatsapp.replace(
          '{text}',
          ShareUtils.encode(text + ' ' + url)
        ),
        icon: 'whatsapp',
      },
      {
        name: 'Telegram',
        url: SHARE_LINKS.telegram
          .replace('{url}', ShareUtils.encode(url))
          .replace('{text}', ShareUtils.encode(text)),
        icon: 'telegram',
      },
      {
        name: 'Email',
        url: SHARE_LINKS.email
          .replace('{title}', ShareUtils.encode(title))
          .replace('{text}', ShareUtils.encode(text)),
        icon: 'email',
      },
    ];
  }

  static initCopy(copyButtonId: string, inputId: string) {
    const copyButton = document.getElementById(copyButtonId);
    const input = document.getElementById(inputId) as HTMLInputElement;

    copyButton?.addEventListener('click', async () => {
      if (input?.value) {
        try {
          await navigator.clipboard.writeText(input.value);
          copyButton.querySelector('.copy-icon')?.classList.add('hidden');
          copyButton.querySelector('.check-icon')?.classList.remove('hidden');
          setTimeout(() => {
            copyButton.querySelector('.copy-icon')?.classList.remove('hidden');
            copyButton.querySelector('.check-icon')?.classList.add('hidden');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }
    });
  }
}
