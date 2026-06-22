import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 gradient-cta relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-content">
          Prêt à <span className="gradient-text">anticiper</span> ?
        </h2>
        <p className="text-lg text-content-secondary max-w-xl mx-auto mb-10">
          Démarrez une consultation et identifiez vos vrais risques en moins de 48h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-10 py-4 font-semibold rounded-xl bg-gradient-to-r from-accent to-accent-dark text-[#0A1628] hover:shadow-xl hover:shadow-accent/25 transition-all text-lg"
          >
            Démarrer une consultation
          </Link>
          <Link
            href="/solutions"
            className="px-10 py-4 font-semibold rounded-xl border-2 border-accent/40 text-accent hover:bg-accent/10 transition-all text-lg"
          >
            Découvrir nos solutions
          </Link>
        </div>
      </div>
    </section>
  );
}