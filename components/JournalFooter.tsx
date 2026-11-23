'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Copy, Check, ArrowUp } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { profile } from '@/data';

interface JournalFooterProps {
  onOpenContact: () => void;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

export default function JournalFooter({ onOpenContact, theme, onThemeChange }: JournalFooterProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined' && (window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { duration: 1.35 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="journal" className="w-full pt-10 sm:pt-16 pb-0 px-0 sm:px-3 lg:px-6">
      
      {/* ── THE PHYSICAL HARDCOVER JOURNAL OBJECT (FULL-WIDTH, FLUSH BOTTOM) ── */}
      {/* The book casing itself forms the footer, with realistic cover overhang, stacked paper block, and integrated toolbar */}
      <div className="relative w-full rounded-t-2xl sm:rounded-t-3xl rounded-b-none bg-[#141418] dark:bg-[#09090c] p-2 sm:p-3 sm:pb-0 pb-0 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.25)] dark:shadow-[0_-25px_70px_-15px_rgba(0,0,0,0.85)] border-t border-l border-r border-black/40 dark:border-white/10 ring-1 ring-white/5 transition-all">
        
        {/* Hardcover Casing Texture & Blind Debossed Perimeter Rule */}
        <div className="absolute inset-1.5 sm:inset-2 rounded-t-xl sm:rounded-t-2xl rounded-b-none border-t border-l border-r border-white/[0.07] pointer-events-none" />

        {/* Stacked Paper Block (Simulated 200 sheets book block depth along the sides and top) */}
        <div className="relative w-full rounded-t-xl sm:rounded-t-2xl rounded-b-none bg-[#eae7df] dark:bg-[#1a1a22] p-0.5 sm:p-1 sm:pb-0 pb-0 shadow-inner overflow-hidden">
          
          {/* Subtle multi-layer paper edge lines */}
          <div className="absolute top-0 bottom-0 left-0 w-1 sm:w-1.5 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none z-20" />
          <div className="absolute top-0 bottom-0 right-0 w-1 sm:w-1.5 bg-gradient-to-l from-black/20 via-black/5 to-transparent pointer-events-none z-20" />

          {/* ── THE OPEN SPREAD PAGES (ARCHIVAL GRAPH PAPER) ── */}
          <div className="relative w-full rounded-t-lg sm:rounded-t-xl rounded-b-none bg-[#fcfbf7] dark:bg-[#111116] text-[#121215] dark:text-[#f3f4f6] overflow-hidden transition-colors duration-500">
            
            {/* 20px Graph Paper Grid Ruling */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.45] dark:opacity-[0.22]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }}
            />

            {/* Central Book Spine Groove & Sewing Crease (Vertical gradient divider on desktop) */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-20">
              <div className="w-full h-full bg-gradient-to-r from-black/[0.08] via-black/[0.02] to-black/[0.08] dark:from-black/40 dark:via-transparent dark:to-black/40" />
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-black/15 dark:bg-white/10" />
            </div>

            {/* Coral Red Satin Ribbon Bookmark hanging down from the center top spine */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
              <div className="w-4 sm:w-5 h-16 sm:h-22 bg-[#ff3b20] shadow-[0_4px_12px_rgba(255,59,32,0.4)] relative flex items-end justify-center pb-1">
                <div className="w-0.5 h-8 bg-black/20 rounded-full" />
                {/* Swallowtail / Notch cut */}
                <div 
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-2 sm:h-2.5 bg-[#ff3b20]"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 50%, 0 100%)'
                  }}
                />
              </div>
            </div>

            {/* ── RUNNING BOOK HEAD MARGIN ── */}
            <div className="relative z-10 w-full px-4 sm:px-8 py-2.5 sm:py-3 border-b border-black/10 dark:border-white/10 flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-black/55 dark:text-white/55">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b20]" />
                <span className="font-bold text-black dark:text-white">
                  LIBER ARCHITECTONICA // FOLIO 141 — 142
                </span>
                <span className="hidden md:inline text-black/30 dark:text-white/30">|</span>
                <span className="hidden md:inline">INTJ-A COMMONPLACE NOTEBOOK</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#ff3b20] font-bold">2026.D</span>
                <span className="text-black/30 dark:text-white/30">·</span>
                <span>BENNETT UNIV</span>
              </div>
            </div>

            {/* ── DUAL PAGE LAY-FLAT SPREAD (VERSO & RECTO) ── */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black/10 dark:divide-white/10">
              
              {/* ═══════════════════════════════════════════════════════════════════
                  LEFT PAGE (VERSO // FOLIO 141): INTJ AXIOMS, DIARY & POLAROID
                 ═══════════════════════════════════════════════════════════════════ */}
              <div className="p-4 sm:p-6 lg:p-7 flex flex-col justify-between space-y-4">
                
                {/* Header: Hobonichi Mini-Calendar + Page Tag */}
                <div className="flex items-start justify-between gap-4">
                  {/* Hobonichi Techo Mini Calendar */}
                  <div className="p-1.5 sm:p-2 bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-md">
                    <div className="flex items-center justify-between font-mono text-[8px] font-bold text-black dark:text-white uppercase mb-1">
                      <span>APR // NOV</span>
                      <span className="text-[#ff3b20]">2026.D</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-[7px] font-mono text-center text-black/40 dark:text-white/40 mb-0.5">
                      <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                    </div>
                    <div className="grid grid-cols-7 gap-0.5 text-[7px] font-mono text-center">
                      <span className="text-black/20 dark:text-white/20">30</span>
                      <span className="text-black/50 dark:text-white/50">01</span>
                      <span className="text-black/50 dark:text-white/50">02</span>
                      <span className="text-black/50 dark:text-white/50">03</span>
                      <span className="text-black/50 dark:text-white/50">04</span>
                      <span className="text-black/50 dark:text-white/50">05</span>
                      <span className="text-black/50 dark:text-white/50">06</span>
                      <span className="text-black/50 dark:text-white/50">07</span>
                      <span className="text-black/50 dark:text-white/50">08</span>
                      <span className="text-black/50 dark:text-white/50">09</span>
                      <span className="text-black/50 dark:text-white/50">10</span>
                      <span className="text-black/50 dark:text-white/50">11</span>
                      <span className="text-black/50 dark:text-white/50">12</span>
                      <span className="text-black/50 dark:text-white/50">13</span>
                      <span className="bg-[#ff3b20] text-white font-bold rounded-xs">14</span>
                      <span className="text-black/50 dark:text-white/50">15</span>
                      <span className="text-black/50 dark:text-white/50">16</span>
                      <span className="text-black/50 dark:text-white/50">17</span>
                      <span className="text-black/50 dark:text-white/50">18</span>
                      <span className="text-black/50 dark:text-white/50">19</span>
                      <span className="text-black/50 dark:text-white/50">20</span>
                    </div>
                  </div>

                  {/* Title / Folio */}
                  <div className="text-right">
                    <span className="text-[9px] font-mono tracking-widest text-[#ff3b20] font-bold block uppercase">
                      VERSO // FOLIO 141
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif italic text-black dark:text-white leading-tight">
                      Axioms &amp; Shadows
                    </h3>
                    <span className="text-[8px] font-mono text-black/40 dark:text-white/40 tracking-wider block uppercase">
                      INTJ-A · DETERMINISTIC SYSTEMS
                    </span>
                  </div>
                </div>

                {/* Middle: Compact B&W Polaroid + Core Axiom */}
                <div className="flex items-center gap-4 p-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10">
                  {/* Polaroid Frame */}
                  <div className="relative flex-shrink-0 bg-white dark:bg-[#1a1a22] p-1.5 pb-4 shadow border border-black/15 dark:border-white/15 rotate-[-1.5deg] hover:rotate-0 transition-transform">
                    {/* Washi Tape Strip */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-[#ff3b20]/30 border-t border-b border-black/15 z-10" />
                    <div className="relative w-20 h-20 sm:w-22 sm:h-22 overflow-hidden bg-black/10">
                      <Image
                        src="/images/devansh-about-bw.webp"
                        alt="Devansh Kumar - Architect"
                        fill
                        className="object-cover grayscale contrast-125"
                      />
                    </div>
                    <span className="font-mono text-[7px] text-black/60 dark:text-white/60 tracking-widest text-center block mt-1">
                      FIG. 88 · 2026.D
                    </span>
                  </div>

                  {/* Marginalia Note */}
                  <div className="flex-1 font-mono space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b20]" />
                      <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">
                        ON UNCERTAINTY &amp; ABSTENTION
                      </span>
                    </div>
                    <p className="text-[11px] text-black/75 dark:text-white/75 leading-relaxed font-sans">
                      "I think in deterministic graphs. Real-world engineering requires calibrated abstention—knowing when a model's confidence fails and routing to triage rather than hallucinating certainty."
                    </p>
                  </div>
                </div>

                {/* Bottom INTJ Entry Highlights */}
                <div className="grid grid-cols-2 gap-3 font-mono text-[9px] pt-1">
                  <div className="border-l-2 border-[#ff3b20] pl-2 space-y-0.5">
                    <span className="font-bold text-black dark:text-white block uppercase">
                      LOG 02 // Te CONSENSUS
                    </span>
                    <p className="text-black/65 dark:text-white/65 leading-tight font-sans text-[10px]">
                      Directed 100+ engineers as IEEE Chair. Built structures where the architecture explains itself.
                    </p>
                  </div>

                  <div className="border-l-2 border-black/20 dark:border-white/20 pl-2 space-y-0.5">
                    <span className="font-bold text-black dark:text-white block uppercase">
                      LOG 03 // 1414★★ CC
                    </span>
                    <p className="text-black/65 dark:text-white/65 leading-tight font-sans text-[10px]">
                      Speed chess under memory bounds. Optimize loops exclusively for the catastrophic boundary.
                    </p>
                  </div>
                </div>

                {/* Left Page Running Folio & Signature */}
                <div className="pt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between font-mono text-[9px] text-black/45 dark:text-white/45 uppercase tracking-wider">
                  <span>PAGE 141 // VERSO</span>
                  <span className="font-serif italic text-xs text-black/75 dark:text-white/75">
                    — Devansh Kumar (devantaris)
                  </span>
                </div>
              </div>


              {/* ═══════════════════════════════════════════════════════════════════
                  RIGHT PAGE (RECTO // FOLIO 142): PROVENANCE & DIRECT DISPATCH
                 ═══════════════════════════════════════════════════════════════════ */}
              <div className="p-4 sm:p-6 lg:p-7 flex flex-col justify-between space-y-4">
                
                {/* Header: Date Line & Recto Title */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#ff3b20] font-bold block uppercase">
                      RECTO // FOLIO 142
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif italic text-black dark:text-white leading-tight">
                      Provenance &amp; Colophon
                    </h3>
                    <span className="text-[8px] font-mono text-black/40 dark:text-white/40 tracking-wider block uppercase">
                      RIJKSMUSEUM SPECIFICATION FORM
                    </span>
                  </div>

                  {/* Japanese Exhibition Date Line (9/13 -> 10/5 Reference Match) */}
                  <div className="text-right font-mono">
                    <div className="text-xs sm:text-sm font-bold text-black dark:text-white flex items-center justify-end gap-1">
                      <span>2024.08</span>
                      <span className="text-[#ff3b20]">──→</span>
                      <span>2026.05</span>
                    </div>
                    <span className="text-[8px] text-[#ff3b20] font-bold uppercase tracking-widest block">
                      ● ACTIVE FOR HIGH-IMPACT ROLES
                    </span>
                  </div>
                </div>

                {/* Middle: Provenance Table & Dual Swatches (Melchior d'Hondecoeter Reference) */}
                <div className="space-y-2.5">
                  
                  {/* Provenance Table */}
                  <div className="border border-black/15 dark:border-white/15 rounded-md overflow-hidden font-mono text-[9px]">
                    <div className="grid grid-cols-3 divide-x divide-black/10 dark:divide-white/10 bg-black/[0.03] dark:bg-white/[0.03] p-1.5 sm:p-2 text-center">
                      <div>
                        <span className="text-black/40 dark:text-white/40 block text-[7px] uppercase">DATING</span>
                        <span className="font-bold text-black dark:text-white text-[8px] sm:text-[9px]">c. 2024–2026</span>
                      </div>
                      <div>
                        <span className="text-black/40 dark:text-white/40 block text-[7px] uppercase">OBJECT</span>
                        <span className="font-bold text-black dark:text-white text-[8px] sm:text-[9px]">ML &amp; SYSTEMS DOSSIER</span>
                      </div>
                      <div>
                        <span className="text-black/40 dark:text-white/40 block text-[7px] uppercase">MARKS</span>
                        <span className="font-bold text-black dark:text-white text-[8px] sm:text-[9px]">INTJ-A · 1414 CC</span>
                      </div>
                    </div>
                  </div>

                  {/* Dual Swatches: Commendation Plate + Coral Red Seal */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* B&W Plate */}
                    <div className="relative h-20 sm:h-24 rounded-lg overflow-hidden border border-black/15 dark:border-white/15 bg-black/5 flex flex-col justify-end p-2 group">
                      <Image
                        src="/images/devansh-award.webp"
                        alt="Devansh Kumar - Commendation Plate"
                        fill
                        className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      <div className="relative z-10 font-mono text-white text-[8px] space-y-0.5">
                        <span className="text-[#ff3b20] font-bold block uppercase text-[7px]">
                          PLATE 88.B // IEEE
                        </span>
                        <span className="font-bold block truncate">100+ ENGINEERS LED</span>
                      </div>
                    </div>

                    {/* Coral Red Swatch */}
                    <div className="h-20 sm:h-24 rounded-lg bg-[#ff3b20] text-white p-2.5 flex flex-col justify-between shadow-sm">
                      <div className="flex items-center justify-between font-mono text-[8px] text-white/80 uppercase">
                        <span>SEAL</span>
                        <span className="font-bold">2026.D</span>
                      </div>
                      <span className="text-xs sm:text-sm font-black uppercase tracking-tight block leading-tight">
                        BOUNDED BY DESIGN.
                      </span>
                      <div className="font-mono text-[7px] uppercase tracking-wider border-t border-white/20 pt-1 flex justify-between text-white/85">
                        <span>CGPA 8.75</span>
                        <span>100% PRECISION</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Dispatch Box: Trigger + One-Click Email Copy + References */}
                <div className="p-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.03] space-y-2 font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-black dark:text-white uppercase tracking-wider">
                      DISPATCH TO THE ARCHITECT
                    </span>
                    <span className="text-[8px] text-black/40 dark:text-white/40 uppercase">
                      DIRECT WIRE
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-black dark:bg-white text-white dark:text-black hover:bg-[#ff3b20] dark:hover:bg-[#ff3b20] dark:hover:text-white transition-all text-[10px] font-bold uppercase tracking-wider shadow-xs cursor-pointer"
                    >
                      <Mail className="w-3 h-3" />
                      <span>OPEN DISPATCH ↗</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-black/15 dark:border-white/15 hover:border-[#ff3b20] hover:text-[#ff3b20] transition-colors text-[10px] cursor-pointer"
                      title="Copy email address"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-[#ff3b20]" />
                          <span className="text-[#ff3b20] font-bold">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-black/50 dark:text-white/50" />
                          <span className="truncate max-w-[120px]">{profile.email}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Reference Index */}
                  <div className="pt-1.5 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-x-3 gap-y-1 text-[8px] tracking-wider uppercase text-black/60 dark:text-white/60">
                    <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff3b20]">
                      [REF 01: GITHUB ↗]
                    </a>
                    <a href={profile.socials.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff3b20]">
                      [REF 02: LEETCODE ↗]
                    </a>
                    <a href={profile.socials.codechef} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff3b20]">
                      [REF 03: CODECHEF ↗]
                    </a>
                    <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff3b20]">
                      [REF 04: LINKEDIN ↗]
                    </a>
                    <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer" className="text-[#ff3b20] font-bold hover:underline">
                      [DOSSIER (PDF) ↗]
                    </a>
                  </div>
                </div>

                {/* Right Page Running Folio */}
                <div className="pt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between font-mono text-[9px] text-black/45 dark:text-white/45 uppercase tracking-wider">
                  <span>PAGE 142 // RECTO</span>
                  <span className="text-[#ff3b20] font-bold text-[8px]">
                    COLOPHON // FIN
                  </span>
                </div>
              </div>

            </div>

            {/* ── 03. INTEGRATED BOOK COLOPHON TOOLBAR (INSIDE THE BOOK SPREAD) ── */}
            {/* The toolbar is embedded directly into the journal book base, eliminating the detached second bar */}
            <div className="relative z-10 w-full px-4 sm:px-8 py-3 border-t border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] text-black/60 dark:text-white/60">
              <div className="flex items-center gap-2">
                <span className="font-bold text-black dark:text-white tracking-widest uppercase">
                  DEVANSH KUMAR // DEVANTARIS
                </span>
                <span className="text-black/30 dark:text-white/30">·</span>
                <span className="text-black/45 dark:text-white/45 uppercase">
                  BENNETT UNIV 2026.D
                </span>
              </div>

              <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider">
                <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
                
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="hover:text-[#ff3b20] transition-colors cursor-pointer"
                >
                  DISPATCH ↗
                </button>
                
                <a
                  href={profile.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff3b20] transition-colors"
                >
                  RESUME ↗
                </a>

                <button
                  type="button"
                  onClick={scrollToTop}
                  className="group inline-flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors cursor-pointer font-bold"
                >
                  <span>TOP</span>
                  <ArrowUp className="w-3 h-3 text-[#ff3b20] group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
