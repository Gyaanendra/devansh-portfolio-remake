'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, Award, GraduationCap, MapPin } from 'lucide-react';
import { experience } from '@/data';

export default function CareerSection() {
  return (
    <section id="path" className="relative w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-14 max-w-[1720px] mx-auto select-none">
      
      {/* ── 01. EDITORIAL HEADER WITH CORAL '+' MARKERS (Reference Match) ── */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#ff3b20] uppercase">
            05 // PATH &amp; CHRONOLOGY
          </span>
          <span className="text-[#ff3b20] font-black text-sm">+</span>
        </div>

        {/* Big Bold Swiss Typographic Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-black dark:text-white uppercase tracking-tight leading-[1.08] max-w-5xl">
          SHIPPING WHILE LEADING <span className="text-[#ff3b20] font-light mx-2">+</span> 
          100+ ENGINEERS <span className="text-[#ff3b20] font-light mx-2">+</span> 
          INDUSTRY INTERNSHIPS
        </h2>
        <p className="font-mono text-xs sm:text-sm text-black/60 dark:text-white/60 uppercase tracking-widest mt-4 max-w-3xl leading-relaxed">
          PROFESSIONAL SOFTWARE INTERNSHIPS <span className="text-[#ff3b20]">+</span> 
          EXECUTIVE TEAM LEADERSHIP <span className="text-[#ff3b20]">+</span> 
          ACADEMIC FOUNDATIONS
        </p>
      </div>

      {/* ── 02. CORE EDITORIAL COMPOSITION (MATCHING ATTACHED REFERENCE LAYOUT) ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* ── LEFT COLUMN: EDITORIAL OVERVIEW + DUAL PHOTOS + PANORAMIC LANDSCAPE (7 COLS) ── */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
          
          {/* Section Tag + Two Editorial Paragraphs (Reference Match: "О ТУРЕ +") */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-black dark:text-white">
                ABOUT LEADERSHIP &amp; ENGINEERING
              </span>
              <span className="text-[#ff3b20] font-black text-sm">+</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-xs sm:text-[13px] text-black/70 dark:text-white/70 leading-relaxed">
              <p>
                As Outgoing Chairperson of IEEE Student Branch (Bennett University), I directed a 100+ member vertical structure across tech tracks, secured ₹1.48L+ corporate sponsorships, and led Global AI Summit 2.0 for 3,500+ attendees.
              </p>
              <p>
                In engineering, I build production systems from lead-gen automation and SQL pipelines processing 500+ leads/week at BuildIt Service to high-performance Flutter mobile engines with SQLite WAL caching at Raahi.
              </p>
            </div>
          </div>

          {/* Dual Photos Side-by-Side (Exact Reference Match: Two B&W Photos side-by-side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Photo 1: Award Ceremony (devansh-award.webp) */}
            <div className="relative aspect-square bg-black/[0.03] dark:bg-white/[0.03] border border-black/15 dark:border-white/15 overflow-hidden group flex flex-col justify-between p-3">
              <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-black/50 dark:text-white/50 uppercase z-10">
                <span>IEEE RECOGNITION</span>
                <span className="px-1.5 py-0.5 border border-black/15 dark:border-white/15 bg-white/80 dark:bg-black/80">
                  [PHOTO // 500 × 500 · 1:1]
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/devansh-award.webp"
                  alt="Devansh Kumar IEEE Award Ceremony"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative z-10 mt-auto bg-white/85 dark:bg-black/85 backdrop-blur-[2px] p-2 border border-black/10 dark:border-white/10 text-[9.5px] font-mono uppercase tracking-wider text-black dark:text-white">
                3RD PLACE BEST BRANCH 2025 // IEEE UP
              </div>
            </div>

            {/* Photo 2: Executive Leadership (devansh-about-bw.webp) */}
            <div className="relative aspect-square bg-black/[0.03] dark:bg-white/[0.03] border border-black/15 dark:border-white/15 overflow-hidden group flex flex-col justify-between p-3">
              <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-black/50 dark:text-white/50 uppercase z-10">
                <span>EXECUTIVE GOVERNANCE</span>
                <span className="px-1.5 py-0.5 border border-black/15 dark:border-white/15 bg-white/80 dark:bg-black/80">
                  [PHOTO // 500 × 500 · 1:1]
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/devansh-about-bw.webp"
                  alt="Devansh Kumar Bennett University Leadership"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-top grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative z-10 mt-auto bg-white/85 dark:bg-black/85 backdrop-blur-[2px] p-2 border border-black/10 dark:border-white/10 text-[9.5px] font-mono uppercase tracking-wider text-black dark:text-white">
                GLOBAL AI SUMMIT 2.0 // 3,500+ ATTENDEES
              </div>
            </div>
          </div>

          {/* Panoramic Landscape Block at Bottom (Reference Match: Mt. Fuji Landscape Block) */}
          <div className="relative w-full border border-black/15 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.02] p-5 sm:p-7 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#ff3b20] uppercase font-bold block">
                  ECOSYSTEM // BENNETT UNIVERSITY
                </span>
                <h4 className="font-mono text-sm sm:text-base font-bold text-black dark:text-white uppercase tracking-tight">
                  Systems Architecture, Research &amp; Governance
                </h4>
              </div>
              <span className="font-mono text-[9px] uppercase px-2 py-0.5 border border-black/15 dark:border-white/15 text-black/50 dark:text-white/50">
                [PANORAMIC // 1200 × 380 · 8:3]
              </span>
            </div>

            {/* Metric Telemetry Quad Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-black/10 dark:border-white/10 text-center font-mono">
              <div className="p-2.5 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06]">
                <span className="block text-lg font-black text-black dark:text-white">100+</span>
                <span className="text-[9px] uppercase tracking-wider text-black/50 dark:text-white/50">Engineers Led</span>
              </div>
              <div className="p-2.5 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06]">
                <span className="block text-lg font-black text-[#ff3b20]">₹1.48L+</span>
                <span className="text-[9px] uppercase tracking-wider text-black/50 dark:text-white/50">Sponsorships</span>
              </div>
              <div className="p-2.5 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06]">
                <span className="block text-lg font-black text-black dark:text-white">3,500+</span>
                <span className="text-[9px] uppercase tracking-wider text-black/50 dark:text-white/50">Attendees</span>
              </div>
              <div className="p-2.5 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06]">
                <span className="block text-lg font-black text-[#ff3b20]">8.75</span>
                <span className="text-[9px] uppercase tracking-wider text-black/50 dark:text-white/50">B.Tech CGPA</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: ITINERARY / TIMELINE WITH CURVED RED ARROWS (5 COLS, EXACT REFERENCE MATCH) ── */}
        <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-black/15 dark:border-white/15 lg:pl-8 xl:pl-10 pt-8 lg:pt-0">
          
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-black/10 dark:border-white/10">
            <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-black dark:text-white">
              ITINERARY // 2024 — 2028
            </span>
            <span className="text-[10px] font-mono text-[#ff3b20] font-bold">4 STATIONS</span>
          </div>

          <div className="space-y-2">
            
            {/* ── STATION 1: BUILDIT SERVICE ── */}
            <div className="group p-5 bg-white dark:bg-[#111114] border border-black/15 dark:border-white/15 hover:border-[#ff3b20] transition-colors shadow-sm">
              <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                <span className="font-bold text-[#ff3b20]">01 // MAR 2026 – PRESENT</span>
                <span className="text-black/45 dark:text-white/45 uppercase">GURUGRAM</span>
              </div>
              <h4 className="font-mono text-base font-bold text-black dark:text-white uppercase tracking-tight mb-0.5">
                BUILDIT SERVICE
              </h4>
              <p className="font-mono text-[11px] text-black/60 dark:text-white/60 uppercase tracking-wide mb-2">
                Software Developer Intern
              </p>
              <p className="font-sans text-xs text-black/75 dark:text-white/75 leading-relaxed mb-3">
                Lead-gen automation &amp; REST integrations processing 500+ leads/week. SQL analytics with Python &amp; PostgreSQL across agile sprint cycles.
              </p>
              <div className="flex flex-wrap gap-1 font-mono text-[9px] uppercase text-black/60 dark:text-white/60">
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">Python</span>
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">FastAPI</span>
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">PostgreSQL</span>
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">REST APIs</span>
              </div>
            </div>

            {/* CURVED RED DIRECTIONAL ARROW 1 -> 2 (Exact Reference Match) */}
            <div className="flex justify-center sm:justify-start sm:ml-12 my-1 pointer-events-none py-1">
              <svg className="w-10 h-14" viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Smooth downward curving spline in coral red */}
                <path d="M 12 2 C 6 20, 34 26, 20 50" stroke="#ff3b20" strokeWidth="2.25" strokeLinecap="round" />
                {/* Arrowhead */}
                <path d="M 13 44 L 20 52 L 27 45" stroke="#ff3b20" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* ── STATION 2: RAAHI ── */}
            <div className="group p-5 bg-white dark:bg-[#111114] border border-black/15 dark:border-white/15 hover:border-[#ff3b20] transition-colors shadow-sm">
              <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                <span className="font-bold text-[#ff3b20]">02 // OCT 2025 – MAR 2026</span>
                <span className="text-black/45 dark:text-white/45 uppercase">NOIDA</span>
              </div>
              <h4 className="font-mono text-base font-bold text-black dark:text-white uppercase tracking-tight mb-0.5">
                RAAHI
              </h4>
              <p className="font-mono text-[11px] text-black/60 dark:text-white/60 uppercase tracking-wide mb-2">
                Application Developer (Flutter)
              </p>
              <p className="font-sans text-xs text-black/75 dark:text-white/75 leading-relaxed mb-3">
                Shipped production cross-platform app (iOS, Android, Web) with BLoC state management and SQLite WAL mode caching for sub-800ms cold launches.
              </p>
              <div className="flex flex-wrap gap-1 font-mono text-[9px] uppercase text-black/60 dark:text-white/60">
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">Flutter</span>
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">Dart</span>
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">BLoC</span>
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">SQLite</span>
              </div>
            </div>

            {/* CURVED RED DIRECTIONAL ARROW 2 -> 3 (Exact Reference Match) */}
            <div className="flex justify-center sm:justify-start sm:ml-12 my-1 pointer-events-none py-1">
              <svg className="w-10 h-14" viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 12 2 C 6 20, 34 26, 20 50" stroke="#ff3b20" strokeWidth="2.25" strokeLinecap="round" />
                <path d="M 13 44 L 20 52 L 27 45" stroke="#ff3b20" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* ── STATION 3: IEEE STUDENT BRANCH ── */}
            <div className="group p-5 bg-white dark:bg-[#111114] border border-black/15 dark:border-white/15 hover:border-[#ff3b20] transition-colors shadow-sm">
              <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                <span className="font-bold text-[#ff3b20]">03 // SEP 2025 – AUG 2026</span>
                <span className="text-black/45 dark:text-white/45 uppercase">GREATER NOIDA</span>
              </div>
              <h4 className="font-mono text-base font-bold text-black dark:text-white uppercase tracking-tight mb-0.5">
                IEEE STUDENT BRANCH
              </h4>
              <p className="font-mono text-[11px] text-black/60 dark:text-white/60 uppercase tracking-wide mb-2">
                Student Branch Chairperson
              </p>
              <p className="font-sans text-xs text-black/75 dark:text-white/75 leading-relaxed mb-3">
                Led 100+ member vertical structure, secured ₹1.48L+ corporate sponsorships, and led Global AI Summit 2.0 (3,500+ attendees). 3rd place IEEE UP Best Branch.
              </p>
              <div className="flex flex-wrap gap-1 font-mono text-[9px] uppercase text-black/60 dark:text-white/60">
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">Governance</span>
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">Leadership</span>
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">Strategy</span>
              </div>
            </div>

            {/* CURVED RED DIRECTIONAL ARROW 3 -> 4 (Exact Reference Match) */}
            <div className="flex justify-center sm:justify-start sm:ml-12 my-1 pointer-events-none py-1">
              <svg className="w-10 h-14" viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 12 2 C 6 20, 34 26, 20 50" stroke="#ff3b20" strokeWidth="2.25" strokeLinecap="round" />
                <path d="M 13 44 L 20 52 L 27 45" stroke="#ff3b20" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* ── STATION 4: BENNETT UNIVERSITY ── */}
            <div className="group p-5 bg-white dark:bg-[#111114] border border-black/15 dark:border-white/15 hover:border-[#ff3b20] transition-colors shadow-sm">
              <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                <span className="font-bold text-[#ff3b20]">04 // AUG 2024 – AUG 2028</span>
                <span className="text-black/45 dark:text-white/45 uppercase">CGPA 8.75/10</span>
              </div>
              <h4 className="font-mono text-base font-bold text-black dark:text-white uppercase tracking-tight mb-0.5">
                BENNETT UNIVERSITY
              </h4>
              <p className="font-mono text-[11px] text-black/60 dark:text-white/60 uppercase tracking-wide mb-2">
                B.Tech — Computer Science &amp; Engineering
              </p>
              <p className="font-sans text-xs text-black/75 dark:text-white/75 leading-relaxed mb-3">
                Focus on systems design, algorithms, high-throughput backend services, and machine learning. IBM ML Professional Certificate (Feb 2026).
              </p>
              <div className="flex flex-wrap gap-1 font-mono text-[9px] uppercase text-black/60 dark:text-white/60">
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">Algorithms</span>
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">OS</span>
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">DBMS</span>
                <span className="px-1.5 py-0.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-[2px]">Networks</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
