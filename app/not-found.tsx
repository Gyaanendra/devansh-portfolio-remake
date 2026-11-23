'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, Home } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { profile } from '@/data';

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
    <main className="min-h-screen bg-[#eceae5] dark:bg-[#07070a] text-[#111114] dark:text-[#f3f4f6] flex flex-col justify-between p-3 sm:p-5 lg:p-8 transition-colors duration-500 font-sans selection:bg-[#ff3b20] selection:text-white">
      
      {/* ── TOP NAV BAR & THEME CONTROLLER ── */}
      <header className="w-full max-w-[1360px] mx-auto flex items-center justify-between py-2 px-1 font-mono text-xs">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-bold text-black dark:text-white hover:text-[#ff3b20] transition-colors uppercase tracking-widest text-[11px] sm:text-xs"
        >
          <ArrowLeft className="w-4 h-4 text-[#ff3b20] group-hover:-translate-x-1 transition-transform" />
          <span>RETURN TO VOLUME 01 (HOME)</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded bg-[#ff3b20]/10 border border-[#ff3b20]/30 font-mono text-[10px] sm:text-[11px] text-[#ff3b20] font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#ff3b20] animate-pulse" />
            <span>ERROR 404 // CHAPTER NOT FOUND</span>
          </div>
          <ThemeToggle theme={currentTheme} onThemeChange={handleThemeChange} />
        </div>
      </header>


      {/* ── THE PHYSICAL OPEN HARDCOVER JOURNAL SPREAD ── */}
      <div className="relative w-full max-w-[1360px] mx-auto my-auto py-3 sm:py-6">
        
        {/* ═══════════════════════════════════════════════════════════════════════
            1. DESKTOP & TABLET TWO-PAGE SPREAD (md and up)
            Uses the user's authentic open hardcover book mockup with curved pages
           ═══════════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block relative w-full aspect-[1376/984] rounded-lg shadow-[0_30px_90px_-20px_rgba(0,0,0,0.55)] dark:shadow-[0_35px_100px_-20px_rgba(0,0,0,0.95)] overflow-hidden border border-black/25 dark:border-white/10 select-text">
          
          {/* Authentic Open Book Mockup Base Image */}
          <Image
            src="/images/open-book-spread.png"
            alt="Physical Hardcover Open Journal Book Mockup"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 95vw, 1360px"
            className="object-cover pointer-events-none select-none"
          />

          {/* Micro Graph Paper Grid Overlay inside pages */}
          <div
            className="absolute inset-[3.5%] pointer-events-none opacity-[0.28]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '16px 16px',
            }}
          />

          {/* Spine Shading Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-10 bg-gradient-to-r from-black/10 via-black/20 to-black/10" />

          {/* Coral Red Ribbon Bookmark draping from top spine */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
            <div className="w-5 lg:w-6 h-24 lg:h-32 bg-[#ff3b20] shadow-[0_8px_20px_rgba(255,59,32,0.55)] relative flex items-end justify-center pb-1">
              <div className="w-0.5 h-14 bg-black/25 rounded-full" />
              <div 
                className="absolute -bottom-3.5 left-0 w-full h-3.5 bg-[#ff3b20]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 50%, 0 100%)' }}
              />
            </div>
          </div>


          {/* ───────────────────────────────────────────────────────────────────
              LEFT PAGE (VERSO // FOLIO 403): BOTANICAL SPECIMENS & FIELD NOTES
             ─────────────────────────────────────────────────────────────────── */}
          <div className="absolute top-[4.5%] bottom-[4.5%] left-[5%] right-[52.5%] z-20 flex flex-col justify-between py-4 px-4 lg:px-6 text-[#111114]">
            
            {/* Running Head */}
            <div className="flex items-center justify-between pb-2 border-b border-black/15 font-mono text-[9px] lg:text-[10px] uppercase tracking-widest text-black/60">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b20]" />
                <span className="font-bold text-black">FOLIO 403 // VERSO</span>
                <span className="text-black/30">|</span>
                <span>SPECIMEN ARCHIVE</span>
              </div>
              <span className="text-[#ff3b20] font-bold">UNINDEXED 2026.D</span>
            </div>

            {/* Top Vintage Ephemera Row */}
            <div className="flex items-start justify-between gap-3 pt-1">
              {/* Pantone 404-C Swatch Ticket with tape */}
              <div className="relative bg-white border border-black/25 p-1.5 shadow-xs rounded-xs rotate-[-2.5deg] w-20 lg:w-22">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-[#ff3b20]/30 border-t border-b border-black/20" />
                <div className="w-full h-9 lg:h-11 bg-[#ff3b20] rounded-xs" />
                <div className="font-mono text-[7px] text-black/85 mt-1 uppercase text-center font-bold tracking-wider">
                  PANTONE 404
                </div>
              </div>

              {/* Circular Void Postmark */}
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-dashed border-[#ff3b20]/75 p-1 flex flex-col items-center justify-center text-center font-mono text-[6.5px] lg:text-[7.5px] text-[#ff3b20] rotate-12">
                <span className="font-bold">UNINDEXED</span>
                <span className="text-[5.5px] tracking-widest my-0.5">AUTUMN · 2026</span>
                <span className="border-t border-b border-[#ff3b20]/40 w-12 lg:w-14 py-0.5 font-bold">VOID / NO ENTRY</span>
              </div>

              {/* Exhibit & Category Label */}
              <div className="text-right font-mono">
                <span className="text-[8.5px] lg:text-[9.5px] text-[#ff3b20] font-bold tracking-widest uppercase block">
                  EXHIBIT NO. 404
                </span>
                <span className="font-serif italic text-sm lg:text-base text-black/90 block">
                  Lepidoptera &amp; Leaf
                </span>
                <span className="text-[7.5px] text-black/45 uppercase tracking-wider block mt-0.5">
                  HERBARIUM SPREAD
                </span>
              </div>
            </div>

            {/* Centerpiece - Large Majestic Swallowtail Butterfly Specimen */}
            <div className="flex flex-col items-center justify-center my-auto py-1">
              <div className="relative w-48 sm:w-56 lg:w-72 h-36 sm:h-44 lg:h-52 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-500 cursor-default">
                <Image
                  src="/images/butterfly-specimen.png"
                  alt="Papilio Architectonica Butterfly Specimen"
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 288px"
                  className="object-contain"
                />
              </div>
              <div className="mt-1 px-3 py-1 rounded-sm bg-white/90 border border-black/25 shadow-xs font-mono text-[8px] lg:text-[9px] text-black/90 tracking-wider uppercase font-semibold text-center">
                SPECIMEN NO. 404.B // PAPILIO ARCHITECTONICA · 2026.D
              </div>
            </div>

            {/* Bottom Row - B&W Devansh Portrait + Ginkgo Leaf + Field Note */}
            <div className="grid grid-cols-12 gap-2 pt-2 border-t border-black/15 font-mono text-[8.5px] lg:text-[9.5px] items-center">
              {/* Devansh B&W photo thumbnail taped to page */}
              <div className="col-span-3 relative">
                <div className="relative w-15 h-19 lg:w-18 lg:h-23 bg-white p-1 border border-black/20 shadow-xs rotate-[-2deg]">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-black/15 z-10" />
                  <div className="relative w-full h-full grayscale contrast-125 overflow-hidden">
                    <Image
                      src="/images/devansh-about-bw.webp"
                      alt="Devansh Kumar Architect"
                      fill
                      sizes="(max-width: 1024px) 60px, 72px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Pressed Leaf Specimen */}
              <div className="col-span-3 relative w-16 h-16 lg:w-20 lg:h-20 mx-auto">
                <Image
                  src="/images/pressed-leaf-specimen.png"
                  alt="Pressed Ginkgo Leaf Specimen"
                  fill
                  sizes="(max-width: 1024px) 64px, 80px"
                  className="object-contain opacity-80"
                />
              </div>

              {/* Field Note Text */}
              <div className="col-span-6 space-y-1 font-mono text-[8px] lg:text-[8.5px] text-black/75 leading-tight">
                <div className="flex items-center gap-1 font-bold text-black uppercase tracking-wider text-[8.5px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b20]" />
                  <span>FIELD NOTE 404</span>
                </div>
                <p className="font-sans text-[9px] lg:text-[10px] text-black/85 leading-snug">
                  "Wing venation and leaf veins follow strict deterministic algorithms, yet diverge into unmapped beauty. An unindexed coordinate is merely an unwritten branch of the tree."
                </p>
              </div>
            </div>

            {/* Running Foot */}
            <div className="pt-2 border-t border-black/15 flex items-center justify-between font-mono text-[8px] lg:text-[9px] text-black/45 uppercase tracking-widest">
              <span>FOLIO 403 — VERSO</span>
              <span className="font-serif italic text-black/70">Commonplace Notebook</span>
            </div>

          </div>


          {/* ───────────────────────────────────────────────────────────────────
              RIGHT PAGE (RECTO // FOLIO 404): CHAPTER NOT FOUND & RECOVERY
             ─────────────────────────────────────────────────────────────────── */}
          <div className="absolute top-[4.5%] bottom-[4.5%] left-[52.5%] right-[5%] z-20 flex flex-col justify-between py-4 px-4 lg:px-6 text-[#111114]">
            
            {/* Running Head */}
            <div className="flex items-center justify-between pb-2 border-b border-black/15 font-mono text-[9px] lg:text-[10px] uppercase tracking-widest text-black/60">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#ff3b20]">RECTO // FOLIO 404</span>
                <span className="text-black/30">|</span>
                <span>ARCHIVAL ANOMALY</span>
              </div>
              <div className="px-2 py-0.5 rounded-xs bg-[#ff3b20]/15 border border-[#ff3b20]/30 font-bold text-[#ff3b20] text-[8px] lg:text-[9px]">
                ● CALIBRATED ABSTENTION
              </div>
            </div>

            {/* Monumental Chapter Title (Melchior / INTJ Editorial Style) */}
            <div className="space-y-1.5 lg:space-y-2 pt-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black uppercase tracking-tight leading-[1.05]">
                THIS CHAPTER HAS NOT YET BEEN DISCOVERED.
              </h1>
              <p className="font-mono text-[9px] lg:text-[11px] text-black/70 uppercase tracking-wider leading-relaxed">
                THE SPECIFIED ENTRY DOES NOT RESOLVE TO AN INDEXED PRODUCTION NODE <span className="text-[#ff3b20] font-bold">+</span> HYPOTHESIS UNWRITTEN
              </p>
            </div>

            {/* Melchior / Rijksmuseum Style Specification Table */}
            <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-black/[0.04] border border-black/15 rounded-xs font-mono text-[8px] lg:text-[9px] text-black/80">
              <div>
                <span className="text-black/45 block text-[7px] uppercase tracking-wider">SECTOR</span>
                <span className="font-bold">EPISTEMIC 0x404</span>
              </div>
              <div>
                <span className="text-black/45 block text-[7px] uppercase tracking-wider">STATUS</span>
                <span className="font-bold text-[#ff3b20]">UNINDEXED</span>
              </div>
              <div>
                <span className="text-black/45 block text-[7px] uppercase tracking-wider">ACTION</span>
                <span className="font-bold">FALLBACK ROUTE</span>
              </div>
            </div>

            {/* Post-Mortem Deduction (INTJ Architecture) */}
            <div className="p-3 bg-white/70 border border-black/15 rounded-xs space-y-1 font-mono text-[8.5px] lg:text-[9.5px]">
              <div className="flex items-center justify-between text-[7.5px] lg:text-[8.5px] text-black/50 uppercase">
                <span className="text-[#ff3b20] font-bold">POST-MORTEM DEDUCTION // 0x404</span>
                <span>STATUS: SAFE RETURN</span>
              </div>
              <p className="font-sans text-[10px] lg:text-[11.5px] text-black/85 leading-snug">
                "In distributed systems and high-throughput decision graphs, an unrouted vector is never allowed to crash the pipeline. When confidence falls below calibrated certainty, the architecture gracefully abstains and steers the entity back to verified coordinates."
              </p>
            </div>

            {/* Tactical Recovery Actions */}
            <div className="space-y-2 pt-1 font-mono">
              <div className="flex items-center gap-2.5">
                <Link
                  href="/"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 lg:py-3 rounded bg-black text-white hover:bg-[#ff3b20] transition-colors text-[9px] lg:text-[11px] font-bold uppercase tracking-wider shadow-sm cursor-pointer"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>RETURN TO VOLUME 01 (HOME) ↗</span>
                </Link>

                <a
                  href={`mailto:${profile.email}?subject=Report%20Unindexed%20Chapter%20404`}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 lg:py-3 rounded border border-black/25 hover:border-[#ff3b20] hover:text-[#ff3b20] transition-colors text-[9px] lg:text-[11px] font-medium uppercase cursor-pointer"
                  title="Inform the architect"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>INFORM ARCHITECT</span>
                </a>
              </div>

              {/* Quick Section Anchor Coordinates */}
              <div className="pt-1.5 border-t border-black/15 flex flex-wrap items-center gap-x-3 gap-y-1 text-[8px] lg:text-[9px] uppercase tracking-wider text-black/60">
                <span className="text-black/40 font-bold">INDEX:</span>
                <Link href="/#about" className="hover:text-[#ff3b20] transition-colors">[01: ABOUT]</Link>
                <Link href="/#work" className="hover:text-[#ff3b20] transition-colors">[02: PROJECTS]</Link>
                <Link href="/#code-activity" className="hover:text-[#ff3b20] transition-colors">[03: TELEMETRY]</Link>
                <Link href="/#research" className="hover:text-[#ff3b20] transition-colors">[04: RESEARCH]</Link>
                <Link href="/#path" className="hover:text-[#ff3b20] transition-colors">[05: CHRONOLOGY]</Link>
                <Link href="/#journal" className="hover:text-[#ff3b20] transition-colors">[06: JOURNAL]</Link>
              </div>
            </div>

            {/* Colophon Running Foot */}
            <div className="pt-2 border-t border-black/15 flex items-center justify-between font-mono text-[8px] lg:text-[9px] text-black/45 uppercase tracking-widest">
              <span>PAGE 404 // RECTO</span>
              <span className="text-[#ff3b20] font-bold text-[8px]">
                END OF UNWRITTEN BOUNDARY // 2026.D
              </span>
            </div>

          </div>

        </div>


        {/* ═══════════════════════════════════════════════════════════════════════
            2. MOBILE ADAPTIVE BOOK SPREAD (under md)
            Stacked authentic book leaves ensuring 100% readability on phones
           ═══════════════════════════════════════════════════════════════════════ */}
        <div className="block md:hidden space-y-6 max-w-lg mx-auto w-full select-text">
          
          {/* MOBILE PAGE 403 (VERSO): BOTANICAL SPECIMEN */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#5d2b27] bg-[#fbfbfa] text-[#111114]">
            
            {/* Graph Paper Grid Texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.25]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '16px 16px',
              }}
            />

            <div className="relative p-5 space-y-5">
              {/* Running Head */}
              <div className="flex items-center justify-between pb-2.5 border-b border-black/15 font-mono text-[10px] uppercase tracking-widest text-black/60">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b20]" />
                  <span className="font-bold text-black">FOLIO 403 // VERSO</span>
                </div>
                <span className="text-[#ff3b20] font-bold">UNINDEXED 2026.D</span>
              </div>

              {/* Ephemera Row */}
              <div className="flex items-center justify-between gap-3">
                <div className="bg-white border border-black/25 p-2 shadow-xs rounded-xs rotate-[-2deg] w-20">
                  <div className="w-full h-8 bg-[#ff3b20] rounded-xs" />
                  <div className="font-mono text-[8px] text-black/85 mt-1 uppercase text-center font-bold">
                    PANTONE 404
                  </div>
                </div>

                <div className="w-16 h-16 rounded-full border border-dashed border-[#ff3b20]/80 p-1 flex flex-col items-center justify-center text-center font-mono text-[7px] text-[#ff3b20] rotate-6">
                  <span className="font-bold">UNINDEXED</span>
                  <span className="text-[6px]">AUTUMN 2026</span>
                  <span className="font-bold text-[6px]">VOID</span>
                </div>

                <div className="text-right font-mono">
                  <span className="text-[9px] text-[#ff3b20] font-bold uppercase block">EXHIBIT NO. 404</span>
                  <span className="font-serif italic text-sm text-black block">Lepidoptera</span>
                </div>
              </div>

              {/* Butterfly Specimen */}
              <div className="flex flex-col items-center justify-center py-2">
                <div className="relative w-52 h-40 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/images/butterfly-specimen.png"
                    alt="Papilio Architectonica Butterfly Specimen"
                    fill
                    sizes="(max-width: 640px) 208px, 250px"
                    className="object-contain"
                  />
                </div>
                <div className="mt-2 px-3 py-1 rounded-sm bg-white border border-black/25 font-mono text-[8.5px] uppercase font-semibold text-center">
                  SPECIMEN NO. 404.B // PAPILIO ARCHITECTONICA
                </div>
              </div>

              {/* Leaf & Field Note */}
              <div className="grid grid-cols-12 gap-3 pt-3 border-t border-black/15 items-center">
                <div className="col-span-4 relative w-16 h-20 bg-white p-1 border border-black/20 shadow-xs rotate-[-1.5deg]">
                  <div className="relative w-full h-full grayscale contrast-125 overflow-hidden">
                    <Image
                      src="/images/devansh-about-bw.webp"
                      alt="Devansh Kumar Architect"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="col-span-8 space-y-1 font-mono text-[9px] text-black/75">
                  <div className="flex items-center gap-1 font-bold text-black uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b20]" />
                    <span>FIELD NOTE 404</span>
                  </div>
                  <p className="font-sans text-[11px] text-black/85 leading-snug">
                    "Wing venation and leaf veins follow strict deterministic algorithms, yet diverge into unmapped beauty. An unindexed route is an unwritten branch of the tree."
                  </p>
                </div>
              </div>

              {/* Running Foot */}
              <div className="pt-2 border-t border-black/15 flex items-center justify-between font-mono text-[9px] text-black/45 uppercase tracking-widest">
                <span>FOLIO 403 — VERSO</span>
                <span className="font-serif italic text-black/70">Herbarium Spread</span>
              </div>
            </div>
          </div>


          {/* MOBILE PAGE 404 (RECTO): CHAPTER NOT FOUND */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#5d2b27] bg-[#fbfbfa] text-[#111114]">
            
            {/* Graph Paper Grid Texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.25]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '16px 16px',
              }}
            />

            <div className="relative p-5 space-y-5">
              {/* Running Head */}
              <div className="flex items-center justify-between pb-2.5 border-b border-black/15 font-mono text-[10px] uppercase tracking-widest text-black/60">
                <span className="font-bold text-[#ff3b20]">RECTO // FOLIO 404</span>
                <div className="px-2 py-0.5 rounded-xs bg-[#ff3b20]/15 border border-[#ff3b20]/30 font-bold text-[#ff3b20] text-[8.5px]">
                  ● CALIBRATED ABSTENTION
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight leading-tight">
                  THIS CHAPTER HAS NOT YET BEEN DISCOVERED.
                </h1>
                <p className="font-mono text-[10px] text-black/70 uppercase tracking-wider leading-relaxed">
                  THE SPECIFIED ENTRY DOES NOT RESOLVE TO AN INDEXED PRODUCTION NODE <span className="text-[#ff3b20] font-bold">+</span> HYPOTHESIS UNWRITTEN
                </p>
              </div>

              {/* Spec Table */}
              <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-black/[0.04] border border-black/15 rounded-xs font-mono text-[8.5px] text-black/80">
                <div>
                  <span className="text-black/45 block text-[7px] uppercase">SECTOR</span>
                  <span className="font-bold">0x404</span>
                </div>
                <div>
                  <span className="text-black/45 block text-[7px] uppercase">STATUS</span>
                  <span className="font-bold text-[#ff3b20]">UNINDEXED</span>
                </div>
                <div>
                  <span className="text-black/45 block text-[7px] uppercase">ACTION</span>
                  <span className="font-bold">FALLBACK</span>
                </div>
              </div>

              {/* Deduction */}
              <div className="p-3.5 bg-white/70 border border-black/15 rounded-xs space-y-1 font-mono text-[9px]">
                <div className="flex items-center justify-between text-[8px] text-black/50 uppercase">
                  <span className="text-[#ff3b20] font-bold">POST-MORTEM DEDUCTION</span>
                  <span>SAFE RETURN</span>
                </div>
                <p className="font-sans text-[11px] text-black/85 leading-snug">
                  "In distributed systems, an unrouted vector is never allowed to crash the pipeline. When confidence falls below certainty, the architecture gracefully abstains and steers the entity back to verified coordinates."
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-3 font-mono">
                <Link
                  href="/"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-black text-white hover:bg-[#ff3b20] transition-colors text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>RETURN TO VOLUME 01 (HOME) ↗</span>
                </Link>

                <a
                  href={`mailto:${profile.email}?subject=Report%20Unindexed%20Chapter%20404`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-black/25 hover:border-[#ff3b20] hover:text-[#ff3b20] transition-colors text-xs font-medium uppercase cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>INFORM ARCHITECT</span>
                </a>

                {/* Quick Section Anchor Coordinates */}
                <div className="pt-2 border-t border-black/15 flex flex-wrap items-center justify-center gap-2 text-[8.5px] uppercase tracking-wider text-black/60">
                  <Link href="/#about" className="hover:text-[#ff3b20] transition-colors">[01: ABOUT]</Link>
                  <Link href="/#work" className="hover:text-[#ff3b20] transition-colors">[02: PROJECTS]</Link>
                  <Link href="/#code-activity" className="hover:text-[#ff3b20] transition-colors">[03: TELEMETRY]</Link>
                  <Link href="/#research" className="hover:text-[#ff3b20] transition-colors">[04: RESEARCH]</Link>
                  <Link href="/#journal" className="hover:text-[#ff3b20] transition-colors">[06: JOURNAL]</Link>
                </div>
              </div>

              {/* Colophon Running Foot */}
              <div className="pt-2 border-t border-black/15 flex items-center justify-between font-mono text-[9px] text-black/45 uppercase tracking-widest">
                <span>PAGE 404 // RECTO</span>
                <span className="text-[#ff3b20] font-bold text-[8px]">
                  END OF UNWRITTEN BOUNDARY
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>


      {/* ── FOOTER COLOPHON ── */}
      <footer className="w-full max-w-[1360px] mx-auto py-2.5 text-center font-mono text-[10px] text-black/45 dark:text-white/45 uppercase tracking-widest">
        DEVANSH KUMAR // DEVANTARIS — ARCHITECTURAL COMMONPLACE 2026.D · BENNETT UNIVERSITY
      </footer>

    </main>
  );
}
