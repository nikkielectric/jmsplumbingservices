import backflow from "@/assets/certifications/backflow-certified.png";
import medicalGas from "@/assets/certifications/florida-medical-gas.png";
import osha from "@/assets/certifications/osha-certified.png";
import tracpipe from "@/assets/certifications/tracpipe-certified.png";

const certs = [
  { src: backflow, alt: "Backflow Certified" },
  { src: medicalGas, alt: "Florida Medical Gas Certification" },
  { src: osha, alt: "OSHA 30 Hour Certified" },
  { src: tracpipe, alt: "TracPipe Installation Certified" },
];

const CertificationsTicker = () => {
  // Duplicate the list so the marquee loops seamlessly (translateX -50%)
  const loop = [...certs, ...certs];

  return (
    <section
      aria-label="Certifications and credentials"
      className="bg-transparent border-t border-cream/10 py-4 lg:py-5 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 mb-3">
        <p className="text-center text-cream/60 font-semibold text-[10px] tracking-[0.25em] uppercase font-body">
          Licensed · Insured · Certified
        </p>
      </div>

      <div className="relative group">
        {/* Edge fade masks — match secondary (blue) bg */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 lg:w-24 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 lg:w-24 bg-gradient-to-l from-secondary to-transparent z-10" />

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
                className="h-12 lg:h-14 w-auto object-contain grayscale brightness-150 opacity-60 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsTicker;
