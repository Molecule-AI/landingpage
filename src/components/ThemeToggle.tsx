import * as React from "react";
import { useEffect, useState, type ReactNode } from "react";
import {
  applyTheme,
  getThemePreference,
  setThemePreference,
  THEME_CHANGE_EVENT,
  watchSystemTheme,
  type Theme,
} from "../scripts/theme";

/**
 * 3-way picker: System / Light / Dark.
 *
 * Hydrates with ``client:idle`` so it doesn't block LCP. Reads the
 * cookie on mount; if the boot script in Layout.astro already
 * stamped ``data-theme`` correctly, this is a no-op cosmetic
 * sync — no flash, no shift.
 *
 * Also re-syncs whenever ``THEME_CHANGE_EVENT`` fires, so the
 * radiogroup stays correct when the Shift+T keyboard shortcut (or
 * any other surface) writes the cookie out-of-band.
 */
export default function ThemeToggle() {
  const [pref, setPref] = useState<Theme>("system");

  useEffect(() => {
    setPref(getThemePreference());
    const stopSystemWatch = watchSystemTheme(() => {
      // Re-resolve when system flips; only matters when pref === "system"
      // but watchSystemTheme already gates on that internally.
      applyTheme(getThemePreference());
    });
    // Re-sync local state when another surface (Shift+T shortcut, etc.)
    // writes the cookie outside this component's click handler.
    const onExternalChange = () => setPref(getThemePreference());
    window.addEventListener(THEME_CHANGE_EVENT, onExternalChange);
    return () => {
      stopSystemWatch();
      window.removeEventListener(THEME_CHANGE_EVENT, onExternalChange);
    };
  }, []);

  function pick(next: Theme) {
    setPref(next);
    setThemePreference(next);
  }

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      aria-keyshortcuts="Shift+T"
      title="Theme (Shift+T to cycle)"
      className="inline-flex items-center gap-0.5 rounded-md border border-[color:var(--color-ink-border-strong)] bg-[color:var(--color-ink-soft)]/60 p-0.5"
    >
      <ThemeButton current={pref} value="system" label="System" onPick={pick}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </ThemeButton>
      <ThemeButton current={pref} value="light" label="Light" onPick={pick}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </ThemeButton>
      <ThemeButton current={pref} value="dark" label="Dark" onPick={pick}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </ThemeButton>
    </div>
  );
}

function ThemeButton({
  current,
  value,
  label,
  onPick,
  children,
}: {
  current: Theme;
  value: Theme;
  label: string;
  onPick: (v: Theme) => void;
  children: ReactNode;
}) {
  const active = current === value;
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      aria-label={label}
      onClick={() => onPick(value)}
      className={`group inline-flex h-7 w-7 items-center justify-center rounded transition-colors ${
        active
          ? "bg-[color:var(--color-mint)]/15 text-[color:var(--color-mint)]"
          : "text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)]"
      }`}
    >
      {/* Wrap children in a span that rotates+scales on hover so the
          theme icons feel responsive (sun wedges spin, monitor tilts,
          moon scales). 0.35s rotation is GPU-accelerated, no JS. */}
      <span className="inline-flex transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:rotate-[18deg] group-hover:scale-110">
        {children}
      </span>
    </button>
  );
}
