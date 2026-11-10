"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Como funciona o processo de desenvolvimento sob medida?",
    answer:
      "Iniciamos com um levantamento detalhado das suas necessidades e objetivos operacionais. Em seguida, desenhamos a interface e a arquitetura técnica para a sua aprovação. Após a validação, desenvolvemos o código em sprints com testes contínuos, culminando na publicação no seu domínio próprio com acompanhamento técnico.",
  },
  {
    question: "Os modelos e sites prontos (turnkey) já vêm prontos a funcionar?",
    answer:
      "Sim. Os modelos turnkey da VEXA (como as soluções para e-commerce, moda e cursos) são plataformas completas já funcionais. Nós configuramos o seu domínio próprio, personalizamos a identidade visual, cadastramos os seus produtos iniciais e integramos o seu WhatsApp e canais de pagamento locais.",
  },
  {
    question: "Quem é o proprietário do código e do domínio após a conclusão?",
    answer:
      "O cliente. Ao contrário de plataformas com planos fechados onde o cliente fica refém de assinaturas vitalícias, na VEXA o domínio, o código entregue e a base de dados pertencem integralmente à sua empresa.",
  },
  {
    question: "Qual é o prazo médio de entrega de um website ou aplicação?",
    answer:
      "Websites institucionais e modelos turnkey são entregues e configurados num prazo de 3 a 7 dias úteis. Projetos sob medida complexos ou aplicações SaaS variam entre 2 a 6 semanas, sempre com cronograma transparente acordado antes do início.",
  },
  {
    question: "Como posso obter uma proposta técnica e estimativa de investimento?",
    answer:
      "Pode preencher o nosso formulário de orçamento no site ou enviar uma mensagem direta pelo nosso WhatsApp oficial (+258 87 202 4095). A nossa equipa analisa os requisitos e envia uma proposta detalhada sem qualquer compromisso.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-[#0A0D14] border-t border-blue-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Editorial Styling */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <span className="w-8 h-[1px] bg-white/20" />
            <span className="flex items-center gap-1.5 text-blue-400">
              <HelpCircle className="w-3.5 h-3.5" />
              Dúvidas Frequentes
            </span>
            <span className="w-8 h-[1px] bg-white/20" />
          </div>

          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Perguntas mais <span className="text-gradient-silver">frequentes.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-inter max-w-xl mx-auto">
            Respostas transparentes sobre como desenhamos, construímos e entregamos os nossos produtos digitais e serviços.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-[#111827] border border-blue-900/40 overflow-hidden transition-all duration-200 hover:border-white/[0.18]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="font-sora text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#1E2638] border border-white/10 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-400" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-blue-900/20">
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-inter">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center pt-8 border-t border-blue-900/30 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-xs sm:text-sm text-slate-400">
            Tem alguma pergunta específica sobre o seu projeto?
          </span>
          <a
            href="https://wa.me/258872024095?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20os%20servi%C3%A7os%20da%20VEXA."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md"
          >
            <span>Falar no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

