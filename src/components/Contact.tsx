import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-cream-light py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - text & contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase font-body">
              Don't Delay
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mt-3 mb-6">
              Get Your Quote{" "}
              <span className="text-primary italic">Today!</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              For a trusted South Florida plumber, simply give us a call or send us a message.
              Our friendly team is always here to offer the help you need. Providing upfront
              quotes with no hidden fees!
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "Call Us", value: "(954) 910-6883", href: "tel:9549106883" },
                { icon: Mail, label: "Email", value: "Jmsplumbingservicesllc@gmail.com", href: "mailto:Jmsplumbingservicesllc@gmail.com" },
                { icon: MapPin, label: "Location", value: "Sunrise, FL 33322" },
                { icon: Clock, label: "Emergency", value: "Available 24/7" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
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

          {/* Right - CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8 lg:p-10 flex flex-col justify-center bg-secondary"
          >
            <h3 className="text-2xl lg:text-3xl font-display font-black text-cream mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-cream/70 font-body leading-relaxed mb-8">
              Whether it's a minor leak or a major plumbing project, JMS Plumbing Services
              is here to handle it all. Contact us today for a free estimate.
            </p>

            <div className="space-y-4">
              <a
                href="tel:9549106883"
                className="flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-base hover:bg-primary/90 transition-all w-full"
              >
                <Phone className="w-5 h-5" />
                Call (954) 910-6883
              </a>
              <a
                href="mailto:Jmsplumbingservicesllc@gmail.com"
                className="flex items-center justify-center gap-3 bg-cream text-dark px-8 py-4 rounded-xl font-bold text-base hover:bg-cream/90 transition-all w-full"
              >
                Send Us a Message
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-cream/10">
              <p className="text-cream/50 text-xs font-body text-center">
                Serving Sunrise, Plantation, Fort Lauderdale, Tamarac, Lauderhill,
                Coral Springs, Weston & surrounding areas
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
