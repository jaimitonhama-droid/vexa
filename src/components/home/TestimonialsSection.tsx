import { Star, CheckCircle } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "A plataforma desenvolvida pela VEXA transformou a operação da nossa empresa. Carregamento instantâneo, visual sóbrio de altíssimo nível e integração perfeita com o nosso WhatsApp comercial.",
    author: "Carlos M.",
    role: "Diretor Comercial",
    initials: "CM",
    location: "Maputo",
  },
  {
    quote:
      "Adquirimos a solução pronta para a nossa loja e em menos de 5 dias o site estava publicado no nosso próprio domínio, com produtos organizados e pagamentos integrados. Uma experiência humana e muito profissional.",
    author: "Inês B.",
    role: "Fundadora & Gestora de Marca",
    initials: "IB",
    location: "Moçambique",
  },
  {
    quote:
      "Rigor técnico impecável. Rejeitam códigos genéricos e entregam sistemas limpos, rápidos e com uma arquitetura verdadeiramente pensada para durar e escalar sem dores de cabeça.",
    author: "David T.",
    role: "Gestor de Tecnologia",
    initials: "DT",
    location: "Nampula",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-[#0A0D14] border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <span className="w-8 h-[1px] bg-white/20" />
            <span className="flex items-center gap-1.5 text-blue-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              Confiança & Reputação
            </span>
            <span className="w-8 h-[1px] bg-white/20" />
          </div>

          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            A opinião de quem constrói <br className="hidden sm:inline" />
            <span className="text-gradient-silver">com a VEXA.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-inter">
            Relatos reais de clientes que confiaram os seus produtos digitais, websites e plataformas à nossa engenharia.
          </p>
        </div>

        {/* Testimonials 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#111827] border border-blue-900/40 p-7 flex flex-col justify-between space-y-6 hover:border-white/[0.18] transition-all"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-inter">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-blue-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1E2638] border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">
                      {item.author}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link
            href="/contactos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#111827] border border-blue-900/40 hover:bg-[#1E2638] hover:border-blue-800/60 transition-all shadow-md"
          >
            <span>Falar com os Nossos Especialistas</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

