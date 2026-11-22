'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Trophy, Code2, ExternalLink, Activity as ActivityIcon } from 'lucide-react';
import { activity } from '@/data';

export default function ActivitySection() {
  return (
    <section id="code-activity" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-t border-black/[0.08] dark:border-white/[0.08]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-[#ff3b20] font-bold uppercase">
            03 // TELEMETRY &amp; ACTIVITY
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black dark:text-white mt-3 uppercase">
            Committed, rated, ranked.
          </h2>
          <p className="text-base sm:text-lg text-black/60 dark:text-white/60 font-mono mt-3 max-w-2xl leading-relaxed">
            Continuous engineering activity across GitHub, LeetCode, and competitive CodeChef rounds.
          </p>
        </div>
      </div>

      {/* GitHub Summary Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-7 sm:p-9 bg-white dark:bg-[#111114] border border-black/10 dark:border-white/10 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-black/45 dark:text-white/45 block mb-1">
            GITHUB CONTRIBUTION ACTIVITY · ROLLING 365 DAYS
          </span>
          <div className="text-3xl sm:text-4xl font-black text-black dark:text-white flex items-baseline gap-3">
            <span>{activity.github.annualContributions}</span>
            <span className="text-base font-normal font-mono text-black/60 dark:text-white/60">
              commits &amp; contributions last year
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase rounded border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE SYNCED
          </span>
          <a
            href={activity.github.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white dark:bg-white dark:text-black font-mono text-xs uppercase tracking-wider hover:opacity-85 transition-opacity"
          >
            <span>VIEW GITHUB</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>

      {/* 2-Column Grid: LeetCode & CodeChef */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LeetCode Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-7 sm:p-9 bg-white dark:bg-[#111114] border border-black/10 dark:border-white/10 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/[0.06] dark:border-white/[0.06] text-[10.5px] font-mono tracking-widest uppercase">
              <span className="font-bold text-[#ff3b20]">FIG. 01 // LEETCODE</span>
              <span className="text-black/40 dark:text-white/40">{activity.leetcode.maxStreak} STREAK</span>
            </div>

            <h3 className="text-2xl font-black text-black dark:text-white mb-2">
              Algorithms &amp; DS
            </h3>
            <p className="text-xs text-black/60 dark:text-white/60 font-mono leading-relaxed mb-6">
              Systematic data structures and algorithmic challenge solving. High-frequency practice in dynamic programming, graphs, and system bottlenecks.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-2 mb-6 p-3 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] text-center">
              <div>
                <span className="block font-mono font-bold text-lg text-black dark:text-white">
                  {activity.leetcode.solved}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                  Solved
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-lg text-emerald-500">
                  {activity.leetcode.easy}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                  Easy
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-lg text-amber-500">
                  {activity.leetcode.medium}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                  Med
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-lg text-red-500">
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
            className="inline-flex items-center justify-between w-full pt-4 border-t border-black/[0.06] dark:border-white/[0.06] text-xs font-mono uppercase tracking-wider text-black dark:text-white hover:text-[#ff3b20] transition-colors"
          >
            <span>LEETCODE PROFILE ↗</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* CodeChef Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="p-7 sm:p-9 bg-white dark:bg-[#111114] border border-black/10 dark:border-white/10 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/[0.06] dark:border-white/[0.06] text-[10.5px] font-mono tracking-widest uppercase">
              <span className="font-bold text-[#ff3b20]">FIG. 02 // CODECHEF</span>
              <span className="text-black/40 dark:text-white/40">{activity.codechef.starsStr} ({activity.codechef.division})</span>
            </div>

            <h3 className="text-2xl font-black text-black dark:text-white mb-2">
              Contest Standing
            </h3>
            <p className="text-xs text-black/60 dark:text-white/60 font-mono leading-relaxed mb-6">
              Rated competitive programmer competing in timed algorithmic rounds. 2-Star rated contender in Division 3 with consistent contest performance.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-2 mb-6 p-3 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] text-center">
              <div>
                <span className="block font-mono font-bold text-lg text-black dark:text-white">
                  {activity.codechef.rating}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-black/45 dark:text-white/45">
                  Rating
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-lg text-amber-500">
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
                <span className="block font-mono font-bold text-lg text-black dark:text-white">
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
            className="inline-flex items-center justify-between w-full pt-4 border-t border-black/[0.06] dark:border-white/[0.06] text-xs font-mono uppercase tracking-wider text-black dark:text-white hover:text-[#ff3b20] transition-colors"
          >
            <span>CODECHEF PROFILE ↗</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
