const PARTNERS = ["Merchants", "PSPs", "Wallets", "Marketplaces"];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/10 px-6 py-16 sm:px-10 md:px-16 md:py-24 lg:pb-[90px] lg:pt-[100px]"
    >
      <div className="animate-drift1 pointer-events-none absolute -top-[220px] -right-[180px] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(255,107,26,0.22)_0%,rgba(255,107,26,0)_70%)]" />
      <div className="animate-drift2 pointer-events-none absolute -bottom-[260px] -left-[160px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,107,26,0.10)_0%,rgba(255,107,26,0)_70%)]" />

      <div className="pointer-events-none absolute top-16 right-24 z-[1] hidden h-[260px] w-[clamp(260px,28vw,360px)] sm:block md:top-28 md:right-40 md:h-[340px]">
        <div className="absolute -inset-[60px] rounded-full bg-[radial-gradient(circle,rgba(255,107,26,0.35)_0%,rgba(255,107,26,0)_70%)] blur-[10px]" />
        <svg width="100%" height="100%" viewBox="0 0 190 190" fill="none" className="relative">
          <polyline
            points="10,150 40,120 65,135 95,80 125,95 155,45 180,60"
            fill="none"
            stroke="#FF6B1A"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="180" cy="60" r="5" fill="#FF6B1A">
            <animate attributeName="r" values="4;7;4" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <g fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#8A8478">
            <text x="10" y="170">Jan</text>
            <text x="150" y="170">Now</text>
          </g>
        </svg>
        <div className="absolute top-0 right-1.5 rounded-full border border-accent/35 bg-accent/10 px-3.5 py-1.5 font-mono text-xs text-accent">
          Volume ↑
        </div>
      </div>

      <p className="label fade-up relative max-w-full lg:max-w-[calc(100%-600px)]">About</p>

      <h1
        className="fade-up relative m-0 mb-9 max-w-full font-display font-bold text-[22px] leading-[1.35] text-muted-1 sm:text-2xl md:text-[26px] lg:max-w-[min(680px,calc(100%-480px))] lg:text-[30px]"
        style={{ animationDelay: "0.08s" }}
      >
        PaySec is a trusted payment service provider delivering high-performance banking infrastructure.
      </h1>

      <div
        className="fade-up relative mb-16 flex flex-wrap gap-4 md:mb-24"
        style={{ animationDelay: "0.16s" }}
      >
        <a
          href="#contact"
          className="!text-bg bg-accent px-7 py-4 font-mono text-sm font-bold tracking-wider uppercase no-underline transition-all hover:!bg-accent-hover hover:-translate-y-0.5"
        >
          Request a demo
        </a>
        <a
          href="#products"
          className="!text-fg border border-white/25 px-7 py-4 font-mono text-sm font-semibold tracking-wider uppercase no-underline transition-colors hover:border-accent"
        >
          Products
        </a>
      </div>

      <div className="relative">
        <p className="label">Who we work with</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-9">
          {PARTNERS.map((partner, i) => (
            <span key={partner} className="flex items-center gap-x-6 sm:gap-x-9">
              <span className="font-display text-lg font-bold text-fg sm:text-xl">{partner}</span>
              {i < PARTNERS.length - 1 && (
                <span className="font-display text-lg font-bold text-muted-5 sm:text-xl">/</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
