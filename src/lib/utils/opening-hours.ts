import type { OpeningHours } from '@/types/place';

export function openingHoursLabel(hours?: OpeningHours | null) {
  if (!hours) return 'Jam buka belum tersedia';
  if (hours.is_24h) return '24 Jam';
  return hours.label || hours.raw?.[0] || 'Jam buka belum tersedia';
}
