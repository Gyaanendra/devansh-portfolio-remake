# GUIDELINES.md — AGENT & DEVELOPER PROTOCOLS

> **Target Audience:** All AI Agents, Subagents, and Engineers contributing to this repository.  
> **Mandate:** Any modification to this codebase must strictly adhere to the rules outlined below. Violations compromise aesthetic cohesion and architectural integrity.

---

## 1. The Immutable Laws of Design & Aesthetic

### Rule 1.1: The Single Accent Color Rule (`#ff3b20`)
- **Allowed:** Black (`#111114`, `#0c0c0e`), White/Bone (`#f7f7f8`, `#fbfbf9`, `#ffffff`), Grayscale/Slate tones, and **Coral Red (`#ff3b20`)**.
- **Strictly Prohibited:** Do not introduce blues, purples, emerald greens, amber warnings, or arbitrary rainbow badges. 
- All telemetry indicators (streak flame, ratings, active status, borders, buttons, chart bars) must use either monochromatic ink/slate tones or `#ff3b20` (and its deliberate opacity levels: `#ff3b20/10`, `#ff3b20/20`, `#ff3b20/40`, `#ff3b20/80`).

### Rule 1.2: Prohibition of Decorative Emojis
- **Prohibited:** Never use conversational emojis (e.g. 🚀, 💻, 🔥, ⚡, 🎨, 🌟, 📚) in UI components, headings, or badge labels.
- **Permitted:** Precise architectural Unicode/ASCII glyphs:
  - Directional Arrows: `→`, `↗`, `↑`, `↓`, `──→`, `←──`
  - Mathematical & Delimiter Operators: `+`, `·`, `//`, `|`, `●`, `■`
  - Technical Brackets: `[FRAME // 600 × 420]`, `[REF 01: GITHUB]`

### Rule 1.3: Typographic Triad Discipline
- **Display Headlines:** Grotesque sans (`font-sans`), uppercase, tight tracking (`tracking-tight`), heavy weight (`font-black` or `font-bold`).
- **Telemetry & Technical Annotations:** Monospace (`font-mono`), uppercase, wide tracking (`tracking-widest`), small sizes (`text-[9px]` to `text-xs`).
- **Monograph Accents & Numerals:** Serif italic (`font-serif italic`), used sparingly for project numbers (`01.`, `02.`), chapter subtitles (`Axioms & Shadows`), or fountain pen signatures.

---

## 2. Next.js 16 (App Router) & React 19 Architectural Rules

### Rule 2.1: Client Component Boundary Management
- Any component using React hooks (`useState`, `useEffect`, `useRef`), Framer Motion, or browser DOM events must explicitly include `'use client';` on line 1.
- Layouts (`app/layout.tsx`) should remain lean and cleanly wrap client providers (`<SmoothScroll>`).

### Rule 2.2: Lenis Smooth Scroll Hygiene
- All page-wide smooth scrolling is governed by `SmoothScroll.tsx` (`lenis`).
- When implementing scroll-to-top or anchor navigation, check for `(window as any).__lenis` before falling back to native `window.scrollTo()`:
  ```ts
  if (typeof window !== 'undefined' && (window as any).__lenis) {
    (window as any).__lenis.scrollTo(target, { offset: -24, duration: 1.2 });
  } else {
    element?.scrollIntoView({ behavior: 'smooth' });
  }
  ```
- Always respect `prefers-reduced-motion`.

### Rule 2.3: Data Integrity — Zero Hardcoded Hallucinations
- All biographical facts, links, metrics, and project details must be imported from `@/data` (`data/profile.json`, `data/projects.json`, `data/experience.json`, `data/publications.json`, `data/activity.json`).
- If you need a new data point, add it to the corresponding JSON file under `data/` and update `data/index.ts` type exports.

### Rule 2.4: Terminal Component Mounting (Footer Hygiene)
- The bottommost footer component (`JournalFooter.tsx`) must never be wrapped in viewport scroll-triggering wrappers with negative margins (such as `margin: -50px`), as bottom-of-document elements cannot scroll past the viewport floor. Mount `JournalFooter` directly so it renders immediately and predictably.

---

## 3. Section Pattern Blueprint Standards

Every major section in the page must follow this uniform architectural anatomy:

```tsx
<section id="section-id" className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-14 max-w-[1720px] mx-auto select-none">
  
  {/* 01. SECTION HEADER */}
  <div className="mb-12 sm:mb-16">
    <div className="flex items-center gap-2 mb-3">
      <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#ff3b20] uppercase">
        0X // SECTION IDENTIFIER
      </span>
      <span className="text-[#ff3b20] font-black text-sm">+</span>
    </div>

    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-black dark:text-white uppercase tracking-tight leading-[1.08] max-w-5xl">
      MONUMENTAL HEADLINE <span className="text-[#ff3b20] font-light mx-2">+</span> SECONDARY
    </h2>
    <p className="font-mono text-xs sm:text-sm text-black/60 dark:text-white/60 uppercase tracking-widest mt-4 max-w-3xl leading-relaxed">
      EDITORIAL SUBTITLE IN MONOSPACE <span className="text-[#ff3b20]">+</span> CLASSIFICATION
    </p>
  </div>

  {/* 02. SECTION BODY CONTENT */}
  ...
</section>
```

---

## 4. Verification & Validation Checklist

Before marking any task as complete or committing changes, execute the full validation chain:

```powershell
npx tsc --noEmit; npm run build; curl.exe -sI http://localhost:3000
```

1. **TypeScript Typecheck:** Must pass with zero errors (`tsc --noEmit`).
2. **Turbopack Build:** Next.js production build (`npm run build`) must compile cleanly.
3. **Localhost Server:** Server must return `HTTP/1.1 200 OK`.
4. **Theme Verification:** Check that the UI renders seamlessly in both Light mode (`data-theme="light"`) and Dark mode (`data-theme="dark"`).
5. **Responsive Integrity:** All dual-column book spreads and multi-card grids must collapse cleanly into single-column layouts on mobile viewports (`< 768px`).
6. **File Referencing:** When referencing local files in responses to the user, always format paths as clickable links using `file:///` format.
