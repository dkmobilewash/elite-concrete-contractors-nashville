"use client";

import { useState, FormEvent } from "react";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  defaultService,
  defaultArea,
}: {
  defaultService?: string;
  defaultArea?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      address: String(data.get("address") || ""),
      service: String(data.get("service") || ""),
      area: String(data.get("area") || ""),
      message: String(data.get("message") || ""),
      honeypot: String(data.get("company") || ""),
    };

    try {
      const res = await fetch("/api/consultation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-[var(--color-navy)]/20 bg-[var(--color-off-white)] p-8 text-center">
        <h3 className="font-heading text-xl font-semibold text-[var(--color-navy)]">Request Received</h3>
        <p className="mt-2 text-sm text-[var(--color-charcoal)]">
          Thank you — a member of our team will follow up shortly to schedule your consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" required />
        <Field label="Property Address" name="address" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-[var(--color-navy)] mb-1.5">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService || ""}
            className="w-full rounded-sm border border-[var(--color-hairline)] px-4 py-3 text-sm focus:border-[var(--color-navy)] focus:outline-none"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-[var(--color-navy)] mb-1.5">
            Property Location
          </label>
          <select
            id="area"
            name="area"
            defaultValue={defaultArea || ""}
            className="w-full rounded-sm border border-[var(--color-hairline)] px-4 py-3 text-sm focus:border-[var(--color-navy)] focus:outline-none"
          >
            <option value="">Select an area</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.slug}>{a.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-navy)] mb-1.5">
          Tell Us About Your Project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-sm border border-[var(--color-hairline)] px-4 py-3 text-sm focus:border-[var(--color-navy)] focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-sm bg-[var(--color-navy)] px-8 py-4 text-sm font-semibold text-white hover:bg-[var(--color-navy-light)] transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Request a Consultation"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-[var(--color-navy)] mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-[var(--color-hairline)] px-4 py-3 text-sm focus:border-[var(--color-navy)] focus:outline-none"
      />
    </div>
  );
}
