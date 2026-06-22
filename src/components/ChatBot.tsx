"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
}

interface QuickAction {
  label: string;
  reply: string;
}

const quickActions: QuickAction[] = [
  { label: "🛡️ RSSI Stratégique", reply: "Je suis intéressé par le RSSI Stratégique" },
  { label: "🔒 Protection IT", reply: "Je veux en savoir plus sur la Protection IT" },
  { label: "🎓 Formation NIS2", reply: "Je cherche une formation NIS2 pour dirigeants" },
  { label: "📞 Être rappelé", reply: "Je souhaite être rappelé par un expert" },
];

const botResponses: Record<string, string> = {
  rssi: "Le RSSI Stratégique externalisé est notre offre phare pour les PME qui n'ont pas les ressources pour un RSSI interne. 🛡️\n\nIl comprend :\n• Pilotage de la politique de sécurité\n• Reporting au CODIR\n• Conformité NIS2 continue\n• Veille et anticipation des menaces\n\nSouhaitez-vous en discuter avec un expert ? Tapez « être rappelé » ou visitez /solutions/rssi-strategique",
  protection: "La Protection IT Exposés combine EASM, WAF et surveillance continue de votre surface d'attaque. 🔒\n\nNous cartographions tous vos assets exposés, mettons en place un WAF et surveillons 24/7.\n\nSouhaitez-vous un diagnostic de votre surface d'attaque ? Tapez « être rappelé » ou visitez /solutions/protection-it",
  formation: "Notre Formation Dirigeant NIS2 est conçue pour les membres du CODIR. 🎓\n\nElle comprend :\n• Formation NIS2 pour décideurs\n• Ateliers de sensibilisation CODIR\n• Tabletop exercises & simulations\n• Jeux de rôle incident cyber\n\nVisitez /solutions/formation-dirigeant ou tapez « être rappelé » pour organiser une session.",
  rappel: "Parfait ! Pour être rappelé par un de nos experts, vous pouvez :\n\n📧 Nous écrire à contact@ccdigital.fr\n📋 Remplir notre formulaire : /contact\n\nUn expert vous recontactera sous 24h pour planifier un échange adapté à votre contexte.",
  nis2: "La directive NIS2 impose de nouvelles obligations aux PME industrielles depuis 2024. 📋\n\nLes points clés :\n• Responsabilité personnelle des dirigeants\n• Obligation de notification des incidents (24h)\n• Mesures de gestion des risques\n• Sanctions pouvant aller jusqu'à 10M€ ou 2% du CA\n\nCCDigital vous accompagne dans la mise en conformité. Tapez « être rappelé » pour un premier échange.",
  audit: "Notre audit cybersécurité est le premier pilier de notre méthodologie en 5 étapes (Mesurer, Décider, Simuler, Agir, Vérifier). 🔍\n\nIl comprend :\n• Cartographie de la surface d'attaque\n• Évaluation de la maturité NIS2\n• Tests de pénétration (si applicable)\n• Rapport priorisé avec trajectoire d'amélioration\n\nTapez « être rappelé » pour planifier votre audit.",
  default: "Merci pour votre message ! 👋\n\nJe suis l'assistant virtuel CCDigital. Je peux vous orienter vers :\n\n🛡️ **RSSI Stratégique** — Direction cyber externalisée\n🔒 **Protection IT** — EASM, WAF & surveillance\n🎓 **Formation NIS2** — Pour dirigeants et CODIR\n👥 **Sensibilisation** — Plateforme de formation employés\n\nOu tapez **« être rappelé »** pour qu'un expert vous contacte.\n\nVous pouvez aussi utiliser les boutons ci-dessous ⬇️",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("rssi") || lower.includes("stratégi") || lower.includes("external")) return botResponses.rssi;
  if (lower.includes("protection") || lower.includes("easm") || lower.includes("waf") || lower.includes("surface")) return botResponses.protection;
  if (lower.includes("formation") || lower.includes("nis2") || lower.includes("dirigeant") || lower.includes("codir")) return botResponses.formation;
  if (lower.includes("rappel") || lower.includes("contact") || lower.includes("appeler") || lower.includes("expert")) return botResponses.rappel;
  if (lower.includes("nis") || lower.includes("conformité") || lower.includes("réglement")) return botResponses.nis2;
  if (lower.includes("audit") || lower.includes("diagnostic") || lower.includes("mesurer")) return botResponses.audit;
  return botResponses.default;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "0", role: "bot", text: "Bonjour ! 👋 Je suis l'assistant CCDigital. Comment puis-je vous aider ?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      const botMsg: Message = { id: (Date.now() + 1).toString(), role: "bot", text: response };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const bgMain = isLight ? "bg-white" : "bg-surface";
  const bgSecondary = isLight ? "bg-gray-50" : "bg-surface-alt";
  const bgCard = isLight ? "bg-gray-100" : "bg-surface-card";
  const textPrimary = isLight ? "text-content" : "text-content";
  const textSecondary = isLight ? "text-gray-600" : "text-content-secondary";
  const borderColor = isLight ? "border-gray-200" : "border-edge";
  const placeholderClass = isLight ? "placeholder-gray-400" : "placeholder-[#6B7A90]";

  return (
    <>
      {/* Chat bubble button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-accent to-accent-dark text-[#0A1628] shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all hover:scale-105 flex items-center justify-center"
          aria-label="Ouvrir le chat"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-6rem)] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up ${bgMain} ${borderColor} border`}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-accent to-accent-dark text-[#0A1628]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0A1628]/20 flex items-center justify-center text-sm font-bold">CC</div>
              <div>
                <div className="font-semibold text-sm">CCDigital</div>
                <div className="text-xs opacity-80">Assistant virtuel</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-[#0A1628]/10 transition-colors"
              aria-label="Fermer le chat"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className={`flex-1 overflow-y-auto px-4 py-3 space-y-3 ${bgSecondary}`}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-accent to-accent-dark text-[#0A1628] rounded-br-sm"
                      : `${bgCard} ${textPrimary} border ${borderColor} rounded-bl-sm`
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`${bgCard} ${borderColor} border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1`}>
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" style={{ animationDelay: "300ms" }} />
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" style={{ animationDelay: "600ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions */}
          {messages.length <= 2 && (
            <div className={`px-4 py-2 flex flex-wrap gap-2 ${bgMain}`}>
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={() => sendMessage(action.reply)}
                  className={`text-xs px-3 py-1.5 rounded-full border ${borderColor} ${textSecondary} hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className={`flex gap-2 px-4 py-3 border-t ${borderColor} ${bgMain}`}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Votre message…"
              className={`flex-1 px-4 py-2 rounded-xl text-sm ${bgCard} ${textPrimary} border ${borderColor} focus:border-accent focus:outline-none transition-colors ${placeholderClass}`}
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-accent to-accent-dark text-[#0A1628] text-sm font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Envoyer
            </button>
          </form>
        </div>
      )}
    </>
  );
}