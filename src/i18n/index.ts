import { en } from "./en";
import { zh } from "./zh";
import type { ContentShape, Locale } from "./types";

export type { ContentShape, Locale };

// The legacy ContentShape (en.ts / zh.ts) powers the standalone marketing
// components (Hero, Footer, etc.) that are no longer mounted by any page —
// the live landing page is built from src/data/landing.ts via Landing.astro.
// New locales (fr, ja, es, ...) ship their content through src/data/landing.ts
// only; here they alias to `en` so Layout.astro's content[locale] lookup for
// htmlLang / siteMeta still type-checks and resolves at runtime.
const fr: ContentShape = { ...en, locale: "fr", htmlLang: "fr-FR" };
const ja: ContentShape = { ...en, locale: "ja", htmlLang: "ja" };

export const content: Record<Locale, ContentShape> = { en, zh, fr, ja };

export const locales: Locale[] = ["en", "zh", "fr", "ja"];
export const defaultLocale: Locale = "en";

export const localePaths: Record<Locale, string> = {
  en: "/",
  zh: "/zh/",
  fr: "/fr/",
  ja: "/ja/",
};

export function alternateLocale(current: Locale): Locale {
  return current === "en" ? "zh" : "en";
}
