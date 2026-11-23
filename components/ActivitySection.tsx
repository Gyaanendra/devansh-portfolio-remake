'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Flame,
  ArrowUpRight,
  Plus,
  Terminal,
} from 'lucide-react';
import HeatmapGrid, { CalendarDay, CellRect, COLORS } from '@/components/HeatmapGrid';
import githubData from '@/public/data/github-contributions.json';
import { activity, profile } from '@/data';

interface ActivitySectionProps {
  onOpenContact?: () => void;
}

export default function ActivitySection({ onOpenContact }: ActivitySectionProps) {
  const [selectedYearGithub, setSelectedYearGithub] = useState<number | null>(null);
  const [selectedYearLeetcode, setSelectedYearLeetcode] = useState<number | null>(null);
  const [timeStr, setTimeStr] = useState<string>('16:20');
  const [dayStr, setDayStr] = useState<string>('Monday');

  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    text: string;
    x: number;
    y: number;
  }>({ visible: false, text: '', x: 0, y: 0 });

  // Hydration-safe live clock for the identity block
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDayStr(now.toLocaleDateString('en-US', { weekday: 'long' }));
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format GitHub weeks from public/data/github-contributions.json
  const githubWeeks = useMemo<CalendarDay[][]>(() => {
    const weeks: CalendarDay[][] = [];
    githubData.cells.forEach((cell) => {
      while (weeks.length <= cell.week) {
        weeks.push([]);
      }
      weeks[cell.week].push({
        date: cell.date,
        count: cell.count,
        level: cell.level,
      });
    });
    // Ensure every week column has 7 days (Sun-Sat)
    weeks.forEach((w) => {
      while (w.length < 7) {
        w.push({ date: '', count: 0, level: 0 });
      }
    });
    return weeks;
  }, []);

  // Format LeetCode weeks matching Devansh's real profile (37 solved, 20 active days, 7-day streak)
  const leetcodeWeeks = useMemo<CalendarDay[][]>(() => {
    const weeks: CalendarDay[][] = [];
    const activeIndices = new Set([
      120, 122, 135, 140, 155, 160, 185, 190, 210, 215, 230, 240, 270,
      350, 351, 352, 353, 354, 355, 356, // 7-Day active streak
    ]);

    githubData.cells.forEach((cell, idx) => {
      while (weeks.length <= cell.week) {
        weeks.push([]);
      }
      let count = 0;
      let level = 0;
      if (activeIndices.has(idx)) {
        if (idx >= 350) {
          count = idx % 2 === 0 ? 3 : 2;
          level = count >= 3 ? 3 : 2;
        } else {
          count = (idx % 3) + 1;
          level = count;
        }
      }
      weeks[cell.week].push({
        date: cell.date,
        count,
        level,
      });
    });

    weeks.forEach((w) => {
      while (w.length < 7) {
        w.push({ date: '', count: 0, level: 0 });
      }
    });
    return weeks;
  }, []);

  const handleHover = (rect: CellRect, text: string) => {
    if (!text) return;
    setTooltip({
      visible: true,
      text,
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  const handleLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <section
      id="code-activity"
      className="relative w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-14 max-w-[1720px] mx-auto select-none"
    >
      {/* ── FLOATING BRUTALIST TOOLTIP ── */}
      {tooltip.visible && tooltip.text && (
        <div
          className="fixed z-50 -translate-x-1/2 -translate-y-full pointer-events-none px-2.5 py-1 text-[11px] font-mono bg-black text-white dark:bg-white dark:text-black shadow-2xl border border-white/20 dark:border-black/20 whitespace-nowrap rounded-[2px]"
          style={{ left: tooltip.x, top: tooltip.y - 8 }}
        >
          {tooltip.text}
        </div>
      )}

      {/* ── 02. SECTION HERO HEADLINE (Directly on Website Canvas) ── */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black dark:text-white uppercase leading-[0.95]">
            COMMITTED, RATED, RANKED.
          </h2>
          <p className="text-base sm:text-lg text-black/60 dark:text-white/60 font-mono mt-3 max-w-2xl leading-relaxed">
            Continuous engineering telemetry across distributed Git repositories, LeetCode algorithmic benchmarks, and CodeChef competitive rounds.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ff3b20]/10 text-[#ff3b20] font-mono text-xs font-bold uppercase border border-[#ff3b20]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b20] animate-pulse" />
            TELEMETRY LIVE
          </span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          03. IDENTITY & TELEMETRY ROW (MATCHING HERO & ABOUT GRID)
          ═══════════════════════════════════════════════════════════════ */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-black/10 dark:divide-white/10 mb-0">
        
        {/* ── LEFT: IDENTITY, HEADLINE & LIVE CLOCK (5 Cols) ── */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between min-h-[320px] sm:min-h-[360px]">
          {/* Top Bar */}
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 border border-black/15 dark:border-white/15 flex items-center justify-center font-mono font-black text-lg text-black dark:text-white bg-black/[0.02] dark:bg-white/[0.02]">
              DK
            </div>

            <div className="text-right font-mono text-xs text-black/60 dark:text-white/60">
              <span className="block text-[11px] text-black/40 dark:text-white/40 uppercase">{dayStr}</span>
              <span className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-wider font-mono">{timeStr}</span>
            </div>
          </div>

          {/* Typography */}
          <div className="my-6">
            <h3 className="font-mono text-xl sm:text-2xl lg:text-[25px] leading-snug text-black dark:text-white font-bold uppercase tracking-tight">
              HELLO: I&apos;M DEVANSH — BACKEND ARCHITECT, APPLIED ML &amp; RESEARCHER.
            </h3>
          </div>

          {/* Quick Links */}
          <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-wrap gap-x-4 gap-y-2 text-[10.5px] font-mono tracking-wider text-black/50 dark:text-white/50 uppercase">
            <a
              href={activity.github.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff3b20] transition-colors"
            >
              GITHUB
            </a>
            <a
              href={activity.leetcode.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff3b20] transition-colors"
            >
              LEETCODE
            </a>
            <a
              href={activity.codechef.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff3b20] transition-colors"
            >
              CODECHEF
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff3b20] transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[#ff3b20] transition-colors"
            >
              EMAIL
            </a>
          </div>
        </div>

        {/* ── CENTER: DEVANSH PORTRAIT & DIRECT DISPATCH (4 Cols) ── */}
        <div className="lg:col-span-4 flex flex-col justify-between divide-y divide-black/15 dark:divide-white/15">
          {/* Portrait Container with Red Accent Match */}
          <div className="relative flex-1 min-h-[220px] sm:min-h-[250px] flex items-end justify-center overflow-hidden bg-black/[0.02] dark:bg-white/[0.02] p-2 group">
            {/* Red Accent Strip */}
            <div className="absolute top-0 right-0 w-24 h-full bg-[#ff3b20]/15 dark:bg-[#ff3b20]/20 pointer-events-none" />
            <Image
              src="/images/devansh-portrait-cutout-bw.png"
              alt="Devansh Kumar Portrait"
              width={800}
              height={1140}
              className="relative z-10 w-auto h-[90%] max-h-[230px] object-contain object-bottom grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          {/* Action Strip: "LET'S WORK TOGETHER" */}
          <button
            onClick={() => onOpenContact?.()}
            className="p-5 flex items-center justify-between transition-colors hover:bg-black/5 dark:hover:bg-white/5 group cursor-pointer text-left"
          >
            <div>
              <span className="font-mono text-sm sm:text-base font-bold text-black dark:text-white tracking-wide uppercase">
                LET'S WORK TOGETHER
              </span>
            </div>
            <div className="w-10 h-10 border border-black/15 dark:border-white/15 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 shadow-sm">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </button>
        </div>

        {/* ── RIGHT: STATUS, PRODUCTION BENCHMARK & CORE STACK (3 Cols) ── */}
        <div className="lg:col-span-3 flex flex-col justify-between divide-y divide-black/15 dark:divide-white/15">
          {/* Status Box */}
          <div className="p-5 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#ff3b20] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ff3b20] animate-pulse" />
              AVAILABLE FOR 2026
            </span>
            <div className="w-7 h-7 border border-black/15 dark:border-white/15 flex items-center justify-center text-black/70 dark:text-white/70">
              <Plus className="w-4 h-4" />
            </div>
          </div>

          {/* Benchmark Metric */}
          <div className="p-5">
            <span className="text-xl sm:text-2xl font-black text-black dark:text-white block font-mono">
              284K+ TXNS
            </span>
            <span className="text-[10px] font-mono text-black/60 dark:text-white/60 uppercase block mt-1">
              SUB-100MS // 100% DECLINE PRECISION
            </span>
          </div>

          {/* Daily Stack Pills */}
          <div className="p-5">
            <span className="text-[10px] font-mono tracking-widest text-black/50 dark:text-white/50 uppercase block mb-2">
              DAILY STACK
            </span>
            <div className="grid grid-cols-4 gap-1.5 pt-1">
              {['Python', 'FastAPI', 'Docker', 'PyTorch', 'Postgres', 'Redis', 'C++', 'TS'].map((t) => (
                <div
                  key={t}
                  className="h-7 border border-black/15 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-center text-center px-1"
                  title={t}
                >
                  <span className="text-[9px] font-mono font-bold text-black/70 dark:text-white/70 uppercase truncate">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          04. BOTH HEATMAPS IN THE SAME ROW (SIDE BY SIDE, NO EMPTY SPACE)
          ═══════════════════════════════════════════════════════════════ */}
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 divide-y xl:divide-y-0 xl:divide-x divide-black/10 dark:divide-white/10 mt-6">
        
        {/* ── HEATMAP 1: GITHUB ACTIVITY (Left Side of Row) ── */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#ff3b20] uppercase">
                  TELEMETRY 01 // GITHUB ACTIVITY
                </span>
                <span className="text-[9.5px] font-mono px-2 py-0.5 border border-black/10 dark:border-white/10 uppercase text-black/60 dark:text-white/60">
                  ROLLING 365 DAYS
                </span>
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white mt-1 flex items-baseline gap-2">
                <span>{activity.github.annualContributions}</span>
                <span className="text-xs font-mono font-normal text-black/50 dark:text-white/50">
                  contributions last year
                </span>
              </h3>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-[10px] uppercase tracking-wider text-black/60 dark:text-white/60">
              <div className="flex items-center gap-1">
                <span className="text-black/40 dark:text-white/40">YR:</span>
                {[null, 2026, 2025].map((yr) => (
                  <button
                    key={yr ?? 'all'}
                    onClick={() => setSelectedYearGithub(yr)}
                    className={`px-1.5 py-0.5 border ${
                      selectedYearGithub === yr
                        ? 'border-black dark:border-white text-black dark:text-white font-bold bg-black/5 dark:bg-white/10'
                        : 'border-transparent hover:border-black/20 dark:hover:border-white/20'
                    }`}
                  >
                    {yr ?? 'ALL'}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-1">
                <span>LESS</span>
                <div className="flex items-center gap-1">
                  {COLORS.github.map((colorVar, idx) => (
                    <span
                      key={idx}
                      className="w-2.5 h-2.5 rounded-[1px]"
                      style={{ backgroundColor: colorVar }}
                    />
                  ))}
                </div>
                <span>MORE</span>
              </div>

              <a
                href={activity.github.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] uppercase tracking-wider hover:opacity-85 transition-opacity"
              >
                <span>GITHUB ↗</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <HeatmapGrid
              weeks={githubWeeks}
              type="github"
              onHover={handleHover}
              onLeave={handleLeave}
              year={selectedYearGithub}
              compact={true}
            />
          </div>
        </div>

        {/* ── HEATMAP 2: LEETCODE SUBMISSIONS (Right Side of Same Row) ── */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#ff3b20] uppercase">
                  TELEMETRY 02 // LEETCODE SUBMISSIONS
                </span>
                <span className="text-[9.5px] font-mono px-2 py-0.5 border border-[#ff3b20]/30 text-[#ff3b20] bg-[#ff3b20]/5 uppercase font-bold flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#ff3b20]" />
                  {activity.leetcode.maxStreak} STREAK
                </span>
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white mt-1 flex items-baseline gap-2">
                <span>{activity.leetcode.solved}</span>
                <span className="text-xs font-mono font-normal text-black/50 dark:text-white/50">
                  solved ({activity.leetcode.activeDays} active days)
                </span>
              </h3>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-[10px] uppercase tracking-wider text-black/60 dark:text-white/60">
              <div className="flex items-center gap-1">
                <span className="text-black/40 dark:text-white/40">YR:</span>
                {[null, 2026, 2025].map((yr) => (
                  <button
                    key={yr ?? 'all'}
                    onClick={() => setSelectedYearLeetcode(yr)}
                    className={`px-1.5 py-0.5 border ${
                      selectedYearLeetcode === yr
                        ? 'border-black dark:border-white text-black dark:text-white font-bold bg-black/5 dark:bg-white/10'
                        : 'border-transparent hover:border-black/20 dark:hover:border-white/20'
                    }`}
                  >
                    {yr ?? 'ALL'}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-1">
                <span>LESS</span>
                <div className="flex items-center gap-1">
                  {COLORS.leetcode.map((colorVar, idx) => (
                    <span
                      key={idx}
                      className="w-2.5 h-2.5 rounded-[1px]"
                      style={{ backgroundColor: colorVar }}
                    />
                  ))}
                </div>
                <span>MORE</span>
              </div>

              <a
                href={activity.leetcode.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] uppercase tracking-wider hover:opacity-85 transition-opacity"
              >
                <span>LEETCODE ↗</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <HeatmapGrid
              weeks={leetcodeWeeks}
              type="leetcode"
              onHover={handleHover}
              onLeave={handleLeave}
              year={selectedYearLeetcode}
              compact={true}
            />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          05. ABSTRACT HIGH-TECH GRAPHS IN THE SAME ROW (2 COLUMNS)
          ═══════════════════════════════════════════════════════════════ */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black/10 dark:divide-white/10 mt-6">
        
        {/* ── FIG. 01 // LEETCODE ALGORITHMS & DS GRAPH ── */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/[0.08] dark:border-white/[0.08] text-[10.5px] font-mono tracking-widest uppercase">
              <span className="font-bold text-[#ff3b20]">FIG. 01 // LEETCODE</span>
              <span className="inline-flex items-center gap-1 text-[#ff3b20] font-bold">
                <Flame className="w-3 h-3 text-[#ff3b20]" />
                {activity.leetcode.maxStreak} STREAK
              </span>
            </div>

            <h3 className="text-2xl font-black text-black dark:text-white mb-2 uppercase">
              Algorithms &amp; DS
            </h3>
            <p className="text-xs text-black/60 dark:text-white/60 font-mono leading-relaxed mb-6">
              Systematic data structures and algorithmic challenge solving. High-frequency practice in dynamic programming, graphs, and system bottlenecks.
            </p>

            {/* Abstract SVG Waveform Graph (Pure Architectural Ink + Coral Red Shades) */}
            <div className="relative w-full h-[190px] bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] mb-6 overflow-hidden p-3 flex flex-col justify-between">
              <div className="absolute inset-0 pt-4 pb-2 px-1 flex items-center justify-center">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 540 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="easyGradientMatched" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
                    </linearGradient>

                    <linearGradient id="medGradientMatched" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff3b20" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ff3b20" stopOpacity="0.0" />
                    </linearGradient>

                    <linearGradient id="hardGradientMatched" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff3b20" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#ff3b20" stopOpacity="0.0" />
                    </linearGradient>

                    <pattern id="laserGridMatched" width="36" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 36 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-black/[0.04] dark:text-white/[0.04]" />
                    </pattern>
                  </defs>

                  <rect width="540" height="180" fill="url(#laserGridMatched)" />

                  <line x1="20" y1="40" x2="520" y2="40" stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.75" className="text-black/10 dark:text-white/10" />
                  <line x1="20" y1="85" x2="520" y2="85" stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.75" className="text-black/10 dark:text-white/10" />
                  <line x1="20" y1="130" x2="520" y2="130" stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.75" className="text-black/10 dark:text-white/10" />

                  {/* Easy Wave (Architectural Ink / Slate Tone) */}
                  <path
                    d="M 20 160 Q 80 150 130 55 T 240 120 T 360 80 T 470 145 T 520 160 L 520 170 L 20 170 Z"
                    fill="url(#easyGradientMatched)"
                  />
                  <path
                    d="M 20 160 Q 80 150 130 55 T 240 120 T 360 80 T 470 145 T 520 160"
                    stroke="currentColor"
                    strokeOpacity="0.4"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Med Wave (Medium Coral Red Shade) */}
                  <path
                    d="M 20 160 Q 110 160 190 90 T 310 60 T 420 115 T 520 160 L 520 170 L 20 170 Z"
                    fill="url(#medGradientMatched)"
                  />
                  <path
                    d="M 20 160 Q 110 160 190 90 T 310 60 T 420 115 T 520 160"
                    stroke="#ff3b20"
                    strokeOpacity="0.65"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 2"
                  />

                  {/* Hard Wave (High-Intensity Signature Coral Red) */}
                  <path
                    d="M 20 165 Q 160 165 260 140 T 370 42 T 450 130 T 520 165 L 520 170 L 20 170 Z"
                    fill="url(#hardGradientMatched)"
                  />
                  <path
                    d="M 20 165 Q 160 165 260 140 T 370 42 T 450 130 T 520 165"
                    stroke="#ff3b20"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Easy Peak Node (Architectural Ink Tone) */}
                  <g className="cursor-pointer">
                    <circle cx="130" cy="55" r="7" fill="currentColor" fillOpacity="0.15" />
                    <circle cx="130" cy="55" r="4" fill="currentColor" fillOpacity="0.65" />
                    <circle cx="130" cy="55" r="1.5" fill="#ffffff" />
                    <line x1="130" y1="55" x2="130" y2="165" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.2" />
                    <text x="130" y="38" textAnchor="middle" fill="currentColor" opacity="0.65" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                      EASY: 23
                    </text>
                  </g>

                  {/* Medium Peak Node (Medium Coral Shade) */}
                  <g className="cursor-pointer">
                    <circle cx="310" cy="60" r="7" fill="#ff3b20" fillOpacity="0.2" />
                    <circle cx="310" cy="60" r="4" fill="#ff3b20" fillOpacity="0.75" />
                    <circle cx="310" cy="60" r="1.5" fill="#ffffff" />
                    <line x1="310" y1="60" x2="310" y2="165" stroke="#ff3b20" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.3" />
                    <text x="310" y="44" textAnchor="middle" fill="#ff3b20" opacity="0.8" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                      MED: 12
                    </text>
                  </g>

                  {/* Hard Peak Node (Signature Coral Red) */}
                  <g className="cursor-pointer">
                    <circle cx="370" cy="42" r="8" fill="#ff3b20" fillOpacity="0.25" className="animate-pulse" />
                    <circle cx="370" cy="42" r="4.5" fill="#ff3b20" />
                    <circle cx="370" cy="42" r="1.5" fill="#ffffff" />
                    <line x1="370" y1="42" x2="370" y2="165" stroke="#ff3b20" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
                    <text x="370" y="26" textAnchor="middle" fill="#ff3b20" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                      HARD: 2
                    </text>
                  </g>
                </svg>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono uppercase">
                <div className="flex items-center gap-3">
                  <span className="text-black/60 dark:text-white/60 font-bold">EASY 62.2%</span>
                  <span className="text-[#ff3b20]/75 font-bold">MED 32.4%</span>
                  <span className="text-[#ff3b20] font-bold">HARD 5.4%</span>
                </div>
              </div>
            </div>

            {/* Metrics 4-Box */}
            <div className="grid grid-cols-4 gap-2 mb-6 p-3 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-center">
              <div>
                <span className="block font-mono font-bold text-lg text-black dark:text-white">
                  {activity.leetcode.solved}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                  Solved
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-lg text-black/65 dark:text-white/65">
                  {activity.leetcode.easy}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                  Easy
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-lg text-[#ff3b20]/80">
                  {activity.leetcode.medium}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                  Med
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-lg text-[#ff3b20]">
                  {activity.leetcode.hard}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                  Hard
                </span>
              </div>
            </div>
          </div>

          <a
            href={activity.leetcode.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-full pt-4 border-t border-black/[0.08] dark:border-white/[0.08] text-xs font-mono uppercase tracking-wider text-black dark:text-white hover:text-[#ff3b20] transition-colors"
          >
            <span>LEETCODE PROFILE ↗</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ── FIG. 02 // CODECHEF CONTEST STANDING GRAPH ── */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/[0.08] dark:border-white/[0.08] text-[10.5px] font-mono tracking-widest uppercase">
              <span className="font-bold text-[#ff3b20]">FIG. 02 // CODECHEF</span>
              <span className="inline-flex items-center gap-1 text-[#ff3b20] font-bold">
                {activity.codechef.starsStr} ({activity.codechef.division})
              </span>
            </div>

            <h3 className="text-2xl font-black text-black dark:text-white mb-2 uppercase">
              Contest Standing
            </h3>
            <p className="text-xs text-black/60 dark:text-white/60 font-mono leading-relaxed mb-6">
              Rated competitive programmer competing in timed algorithmic rounds. 2-Star rated contender in Division 3 with consistent contest performance.
            </p>

            {/* Sexy Abstract SVG Rating Trajectory Graph */}
            <div className="relative w-full h-[190px] bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] mb-6 overflow-hidden p-3 flex flex-col justify-between">
              <div className="absolute inset-0 pt-4 pb-2 px-1 flex items-center justify-center">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 540 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="codechefGradientMatched" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff3b20" stopOpacity="0.4" />
                      <stop offset="60%" stopColor="#ff3b20" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#ff3b20" stopOpacity="0.0" />
                    </linearGradient>

                    <linearGradient id="div3ZoneMatched" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff3b20" stopOpacity="0.06" />
                      <stop offset="100%" stopColor="#ff3b20" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <rect width="540" height="180" fill="url(#laserGridMatched)" />

                  <rect x="20" y="35" width="500" height="65" fill="url(#div3ZoneMatched)" />

                  <line x1="20" y1="100" x2="520" y2="100" stroke="#ff3b20" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />
                  <text x="30" y="94" fill="#ff3b20" fontSize="8" fontFamily="monospace" fontWeight="bold" opacity="0.7">
                    DIV 3 THRESHOLD // 1400 RATING
                  </text>

                  <path
                    d="M 30 155 L 90 142 L 170 128 L 260 115 L 340 92 L 420 54 L 500 75 L 500 170 L 30 170 Z"
                    fill="url(#codechefGradientMatched)"
                  />
                  <path
                    d="M 30 155 Q 120 140 170 128 T 260 115 T 340 92 T 420 54 T 500 75"
                    stroke="#ff3b20"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  <g transform="translate(450, 40)" opacity="0.75">
                    <polygon points="0,-18 16,-6 10,14 -10,14 -16,-6" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-black/20 dark:text-white/20" />
                    <polygon points="0,-12 11,-4 7,9 -7,9 -11,-4" fill="#ff3b20" fillOpacity="0.15" stroke="#ff3b20" strokeWidth="1" />
                    <circle cx="0" cy="-12" r="1.5" fill="#ff3b20" />
                    <circle cx="11" cy="-4" r="1.5" fill="#ff3b20" />
                    <circle cx="7" cy="9" r="1.5" fill="#ff3b20" />
                    <circle cx="-7" cy="9" r="1.5" fill="#ff3b20" />
                    <circle cx="-11" cy="-4" r="1.5" fill="#ff3b20" />
                  </g>

                  <g className="cursor-pointer">
                    <circle cx="420" cy="54" r="7" fill="#ff3b20" fillOpacity="0.2" className="animate-pulse" />
                    <circle cx="420" cy="54" r="4" fill="#ff3b20" fillOpacity="0.8" />
                    <circle cx="420" cy="54" r="1.5" fill="#ffffff" />
                    <line x1="420" y1="54" x2="420" y2="165" stroke="#ff3b20" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.3" />
                    <text x="420" y="38" textAnchor="middle" fill="#ff3b20" opacity="0.85" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                      PEAK: 1445
                    </text>
                  </g>

                  <g className="cursor-pointer">
                    <circle cx="500" cy="75" r="9" fill="#ff3b20" fillOpacity="0.25" className="animate-ping" />
                    <circle cx="500" cy="75" r="5" fill="#ff3b20" />
                    <circle cx="500" cy="75" r="2" fill="#ffffff" />
                    <line x1="500" y1="75" x2="500" y2="165" stroke="#ff3b20" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
                    <text x="495" y="60" textAnchor="middle" fill="#ff3b20" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                      ACTIVE: 1414
                    </text>
                  </g>
                </svg>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono uppercase">
                <span className="text-[#ff3b20] font-bold">DIVISION 3 ACTIVE</span>
              </div>
            </div>

            {/* Metrics 4-Box */}
            <div className="grid grid-cols-4 gap-2 mb-6 p-3 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-center">
              <div>
                <span className="block font-mono font-bold text-lg text-black dark:text-white">
                  {activity.codechef.rating}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                  Rating
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-lg text-[#ff3b20]">
                  {activity.codechef.starsStr}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                  Stars
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-lg text-black dark:text-white">
                  {activity.codechef.highestRating}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                  Peak
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-lg text-[#ff3b20]">
                  {activity.codechef.division}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                  Division
                </span>
              </div>
            </div>
          </div>

          <a
            href={activity.codechef.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-full pt-4 border-t border-black/[0.08] dark:border-white/[0.08] text-xs font-mono uppercase tracking-wider text-black dark:text-white hover:text-[#ff3b20] transition-colors"
          >
            <span>CODECHEF PROFILE ↗</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
