export default function RiskBadge({ risk }) {
  const normalized = (risk || '').toLowerCase();

  let cls = '';
  if (normalized === 'critical') {
    cls = 'border border-red-500/40 text-red-400 bg-red-500/10';
  } else if (normalized === 'high') {
    cls = 'border border-orange-500/40 text-orange-400 bg-orange-500/10';
  } else if (normalized === 'moderate' || normalized === 'medium') {
    cls = 'border border-yellow-500/40 text-yellow-400 bg-yellow-500/10';
  } else if (normalized === 'low') {
    cls = 'border border-[#00d992]/40 text-[#00d992] bg-[#00d992]/10';
  } else {
    cls = 'border border-[#3d3a39] text-[#8b949e] bg-transparent';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${cls}`}
    >
      {risk}
    </span>
  );
}
