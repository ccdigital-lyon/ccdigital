import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ChatBot } from "@/components/ChatBot";

export const metadata: Metadata = {
  title: {
    default: "CCDigital — Cybersécurité IT & OT pour PME Industrielle",
    template: "%s | CCDigital",
  },
  description: "CCDigital aide le PDG et le CODIR à voir précisément où se situent les vrais risques cyber, à décider quoi traiter en premier et à transformer ces décisions en trajectoire claire et pilotable.",
  keywords: ["cybersécurité", "NIS2", "PME industrielle", "OT", "RSSI", "gouvernance", "audit", "conformité"],
  authors: [{ name: "CCDigital" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ccdigital.fr",
    siteName: "CCDigital",
    title: "CCDigital — Cybersécurité IT & OT pour PME Industrielle",
    description: "L'Anticipation est la seule Défense qui augmente votre confiance",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCDigital — Cybersécurité IT & OT pour PME Industrielle",
    description: "L'Anticipation est la seule Défense qui augmente votre confiance",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var t = localStorage.getItem('theme');
              if (t === 'light') document.documentElement.classList.add('theme-light');
              else document.documentElement.classList.add('theme-dark');
            } catch(e) {}
          })();
        ` }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}