/**
 * Displays a notification for a specified duration or until a close button is clicked.
 * @param notificationId - The ID of the notification element.
 * @param duration - The duration in milliseconds to display the notification (default is 3000 ms).
 */
export function showNotification(
    notificationId: string,
    duration: number = 3000
): void {
    const notificationElement = document.getElementById(notificationId);
    const closeBtn = document.getElementById(`close-${notificationId}`);

    if (!notificationElement) {
        console.error(`Notification element with ID "${notificationId}" not found.`);
        return;
    }

    notificationElement.classList.remove('hidden');

    const hideNotification = () => {
        notificationElement.classList.add('hidden');
    };

    const timeoutId = setTimeout(hideNotification, duration);

    closeBtn?.addEventListener('click', () => {
        hideNotification();
        clearTimeout(timeoutId);
    });
}
