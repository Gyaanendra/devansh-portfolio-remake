'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RefreshCw, Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { profile } from '@/data';

interface HeroSectionProps {
  onOpenContact?: () => void;
  onExploreProjects?: () => void;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

export default function HeroSection({ onOpenContact, onExploreProjects, theme, onThemeChange }: HeroSectionProps) {
  const [activePose, setActivePose] = useState<1 | 2 | 3>(1);
  const [titleMode, setTitleMode] = useState<'dev' | 'folio' | 'devansh'>('dev');
  const [menuOpen, setMenuOpen] = useState(false);

  const fontSizeClass =
    titleMode === 'dev'
      ? 'text-[120px] sm:text-[170px] md:text-[220px] lg:text-[260px] xl:text-[300px]'
      : titleMode === 'folio'
      ? 'text-[95px] sm:text-[135px] md:text-[175px] lg:text-[210px] xl:text-[240px]'
      : 'text-[70px] sm:text-[100px] md:text-[130px] lg:text-[155px] xl:text-[180px]';

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onExploreProjects) {
      onExploreProjects();
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#f7f7f8] dark:bg-[#0c0c0e] text-[#111114] dark:text-[#f3f4f6] flex flex-col justify-between overflow-hidden transition-colors duration-500">
      
      {/* ── TOP EDITORIAL HEADER (Exact Reference Match) ── */}
      <header className="relative z-40 w-full px-6 sm:px-10 lg:px-14 pt-8 pb-4 flex items-center justify-between">
        {/* Left: +1 and Nav links */}
        <div className="flex items-center gap-8 sm:gap-14">
          <button
            onClick={() => setTitleMode(prev => prev === 'dev' ? 'folio' : prev === 'folio' ? 'devansh' : 'dev')}
            className="flex items-center gap-1.5 font-mono text-base font-bold text-black dark:text-white hover:opacity-75 transition-opacity"
            title="Toggle Brand: dev. / folio. / devansh."
          >
            <span className="text-lg">+1</span>
          </button>

          <nav className="hidden md:flex items-center gap-10 text-[11.5px] font-mono tracking-[0.2em] uppercase font-medium">
            <button
              onClick={() => scrollToSection('about')}
              className="text-black/85 dark:text-white/85 hover:text-black dark:hover:text-white transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-black/45 dark:text-white/45 hover:text-black dark:hover:text-white transition-colors"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('research')}
              className="text-black/45 dark:text-white/45 hover:text-black dark:hover:text-white transition-colors"
            >
              RESEARCH
            </button>
            <button
              onClick={() => scrollToSection('path')}
              className="text-black/45 dark:text-white/45 hover:text-black dark:hover:text-white transition-colors"
            >
              CHRONOLOGY
            </button>
          </nav>
        </div>

        {/* Right Nav & Utilities */}
        <div className="flex items-center gap-6 sm:gap-10 text-[11.5px] font-mono tracking-[0.2em] uppercase font-medium">
          <button
            onClick={() => scrollToSection('work')}
            className="hidden sm:inline-block text-black/75 dark:text-white/75 hover:text-black dark:hover:text-white transition-colors"
          >
            SYSTEMS
          </button>

          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-black/75 dark:text-white/75 hover:text-black dark:hover:text-white transition-colors"
          >
            RESUME ↗
          </a>

          {/* Simple Clean Light / Dark Switcher */}
          <ThemeToggle theme={theme} onThemeChange={onThemeChange} />

          {/* Hamburger Menu Trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 text-black dark:text-white hover:opacity-70 transition-opacity"
            aria-label="Toggle Navigation"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE DROPDOWN DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="relative z-30 w-full bg-white dark:bg-[#111114] border-b border-black/10 dark:border-white/10 px-8 py-6 flex flex-col gap-4 font-mono text-xs uppercase tracking-widest md:hidden"
          >
            <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-[#ff3b20]">
              01 // ABOUT
            </button>
            <button onClick={() => scrollToSection('work')} className="text-left py-2 hover:text-[#ff3b20]">
              02 // PROJECTS
            </button>
            <button onClick={() => scrollToSection('research')} className="text-left py-2 hover:text-[#ff3b20]">
              03 // RESEARCH &amp; PAPERS
            </button>
            <button onClick={() => scrollToSection('path')} className="text-left py-2 hover:text-[#ff3b20]">
              04 // CAREER CHRONOLOGY
            </button>
            <button onClick={() => { setMenuOpen(false); onOpenContact?.(); }} className="text-left py-2 text-[#ff3b20]">
              05 // DIRECT DISPATCH
            </button>
            <div className="pt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
              <span className="text-[10px] text-black/50 dark:text-white/50">06 // APPEARANCE</span>
              <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN HERO BODY ── */}
      <div className="relative z-20 flex-1 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-center my-auto py-4 sm:py-8 lg:py-12">
        
