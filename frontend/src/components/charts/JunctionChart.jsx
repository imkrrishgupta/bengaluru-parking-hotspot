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

export default function JunctionChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 80 }}>
        <CartesianGrid stroke="#1e1e1e" vertical={false} />
        <XAxis
          dataKey="junction_name"
          stroke="#3d3a39"
          tick={{ fill: '#8b949e', fontSize: 10 }}
          angle={-40}
          textAnchor="end"
          interval={0}
        />
        <YAxis stroke="#3d3a39" tick={{ fill: '#8b949e', fontSize: 11 }} />
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          cursor={{ fill: 'rgba(255,255,255,0.03)' }}
          itemStyle={{ color: '#f2f2f2' }}
          labelStyle={{ color: '#8b949e' }}
        />
        <Bar dataKey="total_cases" radius={[4, 4, 0, 0]}>
          {(data || []).map((_, index) => (
            <Cell
              key={index}
              fill={index < 3 ? '#00d992' : 'rgba(0,217,146,0.35)'}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
