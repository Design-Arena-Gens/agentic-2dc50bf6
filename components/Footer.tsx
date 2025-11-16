import Link from "next/link";

export function Footer() {
  const nav = [
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" }
  ];

  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="section-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-900">Naija Cyber Hub</p>
          <p className="mt-2 text-sm text-slate-500">Powering Nigeria&apos;s digital future from the neighborhood up.</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Naija Cyber Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
