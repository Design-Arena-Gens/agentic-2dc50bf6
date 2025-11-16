import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="gradient-bg border-b border-slate-200/70">
      <div className="section-container grid gap-12 py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand shadow-sm">
            Nigeria&apos;s Next-Gen Cyber Cafe
          </div>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Stay connected, innovate, and game without limits at <span className="hero-highlight">Naija Cyber Hub</span>.
          </h1>
          <p className="max-w-xl text-lg text-slate-600">
            From reliable broadband to esports-ready rigs and corporate services, we empower students, professionals, and gamers across Nigeria with a world-class digital experience.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              Reserve a Seat Now
            </Link>
            <Link
              href="#experience"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
            >
              Explore Our Spaces
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {["24/7 Power", "Secure Network", "Tech Support"]
              .map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-center text-sm font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-700">Live Bandwidth</p>
                  <p className="text-2xl font-bold text-slate-900">500 Mbps</p>
                </div>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">Fiber</span>
              </div>
              <div className="rounded-2xl bg-slate-900 p-4 text-white">
                <p className="text-xs uppercase tracking-wide text-white/60">Gaming Arena</p>
                <p className="mt-2 text-lg font-semibold">RTX 4070 Rigs · 240Hz Monitors</p>
                <div className="mt-4 flex items-center justify-between text-xs text-white/70">
                  <span>Seats Available</span>
                  <span className="font-semibold text-brand-light">12/20</span>
                </div>
              </div>
              <div className="rounded-2xl border border-dashed border-brand/30 bg-brand-light/30 p-4 text-sm text-slate-700">
                <p className="font-semibold">Corporate Suites</p>
                <p className="mt-1 text-xs text-slate-500">
                  Private meeting pods, duplex printers, scanning, lamination & virtual office packages.
                </p>
              </div>
            </div>
            <div className="absolute -right-6 bottom-6 hidden h-24 w-24 rounded-full bg-gradient-to-br from-brand to-brand-dark p-0.5 text-white sm:flex">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-slate-900/80">
                <span className="text-xs uppercase tracking-wide text-white/60">Power</span>
                <span className="text-lg font-semibold">24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
