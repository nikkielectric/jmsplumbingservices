import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { translations, Language, TranslationKey } from "./translations";

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "jms-language";

const getInitialLang = (): Language => {
  if (typeof window === "undefined") return "en";
  // ?lang=es / ?lang=en query param wins (lets search engines & shared links pick a language)
  const params = new URLSearchParams(window.location.search);
  const qp = params.get("lang");
  if (qp === "en" || qp === "es") return qp;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "es") return stored;
  const nav = navigator.language?.toLowerCase() || "";
  if (nav.startsWith("es")) return "es";
  return "en";
};

const updateHreflangTags = (lang: Language) => {
  if (typeof document === "undefined") return;
  const origin = "https://jmsplumbingservices.com";
  const path = window.location.pathname;
  const enUrl = `${origin}${path}`;
  const esUrl = `${origin}${path}?lang=es`;

  const ensureLink = (id: string, hreflang: string, href: string) => {
    let link = document.getElementById(id) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "alternate";
      document.head.appendChild(link);
    }
    link.hreflang = hreflang;
    link.href = href;
  };

  ensureLink("hreflang-en", "en", enUrl);
  ensureLink("hreflang-es", "es", esUrl);
  ensureLink("hreflang-x-default", "x-default", enUrl);

  // og:locale
  const ensureMeta = (property: string, content: string) => {
    let m = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("property", property);
      document.head.appendChild(m);
    }
    m.content = content;
  };
  ensureMeta("og:locale", lang === "es" ? "es_US" : "en_US");
  ensureMeta("og:locale:alternate", lang === "es" ? "en_US" : "es_US");
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    updateHreflangTags(lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => ({
    lang,
    setLang: setLangState,
    toggleLang: () => setLangState((l) => (l === "en" ? "es" : "en")),
    t: (key: TranslationKey) => {
      const dict = translations[lang] as Record<string, string>;
      return dict[key] ?? (translations.en as Record<string, string>)[key] ?? key;
    },
  }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export const useT = () => useLanguage().t;
