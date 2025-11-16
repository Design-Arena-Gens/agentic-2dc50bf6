const plans = [
  {
    title: "Pay-As-You-Go",
    price: "₦500/hr",
    description: "Ideal for quick browsing, email checks, and online submissions.",
    features: ["Up to 200 Mbps", "Access to standard PCs", "Complimentary coffee"],
    highlight: false
  },
  {
    title: "Pro Worker",
    price: "₦4,500/day",
    description: "Perfect for remote workers, researchers, and freelancers.",
    features: [
      "Reserved workstation",
      "Private call booths",
      "Unlimited printing (fair use)",
      "Business-class WiFi"
    ],
    highlight: true
  },
  {
    title: "Esports Squad",
    price: "₦18,000/night",
    description: "All-night access for teams and serious gamers.",
    features: [
      "RTX gaming rigs",
      "240Hz monitors",
      "Energy drinks & snacks",
      "Dedicated tournament host"
    ],
    highlight: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="section-container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Flexible pricing for every hustle</h2>
        <p className="mt-4 text-base text-slate-600">
          From hourly browsing to fully managed virtual offices, select a plan that fits your rhythm.
        </p>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`flex flex-col rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
              plan.highlight ? "border-brand bg-brand-light/40" : "border-slate-200"
            }`}
          >
            <h3 className="text-xl font-semibold text-slate-900">{plan.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
              <span className="text-xs uppercase tracking-wide text-slate-500">All inclusive</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-light/70 text-brand">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#booking"
              className={`mt-10 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                plan.highlight
                  ? "bg-brand text-white shadow shadow-brand/40 hover:bg-brand-dark"
                  : "border border-slate-300 text-slate-700 hover:border-brand hover:text-brand"
              }`}
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
