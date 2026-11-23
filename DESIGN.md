# DESIGN.md — ARCHITECTURAL DESIGN SYSTEM & SPECIFICATION

> **System Version:** 2026.D // Rev. 02  
> **Subject:** Devansh Kumar (`@devantaris`) — Systems Architecture & Applied Machine Learning  
> **Design Philosophy:** Swiss International Constructivism × Dieter Rams Functionalism × INTJ Mastermind Commonplace Monograph  
> **Target Framework:** Next.js 16 (Turbopack) · Tailwind CSS v4 · Framer Motion · Lenis Smooth Scroll  

---

## 1. Core Ethos & Cognitive Architecture

This portfolio is an authentic digital manifestation of an **INTJ Architect** personality:
- **Systems Over Predictions:** Models and heuristics fail under stress; deterministic structural bounds and calibrated fallback pipelines insulate computation against failure.
- **Form Follows Telemetry:** Every typographic line, coordinate marker, and status badge maps to empirical data (LeetCode submissions, GitHub commits, CodeChef rating rounds, paper preprints, transaction throughput).
- **Brutalist Restraint:** Minimal ornamentation, zero frivolous decorations, pure typographic tension, archival paper canvas, high-contrast monochrome ink, and a singular surgical accent color.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        COGNITIVE DESIGN STACK                          │
├────────────────────────────────┬───────────────────────────────────────┤
│ Dominant Intuition (Ni)        │ Strategic architectural synthesis     │
│ Auxiliary Thinking (Te)        │ Monospace telemetry, metrics, grids   │
│ Tertiary Feeling (Fi)          │ Introspective journal logs & axioms   │
│ Inferior Sensing (Se)          │ Physical satin ribbons, paper texture │
└────────────────────────────────┴───────────────────────────────────────┘
```

---

## 2. Color Palette & Token System

### Strict Palette Policy
> [!IMPORTANT]
> **The Single Accent Color Law:** The only saturated color permitted in this design system is **Coral Red (`#ff3b20`)**.  
> Never introduce blues, purples, emerald greens, or amber accents. All secondary and tertiary scales are derived strictly from monochrome ink/slate shades or opacity variants of `#ff3b20`.

### Color Tokens

| Token | Light Mode Value | Dark Mode Value | Usage / Semantic Role |
| :--- | :--- | :--- | :--- |
| `--background` | `#f7f7f8` (Archival bone) | `#0c0c0e` (Deep carbon obsidian) | Global document canvas |
| `--paper-journal` | `#fbfbf9` (Cream drafting paper) | `#111116` (Archival journal slate) | Journal spread & monograph cards |
| `--foreground` | `#111114` (Fountain pen ink) | `#f3f4f6` (Crisp drafting white) | Primary headlines & body text |
| `--muted` | `rgba(17, 17, 20, 0.5)` | `rgba(243, 244, 246, 0.45)` | Subtitles, metadata, secondary tags |
| `--border-subtle` | `rgba(0, 0, 0, 0.10)` | `rgba(255, 255, 255, 0.12)` | Technical framing, card perimeters |
| `--accent` | `#ff3b20` (Vivid Coral Red) | `#ff3b20` (Glowing Coral Red) | Telemetry highlights, ribbon, numbers |
| `--accent-subtle` | `rgba(255, 59, 32, 0.12)` | `rgba(255, 59, 32, 0.18)` | Badges, washi tape, active days |

### Heatmap Color Scales (Strictly Monochromatic & Coral)
- **GitHub Heatmap (Architectural Ink Shades):**  
  - Light: `#e5e7eb` (0) → `#c4c7cc` (1) → `#8b909a` (2) → `#484d58` (3) → `#111114` (4)
  - Dark: `#1a1a20` (0) → `#2e303a` (1) → `#545868` (2) → `#9da3b4` (3) → `#f3f4f6` (4)
