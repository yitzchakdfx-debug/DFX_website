import Link from "next/link";

export default function NotFound() {
  return (
    <section className="space-y-4 rounded-2xl bg-white p-8 text-center shadow-soft">
      <h1 className="text-3xl font-bold">404 - Page not found</h1>
      <p className="text-slate-700">The link may be broken or the page may have been moved.</p>
      <div>
        <Link href="/" className="rounded-lg bg-brand-700 px-5 py-3 text-white transition hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700">Back to home</Link>
      </div>
    </section>
  );
}