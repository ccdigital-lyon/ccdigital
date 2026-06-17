"use client";

import { useState } from "react";
import Link from "next/link";

const solutions = [
  {
    title: "RSSI Stratégique",
    href: "/solutions/rssi-strategique",
    desc: "Direction cyber externalisée pour PME",
  },
  {
    title: "Protection IT Exposés",
    href: "/solutions/protection-it",
    desc: "EASM, WAF & surveillance continue",
  },
  {
    title: "Formation Dirigeant",
    href: "/solutions/formation-dirigeant",
    desc: "Gouvernance NIS2 & sensibilisation CODIR",
  },
  {
    title: "Sensibilisation Employés",
    href: "/solutions/sensibilisation",
    desc: "Plateforme de simulation & formation",
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/90 backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-white">CC</span>
            <span className="gradient-text">DIGITAL</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
            <button className="text-[#B0B8C8] hover:text-white transition-colors flex items-center gap-1">
              Solutions <span className="text-xs">▾</span>
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-[#1A2744] border border-white/10 rounded-xl shadow-2xl p-2">
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium text-white">{s.title}</span>
                    <span className="block text-xs text-[#6B7A90]">{s.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/blog" className="text-[#B0B8C8] hover:text-white transition-colors">
            Ressources
          </Link>
          <Link href="/about" className="text-[#B0B8C8] hover:text-white transition-colors">
            Qui sommes-nous ?
          </Link>
          <Link href="/contact" className="text-[#B0B8C8] hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A1628] hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all"
          >
            Consultation
          </Link>
          <Link
            href="/login"
            className="px-5 py-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all"
          >
            Se connecter
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2"
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
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-white/10 px-6 py-4 space-y-4">
          {solutions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block text-[#B0B8C8] hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {s.title}
            </Link>
          ))}
          <Link href="/blog" className="block text-[#B0B8C8] hover:text-white" onClick={() => setMenuOpen(false)}>Ressources</Link>
          <Link href="/about" className="block text-[#B0B8C8] hover:text-white" onClick={() => setMenuOpen(false)}>Qui sommes-nous ?</Link>
          <Link href="/contact" className="block text-[#B0B8C8] hover:text-white" onClick={() => setMenuOpen(false)}>Contact</Link>
          <hr className="border-white/10" />
          <Link
            href="/contact"
            className="block px-5 py-2 text-center font-semibold rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A1628]"
            onClick={() => setMenuOpen(false)}
          >
            Consultation
          </Link>
          <Link
            href="/login"
            className="block px-5 py-2 text-center font-semibold rounded-lg border border-white/20 text-white"
            onClick={() => setMenuOpen(false)}
          >
            Se connecter
          </Link>
        </div>
      )}
    </header>
  );
}