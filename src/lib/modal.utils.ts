export class ModalUtils {
  private static activeModals = new Set<string>();

  static initModal(
    modalId: string,
    openButtonId: string,
    closeButtonId = 'close-modal'
  ) {
    if (this.activeModals.has(modalId)) {
      return;
    }

    const openButton = document.getElementById(openButtonId);
    const modal = document.getElementById(modalId);
    const closeButton = document.getElementById(closeButtonId);

    if (!modal) {
      console.warn(`Modal with id "${modalId}" not found`);
      return;
    }

    const showModal = () => {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };

    const hideModal = () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    };

    const handleKeyDown = (e: Event) => {
      const keyboardEvent = e as KeyboardEvent;
      if (
        keyboardEvent.key === 'Escape' &&
        !modal.classList.contains('hidden')
      ) {
        hideModal();
      }
    };

    openButton?.addEventListener('click', showModal);
    closeButton?.addEventListener('click', hideModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        hideModal();
      }
    });

    document.addEventListener('keydown', handleKeyDown);

    this.activeModals.add(modalId);

    return () => {
      openButton?.removeEventListener('click', showModal);
      closeButton?.removeEventListener('click', hideModal);
      modal.removeEventListener('click', (e) => {
        if (e.target === modal) {
          hideModal();
        }
      });
      document.removeEventListener('keydown', handleKeyDown);
      this.activeModals.delete(modalId);
    };
  }

  static showModal(modalId: string) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  static hideModal(modalId: string) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }
}
