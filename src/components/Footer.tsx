import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060810] border-t border-blue-900/40 relative overflow-hidden">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4 max-w-md">
            <Link href="/" className="flex items-center gap-3">
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

            <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
              Design, engenharia de software e plataformas digitais de alta performance para empresas que valorizam excelência e resultados.
            </p>
          </div>

          {/* Quick Clean Links & Direct Contacts */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-[#94A3B8]">
              <Link href="/#servicos" className="hover:text-white transition-colors">
                Serviços
              </Link>
              <Link href="/#portfolio" className="hover:text-white transition-colors">
                Portfólio
              </Link>
              <Link href="/sobre" className="hover:text-white transition-colors">
                Sobre
              </Link>
              <Link href="/orcamento" className="hover:text-white transition-colors">
                Orçamento
              </Link>
              <Link href="/contactos" className="hover:text-white transition-colors">
                Contactos
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/258872024095?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipa%20da%20VEXA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp VEXA"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white text-xs font-semibold transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <Link
                href="/contactos"
                aria-label="Email VEXA"
                className="w-8 h-8 rounded-full bg-[#111827] border border-blue-900/40 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-white/[0.25] transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-blue-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9298AA]">
          <p>© 2026 VEXA Technology Group. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacidade" className="hover:text-white transition-colors">
              Privacidade & Termos
            </Link>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Operacional em Moçambique
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
