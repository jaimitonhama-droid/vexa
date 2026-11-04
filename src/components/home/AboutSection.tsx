import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Target, Lightbulb, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-[#0B0D12]">
      {/* Background glow separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#7657F6]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Visual Institutional Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Outer Glow & Background */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#7657F6]/20 via-[#26B8F2]/10 to-transparent blur-xl opacity-60" />

              <div className="relative rounded-2xl bg-[#171B2B] border border-white/[0.08] p-5 sm:p-8 shadow-2xl overflow-hidden space-y-5 sm:space-y-6">
                
                {/* Tech background element */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7657F6] to-[#26B8F2] flex items-center justify-center p-[1px] overflow-hidden">
                      <div className="w-full h-full bg-[#0B0D12] rounded-[11px] flex items-center justify-center overflow-hidden p-1">
                        <Image
                          src="/images/vexa-logo.png"
                          alt="VEXA Ecosystem Logo"
                          width={36}
                          height={36}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-sora font-bold text-sm text-[#F4F5FA]">VEXA Ecosystem</h4>
                      <p className="text-[11px] text-[#9298AA]">Visão & Impacto Digital</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-[#26B8F2] bg-[#26B8F2]/10 px-2.5 py-1 rounded-full border border-[#26B8F2]/20">
                    Propósito
                  </span>
                </div>

                {/* Key Focus Highlights */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0B0D12]/60 border border-white/[0.04]">
                    <div className="w-8 h-8 rounded-lg bg-[#7657F6]/15 text-[#7657F6] flex items-center justify-center shrink-0 mt-0.5">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-sora text-xs font-semibold text-[#F4F5FA]">Missão Direcionada</h5>
                      <p className="text-xs text-[#9298AA] mt-0.5">
                        Transformar necessidades reais em soluções tecnológicas úteis, acessíveis e inovadoras.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0B0D12]/60 border border-white/[0.04]">
                    <div className="w-8 h-8 rounded-lg bg-[#26B8F2]/15 text-[#26B8F2] flex items-center justify-center shrink-0 mt-0.5">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-sora text-xs font-semibold text-[#F4F5FA]">Visão de Futuro</h5>
                      <p className="text-xs text-[#9298AA] mt-0.5">
                        Construir uma empresa tecnológica capaz de desenvolver produtos e soluções com impacto positivo contínuo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom values ticker */}
                <div className="pt-2 flex items-center justify-between text-xs text-[#9298AA] border-t border-white/[0.06]">
                  <span className="flex items-center gap-1.5 text-[#F4F5FA]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Inovação Contínua
                  </span>
                  <span>Transparência & Qualidade</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Institutional Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171B2B] border border-white/[0.08] text-xs font-semibold text-[#7657F6] tracking-wider uppercase">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Apresentação Institucional</span>
            </div>

            <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F5FA] tracking-tight leading-tight">
              Mais do que tecnologia. <br className="hidden sm:inline" />
              <span className="text-gradient">Criamos possibilidades.</span>
            </h2>

            <p className="text-[#9298AA] text-base sm:text-lg leading-relaxed font-inter">
              A <strong className="text-[#F4F5FA] font-medium">VEXA</strong> nasceu com uma visão: utilizar a tecnologia para desenvolver soluções que simplificam processos, criam oportunidades e transformam a maneira como pessoas e empresas trabalham.
            </p>

            <p className="text-[#9298AA] text-sm sm:text-base leading-relaxed font-inter">
              Atuamos tanto no desenvolvimento de ecossistemas digitais proprietários quanto na criação de projetos sob medida de alto padrão para quem busca elevar a presença digital, modernizar operações e escalar negócios.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/sobre"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#171B2B] border border-white/[0.1] hover:border-[#7657F6]/50 hover:bg-[#20253a] transition-all group"
              >
                <span>Conhecer a VEXA</span>
                <ArrowRight className="w-4 h-4 text-[#7657F6] transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contactos"
                className="text-sm font-semibold text-[#9298AA] hover:text-[#26B8F2] transition-colors px-4 py-2"
              >
                Conversar com os nossos especialistas →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

