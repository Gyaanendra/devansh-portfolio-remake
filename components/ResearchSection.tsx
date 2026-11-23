'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, FileText, Award, CheckCircle2 } from 'lucide-react';
import { publications } from '@/data';

export default function ResearchSection() {
  return (
    <section id="research" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-[#ff3b20] font-bold uppercase">
            RESEARCH &amp; CITATIONS
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black dark:text-white mt-3 uppercase">
            Revisions issued.
          </h2>
          <p className="text-base sm:text-lg text-black/60 dark:text-white/60 font-mono mt-3 max-w-2xl leading-relaxed">
            First-author research manuscripts, published astrophysical literature, and formal engineering specializations.
          </p>
        </div>
      </div>

      {/* Publications Grid */}
      <div className="space-y-6">
        {publications.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group p-6 sm:p-8 bg-white dark:bg-[#111114] border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 font-mono text-[10px] sm:text-xs tracking-widest uppercase">
                <span className="font-bold text-[#ff3b20]">{item.number} // {item.badge}</span>
                <span className="text-black/40 dark:text-white/40">·</span>
                <span className="text-black/60 dark:text-white/60">{item.status}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white tracking-tight group-hover:text-[#ff3b20] transition-colors mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed font-sans max-w-4xl mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[9.5px] font-mono tracking-wider uppercase bg-black/[0.04] dark:bg-white/[0.06] text-black/60 dark:text-white/60 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:self-center">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-black dark:border-white font-mono text-xs uppercase tracking-wider text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all whitespace-nowrap"
              >
                <span>{item.linkText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
