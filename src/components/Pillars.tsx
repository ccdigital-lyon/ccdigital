"use client";

const pillars = [
  {
    icon: "📊",
    title: "Mesurer",
    desc: "Évaluer votre exposition réelle et votre niveau de maturité cyber à l'aide de diagnostics conformes aux référentiels NIS2, ISO 27001 et IEC 62443.",
    color: "from-[#00D4FF] to-[#0099CC]",
  },
  {
    icon: "🎯",
    title: "Décider",
    desc: "Prioriser les actions de protection en fonction de votre contexte métier, sans surinvestir ni sous-évaluer les risques IT/OT.",
    color: "from-[#00E68A] to-[#00B368]",
  },
  {
    icon: "🔬",
    title: "Simuler",
    desc: "Anticiper les scénarios d'attaque et tester la résilience de vos systèmes industriels avant que l'incident ne survienne.",
    color: "from-[#A78BFA] to-[#7C3AED]",
  },
  {
    icon: "🚀",
    title: "Agir",
    desc: "Mettre en œuvre les mesures techniques et organisationnelles adaptées : EASM, WAF, segmentation OT, gouvernance RSSI.",
    color: "from-[#FF6B35] to-[#E64A19]",
  },
  {
    icon: "✅",
    title: "Vérifier",
    desc: "Suivre les indicateurs, piloter la conformité dans la durée et démontrer la trajectoire d'amélioration continue au CODIR.",
    color: "from-[#00D4FF] to-[#00E68A]",
  },
];

export function Pillars() {
  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre méthodologie <span className="gradient-text">5 piliers</span>
          </h2>
          <p className="text-[#B0B8C8] max-w-2xl mx-auto">
            Une approche complète et progressive pour transformer la cybersécurité en avantage compétitif.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="card-hover relative group p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl shadow-lg`}>
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-[#B0B8C8] leading-relaxed">{p.desc}</p>
              {/* Connecting line */}
              {i < pillars.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}