"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial = stored || "dark";
    setTheme(initial);
    // Inline script in <head> already sets the class, but sync here for safety
    document.documentElement.classList.toggle("theme-light", initial === "light");
    document.documentElement.classList.toggle("theme-dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("theme-light", next === "light");
    document.documentElement.classList.toggle("theme-dark", next === "dark");
  };

  // No visibility:hidden wrapper — the inline script in <head> sets the
  // correct theme class before React hydrates, preventing flash of wrong theme.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}