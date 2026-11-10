"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/258872024095?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20e%20produtos%20da%20VEXA%20Technology%20Group."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a VEXA"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#111827]/95 backdrop-blur-md border border-blue-900/40 hover:border-emerald-500/50 text-white shadow-2xl hover:shadow-emerald-500/10 transition-all hover:scale-[1.02] active:scale-95"
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle className="w-4 h-4 text-emerald-400" />
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <span className="text-xs font-semibold tracking-tight text-white hidden sm:inline">
        WhatsApp Oficial
      </span>
    </a>
  );
}
