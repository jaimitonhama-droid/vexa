import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Target, Lightbulb, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-[#0C0D0E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Visual Institutional Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-2xl bg-[#141518] border border-white/[0.08] p-5 sm:p-8 shadow-2xl overflow-hidden space-y-5 sm:space-y-6">
                
                {/* Tech background element */}
                <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0C0D0E] border border-white/[0.1] flex items-center justify-center p-[2px] overflow-hidden">
                      <div className="w-full h-full bg-[#0C0D0E] rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                        <Image
                          src="/images/vexa-logo.png"
                          alt="VEXA Ecosystem Logo"
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-sora font-bold text-sm text-[#F8FAFC]">VEXA Ecosystem</h4>
                      <p className="text-[11px] text-[#94A3B8]">Visão & Impacto Digital</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-[#94A3B8] bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.08]">
                    Propósito
                  </span>
                </div>

                {/* Key Focus Highlights */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0C0D0E] border border-white/[0.06]">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-sora text-xs font-semibold text-[#F8FAFC]">Missão Direcionada</h5>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Transformar necessidades reais em soluções tecnológicas úteis, acessíveis e inovadoras.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0C0D0E] border border-white/[0.06]">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-sora text-xs font-semibold text-[#F8FAFC]">Visão de Futuro</h5>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Construir uma empresa tecnológica capaz de desenvolver produtos e soluções com impacto positivo contínuo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom values ticker */}
                <div className="pt-2 flex items-center justify-between text-xs text-[#94A3B8] border-t border-white/[0.06]">
                  <span className="flex items-center gap-1.5 text-[#F8FAFC]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Inovação Contínua
                  </span>
                  <span>Transparência & Rigor</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Institutional Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-5 h-[1px] bg-white/20" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#94A3B8] font-inter">
                Apresentação Institucional
              </span>
            </div>

            <h2 className="font-sora text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              Mais do que tecnologia. <br className="hidden sm:inline" />
              <span className="text-gradient">Criamos possibilidades.</span>
            </h2>

            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed font-inter">
              A <strong className="text-white font-medium">VEXA</strong> nasceu com uma visão: utilizar a tecnologia para desenvolver soluções que simplificam processos, criam oportunidades e transformam a maneira como pessoas e empresas trabalham.
            </p>

            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed font-inter">
              Atuamos tanto no desenvolvimento de ecossistemas digitais proprietários quanto na criação de projetos sob medida de alto padrão para quem busca elevar a presença digital, modernizar operações e escalar negócios.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/sobre"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-slate-200 transition-all shadow-md group"
              >
                <span>Conhecer a VEXA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contactos"
                className="text-xs sm:text-sm font-semibold text-[#94A3B8] hover:text-white transition-colors px-4 py-2"
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

