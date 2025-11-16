const testimonials = [
  {
    name: "Seyi A.",
    role: "Founder, Lagos EdTech",
    quote:
      "Our team managed a week-long virtual conference from Naija Cyber Hub without a single dropout. The support staff acted like an extension of our crew."
  },
  {
    name: "Adaobi N.",
    role: "Pro Gamer, Abuja Falcons",
    quote:
      "The gaming arena is a beast – ultra-low latency and high refresh displays. It&apos;s where we prep for all our tournaments."
  },
  {
    name: "Ibrahim M.",
    role: "Product Designer",
    quote:
      "Quiet pods, reliable power, and great coffee. It&apos;s my go-to spot when NEPA takes the day off."
  }
];

export function Testimonials() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light">
            Voices from the hub
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Trusted by Nigeria&apos;s digital community</h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl bg-white/5 p-8 backdrop-blur">
              <p className="text-sm text-white/80">“{item.quote}”</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs uppercase tracking-wide text-white/50">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
