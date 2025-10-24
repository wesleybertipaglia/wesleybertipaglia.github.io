import { SHARE_LINKS } from '@consts';

export class ShareUtils {
  getText(title: string, description?: string): string {
    const truncatedDescription =
      description && description.length > 100
        ? `${description.slice(0, 100)}...`
        : description;
    return `Hi! 👋\n I'm reading ${title} on Wesley's Website. Check it out! \n\n ${truncatedDescription}`;
  }

  encode(text: string): string {
    return encodeURIComponent(text);
  }

  getSocialLinks(title: string, description: string | undefined, url: string) {
    const text = this.getText(title, description);
    return [
      {
        name: 'X',
        url: SHARE_LINKS.x
          .replace('{url}', this.encode(url))
          .replace('{text}', this.encode(text)),
        icon: 'x',
      },
      {
        name: 'Facebook',
        url: SHARE_LINKS.facebook
          .replace('{url}', this.encode(url))
          .replace('{title}', this.encode(title)),
        icon: 'facebook',
      },
      {
        name: 'LinkedIn',
        url: SHARE_LINKS.linkedin
          .replace('{url}', this.encode(url))
          .replace('{title}', this.encode(title)),
        icon: 'linkedin',
      },
      {
        name: 'WhatsApp',
        url: SHARE_LINKS.whatsapp.replace(
          '{text}',
          this.encode(text + ' ' + url)
        ),
        icon: 'whatsapp',
      },
      {
        name: 'Telegram',
        url: SHARE_LINKS.telegram
          .replace('{url}', this.encode(url))
          .replace('{text}', this.encode(text)),
        icon: 'telegram',
      },
      {
        name: 'Email',
        url: SHARE_LINKS.email
          .replace('{title}', this.encode(title))
          .replace('{text}', this.encode(text)),
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

export const shareUtils = new ShareUtils();
