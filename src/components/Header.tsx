"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const navigationItems = [
  { name: "Serviços", href: "/#servicos" },
  { name: "Portfólio", href: "/#portfolio" },
  { name: "Sobre", href: "/sobre" },
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
          ? "bg-[#0A0D14]/90 backdrop-blur-md border-b border-blue-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#111827] border border-white/[0.12] flex items-center justify-center p-[2px] shadow-md transition-all group-hover:border-blue-500/50 group-hover:scale-105 overflow-hidden">
              <div className="w-full h-full bg-[#0A0D14] rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                <Image
                  src="/images/vexa-logo.png"
                  alt="VEXA Technology Group Logo"
                  width={34}
                  height={34}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-sora font-bold text-lg tracking-wider text-[#F8FAFC] group-hover:text-white transition-colors">
                VEXA
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#94A3B8] font-inter -mt-1 font-semibold">
                Technology Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#111827]/90 border border-blue-900/40 backdrop-blur-md rounded-full px-3.5 py-1.5 shadow-sm">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/[0.12] shadow-sm font-semibold"
                      : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Pedir Orçamento</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#111827] text-[#94A3B8] hover:text-white border border-blue-900/40 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-blue-900/40 bg-[#0A0D14]/95 backdrop-blur-2xl transition-all">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white/[0.08] text-white font-semibold border border-blue-900/50"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-blue-900/40">
              <Link
                href="/orcamento"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/25 transition-all"
              >
                <span>Pedir Orçamento</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

