"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, MessageSquare, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function BudgetForm() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Site Pronto (Turnkey)",
    specificItem: "",
    timeline: "Imediato (1 a 2 semanas)",
    budgetRange: "A definir em conjunto",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Auto-fill from query parameters
  useEffect(() => {
    const produtoParam = searchParams.get("produto");
    const servicoParam = searchParams.get("servico");
    const projetoParam = searchParams.get("projeto");

    if (produtoParam) {
      setFormData((prev) => ({
        ...prev,
        projectType: "Aquisição de Produto / Site Pronto",
        specificItem: produtoParam,
        details: `Interesse no produto / modelo: ${produtoParam}`,
      }));
    } else if (servicoParam) {
      setFormData((prev) => ({
        ...prev,
        projectType: "Desenvolvimento Web Sob Medida",
        specificItem: servicoParam,
        details: `Interesse no serviço: ${servicoParam}`,
      }));
    } else if (projetoParam) {
      setFormData((prev) => ({
        ...prev,
        projectType: "Projeto Sob Medida",
        specificItem: projetoParam,
        details: `Interesse num projeto similar a: ${projetoParam}`,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `*Solicitação de Orçamento - VEXA Technology Group*\n\n` +
      `*Nome:* ${formData.name || "Não informado"}\n` +
      `*Email:* ${formData.email || "Não informado"}\n` +
      `*WhatsApp:* ${formData.phone || "Não informado"}\n` +
      `*Empresa:* ${formData.company || "Particular"}\n` +
      `*Tipo de Projeto:* ${formData.projectType}\n` +
      `*Item/Modelo:* ${formData.specificItem || "Geral"}\n` +
      `*Prazo Pretendido:* ${formData.timeline}\n` +
      `*Investimento:* ${formData.budgetRange}\n` +
      `*Detalhes:* ${formData.details || "Gostaria de receber uma proposta comercial da VEXA."}`
    );

    return `https://wa.me/258872024095?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.details.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, preencha os campos obrigatórios (Nome, Email e Detalhes do Projeto).");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setStatus("error");
      setErrorMessage("Por favor, insira um endereço de email válido.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-[#171B2B]/80 border border-white/[0.08] p-4 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {status === "success" ? (
        <div className="py-8 sm:py-12 text-center space-y-5 sm:space-y-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-400/10">
            <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="font-sora text-xl sm:text-2xl font-bold text-[#F4F5FA]">
              Solicitação Recebida com Sucesso!
            </h3>
            <p className="text-xs sm:text-sm text-[#9298AA] max-w-lg mx-auto">
              Recebemos os detalhes do seu projeto. A nossa equipa técnica vai avaliar as necessidades e enviar uma proposta detalhada para o email informado em até 24 horas úteis.
            </p>
          </div>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Acelerar Atendimento via WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs font-semibold text-[#F4F5FA] bg-[#0B0D12] border border-white/[0.1] hover:border-white/[0.2] transition-colors"
            >
              Criar Nova Solicitação
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8">
          
          {status === "error" && (
            <div className="p-3 sm:p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Step 1: Identification (Compact 2-Columns on Mobile) */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 pb-1.5 sm:pb-2 border-b border-white/[0.06]">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-[#7657F6]/20 text-[#7657F6] text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-sora text-xs sm:text-sm font-semibold text-[#F4F5FA] uppercase tracking-wider">
                Dados de Contacto
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {/* Nome */}
              <div className="space-y-1">
                <label htmlFor="name" className="text-[11px] sm:text-xs font-semibold text-[#F4F5FA] truncate block">
                  Nome Completo <span className="text-[#7657F6]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] outline-none transition-all placeholder-[#9298AA]/40"
                />
              </div>

              {/* Telefone */}
              <div className="space-y-1">
                <label htmlFor="phone" className="text-[11px] sm:text-xs font-semibold text-[#F4F5FA] truncate block">
                  WhatsApp / Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+258 87 202 4095"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] outline-none transition-all placeholder-[#9298AA]/40"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label htmlFor="email" className="text-[11px] sm:text-xs font-semibold text-[#F4F5FA] truncate block">
                  Email <span className="text-[#7657F6]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] outline-none transition-all placeholder-[#9298AA]/40"
                />
              </div>

              {/* Empresa */}
              <div className="space-y-1">
                <label htmlFor="company" className="text-[11px] sm:text-xs font-semibold text-[#F4F5FA] truncate block">
                  Empresa <span className="text-[#9298AA] text-[9px] font-normal">(Opcional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome do negócio"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] outline-none transition-all placeholder-[#9298AA]/40"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Project Nature (Compact 2-Columns on Mobile) */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 pb-1.5 sm:pb-2 border-b border-white/[0.06]">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-[#26B8F2]/20 text-[#26B8F2] text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-sora text-xs sm:text-sm font-semibold text-[#F4F5FA] uppercase tracking-wider">
                Tipo de Projeto & Requisitos
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="space-y-1">
                <label htmlFor="projectType" className="text-[11px] sm:text-xs font-semibold text-[#F4F5FA] truncate block">
                  Tipo de Solução
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-2.5 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] outline-none cursor-pointer truncate"
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
                <label htmlFor="specificItem" className="text-[11px] sm:text-xs font-semibold text-[#F4F5FA] truncate block">
                  Modelo ou Serviço
                </label>
                <input
                  id="specificItem"
                  name="specificItem"
                  type="text"
                  value={formData.specificItem}
                  onChange={handleChange}
                  placeholder="Ex: Wandra, Lara..."
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] outline-none placeholder-[#9298AA]/40 truncate"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="timeline" className="text-[11px] sm:text-xs font-semibold text-[#F4F5FA] truncate block">
                  Previsão de Início
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-2.5 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] outline-none cursor-pointer truncate"
                >
                  <option value="Imediato (1 a 2 semanas)">Imediato (1-2 sem.)</option>
                  <option value="Em 1 mês">Em até 1 mês</option>
                  <option value="Apenas a planear / sem urgência">Sem urgência</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="budgetRange" className="text-[11px] sm:text-xs font-semibold text-[#F4F5FA] truncate block">
                  Investimento
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full px-2.5 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] outline-none cursor-pointer truncate"
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
          <div className="space-y-2.5 sm:space-y-4">
            <div className="flex items-center gap-2 pb-1.5 sm:pb-2 border-b border-white/[0.06]">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-emerald-400/20 text-emerald-400 text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-sora text-xs sm:text-sm font-semibold text-[#F4F5FA] uppercase tracking-wider">
                Detalhes & Objetivos do Projeto
              </h3>
            </div>

            <div className="space-y-1">
              <label htmlFor="details" className="text-[11px] sm:text-xs font-semibold text-[#F4F5FA] block">
                Descreva os seus objetivos ou referências <span className="text-[#7657F6]">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={3}
                value={formData.details}
                onChange={handleChange}
                placeholder="Conte-nos o que precisa: funcionalidades desejadas, prazos, referências..."
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#0B0D12] border border-white/[0.08] focus:border-[#7657F6] text-xs sm:text-sm text-[#F4F5FA] outline-none resize-none placeholder-[#9298AA]/40"
              />
            </div>
          </div>

          {/* Submission Buttons */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 sm:py-4 px-5 sm:px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#26B8F2] hover:opacity-95 shadow-xl shadow-[#7657F6]/30 disabled:opacity-50 transition-all cursor-pointer"
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 sm:py-4 px-5 sm:px-6 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enviar via WhatsApp</span>
            </a>
          </div>

        </form>
      )}

    </div>
  );
}
