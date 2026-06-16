import { useRef, useState } from 'react';

type ImageUploaderProps = {
  defaultUrl?: string;
  defaultAlt?: string;
  placeSlug?: string;
};

export default function ImageUploader({ defaultUrl = '', defaultAlt = '', placeSlug = '' }: ImageUploaderProps) {
  const [url, setUrl] = useState(defaultUrl);
  const [alt, setAlt] = useState(defaultAlt);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function upload() {
    const file = inputRef.current?.files?.[0];
    if (!file) {
      setStatus('error');
      setMessage('Pilih gambar dulu.');
      return;
    }

    setStatus('uploading');
    setMessage('Mengupload ke Cloudflare R2...');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('placeSlug', placeSlug || 'unassigned');

    const response = await fetch('/api/admin/upload-image', {
      method: 'POST',
      body: formData
    });

    const data = await response.json().catch(() => ({})) as { error?: string; url?: string };

    if (!response.ok) {
      setStatus('error');
      setMessage(data.error || 'Upload gagal.');
      return;
    }

    setUrl(data.url || '');
    if (!alt) setAlt(file.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '));
    setStatus('success');
    setMessage('Upload berhasil. URL otomatis disimpan saat form tempat disimpan.');
  }

  return (
    <div className="space-y-4 rounded-2xl border border-line bg-surface p-5">
      <div>
        <h2 className="font-semibold">Foto utama</h2>
        <p className="mt-1 text-sm text-muted">Upload ke Cloudflare R2. Untuk local dev tanpa binding R2, kamu tetap bisa isi Image URL manual.</p>
      </div>

      {url && (
        <div className="overflow-hidden rounded-xl border border-line bg-paper">
          <img src={url} alt={alt || 'Preview foto tempat'} className="aspect-[16/9] w-full object-cover" />
        </div>
      )}

      <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm" />
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={upload} disabled={status === 'uploading'} className="rounded-xl border border-ink bg-ink px-4 py-2 text-sm font-semibold text-paper disabled:opacity-60">
          {status === 'uploading' ? 'Uploading...' : 'Upload ke R2'}
        </button>
        {message && <p className="text-sm text-muted">{message}</p>}
      </div>

      <label className="block text-sm">
        Image URL
        <input name="featured_image_url" value={url} onChange={(event) => setUrl(event.target.value)} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" />
      </label>
      <label className="block text-sm">
        Alt text
        <input name="featured_image_alt" value={alt} onChange={(event) => setAlt(event.target.value)} className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2" />
      </label>
    </div>
  );
}
