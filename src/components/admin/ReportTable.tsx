import { useState } from 'react';

type Report = {
  id: string;
  report_type: string;
  message?: string;
  reporter_name?: string;
  reporter_contact?: string;
  status: string;
  created_at?: string;
  place_name?: string;
  place_slug?: string;
};

export default function ReportTable({ reports }: { reports: Report[] }) {
  const [items, setItems] = useState(reports);

  async function updateStatus(id: string, status: string) {
    const response = await fetch(`/api/admin/reports/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    if (response.ok) setItems((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-line text-xs text-muted">
          <tr>
            <th className="p-3">Tempat</th>
            <th className="p-3">Tipe</th>
            <th className="p-3">Pesan</th>
            <th className="p-3">Status</th>
            <th className="p-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {items.map((report) => (
            <tr key={report.id} className="border-b border-line last:border-0">
              <td className="p-3">{report.place_slug ? <a href={`/tempat/${report.place_slug}/`} className="no-underline">{report.place_name}</a> : report.place_name || '-'}</td>
              <td className="p-3 text-muted">{report.report_type}</td>
              <td className="p-3 text-muted">{report.message || '-'}</td>
              <td className="p-3">{report.status}</td>
              <td className="p-3"><button onClick={() => updateStatus(report.id, 'resolved')} className="rounded-lg border border-line px-2 py-1 text-xs">resolve</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
