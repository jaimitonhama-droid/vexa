"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FolderGit2, CheckCircle2, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";

const categories = ["Todos", "Websites", "Aplicações", "Plataformas", "Sistemas"];

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = projectsData.filter((item) => {
    if (activeCategory === "Todos") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="space-y-12">
      {/* Category filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeCategory === cat
                ? "bg-white text-black shadow-md"
                : "bg-[#171B2B] text-[#9298AA] hover:text-white border border-white/[0.08]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {filteredProjects.map((project) => {
          const isRealProject = Boolean(project.liveUrl);

          return (
            <div
              key={project.id}
              id={project.id}
              className={`group rounded-2xl bg-[#171B2B]/60 border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 ${
                isRealProject
                  ? "border-emerald-500/30 hover:border-emerald-400/60 ring-1 ring-emerald-500/20"
                  : "border-white/[0.08] hover:border-[#7657F6]/40"
              }`}
            >
              {/* Visual Header / Thumbnail - Full bleed fill */}
              <div className="relative h-40 sm:h-56 lg:h-60 bg-[#0B0D12] flex items-center justify-center overflow-hidden border-b border-white/[0.06]">
                {project.imageUrl ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12]/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <>
                    <div
                      className={`absolute -inset-8 bg-gradient-to-br ${project.accent} opacity-20 blur-2xl group-hover:opacity-35 transition-opacity`}
                    />
                    <div className="relative z-10 w-full max-w-xs rounded-xl bg-[#171B2B] border border-white/[0.1] p-3 shadow-lg group-hover:scale-105 transition-transform">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-white/20" />
                          <div className="w-2 h-2 rounded-full bg-white/20" />
                          <div className="w-2 h-2 rounded-full bg-white/20" />
                        </div>
                        <span className="text-[9px] font-mono text-[#9298AA]">{project.division}</span>
                      </div>
                      <div className="w-3/4 h-2 bg-white/10 rounded-full mb-1.5" />
                      <div className="w-1/2 h-1.5 bg-white/5 rounded-full" />
                    </div>
                  </>
                )}

                <span
                  className={`absolute top-3 right-3 z-20 text-[9px] font-mono font-medium px-2.5 py-1 rounded-full shadow-md border ${
                    isRealProject
                      ? "bg-emerald-950/80 text-emerald-400 border-emerald-500/40"
                      : "bg-[#0B0D12]/80 text-[#9298AA] border-white/[0.08]"
                  }`}
                >
                  {project.tag}
                </span>
              </div>

              {/* Information */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-medium text-[#26B8F2] uppercase">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#9298AA]">{project.division}</span>
                  </div>

                  <h3 className="font-sora text-xl font-bold text-[#F4F5FA] group-hover:text-white transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#9298AA] leading-relaxed font-inter mb-4">
                    {project.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-1.5 pt-3 border-t border-white/[0.06] mb-4">
                    <span className="text-[10px] font-sora font-semibold text-[#F4F5FA] uppercase tracking-wider block">
                      Entregáveis:
                    </span>
                    {project.deliverables.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-[#9298AA]">
                        <CheckCircle2 className="w-3 h-3 text-[#26B8F2] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & CTA */}
                <div className="pt-3 border-t border-white/[0.06] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0D12] border border-white/[0.06] text-[#9298AA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all"
                      >
                        <span>Ver ao Vivo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={`/orcamento?projeto=${encodeURIComponent(project.title)}`}
                        className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl text-xs font-semibold text-[#F4F5FA] bg-[#0B0D12] border border-white/[0.08] hover:border-white/[0.2] transition-colors"
                      >
                        <span>Detalhes</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    )}

                    <Link
                      href={`/orcamento?projeto=${encodeURIComponent(project.title)}`}
                      className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl text-xs font-semibold text-[#26B8F2] bg-[#26B8F2]/10 border border-[#26B8F2]/20 hover:bg-[#26B8F2]/20 transition-colors"
                    >
                      <span>Orçamento</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
