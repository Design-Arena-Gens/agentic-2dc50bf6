import Image from "next/image";

const highlights = [
  {
    title: "Community Zones",
    description: "Comfortable seating, free coffee refills, and curated playlists keep the vibes in sync with your workflow."
  },
  {
    title: "Smart Security",
    description: "Biometric access, CCTV monitoring, and secure lockers ensure your devices and data stay protected."
  },
  {
    title: "Green Energy Backup",
    description: "Solar-hybrid inverters guarantee uptime even when the grid goes dark, so you&apos;re never offline."
  }
];

export function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-24">
      <div className="section-container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Experience</span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Designed for creators, gamers, and business trailblazers across Nigeria
          </h2>
          <p className="text-base text-slate-600">
            Whether you&apos;re closing deals in Abuja, streaming in Lagos, or gaming in Port Harcourt, our spaces are purpose-built to make technology feel effortless.
          </p>
          <div className="grid gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80"
              alt="Cyber cafe workstations with high-speed computers"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1524594154908-edd666cddc05?auto=format&fit=crop&w=800&q=80"
                alt="Gamers at a tournament in a cyber cafe"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=800&q=80"
                alt="Young professionals collaborating in a meeting room"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
