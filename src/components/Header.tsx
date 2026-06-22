"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

interface SolutionLink {
  title: string;
  href: string;
  icon: string;
  desc: string;
}

const solutions: SolutionLink[] = [
  {
    title: "RSSI Stratégique",
    href: "/solutions/rssi-strategique",
    icon: "/assets/icon-rssi.png",
    desc: "Direction cyber externalisée pour PME",
  },
  {
    title: "Protection IT Exposés",
    href: "/solutions/protection-it",
    icon: "/assets/icon-protection-it.png",
    desc: "EASM, WAF & surveillance continue",
  },
  {
    title: "Formation Dirigeant",
    href: "/solutions/formation-dirigeant",
    icon: "/assets/icon-formation.png",
    desc: "Gouvernance NIS2 & sensibilisation CODIR",
  },
  {
    title: "Sensibilisation Employés",
    href: "/solutions/sensibilisation",
    icon: "/assets/icon-sensibilisation.png",
    desc: "Plateforme de simulation & formation",
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  // Close dropdown on click outside (desktop only — mobile uses its own toggle)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen) return; // mobile menu handles its own state
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Stable hover: delay closing so user can move cursor to submenu
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setSolutionsOpen(true);
  };
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setSolutionsOpen(false), 250);
  };

  const navLinkClass = `transition-colors ${
    isLight
      ? "text-gray-600 hover:text-content"
      : "text-content-secondary hover:text-content"
  }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-header backdrop-blur-lg">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/assets/logo-big-blue.png"
            alt="CCDigital"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-content">CC</span>
            <span className="gradient-text">DIGITAL</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${navLinkClass} flex items-center gap-1 ${solutionsOpen ? "text-content" : ""}`}
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Solutions <span className={`text-xs transition-transform ${solutionsOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {solutionsOpen && (
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-xl shadow-2xl shadow-black/40 p-2 animate-fade-in ${
                isLight
                  ? "bg-white border border-gray-200 shadow-lg"
                  : "bg-surface-raised border border-edge"
              }`}>
                <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 ${
                  isLight ? "bg-white border-l border-t border-gray-200" : "bg-surface-raised border-l border-t border-edge"
                }`} />
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors group ${
                      isLight ? "hover:bg-gray-50" : "hover:bg-white/5"
                    }`}
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <img src={s.icon} alt="" className="w-8 h-8 mt-0.5" />
                    <div>
                      <span className={`font-medium block group-hover:text-accent transition-colors text-content`}>
                        {s.title}
                      </span>
                      <span className={`block text-xs mt-0.5 text-content-muted`}>
                        {s.desc}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/blog" className={navLinkClass}>Ressources</Link>
          <Link href="/about" className={navLinkClass}>Qui sommes-nous ?</Link>
          <Link href="/contact" className={navLinkClass}>Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all ${
              isLight
                ? "border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-content"
                : "border border-edge text-content-secondary hover:bg-white/5 hover:text-content"
            }`}
            aria-label={isLight ? "Passer en mode sombre" : "Passer en mode clair"}
            title={isLight ? "Mode sombre" : "Mode clair"}
          >
            {isLight ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-accent to-accent-dark text-[#0A1628] hover:shadow-lg hover:shadow-accent/25 transition-all"
          >
            Consultation
          </Link>
          <Link
            href="/login"
            className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
              isLight
                ? "border border-gray-300 text-content hover:bg-gray-50"
                : "border border-white/20 text-content hover:bg-white/5"
            }`}
          >
            Se connecter
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all ${
              isLight
                ? "border border-gray-300 text-gray-600"
                : "border border-edge text-content"
            }`}
            aria-label={isLight ? "Mode sombre" : "Mode clair"}
          >
            {isLight ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <button
            className={`text-content p-2`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden border-t px-6 py-4 space-y-1 animate-fade-in ${
          isLight ? "bg-white border-gray-200" : "bg-surface border-edge"
        }`}>
          <button
            className={`flex items-center justify-between w-full py-2 ${navLinkClass}`}
            onClick={() => setSolutionsOpen(!solutionsOpen)}
          >
            Solutions
            <span className={`text-xs transition-transform ${solutionsOpen ? "rotate-180" : ""}`}>▾</span>
          </button>
          {solutionsOpen && (
            <div className={`pl-4 space-y-1 animate-fade-in`}>
              {solutions.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`flex items-center gap-2 py-2 ${navLinkClass}`}
                  onClick={() => { setMenuOpen(false); setSolutionsOpen(false); }}
                >
                  <img src={s.icon} alt="" className="w-6 h-6" />
                  {s.title}
                </Link>
              ))}
            </div>
          )}
          <Link href="/blog" className={`block py-2 ${navLinkClass}`} onClick={() => setMenuOpen(false)}>Ressources</Link>
          <Link href="/about" className={`block py-2 ${navLinkClass}`} onClick={() => setMenuOpen(false)}>Qui sommes-nous ?</Link>
          <Link href="/contact" className={`block py-2 ${navLinkClass}`} onClick={() => setMenuOpen(false)}>Contact</Link>
          <hr className={isLight ? "border-gray-200" : "border-edge"} />
          <Link
            href="/contact"
            className="block px-5 py-2 text-center font-semibold rounded-lg bg-gradient-to-r from-accent to-accent-dark text-[#0A1628]"
            onClick={() => setMenuOpen(false)}
          >
            Consultation
          </Link>
          <Link
            href="/login"
            className={`block px-5 py-2 text-center font-semibold rounded-lg ${
              isLight ? "border border-gray-300 text-content" : "border border-white/20 text-content"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Se connecter
          </Link>
        </div>
      )}
    </header>
  );
}