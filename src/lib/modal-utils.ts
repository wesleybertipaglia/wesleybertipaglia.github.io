export class ModalUtils {
  static initModal(modalId: string, openButtonId: string) {
    const openButton = document.getElementById(openButtonId);
    const modal = document.getElementById(modalId);
    const closeButton = document.getElementById('close-modal');

    openButton?.addEventListener('click', () => {
      modal?.classList.remove('hidden');
    });

    closeButton?.addEventListener('click', () => {
      modal?.classList.add('hidden');
    });

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }
}
