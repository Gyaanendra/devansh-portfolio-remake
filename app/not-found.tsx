'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass, Mail, Home, Sparkles, FileQuestion, ArrowUpRight } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { profile } from '@/data';

// ── 01. VINTAGE BRASS BINDER CLIP (MATCHING USER REFERENCE 2) ──
function BinderClip({ className = '' }: { className?: string }) {
  return (
    <div className={`relative z-30 select-none ${className}`}>
      <svg width="68" height="54" viewBox="0 0 68 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
        {/* Clip Body (Metallic Brass) */}
        <rect x="14" y="16" width="40" height="32" rx="4" fill="url(#brass-grad)" stroke="#8c6d23" strokeWidth="1.5" />
        {/* Clip cutout grip */}
        <rect x="22" y="24" width="24" height="16" rx="2" fill="#18181c" fillOpacity="0.85" />
        {/* Chrome wire arms */}
        <path d="M26 16 L26 4 C26 2 30 2 30 4 L30 16" stroke="#c0a050" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M42 16 L42 4 C42 2 38 2 38 4 L38 16" stroke="#c0a050" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="34" cy="32" r="3" fill="#ffd700" fillOpacity="0.6" />
        <defs>
          <linearGradient id="brass-grad" x1="14" y1="16" x2="54" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e5c158" />
            <stop offset="0.5" stopColor="#b38b2d" />
            <stop offset="1" stopColor="#7a5c18" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ── 02. ANATOMICAL BUTTERFLY SPECIMEN (MATCHING USER REFERENCE 2) ──
function ButterflySpecimen({ className = '' }: { className?: string }) {
  return (
    <div className={`relative select-none ${className}`}>
      {/* Pinned Shadow */}
      <div className="absolute inset-2 bg-black/25 dark:bg-black/50 blur-md rounded-full -rotate-6 translate-y-3" />
      
      <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
        {/* Left Forewing */}
        <path
          d="M106 75 C85 45 40 15 15 32 C-2 44 2 82 28 105 C48 122 88 110 106 85 Z"
          fill="#1c1c20"
          stroke="#0a0a0c"
          strokeWidth="1.5"
        />
        {/* Left Forewing Coral Red Markings (#ff3b20) */}
        <path d="M42 45 C35 55 32 72 45 88 C55 100 78 98 88 82 C72 70 55 58 42 45 Z" fill="#ff3b20" fillOpacity="0.9" />
        <path d="M22 40 C18 50 18 62 25 70 C30 65 32 50 25 40 Z" fill="#f8f4ec" />
        <path d="M52 35 C65 42 75 52 82 65 C72 60 60 48 52 35 Z" fill="#f8f4ec" />

        {/* Right Forewing */}
        <path
          d="M114 75 C135 45 180 15 205 32 C222 44 218 82 192 105 C172 122 132 110 114 85 Z"
          fill="#1c1c20"
          stroke="#0a0a0c"
          strokeWidth="1.5"
        />
        {/* Right Forewing Coral Red Markings (#ff3b20) */}
        <path d="M178 45 C185 55 188 72 175 88 C165 100 142 98 132 82 C148 70 165 58 178 45 Z" fill="#ff3b20" fillOpacity="0.9" />
        <path d="M198 40 C202 50 202 62 195 70 C190 65 188 50 195 40 Z" fill="#f8f4ec" />
        <path d="M168 35 C155 42 145 52 138 65 C148 60 160 48 168 35 Z" fill="#f8f4ec" />

        {/* Left Hindwing */}
        <path
          d="M106 85 C88 105 52 120 48 145 C45 162 68 172 88 162 C102 154 108 125 106 85 Z"
          fill="#18181c"
          stroke="#0a0a0c"
          strokeWidth="1.5"
        />
        <circle cx="72" cy="145" r="7" fill="#ff3b20" />
        <circle cx="72" cy="145" r="3" fill="#fcfbf7" />

        {/* Right Hindwing */}
        <path
          d="M114 85 C132 105 168 120 172 145 C175 162 152 172 132 162 C118 154 112 125 114 85 Z"
          fill="#18181c"
          stroke="#0a0a0c"
          strokeWidth="1.5"
        />
        <circle cx="148" cy="145" r="7" fill="#ff3b20" />
        <circle cx="148" cy="145" r="3" fill="#fcfbf7" />

        {/* Wing Veins */}
        <path d="M106 80 Q65 65 32 55 M106 80 Q60 85 40 100 M106 85 Q75 125 65 150" stroke="#fcfbf7" strokeWidth="0.8" strokeOpacity="0.4" />
        <path d="M114 80 Q155 65 188 55 M114 80 Q160 85 180 100 M114 85 Q145 125 155 150" stroke="#fcfbf7" strokeWidth="0.8" strokeOpacity="0.4" />

        {/* Butterfly Body & Head */}
        <ellipse cx="110" cy="88" rx="4.5" ry="32" fill="#0d0d10" />
        <circle cx="110" cy="52" r="5" fill="#0d0d10" />
        
        {/* Antennae */}
        <path d="M108 48 C102 35 90 25 80 22 M112 48 C118 35 130 25 140 22" stroke="#1c1c20" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="80" cy="22" r="2" fill="#ff3b20" />
        <circle cx="140" cy="22" r="2" fill="#ff3b20" />
      </svg>

      {/* Specimen Tag */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded bg-white dark:bg-[#1a1a22] border border-black/20 dark:border-white/20 shadow-xs font-mono text-[8px] text-black/75 dark:text-white/75 tracking-wider uppercase whitespace-nowrap z-20">
        SPECIMEN NO. 404.B // PAPILIO ARCHITECTONICA
      </div>
    </div>
  );
}

// ── 03. PRESSED BOTANICAL LEAF SPECIMEN (GINKGO & FERN) ──
function BotanicalLeafSpecimen({ className = '' }: { className?: string }) {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      <svg width="140" height="150" viewBox="0 0 140 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70 dark:opacity-50">
        {/* Ginkgo Leaf Fan */}
        <path
          d="M70 140 C68 115 67 95 65 80 C40 78 15 62 18 30 C32 15 58 22 70 42 C82 22 108 15 122 30 C125 62 100 78 75 80 C73 95 72 115 70 140 Z"
          fill="url(#leaf-grad)"
          stroke="#423b30"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        {/* Radial Veins */}
        <path d="M68 80 Q45 55 30 35 M68 80 Q52 48 48 26 M70 80 L70 42 M72 80 Q88 48 92 26 M72 80 Q95 55 110 35" stroke="#2c2720" strokeWidth="0.7" strokeOpacity="0.3" />
        <defs>
          <linearGradient id="leaf-grad" x1="70" y1="20" x2="70" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a3967d" stopOpacity="0.45" />
            <stop offset="0.7" stopColor="#695f4c" stopOpacity="0.3" />
            <stop offset="1" stopColor="#40392c" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-mono text-[7px] text-black/40 dark:text-white/40 uppercase tracking-widest block text-center mt-1">
        HERBARIUM SPECIMEN // FOLIUM 404
      </span>
    </div>
  );
}

export default function NotFoundPage() {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('dk-portfolio-theme') as 'light' | 'dark' | null;
      if (saved === 'dark') {
        setCurrentTheme('dark');
        document.documentElement.dataset.theme = 'dark';
        document.documentElement.classList.add('dark');
      } else {
        setCurrentTheme('light');
        document.documentElement.dataset.theme = 'light';
        document.documentElement.classList.remove('dark');
      }
    } catch {
      setCurrentTheme('light');
    }
  }, []);

  const handleThemeChange = (nextTheme: 'light' | 'dark') => {
    setCurrentTheme(nextTheme);
    try {
      localStorage.setItem('dk-portfolio-theme', nextTheme);
    } catch {}
    document.documentElement.dataset.theme = nextTheme;
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <main className="min-h-screen bg-[#edece8] dark:bg-[#070709] text-[#111114] dark:text-[#f3f4f6] flex flex-col justify-between p-3 sm:p-6 lg:p-10 transition-colors duration-500 font-sans selection:bg-[#ff3b20] selection:text-white">
      
      {/* ── TOP NAV BAR & THEME CONTROLLER ── */}
      <header className="w-full max-w-[1600px] mx-auto flex items-center justify-between py-2 px-2 font-mono text-xs">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-bold text-black dark:text-white hover:text-[#ff3b20] transition-colors uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 text-[#ff3b20] group-hover:-translate-x-1 transition-transform" />
          <span>RETURN TO ARCHIVE (HOME)</span>
        </Link>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-[10px] text-black/45 dark:text-white/45 tracking-wider uppercase">
            COORDINATE: [28.4595° N, 77.5015° E] · UNINDEXED
          </span>
          <ThemeToggle theme={currentTheme} onThemeChange={handleThemeChange} />
        </div>
      </header>

      {/* ── THE OPEN TRAVELER'S JOURNAL SPREAD (THE 404 EXPERIENCE) ── */}
      <div className="relative w-full max-w-[1560px] mx-auto my-auto py-6">
        
        {/* Brass Binder Clip pinning the top right edge (Reference 2 Match) */}
        <div className="hidden sm:block absolute -top-3 right-8 sm:right-16 z-40">
          <BinderClip />
        </div>

        {/* Physical Hardcover Notebook Casing */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#141418] dark:bg-[#09090c] p-2.5 sm:p-3.5 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.4)] dark:shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)] border border-black/40 dark:border-white/10 ring-1 ring-white/5">
          
          {/* Inner Hardcover Casing Frame */}
          <div className="absolute inset-2 sm:inset-2.5 rounded-xl sm:rounded-2xl border border-white/[0.08] pointer-events-none" />

          {/* Stacked Paper Edge Gilt (Multi-layer book block depth) */}
          <div className="relative w-full rounded-xl sm:rounded-2xl bg-[#eae7df] dark:bg-[#1a1a22] p-1 sm:p-1.5 shadow-inner overflow-hidden">
            
            {/* Paper block side shadows */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-20" />
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-20" />
            <div className="absolute top-0 bottom-0 right-0 w-1.5 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-20" />

            {/* ── THE OPEN SPREAD (ARCHIVAL GRAPH PAPER) ── */}
            <div className="relative w-full rounded-lg sm:rounded-xl bg-[#fcfbf7] dark:bg-[#111116] text-[#121215] dark:text-[#f3f4f6] overflow-hidden transition-colors duration-500">
              
              {/* 20px Graph Paper Grid Texture */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.5] dark:opacity-[0.22]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Central Spine Groove with Smyth-Sewn Crease */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-20">
                <div className="w-full h-full bg-gradient-to-r from-black/[0.09] via-black/[0.02] to-black/[0.09] dark:from-black/45 dark:via-transparent dark:to-black/45" />
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-black/15 dark:bg-white/10" />
              </div>

              {/* Dual Coral Red Ribbon Bookmark Draping from Spine */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
                <div className="w-5 h-24 sm:h-32 bg-[#ff3b20] shadow-[0_6px_16px_rgba(255,59,32,0.45)] relative flex items-end justify-center pb-1">
                  <div className="w-0.5 h-12 bg-black/20 rounded-full" />
                  <div 
                    className="absolute -bottom-3 left-0 w-full h-3 bg-[#ff3b20]"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 50%, 0 100%)' }}
                  />
                </div>
              </div>

              {/* ── RUNNING HEAD MARGIN ── */}
              <div className="relative z-10 w-full px-5 sm:px-10 py-3 sm:py-3.5 border-b border-black/10 dark:border-white/10 flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-black/55 dark:text-white/55">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff3b20] animate-pulse" />
                  <span className="font-bold text-black dark:text-white">
                    LIBER INCERTI // FOLIO 404
                  </span>
                  <span className="hidden sm:inline text-black/30 dark:text-white/30">|</span>
                  <span className="hidden sm:inline">STATUS: UNWRITTEN CHAPTER</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#ff3b20] font-bold">ERROR 404</span>
                  <span className="text-black/30 dark:text-white/30">·</span>
                  <span>DEVANSH KUMAR COMMONPLACE</span>
                </div>
              </div>

              {/* ── TWO-PAGE SPREAD CONTENT (VERSO & RECTO) ── */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black/10 dark:divide-white/10">
                
                {/* ═══════════════════════════════════════════════════════════════════
                    PAGE 403 (VERSO): THE SPECIMEN SPREAD (BUTTERFLY & PRESSED LEAF)
                   ═══════════════════════════════════════════════════════════════════ */}
                <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 relative overflow-hidden">
                  
                  {/* Top Vintage Postmark & Pantone Ticket (Reference 2 Match) */}
                  <div className="flex items-start justify-between gap-4">
                    {/* Pantone 404-C Swatch Ticket */}
                    <div className="relative bg-white dark:bg-[#1c1c24] border border-black/15 dark:border-white/15 p-2 shadow-xs rounded-sm rotate-[-2deg]">
                      {/* Translucent washi tape at top */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#ff3b20]/30 border-t border-b border-black/15 z-10" />
                      <div className="w-16 h-12 bg-[#ff3b20] rounded-xs" />
                      <div className="font-mono text-[8px] text-black/80 dark:text-white/80 mt-1 uppercase text-center font-bold">
                        PANTONE 404
                      </div>
                    </div>

                    {/* Circular Cancellation Postmark */}
                    <div className="w-20 h-20 rounded-full border border-dashed border-[#ff3b20]/60 p-1 flex flex-col items-center justify-center text-center font-mono text-[7px] text-[#ff3b20] rotate-12">
                      <span className="font-bold">UNINDEXED</span>
                      <span className="text-[6px] tracking-widest my-0.5">2026.D · NCR</span>
                      <span className="border-t border-b border-[#ff3b20]/40 w-14 py-0.5">VOID / NO ENTRY</span>
                    </div>

                    <div className="text-right font-mono">
                      <span className="text-[9px] text-[#ff3b20] font-bold tracking-widest uppercase block">
                        VERSO // 403
                      </span>
                      <span className="font-serif italic text-lg text-black dark:text-white block">
                        Specimen Archive
                      </span>
                    </div>
                  </div>

                  {/* Centered Anatomical Butterfly Specimen */}
                  <div className="py-2 flex flex-col items-center justify-center relative">
                    <ButterflySpecimen className="transform hover:scale-105 transition-transform duration-500 cursor-default" />
                  </div>

                  {/* Botanical Leaf Silhouette & Field Notes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-2 border-t border-black/10 dark:border-white/10 font-mono text-[10px]">
                    <BotanicalLeafSpecimen />

                    <div className="space-y-1.5 font-mono text-[9px] text-black/70 dark:text-white/70">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b20]" />
                        <span className="font-bold text-black dark:text-white uppercase">FIELD NOTE 404</span>
                      </div>
                      <p className="font-sans leading-relaxed text-[11px] text-black/80 dark:text-white/80">
                        "The pattern of a butterfly's wing and the branching venation of a leaf obey strict deterministic algorithms, yet no two are identical. An unindexed route is not a failure; it is merely an uncharted branch of the tree."
                      </p>
                      <span className="text-[8px] text-black/40 dark:text-white/40 uppercase block tracking-wider">
                        TAXONOMY: INTJ-A // EPISTEMIC BOUNDS
                      </span>
                    </div>
                  </div>

                  {/* Verso Page Running Foot */}
                  <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between font-mono text-[9px] text-black/40 dark:text-white/40 uppercase tracking-widest">
                    <span>FOLIO 403 — VERSO</span>
                    <span className="font-serif italic text-xs text-black/70 dark:text-white/70">
                      — Herbarium &amp; Commonplace
                    </span>
                  </div>
                </div>


                {/* ═══════════════════════════════════════════════════════════════════
                    PAGE 404 (RECTO): "THIS CHAPTER HAS NOT YET BEEN DISCOVERED"
                   ═══════════════════════════════════════════════════════════════════ */}
                <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 relative">
                  
                  {/* Top Folio Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-[#ff3b20] font-bold block uppercase">
                        RECTO // FOLIO 404
                      </span>
                      <span className="text-[8px] font-mono text-black/40 dark:text-white/40 tracking-wider block uppercase mt-0.5">
                        UNKNOWN SECTOR // SYSTEM EXCEPTION
                      </span>
                    </div>

                    <div className="px-2.5 py-1 rounded bg-[#ff3b20]/10 border border-[#ff3b20]/30 font-mono text-[9px] text-[#ff3b20] font-bold uppercase tracking-wider">
                      ● CALIBRATED ABSTENTION
                    </div>
                  </div>

                  {/* The Monumental Chapter Title (User's Exact Phrasing) */}
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-bold text-[#ff3b20] tracking-[0.25em] uppercase block">
                      CHAPTER 404 //
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black dark:text-white uppercase tracking-tight leading-[1.05]">
                      THIS CHAPTER HAS NOT YET BEEN DISCOVERED.
                    </h1>
                    <p className="font-mono text-xs sm:text-sm text-black/65 dark:text-white/65 uppercase tracking-wider leading-relaxed">
                      THE SPECIFIED ENTRY DOES NOT RESOLVE TO AN INDEXED PRODUCTION NODE <span className="text-[#ff3b20]">+</span> HYPOTHESIS UNWRITTEN
                    </p>
                  </div>

                  {/* INTJ Systems Philosophy Reflection on 404 */}
                  <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 space-y-2 font-mono">
                    <div className="flex items-center justify-between text-[10px] text-black/50 dark:text-white/50 uppercase">
                      <span className="text-[#ff3b20] font-bold">POST-MORTEM DEDUCTION // 0x404</span>
                      <span>STATUS: GRACEFUL FALLBACK</span>
                    </div>
                    <p className="font-sans text-xs sm:text-[13px] text-black/85 dark:text-white/85 leading-relaxed">
                      In real-world fraud decisioning and distributed backends, an unrouted vector is never allowed to crash the system. When a request traverses beyond calibrated thresholds, the architecture abstains and gracefully steers the entity back to proven ground.
                    </p>
                  </div>

                  {/* Tactical Navigation Actions (Return to System) */}
                  <div className="space-y-3 pt-2 font-mono">
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                      {/* Primary Home Button */}
                      <Link
                        href="/"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black hover:bg-[#ff3b20] dark:hover:bg-[#ff3b20] dark:hover:text-white transition-all text-xs font-bold uppercase tracking-wider shadow-sm"
                      >
                        <Home className="w-3.5 h-3.5" />
                        <span>RETURN TO VOLUME 01 (HOME) ↗</span>
                      </Link>

                      {/* Dispatch Trigger */}
                      <a
                        href={`mailto:${profile.email}?subject=Report%20Unindexed%20Chapter%20404`}
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-black/15 dark:border-white/15 hover:border-[#ff3b20] hover:text-[#ff3b20] transition-colors text-xs font-medium uppercase"
                        title="Inform the architect"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>INFORM ARCHITECT</span>
                      </a>
                    </div>

                    {/* Quick Section Anchor Coordinates */}
                    <div className="pt-2 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[9px] uppercase tracking-wider text-black/55 dark:text-white/55">
                      <span className="text-black/35 dark:text-white/35">KNOWN ROUTES:</span>
                      <Link href="/#about" className="hover:text-[#ff3b20] transition-colors">[01: ABOUT]</Link>
                      <Link href="/#work" className="hover:text-[#ff3b20] transition-colors">[02: PROJECTS]</Link>
                      <Link href="/#code-activity" className="hover:text-[#ff3b20] transition-colors">[03: TELEMETRY]</Link>
                      <Link href="/#research" className="hover:text-[#ff3b20] transition-colors">[04: RESEARCH]</Link>
                      <Link href="/#path" className="hover:text-[#ff3b20] transition-colors">[05: CHRONOLOGY]</Link>
                      <Link href="/#journal" className="hover:text-[#ff3b20] transition-colors">[06: JOURNAL]</Link>
                    </div>
                  </div>

                  {/* Recto Page Running Foot */}
                  <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between font-mono text-[9px] text-black/40 dark:text-white/40 uppercase tracking-widest">
                    <span>PAGE 404 // RECTO</span>
                    <span className="text-[#ff3b20] font-bold text-[8px]">
                      END OF UNWRITTEN BOUNDARY // 2026.D
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ── FOOTER COLOPHON ── */}
      <footer className="w-full max-w-[1600px] mx-auto py-3 text-center font-mono text-[10px] text-black/45 dark:text-white/45 uppercase tracking-widest">
        DEVANSH KUMAR // DEVANTARIS — ARCHITECTURAL COMMONPLACE 2026.D · GREATER NOIDA
      </footer>

    </main>
  );
}
