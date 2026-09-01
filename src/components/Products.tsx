import Reveal from "./Reveal";

export default function Products() {
  return (
    <Reveal id="products" className="border-b border-white/10 px-6 py-16 sm:px-10 md:px-16 md:py-24">
      <p className="label">Products</p>
      <h2 className="m-0 mb-5 font-display font-extrabold uppercase leading-[1] text-[clamp(38px,8vw,72px)] sm:text-[clamp(38px,5vw,72px)]">
        Our products
      </h2>
      <p className="m-0 mb-12 max-w-[520px] text-[17px] leading-relaxed text-muted-1 md:mb-14">
        Access everything from global acquiring to local alternative payment methods via a single API.
      </p>

      <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
        <div className="pcard min-h-[300px]">
          <div className="flex items-start justify-between">
            <div className="picon flex h-12 w-12 items-center justify-center rounded-[10px] bg-accent/12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
                <path d="M6 15h4" />
              </svg>
            </div>
            <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-3">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
              Live
            </span>
          </div>
          <div>
            <h3 className="m-0 mb-2 text-2xl font-bold">Comprehensive solutions</h3>
            <p className="m-0 text-[15px] leading-relaxed text-muted-1">
              Access everything from global acquiring to local alternative methods via a single API.
            </p>
          </div>
        </div>

        <div className="pcard min-h-[300px]">
          <div className="flex items-start justify-between">
            <div className="picon flex h-12 w-12 items-center justify-center rounded-[10px] bg-accent/12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8l4 4-4 4" />
                <path d="M3 12h18" />
                <path d="M7 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="font-mono text-[11px] text-muted-3">02</span>
          </div>
          <div>
            <h3 className="m-0 mb-2 text-2xl font-bold">Effortless payouts</h3>
            <p className="m-0 text-[15px] leading-relaxed text-muted-1">
              Automate payouts via API or process them manually from your back-office — you are always in control.
            </p>
          </div>
        </div>

        <div className="pcard min-h-[300px] items-center">
          <div className="flex w-full justify-end">
            <span className="font-mono text-[11px] text-muted-3">03</span>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" className="animate-float-y">
              <circle cx="75" cy="75" r="5" fill="#FF6B1A" />
              <circle cx="30" cy="35" r="3.5" fill="#5A5448" />
              <circle cx="120" cy="30" r="3.5" fill="#5A5448" />
              <circle cx="20" cy="115" r="3.5" fill="#5A5448" />
              <circle cx="125" cy="120" r="3.5" fill="#5A5448" />
              <path d="M75 75 L30 35 M75 75 L120 30 M75 75 L20 115 M75 75 L125 120" stroke="#3A3A3A" strokeWidth="1" />
              <circle cx="75" cy="75" r="26" fill="none" stroke="#FF6B1A" strokeWidth="1" opacity="0.5" />
              <circle cx="75" cy="75" r="46" fill="none" stroke="#3A3A3A" strokeWidth="1" />
            </svg>
          </div>
          <div className="w-full text-center font-mono text-xs uppercase tracking-wider text-muted-3">
            One API, every rail
          </div>
        </div>

        <div className="pcard min-h-[300px]">
          <div className="flex items-start justify-between">
            <div className="picon flex h-12 w-12 items-center justify-center rounded-[10px] bg-accent/12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v18M3 12h18" />
              </svg>
            </div>
            <span className="font-mono text-[11px] text-muted-3">04</span>
          </div>
          <div>
            <h3 className="m-0 mb-2 text-2xl font-bold">Prompt settlements</h3>
            <p className="m-0 text-[15px] leading-relaxed text-muted-1">
              Receive funds quickly and efficiently in near real-time, regardless of your geographic location.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
