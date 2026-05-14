import backflow from "@/assets/certifications/backflow-certified.png";
import medicalGas from "@/assets/certifications/florida-medical-gas.png";
import osha from "@/assets/certifications/osha-certified.png";
import tracpipe from "@/assets/certifications/tracpipe-certified.png";
import { useT } from "@/i18n/LanguageContext";

const certs = [
  { src: backflow, alt: "Backflow Certified" },
  { src: medicalGas, alt: "Florida Medical Gas Certification" },
  { src: osha, alt: "OSHA 30 Hour Certified" },
  { src: tracpipe, alt: "TracPipe Installation Certified" },
];

const CertificationsTicker = () => {
  const t = useT();
  // Repeat enough times to overflow any viewport width — the marquee
  // translates by -50%, so the first half must always be wider than the screen
  // to avoid an empty gap before the loop restarts.
  const loop = [...certs, ...certs, ...certs, ...certs, ...certs, ...certs];

  return (
    <section
      aria-label="Certifications and credentials"
      className="bg-cream border-y border-border/40 py-4 lg:py-5 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 mb-3">
        <p className="text-center text-primary font-semibold text-[10px] tracking-[0.25em] uppercase font-body">
          {t("certs.label")}
        </p>
      </div>

      <div className="relative group">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 lg:w-24 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 lg:w-24 bg-gradient-to-l from-cream to-transparent z-10" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((cert, i) => (
            <div
              key={`${cert.alt}-${i}`}
              className="flex-shrink-0 px-6 lg:px-10 flex items-center justify-center"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                loading="lazy"
                width={56}
                height={56}
                className="h-12 lg:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsTicker;