- **LeetCode Heatmap (Signature Coral Red Shades):**  
  - Light: `#e5e7eb` (0) → `#ffd8d2` (1) → `#ff9d90` (2) → `#ff6550` (3) → `#ff3b20` (4)
  - Dark: `#1a1a20` (0) → `#421510` (1) → `#78251c` (2) → `#bf3020` (3) → `#ff3b20` (4)

---

## 3. Typographic Architecture

The typography is structured as a **Tripartite Dialectic**:

```
                       ┌────────────────────────────────────────┐
                       │           TYPOGRAPHIC SYSTEM           │
                       └───────────────────┬────────────────────┘
                                           │
         ┌─────────────────────────────────┼─────────────────────────────────┐
         ▼                                 ▼                                 ▼
   GROTESQUE SANS                      MONOSPACE                      EDITORIAL SERIF
  (`Geist Sans`)                    (`Geist Mono`)                    (`font-serif`)
  • Monumental Headlines             • Telemetry Coordinates           • Monograph Numerals (`01.`, `02.`)
  • Section Titles                   • Figure Tags (`FIG. 01`)         • Journal Subtitles (`Axioms`)
  • Architectural Body Prose         • Code & Stack Badges             • Signatures (*— Devansh Kumar*)
  • Navigation Bars                  • Provenance Metadata Tables      • Chapter Headings
```

### Typographic Hierarchy Rules:
1. **Section Identifiers:** Always follow the pattern `0X // SECTION NAME +` set in bold monospace tracking `tracking-[0.25em]` in coral red `#ff3b20`.
2. **Display Headlines:** Massive, uppercase, high-contrast grotesque sans (`text-3xl` to `text-6xl`, tracking `tracking-tight`, font-black `font-black`).
3. **Telemetry & Captions:** Uppercase monospace tracking `tracking-widest`, font sizes 8px to 11px, often enclosed in technical brackets `[FRAME // 600 × 420 · 4:3]`.

---

## 4. Layout & Spatial Composition

### Global Canvas
- Maximum Content Width: `1720px` centered with responsive horizontal margins (`px-4 sm:px-8 lg:px-14`).
- Section Padding: Generous vertical rhythm (`py-20 sm:py-28`), allowing negative space to amplify focus.

### Section Blueprint Specifications

#### 01. Hero Section (Brutalist Aura)
- Asymmetrical technical layout pairing a large high-contrast B&W cutout of Devansh with vertical typography (`X-LAB MATERIALS OF CREATION`), microtext coordinates, dual vermilion background banners, and live status badges (`● AVAILABLE`).

#### 02. About Section (Editorial & Principles)
- Swiss publication layout: Two-column editorial biography juxtaposed with an architectural values matrix (`SYSTEMS OVER PREDICTIONS`, `ARCHITECTURE BEFORE CODE`, `FAILURE BY DESIGN`).

#### 03. Projects Section (Staggered Zigzag & Architectural Catalog)
- **Top 2 Flagship Projects (MARI & CryptoFlow):** Staggered zigzag editorial composition with large serif numbers (`01.`, `02.`), italic project names, high-contrast B&W imagery, and fine red rule lines (`────── VIEW PROJECT ↗`).
- **Secondary Projects:** 3-column architectural catalog grid with technical taxonomy tags and direct GitHub/demo links.

#### 04. Telemetry & Activity Section
- **Unified Heatmap Matrix:** GitHub contributions and LeetCode activity rendered side-by-side in a single-row responsive matrix without bulky container frames.
- **CodeChef Contest Standing Card:** High-contrast division metrics (Rating 1414, ★★ Stars, Division 3).

#### 05. Research & Citations Section
- Swiss constructivist poster layout featuring giant overlapping bold red typography (`RESEARCH`), dual 4:3 schematic frames, a center Lissajous orbital resonance loop, and IEEE paper citations.

