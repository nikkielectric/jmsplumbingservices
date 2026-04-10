import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, Volume2, VolumeX } from "lucide-react";

import slideHoseBib from "@/assets/gallery/slide-hose-bib.jpg";
import slideCopperRepipe from "@/assets/gallery/slide-copper-repipe.jpg";
import slideWaterHeater from "@/assets/gallery/slide-water-heater.jpg";
import slideToilet from "@/assets/gallery/slide-toilet.jpg";
import slideShowerPanel from "@/assets/gallery/slide-shower-panel.jpg";
import slideHoseBib2 from "@/assets/gallery/slide-hose-bib-2.jpg";
import slideSoldering from "@/assets/gallery/slide-soldering.jpg";
import slideShowerPan from "@/assets/gallery/slide-shower-pan.jpg";
import slideShowerFixture from "@/assets/gallery/slide-shower-fixture.jpg";

/* ── Slide data type ── */
export interface ShowcaseSlide {
  id: string;
  type: "image" | "video" | "youtube" | "instagram";
  src: string;
  poster?: string;
  category?: string;
  location?: string;
}

/* ── Slide content ── */
export const showcaseSlides: ShowcaseSlide[] = [
  { id: "1", type: "image", src: slideSoldering, category: "COPPER REPIPING", location: "South Florida" },
  { id: "2", type: "image", src: slideCopperRepipe, category: "COPPER REPIPING", location: "South Florida" },
  { id: "3", type: "image", src: slideWaterHeater, category: "WATER HEATER INSTALLATION", location: "South Florida" },
  { id: "4", type: "video", src: "/gallery/slide-video-1.mp4", category: "PLUMBING WORK", location: "South Florida" },
  { id: "5", type: "image", src: slideToilet, category: "TOILET INSTALLATION", location: "South Florida" },
  { id: "6", type: "image", src: slideShowerPanel, category: "FIXTURE INSTALLATION", location: "South Florida" },
  { id: "7", type: "image", src: slideShowerPan, category: "SHOWER PAN LINER", location: "South Florida" },
  { id: "8", type: "image", src: slideShowerFixture, category: "FIXTURE INSTALLATION", location: "South Florida" },
  { id: "9", type: "image", src: slideHoseBib, category: "HOSE BIB REPAIR", location: "South Florida" },
  { id: "10", type: "image", src: slideHoseBib2, category: "HOSE BIB REPAIR", location: "South Florida" },
];

const AUTO_ADVANCE_MS = 6000;

/* ── Empty state ── */
const EmptyState = () => (
  <div className="w-full h-screen flex items-center justify-center bg-secondary vintage-grain relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(184_72%_38%_/_0.08)_0%,_transparent_60%)]" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative z-10 text-center px-6 max-w-xl"
    >
      <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase font-body block mb-4">
        COMING SOON
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-cream leading-tight mb-6">
        Behind-the-scenes content coming&nbsp;soon.
      </h2>
      <p className="text-cream/60 font-body text-base leading-relaxed mb-8">
        In the meantime — give us a call.
      </p>
      <a
        href="tel:+19549106883"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg"
      >
        <Phone className="w-4 h-4" />
        (954) 910-6883
      </a>
    </motion.div>
  </div>
);

/* ── Video slide ── */
const VideoSlide = ({
  slide,
  isActive,
}: {
  slide: ShowcaseSlide;
  isActive: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setMuted(true);
    }
  }, [isActive]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    setMuted(next);
  };

  if (slide.type === "youtube") {
    return (
      <iframe
        src={`${slide.src}?autoplay=${isActive ? 1 : 0}&mute=1&loop=1&controls=0&modestbranding=1&rel=0`}
        className="absolute inset-0 w-full h-full object-cover"
        allow="autoplay; encrypted-media"
        loading="lazy"
        title={slide.category || "Video"}
      />
    );
  }

  if (slide.type === "instagram") {
    return (
      <iframe
        src={slide.src}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        title={slide.category || "Video"}
      />
    );
  }

  return (
    <>
      <video
        ref={videoRef}
        src={slide.src}
        poster={slide.poster}
        muted={muted}
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-30 bg-black/40 backdrop-blur-sm text-cream p-2.5 rounded-full hover:bg-black/60 transition-colors"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </>
  );
};

/* ── Main Showcase Component ── */
const ImmersiveShowcase = () => {
  const slides = showcaseSlides;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const count = slides.length;

  /* Auto-advance */
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!paused && count > 1) {
      timerRef.current = setInterval(() => {
        setCurrent((p) => (p + 1) % count);
      }, AUTO_ADVANCE_MS);
    }
  }, [paused, count]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const goTo = (i: number) => {
    setCurrent(i);
    resetTimer();
  };
  const prev = () => goTo((current - 1 + count) % count);
  const next = () => goTo((current + 1) % count);

  /* Touch swipe */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  /* Keyboard */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, count]);

  if (count === 0) return <EmptyState />;

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-secondary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        setPaused(true);
        onTouchStart(e);
      }}
      onTouchEnd={(e) => {
        setPaused(false);
        onTouchEnd(e);
      }}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, i) =>
            i === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {slide.type === "image" ? (
                  <img
                    src={slide.src}
                    alt={slide.category || "Project photo"}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <VideoSlide slide={slide} isActive={i === current} />
                )}

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />

                {/* Text overlay — bottom left */}
                {(slide.category || slide.location) && (
                  <div className="absolute bottom-20 sm:bottom-16 left-6 sm:left-12 z-20">
                    {slide.category && (
                      <span className="text-primary font-semibold text-[11px] sm:text-xs tracking-[0.25em] uppercase font-body block mb-1.5">
                        {slide.category}
                      </span>
                    )}
                    {slide.location && (
                      <span className="text-cream/50 font-body text-xs sm:text-sm">
                        {slide.location}
                      </span>
                    )}
                  </div>
                )}
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Arrow navigation */}
      {count > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 bg-black/30 backdrop-blur-sm text-cream p-2.5 sm:p-3 rounded-full hover:bg-black/50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 bg-black/30 backdrop-blur-sm text-cream p-2.5 sm:p-3 rounded-full hover:bg-black/50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {count > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary w-6"
                  : "bg-cream/30 hover:bg-cream/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide counter */}
      {count > 1 && (
        <div className="absolute top-6 right-6 sm:right-12 z-30 text-cream/40 font-body text-xs tracking-widest">
          {String(current + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </div>
      )}
    </section>
  );
};

export default ImmersiveShowcase;
