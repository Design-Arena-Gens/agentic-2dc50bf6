import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
