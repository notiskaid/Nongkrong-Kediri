export function formatRupiah(value?: number | null) {
  if (value == null) return null;
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value);
}

export function formatPriceRange(min?: number | null, max?: number | null, label?: string | null) {
  if (min && max) return `${formatRupiah(min)}–${formatRupiah(max)}`;
  if (min) return `Mulai ${formatRupiah(min)}`;
  if (label) return label;
  return 'Harga belum tersedia';
}