#### 06. Career Chronology & Leadership Section
- Executive itinerary layout with custom curved `#ff3b20` SVG spline arrows connecting career stations, paired with dual award photography frames (`500 × 500 · 1:1`) and quad telemetry metrics.

#### 07. INTJ Architectural Hardcover Journal Footer (The Book Itself is the Footer)
- **The Physical Book Object as Footer:** The open book casing itself serves directly as the footer, eliminating redundant external headers and keeping total vertical height constrained to **~50% of the screen height (≤ 50vh)** on desktop, with fluid adaptive scaling across all aspect ratios.
- **Hardcover Casing Architecture:**
  - Dark buckram/leather hardcover casing outline (`#141418` in light mode, `#09090c` in dark mode) with a subtle blind-debossed inner perimeter frame.
  - Realistic hardcover casing overhang extending beyond the book block.
  - Stacked paper block edges (`#eae7df` / `#1a1a22`) with multi-layer depth shadows simulating 200 sheets of paper.
  - Smyth-sewn central spine groove with spine creasing and high-contrast satin ribbon bookmark (`#ff3b20`) with swallowtail notch cut.
- **Internal High-Density Journal Spread:**
  - **Graph Paper Background:** Fine 20px grid ruling across both pages.
  - **Verso (Left Page):** Compact Hobonichi Techo mini-calendar matrix, B&W polaroid clipping of Devansh with washi tape strip (`FIG. 88`), and three introspective INTJ systems axioms (Uncertainty & Calibrated Abstention, Te Leadership, Algorithmic Chess).
  - **Recto (Right Page):** Rijksmuseum technical provenance table, Japanese exhibition date block (`2024.08 ──→ 2026.05`), dual swatches (IEEE photo plate + coral red `#ff3b20` seal swatch), direct dispatch trigger + one-click copy email button, and monograph index links.
- **Under-Book Utility Bar:** Compact one-line bar with identity, theme toggle, and `TOP ↑` return trigger connected to Lenis smooth scroll.

#### 08. Unindexed 404 Chapter (Herbarium & Unwritten Folio 404)
- **Concept:** "This chapter has not yet been discovered" — an unindexed sector framed as an open physical traveler's journal on a drafting cutting mat.
- **Specimens & Visual Artifacts:**
  - **Brass Binder Clip:** Metallic brass clip pinned at the top-right corner.
  - **Papilio Architectonica Butterfly:** Anatomical swallowtail specimen illustration with `#ff3b20` coral red wing submarginal bands, pinned shadow, and taxonomy tag.
  - **Herbarium Pressed Leaf:** Pressed Ginkgo/fern botanical specimen with delicate venation.
  - **Archival Ephemera:** Pantone 404-C color swatch ticket with washi tape and circular cancellation postal postmark (`UNINDEXED · 2026.D · VOID`).
  - **Graceful Navigation:** Quick Return to Volume 01 (Home), Direct Email wire, and anchor jumps to known sections.

---

## 5. Motion, Physics & Smooth Scrolling

### Lenis Smooth Scroll Configuration
- **Library:** `lenis` v1.3+
- **Duration:** `1.15s`
- **Easing Function:** Exponential deceleration curve: `t => Math.min(1, 1.001 - Math.pow(2, -10 * t))`
- **Smooth Wheel Multiplier:** `0.95`
- **Touch Multiplier:** `1.8`
- **Anchor Interception:** Clicks on `a[href^="#"]` smooth scroll to destination elements with negative offset `-24px`.
- **Accessibility:** Automatically disabled when `(prefers-reduced-motion: reduce)` is detected.

### Section Scroll Reveal Animation
- **Component:** `<ScrollReveal />`
- **Initial:** `opacity: 0, y: 20px`
- **While In View:** `opacity: 1, y: 0px`
- **Duration:** `0.65s`
- **Ease:** Cubic bezier `[0.16, 1, 0.3, 1]` (Instant response with graceful deceleration)
- **Viewport Trigger:** `once: true, margin: '-50px'`
