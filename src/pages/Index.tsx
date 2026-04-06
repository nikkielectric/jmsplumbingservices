import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import PromiseBanner from "@/components/PromiseBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ServiceArea />
      <Contact />
      <PromiseBanner />
      <Footer />
    </div>
  );
};

export default Index;
