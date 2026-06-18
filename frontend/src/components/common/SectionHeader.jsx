export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-1">
      {eyebrow && (
        <p
          className="text-[12px] font-semibold uppercase font-mono mb-1.5"
          style={{ color: '#00d992', letterSpacing: '2.52px' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-2xl font-light text-white tracking-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm mt-1" style={{ color: '#8b949e' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
