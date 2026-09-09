"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Reveal from "./Reveal";

const WorldMap = dynamic(() => import("./WorldMap"), { ssr: false });

/** Рынки, где работаем сейчас (те же, что подсвечены на глобусе в WorldMap). */
const MARKETS = [
  { country: "Ukraine", currency: "UAH" },
  { country: "Turkey", currency: "TRY" },
  { country: "Azerbaijan", currency: "AZN" },
];

export default function Geo() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const animatedRef = useRef(false);
  const [methods, setMethods] = useState(0);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const duration = 900;
            const start = performance.now();
            const targets = { methods: 30, uptime: 99.9 };
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const ease = 1 - Math.pow(1 - t, 3);
              setMethods(Math.round(targets.methods * ease));
              setUptime(Math.round(targets.uptime * ease * 10) / 10);
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Reveal id="geo" className="relative overflow-hidden border-b border-white/10 px-6 py-16 sm:px-10 md:px-16 lg:py-[110px]">
      <div ref={statsRef}>
        <p className="label">Working locally</p>
        <h2 className="m-0 mb-14 font-display font-extrabold uppercase leading-[1.02] text-[clamp(32px,7vw,60px)] sm:text-[clamp(32px,4.4vw,60px)] md:mb-16">
          Global reach,
          <br />
          local expertise
        </h2>

        <div className="grid items-center gap-10 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] md:gap-14 md:[grid-template-columns:repeat(auto-fit,minmax(420px,1fr))]">
          <div className="relative h-[320px] border border-white/10 bg-panel sm:h-[420px]">
            <WorldMap />
          </div>

          <div className="flex flex-col justify-center gap-5">
            <p className="m-0 max-w-[400px] text-base leading-relaxed text-muted-1">
              One infrastructure that works everywhere we operate, built to expand as new markets come online.
            </p>

            <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
              {MARKETS.map((m) => (
                <li
                  key={m.currency}
                  className="flex items-center gap-2 border border-white/10 bg-panel px-3 py-1.5 font-mono text-xs text-muted-1"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {m.country}
                  <span className="text-muted-3">·</span>
                  <span className="text-accent">{m.currency}</span>
                </li>
              ))}
            </ul>

            <div className="mt-3 grid grid-cols-2 gap-5">
              <div>
                <div className="font-mono text-3xl font-semibold text-accent sm:text-4xl">{methods}+</div>
                <div className="mt-1.5 text-xs uppercase tracking-wider text-muted-3">Payment methods</div>
              </div>
              <div>
                <div className="font-mono text-3xl font-semibold text-accent sm:text-4xl">{uptime}%</div>
                <div className="mt-1.5 text-xs uppercase tracking-wider text-muted-3">Uptime</div>
              </div>
            </div>

            <div className="relative mt-2 hidden h-[190px] w-[180px] self-end pointer-events-none sm:block">
              <div className="animate-pill-1 absolute top-2.5 left-5 rounded-full border border-accent/40 bg-accent/14 px-3.5 py-1.5 font-mono text-xs text-accent">
                +120 TRY
              </div>
              <div className="animate-pill-2 absolute top-12 right-0 rounded-full border border-accent/40 bg-accent/14 px-3.5 py-1.5 font-mono text-xs text-accent">
                +80 UAH
              </div>
              <div className="animate-pill-3 absolute top-[86px] left-0 rounded-full border border-accent/40 bg-accent/14 px-3.5 py-1.5 font-mono text-xs text-accent">
                +50 AZN
              </div>
              <div className="animate-coin-spin absolute bottom-0 left-4 h-[150px] w-[150px] [transform-style:preserve-3d]">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                  <circle cx="75" cy="75" r="70" fill="#1A1208" stroke="#FF6B1A" strokeWidth="2" />
                  <circle cx="75" cy="75" r="56" fill="none" stroke="#FF6B1A" strokeWidth="1" opacity="0.5" />
                  <path
                    d="M75 45v60M60 58h30a10 10 0 0 1 0 20H60M60 95h32"
                    stroke="#FF6B1A"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
