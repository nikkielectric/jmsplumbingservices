import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark text-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-steel font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-3">
            Ready to Get Started?
          </h2>
          <p className="text-steel/70 font-body mt-4 max-w-xl mx-auto">
            Call us today for a free estimate. Emergency service available
            after-hours, weekends & holidays.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Phone,
              label: "Call Us",
              value: "(954) 910-6883",
              href: "tel:9549106883",
            },
            {
              icon: Mail,
              label: "Email",
              value: "Jmsplumbingservicesllc@gmail.com",
              href: "mailto:Jmsplumbingservicesllc@gmail.com",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Sunrise, FL 33322",
            },
            {
              icon: Clock,
              label: "Emergency",
              value: "24/7 Available",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-steel" />
              </div>
              <p className="text-xs uppercase tracking-widest text-steel/60 font-body mb-1">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-semibold text-cream hover:text-steel transition-colors break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-semibold text-cream">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="tel:9549106883"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/30"
          >
            <Phone className="w-6 h-6" />
            Call (954) 910-6883
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
