import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { servicePages } from "@/data/servicePages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceContent from "@/components/service/ServiceContent";
import ServiceSidebar from "@/components/service/ServiceSidebar";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceRelated from "@/components/service/ServiceRelated";
import ServiceCTA from "@/components/service/ServiceCTA";
import NotFound from "./NotFound";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = servicePages.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (data) {
      document.title = data.pageTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", data.metaDescription);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = data.metaDescription;
        document.head.appendChild(newMeta);
      }
    }
  }, [data]);

  if (!data) return <NotFound />;

  return (
    <div className="min-h-screen">
      <Navbar />

      <ServiceHero
        serviceCategory={data.serviceCategory}
        h1={data.heroH1}
        subtext={data.heroSubtext}
      />

      {/* Section 2: Main Content + Sticky Sidebar */}
      <section className="py-16 lg:py-24 bg-cream-light vintage-grain relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-12">
            {/* Left column — content scrolls */}
            <ServiceContent
              introHeading={data.introHeading}
              paragraph1={data.paragraph1}
              paragraph2={data.paragraph2}
              paragraph3={data.paragraph3}
              signsHeading={data.signsHeading}
              signs={data.signs}
              diyHeading={data.diyHeading}
              diyParagraphs={data.diyParagraphs}
              expectHeading={data.expectHeading}
              steps={data.steps}
            />

            {/* Right column — sticky sidebar */}
            <div className="lg:self-start lg:sticky lg:top-36">
              <ServiceSidebar
                defaultService={data.defaultServiceValue}
                testimonials={data.testimonials}
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQ heading={data.faqHeading} faqs={data.faqs} />
      <ServiceRelated services={data.relatedServices} />
      <ServiceCTA heading={data.ctaHeading} subtext={data.ctaSubtext} />

      <Footer />
    </div>
  );
};

export default ServicePage;
