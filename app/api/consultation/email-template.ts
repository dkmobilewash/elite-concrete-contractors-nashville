import { ConsultationSubmission } from "./route";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function labelFor(slug: string | undefined, list: { slug: string; name: string }[]) {
  if (!slug) return "—";
  return list.find((item) => item.slug === slug)?.name ?? slug;
}

export function leadNotificationSubject(submission: ConsultationSubmission) {
  return `New Consultation Request — ${submission.name}`;
}

export function leadNotificationText(submission: ConsultationSubmission) {
  const serviceLabel = labelFor(submission.service, services);
  const areaLabel = labelFor(submission.area, areas);

  return [
    `New consultation request from ${siteConfig.name}`,
    "",
    `Name: ${submission.name}`,
    `Phone: ${submission.phone}`,
    `Email: ${submission.email}`,
    submission.address ? `Property Address: ${submission.address}` : null,
    `Service: ${serviceLabel}`,
    `Area: ${areaLabel}`,
    "",
    "Project Details:",
    submission.message,
    "",
    `Submitted: ${submission.submittedAt}`,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export function leadNotificationHtml(submission: ConsultationSubmission) {
  const serviceLabel = escapeHtml(labelFor(submission.service, services));
  const areaLabel = escapeHtml(labelFor(submission.area, areas));

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:8px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#55575b;font-weight:600;white-space:nowrap;">${label}</td>
      <td style="padding:8px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#1c1d1f;">${value}</td>
    </tr>`;

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f7f8f9;padding:32px 16px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:4px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="background:#0e2748;padding:20px 24px;">
        <p style="margin:0;color:#ffffff;font-size:16px;font-weight:700;">New Consultation Request</p>
        <p style="margin:4px 0 0;color:#c7cad0;font-size:12px;">${escapeHtml(siteConfig.name)}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Name", escapeHtml(submission.name))}
        ${row("Phone", `<a href="tel:${escapeHtml(submission.phone)}" style="color:#0e2748;">${escapeHtml(submission.phone)}</a>`)}
        ${row("Email", `<a href="mailto:${escapeHtml(submission.email)}" style="color:#0e2748;">${escapeHtml(submission.email)}</a>`)}
        ${submission.address ? row("Property Address", escapeHtml(submission.address)) : ""}
        ${row("Service", serviceLabel)}
        ${row("Area", areaLabel)}
      </table>
      <div style="padding:16px 24px;">
        <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:#55575b;">Project Details</p>
        <p style="margin:0;font-size:14px;color:#1c1d1f;white-space:pre-wrap;line-height:1.5;">${escapeHtml(submission.message)}</p>
      </div>
      <div style="padding:12px 24px 20px;border-top:1px solid #e5e7eb;">
        <p style="margin:0;font-size:11px;color:#9ca3af;">Submitted ${escapeHtml(submission.submittedAt)} via eliteconcretecontractorsnashville.com</p>
      </div>
    </div>
  </div>`;
}
