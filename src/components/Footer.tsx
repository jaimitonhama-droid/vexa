import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Globe, Code2, ShieldCheck, Sparkles, MessageSquare, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060810] border-t border-blue-900/40 relative overflow-hidden">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-8 sm:mb-12">
          {/* Brand Column (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 inline-block">
              <div className="w-10 h-10 rounded-xl bg-[#111827] border border-white/[0.12] flex items-center justify-center p-[2px] shadow-sm overflow-hidden">
                <div className="w-full h-full bg-[#0A0D14] rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                  <Image
                    src="/images/vexa-logo.png"
                    alt="VEXA Technology Group Logo"
                    width={34}
                    height={34}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-sora font-bold text-lg tracking-wider text-[#F8FAFC]">
                  VEXA
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#94A3B8] font-inter -mt-1 font-semibold">
                  Technology Group
                </span>
              </div>
            </Link>

            <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed max-w-sm">
              Construímos tecnologia para transformar ideias em realidade. Desenvolvemos produtos digitais,
              plataformas e soluções tecnológicas que ajudam pessoas e empresas a evoluir.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/258872024095?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipa%20da%20VEXA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp VEXA"
                className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
              <Link
                href="/contactos"
                aria-label="Contactar VEXA"
                className="w-9 h-9 rounded-full bg-[#111827] border border-blue-900/40 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-white/[0.25] transition-all"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Links Column 1: Soluções */}
          <div>
            <h4 className="font-sora text-sm font-semibold text-[#F4F5FA] tracking-wider uppercase mb-4">
              Soluções
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solucoes#desenvolvimento-web" className="text-[#9298AA] hover:text-white transition-colors">
                  VEXA Web
                </Link>
              </li>
              <li>
                <Link href="/solucoes#desenvolvimento-aplicacoes" className="text-[#9298AA] hover:text-white transition-colors">
                  VEXA Digital
                </Link>
              </li>
              <li>
                <Link href="/solucoes#consultoria-tecnologica" className="text-[#9298AA] hover:text-white transition-colors">
                  VEXA Cloud
                </Link>
              </li>
              <li>
                <Link href="/solucoes#lojas-virtuais" className="text-[#9298AA] hover:text-white transition-colors">
                  Lojas Virtuais
                </Link>
              </li>
              <li>
                <Link href="/solucoes#sistemas-gestao" className="text-[#9298AA] hover:text-white transition-colors">
                  Sistemas Personalizados
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Produtos & Portfólio */}
          <div>
            <h4 className="font-sora text-sm font-semibold text-[#F4F5FA] tracking-wider uppercase mb-4">
              Produtos & Projetos
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/produtos/vyron" className="text-[#9298AA] hover:text-white transition-colors flex items-center gap-1.5">
                  <span>VYRON</span>
                  <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
                    SaaS
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-[#9298AA] hover:text-white transition-colors">
                  Catálogo de Sites & Produtos
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-[#9298AA] hover:text-white transition-colors">
                  Galeria de Projetos Reais
                </Link>
              </li>
              <li>
                <Link href="/orcamento" className="text-[#9298AA] hover:text-white transition-colors">
                  Pedir Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Empresa */}
          <div>
            <h4 className="font-sora text-sm font-semibold text-[#F4F5FA] tracking-wider uppercase mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/sobre" className="text-[#9298AA] hover:text-white transition-colors">
                  Sobre a VEXA
                </Link>
              </li>
              <li>
                <Link href="/sobre#visao" className="text-[#9298AA] hover:text-white transition-colors">
                  Missão & Visão
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="text-[#9298AA] hover:text-white transition-colors">
                  Fale Connosco
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-[#9298AA] hover:text-white transition-colors">
                  Privacidade & Termos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-blue-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9298AA]">
          <p>© 2026 VEXA Technology Group. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400/90 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Sistemas Operacionais
            </span>
            <span>Design & Engenharia Premium</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
