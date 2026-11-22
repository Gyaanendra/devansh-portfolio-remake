'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-14 max-w-[1720px] mx-auto border-t border-black/[0.08] dark:border-white/[0.08] select-none"
    >
      {/* ── 01. TECHNICAL METADATA HEADER (Matching Reference Image 2 Top) ── */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 mb-8 border-b border-black/10 dark:border-white/10 font-mono text-[10.5px] uppercase tracking-widest text-black/50 dark:text-white/50">
        <div className="flex flex-wrap items-center gap-3 font-semibold text-[#ff3b20]">
          <span>(SYSTEMS ARCHITECTURE)</span>
          <span>(APPLIED ML DECISIONING)</span>
          <span>(CRYPTOGRAPHIC INFRASTRUCTURE)</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-black dark:text-white font-bold">01 // ABOUT DEVANSH KUMAR</span>
          <span>|</span>
          <span>BENNETT UNIV // 2026.D</span>
        </div>
      </div>

      {/* ── 02. CORE EDITORIAL COMPOSITION (FUSING IMAGE 1 & IMAGE 2 DIRECTLY ON THE CANVAS) ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 border-b border-black/15 dark:border-white/15">
        
        {/* ── LEFT COLUMN: MULTI-LAYER PORTRAIT STACK (EXACT IMAGE 1 & 2 LAYERING) ── */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-auto lg:min-h-[660px] flex items-end justify-center overflow-hidden">
          
          {/* Layer 1: Solid Red Vertical Rectangle (Exact Reference Match) */}
          <div
            className="absolute top-0 right-0 bottom-0 w-[54%] bg-[#ff3b20] z-0"
            aria-hidden="true"
          />

          {/* Layer 2: White / Canvas Architectural Block in Top-Left (Exact Reference Match) */}
          <div
            className="absolute top-0 left-0 w-28 sm:w-36 lg:w-44 h-28 sm:h-36 lg:h-44 bg-[#f7f7f8] dark:bg-[#0c0c0e] border-b border-r border-black/15 dark:border-white/15 z-10 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-black/40 dark:text-white/40">
              SPEC // 01
            </span>
          </div>

          {/* Layer 3: High-Contrast Black & White Grayscale Cutout of Devansh (Exact Reference Match) */}
          <div className="relative z-20 w-full h-full flex items-end justify-center pointer-events-none">
            <Image
              src="/images/devansh-portrait-cutout-bw.png"
              alt="Devansh Kumar — Systems Architecture & Applied ML"
              width={800}
              height={1140}
              className="w-auto h-[92%] sm:h-[95%] lg:h-[98%] object-contain object-bottom filter grayscale contrast-125 brightness-[0.98] drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
              priority
            />
          </div>

          {/* Layer 4: Translucent Coral / Red Overlay Rectangle (Exact Reference Match) */}
          <div
            className="absolute top-[26%] sm:top-[28%] left-0 w-36 sm:w-48 lg:w-56 h-40 sm:h-52 lg:h-60 bg-[#ff3b20]/60 mix-blend-multiply dark:mix-blend-screen backdrop-blur-[1px] border border-[#ff3b20]/50 z-30 pointer-events-none"
            aria-hidden="true"
          />

          {/* Layer 5: Giant Bottom Overlapping Word across Photo Base (Image 2 Match) */}
          <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none overflow-hidden select-none">
            <span className="font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter text-white leading-none block px-4 pb-2 drop-shadow-lg">
              DEVANSH
            </span>
          </div>
        </div>

        {/* ── RIGHT COLUMN: BRUTALIST EDITORIAL GRID & CONDENSED TYPOGRAPHY ── */}
        <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-black/15 dark:border-white/15">
          
          {/* Top Headline Block (Image 2 Inspiration) */}
          <div className="p-7 sm:p-9 lg:p-12 border-b border-black/15 dark:border-white/15">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black dark:text-white uppercase tracking-tight leading-[1.05] mb-4">
              WELCOME TO DEVANSH KUMAR&apos;S WORLD
            </h2>
            <p className="font-mono text-xs sm:text-sm text-black/65 dark:text-white/65 leading-relaxed max-w-2xl">
              I construct deterministic computational tools that operate reliably under uncertainty. As a backend architect and applied ML engineer, my focus centers on uncertainty-aware fraud evaluation, medical cryptographic protocols, and sub-100ms distributed service pipelines.
            </p>
          </div>

          {/* Middle Split Row: Convallis Philosophy & Innovating For The (Image 1 Inspiration) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 border-b border-black/15 dark:border-white/15">
            {/* Column 1: Convallis / Systems Philosophy */}
            <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-black/15 dark:border-white/15 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-black dark:text-white block mb-2">
                  CONVALLIS // PHILOSOPHY
                </span>
                <p className="font-sans text-xs leading-relaxed text-black/75 dark:text-white/75 font-normal text-justify">
                  First-author of the MARI fraud framework targeting IEEE TDSC. Multi-stage uncertainty-aware architecture routing 284,807 transactions with 100% DECLINE precision and 86.73% recall at sub-100ms latency.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/[0.08] dark:border-white/[0.08] font-mono text-[9.5px] uppercase tracking-widest text-[#ff3b20] font-bold">
                IEEE TDSC RESEARCH // IN REVIEW
              </div>
            </div>

            {/* Column 2: Innovating For The / Leadership */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-black dark:text-white block mb-2">
                  INNOVATING FOR THE
                </span>
                <p className="font-sans text-xs leading-relaxed text-black/75 dark:text-white/75 font-normal text-justify">
                  Outgoing Chairperson of IEEE Student Branch (Bennett University, 2025–26). Directed a 100+ member vertical structure, secured ₹1.48L+ sponsorships, and led Global AI Summit 2.0 (3,500+ attendees).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/[0.08] dark:border-white/[0.08] font-mono text-[9.5px] uppercase tracking-widest text-black/50 dark:text-white/50">
                3RD PLACE IEEE UP BEST BRANCH 2025
              </div>
            </div>
          </div>

          {/* Bottom Row: Giant Condensed "FUTURE" Typography Grid (Exact Image 1 Match) */}
          <div className="relative w-full flex-1 min-h-[200px] sm:min-h-[260px] lg:min-h-[300px] grid grid-cols-12 overflow-hidden select-none">
            
            {/* Column A (Cols 1-3): Stacked "F" over "T" */}
            <div className="col-span-3 grid grid-rows-2 border-r border-black/15 dark:border-white/15">
              <div className="flex items-center justify-center p-2 border-b border-black/15 dark:border-white/15">
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black dark:text-white tracking-tighter leading-none">
                  F
                </span>
              </div>
              <div className="flex items-center justify-center p-2">
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black dark:text-white tracking-tighter leading-none">
                  T
                </span>
              </div>
            </div>

            {/* Column B (Cols 4-6): Giant Tall "U" Spanning Full Height */}
            <div className="col-span-3 flex items-center justify-center p-2 border-r border-black/15 dark:border-white/15">
              <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[160px] font-black text-black dark:text-white tracking-tighter leading-none">
                U
              </span>
            </div>

            {/* Column C (Cols 7-9): Giant Letter "R" */}
            <div className="col-span-3 flex items-center justify-center p-2 border-r border-black/15 dark:border-white/15">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black dark:text-white tracking-tighter leading-none">
                R
              </span>
            </div>

            {/* Column D (Cols 10-12): Giant Letter "E" */}
            <div className="col-span-3 flex items-center justify-center p-2">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black dark:text-white tracking-tighter leading-none">
                E
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 03. CHRONOLOGICAL TIMELINE (EXACT REFERENCE IMAGE 2 BOTTOM HALF) ── */}
      <div className="w-full pt-16 sm:pt-20">
        
        {/* Timeline Header (Image 2 Exact Layout) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-3 pb-6 border-b border-black/15 dark:border-white/15 mb-10">
          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-black dark:text-white uppercase tracking-tight">
              TIMELINE
            </h3>
            <p className="font-mono text-xs sm:text-[13px] text-black/55 dark:text-white/55 mt-2 max-w-xl">
              Based on verified engineering execution, institutional leadership, and peer-reviewed ML research pipelines.
            </p>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff3b20] font-bold">
            TYPICALLY, ACTIVE STAGES ITERATE SUB-100MS // 4 PHASES
          </span>
        </div>

        {/* 4-Stage Stair-Step Grid with Red Horizontal Level Bars (Image 2 Exact Match) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-black/15 dark:divide-white/15 min-h-[220px]">
          
          {/* Phase 01: Low Step Bar */}
          <div className="flex flex-col justify-between pr-0 lg:pr-8">
            <div>
              <span className="font-mono text-xs text-black/40 dark:text-white/40 block mb-2">01</span>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-2">
                CREATIVE CONCEPT &amp; CORE CS
              </h4>
              <p className="font-sans text-xs text-black/60 dark:text-white/60 leading-relaxed">
                Discrete math, data structures, and algorithmic foundations. Bennett University (CGPA 8.75).
              </p>
            </div>
            {/* Step Line 1 (Lowest Level) */}
            <div className="mt-8">
              <div className="w-full h-1 bg-[#ff3b20]" />
              <div className="font-mono text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest mt-2">
                FOUNDATION (2024 — 2028)
              </div>
            </div>
          </div>

          {/* Phase 02: Medium-Low Step Bar (Higher) */}
          <div className="flex flex-col justify-between px-0 lg:px-8">
            <div>
              <span className="font-mono text-xs text-black/40 dark:text-white/40 block mb-2">02</span>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-2">
                FULL IEEE SB DEVELOPMENT
              </h4>
              <p className="font-sans text-xs text-black/60 dark:text-white/60 leading-relaxed">
                Executive Chairperson leading 100+ members. ₹1.48L+ sponsorships. 3rd Place IEEE UP Section Award.
              </p>
            </div>
            {/* Step Line 2 (Stepped Up) */}
            <div className="mt-8 mb-4 sm:mb-6">
              <div className="w-full h-1.5 bg-[#ff3b20]" />
              <div className="font-mono text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest mt-2">
                LEADERSHIP (2-4 WEEKS / RECURRING)
              </div>
            </div>
          </div>

          {/* Phase 03: Medium-High Step Bar (Higher) */}
          <div className="flex flex-col justify-between px-0 lg:px-8">
            <div>
              <span className="font-mono text-xs text-black/40 dark:text-white/40 block mb-2">03</span>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-2">
                RESEARCH DELIVERABLES
              </h4>
              <p className="font-sans text-xs text-black/60 dark:text-white/60 leading-relaxed">
                First-author manuscript targeting IEEE TDSC. Staged uncertainty-aware fraud decisioning engine.
              </p>
            </div>
            {/* Step Line 3 (Stepped Up Higher) */}
            <div className="mt-8 mb-8 sm:mb-12">
              <div className="w-full h-2 bg-[#ff3b20]" />
              <div className="font-mono text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest mt-2">
                RESEARCH MILESTONE (1 WEEK)
              </div>
            </div>
          </div>

          {/* Phase 04: Highest Step Bar (Top Level) */}
          <div className="flex flex-col justify-between pl-0 lg:pl-8">
            <div>
              <span className="font-mono text-xs text-black/40 dark:text-white/40 block mb-2">04</span>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-2">
                PRODUCTION APPLICATIONS
              </h4>
              <p className="font-sans text-xs text-black/60 dark:text-white/60 leading-relaxed">
                Deployed architectures: FastAPI REST endpoints, Docker Compose, pgvector, and Redis pipelines.
              </p>
            </div>
            {/* Step Line 4 (Highest Level) */}
            <div className="mt-8 mb-12 sm:mb-16">
              <div className="w-full h-2.5 bg-[#ff3b20]" />
              <div className="font-mono text-[10px] text-[#ff3b20] font-bold uppercase tracking-widest mt-2">
                ACTIVE DEPLOYMENT (1-2 WEEKS)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
