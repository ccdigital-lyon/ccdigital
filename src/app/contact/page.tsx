import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Démarrez une consultation cybersécurité avec CCDigital.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-20 gradient-page">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-content">
            Démarrer une <span className="gradient-text">consultation</span>
          </h1>
          <p className="text-lg text-content-secondary mb-12">
            Identifiez vos vrais risques et construisez une trajectoire cybersécurité claire et pilotable.
          </p>

          <form className="space-y-6" action="https://formspree.io/f/placeholder" method="POST">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-content-secondary mb-2">Nom complet</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface-card border border-edge text-content placeholder-[#6B7A90] focus:border-accent focus:outline-none transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-content-secondary mb-2">Email professionnel</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface-card border border-edge text-content placeholder-[#6B7A90] focus:border-accent focus:outline-none transition-colors"
                  placeholder="jean@entreprise.fr"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-content-secondary mb-2">Entreprise</label>
              <input
                type="text"
                name="company"
                className="w-full px-4 py-3 rounded-lg bg-surface-card border border-edge text-content placeholder-[#6B7A90] focus:border-accent focus:outline-none transition-colors"
                placeholder="Nom de votre entreprise"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-content-secondary mb-2">Sujet</label>
              <select
                name="subject"
                className="w-full px-4 py-3 rounded-lg bg-surface-card border border-edge text-content focus:border-accent focus:outline-none transition-colors"
              >
                <option value="audit">Audit & Diagnostic cybersécurité</option>
                <option value="rssi">RSSI Stratégique externalisé</option>
                <option value="protection">Protection IT exposée</option>
                <option value="formation">Formation gouvernance NIS2</option>
                <option value="sensibilisation">Sensibilisation employés</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-content-secondary mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-surface-card border border-edge text-content placeholder-[#6B7A90] focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Décrivez vos besoins en cybersécurité…"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 font-semibold rounded-xl bg-gradient-to-r from-accent to-accent-dark text-[#0A1628] hover:shadow-xl hover:shadow-accent/25 transition-all text-lg"
            >
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}