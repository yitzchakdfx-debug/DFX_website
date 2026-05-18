import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-semibold text-slate-900">{siteConfig.companyName}</p>
          <p className="mt-1">{siteConfig.address}</p>
        </div>
        <div>
          <p>
            Phone:{" "}
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-slate-900">
              {siteConfig.phone}
            </a>
          </p>
          <p>
            Email:{" "}
            <a href={`mailto:${siteConfig.email}`} className="hover:text-slate-900">
              {siteConfig.email}
            </a>
          </p>
        </div>
        <div>
          <p>&copy; {siteConfig.copyrightYear} {siteConfig.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
