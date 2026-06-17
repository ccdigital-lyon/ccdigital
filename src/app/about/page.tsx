import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description: "CCDigital : conseil cybersécurité IT & OT pour PME industrielle. Gouvernance, conformité NIS2, protection.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Qui sommes-<span className="gradient-text">nous</span> ?
          </h1>
          <div className="space-y-8 text-lg text-[#B0B8C8] leading-relaxed">
            <p>
              <strong className="text-white">CCDigital</strong> est un cabinet de conseil spécialisé en cybersécurité IT & OT pour les PME industrielles.
            </p>
            <p>
              Notre conviction : l&apos;anticipation est la seule défense qui augmente votre confiance. Nous aidons les dirigeants et les CODIR à voir précisément où se situent les vrais risques, à décider quoi traiter en premier et à transformer ces décisions en trajectoire claire et pilotable dans le temps.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">5</div>
                <div className="text-sm text-[#6B7A90]">Piliers méthodologiques</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">NIS2</div>
                <div className="text-sm text-[#6B7A90]">Conformité réglementaire</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">IT + OT</div>
                <div className="text-sm text-[#6B7A90]">Couverture complète</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Notre approche</h2>
            <p>
              Nous croyons que la cybersécurité doit être un sujet de direction, pas uniquement technique. Notre méthodologie en 5 piliers — Mesurer, Décider, Simuler, Agir, Vérifier — permet de transformer la conformité en avantage compétitif.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}