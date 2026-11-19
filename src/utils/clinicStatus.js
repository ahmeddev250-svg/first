export function getClinicOpenStatus(now = new Date()) {
  // Evaluate in Morocco time (Africa/Casablanca)
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Casablanca',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now);

  const weekdayStr = parts.find((p) => p.type === 'weekday')?.value || 'Mon';
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10) % 24;
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
  const totalMinutes = hour * 60 + minute;

  const dayMap = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const day = dayMap[weekdayStr] ?? now.getDay();

  // Sunday: Closed
  if (day === 0) {
    return {
      isOpen: false,
      nextFr: 'Ouvre lundi à 09h00',
      nextAr: 'يفتح الإثنين على 09:00',
    };
  }

  // Saturday: 09:00 - 13:00
  if (day === 6) {
    if (totalMinutes >= 9 * 60 && totalMinutes < 13 * 60) {
      return {
        isOpen: true,
        nextFr: 'Ferme à 13h00',
        nextAr: 'يغلق على 13:00',
      };
    }
    if (totalMinutes < 9 * 60) {
      return {
        isOpen: false,
        nextFr: 'Ouvre à 09h00',
        nextAr: 'يفتح على 09:00',
      };
    }
    return {
      isOpen: false,
      nextFr: 'Ouvre lundi à 09h00',
      nextAr: 'يفتح الإثنين على 09:00',
    };
  }

  // Monday - Friday: Continuous 09:00 - 18:00
  if (totalMinutes >= 9 * 60 && totalMinutes < 18 * 60) {
    return {
      isOpen: true,
      nextFr: 'Ferme à 18h00',
      nextAr: 'يغلق على 18:00',
    };
  }
  if (totalMinutes < 9 * 60) {
    return {
      isOpen: false,
      nextFr: 'Ouvre à 09h00',
      nextAr: 'يفتح على 09:00',
    };
  }

  // After 18:00 Mon-Fri
  return {
    isOpen: false,
    nextFr: day === 5 ? 'Ouvre samedi à 09h00' : 'Ouvre demain à 09h00',
    nextAr: day === 5 ? 'يفتح السبت على 09:00' : 'يفتح غداً على 09:00',
  };
}