        {/* ── TOP EDITORIAL MICRO-DATA (Exact Reference Match: 2 Fine Columns on Top of dev.) ── */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 mb-3 lg:mb-6">
          <div className="md:col-span-4 lg:col-span-3 text-[10.5px] font-mono tracking-wider">
            <span className="font-bold text-black dark:text-white uppercase tracking-[0.2em] block mb-1">
              X/LABS
            </span>
            <p className="text-black/55 dark:text-white/50 uppercase leading-relaxed text-[10px]">
              FOR AUTHENTICATION OF STAGED UNCERTAINTY-AWARE MODELS. 284K+ TXNS ROUTED SUB-100MS.
            </p>
          </div>

          <div className="md:col-span-5 lg:col-span-4 hidden md:block text-[10.5px] font-mono tracking-wider">
            <span className="font-bold text-black/40 dark:text-white/40 uppercase tracking-[0.2em] block mb-1">
              BENNETT UNIV // 2026.D
            </span>
            <p className="text-black/55 dark:text-white/50 uppercase leading-relaxed text-[10px]">
              ENGINEERED STRUCTURAL INTERFACES &amp; 5-STAGE CRYPTOGRAPHIC PIPELINES. IEEE CHAIRPERSON.
            </p>
          </div>
        </div>

        {/* ── CORE COMPOSITION: GIANT WORD + BOLD ACCENT STRIP + CUTOUT FIGURE ── */}
        <div className="relative w-full flex flex-col lg:flex-row items-stretch lg:items-center justify-between min-h-[440px] sm:min-h-[520px] lg:min-h-[620px]">
          
          {/* LEFT: GIANT "dev." & STENCIL "001" */}
          <div className="relative z-10 flex flex-col justify-between self-stretch lg:max-w-[45%] py-2">
            <div>
              <div className="mb-2">
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] text-[#ff3b20] uppercase font-bold">
                  DEVANSH KUMAR // PORTFOLIO 2026
                </span>
              </div>
              <motion.h1
                key={titleMode}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`${fontSizeClass} font-black tracking-[-0.07em] leading-[0.76] text-black dark:text-white cursor-pointer group select-none`}
                onClick={() => setTitleMode(prev => prev === 'dev' ? 'folio' : prev === 'folio' ? 'devansh' : 'dev')}
                title="Click to cycle title: dev. / folio. / devansh."
              >
                <span>{titleMode}</span>
                <span className="text-[#ff3b20] inline-block transition-transform duration-300 group-hover:scale-125">.</span>
              </motion.h1>
            </div>

