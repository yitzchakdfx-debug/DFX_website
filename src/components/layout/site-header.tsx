import Link from "next/link";
import Image from "next/image";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#284162] bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_30%,#eef3f8_42%,#1d314d_58%,#1d314d_100%)] backdrop-blur md:bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_14%,#e8edf4_24%,#1d314d_42%,#1d314d_100%)]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:px-3 focus:py-2">
        Skip to main content
      </a>

      <div className="flex h-16 w-full items-center justify-between gap-3 px-3 sm:h-20 sm:px-5 lg:px-8">
        <Link
          href="/"
          className="flex h-16 shrink-0 items-stretch bg-white sm:h-20"
          aria-label="DFX Engineering Home"
        >
          <Image
            src="/logo.gif"
            alt="DFX Engineering"
            width={260}
            height={130}
            priority
            className="block h-full w-auto"
          />
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <DesktopNav />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
