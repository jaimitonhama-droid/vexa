import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare, Rocket } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-[#0B0D12]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#7657F6]/25 via-[#26B8F2]/20 to-[#7657F6]/20 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-b from-[#171B2B] to-[#0B0D12] border border-white/[0.12] p-6 sm:p-16 lg:p-20 text-center shadow-2xl overflow-hidden">
          
          {/* Subtle grid pattern inside */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B0D12]/80 border border-white/[0.1] text-xs font-semibold text-[#26B8F2] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#7657F6]" />
              <span>Vamos Colaborar</span>
            </div>

            {/* Title */}
            <h2 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F5FA] tracking-tight leading-[1.12]">
              Tens uma ideia? <br />
              <span className="text-gradient">Vamos construí-la juntos.</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-xl text-[#9298AA] max-w-2xl mx-auto font-inter leading-relaxed">
              Seja um novo projeto, uma necessidade empresarial ou uma ideia de produto, estamos prontos para explorar novas possibilidades com tecnologia de ponta.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/orcamento"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#5b3adb] hover:from-[#8468f7] hover:to-[#7657F6] shadow-xl shadow-[#7657F6]/30 hover:shadow-[#7657F6]/50 transition-all hover:-translate-y-0.5"
              >
                <Rocket className="w-4 h-4" />
                <span>Começar um Projeto</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              
              <Link
                href="/contactos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-[#F4F5FA] bg-[#0B0D12] border border-white/[0.1] hover:border-white/[0.25] hover:bg-[#171B2B] transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-[#26B8F2]" />
                <span>Falar Connosco</span>
              </Link>
            </div>

            {/* Extra assurance */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#9298AA]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Resposta rápida e sem compromisso
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7657F6]" />
                Atendimento personalizado
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#26B8F2]" />
                Confidencialidade garantida
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

