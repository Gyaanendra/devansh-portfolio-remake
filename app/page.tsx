'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ActivitySection from '@/components/ActivitySection';
import ResearchSection from '@/components/ResearchSection';
import CareerSection from '@/components/CareerSection';
import ContactModal from '@/components/ContactModal';
import ThemeToggle from '@/components/ThemeToggle';
import { profile } from '@/data';

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Strictly default to light mode unless the user explicitly toggled to dark
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
    <main className="min-h-screen bg-[#f7f7f8] dark:bg-[#0c0c0e] text-[#111114] dark:text-[#f3f4f6] transition-colors duration-500 font-sans">
      {/* ── 01. BRUTALIST AURA HERO (MATCHING USER REFERENCE) ── */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        onExploreProjects={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        theme={currentTheme}
        onThemeChange={handleThemeChange}
      />

      {/* ── 02. EDITORIAL ABOUT & FUTURE GRID (MATCHING USER REFERENCE IMAGES 1 & 2) ── */}
      <AboutSection />

      {/* ── 03. PRODUCTION ARCHITECTURES & PROJECTS ── */}
      <ProjectsSection />

      {/* ── 03. CODE ACTIVITY & TELEMETRY (GITHUB, LEETCODE, CODECHEF) ── */}
      <ActivitySection />

      {/* ── 04. RESEARCH & PUBLICATIONS ── */}
      <ResearchSection />

      {/* ── 05. CAREER CHRONOLOGY & LEADERSHIP ── */}
      <CareerSection />

      {/* ── 06. FOOTER ── */}
      <footer className="w-full border-t border-black/[0.08] dark:border-white/[0.08] py-16 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 font-mono text-xs text-black/60 dark:text-white/60">
        <div>
          <span className="font-bold text-black dark:text-white tracking-widest text-sm uppercase block mb-1">
            DEVANSH KUMAR // DEVANTARIS
          </span>
          <p className="text-[11px] text-black/45 dark:text-white/45 uppercase tracking-wider">
            SYSTEMS ARCHITECTURE · APPLIED MACHINE LEARNING · BENNETT UNIV
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-widest">
          <ThemeToggle theme={currentTheme} onThemeChange={handleThemeChange} />
          <button
            onClick={() => setIsContactOpen(true)}
            className="hover:text-[#ff3b20] transition-colors"
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
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            TOP ↑
          </button>
        </div>
      </footer>

      {/* ── INTERACTIVE MODALS ── */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
