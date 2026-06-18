import SectionHeader from "../components/common/SectionHeader";
import LoadingSkeleton from "../components/common/LoadingSkeleton";
import ErrorState from "../components/common/ErrorState";

import ChartContainer from "../components/common/ChartContainer";
import RiskBadge from "../components/common/RiskBadge";

import RiskDistributionChart from "../components/charts/RiskDistributionChart";

import useRiskZones from "../hooks/useRiskZones";

export default function RiskZones() {
  const {
    riskZones,
    loading,
    error,
  } = useRiskZones();

  if (loading) {
    return (
      <LoadingSkeleton height="h-96" />
    );
  }

  if (error) {
    return (
      <ErrorState message={error} />
    );
  }

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Congestion Risk Zones"
        subtitle="Cells ranked by parking-induced congestion risk."
      />

      <ChartContainer title="Risk Distribution">
        <RiskDistributionChart
          data={riskZones}
        />
      </ChartContainer>

      <div className="bg-[#111827] border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="p-4 text-left text-slate-400">
                  Cell ID
                </th>

                <th className="p-4 text-left text-slate-400">
                  Risk Score
                </th>

                <th className="p-4 text-left text-slate-400">
                  Category
                </th>

                <th className="p-4 text-left text-slate-400">
                  Station
                </th>

                <th className="p-4 text-left text-slate-400">
                  Forecast
                </th>

                <th className="p-4 text-left text-slate-400">
                  Patrol Rank
                </th>
              </tr>
            </thead>

            <tbody>
              {riskZones.map(
                (zone, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-800 hover:bg-slate-900"
                  >
                    <td className="p-4 text-white">
                      {
                        zone.spatial_cell_id
                      }
                    </td>

                    <td className="p-4 text-red-400 font-semibold">
                      {
                        zone.congestion_risk_score
                      }
                    </td>

                    <td className="p-4">
                      <RiskBadge
                        risk={
                          zone.congestion_risk_category
                        }
                      />
                    </td>

                    <td className="p-4 text-white">
                      {
                        zone.police_station
                      }
                    </td>

                    <td className="p-4 text-sky-400">
                      {
                        zone.forecasted_count
                      }
                    </td>

                    <td className="p-4 text-yellow-400">
                      #
                      {
                        zone.patrol_rank
                      }
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}