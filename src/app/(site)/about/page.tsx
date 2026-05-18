import type { Metadata } from "next";
import { RevealSection } from "@/components/ui/reveal-section";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "DFX Engineering provides sales and consulting services for DFT, test, validation, and debugging tools across software and hardware environments."
};

export default function AboutPage() {
  return (
    <div dir="ltr" className="space-y-8 text-left">
      <RevealSection className="relative overflow-hidden rounded-3xl bg-slate-900 px-7 py-10 text-white shadow-soft sm:px-10">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand-600/35 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-3xl space-y-4">
          <p className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold tracking-wide">
            COMPANY PROFILE
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">DFX Engineering</h1>
          <p className="text-slate-200">
            DFX Engineering provides superior sales and consulting services for DFT, test, and validation debugging
            tools across software and hardware environments.
          </p>
        </div>
      </RevealSection>

      <RevealSection delayMs={60} className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-lg font-semibold">Customer Service</h2>
          <p className="mt-2 text-sm text-slate-600">
            Outstanding support with high flexibility and practical guidance from first contact to production.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-lg font-semibold">Technical Expertise</h2>
          <p className="mt-2 text-sm text-slate-600">
            Functional and technical depth built on hands-on engineering experience in real customer environments.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-lg font-semibold">Industry Experience</h2>
          <p className="mt-2 text-sm text-slate-600">
            More than 20 years in DFx, DFT/DFM, ICT, JTAG, functional testing, FAB, and FABLESS flows.
          </p>
        </article>
      </RevealSection>

      <RevealSection delayMs={120} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
        <h2 className="text-2xl font-bold">How We Work</h2>
        <p className="mt-4 text-slate-700">
          DFX Engineering brings a fresh and innovative approach to sales and consulting, acting as a liaison
          between end-users and software/hardware providers.
        </p>
        <p className="mt-3 text-slate-700">
          We are involved in every stage of the client journey, from selecting the right software tools to
          implementation, completion, and continuous technical support.
        </p>
        <p className="mt-3 text-slate-700">
          Our implementation capabilities include business requirements definition, functional specifications,
          system design, and coordination with development teams to fit specific client needs.
        </p>
      </RevealSection>

      <RevealSection delayMs={180} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
        <h2 className="text-2xl font-bold">On-Site Delivery & Support</h2>
        <p className="mt-4 text-slate-700">
          We typically work on-site at customer locations, managing communication, delivering training, and
          resolving troubleshooting issues when software usage begins in live production settings.
        </p>
      </RevealSection>

      <RevealSection delayMs={240} className="rounded-2xl bg-brand-700 px-7 py-8 text-white shadow-soft">
        <h2 className="text-2xl font-bold">Why DFX Engineering</h2>
        <p className="mt-3 text-brand-100">
          Exceptional functional and technical expertise, coupled with extensive industry knowledge, makes DFX
          Engineering the ideal choice for implementing and scaling DFx and test systems.
        </p>
      </RevealSection>
    </div>
  );
}
