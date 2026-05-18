import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact our team by phone, email, or office details."
};

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-slate-700">
        We would be glad to hear from you. This page currently shows direct contact details, and we can add a full
        contact form in the next phase.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-5 shadow-soft">
          <h2 className="text-lg font-semibold">Phone</h2>
          <p className="mt-2">{siteConfig.phone}</p>
        </div>
        <div className="rounded-xl bg-white p-5 shadow-soft">
          <h2 className="text-lg font-semibold">Email</h2>
          <a className="mt-2 inline-block text-brand-700 underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
    </section>
  );
}