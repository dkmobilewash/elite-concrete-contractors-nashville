import { NextRequest, NextResponse } from "next/server";

type ConsultationPayload = {
  name: string;
  email: string;
  phone: string;
  address?: string;
  service?: string;
  area?: string;
  message: string;
  honeypot?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ConsultationPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, message } = body;
  if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email, phone, and project details are required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const submission = {
    ...body,
    submittedAt: new Date().toISOString(),
    source: "eliteconcretecontractorsnashville.com",
  };

  const webhookUrl = process.env.CONSULTATION_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("Consultation webhook delivery failed:", err);
      return NextResponse.json(
        { error: "We couldn't submit your request right now. Please call us directly." },
        { status: 502 }
      );
    }
  } else {
    // No CONSULTATION_WEBHOOK_URL configured yet — log server-side so the request
    // is never silently dropped. Set CONSULTATION_WEBHOOK_URL (e.g. an email/CRM
    // webhook such as Zapier, Make, or a transactional email API) before launch.
    console.log("New consultation request (no webhook configured):", submission);
  }

  return NextResponse.json({ ok: true });
}
