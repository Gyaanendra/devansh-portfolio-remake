'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Terminal, Layers, Code2 } from 'lucide-react';
import { projects } from '@/data';

const GithubIcon = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'ALL' | 'FLAGSHIP' | 'AI & ML' | 'CRYPTO' | 'MOBILE & GIS'>('ALL');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'FLAGSHIP') return p.featured;
    if (filter === 'AI & ML') return p.category === 'AI & ML';
    if (filter === 'CRYPTO') return p.category === 'CRYPTOGRAPHY';
    if (filter === 'MOBILE & GIS') return p.category === 'MOBILE & GIS';
    return true;
  });

  const categories: Array<'ALL' | 'FLAGSHIP' | 'AI & ML' | 'CRYPTO' | 'MOBILE & GIS'> = [
    'ALL',
    'FLAGSHIP',
    'AI & ML',
    'CRYPTO',
    'MOBILE & GIS',
  ];

  return (
    <section id="work" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-[#ff3b20] font-bold uppercase">
            SELECTED WORK
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black dark:text-white mt-3 uppercase">
            Built, tested, shipped.
          </h2>
          <p className="text-base sm:text-lg text-black/60 dark:text-white/60 font-mono mt-3 max-w-2xl leading-relaxed">
            Staged uncertainty-aware fraud decisioning, institutional evaluation platforms, and multimodal cryptographic security pipelines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 text-[11px] font-mono tracking-wider uppercase transition-all border ${
                filter === cat
                  ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                  : 'bg-transparent text-black/60 dark:text-white/60 border-black/15 dark:border-white/15 hover:border-black/50 dark:hover:border-white/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {filteredProjects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="group relative flex flex-col justify-between p-7 sm:p-9 bg-white dark:bg-[#111114] border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            {/* Top Tag & Number */}
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-black/[0.06] dark:border-white/[0.06] pb-3 text-[11px] font-mono tracking-widest uppercase">
                <span className="font-bold text-[#ff3b20]">
                  {project.figure} // {project.category}
                </span>
                <span className="text-black/40 dark:text-white/40">
                  {project.featured ? 'FLAGSHIP' : 'SECONDARY'}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tight group-hover:text-[#ff3b20] transition-colors mb-2">
                {project.name}
              </h3>
              <p className="font-mono text-xs text-black/50 dark:text-white/50 uppercase tracking-wider mb-4">
                {project.subtitle}
              </p>

              {/* Tagline */}
              <p className="text-sm sm:text-base text-black/75 dark:text-white/75 leading-relaxed font-sans mb-6">
                {project.tagline}
              </p>

              {/* Metrics Grid */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-3 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex flex-col">
                      <span className="font-mono font-bold text-sm text-black dark:text-white">
                        {m.value}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Architectural Specs List */}
              <div className="space-y-2 mb-6 text-xs text-black/70 dark:text-white/70 leading-relaxed font-sans border-l-2 border-[#ff3b20] pl-3">
                {project.specs.map((spec, sIdx) => (
                  <p key={sIdx}>{spec}</p>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Tech Stack */}
            <div>
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-black/[0.04] dark:bg-white/[0.06] text-black/70 dark:text-white/70 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-medium uppercase tracking-wider hover:opacity-85 transition-opacity"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-black/20 dark:border-white/20 font-mono text-xs uppercase tracking-wider text-black dark:text-white hover:border-black dark:hover:border-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>SOURCE</span>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
