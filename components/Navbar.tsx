"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200/60">
      <div className="section-container flex items-center justify-between py-4">
        <Link href="#hero" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-bold">
            NH
          </span>
          <span>Naija Cyber Hub</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-dark">
              {item.label}
            </Link>
          ))}
          <Link
            href="#booking"
            className="rounded-full bg-brand px-4 py-2 text-white shadow-sm transition hover:bg-brand-dark"
          >
            Book a Station
          </Link>
        </nav>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-brand hover:text-brand md:hidden"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5" />
          </svg>
        </button>
      </div>
      <nav
        className={`md:hidden overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-80 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <ul className="section-container flex flex-col gap-4 py-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#booking"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-4 py-2 text-white"
              onClick={() => setOpen(false)}
            >
              Book a Station
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
