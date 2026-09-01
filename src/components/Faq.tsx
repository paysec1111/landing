"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "What is Payzen?",
    a: "Payzen is a payment service provider giving you access to acquiring, local payment methods, and payouts across our supported markets through a single API.",
  },
  {
    q: "Who do you work with?",
    a: "Merchants, PSPs, and wallets, regardless of transaction volume.",
  },
  {
    q: "How long does integration take?",
    a: "Integration happens through a single API with our technical team guiding you at every step.",
  },
  {
    q: "What payment methods are available?",
    a: "International acquiring and local alternative methods, settled in USD, exact availability depends on your market.",
  },
  {
    q: "Which countries do you operate in?",
    a: "See the coverage map above for the markets we currently support, with more added as we expand.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Reveal id="faq" className="relative overflow-hidden px-6 pt-16 pb-10 sm:px-10 md:px-16 md:pt-24">
      <p className="label">FAQ</p>
      <h2 className="m-0 mb-12 font-display font-extrabold uppercase leading-[1] text-[clamp(32px,8vw,64px)] sm:text-[clamp(38px,5vw,64px)] md:mb-14">
        Frequently asked questions
      </h2>

      <div className="relative z-[1] flex flex-col">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-t border-white/[0.14]">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <h3 className="m-0 text-lg font-semibold sm:text-[19px]">{f.q}</h3>
                <span
                  className="shrink-0 font-mono text-xl text-accent transition-transform duration-200 sm:text-[22px]"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              <p
                className="m-0 overflow-hidden text-[15px] leading-relaxed text-muted-1 transition-[max-height,opacity,padding-bottom] duration-300"
                style={{
                  maxHeight: isOpen ? "200px" : "0px",
                  opacity: isOpen ? 1 : 0,
                  paddingBottom: isOpen ? "24px" : "0px",
                }}
              >
                {f.a}
              </p>
            </div>
          );
        })}
        <div className="border-t border-white/[0.14]" />
      </div>

      <div className="relative mt-10 overflow-hidden whitespace-nowrap font-display text-[min(24vw,220px)] leading-[0.8] font-black tracking-tight text-[#0f0f0f] uppercase select-none">
        PAYZEN
      </div>
    </Reveal>
  );
}
