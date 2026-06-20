import { useState } from 'react';

export default function DangerDelete({ endpoint, confirmText, redirectTo, label = 'Delete permanen' }: { endpoint: string; confirmText: string; redirectTo: string; label?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function remove() {
    const input = window.prompt(`Ketik ${confirmText} untuk menghapus permanen.`);
    if (input !== confirmText) return;
    setStatus('loading');
    const response = await fetch(endpoint, { method: 'DELETE' });
    if (response.ok) {
      window.location.href = redirectTo;
      return;
    }
    const data = await response.json().catch(() => ({})) as { error?: string };
    setStatus('error');
    setMessage(data.error || 'Gagal menghapus.');
  }

  return (
    <section className="mt-8 border border-red-700 bg-surface p-5">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-red-700">Danger zone</p>
      <h2 className="mt-2 text-xl font-black uppercase tracking-[-0.03em]">Hapus permanen</h2>
      <p className="mt-2 text-sm leading-6 text-muted">Aksi ini menghapus data dari database dan tidak bisa dibatalkan. Untuk konten lama, lebih aman ubah status menjadi archived.</p>
      <button type="button" onClick={remove} disabled={status === 'loading'} className="mt-4 border border-red-700 bg-red-700 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white disabled:opacity-60">
        {status === 'loading' ? 'Menghapus...' : label}
      </button>
      {message && <p className="mt-3 text-sm text-red-700">{message}</p>}
    </section>
  );
}
