/**
 * Theme persistence + boot helpers for the molecule-ai landing page.
 *
 * Cookie domain ``.moleculesai.app`` so a user toggling theme on the
 * marketplace or app surfaces lands on a consistent landing page.
 * SameSite=Lax + Secure (when on https) and 1-year expiry mirror the
 * market/app convention.
 *
 * The boot script is inlined synchronously in ``<head>`` before the
 * first paint to prevent FOUC. It stamps the resolved theme on
 * ``<html>`` only — every theme-aware selector in the project
 * cascades from :root[data-theme], so body doesn't need the
 * attribute and we avoid a flash window between body parse and
 * DOMContentLoaded.
 */
export type Theme = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

export const THEME_COOKIE = "molecule_theme";
export const COOKIE_DOMAIN = ".moleculesai.app";

/**
 * Custom event fired on ``window`` whenever the persisted theme
 * preference changes. The ThemeToggle React component listens for
 * this so the radiogroup re-renders when the keyboard shortcut (or
 * any other surface) cycles the theme without a click.
 */
export const THEME_CHANGE_EVENT = "molecule:theme-change";

/** Cycle order matches the visual order of the ThemeToggle: dark → light → system → dark. */
const CYCLE_ORDER: Theme[] = ["dark", "light", "system"];

/** Return the next theme in the dark → light → system cycle. */
export function nextThemeInCycle(current: Theme): Theme {
  const idx = CYCLE_ORDER.indexOf(current);
  // -1 (unknown value) lands at index 0 → dark, mirroring the boot fallback.
  const nextIdx = (idx + 1) % CYCLE_ORDER.length;
  return CYCLE_ORDER[nextIdx] ?? "dark";
}

/**
 * Inline-able boot script. Reads the cookie, resolves system →
 * light/dark via ``matchMedia``, and stamps the resolved value on
 * ``<html>`` BEFORE first paint. On error, leaves the SSR-stamped
 * attribute in place rather than overwriting it — avoids a flash
 * when a malformed cookie is the cause and the SSR default was
 * already correct for the page.
 *
 * Kept as a single expression so it round-trips cleanly through
 * Astro's HTML compression. The function is invoked immediately so
 * ``defer`` semantics aren't needed.
 */
export const themeBootScript = `(function(){try{var m=document.cookie.match(/(?:^|; )molecule_theme=([^;]+)/);var pref=m?decodeURIComponent(m[1]):"system";var resolved=pref==="system"?(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"):pref;var de=document.documentElement;de.setAttribute("data-theme",resolved);de.style.colorScheme=resolved;}catch(e){}})();`;

/** Read the persisted preference (system | light | dark). */
export function getThemePreference(): Theme {
  if (typeof document === "undefined") return "system";
  const match = document.cookie.match(/(?:^|; )molecule_theme=([^;]+)/);
  if (!match) return "system";
  const value = decodeURIComponent(match[1] ?? "");
  if (value === "light" || value === "dark" || value === "system") return value;
  return "system";
}

/** Persist the preference + apply it to ``<html>``. */
export function setThemePreference(pref: Theme): void {
  if (typeof document === "undefined") return;
  const oneYear = 60 * 60 * 24 * 365;
  // Domain attribute only set in production — local dev uses the host
  // cookie so the value survives across vite dev-server reloads
  // without browsers rejecting the foreign domain.
  const isProd = window.location.hostname.endsWith("moleculesai.app");
  const domainAttr = isProd ? `; domain=${COOKIE_DOMAIN}` : "";
  const secureAttr = window.location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${THEME_COOKIE}=${encodeURIComponent(pref)}; path=/; max-age=${oneYear}; samesite=lax${domainAttr}${secureAttr}`;
  applyTheme(pref);
  // Fan-out: notify any mounted ThemeToggle (or other surface) so it can
  // re-sync its local state when the cookie was written by something
  // other than its own click handler — e.g. the Shift+T shortcut.
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: { pref } }));
  }
}

/** Resolve system → light/dark and stamp it on ``<html>``. */
export function applyTheme(pref: Theme): void {
  if (typeof document === "undefined") return;
  const resolved: ResolvedTheme =
    pref === "system"
      ? window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark"
      : pref;
  document.documentElement.setAttribute("data-theme", resolved);
  document.documentElement.style.colorScheme = resolved;
}

/** Subscribe to system-theme changes — only fires when pref === "system". */
export function watchSystemTheme(onChange: (resolved: ResolvedTheme) => void): () => void {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mq = window.matchMedia("(prefers-color-scheme: light)");
  const handler = (e: MediaQueryListEvent) => {
    if (getThemePreference() === "system") {
      onChange(e.matches ? "light" : "dark");
    }
  };
  mq.addEventListener("change", handler);
  return () => mq.removeEventListener("change", handler);
}
