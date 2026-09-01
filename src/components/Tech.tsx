import Reveal from "./Reveal";

export default function Tech() {
  return (
    <Reveal className="border-b border-white/10 px-6 py-16 sm:px-10 md:px-16 md:py-24">
      <p className="label">More about our tech</p>
      <h2 className="m-0 mb-12 font-display font-extrabold uppercase leading-[1] text-[clamp(38px,8vw,72px)] sm:text-[clamp(38px,5vw,72px)] md:mb-14">
        Core infrastructure
      </h2>

      <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:[grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        <div className="dotgrid relative flex h-[300px] items-center justify-center overflow-hidden bg-panel">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <path
              d="M90 20 L150 44 V90 C150 128 124 152 90 164 C56 152 30 128 30 90 V44 Z"
              stroke="#FF6B1A"
              strokeWidth="1.5"
            />
            <path d="M65 90 L82 108 L118 68" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="90" cy="90" r="76" fill="none" stroke="#2A2A2A" strokeWidth="1" strokeDasharray="2 8" />
          </svg>
        </div>

        <div className="dotgrid relative flex min-h-[300px] flex-col justify-between bg-panel p-7">
          <div className="flex justify-end">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5A5448" strokeWidth="1.4">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div>
            <h3 className="m-0 mb-2 text-[19px] font-bold">Complete responsibility</h3>
            <p className="m-0 text-sm leading-relaxed text-muted-1">Your data is strictly encrypted and monitored.</p>
          </div>
        </div>

        <div className="dotgrid relative flex min-h-[300px] flex-col justify-between bg-panel p-7">
          <div className="flex justify-end">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5A5448" strokeWidth="1.4">
              <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="m-0 mb-2 text-[19px] font-bold">Superior technology</h3>
            <p className="m-0 text-sm leading-relaxed text-muted-1">Cutting-edge infrastructure for fast, reliable transactions.</p>
          </div>
        </div>

        <div className="dotgrid relative flex h-[300px] items-center justify-center overflow-hidden bg-panel">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <rect x="70" y="70" width="60" height="60" rx="10" stroke="#FF6B1A" strokeWidth="1.5" />
            <circle cx="30" cy="30" r="14" stroke="#5A5448" strokeWidth="1.4" />
            <circle cx="170" cy="30" r="14" stroke="#5A5448" strokeWidth="1.4" />
            <circle cx="30" cy="170" r="14" stroke="#5A5448" strokeWidth="1.4" />
            <circle cx="170" cy="170" r="14" stroke="#5A5448" strokeWidth="1.4" />
            <path
              d="M42 38 L76 76 M158 38 L124 76 M42 162 L76 124 M158 162 L124 124"
              stroke="#3A3A3A"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </Reveal>
  );
}
