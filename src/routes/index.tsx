import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsappFab } from "@/components/WhatsappFab";

export const Route = createFileRoute("/" as const)({
  component: Index,
} as any);

function Index() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsappFab />
    </main>
  );
}
