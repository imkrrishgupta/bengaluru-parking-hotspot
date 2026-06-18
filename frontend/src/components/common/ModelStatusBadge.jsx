export default function ModelStatusBadge({ modelName, recall, loaded = true }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#3d3a39] rounded-lg px-4 py-3">
      <div className="flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: loaded ? '#00d992' : '#ef4444' }}
        />
        <span
          className="text-[12px] font-semibold"
          style={{ color: loaded ? '#00d992' : '#ef4444' }}
        >
          {loaded ? 'Model Loaded' : 'Model Offline'}
        </span>
      </div>
      <p className="text-white text-[14px] mt-2 font-medium">{modelName || 'Unknown'}</p>
      <p className="text-[12px] mt-1 font-mono" style={{ color: '#00d992' }}>
        Recall@20: {recall ?? 0}
      </p>
    </div>
  );
}
