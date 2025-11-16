import type { JSX } from "react";

const services = [
  {
    title: "Lightning-Fast Broadband",
    description:
      "Dedicated fiber optics with redundant VSAT backup to keep your browsing, streaming, and downloads smooth even during peak hours.",
    icon: "wifi"
  },
  {
    title: "Esports & Gaming Lounge",
    description:
      "Top-tier gaming PCs, PS5 consoles, and VR bays with ergonomic chairs, surround sound headsets, and weekly tournaments.",
    icon: "gamepad"
  },
  {
    title: "Business Support Suite",
    description:
      "Printing, scanning, lamination, passport photo capture, and private meeting pods ready for remote teams and freelancers.",
    icon: "briefcase"
  },
  {
    title: "Learning & Training",
    description:
      "Digital skills bootcamps, coding classes for kids, IELTS prep, and collaboration with local universities.",
    icon: "sparkles"
  }
];

const icons: Record<string, JSX.Element> = {
  wifi: (
    <svg className="h-8 w-8 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25c6.975-6 12.525-6 19.5 0M5.25 11.25c4.65-4 8.1-4 12.75 0M8.25 14.25c2.325-2 4.05-2 6.375 0M12 17.25h.008v.008H12v-.008z"
      />
    </svg>
  ),
  gamepad: (
    <svg className="h-8 w-8 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 8.25h-1.5A2.25 2.25 0 003 10.5V15a3 3 0 003 3h1.164a1.5 1.5 0 001.06-.44l1.816-1.83a1.5 1.5 0 012.121 0l1.816 1.83a1.5 1.5 0 001.06.44H18a3 3 0 003-3v-4.5a2.25 2.25 0 00-2.25-2.25h-1.5M9.75 9.75v3m-1.5-1.5h3M15.375 13.5h.008v.008h-.008V13.5zm2.25-2.25h.008v.008h-.008v-.008z"
      />
    </svg>
  ),
  briefcase: (
    <svg className="h-8 w-8 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9V7.5A2.25 2.25 0 0111.25 5.25h1.5A2.25 2.25 0 0115 7.5V9m-6 0h6m-6 0H5.25A2.25 2.25 0 003 11.25v6A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25v-6A2.25 2.25 0 0018.75 9H15"
      />
    </svg>
  ),
  sparkles: (
    <svg className="h-8 w-8 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9l1.5-4.5L12 9l1.5-4.5L15 9m-4.5 6l-1.125 3.375M12 15l1.125 3.375M12 15l-1.5-4.5m1.5 4.5l1.5-4.5m3.375 8.625L15 15m3.375 8.625L21 15m-2.625 8.625L18 12m0 0l-1.5-4.5M18 12l1.5-4.5"
      />
    </svg>
  )
};

export function Services() {
  return (
    <section id="services" className="section-container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Everything you need under one connected roof</h2>
        <p className="mt-4 text-base text-slate-600">
          We built Naija Cyber Hub to power the digital lifestyle of Nigerian communities – from reliable connectivity to immersive entertainment.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm transition hover:-translate-y-1 hover:border-brand/60 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light/60">
              {icons[service.icon]}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
