'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ChevronRight } from 'lucide-react';
import { experience } from '@/data';

export default function CareerSection() {
  return (
    <section id="path" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-[#ff3b20] font-bold uppercase">
            CHRONOLOGY
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black dark:text-white mt-3 uppercase">
            Shipping while leading.
          </h2>
          <p className="text-base sm:text-lg text-black/60 dark:text-white/60 font-mono mt-3 max-w-2xl leading-relaxed">
            Professional software internships, 100+ engineer team leadership, and academic foundations.
          </p>
        </div>
      </div>

      {/* Timeline List */}
      <div className="space-y-8">
        {experience.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="p-7 sm:p-9 bg-white dark:bg-[#111114] border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-black/[0.06] dark:border-white/[0.06] font-mono text-xs uppercase tracking-wider">
              <span className="font-bold text-[#ff3b20]">{item.period}</span>
              <span className="text-black/50 dark:text-white/50">{item.location}</span>
            </div>

            <h3 className="text-2xl font-black text-black dark:text-white mb-1">
              {item.role}
            </h3>
            <p className="font-mono text-xs text-black/50 dark:text-white/50 uppercase tracking-widest mb-4">
              {item.company}
            </p>

            <ul className="space-y-2 mb-6 text-sm text-black/75 dark:text-white/75 leading-relaxed font-sans">
              {item.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2">
                  <span className="text-[#ff3b20] font-bold">›</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
              {item.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[10px] font-mono uppercase bg-black/[0.04] dark:bg-white/[0.06] text-black/60 dark:text-white/60 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
