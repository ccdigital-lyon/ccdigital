"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const slides = [
  {
    badge: "CCDIGITAL",
    title: "L'Anticipation est la seule Défense qui augmente votre confiance",
    subtitle: "Défense proactive pour un avenir numérique plus sûr.",
    cta: "Démarrer une consultation",
    href: "/contact",
    features: [
      { icon: "🔍", title: "Diagnostic", desc: "Analyse de l'existant pour identifier les vulnérabilités." },
      { icon: "🔒", title: "Recommandation", desc: "Combler le gap pour renforcer votre stratégie de défense." },
      { icon: "⚡", title: "Orchestration", desc: "Accompagnement pour le pilotage et la mise en œuvre." },
    ],
  },
  {
    badge: "CCDIGITAL",
    title: "Cybersécurité IT & OT pour PME Industrielle",
    subtitle: "Stratégie, orchestration et conformité NIS2 pilotées par un expert unique.",
    cta: "Démarrer une consultation",
    href: "/contact",
    secondary: { label: "En savoir plus", href: "/solutions" },
    features: [
      { icon: "🧠", title: "Comprendre", desc: "Vos obligations NIS2 et vos vrais risques cyber" },
      { icon: "📊", title: "Prioriser", desc: "Sans surinvestir, sans recruter RSSI interne" },
      { icon: "🎯", title: "Piloter", desc: "La cybersécurité comme sujet de direction" },
    ],
  },
];

const AUTOPLAY_MS = 7000;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const goTo = useCallback((i: number) => setCurrent(i), []);
  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden gradient-hero">
      {/* Animated background */}
      <div className="absolute inset-0">
        <img src={`/assets/hero-cyber-${current + 1}.png`} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-transparent to-transparent" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in" key={current}>
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent border border-accent/30 rounded-full bg-accent/10">
            {slide.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-content">
            {slide.title}
          </h1>
          <p className="text-lg text-content-secondary mb-8 max-w-xl">
            {slide.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={slide.href}
              className="px-8 py-3 font-semibold rounded-lg bg-gradient-to-r from-accent to-accent-dark text-[#0A1628] hover:shadow-lg hover:shadow-accent/25 transition-all"
            >
              {slide.cta}
            </Link>
            {slide.secondary && (
              <Link
                href={slide.secondary.href}
                className="px-8 py-3 font-semibold rounded-lg border border-accent/40 text-accent hover:bg-accent/10 transition-all"
              >
                {slide.secondary.label}
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {slide.features.map((f) => (
            <div
              key={f.title}
              className={`card-hover p-5 rounded-xl border backdrop-blur ${
                isLight
                  ? "bg-white/90 border-gray-200 shadow-sm"
                  : "bg-surface-card border-edge"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-content">{f.title}</h3>
                  <p className="text-sm text-content-secondary">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider nav */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-accent w-8" : "bg-content-muted/30 hover:bg-content-muted/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}