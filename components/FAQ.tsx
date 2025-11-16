const faqs = [
  {
    question: "Do you offer membership discounts?",
    answer:
      "Yes. Students, NYSC members, and SMEs on our monthly plans enjoy discounts up to 20%. Corporate retainers are also available."
  },
  {
    question: "Is there reliable power backup?",
    answer:
      "We run on a hybrid solar-inverter system with generator backup. Your session remains uninterrupted even during grid outages."
  },
  {
    question: "Can I host events or trainings?",
    answer:
      "Absolutely. We provide configurable spaces, projectors, and dedicated support staff for workshops, tournaments, and launch events."
  },
  {
    question: "Do you sell refreshments?",
    answer:
      "Yes, our snack bar is stocked with Naija favorites – meat pies, puff-puff, suya wraps, and chilled drinks."
  }
];

export function FAQ() {
  return (
    <section id="faqs" className="section-container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Frequently asked questions</h2>
        <p className="mt-4 text-base text-slate-600">
          Can&apos;t find your answer? Call us on +234 700 111 2233 or send a WhatsApp.
        </p>
      </div>
      <div className="mt-16 space-y-6">
        {faqs.map((item) => (
          <div key={item.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
