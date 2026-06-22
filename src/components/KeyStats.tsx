export function KeyStats() {
  return (
    <section className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold text-content mb-4">
            90% des PME industrielles sous-estiment leur exposition réelle :
          </p>
          <ul className="grid md:grid-cols-3 gap-4 mb-8">
            <li className="p-4 rounded-xl bg-accent/5 border border-accent/20">
              <span className="text-3xl font-bold block text-accent">68%</span>
              <span className="text-sm text-content-secondary">des PME n&apos;ont pas de plan de réponse à incident</span>
            </li>
            <li className="p-4 rounded-xl bg-accent-green/5 border border-accent-green/20">
              <span className="text-3xl font-bold block text-accent-green">53%</span>
              <span className="text-sm text-content-secondary">des attaques ciblent l&apos;OT industriel</span>
            </li>
            <li className="p-4 rounded-xl bg-[var(--accent-orange)]/5 border border-[var(--accent-orange)]/20">
              <span className="text-3xl font-bold block text-[var(--accent-orange)]">2.7M€</span>
              <span className="text-sm text-content-secondary">coût moyen d&apos;une cyberattaque en PME</span>
            </li>
          </ul>
          <p className="text-lg text-content-secondary mb-4">
            Le risque n&apos;est pas seulement technique : il est juridique, opérationnel et stratégique pour la direction.
          </p>
          <p className="text-lg text-content font-medium max-w-2xl mx-auto">
            CCDIGITAL aide le PDG et le CODIR à voir précisément où se situent les vrais risques, à décider quoi traiter en premier et à transformer ces décisions en trajectoire claire et pilotable dans le temps.
          </p>
        </div>
      </div>
    </section>
  );
}