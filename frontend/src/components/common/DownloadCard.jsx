import { Download } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export default function DownloadCard({ dataset, description, category }) {
  const handleDownload = () => {
    window.open(`${API_BASE}/download/${dataset}`, '_blank');
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#3d3a39] rounded-lg p-5 flex flex-col gap-3">
      <div className="flex-1">
        <p
          className="font-mono text-[13px] break-all"
          style={{ color: '#f2f2f2' }}
        >
          {dataset}
        </p>
        {description && (
          <p className="text-[12px] mt-1.5" style={{ color: '#8b949e' }}>
            {description}
          </p>
        )}
      </div>
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 bg-[#00d992] text-[#101010] font-semibold rounded-md px-4 py-2 text-sm w-fit hover:opacity-90 transition-opacity"
      >
        <Download size={14} />
        Download CSV
      </button>
    </div>
  );
}
