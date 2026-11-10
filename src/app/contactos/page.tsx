import type { Metadata } from "next";
import { Mail, MessageSquare, MapPin, Clock, ShieldCheck, Sparkles, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contactos | VEXA Technology Group",
  description:
    "Entre em contacto direto com o VEXA Technology Group para esclarecer dúvidas, solicitar demonstrações ou iniciar novos projetos.",
};

export default function ContactosPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Header */}
      <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden bg-[#0A0D14]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center justify-center gap-2.5">
              <span className="w-5 h-[1px] bg-white/20" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#94A3B8] font-inter">
                Canais Oficiais
              </span>
              <span className="w-5 h-[1px] bg-white/20" />
            </div>

            <h1 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              Fale diretamente com <br className="hidden sm:inline" />
              <span className="text-gradient">a equipa da VEXA.</span>
            </h1>

            <p className="text-sm sm:text-lg text-[#94A3B8] leading-relaxed font-inter max-w-2xl mx-auto">
              Estamos prontos para responder às suas questões, apresentar os nossos produtos digitais ou delinear a solução ideal para o seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Centered Form + Loose Contact Information Below */}
      <section className="py-12 sm:py-16 relative bg-[#0A0D14] border-t border-blue-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Form Header */}
          <div className="text-center mb-8 sm:mb-10 space-y-2">
            <span className="text-[10px] sm:text-xs font-mono font-medium text-blue-400 uppercase tracking-widest block">
              Formulário Direto
            </span>
            <h2 className="font-sora text-2xl sm:text-4xl font-bold text-[#F8FAFC]">
              Envie-nos uma mensagem
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl mx-auto">
              Preencha os campos abaixo para iniciar conversa direta e estruturada com a nossa equipa.
            </p>
          </div>

          {/* Centered Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>

          {/* Loose Contact Details (Sem quadrado / Informações Soltas) */}
          <div className="mt-14 pt-10 border-t border-blue-900/40">
            <div className="text-center mb-8">
              <span className="text-[10px] sm:text-xs font-mono text-[#94A3B8] uppercase tracking-[0.2em]">
                Canais de Atendimento Direto
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              
              {/* Email */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-blue-900/40 flex items-center justify-center text-[#F8FAFC]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-[#94A3B8] block font-mono">Correio Eletrónico</span>
                  <a
                    href="mailto:contacto@vexa.tech"
                    className="text-xs sm:text-sm font-semibold text-[#F8FAFC] hover:text-blue-400 transition-colors inline-block mt-0.5"
                  >
                    contacto@vexa.tech
                  </a>
                  <p className="text-[11px] text-[#94A3B8]/70 mt-0.5">Canal oficial de comunicação</p>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-[#94A3B8] block font-mono">WhatsApp Direto</span>
                  <a
                    href="https://wa.me/258872024095?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipa%20da%20VEXA%20Technology%20Group."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-emerald-400 hover:underline transition-colors inline-block mt-0.5"
                  >
                    +258 87 202 4095 →
                  </a>
                  <p className="text-[11px] text-[#94A3B8]/70 mt-0.5">Atendimento rápido e direto</p>
                </div>
              </div>

              {/* Sede / Localização */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-blue-900/40 flex items-center justify-center text-[#F8FAFC]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-[#94A3B8] block font-mono">Presença & Operação</span>
                  <p className="text-xs sm:text-sm font-semibold text-[#F8FAFC] mt-0.5">
                    Moçambique & Global
                  </p>
                  <p className="text-[11px] text-[#94A3B8]/70 mt-0.5">Atendimento corporativo</p>
                </div>
              </div>

              {/* Tempo de Resposta */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-blue-900/40 flex items-center justify-center text-amber-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-[#94A3B8] block font-mono">Tempo de Retorno</span>
                  <p className="text-xs sm:text-sm font-semibold text-[#F8FAFC] mt-0.5">
                    &lt; 24 horas úteis
                  </p>
                  <p className="text-[11px] text-[#94A3B8]/70 mt-0.5">Resposta rápida garantida</p>
                </div>
              </div>

            </div>

            {/* Privacy note - loose below */}
            <div className="mt-10 pt-6 border-t border-blue-900/20 flex items-center justify-center gap-2 text-xs text-[#94A3B8] text-center">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Privacidade Assegurada: Os dados submetidos são tratados com total sigilo profissional.</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
