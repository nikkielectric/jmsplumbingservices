import { useState } from "react";
import { Phone, Menu, X, MapPin, Clock, Star } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* ── Tier 1: Top accent strip — darkest ── */}
      <div className="hidden md:block bg-[hsl(200,30%,12%)] border-b border-cream/5">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center py-1.5 gap-2 text-xs font-body">
          <span className="text-cream font-semibold tracking-wide">
            Family Owned &amp; Operated
          </span>
          <span className="text-primary/50 mx-1">|</span>
          <span className="text-cream/60">
            Serving Broward, Miami-Dade &amp; Palm Beach Counties Since 2018
          </span>
        </div>
      </div>

      {/* ── Tier 2: Info bar — slightly lighter ── */}
      <div className="hidden lg:block bg-[hsl(200,30%,15%)] border-b border-cream/5">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-evenly py-1.5 text-xs font-body">
          <span className="text-cream/70 tracking-wide">Licensed &amp; Insured Plumbing Services</span>

          <div className="flex items-center gap-1.5 text-cream/60">
            <MapPin className="w-3 h-3 text-primary" />
            <span>Sunrise, FL 33322</span>
          </div>

          <span className="text-cream/60">24/7 Emergency Service</span>
        </div>
      </div>

      {/* ── Tier 3: Main bar (logo + phone + CTA) — brand dark ── */}
      <div className="bg-forest-deep backdrop-blur-md border-b border-cream/10">
        <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={jmsLogo}
              alt="JMS Plumbing Services LLC"
              className="h-14 w-auto"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl font-bold text-cream tracking-tight">
                JMS Plumbing
              </span>
              <span className="text-[10px] font-body text-steel/70 tracking-[0.25em] uppercase">
                Services LLC
              </span>
            </div>
          </a>

          {/* Desktop right side: phone + hours + CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Call Now */}
            <a
              href="tel:9549106883"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-cream/50 font-body tracking-widest uppercase">
                  Call Now
                </span>
                <span className="text-cream font-display font-bold text-lg tracking-tight">
                  (954) 910-6883
                </span>
              </div>
            </a>

            {/* Divider */}
            <div className="hidden xl:block w-px h-10 bg-cream/15" />

            {/* Hours */}
            <div className="hidden xl:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-cream/50 font-body tracking-widest uppercase">
                  Hours
                </span>
                <span className="text-cream font-display font-bold text-sm">
                  Available 24/7
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded font-display font-bold text-sm tracking-wide uppercase transition-colors shadow-lg shadow-primary/20"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-cream"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Tier 4: Navigation links bar ── */}
      <div className="hidden md:block bg-[hsl(200,28%,20%)] border-b border-cream/5 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
        <div className="container mx-auto px-4 lg:px-8 flex items-center gap-8 py-2.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-body font-semibold text-cream/70 hover:text-cream tracking-[0.2em] uppercase transition-colors relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-forest-deep border-t border-primary/20"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-body font-semibold text-cream/80 hover:text-cream tracking-[0.15em] uppercase transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-cream/10 my-1" />
              <a
                href="tel:9549106883"
                className="flex items-center justify-center gap-2 border border-primary/30 text-cream px-5 py-3 rounded font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                (954) 910-6883
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded font-bold text-sm uppercase tracking-wide"
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
