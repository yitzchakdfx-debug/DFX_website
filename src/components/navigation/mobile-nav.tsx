"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigationConfig } from "@/config/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="relative md:hidden">
      <button type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((prev) => !prev)} className="rounded-md p-2 text-slate-200 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        <span className="sr-only">Open menu</span>
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute right-0 top-[calc(100%+10px)] z-50 w-[min(92vw,360px)] max-h-[75vh] overflow-y-auto space-y-2 rounded-xl border border-[#2a4568] bg-[#203955] p-3 shadow-soft"
        >
          {navigationConfig.map((item) => {
            if (!item.items?.length) {
              return (
                <Link key={item.label} href={item.href ?? "#"} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium leading-5 text-slate-100 transition hover:bg-white/10">
                  {item.label}
                </Link>
              );
            }

            const isExpanded = expanded === item.label;
            return (
              <div key={item.label}>
                <button type="button" className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10" aria-expanded={isExpanded} onClick={() => setExpanded(isExpanded ? null : item.label)}>
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition ${isExpanded ? "rotate-180" : ""}`} />
                </button>
                {isExpanded && (
                  <div className="mt-1 space-y-1 pl-3">
                    {item.items.map((subItem) => (
                      <Link key={subItem.href} href={subItem.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm leading-5 text-slate-200 transition hover:bg-white/10 hover:text-white">
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
