"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";

const categories = ["Todos", "Websites", "Aplicações", "Plataformas", "Sistemas"];

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = projectsData.filter((item) => {
    if (activeCategory === "Todos") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="space-y-10">
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
                : "bg-[#111827] text-slate-400 hover:text-white border border-blue-900/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const isRealProject = Boolean(project.liveUrl);

          return (
            <div
              key={project.id}
              id={project.id}
              className={`group rounded-3xl bg-[#111827] border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-blue-800/60 hover:shadow-2xl hover:shadow-black/60 ${
                isRealProject
                  ? "border-emerald-500/30"
                  : "border-blue-900/40"
              }`}
            >
              {/* Visual Header / Thumbnail */}
              <div className="relative h-44 sm:h-56 bg-[#0A0D14] flex items-center justify-center overflow-hidden border-b border-blue-900/30">
                {project.imageUrl ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="relative z-10 w-full max-w-xs rounded-2xl bg-[#1E2638] border border-blue-900/40 p-4 shadow-lg group-hover:scale-105 transition-transform">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-blue-900/30">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                      <span className="text-[9px] font-mono text-slate-400">{project.division}</span>
                    </div>
                    <div className="w-3/4 h-2 bg-white/10 rounded-full mb-1.5" />
                    <div className="w-1/2 h-1.5 bg-white/5 rounded-full" />
                  </div>
                )}

                <span
                  className={`absolute top-3 right-3 z-20 text-[9px] font-mono font-medium px-2.5 py-1 rounded-full shadow-md border ${
                    isRealProject
                      ? "bg-emerald-950/90 text-emerald-400 border-emerald-500/40"
                      : "bg-[#0A0D14]/90 text-slate-400 border-blue-900/40"
                  }`}
                >
                  {project.tag}
                </span>
              </div>

              {/* Information */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-medium text-blue-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{project.division}</span>
                  </div>

                  <h3 className="font-sora text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-inter mb-4">
                    {project.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-1.5 pt-3 border-t border-blue-900/30 mb-4">
                    <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider block">
                      Entregáveis:
                    </span>
                    {project.deliverables.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & CTA */}
                <div className="pt-3 border-t border-blue-900/30 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#0A0D14] border border-blue-900/30 text-slate-400"
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
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md"
                      >
                        <span>Ver ao Vivo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={`/orcamento?projeto=${encodeURIComponent(project.title)}`}
                        className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-full text-xs font-semibold text-slate-300 bg-[#0A0D14] border border-blue-900/40 hover:border-blue-800/60 hover:text-white transition-colors"
                      >
                        <span>Detalhes</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    )}

                    <Link
                      href={`/orcamento?projeto=${encodeURIComponent(project.title)}`}
                      className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-full text-xs font-semibold text-black bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md"
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
