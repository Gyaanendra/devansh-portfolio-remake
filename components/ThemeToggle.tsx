'use client';

import React from 'react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
  className?: string;
}

export default function ThemeToggle({ theme, onThemeChange, className = '' }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => onThemeChange(isDark ? 'light' : 'dark')}
      className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded border border-black/15 dark:border-white/20 bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/10 dark:hover:bg-white/10 hover:border-black dark:hover:border-white active:scale-95 transition-all text-[11px] font-mono tracking-widest uppercase cursor-pointer select-none font-medium ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="text-black/50 dark:text-white/50 text-[10px]">THEME:</span>
      <span className="font-bold tracking-wider text-black dark:text-white">
        {isDark ? 'DARK' : 'LIGHT'}
      </span>
      <span
        className={`w-2 h-2 rounded-full transition-colors ${
          isDark
            ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]'
            : 'bg-[#ff3b20] shadow-[0_0_8px_rgba(255,59,32,0.7)]'
        }`}
      />
    </button>
  );
}
