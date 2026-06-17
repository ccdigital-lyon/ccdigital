export function KeyStats() {
  return (
    <section className="py-20 bg-[#0D1F3C]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold text-white mb-4">
            90% des PME industrielles sous-estiment leur exposition réelle :
          </p>
          <ul className="grid md:grid-cols-3 gap-4 mb-8 text-[#00D4FF]">
            <li className="p-4 rounded-xl bg-[#00D4FF]/5 border border-[#00D4FF]/20">
              <span className="text-3xl font-bold block">68%</span>
              <span className="text-sm text-[#B0B8C8]">des PME n&apos;ont pas de plan de réponse à incident</span>
            </li>
            <li className="p-4 rounded-xl bg-[#00E68A]/5 border border-[#00E68A]/20">
              <span className="text-3xl font-bold block">53%</span>
              <span className="text-sm text-[#B0B8C8]">des attaques ciblent l&apos;OT industriel</span>
            </li>
            <li className="p-4 rounded-xl bg-[#FF6B35]/5 border border-[#FF6B35]/20">
              <span className="text-3xl font-bold block">2.7M€</span>
              <span className="text-sm text-[#B0B8C8]">coût moyen d&apos;une cyberattaque en PME</span>
            </li>
          </ul>
          <p className="text-lg text-[#B0B8C8] mb-4">
            Le risque n&apos;est pas seulement technique : il est juridique, opérationnel et stratégique pour la direction.
          </p>
          <p className="text-lg text-white font-medium max-w-2xl mx-auto">
            CCDIGITAL aide le PDG et le CODIR à voir précisément où se situent les vrais risques, à décider quoi traiter en premier et à transformer ces décisions en trajectoire claire et pilotable dans le temps.
          </p>
        </div>
      </div>
    </section>
  );
}