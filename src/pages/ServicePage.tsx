import { useEffect } from "react";
import { useParams } from "react-router-dom";
import drainCleaningHero from "@/assets/drain-cleaning-hero.png";
import gasLineHero from "@/assets/gas-line-hero.png";
import garbageDisposalHero from "@/assets/garbage-disposal-hero.png";
import plumbingRepairsHero from "@/assets/plumbing-repairs-hero.png";
import repipingHero from "@/assets/repiping-hero.png";
import emergencyHero from "@/assets/emergency-plumbing-card.png";
import waterHeaterHero from "@/assets/water-heaters-card.png";
import septicLeachHero from "@/assets/septic-leach-card.png";
import toiletFaucetHero from "@/assets/toilet-faucet-hero.png";
import { servicePages } from "@/data/servicePages";

const heroImages: Record<string, string> = {
  "drain-cleaning": drainCleaningHero,
  "gas-line-services": gasLineHero,
  "garbage-disposal": garbageDisposalHero,
  "plumbing-repairs": plumbingRepairsHero,
  "plumbing-remodels": repipingHero,
  "emergency-plumbing": emergencyHero,
  "water-heaters": waterHeaterHero,
  "septic-leach-fields": septicLeachHero,
  "toilet-faucet-pipe-repairs": toiletFaucetHero,
};
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

      // JSON-LD structured data
      const jsonLdId = "service-jsonld";
      let script = document.getElementById(jsonLdId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = jsonLdId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.heroH1,
        "description": data.metaDescription,
        "url": `https://jmsplumbingservices.com/${data.slug}`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "JMS Plumbing Services LLC",
          "telephone": "+1-954-910-6883",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sunrise",
            "addressLocality": "Sunrise",
            "addressRegion": "FL",
            "postalCode": "33322",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.1668,
            "longitude": -80.2561
          },
          "url": "https://jmsplumbingservices.com",
          "image": "https://jmsplumbingservices.com/og-image.jpg",
          "priceRange": "$$",
          "sameAs": []
        },
        "areaServed": [
          { "@type": "County", "name": "Broward County, FL" },
          { "@type": "County", "name": "Miami-Dade County, FL" },
          { "@type": "County", "name": "Palm Beach County, FL" }
        ],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free estimates with upfront pricing — no hidden fees",
          "availability": "https://schema.org/InStock"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": data.serviceCategory,
          "itemListElement": data.signs.map((sign) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": sign }
          }))
        }
      };
      script.textContent = JSON.stringify(jsonLd);

      // FAQPage JSON-LD
      const faqLdId = "faq-jsonld";
      let faqScript = document.getElementById(faqLdId) as HTMLScriptElement | null;
      if (!faqScript) {
        faqScript = document.createElement("script");
        faqScript.id = faqLdId;
        faqScript.type = "application/ld+json";
        document.head.appendChild(faqScript);
      }
      const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
      faqScript.textContent = JSON.stringify(faqLd);

      return () => {
        document.getElementById(jsonLdId)?.remove();
        document.getElementById(faqLdId)?.remove();
      };
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
        heroImage={heroImages[data.slug]}
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
