import { Phone, Mail, MapPin } from "lucide-react";
import jmsLogoFooter from "@/assets/jms-logo-footer.png";

const services = [
  { name: "Drain Cleaning", href: "/drain-cleaning" },
  { name: "Gas Line Services", href: "/gas-line-services" },
  { name: "Plumbing Repairs", href: "/plumbing-repairs" },
  { name: "Plumbing Remodels", href: "/plumbing-remodels" },
  { name: "Garbage Disposal", href: "/garbage-disposal" },
  { name: "Water Heaters", href: "/water-heaters" },
  { name: "Septic Leach Fields", href: "/septic-leach-fields" },
  { name: "Fixture Repairs", href: "/toilet-faucet-pipe-repairs" },
  { name: "Emergency Plumbing", href: "/emergency-plumbing" },
];

const Footer = () => {
  return (
    <footer className="bg-dark-deep pt-16 pb-6 bg-secondary vintage-grain relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1fr] gap-10 lg:gap-24 mb-12">
          {/* Brand */}
          <div>
            <img src={jmsLogoFooter} alt="JMS Plumbing Logo" className="h-20 w-auto mb-3" />
            <div className="mb-4">
              <span className="font-display text-xl font-bold text-cream">JMS Plumbing Services LLC</span>
            </div>
            <p className="text-cream/50 text-sm font-body leading-relaxed mb-6">
              Licensed & insured plumbing services based in Sunrise, FL. 
              Serving Broward, Miami-Dade, and Palm Beach Counties with 
              honest work and upfront pricing.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:9549106883" className="flex items-center gap-2 text-cream/70 text-sm font-body hover:text-cream transition-colors">
                <Phone className="w-4 h-4" /> (954) 910-6883
              </a>
              <a href="mailto:Jmsplumbingservicesllc@gmail.com" className="flex items-center gap-2 text-cream/70 text-sm font-body hover:text-cream transition-colors">
                <Mail className="w-4 h-4" /> jmsplumbingservicesllc@gmail.com
              </a>
              <span className="flex items-center gap-2 text-cream/70 text-sm font-body">
                <MapPin className="w-4 h-4" /> Sunrise, FL 33322
              </span>
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.facebook.com/profile.php?id=61577689533939" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-cream transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/jmsplumbingservices24/" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-cream transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-display font-bold text-cream text-base mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className="text-cream/50 text-sm font-body hover:text-cream transition-colors whitespace-nowrap">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-cream text-base mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/#services" },
                { label: "Contact", href: "/contact" },
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
          <p className="text-cream/30 text-xs font-body">
            Website Built By{" "}
            <a href="https://www.wisdomstudios.co" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-cream transition-colors">
              Wisdom Studios
            </a>
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
