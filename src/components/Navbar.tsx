import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import jmsLogo from "@/assets/jms-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest-deep/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <img src={jmsLogo} alt="JMS Plumbing Services LLC" className="h-14 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold text-cream tracking-tight">JMS Plumbing</span>
            <span className="text-[10px] font-body text-steel/70 tracking-[0.2em] uppercase">Services LLC</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/80 hover:text-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <span className="text-cream/60 text-xs font-body hidden xl:block">Emergency? Available 24/7</span>
          <a
            href="tel:9549106883"
            className="flex items-center gap-2 border border-cream/30 text-cream px-4 py-2 rounded-lg font-semibold text-sm hover:bg-cream/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (954) 910-6883
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-cream text-dark px-5 py-2 rounded-lg font-bold text-sm hover:bg-cream/90 transition-colors"
          >
            Get a Quote
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-cream">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-forest-deep border-t border-primary/20"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-cream/80 hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:9549106883"
                className="flex items-center justify-center gap-2 border border-cream/30 text-cream px-5 py-3 rounded-lg font-semibold text-sm"
              >
                <Phone className="w-4 h-4" />
                (954) 910-6883
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-cream text-dark px-5 py-3 rounded-lg font-bold text-sm"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
