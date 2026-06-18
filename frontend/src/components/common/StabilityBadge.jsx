export default function StabilityBadge({ stability }) {
  const normalized = (stability || '').toLowerCase();

  let cls = '';
  if (normalized === 'persistent') {
    cls = 'border border-[#00d992]/40 text-[#00d992] bg-[#00d992]/10';
  } else if (normalized === 'volatile') {
    cls = 'border border-red-500/40 text-red-400 bg-red-500/10';
  } else if (normalized === 'declining') {
    cls = 'border border-orange-500/40 text-orange-400 bg-orange-500/10';
  } else if (normalized === 'emerging') {
    cls = 'border border-sky-500/40 text-sky-400 bg-sky-500/10';
  } else if (normalized === 'seasonal') {
    cls = 'border border-yellow-500/40 text-yellow-400 bg-yellow-500/10';
  } else if (normalized === 'sporadic') {
    cls = 'border border-[#3d3a39] text-[#8b949e] bg-transparent';
  } else {
    cls = 'border border-[#3d3a39] text-[#8b949e] bg-transparent';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${cls}`}
    >
      {stability}
    </span>
  );
}
