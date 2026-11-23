'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ActivitySection from '@/components/ActivitySection';
import ResearchSection from '@/components/ResearchSection';
import CareerSection from '@/components/CareerSection';
import JournalFooter from '@/components/JournalFooter';
import ContactModal from '@/components/ContactModal';
import ScrollReveal from '@/components/ScrollReveal';
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
          const el = document.getElementById('about');
          if (typeof window !== 'undefined' && (window as any).__lenis && el) {
            (window as any).__lenis.scrollTo(el, { offset: -24 });
          } else {
            el?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        theme={currentTheme}
        onThemeChange={handleThemeChange}
      />

      {/* ── 02. EDITORIAL ABOUT & FUTURE GRID ── */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      {/* ── 03. PRODUCTION ARCHITECTURES & PROJECTS ── */}
      <ScrollReveal>
        <ProjectsSection />
      </ScrollReveal>

      {/* ── 04. CODE ACTIVITY & TELEMETRY (GITHUB, LEETCODE, CODECHEF) ── */}
      <ScrollReveal>
        <ActivitySection onOpenContact={() => setIsContactOpen(true)} />
      </ScrollReveal>

      {/* ── 05. RESEARCH & PUBLICATIONS ── */}
      <ScrollReveal>
        <ResearchSection />
      </ScrollReveal>

      {/* ── 06. CAREER CHRONOLOGY & LEADERSHIP ── */}
      <ScrollReveal>
        <CareerSection />
      </ScrollReveal>

      {/* ── 07. ARCHITECT'S JOURNAL HARDCOVER FOOTER (THE BOOK ITSELF IS THE FOOTER) ── */}
      <JournalFooter
        onOpenContact={() => setIsContactOpen(true)}
        theme={currentTheme}
        onThemeChange={handleThemeChange}
      />

      {/* ── INTERACTIVE MODALS ── */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
