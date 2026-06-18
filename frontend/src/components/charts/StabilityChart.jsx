import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from 'recharts';

const TOOLTIP_STYLE = {
  background: '#1a1a1a',
  border: '1px solid #3d3a39',
  borderRadius: '6px',
  padding: '8px 12px',
  fontSize: '12px',
  color: '#f2f2f2',
};

const STABILITY_COLORS = {
  Persistent: '#00d992',
  Seasonal: '#eab308',
  Sporadic: '#8b949e',
  Volatile: '#ef4444',
  Declining: '#f97316',
  Emerging: '#38bdf8',
};

export default function StabilityChart({ data }) {
  const counts = {};
  (data || []).forEach((item) => {
    counts[item.stability_class] = (counts[item.stability_class] || 0) + 1;
  });

  const chartData = Object.entries(counts).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData} margin={{ top: 4, right: 8, left: 0, bottom: 8 }}>
        <CartesianGrid stroke="#1e1e1e" vertical={false} />
        <XAxis
          dataKey="name"
          stroke="#3d3a39"
          tick={{ fill: '#8b949e', fontSize: 11 }}
        />
        <YAxis stroke="#3d3a39" tick={{ fill: '#8b949e', fontSize: 11 }} />
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          cursor={{ fill: 'rgba(255,255,255,0.03)' }}
          itemStyle={{ color: '#f2f2f2' }}
          labelStyle={{ color: '#8b949e' }}
        />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell
              key={index}
              fill={STABILITY_COLORS[entry.name] || '#00d992'}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
