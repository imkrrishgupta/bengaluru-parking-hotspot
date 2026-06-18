export default function LastUpdatedBadge({ timestamp }) {
  if (!timestamp) return null;

  const formattedDate = new Date(timestamp).toLocaleString();

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px]"
      style={{
        background: 'rgba(0,217,146,0.06)',
        border: '1px solid rgba(0,217,146,0.2)',
        color: '#8b949e',
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: '#00d992' }}
      />
      Last updated: {formattedDate}
    </div>
  );
}
