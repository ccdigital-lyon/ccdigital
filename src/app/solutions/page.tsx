import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Solutions",
  description: "Solutions de cybersécurité IT & OT pour PME industrielle : RSSI stratégique, protection IT, formation NIS2, sensibilisation.",
};

interface Solution {
  slug: string;
  title: string;
  icon: string;
  desc: string;
  features: string[];
}

const solutions: Solution[] = [
  {
    slug: "rssi-strategique",
    title: "RSSI Stratégique",
    icon: "🛡️",
    desc: "Direction cybersécurité externalisée pour PME qui n'ont pas les ressources pour un RSSI interne. Pilotage, gouvernance et conformité NIS2.",
    features: [
      "Pilotage de la politique de sécurité",
      "Reporting au CODIR et au PDG",
      "Conformité NIS2 continue",
      "Veille et anticipation des menaces",
      "Coordination des audits et tests",
    ],
  },
  {
    slug: "protection-it",
    title: "Protection IT Exposés",
    icon: "🔒",
    desc: "EASM (External Attack Surface Management), WAF et surveillance continue de votre surface d'attaque exposée.",
    features: [
      "Cartographie de la surface d'attaque",
      "EASM — surveillance continue",
      "WAF & protection applicative",
      "Détection et réponse aux incidents",
      "Rapports de posture de sécurité",
    ],
  },
  {
    slug: "formation-dirigeant",
    title: "Formation Dirigeant",
    icon: "🎓",
    desc: "Programme de gouvernance NIS2 et sensibilisation cyber pour les dirigeants et membres du CODIR.",
    features: [
      "Formation NIS2 pour décideurs",
      "Ateliers de sensibilisation CODIR",
      "Tabletop exercises & simulations",
      "Jeux de rôle incident cyber",
      "Support à la décision stratégique",
    ],
  },
  {
    slug: "sensibilisation",
    title: "Sensibilisation Employés",
    icon: "👥",
    desc: "Plateforme de simulation et formation continue pour transformer chaque collaborateur en rempart contre le risque cyber.",
    features: [
      "Phishing simulations ciblées",
      "Modules de formation interactifs",
      "Suivi individuel et collectif",
      "Rapports de maturité par équipe",
      "Certification et badges internes",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 gradient-page">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-content">
            Nos <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-lg text-content-secondary max-w-2xl mb-16">
            Des solutions adaptées aux enjeux cyber des PME industrielles : gouvernance, protection, formation et sensibilisation.
          </p>

          <div className="space-y-16">
            {solutions.map((sol) => (
              <div key={sol.slug} className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <span className="text-4xl">{sol.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4 text-content">{sol.title}</h2>
                  <p className="text-content-secondary leading-relaxed mb-6">{sol.desc}</p>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-accent to-accent-dark text-[#0A1628] hover:shadow-lg hover:shadow-accent/25 transition-all"
                  >
                    Demander une consultation
                  </Link>
                </div>
                <div className="p-6 rounded-2xl bg-surface-card border border-edge">
                  <h3 className="font-semibold text-content mb-4">Ce qui est inclus :</h3>
                  <ul className="space-y-3">
                    {sol.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent mt-0.5">✓</span>
                        <span className="text-content-secondary">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}