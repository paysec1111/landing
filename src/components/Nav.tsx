"use client";

import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#geo", label: "Geography" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between bg-bg border-b border-white/10">
      <div className="flex items-center px-6 py-5 md:px-8 font-display font-extrabold text-base tracking-wide border-r border-white/10">
        FIFTYPAY<span className="text-accent">.</span>
      </div>

      <div className="hidden lg:flex items-center gap-9 font-mono text-xs font-medium tracking-wider uppercase text-muted-2">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="!text-inherit hover:!text-fg no-underline flex items-center gap-1.5 transition-colors"
          >
            <span className="text-muted-5">+</span>
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="hidden md:flex items-center gap-2.5 bg-accent hover:bg-accent-hover !text-bg px-6 py-5 md:px-8 font-mono text-xs font-bold tracking-wider uppercase no-underline transition-colors"
      >
        Contact us <span>&#8594;</span>
      </a>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        className="md:hidden self-center flex flex-col justify-center items-center gap-1.5 w-11 h-11 mr-2 shrink-0"
      >
        <span
          className={`block h-px w-5 bg-fg transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
        />
        <span
          className={`block h-px w-5 bg-fg transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-bg border-b border-white/10 flex flex-col">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="!text-fg no-underline font-mono text-xs font-medium tracking-wider uppercase px-6 py-4 border-t border-white/10 flex items-center gap-1.5"
            >
              <span className="text-muted-5">+</span>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="!text-bg no-underline bg-accent px-6 py-4 font-mono text-xs font-bold tracking-wider uppercase text-center border-t border-white/10"
          >
            Contact us &#8594;
          </a>
        </div>
      )}
    </nav>
  );
}
