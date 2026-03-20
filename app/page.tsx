import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-sage">
      <Hero />
      <About />
      <Services />
      <Steps />
      <Contact />
      <Footer />
    </main>
  );
}
