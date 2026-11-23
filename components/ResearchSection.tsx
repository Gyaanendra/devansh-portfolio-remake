'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, FileText, CheckCircle2, BookOpen, ShieldCheck } from 'lucide-react';
import { publications } from '@/data';

export default function ResearchSection() {
  return (
    <section id="research" className="relative w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-14 max-w-[1720px] mx-auto">
      
      {/* ── 01. EDITORIAL HEADER WITH CORAL '+' MARKERS (Reference Match) ── */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#ff3b20] uppercase">
            04 // RESEARCH &amp; CITATIONS
          </span>
          <span className="text-[#ff3b20] font-black text-sm">+</span>
        </div>

        {/* Big Bold Swiss Typographic Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-black dark:text-white uppercase tracking-tight leading-[1.08] max-w-5xl">
          REVISIONS ISSUED <span className="text-[#ff3b20] font-light mx-2">+</span> 
          FIRST-AUTHOR MANUSCRIPTS <span className="text-[#ff3b20] font-light mx-2">+</span> 
          IEEE CITATIONS
        </h2>
        <p className="font-mono text-xs sm:text-sm text-black/60 dark:text-white/60 uppercase tracking-widest mt-4 max-w-3xl leading-relaxed">
          FORMAL UNCERTAINTY QUANTIFICATION <span className="text-[#ff3b20]">+</span> 
          HIGH-THROUGHPUT ML DECISIONING <span className="text-[#ff3b20]">+</span> 
          PUBLISHED PHYSICAL SYSTEMS
        </p>
      </div>

      {/* ── 02. HERO COMPOSITION: GIANT RED 'RESEARCH' OVERLAPPING B&W SCHEMATICS (Exact Reference Match) ── */}
      <div className="relative w-full mb-16 sm:mb-20 overflow-hidden border border-black/15 dark:border-white/15 bg-black/[0.015] dark:bg-white/[0.015] p-4 sm:p-6 lg:p-8">
        
        {/* Top Tag / Pill Button (Reference Match: "ЗАБРОНИРОВАТЬ") */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <a
            href="https://mari-alpha.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-black/20 dark:border-white/20 bg-white dark:bg-[#111114] text-xs font-mono font-bold uppercase tracking-widest text-black dark:text-white hover:border-[#ff3b20] hover:text-[#ff3b20] transition-all shadow-sm"
          >
            <span>PRIMARY INQUIRY // TARGETING IEEE TDSC</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ff3b20]" />
          </a>
        </div>

        {/* Dual Visual Image/Schematic Grid */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 min-h-[340px] sm:min-h-[420px] lg:min-h-[480px]">
          
          {/* Visual Panel 1: Staged MARI Uncertainty Schematic */}
          <div className="relative w-full h-full min-h-[220px] sm:min-h-[300px] bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 overflow-hidden flex flex-col justify-between p-5">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-black/50 dark:text-white/50 uppercase z-10">
              <span>FIG. A // 284,807 TXNS</span>
              <span className="px-2 py-0.5 border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5">
                [FRAME // 600 × 420 · 4:3]
              </span>
            </div>

            {/* Abstract Wireframe Neural Router in Panel 1 */}
            <div className="my-auto py-6 flex items-center justify-center opacity-75 grayscale contrast-125">
              <svg className="w-full max-w-[360px] h-36" viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="70" r="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="50" cy="70" r="16" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="70" r="4" fill="currentColor" />
                <text x="50" y="74" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="bold">INPUT</text>

                {/* Routing Lines */}
                <line x1="78" y1="70" x2="140" y2="35" stroke="currentColor" strokeWidth="1.5" />
                <line x1="78" y1="70" x2="140" y2="70" stroke="currentColor" strokeWidth="1.5" />
                <line x1="78" y1="70" x2="140" y2="105" stroke="currentColor" strokeWidth="1.5" />

                {/* Middle Nodes */}
                <rect x="140" y="20" width="70" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <text x="175" y="38" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace">XGB ROUTER</text>

                <rect x="140" y="55" width="70" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <text x="175" y="73" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace">CALIB SVM</text>

                <rect x="140" y="90" width="70" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <text x="175" y="108" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace">D-S FUSION</text>

                {/* Output Lines to Deferral */}
                <line x1="210" y1="35" x2="270" y2="70" stroke="currentColor" strokeWidth="1.5" />
                <line x1="210" y1="70" x2="270" y2="70" stroke="currentColor" strokeWidth="1.5" />
                <line x1="210" y1="105" x2="270" y2="70" stroke="currentColor" strokeWidth="1.5" />

                <circle cx="295" cy="70" r="25" stroke="#ff3b20" strokeWidth="2" fill="#ff3b20" fillOpacity="0.1" />
                <circle cx="295" cy="70" r="5" fill="#ff3b20" />
                <text x="295" y="73" textAnchor="middle" fill="#ff3b20" fontSize="7" fontFamily="monospace" fontWeight="bold">100% DECLINE</text>
              </svg>
            </div>

            <div className="text-[10px] font-mono tracking-wider text-black/60 dark:text-white/60 uppercase z-10">
              MARI UNCERTAINTY FRAMEWORK // SUB-100MS LATENCY
            </div>
          </div>

          {/* Visual Panel 2: Theoretical Physical Models / Publications */}
          <div className="relative w-full h-full min-h-[220px] sm:min-h-[300px] bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 overflow-hidden flex flex-col justify-between p-5">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-black/50 dark:text-white/50 uppercase z-10">
              <span>FIG. B // PHYSICAL SYSTEMS</span>
              <span className="px-2 py-0.5 border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5">
                [FRAME // 600 × 420 · 4:3]
              </span>
            </div>

            {/* Cosmological / Gait Coordinate Grid in Panel 2 */}
            <div className="my-auto py-6 flex items-center justify-center opacity-75 grayscale contrast-125">
              <svg className="w-full max-w-[360px] h-36" viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="180" cy="70" r="56" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="180" cy="70" r="38" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="180" cy="70" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="180" cy="70" r="4" fill="currentColor" />

                {/* Coordinate Crosshairs */}
                <line x1="80" y1="70" x2="280" y2="70" stroke="currentColor" strokeWidth="0.75" />
                <line x1="180" y1="10" x2="180" y2="130" stroke="currentColor" strokeWidth="0.75" />

                {/* Perimeter Orbit Markers */}
                <circle cx="218" cy="70" r="3" fill="#ff3b20" />
                <circle cx="180" cy="32" r="3" fill="#ff3b20" />
                <circle cx="142" cy="70" r="3" fill="#ff3b20" />
                <circle cx="180" cy="108" r="3" fill="#ff3b20" />
              </svg>
            </div>

            <div className="text-[10px] font-mono tracking-wider text-black/60 dark:text-white/60 uppercase z-10">
              SIMPLY UNIVERSE &amp; BIOMETRIC GAIT REVIEW
            </div>
          </div>

          {/* ── GIANT BOLD RED OVERLAPPING WORD: "RESEARCH" (Exact Reference Match) ── */}
          <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center overflow-hidden">
            <span className="text-[72px] sm:text-[110px] md:text-[135px] lg:text-[160px] xl:text-[195px] font-black text-[#ff3b20] tracking-[-0.05em] uppercase leading-none select-none drop-shadow-[0_12px_24px_rgba(255,59,32,0.25)] opacity-95">
              RESEARCH
            </span>
          </div>
        </div>
      </div>

      {/* ── 03. THE 4-CORNER RESONANCE ARCHITECTURAL CARD (Reference Match: "ЧТО ВКЛЮЧЕНО +") ── */}
      <div className="mb-16 sm:mb-20">
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-black dark:text-white">
            WHAT&apos;S PUBLISHED
          </span>
          <span className="text-[#ff3b20] font-black text-sm">+</span>
        </div>

        {/* 4-Corner Box with Abstract Red Geometric Lissajous Loop in Center */}
        <div className="relative w-full border border-black/15 dark:border-white/15 bg-white dark:bg-[#111114] p-8 sm:p-12 lg:p-16 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between">
          
          {/* Top Row: Corners 1 & 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 relative z-10">
            {/* Top-Left */}
            <div className="max-w-md">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-black dark:text-white uppercase block mb-1">
                FIRST-AUTHOR // IEEE TDSC
              </span>
              <p className="font-sans text-xs sm:text-[13px] text-black/65 dark:text-white/65 leading-relaxed">
                Staged uncertainty-aware framework routing 284,807 transactions. Achieved 100% DECLINE precision and 100% automation rate at sub-100ms inference.
              </p>
            </div>

            {/* Top-Right */}
            <div className="max-w-md sm:text-right sm:ml-auto">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-black dark:text-white uppercase block mb-1">
                CO-AUTHOR // IEEE INTERSYS 2026
              </span>
              <p className="font-sans text-xs sm:text-[13px] text-black/65 dark:text-white/65 leading-relaxed">
                Comparative survey analyzing skeleton-based vs sensor-signal human pose estimation for clinical and biometric gait assessment.
              </p>
            </div>
          </div>

          {/* Center Abstract Red Geometric Wireframe Loop (Exact Reference Match) */}
          <div className="my-8 sm:my-12 flex items-center justify-center relative z-0 pointer-events-none">
            <svg className="w-56 sm:w-72 md:w-96 h-24 sm:h-32" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Twin Elliptical Lissajous / Resonance Figure */}
              <ellipse cx="160" cy="60" rx="120" ry="42" stroke="#ff3b20" strokeWidth="1.75" transform="rotate(-10 160 60)" opacity="0.85" />
              <ellipse cx="160" cy="60" rx="120" ry="42" stroke="#ff3b20" strokeWidth="1.75" transform="rotate(10 160 60)" opacity="0.85" />
              <ellipse cx="160" cy="60" rx="95" ry="30" stroke="#ff3b20" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              <circle cx="160" cy="60" r="3.5" fill="#ff3b20" />
            </svg>
          </div>

          {/* Bottom Row: Corners 3 & 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 relative z-10">
            {/* Bottom-Left */}
            <div className="max-w-md">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-black dark:text-white uppercase block mb-1">
                PUBLISHED BOOK // POTHI
              </span>
              <p className="font-sans text-xs sm:text-[13px] text-black/65 dark:text-white/65 leading-relaxed">
                Co-authored &quot;Simply Universe&quot;. Systemic breakdown of cosmological models, physical bounds, and theoretical astrophysics principles.
              </p>
            </div>

            {/* Bottom-Right */}
            <div className="max-w-md sm:text-right sm:ml-auto">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-black dark:text-white uppercase block mb-1">
                PROFESSIONAL // IBM &amp; PACKT
              </span>
              <p className="font-sans text-xs sm:text-[13px] text-black/65 dark:text-white/65 leading-relaxed">
                IBM Machine Learning Professional validation and Packt FastAPI Distributed Asynchronous Backend architecture specializations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 04. EDITORIAL MANUSCRIPTS & CITATIONS LIST ── */}
      <div className="space-y-4 sm:space-y-6">
        {publications.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="group p-6 sm:p-8 bg-white dark:bg-[#111114] border border-black/15 dark:border-white/15 hover:border-[#ff3b20] transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-2 font-mono text-[10.5px] uppercase tracking-wider">
                <span className="font-bold text-[#ff3b20]">{item.number} // {item.badge}</span>
                <span className="text-black/30 dark:text-white/30">·</span>
                <span className="text-black/55 dark:text-white/55">{item.status}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white tracking-tight group-hover:text-[#ff3b20] transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-black/70 dark:text-white/70 leading-relaxed font-sans max-w-4xl mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[9.5px] font-mono tracking-wider uppercase bg-black/[0.04] dark:bg-white/[0.06] text-black/60 dark:text-white/60 rounded-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:self-center">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-black/20 dark:border-white/20 font-mono text-xs uppercase tracking-wider text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all whitespace-nowrap group-hover:border-black dark:group-hover:border-white"
              >
                <span>{item.linkText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
