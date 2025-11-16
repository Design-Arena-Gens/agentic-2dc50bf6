export function Contact() {
  return (
    <section id="contact" className="bg-brand-light/40 py-24">
      <div className="section-container grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark">Visit us</span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Ready to plug into Naija Cyber Hub?</h2>
          <p className="mt-4 text-base text-slate-600">
            We are located in the heart of Ikeja, Lagos, with branches launching soon in Abuja, Port Harcourt, and Enugu.
          </p>
          <div className="mt-6 space-y-4 text-sm text-slate-700">
            <div>
              <p className="font-semibold text-slate-900">Address</p>
              <p>12A Awolowo Road, Ikeja GRA, Lagos.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Contact</p>
              <p>+234 700 111 2233 · hello@naijacyberhub.ng</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Hours</p>
              <p>Open daily · 7am – Midnight (24/7 for esports lounge)</p>
            </div>
          </div>
        </div>
        <div id="booking" className="rounded-3xl border border-brand/20 bg-white p-8 shadow-lg shadow-brand/20">
          <h3 className="text-xl font-semibold text-slate-900">Instant booking request</h3>
          <p className="mt-2 text-sm text-slate-600">
            Drop your details and our concierge will confirm your reservation within minutes.
          </p>
          <form className="mt-6 grid gap-4">
            <div>
              <label htmlFor="name" className="text-xs font-semibold uppercase text-slate-500">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Chika Okafor"
                className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="text-xs font-semibold uppercase text-slate-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="hello@naijacyberhub.ng"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-xs font-semibold uppercase text-slate-500">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="0803 123 4567"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="text-xs font-semibold uppercase text-slate-500">
                Service Needed
              </label>
              <select
                id="service"
                className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                defaultValue="gaming"
              >
                <option value="workspace">Workspace Day Pass</option>
                <option value="gaming">Esports Lounge</option>
                <option value="training">Training / Event Space</option>
                <option value="business">Business Support Services</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-semibold uppercase text-slate-500">
                Additional Notes
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Let us know your ideal time slot, team size, or special requirements."
                className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              Send Booking Request
            </button>
            <p className="text-xs text-slate-500">
              By submitting, you agree to be contacted via WhatsApp, SMS, or email about your booking.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
