import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { leadNotificationHtml, leadNotificationSubject, leadNotificationText } from "./email-template";

export type ConsultationPayload = {
  name: string;
  email: string;
  phone: string;
  address?: string;
  service?: string;
  area?: string;
  message: string;
  honeypot?: string;
};

export type ConsultationSubmission = ConsultationPayload & {
  submittedAt: string;
  source: string;
};

const DEFAULT_NOTIFICATION_EMAIL = "dc2978757@gmail.com";
const DEFAULT_FROM_EMAIL = "Elite Concrete Contractors Of Nashville <onboarding@resend.dev>";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendLeadEmail(submission: ConsultationSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { attempted: false as const };

  const resend = new Resend(apiKey);
  const to = process.env.LEAD_NOTIFICATION_EMAIL || DEFAULT_NOTIFICATION_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: submission.email,
    subject: leadNotificationSubject(submission),
    html: leadNotificationHtml(submission),
    text: leadNotificationText(submission),
  });

  if (error) {
    return { attempted: true as const, ok: false as const, error };
  }
  return { attempted: true as const, ok: true as const };
}

async function forwardToWebhook(submission: ConsultationSubmission) {
  const webhookUrl = process.env.CONSULTATION_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    // Webhook is a secondary/optional integration (e.g. a CRM) — log but
    // don't fail the request over it if the primary email path succeeded.
    console.error("Consultation webhook delivery failed:", err);
  }
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

  const submission: ConsultationSubmission = {
    ...body,
    submittedAt: new Date().toISOString(),
    source: "eliteconcretecontractorsnashville.com",
  };

  const emailResult = await sendLeadEmail(submission);

  if (emailResult.attempted && !emailResult.ok) {
    console.error("Consultation email delivery failed:", emailResult.error);
    return NextResponse.json(
      { error: "We couldn't submit your request right now. Please call us directly." },
      { status: 502 }
    );
  }

  await forwardToWebhook(submission);

  if (!emailResult.attempted && !process.env.CONSULTATION_WEBHOOK_URL) {
    // Neither RESEND_API_KEY nor CONSULTATION_WEBHOOK_URL configured yet —
    // log server-side so the request is never silently dropped.
    console.log("New consultation request (no delivery method configured):", submission);
  }

  return NextResponse.json({ ok: true });
}
