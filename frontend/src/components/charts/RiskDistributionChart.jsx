import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

export default function RiskDistributionChart({
  data,
}) {
  const riskCounts = {};

  data.forEach((item) => {
    const key =
      item.congestion_risk_category;

    riskCounts[key] =
      (riskCounts[key] || 0) + 1;
  });

  const chartData =
    Object.entries(riskCounts).map(
      ([name, value]) => ({
        name,
        value,
      })
    );

  const COLORS = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={350}
    >
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          outerRadius={120}
          label
        >
          {chartData.map(
            (_, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[
                    index %
                      COLORS.length
                  ]
                }
              />
            )
          )}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}