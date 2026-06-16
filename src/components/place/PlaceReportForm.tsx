import { useState } from 'react';

export default function PlaceReportForm({ placeId, placeName }: { placeId: string; placeName: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const response = await fetch('/api/report-place', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, place_id: placeId })
    });

    if (response.ok) {
      setStatus('success');
      setMessage('Makasih, laporanmu sudah masuk dan akan dicek.');
      event.currentTarget.reset();
    } else {
      setStatus('error');
      setMessage('Laporan belum berhasil dikirim. Coba lagi nanti.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-line bg-surface p-5" id="lapor">
      <div>
        <p className="text-xl font-semibold">Lapor data salah</p>
        <p className="mt-2 text-sm leading-6 text-muted">Bantu jaga data {placeName} tetap akurat.</p>
      </div>
      <label className="block text-sm">
        Jenis laporan
        <select name="report_type" className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm" required>
          <option value="jam-buka-salah">Jam buka salah</option>
          <option value="tempat-tutup">Tempat sudah tutup</option>
          <option value="alamat-salah">Alamat salah</option>
          <option value="fasilitas-salah">Fasilitas salah</option>
          <option value="harga-salah">Harga salah</option>
          <option value="lainnya">Lainnya</option>
        </select>
      </label>
      <label className="block text-sm">
        Catatan
        <textarea name="message" className="mt-2 min-h-28 w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm" placeholder="Tulis detail laporan..." />
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          Nama opsional
          <input name="reporter_name" className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm" />
        </label>
        <label className="block text-sm">
          Kontak opsional
          <input name="reporter_contact" className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm" />
        </label>
      </div>
      <button disabled={status === 'loading'} className="focus-ring rounded-xl border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper disabled:opacity-60">
        {status === 'loading' ? 'Mengirim...' : 'Kirim laporan'}
      </button>
      {message && <p className="text-sm text-muted">{message}</p>}
    </form>
  );
}
