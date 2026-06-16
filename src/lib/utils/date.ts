import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export function formatDate(value?: string | null) {
  if (!value) return 'Belum diperbarui';
  try {
    return format(new Date(value), 'd MMMM yyyy', { locale: id });
  } catch {
    return value;
  }
}
