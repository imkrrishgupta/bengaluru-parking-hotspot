export default function KPICard({
  title,
  value,
  subtitle,
  accent = false,
}) {
  return (
    <div className="bg-[#1a1a1a] border border-[#3d3a39] rounded-lg p-5">
      <p
        className="text-[11px] uppercase tracking-[2px] font-semibold"
        style={{ color: '#8b949e', letterSpacing: '2px' }}
      >
        {title}
      </p>
      <p
        className="mt-2 font-mono text-[28px] leading-none font-bold"
        style={{ color: accent ? '#00d992' : '#ffffff' }}
      >
        {value ?? '—'}
      </p>
      {subtitle && (
        <p className="mt-1.5 text-[12px]" style={{ color: '#8b949e' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
