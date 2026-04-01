const Footer = () => {
  return (
    <footer className="bg-dark border-t border-primary/20 py-8">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-display text-lg font-bold text-cream">JMS Plumbing</span>
          <span className="text-steel/50 text-xs ml-2 font-body">Services LLC</span>
        </div>
        <p className="text-steel/50 text-xs font-body">
          © {new Date().getFullYear()} JMS Plumbing Services LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
