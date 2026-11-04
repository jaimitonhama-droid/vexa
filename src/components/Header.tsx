"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const navigationItems = [
  { name: "Início", href: "/" },
  { name: "Sobre nós", href: "/sobre" },
  { name: "Soluções", href: "/solucoes" },
  { name: "Produtos", href: "/produtos" },
  { name: "Projetos", href: "/projetos" },
  { name: "Contactos", href: "/contactos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0D12]/80 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7657F6] to-[#26B8F2] flex items-center justify-center p-[1px] shadow-lg shadow-[#7657F6]/25 transition-transform group-hover:scale-105 overflow-hidden">
              <div className="w-full h-full bg-[#0B0D12] rounded-[11px] flex items-center justify-center overflow-hidden p-1">
                <Image
                  src="/images/vexa-logo.png"
                  alt="VEXA Technology Group Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-sora font-bold text-xl tracking-wider text-[#F4F5FA] group-hover:text-white transition-colors">
                VEXA
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#9298AA] font-inter -mt-1 font-medium">
                Technology Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#171B2B]/60 border border-white/[0.06] backdrop-blur-md rounded-full px-4 py-1.5 shadow-inner">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/[0.1] shadow-sm"
                      : "text-[#9298AA] hover:text-[#F4F5FA] hover:bg-white/[0.04]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/orcamento"
              className="text-xs uppercase tracking-wider text-[#9298AA] hover:text-[#26B8F2] font-semibold transition-colors px-2"
            >
              Pedir Orçamento
            </Link>
            <Link
              href="/contactos"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#603fe3] hover:from-[#8265fa] hover:to-[#7657F6] transition-all shadow-lg shadow-[#7657F6]/25 hover:shadow-[#7657F6]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Falar com a VEXA</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#171B2B] text-[#9298AA] hover:text-white border border-white/[0.08] focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0B0D12]/95 backdrop-blur-2xl transition-all">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-[#7657F6]/15 text-[#7657F6] border border-[#7657F6]/20"
                      : "text-[#9298AA] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-white/[0.08] space-y-2">
              <Link
                href="/orcamento"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 px-4 rounded-xl text-sm font-semibold text-[#F4F5FA] bg-[#171B2B] border border-white/[0.08] hover:border-white/[0.15]"
              >
                Solicitar Orçamento
              </Link>
              <Link
                href="/contactos"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#26B8F2] shadow-lg shadow-[#7657F6]/20"
              >
                <span>Falar com a VEXA</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

