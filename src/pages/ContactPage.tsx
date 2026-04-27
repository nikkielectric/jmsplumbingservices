import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertTriangle } from "lucide-react";
import jmsLogoPin from "@/assets/jms-logo-pin.webp";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VintageOrnament from "@/components/VintageOrnament";
import { submitToFormspree } from "@/lib/formspree";
import ThankYouModal from "@/components/ThankYouModal";
import { useT } from "@/i18n/LanguageContext";
const ContactPage = () => {
  const t = useT();
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
  const [showThankYou, setShowThankYou] = useState(false);

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
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Backflow Prevention" } },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.cityZip.trim() || !form.service) {
      toast.error(t("contact.fillAll"));
      return;
    }
    setSending(true);
    try {
      await submitToFormspree({
        _subject: 'New Lead — Contact Page',
        "Form Source": 'Contact Page — Request a Free Quote',
        Name: form.name,
        Email: form.email,
        Phone: form.phone,
        "City/Zip": form.cityZip,
        Service: form.service,
        "How did you hear about us?": form.hearAbout,
        Message: form.message,
      });
      setForm({ name: "", phone: "", email: "", cityZip: "", service: "", hearAbout: "", message: "" });
      setShowThankYou(true);
    } catch (err) {
      console.error('Form submission error:', err);
      toast.error(t("contact.error"));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ═══ SECTION 1 — PAGE HERO ═══ */}
      <section className="relative pt-24 lg:pt-44 bg-secondary vintage-grain vintage-vignette">

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto py-12 lg:py-20"
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
                <span className="text-cream/60 text-[8px] font-body uppercase tracking-widest">{t("cp.talkToUs")}</span>
              </div>
            </motion.div>

            <span className="block text-primary font-semibold text-sm tracking-widest uppercase font-body mb-3">
              {t("cp.eyebrow")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-cream leading-[1.1] mb-5">
              {t("cp.h1.part1")}{" "}
              <span className="text-steel italic">{t("cp.h1.italic")}</span>
            </h1>
            <VintageOrnament className="max-w-xs mx-auto mb-5 [&_div]:bg-gradient-to-r [&_div]:from-transparent [&_div]:via-cream/30 [&_div]:to-transparent [&_svg]:text-cream/40" />
            <p className="text-cream/70 font-body text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              {t("cp.heroIntro")}
            </p>
          </motion.div>
        </div>

        {/* Subtle dot pattern overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
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
                {t("cp.reach.h2.part1")} <span className="text-primary italic">{t("cp.reach.h2.italic")}</span>
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                {t("cp.reach.intro")}
              </p>

              {/* Contact detail blocks */}
              <div className="space-y-6 mb-8">
                {/* Call */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-0.5">{t("contact.callUs")}</p>
                    <a href="tel:9549106883" className="text-lg font-semibold text-foreground hover:text-primary transition-colors font-body block">
                      (954) 910-6883
                    </a>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">{t("cp.callUs.note")}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-0.5">{t("cp.email.label")}</p>
                    <a href="mailto:Jmsplumbingservicesllc@gmail.com" className="text-sm font-semibold text-foreground hover:text-primary transition-colors font-body block break-all">
                      Jmsplumbingservicesllc@gmail.com
                    </a>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">{t("cp.email.note")}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-0.5">{t("cp.based.label")}</p>
                    <p className="text-sm font-semibold text-foreground font-body">Sunrise, FL 33322</p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">{t("cp.based.note")}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-0.5">{t("cp.hours.label")}</p>
                    <div className="text-sm font-semibold text-foreground font-body space-y-0.5">
                      <p>{t("cp.hours.mf")}</p>
                      <p>{t("cp.hours.sat")}</p>
                      <p>{t("cp.hours.sun")}</p>
                    </div>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">{t("cp.hours.note")}</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border my-8" />

              {/* Trust block */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[t("cp.trust1"), t("cp.trust2"), t("cp.trust3")].map((item) => (
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
                    {t("cp.urgent.h3")}
                  </h3>
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 ml-8">
                  {t("cp.urgent.body")}
                </p>
                <a
                  href="tel:9549106883"
                  className="ml-8 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-bold text-sm hover:bg-primary/90 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {t("cp.urgent.cta")}
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
                {t("cp.form.title")}
              </h3>
              <p className="text-cream/60 font-body text-sm mb-6">
                {t("cp.form.sub")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">{t("cp.form.fullName")} *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                    placeholder={t("emCta.fullNamePh")}
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">{t("cp.form.phone")} *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      maxLength={20}
                      className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                      placeholder={t("cp.phonePh")}
                    />
                  </div>
                  <div>
                    <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">{t("cp.form.email")} *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      maxLength={255}
                      className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                      placeholder={t("contact.emailPh")}
                    />
                  </div>
                </div>

                {/* City/Zip + Service */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">{t("cp.form.cityZip")} *</label>
                    <input
                      type="text"
                      value={form.cityZip}
                      onChange={(e) => setForm({ ...form, cityZip: e.target.value })}
                      maxLength={100}
                      className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                      placeholder={t("cp.cityZipPh")}
                    />
                  </div>
                  <div>
                    <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">{t("cp.form.serviceNeeded")} *</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="" className="bg-secondary text-cream">{t("contact.selectService")}</option>
                      <option value="drain" className="bg-secondary text-cream">{t("svc.drain")}</option>
                      <option value="repairs" className="bg-secondary text-cream">{t("contact.svc.repairsAndReplacements")}</option>
                      <option value="gas" className="bg-secondary text-cream">{t("svc.gas")}</option>
                      <option value="water-heater" className="bg-secondary text-cream">{t("svc.waterHeaters")}</option>
                      <option value="backflow-prevention" className="bg-secondary text-cream">{t("svc.backflow")}</option>
                      <option value="septic-leach-fields" className="bg-secondary text-cream">{t("svc.septic")}</option>
                      <option value="fixture-repairs" className="bg-secondary text-cream">{t("svc.fixture")}</option>
                      <option value="remodel" className="bg-secondary text-cream">{t("svc.remodels")}</option>
                      <option value="emergency" className="bg-secondary text-cream">{t("svc.emergency")}</option>
                      <option value="other" className="bg-secondary text-cream">{t("cp.form.hearAbout.other")}</option>
                    </select>
                  </div>
                </div>

                {/* How did you hear */}
                <div>
                  <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">{t("cp.form.hearAbout")}</label>
                  <select
                    value={form.hearAbout}
                    onChange={(e) => setForm({ ...form, hearAbout: e.target.value })}
                    className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="" className="bg-secondary text-cream">{t("cp.form.hearAbout.select")}</option>
                    <option value="google-search" className="bg-secondary text-cream">{t("cp.form.hearAbout.search")}</option>
                    <option value="google-maps" className="bg-secondary text-cream">{t("cp.form.hearAbout.maps")}</option>
                    <option value="referral" className="bg-secondary text-cream">{t("cp.form.hearAbout.referral")}</option>
                    <option value="social-media" className="bg-secondary text-cream">{t("cp.form.hearAbout.social")}</option>
                    <option value="truck" className="bg-secondary text-cream">{t("cp.form.hearAbout.truck")}</option>
                    <option value="other" className="bg-secondary text-cream">{t("cp.form.hearAbout.other")}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">{t("cp.form.message")}</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={3}
                    className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder={t("cp.form.messagePh")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-bold text-base hover:bg-primary/90 transition-all w-full disabled:opacity-60"
                >
                  {sending ? t("contact.sending") : t("contact.send")}
                  {!sending && <Send className="w-4 h-4" />}
                </button>

                <p className="text-cream/40 text-xs font-body text-center leading-relaxed">
                  {t("cp.form.note")}
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
                {t("cp.area.h2.part1")}{" "}
                <span className="text-primary italic">{t("cp.area.h2.italic")}</span>
              </h2>
              <VintageOrnament className="max-w-xs mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                {t("cp.area.p1")}
              </p>

              <p className="text-foreground font-body text-base lg:text-lg font-semibold mb-6">
                {t("cp.area.cities")}
              </p>

              <p className="text-muted-foreground font-body text-sm">
                {t("cp.area.dontSee")}{" "}
                <a href="tel:9549106883" className="text-primary font-semibold hover:underline">
                  (954) 910-6883
                </a>{" "}
                {t("cp.area.dontSeeEnd")}
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
                    alt="JMS Plumbing Services location pin marking Sunrise, FL on the South Florida service area map"
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
      <ThankYouModal open={showThankYou} onOpenChange={setShowThankYou} />
    </div>
  );
};

export default ContactPage;
