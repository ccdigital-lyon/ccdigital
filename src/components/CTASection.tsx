import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1628] to-[#1A2744] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00D4FF]/5 rounded-full blur-3xl" />
      </div>
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Prêt à <span className="gradient-text">anticiper</span> ?
        </h2>
        <p className="text-lg text-[#B0B8C8] max-w-xl mx-auto mb-10">
          Démarrez une consultation et identifiez vos vrais risques en moins de 48h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-10 py-4 font-semibold rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A1628] hover:shadow-xl hover:shadow-[#00D4FF]/25 transition-all text-lg"
          >
            Démarrer une consultation
          </Link>
          <Link
            href="/solutions"
            className="px-10 py-4 font-semibold rounded-xl border-2 border-[#00D4FF]/40 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all text-lg"
          >
            Découvrir nos solutions
          </Link>
        </div>
      </div>
    </section>
  );
}