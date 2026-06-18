import SectionHeader from "../components/common/SectionHeader";
import LoadingSkeleton from "../components/common/LoadingSkeleton";
import ErrorState from "../components/common/ErrorState";
import ChartContainer from "../components/common/ChartContainer";

import ForecastChart from "../components/charts/ForecastChart";

import RiskBadge from "../components/common/RiskBadge";
import StabilityBadge from "../components/common/StabilityBadge";

import useForecast from "../hooks/useForecast";

export default function Forecast() {
  const {
    forecasts,
    metadata,
    loading,
    error,
  } = useForecast();

  if (loading) {
    return (
      <LoadingSkeleton height="h-[600px]" />
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
        title="Forecast Snapshot"
        subtitle="Latest LightGBM hotspot forecast output."
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-4">
          <p className="text-slate-400">
            Model
          </p>

          <p className="text-green-400 font-semibold mt-2">
            {metadata?.model_loaded
              ? "Loaded"
              : "Unavailable"}
          </p>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-4">
          <p className="text-slate-400">
            Records
          </p>

          <p className="text-white font-semibold mt-2">
            {metadata?.returned}
          </p>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-4">
          <p className="text-slate-400">
            Total Cells
          </p>

          <p className="text-white font-semibold mt-2">
            {metadata?.total}
          </p>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-4">
          <p className="text-slate-400">
            Forecast Source
          </p>

          <p className="text-sky-400 text-sm mt-2">
            Snapshot
          </p>
        </div>
      </div>

      <ChartContainer title="Forecasted Hotspots">
        <ForecastChart
          data={forecasts.slice(0, 20)}
        />
      </ChartContainer>

      <div className="bg-[#111827] border border-slate-800 rounded-3xl p-5">
        <p className="text-slate-300">
          {metadata?.snapshot_note}
        </p>
      </div>

      <div className="bg-[#111827] border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="p-4 text-left text-slate-400">
                  Rank
                </th>

                <th className="p-4 text-left text-slate-400">
                  Cell
                </th>

                <th className="p-4 text-left text-slate-400">
                  Forecast
                </th>

                <th className="p-4 text-left text-slate-400">
                  Risk
                </th>

                <th className="p-4 text-left text-slate-400">
                  Stability
                </th>

                <th className="p-4 text-left text-slate-400">
                  Station
                </th>
              </tr>
            </thead>

            <tbody>
              {forecasts.map(
                (item, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-800 hover:bg-slate-900"
                  >
                    <td className="p-4 text-yellow-400">
                      #{item.patrol_rank}
                    </td>

                    <td className="p-4 text-white">
                      {
                        item.spatial_cell_id
                      }
                    </td>

                    <td className="p-4 text-sky-400">
                      {
                        item.forecasted_count
                      }
                    </td>

                    <td className="p-4">
                      <RiskBadge
                        risk={
                          item.congestion_risk_category
                        }
                      />
                    </td>

                    <td className="p-4">
                      <StabilityBadge
                        stability={
                          item.stability_class
                        }
                      />
                    </td>

                    <td className="p-4 text-white">
                      {
                        item.police_station
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