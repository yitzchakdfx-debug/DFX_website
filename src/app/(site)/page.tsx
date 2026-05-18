import Image from "next/image";
import Link from "next/link";
import { RevealSection } from "@/components/ui/reveal-section";

export default function HomePage() {
  return (
    <div className="py-12">
      <RevealSection className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft sm:p-12">
        <Image
          src="/logo.png"
          alt="DFX Engineering logo"
          width={680}
          height={360}
          priority
          className="mx-auto h-auto w-full max-w-3xl"
        />

        <h1 className="mt-8 text-3xl font-bold text-slate-900 sm:text-4xl">Website Under Construction</h1>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          We are currently building our new website. Core pages are already available and you can continue
          browsing the site.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/about"
            className="rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900"
          >
            About Us
          </Link>
          <Link
            href="/solutions/burn-in-rack"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            View Solutions
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Contact
          </Link>
        </div>
      </RevealSection>
    </div>
  );
}

