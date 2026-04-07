import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Drain Cleaning",
  "Garbage Disposal",
  "Gas Line Services",
  "Plumbing Repairs",
  "Plumbing Remodels",
  "Emergency Plumbing",
  "Water Heater Service",
  "Faucet Replacement",
];

const Footer = () => {
  return (
    <footer className="bg-dark-deep pt-16 pb-6 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display text-xl font-bold text-cream">JMS Plumbing</span>
              <span className="text-steel/50 text-xs ml-1 font-body">Services LLC</span>
            </div>
            <p className="text-cream/50 text-sm font-body leading-relaxed mb-6">
              Family-owned plumbing services in Sunrise, FL.
              Serving South Florida's Tri-County area with
              premier customer service and expert craftsmanship.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:9549106883" className="flex items-center gap-2 text-cream/70 text-sm font-body hover:text-cream transition-colors">
                <Phone className="w-4 h-4" /> (954) 910-6883
              </a>
              <a href="mailto:Jmsplumbingservicesllc@gmail.com" className="flex items-center gap-2 text-cream/70 text-sm font-body hover:text-cream transition-colors">
                <Mail className="w-4 h-4" /> Email Us
              </a>
              <span className="flex items-center gap-2 text-cream/70 text-sm font-body">
                <MapPin className="w-4 h-4" /> Sunrise, FL 33322
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-cream text-base mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-cream/50 text-sm font-body hover:text-cream transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-cream text-base mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Reviews", href: "#reviews" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-cream/50 text-sm font-body hover:text-cream transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="font-display font-bold text-cream text-base mb-5">Areas We Serve</h4>
            <ul className="space-y-2.5">
              {["Sunrise", "Plantation", "Fort Lauderdale", "Tamarac", "Lauderhill", "Coral Springs", "Weston", "Broward County"].map((a) => (
                <li key={a}>
                  <span className="text-cream/50 text-sm font-body">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs font-body">
            © {new Date().getFullYear()} JMS Plumbing Services LLC. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-cream/40 text-xs font-body">
            <Phone className="w-3 h-3" />
            <span>Have An Emergency?</span>
            <a href="tel:9549106883" className="text-cream/60 font-semibold hover:text-cream transition-colors">
              Call (954) 910-6883
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
