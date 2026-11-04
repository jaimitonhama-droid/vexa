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
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0B0D12]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#7657F6]/20 via-[#26B8F2]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171B2B] border border-white/[0.08] text-xs font-semibold text-[#26B8F2] tracking-wider uppercase">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Canais Oficiais</span>
            </div>

            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F5FA] tracking-tight leading-tight">
              Fale diretamente com <br className="hidden sm:inline" />
              <span className="text-gradient">a equipa da VEXA.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#9298AA] leading-relaxed font-inter">
              Estamos prontos para responder às suas questões, apresentar os nossos produtos digitais ou delinear a solução ideal para o seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Centered Form + Loose Contact Information Below */}
      <section className="py-16 sm:py-20 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Form Header */}
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-mono font-medium text-[#7657F6] uppercase tracking-wider block">
              Formulário Direto
            </span>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-[#F4F5FA]">
              Envie-nos uma mensagem
            </h2>
            <p className="text-sm sm:text-base text-[#9298AA] max-w-xl mx-auto">
              Preencha os campos abaixo para iniciar conversa direta e estruturada com a nossa equipa.
            </p>
          </div>

          {/* Centered Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>

          {/* Loose Contact Details (Sem quadrado / Informações Soltas) */}
          <div className="mt-16 pt-12 border-t border-white/[0.08]">
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-[#9298AA] uppercase tracking-wider">
                Canais de Atendimento Direto
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Email */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#26B8F2]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#9298AA] block font-mono">Correio Eletrónico</span>
                  <a
                    href="mailto:contacto@vexa.tech"
                    className="text-sm font-semibold text-[#F4F5FA] hover:text-[#26B8F2] transition-colors inline-block mt-0.5"
                  >
                    contacto@vexa.tech
                  </a>
                  <p className="text-xs text-[#9298AA]/70 mt-1">Canal oficial de comunicação</p>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#9298AA] block font-mono">WhatsApp Direto</span>
                  <a
                    href="https://wa.me/258872024095?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipa%20da%20VEXA%20Technology%20Group."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-emerald-400 hover:underline transition-colors inline-block mt-0.5"
                  >
                    +258 87 202 4095 →
                  </a>
                  <p className="text-xs text-[#9298AA]/70 mt-1">Atendimento rápido e direto</p>
                </div>
              </div>

              {/* Sede / Localização */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#7657F6]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#9298AA] block font-mono">Presença & Operação</span>
                  <p className="text-sm font-semibold text-[#F4F5FA] mt-0.5">
                    Moçambique & Global
                  </p>
                  <p className="text-xs text-[#9298AA]/70 mt-1">Atendimento a empresas e particulares</p>
                </div>
              </div>

              {/* Tempo de Resposta */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#9298AA] block font-mono">Tempo de Retorno</span>
                  <p className="text-sm font-semibold text-[#F4F5FA] mt-0.5">
                    &lt; 24 horas úteis
                  </p>
                  <p className="text-xs text-[#9298AA]/70 mt-1">Resposta rápida garantida</p>
                </div>
              </div>

            </div>

            {/* Privacy note - loose below */}
            <div className="mt-12 pt-8 border-t border-white/[0.04] flex items-center justify-center gap-2 text-xs text-[#9298AA] text-center">
              <ShieldCheck className="w-4 h-4 text-[#26B8F2] shrink-0" />
              <span>Privacidade Assegurada: Os dados submetidos são tratados com total sigilo profissional.</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
