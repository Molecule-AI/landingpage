import { en } from "./en";
import { zh } from "./zh";
import type { ContentShape, Locale } from "./types";

export type { ContentShape, Locale };

export const content: Record<Locale, ContentShape> = { en, zh };

export const locales: Locale[] = ["en", "zh"];
export const defaultLocale: Locale = "en";

export const localePaths: Record<Locale, string> = {
  en: "/",
  zh: "/zh/",
};

export function alternateLocale(current: Locale): Locale {
  return current === "en" ? "zh" : "en";
}
