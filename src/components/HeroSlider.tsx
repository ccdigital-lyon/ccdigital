"use client";

import { useState } from "react";
import Link from "next/link";

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
      { icon: "⚡", title: "Orchestration", desc: "Accompagnement pour le pilotage et la mise en œuvre*." },
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

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1A2744] to-[#0D1F3C]">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00E68A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-[#00D4FF] border border-[#00D4FF]/30 rounded-full bg-[#00D4FF]/10">
            {slide.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {slide.title}
          </h1>
          <p className="text-lg text-[#B0B8C8] mb-8 max-w-xl">
            {slide.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={slide.href}
              className="px-8 py-3 font-semibold rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A1628] hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all"
            >
              {slide.cta}
            </Link>
            {slide.secondary && (
              <Link
                href={slide.secondary.href}
                className="px-8 py-3 font-semibold rounded-lg border border-[#00D4FF]/40 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all"
              >
                {slide.secondary.label}
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {slide.features.map((f, i) => (
            <div
              key={i}
              className="card-hover p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="text-sm text-[#B0B8C8]">{f.desc}</p>
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
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-[#00D4FF] w-8" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}