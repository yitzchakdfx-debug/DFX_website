import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollToTopOnRouteChange } from "@/components/layout/scroll-to-top-on-route-change";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <ScrollToTopOnRouteChange />
      <SiteHeader />
      <main
        id="main-content"
        className="mx-auto w-full max-w-6xl flex-1 animate-page-enter px-4 py-10 sm:px-6 lg:px-8"
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
