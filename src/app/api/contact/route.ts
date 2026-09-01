import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured");
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const telegram = typeof body?.telegram === "string" ? body.telegram.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !telegram) {
    return NextResponse.json(
      { error: "Name and Telegram are required." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        telegram,
        email,
        message,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      throw new Error(`Sheet webhook responded with ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to forward contact form to Google Sheets", err);
    return NextResponse.json(
      { error: "Could not submit right now. Please try again shortly." },
      { status: 502 }
    );
  }
}
