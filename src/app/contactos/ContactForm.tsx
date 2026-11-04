"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceType: "Geral",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `*Nova Mensagem - VEXA Technology Group*\n\n` +
      `*Nome:* ${formData.name || "Não informado"}\n` +
      `*Email:* ${formData.email || "Não informado"}\n` +
      `*Empresa:* ${formData.company || "Particular"}\n` +
      `*Interesse:* ${formData.serviceType}\n` +
      `*Assunto:* ${formData.subject || "Contacto Geral"}\n\n` +
      `*Mensagem:*\n${formData.message || ""}`
    );

    return `https://wa.me/258872024095?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, preencha todos os campos obrigatórios (Nome, Email e Mensagem).");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setStatus("error");
      setErrorMessage("Por favor, insira um endereço de email válido.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Open WhatsApp directly with the pre-filled message
    const whatsappUrl = getWhatsAppLink();
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <div className="rounded-3xl bg-[#171B2B]/70 border border-white/[0.08] p-5 sm:p-12 shadow-2xl relative overflow-hidden">
      
      {status === "success" ? (
        <div className="py-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-400/10">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="font-sora text-2xl font-bold text-[#F4F5FA]">
              Mensagem Pronta no seu WhatsApp!
            </h3>
            <p className="text-sm text-[#9298AA] max-w-md mx-auto">
              A sua mensagem foi estruturada e enviada diretamente para o nosso canal oficial do WhatsApp (+258 87 202 4095).
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Reabrir Conversa no WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  company: "",
                  serviceType: "Geral",
                  subject: "",
                  message: "",
                });
              }}
              className="px-6 py-3 rounded-xl text-xs font-semibold text-[#F4F5FA] bg-[#0B0D12] border border-white/[0.1] hover:border-white/[0.2] transition-colors"
            >
              Enviar Outra Mensagem
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {status === "error" && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-3">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 sm:gap-6">
            {/* Nome */}
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="name" className="block text-[11px] sm:text-xs font-semibold text-[#F4F5FA] truncate">
                Nome Completo <span className="text-[#7657F6]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: Seu Nome"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] focus:ring-1 focus:ring-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] placeholder-[#9298AA]/50 outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="email" className="block text-[11px] sm:text-xs font-semibold text-[#F4F5FA] truncate">
                Endereço de Email <span className="text-[#7657F6]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] focus:ring-1 focus:ring-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] placeholder-[#9298AA]/50 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-6">
            {/* Empresa (Opcional) */}
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="company" className="block text-[11px] sm:text-xs font-semibold text-[#F4F5FA] truncate">
                Empresa <span className="text-[#9298AA] text-[9px] sm:text-[10px] font-normal">(Opcional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nome da empresa"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] focus:ring-1 focus:ring-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] placeholder-[#9298AA]/50 outline-none transition-all"
              />
            </div>

            {/* Tipo de Serviço */}
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="serviceType" className="block text-[11px] sm:text-xs font-semibold text-[#F4F5FA] truncate">
                Tipo de Serviço / Interesse
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-2.5 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] focus:ring-1 focus:ring-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] outline-none transition-all cursor-pointer truncate"
              >
                <option value="Geral">Contacto Geral</option>
                <option value="Aquisição de Site Pronto (Wandra, Lara Fashion, MYRO, XFLIX)">Site Pronto (Turnkey)</option>
                <option value="Desenvolvimento Web Sob Medida">Web Sob Medida</option>
                <option value="Aplicações & SaaS">Aplicações & SaaS</option>
                <option value="Lojas Virtuais">Loja Virtual</option>
                <option value="Plataformas de Streaming">Streaming</option>
                <option value="Consultoria Tecnológica">Consultoria</option>
              </select>
            </div>
          </div>

          {/* Assunto */}
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="subject" className="block text-[11px] sm:text-xs font-semibold text-[#F4F5FA]">
              Assunto
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Ex: Aquisição de site ou proposta comercial"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] focus:ring-1 focus:ring-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] placeholder-[#9298AA]/50 outline-none transition-all"
            />
          </div>

          {/* Mensagem */}
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="message" className="block text-[11px] sm:text-xs font-semibold text-[#F4F5FA]">
              Mensagem <span className="text-[#7657F6]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva em detalhe o que precisa ou como podemos ajudar..."
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] focus:ring-1 focus:ring-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] placeholder-[#9298AA]/50 outline-none transition-all resize-none"
            />
          </div>

          {/* Submit Button to WhatsApp */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full inline-flex items-center justify-center gap-2 py-3 sm:py-4 px-5 sm:px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#26B8F2] hover:opacity-95 shadow-xl shadow-[#7657F6]/25 disabled:opacity-50 transition-all cursor-pointer"
          >
            {status === "loading" ? (
              <span>A abrir WhatsApp...</span>
            ) : (
              <>
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Mensagem via WhatsApp</span>
              </>
            )}
          </button>
        </form>
      )}

    </div>
  );
}
