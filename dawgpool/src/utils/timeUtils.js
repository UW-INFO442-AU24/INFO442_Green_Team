export function formatTimeToRegular(time) {
    if (!time) return 'N/A';

    const parts = time.split(':');
    const hour = parseInt(parts[0], 10);
    const minute = parts[1] ? parseInt(parts[1], 10) : 0;

    if (isNaN(hour) || isNaN(minute)) return 'N/A';

    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
}