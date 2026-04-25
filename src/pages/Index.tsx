import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import EmergencyCTA from "@/components/EmergencyCTA";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import PromiseBanner from "@/components/PromiseBanner";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "JMS Plumbing Services LLC | Expert Plumber in Sunrise, FL";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Family-owned plumbing services in Sunrise, FL serving South Florida's Tri-County area. Drain cleaning, gas lines, remodels & 24/7 emergency plumbing. Call (954) 910-6883.");
    }

    // LocalBusiness + WebSite JSON-LD
    const jsonLdId = "home-jsonld";
    let script = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = jsonLdId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Plumber",
        "@id": "https://jmsplumbingservices.com/#business",
        "name": "JMS Plumbing Services LLC",
        "url": "https://jmsplumbingservices.com",
        "telephone": "+1-954-910-6883",
        "email": "Jmsplumbingservicesllc@gmail.com",
        "description": "Family-owned plumbing services in Sunrise, FL serving Broward, Miami-Dade, and Palm Beach Counties. Drain cleaning, gas lines, remodels & 24/7 emergency plumbing.",
        "image": "https://jmsplumbingservices.com/og-image.jpg",
        "logo": "https://jmsplumbingservices.com/og-image.jpg",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Check",
        "slogan": "The Plumber That Actually Shows Up",
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
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:00",
            "closes": "16:00"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Sunrise", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Plantation", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Fort Lauderdale", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Tamarac", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Lauderhill", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Coral Springs", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Weston", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Davie", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Parkland", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Southwest Ranches", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Hollywood", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Pembroke Pines", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Cooper City", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "City", "name": "Weston", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "County", "name": "Broward County", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "County", "name": "Miami-Dade County", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "County", "name": "Palm Beach County", "containedInPlace": { "@type": "State", "name": "Florida" } }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Plumbing Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drain Cleaning" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas Line Services" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing Repairs" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing Remodels" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garbage Disposal" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Plumbing" } }
          ]
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61577689533939",
          "https://www.instagram.com/jmsplumbingservices24/"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "20",
          "bestRating": "5"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "JMS Plumbing Services LLC",
        "url": "https://jmsplumbingservices.com"
      }
    ]);

    return () => {
      document.getElementById(jsonLdId)?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <HowItWorks />
      <Testimonials />
      <EmergencyCTA />
      
      <ServiceArea />
      <PromiseBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
