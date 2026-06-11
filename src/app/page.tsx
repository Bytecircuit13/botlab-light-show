import Header from "@/components/ui/Header";
import CanvasBackground from "@/components/sections/CanvasBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import OurWork from "@/components/sections/OurWork";
import Services from "@/components/sections/Services";
import Awards from "@/components/sections/Awards";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed canvas — scrubs drone sequence across entire page scroll */}
      <CanvasBackground />

      {/* Sticky nav */}
      <Header />

      {/* All sections are transparent — canvas shows through everywhere */}
      <main className="relative flex flex-col w-full">
        <Hero />
        <About />
        <OurWork />
        <Services />
        <Awards />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
