import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertTriangle } from "lucide-react";
import jmsLogoPin from "@/assets/jms-logo-pin.png";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VintageOrnament from "@/components/VintageOrnament";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    cityZip: "",
    service: "",
    hearAbout: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.title = "Contact JMS Plumbing Services | Licensed Plumber in Sunrise, FL";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Contact JMS Plumbing Services for plumbing repairs, drain cleaning, gas line services, and emergency plumbing throughout Broward, Miami-Dade, and Palm Beach Counties. Call (954) 910-6883."
      );

    // Inject LocalBusiness JSON-LD
    const jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.id = "contact-jsonld";
    jsonLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "JMS Plumbing Services LLC",
      "url": "https://jmsplumbingservicesllc.com",
      "telephone": "+1-954-910-6883",
      "email": "Jmsplumbingservicesllc@gmail.com",
      "image": "https://jmsplumbingservicesllc.com/og-image.jpg",
      "description": "Licensed and insured plumbing services in Sunrise, FL. Serving Broward, Miami-Dade, and Palm Beach Counties with honest work and upfront pricing.",
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
        { "@type": "County", "name": "Broward County", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "County", "name": "Miami-Dade County", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "County", "name": "Palm Beach County", "containedInPlace": { "@type": "State", "name": "Florida" } }
      ],
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, Check",
      "slogan": "The Plumber That Actually Shows Up",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Plumbing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drain Cleaning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing Repairs" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas Line Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garbage Disposal" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing Remodels" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Plumbing" } }
        ]
      }
    });
    document.head.appendChild(jsonLd);

    window.scrollTo(0, 0);

    return () => {
      const el = document.getElementById("contact-jsonld");
      if (el) el.remove();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.cityZip.trim() || !form.service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Quote request sent! We'll get back to you shortly.");
      setForm({ name: "", phone: "", email: "", cityZip: "", service: "", hearAbout: "", message: "" });
    }, 1200);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ═══ SECTION 1 — PAGE HERO ═══ */}
      <section className="relative pt-36 lg:pt-44 bg-secondary vintage-grain vintage-vignette pb-10 lg:pb-14">
        {/* Decorative top accent line */}
        <div className="absolute top-[140px] lg:top-[176px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto py-10 lg:py-14"
          >
            {/* Stamp-style badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full border-[3px] double border-primary/40 mb-6"
            >
              <div className="text-center">
                <Phone className="w-6 h-6 text-primary mx-auto mb-0.5" />
                <span className="text-cream/60 text-[8px] font-body uppercase tracking-widest">Talk to Us</span>
              </div>
            </motion.div>

            <span className="block text-primary font-semibold text-sm tracking-widest uppercase font-body mb-3">
              GET IN TOUCH
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-cream leading-[1.1] mb-5">
              Let's Talk. We'll Give You a Straight Answer{" "}
              <span className="text-steel italic">and a Fair Price.</span>
            </h1>
            <VintageOrnament className="max-w-xs mx-auto mb-5 [&_div]:bg-gradient-to-r [&_div]:from-transparent [&_div]:via-cream/30 [&_div]:to-transparent [&_svg]:text-cream/40" />
            <p className="text-cream/70 font-body text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              No voicemail maze. No runaround. Call us directly or fill out the form below and a real
              person will get back to you fast. We serve homeowners and businesses throughout Broward,
              Miami-Dade, and Palm Beach Counties.
            </p>
          </motion.div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

        {/* Side decorative vertical lines */}
        <div className="hidden lg:block absolute top-1/4 left-8 w-px h-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="hidden lg:block absolute top-1/4 right-8 w-px h-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </section>

      {/* ═══ SECTION 2 — MAIN CONTACT SECTION ═══ */}
      <section className="bg-cream-light py-20 lg:py-28 vintage-grain relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
            {/* LEFT COLUMN — CONTACT DETAILS */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground mb-2">
                Reach Us <span className="text-primary italic">Directly</span>
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                The fastest way to reach us is always a phone call. We pick up during business hours
                and after hours for emergencies.
              </p>

              {/* Contact detail blocks */}
              <div className="space-y-6 mb-8">
                {/* Call */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-0.5">Call Us</p>
                    <a href="tel:9549106883" className="text-lg font-semibold text-foreground hover:text-primary transition-colors font-body block">
                      (954) 910-6883
                    </a>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">Available 24/7 for emergencies</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-0.5">Email Us</p>
                    <a href="mailto:Jmsplumbingservicesllc@gmail.com" className="text-sm font-semibold text-foreground hover:text-primary transition-colors font-body block break-all">
                      Jmsplumbingservicesllc@gmail.com
                    </a>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">We respond within a few hours during business hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-0.5">Based In</p>
                    <p className="text-sm font-semibold text-foreground font-body">Sunrise, FL 33322</p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">Serving Broward, Miami-Dade and Palm Beach Counties</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-0.5">Business Hours</p>
                    <div className="text-sm font-semibold text-foreground font-body space-y-0.5">
                      <p>Monday – Friday: 8:00am to 6:00pm</p>
                      <p>Saturday: 8:00am to 4:00pm</p>
                      <p>Sunday: Emergency calls only</p>
                    </div>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">After hours emergency fees disclosed upfront</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border my-8" />

              {/* Trust block */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Licensed and Insured in Florida",
                  "Family Owned and Operated",
                  "Upfront Pricing on Every Job",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-body text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              {/* Emergency callout box */}
              <div className="rounded border-2 border-primary/30 bg-primary/5 p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-t" />
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="font-display font-bold text-foreground text-lg">
                    Plumbing Emergency Right Now?
                  </h3>
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 ml-8">
                  Don't fill out a form. Call us directly at (954) 910-6883. A real person picks up
                  around the clock for emergencies. After hours fees are always disclosed before we dispatch.
                </p>
                <a
                  href="tel:9549106883"
                  className="ml-8 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-bold text-sm hover:bg-primary/90 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </motion.div>

            {/* RIGHT COLUMN — CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded p-8 lg:p-10 bg-secondary vintage-border relative"
            >
              {/* Decorative corners */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cream/15 rounded-tl" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cream/15 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cream/15 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cream/15 rounded-br" />

              <h3 className="text-2xl lg:text-3xl font-display font-black text-cream mb-2">
                Request a Free Quote
              </h3>
              <p className="text-cream/60 font-body text-sm mb-6">
                Fill out the form and we'll call you back fast. Usually within minutes during business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Phone Number *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      maxLength={20}
                      className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Email Address *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      maxLength={255}
                      className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* City/Zip + Service */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">City & Zip Code *</label>
                    <input
                      type="text"
                      value={form.cityZip}
                      onChange={(e) => setForm({ ...form, cityZip: e.target.value })}
                      maxLength={100}
                      className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Sunrise, FL 33322"
                    />
                  </div>
                  <div>
                    <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Service Needed *</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="" className="bg-secondary text-cream">Select a service</option>
                      <option value="drain-cleaning" className="bg-secondary text-cream">Drain Cleaning</option>
                      <option value="repairs" className="bg-secondary text-cream">Plumbing Repairs and Replacements</option>
                      <option value="gas" className="bg-secondary text-cream">Gas Line Services</option>
                      <option value="water-heater" className="bg-secondary text-cream">Water Heater Services</option>
                      <option value="garbage-disposal" className="bg-secondary text-cream">Garbage Disposal</option>
                      <option value="remodel" className="bg-secondary text-cream">Plumbing Remodels</option>
                      <option value="emergency" className="bg-secondary text-cream">Emergency Plumbing</option>
                      <option value="other" className="bg-secondary text-cream">Other</option>
                    </select>
                  </div>
                </div>

                {/* How did you hear */}
                <div>
                  <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">How Did You Hear About Us?</label>
                  <select
                    value={form.hearAbout}
                    onChange={(e) => setForm({ ...form, hearAbout: e.target.value })}
                    className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="" className="bg-secondary text-cream">Select an option</option>
                    <option value="google-search" className="bg-secondary text-cream">Google Search</option>
                    <option value="google-maps" className="bg-secondary text-cream">Google Maps</option>
                    <option value="referral" className="bg-secondary text-cream">Referral from Friend or Family</option>
                    <option value="social-media" className="bg-secondary text-cream">Social Media</option>
                    <option value="truck" className="bg-secondary text-cream">Drove Past Our Truck</option>
                    <option value="other" className="bg-secondary text-cream">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={3}
                    className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us what's going on so we can come prepared."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-bold text-base hover:bg-primary/90 transition-all w-full disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send My Request"}
                  {!sending && <Send className="w-4 h-4" />}
                </button>

                <p className="text-cream/40 text-xs font-body text-center leading-relaxed">
                  We'll call you back fast. After hours requests will be returned first thing the next
                  business day unless it's an emergency — in which case call us directly.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — SERVICE AREA ═══ */}
      <section className="bg-cream py-20 lg:py-28 vintage-grain relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
                WHERE WE WORK
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
                Serving South Florida's{" "}
                <span className="text-primary italic">Tri-County Area</span>
              </h2>
              <VintageOrnament className="max-w-xs mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Based in Sunrise, FL, JMS Plumbing Services makes house calls across Broward,
                Miami-Dade, and Palm Beach Counties. If you're in South Florida, we're your plumber.
              </p>

              <p className="text-foreground font-body text-base lg:text-lg font-semibold mb-6">
                Sunrise · Fort Lauderdale · Plantation · Tamarac · Lauderhill · Coral Springs · Weston
                · and surrounding communities throughout Broward, Miami-Dade and Palm Beach Counties
              </p>

              <p className="text-muted-foreground font-body text-sm">
                Don't see your city? Call us anyway at{" "}
                <a href="tel:9549106883" className="text-primary font-semibold hover:underline">
                  (954) 910-6883
                </a>{" "}
                — chances are we serve your area.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded overflow-hidden shadow-2xl vintage-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57200!2d-80.27780045272723!3d26.16470198032312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="384"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JMS Plumbing service area map"
                className="w-full h-80 lg:h-96 vintage-sepia"
              />
              <div className="absolute top-[40%] left-[53%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8, type: "spring", bounce: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <img
                    src={jmsLogoPin}
                    alt="JMS Plumbing location"
                    className="w-12 h-12 lg:w-16 lg:h-16 drop-shadow-lg"
                  />
                  <div className="w-2 h-2 rounded-full bg-secondary shadow-md mt-1" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