            {/* STYLED SEGMENTED "001" (Bottom-Left matching reference) */}
            <div className="mt-8 lg:mt-auto pt-6 flex items-center gap-6">
              <div className="flex flex-col select-none" aria-label="001 Spec Identifier">
                <svg
                  className="w-28 sm:w-32 lg:w-36 h-12 sm:h-14 text-black dark:text-white"
                  viewBox="0 0 150 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* First Digit 0 (Segmented Stadium) */}
                  <rect x="2" y="4" width="40" height="54" rx="15" stroke="currentColor" strokeWidth="8" fill="none" />
                  <line x1="8" y1="31" x2="36" y2="31" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Second Digit 0 */}
                  <rect x="52" y="4" width="40" height="54" rx="15" stroke="currentColor" strokeWidth="8" fill="none" />
                  <line x1="58" y1="31" x2="86" y2="31" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Third Digit 1 */}
                  <line x1="120" y1="4" x2="120" y2="58" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
                  <line x1="106" y1="18" x2="120" y2="4" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  <line x1="108" y1="58" x2="132" y2="58" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </div>

              {/* Devansh Pose Toggle */}
              <button
                onClick={() => setActivePose(p => p === 1 ? 2 : p === 2 ? 3 : 1)}
                className="ml-auto lg:ml-6 flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase bg-black/5 dark:bg-white/10 rounded border border-black/10 dark:border-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all cursor-pointer"
                title="Switch Devansh Silhouette / Pose"
              >
                <RefreshCw className="w-3 h-3 text-[#ff3b20]" />
                <span>{activePose === 1 ? 'POSE 01' : activePose === 2 ? 'POSE 02' : 'COLOR'}</span>
              </button>
            </div>
          </div>

          {/* ── RIGHT ACCENT BLOCK & DEVANSH CUTOUT STACK ── */}
          <div className="relative w-full lg:w-[58%] xl:w-[62%] h-[380px] sm:h-[480px] lg:h-[600px] xl:h-[660px] flex items-end justify-center lg:justify-end mt-6 lg:mt-0">
            
            {/* 1. DEVANSH KUMAR CUTOUT (Layered at z-10 behind the translucent red banner) */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 h-[92%] sm:h-[96%] lg:h-full w-auto flex items-end justify-center pointer-events-none max-w-[520px] sm:max-w-[660px] lg:max-w-[800px]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePose}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-full h-full flex items-end justify-center"
                >
                  <Image
                    src={
                      activePose === 1
                        ? '/images/devansh-hero-cutout-1-tight-bw-enhanced.png'
                        : activePose === 2
                        ? '/images/devansh-hero-cutout-2-tight-bw-enhanced.png'
                        : '/images/devansh-hero-cutout-1-tight-enhanced.png'
                    }
                    alt="Devansh Kumar — Systems Architecture & Applied ML"
                    width={activePose === 2 ? 1132 : 1786}
                    height={activePose === 2 ? 1202 : 1414}
                    priority
                    className={`h-full w-auto object-contain object-bottom drop-shadow-[0_28px_56px_rgba(0,0,0,0.35)] ${
                      activePose === 3 ? '' : 'grayscale contrast-[1.12]'
                    }`}
                    style={
                      activePose === 3
                        ? { filter: 'contrast(1.06) brightness(1.02)' }
                        : { filter: 'grayscale(100%) contrast(1.15) brightness(1.0)' }
                    }
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* 2. THE SIGNATURE TRANSLUCENT CORAL/RED RECTANGLE (Layered at z-20 ABOVE Devansh) */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'right center' }}
              className="absolute z-20 bottom-6 sm:bottom-10 lg:bottom-14 left-0 lg:left-[-60px] xl:left-[-100px] right-0 h-[140px] sm:h-[190px] lg:h-[220px] pointer-events-none flex items-end justify-start overflow-hidden"
            >
              {/* Bold Coral/Red Layer (Decreased transparency / rich solid presence matching reference) */}
              <div className="absolute inset-0 bg-[#ff3b20]/82 dark:bg-[#ff3b20]/75 transition-colors" />

              {/* ACTION BUTTON PINNED TO BOTTOM-LEFT OF RED BANNER (Exact Reference Match) */}
              <button
                onClick={() => scrollToSection('work')}
                className="relative z-30 pointer-events-auto w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center cursor-pointer group shadow-xl"
                aria-label="View Projects and Architecture"
              >
                <ArrowRight className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </motion.div>

            {/* 3. VERTICAL ROTATED TEXT ON RIGHT EDGE (Exact Reference Match: X-LAB MATERIALS OF CREATION) */}
            <div className="absolute z-20 right-[-32px] sm:right-[-26px] lg:right-[-16px] top-1/2 -translate-y-1/2 rotate-90 origin-center pointer-events-none hidden sm:block">
              <span className="font-mono text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.28em] uppercase text-black/75 dark:text-white/75 font-bold whitespace-nowrap">
                X-LAB MATERIALS OF CREATION
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM STRIP (Aura Status & Live Coordinates) ── */}
      <footer className="relative z-20 w-full px-6 sm:px-10 lg:px-14 py-4 flex items-center justify-between text-[11px] font-mono text-black/50 dark:text-white/50 uppercase tracking-wider">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-black dark:text-white font-medium">
            <span className="w-2 h-2 rounded-full bg-[#ff3b20] animate-pulse" />
            OPEN TO OPPORTUNITIES · 2026
          </span>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="inline-flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors"
        >
          <span>DISCOVER</span>
          <span className="text-[#ff3b20]">↓</span>
        </button>
      </footer>
    </section>
  );
}
