import {
  Brain,
  Database,
  MapPinned,
  ShieldCheck,
  BarChart3,
  Server,
  Activity,
  Target,
  Cpu,
  GitBranch,
} from 'lucide-react';

const PIPELINE_STEPS = [
  { step: '01', title: 'Data Ingestion', desc: 'Bengaluru traffic and parking violation records loaded and validated.' },
  { step: '02', title: 'Spatial Gridding', desc: 'City divided into spatial grid cells; each violation mapped to a cell.' },
  { step: '03', title: 'Feature Engineering', desc: 'Lag features, rolling means, temporal aggregates, and station-level statistics derived.' },
  { step: '04', title: 'Risk Labeling', desc: 'Congestion risk scores and categories computed per cell.' },
  { step: '05', title: 'Stability Analysis', desc: 'Stability class assigned based on 6-month recurrence patterns.' },
  { step: '06', title: 'Model Training', desc: 'LightGBM trained on spatial-temporal features with Recall@20 evaluation.' },
];

export default function About() {
  return (
    <div className="space-y-8 w-full">

      {/* ── Hero section ── */}
      <section>
        <p
          className="font-mono text-[12px] font-semibold uppercase mb-2"
          style={{ color: '#00d992', letterSpacing: '2.52px' }}
        >
          About the project
        </p>
        <h1
          className="text-[32px] font-light tracking-tight text-white"
        >
          Bengaluru Parking Hotspot Intelligence
        </h1>
        <p className="text-[15px] mt-3 max-w-3xl" style={{ color: '#bdbdbd', lineHeight: 1.65 }}>
          An AI-powered analytics platform designed to forecast illegal parking hotspots, estimate
          parking-induced congestion risk, prioritize patrol deployment, and support data-driven
          enforcement planning using machine learning and spatial intelligence.
        </p>
      </section>

      {/* ── Problem / Goal 2-col ── */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#1a1a1a] border border-[#3d3a39] rounded-lg p-6">
          <div className="flex items-center gap-2.5 mb-3">
            <Brain size={16} style={{ color: '#8b949e' }} />
            <p
              className="text-[11px] font-semibold uppercase"
              style={{ color: '#8b949e', letterSpacing: '2px' }}
            >
              Problem statement
            </p>
          </div>
          <p className="text-[14px]" style={{ color: '#bdbdbd', lineHeight: 1.65 }}>
            Illegal parking contributes significantly to urban congestion, emergency response delays,
            reduced road capacity, and traffic bottlenecks. Traditional enforcement strategies rely on
            historical knowledge and manual monitoring, making resource allocation inefficient.
          </p>
        </div>

        <div
          className="bg-[#1a1a1a] rounded-lg p-6"
          style={{ borderLeft: '2px solid #00d992', borderTop: '1px solid #3d3a39', borderRight: '1px solid #3d3a39', borderBottom: '1px solid #3d3a39' }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <Target size={16} style={{ color: '#00d992' }} />
            <p
              className="text-[11px] font-semibold uppercase"
              style={{ color: '#00d992', letterSpacing: '2px' }}
            >
              Project goal
            </p>
          </div>
          <p className="text-[14px]" style={{ color: '#bdbdbd', lineHeight: 1.65 }}>
            Forecast future hotspot locations, identify high-risk congestion zones, recommend optimal
            patrol deployment strategies, and provide explainable insights for city planners and
            law enforcement agencies.
          </p>
        </div>
      </div>

      {/* ── Pipeline steps ── */}
      <div className="bg-[#1a1a1a] border border-[#3d3a39] rounded-lg p-6">
        <div className="flex items-center gap-2.5 mb-5">
          <Database size={16} style={{ color: '#8b949e' }} />
          <p
            className="text-[11px] font-semibold uppercase"
            style={{ color: '#8b949e', letterSpacing: '2px' }}
          >
            Data pipeline
          </p>
        </div>
        <div className="space-y-4">
          {PIPELINE_STEPS.map((step) => (
            <div key={step.step} className="flex items-start gap-4">
              <span
                className="font-mono text-[13px] font-semibold shrink-0 mt-0.5"
                style={{ color: '#00d992' }}
              >
                {step.step}
              </span>
              <div>
                <p className="text-[14px] font-semibold text-white">{step.title}</p>
                <p className="text-[13px] mt-0.5" style={{ color: '#8b949e' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ML Pipeline card ── */}
      <div className="bg-[#1a1a1a] border border-[#3d3a39] rounded-lg p-6">
        <div className="flex items-center gap-2.5 mb-4">
          <BarChart3 size={16} style={{ color: '#8b949e' }} />
          <p
            className="text-[11px] font-semibold uppercase"
            style={{ color: '#8b949e', letterSpacing: '2px' }}
          >
            Machine learning pipeline
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'LightGBM forecasting model for hotspot prediction',
            'Rolling Mean baseline comparison',
            'Lag-1 forecasting benchmark',
            'Feature importance and explainability analysis',
            'Ensemble evaluation using Recall@20 and Recall@50',
            'Precomputed inference for fast API response',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-1 h-1 rounded-full shrink-0"
                style={{ background: '#00d992' }}
              />
              <p className="text-[13px]" style={{ color: '#bdbdbd' }}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Architecture 3-col ── */}
      <div className="bg-[#1a1a1a] border border-[#3d3a39] rounded-lg p-6">
        <div className="flex items-center gap-2.5 mb-5">
          <Server size={16} style={{ color: '#8b949e' }} />
          <p
            className="text-[11px] font-semibold uppercase"
            style={{ color: '#8b949e', letterSpacing: '2px' }}
          >
            System architecture
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: GitBranch,
              title: 'Frontend',
              items: ['React.js + Vite', 'Tailwind CSS', 'Recharts + Leaflet', 'FastAPI integration'],
            },
            {
              icon: Server,
              title: 'Backend',
              items: ['FastAPI + Python', 'Precomputed datasets', 'CSV file service', 'Health monitoring'],
            },
            {
              icon: Cpu,
              title: 'ML Layer',
              items: ['LightGBM model', 'Spatial analytics', 'Risk scoring engine', 'Feature engineering'],
            },
          ].map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.title}
                className="bg-[#101010] rounded-lg p-4"
                style={{ border: '1px solid #3d3a39' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={14} style={{ color: '#00d992' }} />
                  <p className="text-[13px] font-semibold" style={{ color: '#00d992' }}>
                    {col.title}
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {col.items.map((item) => (
                    <li key={item} className="text-[12px]" style={{ color: '#8b949e' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Why it matters — green left border card ── */}
      <div
        className="bg-[#1a1a1a] rounded-lg p-6"
        style={{ borderLeft: '2px solid #00d992', borderTop: '1px solid #3d3a39', borderRight: '1px solid #3d3a39', borderBottom: '1px solid #3d3a39' }}
      >
        <div className="flex items-center gap-2.5 mb-3">
          <Activity size={16} style={{ color: '#00d992' }} />
          <p
            className="text-[11px] font-semibold uppercase"
            style={{ color: '#00d992', letterSpacing: '2px' }}
          >
            Why it matters
          </p>
        </div>
        <p className="text-[14px]" style={{ color: '#bdbdbd', lineHeight: 1.65 }}>
          Data-driven enforcement planning reduces response time, optimizes limited patrol resources,
          and creates measurable impact on urban traffic flow. By predicting where violations will occur
          rather than reacting to them, city agencies can shift from reactive to proactive enforcement —
          improving both compliance rates and public safety outcomes.
        </p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Future enhancements' },
          ].map(() => null)}
          {[
            'Real-time traffic integration',
            'Dynamic patrol route optimization',
            'GIS heatmaps and clustering',
            'Multi-city deployment support',
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-[#101010] rounded-md px-3 py-2"
              style={{ border: '1px solid #3d3a39' }}
            >
              <MapPinned size={12} style={{ color: '#00d992' }} />
              <p className="text-[12px]" style={{ color: '#8b949e' }}>{item}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
