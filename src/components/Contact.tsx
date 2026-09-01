"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", telegram: "", email: "", message: "" });

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.telegram.trim()) {
      setStatus("error");
      setErrorMsg("Name and Telegram are required.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", telegram: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <Reveal id="contact" className="relative overflow-hidden border-b border-white/10 px-6 py-16 sm:px-10 md:px-16 md:py-24">
      <div className="pointer-events-none absolute top-1/2 right-[-220px] h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,107,26,0.16)_0%,rgba(255,107,26,0)_70%)]" />

      <p className="label relative">Contact us</p>
      <h2 className="relative m-0 mb-12 max-w-[900px] font-display font-extrabold uppercase leading-[1.05] text-[clamp(32px,7vw,56px)] sm:text-[clamp(32px,4.4vw,56px)] md:mb-14">
        Build the future of global payments together
      </h2>

      {status === "success" ? (
        <p className="relative max-w-[960px] font-mono text-sm text-accent">
          Thanks — your message has been sent. We&apos;ll get back to you shortly.
        </p>
      ) : (
        <form className="relative max-w-[960px]" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:[grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            <input
              className="field"
              placeholder="Name*"
              value={form.name}
              onChange={update("name")}
              required
            />
            <input
              className="field"
              placeholder="Telegram*"
              value={form.telegram}
              onChange={update("telegram")}
              required
            />
            <input
              className="field"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={update("email")}
            />
          </div>
          <textarea
            className="field mt-4 block w-full resize-none"
            placeholder="Describe your project"
            rows={3}
            value={form.message}
            onChange={update("message")}
          />

          {status === "error" && (
            <p className="mt-3 font-mono text-xs text-[#ff5252]">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-5 bg-accent px-8 py-4 font-mono text-sm font-bold tracking-wider text-bg uppercase transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : <>Start conversation &#8594;</>}
          </button>
        </form>
      )}
    </Reveal>
  );
}
