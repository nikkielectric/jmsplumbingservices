import { useLanguage } from "@/i18n/LanguageContext";

export interface ServiceSign {
  text: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface RelatedService {
  title: string;
  description: string;
  href: string;
}

export interface ServiceTestimonial {
  name: string;
  city: string;
  text: string;
  rating: number;
}

export interface ServicePageData {
  slug: string;
  serviceName: string;
  serviceCategory: string;
  pageTitle: string;
  metaDescription: string;
  heroH1: string;
  heroSubtext: string;
  defaultServiceValue: string;
  introHeading: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  signsHeading: string;
  signs: ServiceSign[];
  extraSection?: { heading: string; paragraphs: string[] };
  diyHeading: string;
  diyParagraphs: string[];
  expectHeading: string;
  steps: ServiceStep[];
  testimonials: ServiceTestimonial[];
  faqHeading: string;
  faqs: ServiceFAQ[];
  relatedServices: RelatedService[];
  ctaHeading: string;
  ctaSubtext: string;
}

import { servicePagesEn } from "./servicePages.en";
import { servicePagesEs } from "./servicePages.es";

// Backward-compatible default export — English (used for SEO/JSON-LD which stays in English).
export const servicePages: ServicePageData[] = servicePagesEn;

// Hook returning the active-language service pages array.
export const useLocalizedServicePages = (): ServicePageData[] => {
  const { lang } = useLanguage();
  return lang === "es" ? servicePagesEs : servicePagesEn;
};
