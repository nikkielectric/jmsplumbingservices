import { useEffect } from "react";
import { Phone, ArrowRight, Clock, DollarSign, Shield, PhoneCall, MessageSquare, Wrench, Sparkles, MapPin, CheckCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VintageOrnament from "@/components/VintageOrnament";
import CertificationsTicker from "@/components/CertificationsTicker";
import heroImg from "@/assets/plumbing-team.webp";
import teamVanImg from "@/assets/plumbing-team-van2.webp";
import plumberSinkImg from "@/assets/plumber-fixing-sink.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const whyCards = [
  {
    icon: PhoneCall,
    title: "We Actually Answer",
    desc: "When you call JMS, a real person picks up. No voicemail. No callback queue. No \"press 1 for plumbing.\" Just a person ready to help.",
  },
  {
    icon: Clock,
    title: "We Show Up On Time",
    desc: "We give you a real arrival window and we honor it. Your time matters. We don't leave you waiting around all day wondering if someone's coming.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    desc: "You'll know the exact price before we start. No hidden fees, no surprise charges, no pressure to approve work on the spot. Clear pricing from the start.",
  },
  {
    icon: Shield,
    title: "Licensed, Insured & Accountable",
    desc: "We're fully licensed and insured in the state of Florida. Every job is done to code. And if something isn't right, we come back and make it right — period.",
  },
];

const expectItems = [
  { icon: Clock, label: "On-time arrival", desc: "within your scheduled window" },
  { icon: MessageSquare, label: "Clear communication", desc: "we explain everything before we start" },
  { icon: DollarSign, label: "Upfront pricing", desc: "no surprises, ever" },
  { icon: Wrench, label: "Clean, precise work", desc: "done right the first time" },
  { icon: Sparkles, label: "Full cleanup", desc: "we leave your home as clean as we found it" },
  { icon: Phone, label: "Follow-up", desc: "we check in after the job to make sure you're happy" },
];

const AboutPage = () => {
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
      <section className="relative pt-36 lg:pt-44 bg-secondary vintage-grain vintage-vignette pb-6 lg:pb-8">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
                WHO WE ARE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-cream leading-[1.1] mt-3 mb-6">
                A Plumbing Company Built on One Simple Idea:{" "}
                <span className="text-steel italic">Do Right By People.</span>
              </h1>
              <VintageOrnament className="max-w-xs mb-6 [&_div]:bg-gradient-to-r [&_div]:from-transparent [&_div]:via-cream/30 [&_div]:to-transparent [&_svg]:text-cream/40" />
              <p className="text-cream/70 font-body text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
                We're not a franchise. We're not a call center. We're a family-owned plumbing company
                based right here in Sunrise, FL — and we treat every home we walk into like it's our own.
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
                  Get a Free Quote
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
                  alt="JMS Plumbing professional at work"
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

      {/* ═══ SECTION 2 — OUR STORY ═══ */}
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
                OUR STORY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
                Built From the Ground Up{" "}
                <span className="text-primary italic">in South Florida</span>
              </h2>
              <VintageOrnament className="max-w-xs mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                JMS Plumbing Services was founded with a straightforward mission: give South Florida
                homeowners a plumber they can actually count on. One who answers the phone, shows up when
                they say they will, and charges a fair price without the games.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                As a new business, we don't have decades of history to lean on. What we do have is a
                genuine commitment to earning your trust — one job at a time. Every call we take, every
                pipe we fix, every home we leave cleaner than we found it — that's how we're building our
                reputation here in the Tri-County area.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                We're family-owned and operated. That means the owner is personally invested in every
                single job. There's no corporate layer to hide behind. When we do great work, that's on
                us. And when something needs to be made right, we make it right — no runaround.
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
                  alt="JMS Plumbing team on the job in South Florida"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="absolute -bottom-6 -left-4 lg:-left-8 stamp-badge bg-primary shadow-lg">
                <div className="text-center">
                  <span className="text-cream font-display font-black text-2xl block">Family</span>
                  <span className="text-cream/80 text-[10px] font-body uppercase tracking-widest">Owned & Operated</span>
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
              WHY JMS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-4">
              What Makes Us Different From Every Other{" "}
              <span className="text-primary italic">Plumber in South Florida</span>
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
                OUR COMMITMENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
                Our Name Is on{" "}
                <span className="text-primary italic">Every Job We Do</span>
              </h2>
              <VintageOrnament className="max-w-xs mb-6" />

              <blockquote className="border-l-4 border-primary pl-6 mb-8">
                <p className="text-foreground font-body text-base lg:text-lg leading-relaxed italic">
                  "When you hire JMS, you're not hiring a faceless company. You're hiring a family that
                  lives and works in this community. I personally stand behind every job we take on. If
                  you're not satisfied with the work, I want to know about it — and I'll make it right.
                  That's not a policy. That's a promise."
                </p>
              </blockquote>
              <p className="text-muted-foreground font-body text-sm mb-8">
                — JMS Plumbing Services, Owner
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  "Florida Licensed & Insured",
                  "Family Owned & Operated",
                  "Serving the Tri-County Area",
                ].map((badge) => (
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
                  alt="JMS Plumbing professional fixing a sink"
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
              EVERY SINGLE JOB
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-cream mt-3 mb-4">
              Here's What You Can Expect{" "}
              <span className="text-steel italic">Every Time We Walk Through Your Door</span>
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
              WHERE WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
              Proudly Serving South Florida's{" "}
              <span className="text-primary italic">Tri-County Area</span>
            </h2>
            <VintageOrnament className="max-w-xs mx-auto mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-10 max-w-2xl mx-auto">
              Based in Sunrise, FL, our team serves homeowners and businesses across Broward,
              Miami-Dade, and Palm Beach Counties. We know South Florida's homes, its aging
              infrastructure, and its climate — and we bring that local knowledge to every job.
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
                LET'S GET STARTED
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
                Ready to Work With a Plumber You Can{" "}
                <span className="text-primary italic">Actually Trust?</span>
              </h2>
              <VintageOrnament className="max-w-xs mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Call us today or request a free quote online. We'll get back to you fast — with a
                straight answer and a fair price.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Call Us", value: "(954) 910-6883", href: "tel:9549106883" },
                  { icon: Mail, label: "Email", value: "Jmsplumbingservicesllc@gmail.com", href: "mailto:Jmsplumbingservicesllc@gmail.com" },
                  { icon: MapPin, label: "Location", value: "Sunrise, FL 33322" },
                  { icon: Clock, label: "Emergency", value: "Available 24/7" },
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
                Request a Free Quote
              </h3>
              <p className="text-cream/60 font-body text-sm mb-6">
                We'll review your request and call you back — usually within minutes.
              </p>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Name *</label>
                    <input
                      type="text"
                      className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Phone *</label>
                    <input
                      type="tel"
                      className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors"
                      placeholder="(954) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-cream/70 text-xs font-body uppercase tracking-wider mb-1 block">Message *</label>
                  <textarea
                    rows={4}
                    className="w-full bg-cream/10 border border-cream/20 rounded px-4 py-3 text-cream text-sm font-body placeholder:text-cream/30 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Describe your plumbing issue or project..."
                  />
                </div>

                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-bold text-base hover:bg-primary/90 transition-all w-full"
                >
                  Send My Request
                  <ArrowRight className="w-4 h-4" />
                </a>
              </form>

              <div className="mt-6 pt-4 border-t border-cream/10">
                <p className="text-cream/50 text-xs font-body text-center">
                  Serving Sunrise, Plantation, Fort Lauderdale, Broward, Miami-Dade & Palm Beach Counties
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
