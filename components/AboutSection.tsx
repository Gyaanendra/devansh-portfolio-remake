'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-14 max-w-[1720px] mx-auto"
    >
      {/* ── 02. CORE EDITORIAL COMPOSITION (FUSING IMAGE 1 & IMAGE 2 DIRECTLY ON THE CANVAS) ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12">

        {/* ── LEFT COLUMN: MULTI-LAYER PORTRAIT STACK (EXACT IMAGE 1 & 2 LAYERING) ── */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-auto lg:min-h-[660px] flex items-end justify-center overflow-hidden">

          {/* Layer 1: Solid Red Vertical Rectangle (Exact Reference Match) */}
          <div
            className="absolute top-0 right-0 bottom-0 w-[54%] bg-[#ff3b20] z-0"
            aria-hidden="true"
          />

          {/* Layer 2: White / Canvas Architectural Block in Top-Left (Exact Reference Match) */}
          <div
            className="absolute top-0 left-0 w-28 sm:w-36 lg:w-44 h-28 sm:h-36 lg:h-44 bg-[#f7f7f8] dark:bg-[#0c0c0e] border-b border-r border-black/15 dark:border-white/15 z-10"
            aria-hidden="true"
          />

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

      {/* ── 03. CHRONOLOGICAL TIMELINE (ENGINEERING PROGRESSION & MILESTONES) ── */}
      <div className="w-full pt-16 sm:pt-20">

        {/* Timeline Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-3 pb-6 border-b border-black/15 dark:border-white/15 mb-10">
          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-black dark:text-white uppercase tracking-tight">
              TIMELINE
            </h3>
            <p className="font-mono text-xs sm:text-[13px] text-black/60 dark:text-white/60 mt-2 max-w-2xl leading-relaxed">
              A deterministic trajectory spanning foundational computer science, executive governance, first-author ML research, and production distributed systems.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#ff3b20]/10 border border-[#ff3b20]/30 font-mono text-[10.5px] text-[#ff3b20] font-bold uppercase tracking-wider">
            <span>4 PROGRESSIVE TIERS // 2024 — 2028</span>
          </div>
        </div>

        {/* 4-Stage Progressive Stair-Step Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-black/15 dark:divide-white/15 min-h-[250px]">

          {/* Phase 01: Foundations & Core CS */}
          <div className="flex flex-col justify-between pr-0 lg:pr-8">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-black/40 dark:text-white/40">01</span>
                <span className="font-mono text-[9.5px] uppercase px-2 py-0.5 border border-black/15 dark:border-white/15 text-black/60 dark:text-white/60">
                  2024 — 2028
                </span>
              </div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-1.5">
                FOUNDATIONS &amp; CORE CS
              </h4>
              <div className="text-[11px] font-mono text-[#ff3b20] mb-2 font-semibold uppercase">
                Bennett University · CGPA 8.75
              </div>
              <p className="font-sans text-xs text-black/65 dark:text-white/65 leading-relaxed">
                Rigorous grounding in discrete mathematics, data structures, operating systems, and memory-bounded algorithms. 300+ LeetCode problems solved.
              </p>
            </div>
            {/* Step Line 1 (Baseline Elevation) */}
            <div className="mt-8">
              <div className="w-full h-1 bg-[#ff3b20]" />
              <div className="flex items-center justify-between font-mono text-[10px] text-black/45 dark:text-white/45 uppercase tracking-widest mt-2">
                <span>TIER 01: THEORY</span>
                <span className="font-bold text-black dark:text-white">ACADEMIC BASE</span>
              </div>
            </div>
          </div>

          {/* Phase 02: Institutional Leadership */}
          <div className="flex flex-col justify-between px-0 lg:px-8">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-black/40 dark:text-white/40">02</span>
                <span className="font-mono text-[9.5px] uppercase px-2 py-0.5 border border-black/15 dark:border-white/15 text-black/60 dark:text-white/60">
                  2025 — 2026
                </span>
              </div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-1.5">
                INSTITUTIONAL GOVERNANCE
              </h4>
              <div className="text-[11px] font-mono text-[#ff3b20] mb-2 font-semibold uppercase">
                IEEE Student Branch Chairperson
              </div>
              <p className="font-sans text-xs text-black/65 dark:text-white/65 leading-relaxed">
                Led 100+ member engineering branch. Secured ₹1.48L+ sponsorships, executed Global AI Summit 2.0 (3.5K+ attendees), and won IEEE UP 3rd Best Branch Award.
              </p>
            </div>
            {/* Step Line 2 (Elevated Bar) */}
            <div className="mt-8 mb-4 sm:mb-6">
              <div className="w-full h-1.5 bg-[#ff3b20]" />
              <div className="flex items-center justify-between font-mono text-[10px] text-black/45 dark:text-white/45 uppercase tracking-widest mt-2">
                <span>TIER 02: LEADERSHIP</span>
                <span className="font-bold text-black dark:text-white">100+ ENGINEERS</span>
              </div>
            </div>
          </div>

          {/* Phase 03: ML Research & Publications */}
          <div className="flex flex-col justify-between px-0 lg:px-8">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-black/40 dark:text-white/40">03</span>
                <span className="font-mono text-[9.5px] uppercase px-2 py-0.5 border border-black/15 dark:border-white/15 text-black/60 dark:text-white/60">
                  2025 — 2026
                </span>
              </div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-1.5">
                PEER-REVIEWED ML RESEARCH
              </h4>
              <div className="text-[11px] font-mono text-[#ff3b20] mb-2 font-semibold uppercase">
                First Author · IEEE TDSC Target
              </div>
              <p className="font-sans text-xs text-black/65 dark:text-white/65 leading-relaxed">
                Architected MARI staged uncertainty framework with Dempster-Shafer fusion &amp; SHAP. Co-authored published astrophysics book <em>Simply Universe</em> and gait survey.
              </p>
            </div>
            {/* Step Line 3 (Higher Elevation) */}
            <div className="mt-8 mb-8 sm:mb-12">
              <div className="w-full h-2 bg-[#ff3b20]" />
              <div className="flex items-center justify-between font-mono text-[10px] text-black/45 dark:text-white/45 uppercase tracking-widest mt-2">
                <span>TIER 03: RESEARCH</span>
                <span className="font-bold text-black dark:text-white">FIRST AUTHOR</span>
              </div>
            </div>
          </div>

          {/* Phase 04: Production Systems & Deployment */}
          <div className="flex flex-col justify-between pl-0 lg:pl-8">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-black/40 dark:text-white/40">04</span>
                <span className="font-mono text-[9.5px] uppercase px-2 py-0.5 bg-[#ff3b20]/10 text-[#ff3b20] font-bold border border-[#ff3b20]/30">
                  2026 — PRESENT
                </span>
              </div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-1.5">
                PRODUCTION APPLICATIONS
              </h4>
              <div className="text-[11px] font-mono text-[#ff3b20] mb-2 font-semibold uppercase">
                Software Developer (BuildIt &amp; Raahi)
              </div>
              <p className="font-sans text-xs text-black/65 dark:text-white/65 leading-relaxed">
                Deployed FastAPI lead-gen pipelines (500+ leads/wk) and PostgreSQL analytics. Architected Flutter mobile app with SQLite WAL mode for sub-800ms cold boots.
              </p>
            </div>
            {/* Step Line 4 (Highest Elevation) */}
            <div className="mt-8 mb-12 sm:mb-16">
              <div className="w-full h-2.5 bg-[#ff3b20]" />
              <div className="flex items-center justify-between font-mono text-[10px] text-[#ff3b20] font-bold uppercase tracking-widest mt-2">
                <span>TIER 04: SHIPPING</span>
                <span>ACTIVE PIPELINES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
