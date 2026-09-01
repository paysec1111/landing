import Reveal from "./Reveal";

const STORIES = [
  {
    n: "01",
    title: "A merchant expanding abroad",
    text: "Plugs into one API to accept local cards and wallets on day one, without negotiating separate acquiring contracts per market.",
  },
  {
    n: "02",
    title: "A PSP consolidating rails",
    text: "Routes cross-border volume through Payzen instead of managing separate local banking relationships in every market.",
  },
  {
    n: "03",
    title: "A wallet automating payouts",
    text: "Sets payout rules once and lets Payzen settle user balances in USD on schedule, with manual override when needed.",
  },
];

export default function Stories() {
  return (
    <Reveal className="border-b border-white/10 px-6 py-16 sm:px-10 md:px-16 md:py-24">
      <p className="label">Built for</p>
      <h2 className="m-0 mb-12 max-w-[900px] font-display font-extrabold uppercase leading-[1.05] text-[clamp(32px,7vw,52px)] sm:text-[clamp(32px,4.4vw,52px)] md:mb-14">
        Three ways teams put Payzen to work
      </h2>

      <div className="flex flex-col">
        {STORIES.map((s) => (
          <div
            key={s.n}
            className="grid grid-cols-1 gap-3 border-t border-white/[0.14] py-8 sm:grid-cols-[60px_1fr] sm:gap-6 md:grid-cols-[60px_1fr_1.4fr]"
          >
            <span className="font-mono text-sm text-muted-4">{s.n}</span>
            <h3 className="m-0 text-xl font-bold">{s.title}</h3>
            <p className="m-0 text-[15px] leading-relaxed text-muted-1">{s.text}</p>
          </div>
        ))}
        <div className="border-t border-white/[0.14]" />
      </div>
    </Reveal>
  );
}
