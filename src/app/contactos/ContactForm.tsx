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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getWhatsAppLink = () => {
    const text = `*NOVO CONTACTO VIA WEBSITE VEXA*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      (formData.company ? `🏢 *Empresa:* ${formData.company}\n` : "") +
      `💼 *Interesse:* ${formData.serviceType}\n` +
      (formData.subject ? `📌 *Assunto:* ${formData.subject}\n` : "") +
      `\n💬 *Mensagem:*\n${formData.message}`;

    return `https://wa.me/258872024095?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Por favor, insira um endereço de email válido.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Open WhatsApp directly with pre-filled message
    const whatsappUrl = getWhatsAppLink();
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <div className="rounded-3xl bg-[#141518] border border-white/[0.08] p-5 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {status === "success" ? (
        <div className="py-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="font-sora text-2xl font-bold text-white">
              Mensagem Pronta no seu WhatsApp!
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              A sua mensagem foi estruturada e aberta no WhatsApp oficial da VEXA (+258 87 202 4095).
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center gap-2"
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
              className="px-6 py-3 rounded-full text-xs font-semibold text-slate-300 bg-[#0C0D0E] border border-white/[0.1] hover:border-white/[0.2] transition-colors"
            >
              Enviar Outra Mensagem
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {status === "error" && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-3">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
            {/* Nome */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-[11px] sm:text-xs font-medium text-slate-300 truncate">
                Nome Completo <span className="text-blue-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: Seu Nome"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-[11px] sm:text-xs font-medium text-slate-300 truncate">
                Endereço de Email <span className="text-blue-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
            {/* Empresa (Opcional) */}
            <div className="space-y-1.5">
              <label htmlFor="company" className="block text-[11px] sm:text-xs font-medium text-slate-300 truncate">
                Empresa <span className="text-slate-500 text-[10px] font-normal">(Opcional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nome da empresa"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
              />
            </div>

            {/* Tipo de Serviço */}
            <div className="space-y-1.5">
              <label htmlFor="serviceType" className="block text-[11px] sm:text-xs font-medium text-slate-300 truncate">
                Interesse
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-2.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm text-white outline-none transition-all cursor-pointer truncate"
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
          <div className="space-y-1.5">
            <label htmlFor="subject" className="block text-[11px] sm:text-xs font-medium text-slate-300">
              Assunto
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Ex: Aquisição de plataforma ou proposta comercial"
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
            />
          </div>

          {/* Mensagem */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-[11px] sm:text-xs font-medium text-slate-300">
              Mensagem <span className="text-blue-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva em detalhe os requisitos ou o projeto pretendido..."
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-semibold text-black bg-white hover:bg-slate-200 disabled:opacity-50 transition-all cursor-pointer shadow-lg"
          >
            {status === "loading" ? (
              <span>A preparar WhatsApp...</span>
            ) : (
              <>
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Enviar Mensagem via WhatsApp</span>
              </>
            )}
          </button>
        </form>
      )}

    </div>
  );
}
