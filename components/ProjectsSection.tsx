'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
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

  // Prioritize MARI and CryptoFlow as the top 2 flagship showcases
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.id === 'mari') return -1;
    if (b.id === 'mari') return 1;
    if (a.id === 'cryptoflow') return -1;
    if (b.id === 'cryptoflow') return 1;
    return 0;
  });

  const filteredProjects = sortedProjects.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'FLAGSHIP') return p.featured;
    if (filter === 'AI & ML') return p.category === 'AI & ML';
    if (filter === 'CRYPTO') return p.category === 'CRYPTOGRAPHY';
    if (filter === 'MOBILE & GIS') return p.category === 'MOBILE & GIS';
    return true;
  });

  const topTwoProjects = filteredProjects.slice(0, 2);
  const remainingProjects = filteredProjects.slice(2);

  const categories: Array<'ALL' | 'FLAGSHIP' | 'AI & ML' | 'CRYPTO' | 'MOBILE & GIS'> = [
    'ALL',
    'FLAGSHIP',
    'AI & ML',
    'CRYPTO',
    'MOBILE & GIS',
  ];

  return (
    <section id="work" className="relative w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-14 max-w-[1720px] mx-auto select-none">
      
      {/* ── 01. SECTION HEADER WITH CORAL '+' MARKERS ── */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16 sm:mb-20">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#ff3b20] uppercase">
              02 // SELECTED WORK — PRODUCTION ARCHITECTURES
            </span>
            <span className="text-[#ff3b20] font-black text-sm">+</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-black dark:text-white uppercase leading-[1.08]">
            BUILT, TESTED, SHIPPED <span className="text-[#ff3b20] font-light mx-2">+</span> DETERMINISTIC TOOLS
          </h2>
          <p className="text-xs sm:text-sm text-black/60 dark:text-white/60 font-mono mt-3 max-w-2xl leading-relaxed uppercase tracking-wider">
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

      {/* ═══════════════════════════════════════════════════════════════
          02. TOP 2 PROJECTS — EDITORIAL STAGGERED LAYOUT (IMAGE 1 STYLE)
          ═══════════════════════════════════════════════════════════════ */}
      <div className="space-y-24 sm:space-y-32 mb-28 sm:mb-36">
        
        {/* ── PROJECT 01: MARI (Left: Editorial Details, Right: Visual Frame) ── */}
        {topTwoProjects[0] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black dark:text-white">
                  01.
                </span>
                <span className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-black/85 dark:text-white/85">
                  {topTwoProjects[0].name.split('—')[0].trim()}
                </span>
              </div>

              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#ff3b20] uppercase tracking-[0.2em] mb-4">
                {topTwoProjects[0].subtitle} // {topTwoProjects[0].category}
              </span>

              <p className="font-sans text-xs sm:text-sm text-black/75 dark:text-white/75 leading-relaxed mb-6 text-justify">
                {topTwoProjects[0].specs[0]}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-3 bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 font-mono">
                {topTwoProjects[0].metrics.map((m, mIdx) => (
                  <div key={mIdx} className="flex flex-col">
                    <span className="font-bold text-sm text-black dark:text-white">
                      {m.value}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {topTwoProjects[0].tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[9.5px] font-mono tracking-wider uppercase bg-black/[0.04] dark:bg-white/[0.06] text-black/70 dark:text-white/70 rounded-[2px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Link with Coral Line (Exact Image 1 Style: ────── VIEW PROJECT) */}
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-[2px] bg-[#ff3b20]" />
                {topTwoProjects[0].demo && (
                  <a
                    href={topTwoProjects[0].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff3b20] hover:underline flex items-center gap-1.5"
                  >
                    <span>VIEW LIVE DEPLOYMENT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {topTwoProjects[0].code && (
                  <a
                    href={topTwoProjects[0].code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors ml-2"
                  >
                    SOURCE CODE ↗
                  </a>
                )}
              </div>
            </div>

            {/* Right Large Visual Frame */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] bg-black/[0.025] dark:bg-white/[0.025] border border-black/15 dark:border-white/15 overflow-hidden p-4 sm:p-6 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-center justify-between text-[9.5px] font-mono tracking-widest text-black/50 dark:text-white/50 uppercase z-10">
                  <span>MARI // UNCERTAINTY ARCHITECTURE</span>
                  <span className="px-2 py-0.5 border border-black/15 dark:border-white/15 bg-white/80 dark:bg-black/80">
                    [FRAME // 720 × 450 · 16:10]
                  </span>
                </div>

                {/* Staged Neural Routing Wireframe Diagram in Frame 1 */}
                <div className="my-auto py-6 flex items-center justify-center opacity-85">
                  <svg className="w-full max-w-[480px] h-48" viewBox="0 0 480 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Layer 1: Input */}
                    <rect x="20" y="70" width="80" height="40" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="60" y="88" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" fontWeight="bold">INPUT TXN</text>
                    <text x="60" y="100" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" opacity="0.6">284K+ POOL</text>

                    {/* Routing Splines to 3 Stages */}
                    <path d="M 100 90 C 130 90, 140 40, 170 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M 100 90 L 170 90" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M 100 90 C 130 90, 140 140, 170 140" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Stage Boxes */}
                    <rect x="170" y="20" width="110" height="40" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="225" y="38" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" fontWeight="bold">V1: XGB ENSEMBLE</text>
                    <text x="225" y="50" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" opacity="0.6">ABSTENTION ROUTER</text>

                    <rect x="170" y="70" width="110" height="40" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="225" y="88" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" fontWeight="bold">V2: CALIB SVM</text>
                    <text x="225" y="100" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" opacity="0.6">EPISTEMIC OPINION</text>

                    <rect x="170" y="120" width="110" height="40" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="225" y="138" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" fontWeight="bold">V3: D-S FUSION</text>
                    <text x="225" y="150" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" opacity="0.6">3 EVIDENCE SOURCES</text>

                    {/* Convergence to 100% DECLINE Terminal */}
                    <path d="M 280 40 C 315 40, 325 90, 360 90" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M 280 90 L 360 90" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M 280 140 C 315 140, 325 90, 360 90" stroke="currentColor" strokeWidth="1.5" />

                    <rect x="360" y="65" width="100" height="50" rx="2" stroke="#ff3b20" strokeWidth="2" fill="#ff3b20" fillOpacity="0.08" />
                    <text x="410" y="87" textAnchor="middle" fill="#ff3b20" fontSize="9" fontFamily="monospace" fontWeight="bold">100% DECLINE</text>
                    <text x="410" y="101" textAnchor="middle" fill="#ff3b20" fontSize="7.5" fontFamily="monospace">ZERO FALSE BLOCKS</text>
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[9.5px] font-mono text-black/60 dark:text-white/60 uppercase z-10 pt-2 border-t border-black/[0.08] dark:border-white/[0.08]">
                  <span>SUB-100MS INFERENCE LATENCY</span>
                  <span>100% AUTOMATION RATE</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── PROJECT 02: CRYPTOFLOW (Inverted Layout! Left: Visual Frame, Right: Editorial Details) ── */}
        {topTwoProjects[1] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center"
          >
            {/* Left Large Visual Frame (Inverted!) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative aspect-[16/10] bg-black/[0.025] dark:bg-white/[0.025] border border-black/15 dark:border-white/15 overflow-hidden p-4 sm:p-6 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-center justify-between text-[9.5px] font-mono tracking-widest text-black/50 dark:text-white/50 uppercase z-10">
                  <span>CRYPTOFLOW // DICOM ENVELOPE</span>
                  <span className="px-2 py-0.5 border border-black/15 dark:border-white/15 bg-white/80 dark:bg-black/80">
                    [FRAME // 720 × 450 · 16:10]
                  </span>
                </div>

                {/* Cryptographic Binary Container & HMAC Binding Diagram in Frame 2 */}
                <div className="my-auto py-6 flex items-center justify-center opacity-85">
                  <svg className="w-full max-w-[480px] h-48" viewBox="0 0 480 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Multimodal Inputs */}
                    <rect x="20" y="30" width="75" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="57" y="48" textAnchor="middle" fill="currentColor" fontSize="7.5" fontFamily="monospace">DICOM IMAGE</text>

                    <rect x="20" y="75" width="75" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="57" y="93" textAnchor="middle" fill="currentColor" fontSize="7.5" fontFamily="monospace">EHR PAYLOAD</text>

                    <rect x="20" y="120" width="75" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="57" y="138" textAnchor="middle" fill="currentColor" fontSize="7.5" fontFamily="monospace">CLINICAL DOC</text>

                    {/* Middle Cryptographic Pipeline Stages */}
                    <line x1="95" y1="45" x2="155" y2="90" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="95" y1="90" x2="155" y2="90" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="95" y1="135" x2="155" y2="90" stroke="currentColor" strokeWidth="1.5" />

                    <rect x="155" y="65" width="130" height="50" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <text x="220" y="86" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" fontWeight="bold">AES-256-GCM + HMAC</text>
                    <text x="220" y="100" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" opacity="0.6">120+ MB/S ENCRYPTION</text>

                    {/* Threat Vector Barrier */}
                    <line x1="285" y1="90" x2="345" y2="90" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="315" y1="30" x2="315" y2="150" stroke="#ff3b20" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                    <text x="315" y="24" textAnchor="middle" fill="#ff3b20" fontSize="7" fontFamily="monospace">7 ATTACK VECTORS BLOCKED</text>

                    {/* Sealed Binary Container */}
                    <rect x="345" y="65" width="115" height="50" rx="2" stroke="#ff3b20" strokeWidth="2" fill="#ff3b20" fillOpacity="0.08" />
                    <text x="402" y="87" textAnchor="middle" fill="#ff3b20" fontSize="8.5" fontFamily="monospace" fontWeight="bold">SEALED CONTAINER</text>
                    <text x="402" y="101" textAnchor="middle" fill="#ff3b20" fontSize="7" fontFamily="monospace">&lt;0.1% STORAGE OVERHEAD</text>
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[9.5px] font-mono text-black/60 dark:text-white/60 uppercase z-10 pt-2 border-t border-black/[0.08] dark:border-white/[0.08]">
                  <span>CROSS-MODAL HMAC BINDING</span>
                  <span>RSA-OAEP DIGITAL ENVELOPE</span>
                </div>
              </div>
            </div>

            {/* Right Content Column (Inverted!) */}
            <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black dark:text-white">
                  02.
                </span>
                <span className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-black/85 dark:text-white/85">
                  {topTwoProjects[1].name.split('—')[0].trim()}
                </span>
              </div>

              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#ff3b20] uppercase tracking-[0.2em] mb-4">
                {topTwoProjects[1].subtitle} // {topTwoProjects[1].category}
              </span>

              <p className="font-sans text-xs sm:text-sm text-black/75 dark:text-white/75 leading-relaxed mb-6 text-justify">
                {topTwoProjects[1].specs[0]}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-3 bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 font-mono">
                {topTwoProjects[1].metrics.map((m, mIdx) => (
                  <div key={mIdx} className="flex flex-col">
                    <span className="font-bold text-sm text-black dark:text-white">
                      {m.value}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {topTwoProjects[1].tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[9.5px] font-mono tracking-wider uppercase bg-black/[0.04] dark:bg-white/[0.06] text-black/70 dark:text-white/70 rounded-[2px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Link with Coral Line (Exact Image 1 Style: ────── VIEW PROJECT) */}
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-[2px] bg-[#ff3b20]" />
                {topTwoProjects[1].demo && (
                  <a
                    href={topTwoProjects[1].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff3b20] hover:underline flex items-center gap-1.5"
                  >
                    <span>VIEW LIVE PLATFORM</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {topTwoProjects[1].code && (
                  <a
                    href={topTwoProjects[1].code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors ml-2"
                  >
                    SOURCE CODE ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

      </div>

      {/* ═══════════════════════════════════════════════════════════════
          03. PROJECTS AFTER THAT — TABULAR 3-COLUMN ARCHITECTURAL ROWS (IMAGE 2 STYLE)
          ═══════════════════════════════════════════════════════════════ */}
      {remainingProjects.length > 0 && (
        <div className="w-full">
          {/* Section Transition Header */}
          <div className="flex items-center justify-between pb-4 mb-2 border-b border-black/15 dark:border-white/15">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-black dark:text-white">
                ADDITIONAL ARCHITECTURAL INDEX
              </span>
              <span className="text-[#ff3b20] font-black text-sm">+</span>
            </div>
            <span className="font-mono text-[10px] text-black/50 dark:text-white/50 uppercase">
              {remainingProjects.length} SYSTEMS DOCUMENTED
            </span>
          </div>

          {/* 3-Column Rows (Exact Image 2 Style: Spec Category | Title & Text | B&W Photo Frame) */}
          <div className="divide-y divide-black/15 dark:divide-white/15">
            {remainingProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start group"
              >
                {/* Column 1: Category & Index (approx 3 cols) */}
                <div className="md:col-span-3">
                  <span className="font-mono text-xs font-bold text-[#ff3b20] tracking-wider uppercase block mb-1">
                    0{idx + 3} // {project.category}
                  </span>
                  <span className="font-mono text-[11px] text-black/45 dark:text-white/45 uppercase tracking-widest block">
                    {project.subtitle}
                  </span>
                  <div className="mt-4 hidden md:block">
                    <span className="text-[9.5px] font-mono px-2 py-0.5 border border-black/15 dark:border-white/15 text-black/55 dark:text-white/55 uppercase">
                      {project.featured ? 'FLAGSHIP DEPLOY' : 'PRODUCTION SYSTEM'}
                    </span>
                  </div>
                </div>

                {/* Column 2: Title, Description, Metrics, Action Link (approx 6 cols) */}
                <div className="md:col-span-6 pr-0 md:pr-4">
                  <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white tracking-tight group-hover:text-[#ff3b20] transition-colors mb-2">
                    {project.name}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-[13px] text-black/75 dark:text-white/75 leading-relaxed mb-4 text-justify">
                    {project.specs[0]}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[9px] font-mono uppercase bg-black/[0.04] dark:bg-white/[0.06] text-black/60 dark:text-white/60 rounded-[2px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link (Exact Image 2 Style: "LEARN MORE" / "LIVE DEMO") */}
                  <div className="flex items-center gap-5">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:text-[#ff3b20] transition-colors inline-flex items-center gap-1.5 border-b border-black dark:border-white hover:border-[#ff3b20] pb-0.5"
                      >
                        <span>LEARN MORE / LIVE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#ff3b20]" />
                      </a>
                    ) : (
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-black/40 dark:text-white/40">
                        INTERNAL ARCHITECTURE
                      </span>
                    )}

                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs uppercase tracking-wider text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        <GithubIcon className="w-3 h-3" />
                        <span>SOURCE ↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Column 3: B&W Visual Frame (approx 3 cols) */}
                <div className="md:col-span-3">
                  <div className="relative aspect-[4/3] bg-black/[0.03] dark:bg-white/[0.03] border border-black/15 dark:border-white/15 overflow-hidden p-3 flex flex-col justify-between group-hover:border-[#ff3b20] transition-colors">
                    <div className="flex items-center justify-between text-[8.5px] font-mono text-black/45 dark:text-white/45 uppercase z-10">
                      <span>{project.category}</span>
                      <span>[400 × 300 · 4:3]</span>
                    </div>

                    {/* Abstract Technical Vector Pattern for thumbnail */}
                    <div className="my-auto py-2 flex items-center justify-center opacity-65">
                      <svg className="w-full max-w-[180px] h-20" viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="160" height="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                        <circle cx="90" cy="40" r="22" stroke="currentColor" strokeWidth="1.25" />
                        <line x1="10" y1="40" x2="170" y2="40" stroke="currentColor" strokeWidth="0.75" />
                        <line x1="90" y1="10" x2="90" y2="70" stroke="currentColor" strokeWidth="0.75" />
                        <circle cx="90" cy="40" r="3" fill="#ff3b20" />
                      </svg>
                    </div>

                    <div className="text-[9px] font-mono text-black/60 dark:text-white/60 uppercase truncate z-10">
                      {project.name.split('—')[0].trim()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}
