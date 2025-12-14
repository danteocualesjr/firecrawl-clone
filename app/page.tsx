import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import CorePrinciples from "@/components/CorePrinciples";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Banner />
      <Header />
      <Hero />
      <Logos />
      <Features />
      <Testimonials />
      <Integrations />
      <CorePrinciples />
      <UseCases />
      <FAQ />
      <Footer />
    </main>
  );
}
