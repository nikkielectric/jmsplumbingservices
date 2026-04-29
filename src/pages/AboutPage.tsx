import { useEffect } from "react";
import { Phone, ArrowRight, Clock, DollarSign, Shield, PhoneCall, MessageSquare, Wrench, Sparkles, MapPin, CheckCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VintageOrnament from "@/components/VintageOrnament";
import CertificationsTicker from "@/components/CertificationsTicker";
import heroImg from "@/assets/jms-van-hero.webp";
import teamVanImg from "@/assets/team-van.jpg";
import plumberSinkImg from "@/assets/plumber-copper-pipes.jpg";
import { useT } from "@/i18n/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const AboutPage = () => {
  const t = useT();
  const whyCards = [
    { icon: PhoneCall, title: t("ap.why.c1.title"), desc: t("ap.why.c1.desc") },
    { icon: Clock, title: t("ap.why.c2.title"), desc: t("ap.why.c2.desc") },
    { icon: DollarSign, title: t("ap.why.c3.title"), desc: t("ap.why.c3.desc") },
    { icon: Shield, title: t("ap.why.c4.title"), desc: t("ap.why.c4.desc") },
  ];
  const expectItems = [
    { icon: Clock, label: t("ap.expect.i1.label"), desc: t("ap.expect.i1.desc") },
    { icon: MessageSquare, label: t("ap.expect.i2.label"), desc: t("ap.expect.i2.desc") },
    { icon: DollarSign, label: t("ap.expect.i3.label"), desc: t("ap.expect.i3.desc") },
    { icon: Wrench, label: t("ap.expect.i4.label"), desc: t("ap.expect.i4.desc") },
    { icon: Sparkles, label: t("ap.expect.i5.label"), desc: t("ap.expect.i5.desc") },
    { icon: Phone, label: t("ap.expect.i6.label"), desc: t("ap.expect.i6.desc") },
  ];
  useEffect(() => {
    document.title = "About JMS Plumbing Services | Family-Owned Plumber in Sunrise, FL";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Meet the family behind JMS Plumbing Services. Licensed, insured, and based in Sunrise, FL — serving Broward, Miami-Dade, and Palm Beach Counties with honest work and upfront pricing.");

    // AboutPage JSON-LD
    const jsonLdId = "about-jsonld";
    let script = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = jsonLdId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About JMS Plumbing Services",
      "description": "Meet the family behind JMS Plumbing Services. Licensed, insured, and based in Sunrise, FL.",
      "url": "https://jmsplumbingservices.com/about",
      "mainEntity": {
        "@type": "Plumber",
        "@id": "https://jmsplumbingservices.com/#business",
        "name": "JMS Plumbing Services LLC",
        "url": "https://jmsplumbingservices.com",
        "telephone": "+1-954-910-6883",
        "address": {
          "@type": "PostalAddress",
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
        "areaServed": [
          { "@type": "County", "name": "Broward County", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "County", "name": "Miami-Dade County", "containedInPlace": { "@type": "State", "name": "Florida" } },
          { "@type": "County", "name": "Palm Beach County", "containedInPlace": { "@type": "State", "name": "Florida" } }
        ]
      }
    });

    return () => {
      document.getElementById(jsonLdId)?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ═══ SECTION 1 — PAGE HERO ═══ */}
      <section className="relative pt-24 lg:pt-44 bg-secondary vintage-grain vintage-vignette">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
                {t("ap.eyebrow")}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-cream leading-[1.1] mt-3 mb-6">
                {t("ap.h1.part1")}{" "}
                <span className="text-steel italic">{t("ap.h1.italic")}</span>
              </h1>
              <VintageOrnament className="max-w-xs mb-6 [&_div]:bg-gradient-to-r [&_div]:from-transparent [&_div]:via-cream/30 [&_div]:to-transparent [&_svg]:text-cream/40" />
              <p className="text-cream/70 font-body text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
                {t("ap.heroIntro")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:9549106883"
                  className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 text-cream px-7 py-3.5 rounded font-bold text-sm hover:bg-cream/10 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  (954) 910-6883
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-cream text-dark px-7 py-3.5 rounded font-bold text-sm hover:bg-cream/90 transition-all"
                >
                  {t("hero.getFreeQuote")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded overflow-hidden shadow-2xl vintage-border vintage-sepia">
                <img
                  src={heroImg}
                  alt="JMS Plumbing Services van on a job in Sunrise, FL — family-owned plumber serving Broward, Miami-Dade, and Palm Beach Counties"
                  className="w-full h-[350px] lg:h-[450px] object-cover object-[center_25%]"
                  width={1920}
                  height={1080}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS TICKER ═══ */}
      <CertificationsTicker />

      {/* ═══ SECTION 2 — {t("ap.story.eyebrow")} ═══ */}
      <section className="bg-cream-light py-20 lg:py-28 vintage-grain relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
                {t("ap.story.eyebrow")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
                {t("ap.story.h2.part1")}{" "}
                <span className="text-primary italic">{t("ap.story.h2.italic")}</span>
              </h2>
              <VintageOrnament className="max-w-xs mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                {t("ap.story.p1")}
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                {t("ap.story.p2")}
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                {t("ap.story.p3")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded overflow-hidden shadow-2xl vintage-border vintage-sepia">
                <img
                  src={teamVanImg}
                  alt="JMS Plumbing team standing beside their service van on a residential job site in South Florida"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="absolute -bottom-6 -left-4 lg:-left-8 stamp-badge bg-primary shadow-lg">
                <div className="text-center">
                  <span className="text-cream font-display font-black text-2xl block">{t("about.familyBadge")}</span>
                  <span className="text-cream/80 text-[10px] font-body uppercase tracking-widest">{t("about.familyBadge.sub")}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — WHY CHOOSE JMS ═══ */}
      <section className="bg-cream py-20 lg:py-28 vintage-grain relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
              {t("ap.why.eyebrow")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-4">
              {t("ap.why.h2.part1")}{" "}
              <span className="text-primary italic">{t("ap.why.h2.italic")}</span>
            </h2>
            <VintageOrnament className="max-w-xs mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded p-6 lg:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — PERSONAL GUARANTEE ═══ */}
      <section className="bg-cream-light py-20 lg:py-28 vintage-grain relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
                {t("ap.commit.eyebrow")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
                {t("ap.commit.h2.part1")}{" "}
                <span className="text-primary italic">{t("ap.commit.h2.italic")}</span>
              </h2>
              <VintageOrnament className="max-w-xs mb-6" />

              <blockquote className="border-l-4 border-primary pl-6 mb-8">
                <p className="text-foreground font-body text-base lg:text-lg leading-relaxed italic">
                  {t("ap.commit.quote")}
                </p>
              </blockquote>
              <p className="text-muted-foreground font-body text-sm mb-8">
                {t("ap.commit.signature")}
              </p>

              <div className="flex flex-wrap gap-4">
                {[t("ap.commit.b1"), t("ap.commit.b2"), t("ap.commit.b3")].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded px-4 py-2"
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-body text-sm font-semibold">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded overflow-hidden shadow-2xl vintage-border vintage-sepia">
                <img
                  src={plumberSinkImg}
                  alt="JMS Plumbing technician repairing a kitchen sink in a Sunrise, FL home"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — WHAT TO EXPECT ═══ */}
      <section className="bg-secondary py-20 lg:py-28 vintage-grain vintage-vignette relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
              {t("ap.expect.eyebrow")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-cream mt-3 mb-4">
              {t("ap.expect.h2.part1")}{" "}
              <span className="text-steel italic">{t("ap.expect.h2.italic")}</span>
            </h2>
            <VintageOrnament className="max-w-xs mx-auto [&_div]:bg-gradient-to-r [&_div]:from-transparent [&_div]:via-cream/30 [&_div]:to-transparent [&_svg]:text-cream/40" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {expectItems.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-3 bg-cream/5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-cream text-sm mb-1">{item.label}</h3>
                <p className="text-cream/50 text-xs font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — SERVICE AREA CALLOUT ═══ */}
      <section className="bg-cream-light py-20 lg:py-28 vintage-grain relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
              {t("ap.areas.eyebrow")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
              {t("ap.areas.h2.part1")}{" "}
              <span className="text-primary italic">{t("ap.areas.h2.italic")}</span>
            </h2>
            <VintageOrnament className="max-w-xs mx-auto mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-10 max-w-2xl mx-auto">
              {t("ap.areas.intro")}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {["Broward County", "Miami-Dade County", "Palm Beach County", "Sunrise", "Fort Lauderdale", "Plantation", "Tamarac", "Lauderhill", "Coral Springs", "Weston", "Davie", "Parkland", "Southwest Ranches", "Hollywood", "Pembroke Pines", "Cooper City"].map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded px-5 py-3"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-display font-bold text-sm">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 7 — FINAL CTA ═══ */}
      <section className="bg-cream-light py-20 lg:py-28 vintage-grain relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - text & contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
                {t("ap.cta.eyebrow")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
                {t("ap.cta.h2.part1")}{" "}
                <span className="text-primary italic">{t("ap.cta.h2.italic")}</span>
              </h2>
              <VintageOrnament className="max-w-xs mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                {t("ap.cta.intro")}
              </p>

              <div className="space-y-4">
                {[
                  { icon: Phone, label: t("contact.callUs"), value: "(954) 910-6883", href: "tel:9549106883" },
                  { icon: Mail, label: t("contact.email"), value: "Jmsplumbingservicesllc@gmail.com", href: "mailto:Jmsplumbingservicesllc@gmail.com" },
                  { icon: MapPin, label: t("contact.location"), value: "Sunrise, FL 33322" },
                  { icon: Clock, label: t("contact.emergency"), value: t("contact.emergencyVal") },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-body">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors font-body">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground font-body">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Quote Form */}
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
                {t("contact.formTitle")}
              </h3>
              <p className="text-cream/60 font-body text-sm mb-6">
                {t("contact.formSub")}
              </p>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">{t("contact.name")} *</label>
                    <input
                      type="text"
                      className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                      placeholder={t("contact.namePh")}
                    />
                  </div>
                  <div>
                    <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">{t("contact.phone")} *</label>
                    <input
                      type="tel"
                      className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                      placeholder="(954) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">{t("contact.message")} *</label>
                  <textarea
                    rows={4}
                    className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder={t("contact.messagePh")}
                  />
                </div>

                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-bold text-base hover:bg-primary/90 transition-all w-full"
                >
                  {t("contact.send")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </form>

              <div className="mt-6 pt-4 border-t border-cream/10">
                <p className="text-cream/50 text-xs font-body text-center">
                  {t("contact.servingNote")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
