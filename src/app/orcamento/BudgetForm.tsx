"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";

export default function BudgetForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Desenvolvimento Web Sob Medida",
    specificItem: "",
    budgetRange: "A definir em conjunto",
    timeline: "Imediato (1 a 2 semanas)",
    details: "",
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

  const generateWhatsAppLink = () => {
    const text = `*SOLICITAÇÃO DE ORÇAMENTO - VEXA*\n\n` +
      `👤 *Nome:* ${formData.name || "Não informado"}\n` +
      `📧 *Email:* ${formData.email || "Não informado"}\n` +
      `📱 *Telefone:* ${formData.phone || "Não informado"}\n` +
      `🏢 *Empresa:* ${formData.company || "Particular"}\n` +
      `💼 *Tipo de Solução:* ${formData.projectType}\n` +
      (formData.specificItem ? `🎯 *Item Específico:* ${formData.specificItem}\n` : "") +
      `💰 *Orçamento:* ${formData.budgetRange}\n` +
      `⏱️ *Prazo Desejado:* ${formData.timeline}\n` +
      `\n📝 *Detalhes:* \n${formData.details || "Apresentar detalhes em conversa."}`;

    return `https://wa.me/258872024095?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.details.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, preencha os campos obrigatórios (*)");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Por favor, insira um email válido.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  return (
    <div className="rounded-3xl bg-[#141518] border border-white/[0.08] p-5 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {status === "success" ? (
        <div className="py-8 sm:py-12 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-1.5">
            <h3 className="font-sora text-xl sm:text-2xl font-bold text-white">
              Solicitação Recebida com Sucesso!
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
              Recebemos os detalhes do seu projeto. A nossa equipa técnica vai avaliar as necessidades e enviar uma proposta detalhada para o email informado em até 24 horas úteis.
            </p>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Acelerar Atendimento via WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-slate-300 bg-[#0C0D0E] border border-white/[0.1] hover:border-white/[0.2] transition-colors"
            >
              Criar Nova Solicitação
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Step 1: Identification */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
              <span className="w-5 h-5 rounded-full bg-[#1A1B20] border border-white/10 text-slate-300 text-[10px] font-mono font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-sora text-xs font-semibold text-white uppercase tracking-wider">
                Dados de Contacto
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {/* Nome */}
              <div className="space-y-1">
                <label htmlFor="name" className="text-[11px] sm:text-xs font-medium text-slate-300 truncate block">
                  Nome Completo <span className="text-blue-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 text-xs sm:text-sm text-white outline-none transition-all placeholder-slate-500"
                />
              </div>

              {/* Telefone */}
              <div className="space-y-1">
                <label htmlFor="phone" className="text-[11px] sm:text-xs font-medium text-slate-300 truncate block">
                  WhatsApp / Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+258 87 202 4095"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 text-xs sm:text-sm text-white outline-none transition-all placeholder-slate-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label htmlFor="email" className="text-[11px] sm:text-xs font-medium text-slate-300 truncate block">
                  Email <span className="text-blue-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 text-xs sm:text-sm text-white outline-none transition-all placeholder-slate-500"
                />
              </div>

              {/* Empresa */}
              <div className="space-y-1">
                <label htmlFor="company" className="text-[11px] sm:text-xs font-medium text-slate-300 truncate block">
                  Empresa <span className="text-slate-500 text-[10px] font-normal">(Opcional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome do negócio"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 text-xs sm:text-sm text-white outline-none transition-all placeholder-slate-500"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Project Nature */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
              <span className="w-5 h-5 rounded-full bg-[#1A1B20] border border-white/10 text-slate-300 text-[10px] font-mono font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-sora text-xs font-semibold text-white uppercase tracking-wider">
                Tipo de Projeto & Requisitos
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              <div className="space-y-1">
                <label htmlFor="projectType" className="text-[11px] sm:text-xs font-medium text-slate-300 truncate block">
                  Tipo de Solução
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 text-xs sm:text-sm text-white outline-none cursor-pointer truncate"
                >
                  <option value="Site Pronto (Turnkey)">Site Pronto (Turnkey)</option>
                  <option value="Desenvolvimento Web Sob Medida">Web Sob Medida</option>
                  <option value="Aplicação Web & SaaS">Aplicação & SaaS</option>
                  <option value="Loja Virtual & E-commerce">Loja Virtual</option>
                  <option value="Sistema de Gestão & Dashboard">Sistema de Gestão</option>
                  <option value="Plataforma de Streaming & Multimídia">Streaming & Multimídia</option>
                  <option value="Plataforma VYRON">Produto VYRON</option>
                  <option value="Consultoria Tecnológica">Consultoria</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="specificItem" className="text-[11px] sm:text-xs font-medium text-slate-300 truncate block">
                  Modelo ou Serviço
                </label>
                <input
                  id="specificItem"
                  name="specificItem"
                  type="text"
                  value={formData.specificItem}
                  onChange={handleChange}
                  placeholder="Ex: Wandra, Lara..."
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 text-xs sm:text-sm text-white outline-none placeholder-slate-500 truncate"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="timeline" className="text-[11px] sm:text-xs font-medium text-slate-300 truncate block">
                  Previsão de Início
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 text-xs sm:text-sm text-white outline-none cursor-pointer truncate"
                >
                  <option value="Imediato (1 a 2 semanas)">Imediato (1-2 sem.)</option>
                  <option value="Em 1 mês">Em até 1 mês</option>
                  <option value="Apenas a planear / sem urgência">Sem urgência</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="budgetRange" className="text-[11px] sm:text-xs font-medium text-slate-300 truncate block">
                  Investimento
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 text-xs sm:text-sm text-white outline-none cursor-pointer truncate"
                >
                  <option value="A definir em conjunto">Conforme proposta</option>
                  <option value="Básico / Essencial">Plano Essencial</option>
                  <option value="Profissional / Empresarial">Profissional</option>
                  <option value="Corporativo / Escala">Corporativo</option>
                </select>
              </div>
            </div>
          </div>

          {/* Step 3: Scope Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
              <span className="w-5 h-5 rounded-full bg-[#1A1B20] border border-white/10 text-slate-300 text-[10px] font-mono font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-sora text-xs font-semibold text-white uppercase tracking-wider">
                Detalhes & Objetivos do Projeto
              </h3>
            </div>

            <div className="space-y-1">
              <label htmlFor="details" className="text-[11px] sm:text-xs font-medium text-slate-300 block">
                Descreva os seus objetivos ou referências <span className="text-blue-400">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={3}
                value={formData.details}
                onChange={handleChange}
                placeholder="Conte-nos o que precisa: funcionalidades desejadas, prazos, referências..."
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#0C0D0E] border border-white/[0.08] focus:border-blue-500 text-xs sm:text-sm text-white outline-none resize-none placeholder-slate-500"
              />
            </div>
          </div>

          {/* Submission Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-semibold text-black bg-white hover:bg-slate-200 disabled:opacity-50 transition-all cursor-pointer shadow-lg"
            >
              {status === "loading" ? (
                <span>A processar proposta...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submeter Pedido de Orçamento</span>
                </>
              )}
            </button>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold text-slate-300 bg-[#1A1B20] border border-white/[0.1] hover:text-white hover:bg-[#22242b] transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Enviar via WhatsApp</span>
            </a>
          </div>

        </form>
      )}

    </div>
  );
}
