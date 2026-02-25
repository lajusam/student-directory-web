import { useState, useEffect } from "react";

/**
 * ThemeToggle — Light / Dark mode switcher.
 *
 * Persists preference in localStorage and applies
 * `data-theme="dark"` on the <html> element.
 * Falls back to the user's OS preference on first visit.
 */
function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {dark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}

export default ThemeToggle;
