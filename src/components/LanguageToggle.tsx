import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface LanguageToggleProps {
  variant?: "navbar" | "mobile";
}

const LanguageToggle = ({ variant = "navbar" }: LanguageToggleProps) => {
  const { lang, toggleLang } = useLanguage();
  const next = lang === "en" ? "ES" : "EN";
  const label = lang === "en" ? "Switch to Spanish" : "Cambiar a Inglés";

  if (variant === "mobile") {
    return (
      <button
        onClick={toggleLang}
        aria-label={label}
        className="flex items-center justify-center gap-2 border border-cream/20 text-cream/80 hover:text-cream hover:border-cream/40 px-5 py-3 rounded font-body font-semibold text-sm tracking-wide uppercase transition-colors"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span>{lang === "en" ? "EN" : "ES"}</span>
        <span className="text-cream/40">|</span>
        <span className="text-cream/60">{next}</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLang}
      aria-label={label}
      title={label}
      className="flex items-center gap-1.5 text-xs font-body font-semibold tracking-[0.18em] uppercase text-cream/70 hover:text-cream transition-colors border border-cream/20 hover:border-primary/50 rounded-full px-3 py-1.5"
    >
      <Globe className="w-3.5 h-3.5 text-primary" />
      <span className={lang === "en" ? "text-cream" : "text-cream/40"}>EN</span>
      <span className="text-cream/30">/</span>
      <span className={lang === "es" ? "text-cream" : "text-cream/40"}>ES</span>
    </button>
  );
};

export default LanguageToggle;
