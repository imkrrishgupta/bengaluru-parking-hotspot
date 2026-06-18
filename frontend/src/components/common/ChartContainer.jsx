export default function ChartContainer({ title, subtitle, children }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#3d3a39] rounded-lg p-5">
      {title && (
        <div className="mb-5">
          <p
            className="text-[13px] uppercase font-semibold"
            style={{ color: '#8b949e', letterSpacing: '2px' }}
          >
            {title}
          </p>
          {subtitle && (
            <p className="text-[12px] mt-0.5" style={{ color: '#8b949e' }}>
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
