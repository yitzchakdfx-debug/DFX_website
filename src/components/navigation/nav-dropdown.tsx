"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/config/navigation";

export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    buttonRef.current?.blur();
  }, [pathname]);

  if (!item.items?.length) {
    return (
      <Link
        href={item.href ?? "#"}
        className="rounded-xl px-4 py-2.5 text-[17px] font-medium text-slate-100 [text-shadow:0_1px_2px_rgba(0,0,0,0.55)] transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(event) => {
        const nextFocused = event.relatedTarget as Node | null;
        if (!event.currentTarget.contains(nextFocused)) {
          setOpen(false);
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="flex items-center gap-1 rounded-xl px-4 py-2.5 text-[17px] font-medium text-slate-100 [text-shadow:0_1px_2px_rgba(0,0,0,0.55)] transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      <div
        className={`absolute left-0 top-full z-30 w-64 pt-2 transition ${
          open ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="rounded-xl border border-[#2a4568] bg-[#203955] p-2 shadow-soft">
          {item.items.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              onClick={() => {
                setOpen(false);
                buttonRef.current?.blur();
              }}
              className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
