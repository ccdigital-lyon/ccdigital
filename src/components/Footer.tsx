import Link from "next/link";

const footerLinks = {
  expertise: [
    { label: "Cybersécurité IT", href: "/solutions/protection-it" },
    { label: "Sécurité OT / SCADA", href: "/solutions/rssi-strategique" },
    { label: "Conformité NIS2", href: "/solutions/formation-dirigeant" },
    { label: "Audit & Diagnostic", href: "/solutions" },
  ],
  services: [
    { label: "Protection IT exposée (EASM/WAF)", href: "/solutions/protection-it" },
    { label: "Conseil RSSI stratégique", href: "/solutions/rssi-strategique" },
    { label: "Formation gouvernance NIS2", href: "/solutions/formation-dirigeant" },
    { label: "Sensibilisation employés (plateforme)", href: "/solutions/sensibilisation" },
  ],
  legal: [
    { label: "Mentions Légales", href: "/legal/mentions-legales" },
    { label: "Conditions générales", href: "/legal/cgv" },
    { label: "Clause de responsabilité", href: "/legal/responsabilite" },
    { label: "Politique de confidentialité", href: "/legal/confidentialite" },
    { label: "Politique de sécurité", href: "/legal/securite" },
    { label: "Divulgation de vulnérabilité", href: "/legal/divulgation" },
    { label: "Synthèse fonctionnelle", href: "/legal/synthese" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface-footer border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="footer-heading">CC</span>
              <span className="gradient-text">DIGITAL</span>
            </Link>
            <p className="mt-4 text-sm footer-text-muted leading-relaxed">
              Cybersécurité IT & OT pour PME industrielle.
              Anticipation, gouvernance et conformité NIS2.
            </p>
          </div>

          {/* Expertise */}
          <div>
            <h5 className="font-semibold footer-heading mb-4">Domaines d&apos;expertise</h5>
            <ul className="space-y-2">
              {footerLinks.expertise.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm footer-text footer-link transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold footer-heading mb-4">Offres & Services</h5>
            <ul className="space-y-2">
              {footerLinks.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm footer-text footer-link transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-semibold footer-heading mb-4">Legal & Navigation</h5>
            <ul className="space-y-2">
              {footerLinks.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm footer-text footer-link transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm footer-text-muted">
            © {new Date().getFullYear()} CCDigital. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="https://linkedin.com" className="footer-text-muted footer-link transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
            <Link href="https://twitter.com" className="footer-text-muted footer-link transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}