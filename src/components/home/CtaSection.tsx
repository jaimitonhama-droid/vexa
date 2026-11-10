import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare, Rocket } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-[#0A0D14] border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-[#111827] border border-blue-900/40 p-6 sm:p-16 lg:p-20 text-center shadow-2xl overflow-hidden">
          
          {/* Subtle grid pattern inside */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            
            {/* Editorial Section Label */}
            <div className="inline-flex items-center justify-center gap-2.5">
              <span className="w-5 h-[1px] bg-white/20" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#94A3B8] font-inter">
                Parceria & Inovação
              </span>
              <span className="w-5 h-[1px] bg-white/20" />
            </div>

            {/* Title */}
            <h2 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.12]">
              Tens uma ideia? <br />
              <span className="text-gradient">Vamos construí-la juntos.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-lg text-[#94A3B8] max-w-2xl mx-auto font-inter leading-relaxed">
              Seja um novo projeto, uma necessidade empresarial ou uma ideia de produto, estamos prontos para explorar novas possibilidades com tecnologia de ponta.
            </p>

            {/* Action Buttons (Humanized Luxury Pill Buttons) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/orcamento"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Rocket className="w-4 h-4" />
                <span>Começar um Projeto</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              
              <a
                href="https://wa.me/258872024095?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipa%20da%20VEXA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#F8FAFC] bg-[#0A0D14] border border-blue-900/40 hover:border-white/[0.25] hover:bg-[#1E2638] transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Extra assurance */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Resposta rápida e sem compromisso
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Atendimento personalizado
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                Confidencialidade garantida
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

