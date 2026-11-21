---
name: Adonias Haile Portfolio
description: Minimal Bento design system for a Mobile & Fintech Software Engineer
colors:
  primary: "#1C1917"
  primary-hover: "#292524"
  neutral-bg: "#FDFCF8"
  neutral-surface: "#FFFFFF"
  neutral-subtle: "#FAF8F5"
  neutral-border: "#E5E3DF"
  neutral-text: "#1C1917"
  neutral-muted: "#44403C"
  neutral-subtext: "#57534E"
  dark-surface: "#1C1917"
  dark-border: "#292524"
  accent-emerald: "#059669"
  accent-amber: "#B45309"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "18px"
  xl: "24px"
  2xl: "28px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  card-bento:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.2xl}"
    padding: "24px"
---

# Design System: Adonias Haile Portfolio

## Overview

**Creative North Star: "The Swiss Financial Switch"**

The visual language balances the mathematical precision of high-throughput financial switches with the calm restraint of Swiss editorial typography. Rooted in warm alabaster paper tones (`#FDFCF8`) and high-contrast obsidian stone (`#1C1917`), the interface acts as a silent gallery frame that yields all attention to live engineering artifacts, banking switch architecture, and production metrics.

Rather than relying on generic modern dark-mode clichés or artificial gradient blurs, this system enforces physical discipline: crisp 1px borders (`#E5E3DF`), tactile pill buttons, and generous white space. Every element exists to provide verified evidence of engineering craft at national scale.

**Key Characteristics:**
- **Tactile Paper Aesthetic:** Warm, non-glare off-white foundation (`#FDFCF8`) paired with pure white (`#FFFFFF`) card containers.
- **Typographic Authority:** Strict scale ratio from heavy black headers (`font-black`) to readable, uncrowded body prose.
- **Zero AI-Slop:** Completely free of decorative neon glows, overlapping floating blobs, or truncated multi-line descriptions.
- **Physical Touch Ergonomics:** All interactive buttons and drawer links maintain minimum 44px to 48px touch targets for mobile usability.

---

## Colors

The palette is restrained, tactile, and high-contrast. Warm earth tones anchor the text and backgrounds, while functional accents provide instant status readability.

### Primary
- **Obsidian Stone** (`#1C1917`): Core primary color. Applied to main titles, interactive pill buttons, active tabs, and dominant structural labels.

### Secondary
- **Warm Obsidian Hover** (`#292524`): State-change elevation for primary buttons and dark surfaces.
- **Dark Rails Surface** (`#1C1917` / `#0F0E0D`): Inverted backdrop for the final call-to-action ("Precision Starts Here") banner.

### Neutral
- **Alabaster Canvas** (`#FDFCF8`): The warm paper base for the entire application. Prevents screen glare and elevates card surfaces.
- **Card Surface** (`#FFFFFF`): Pure crisp white for primary bento cards, providing clean contrast against the canvas.
- **Subtle Surface** (`#FAF8F5`): Tonal tint for secondary chips, metric containers, and nested architectural spec panels.
- **Paper Border** (`#E5E3DF`): Tactile 1px boundary framing every bento card, button outline, and section divider.
- **Deep Stone Body** (`#44403C`): High-legibility neutral for body descriptions and primary supporting paragraphs (passes WCAG AAA).
- **Muted Stone Meta** (`#57534E`): Supporting tone for timestamps, subtitles, role titles, and secondary icons.

### Accents
- **Switch Emerald** (`#059669` / `#22C55E`): Live production uptime indicators, WhatsApp CTA, and active status indicators.
- **Distinction Amber** (`#B45309` / `#F59E0B`): Academic honors and subtle brand links.

### Named Rules
- **The Rarity Rule:** Accent colors (Emerald, Amber) are strictly operational and appear on less than 5% of any given screen.
- **The High-Contrast Rule:** Text never dips below WCAG AA 4.5:1 contrast against its immediate container.

---

## Typography

**Display Font:** `Inter` (system-ui, -apple-system, sans-serif)  
**Body Font:** `Inter`  
**Label/Mono Font:** `JetBrains Mono` (monospace)  

**Character:** Technical, crisp, and objective. Inter provides neutral clarity at small sizes and sculptural weight when rendered black (`font-black`), while JetBrains Mono injects architectural authenticity for technical tags and specifications.

### Hierarchy
- **Display** (`font-black`, `3rem` to `3.75rem` / `text-5xl` to `6xl`, `leading-[1.15]`): Hero title only.
- **Headline** (`font-black`, `1.875rem` to `2.25rem` / `text-3xl` to `4xl`, `leading-tight`, tracking-tight): Section headings (`<h2>`).
- **Title** (`font-bold`, `1.25rem` to `1.5rem` / `text-xl` to `2xl`, `leading-snug`): Bento card titles and project names (`<h3>`).
- **Body** (`font-normal`, `0.875rem` to `1rem` / `text-sm` to `base`, `leading-relaxed`, `max-w-2xl`): Explanatory copy, job descriptions, and architecture notes.
- **Label / Tag** (`font-semibold` / `font-mono`, `0.75rem` / `text-xs`, `leading-none`): Tech stack chips, architecture specifications, and filter pills.

### Named Rules
- **The Anti-Truncation Rule:** Body copy and project explanations must never use `truncate` or arbitrary CSS ellipsis inside multi-column cards. Content must wrap naturally.
- **The Heading Continuity Rule:** Never skip heading levels (`h1` → `h2` → `h3` → `h4`). Generic `<div>` containers must not masquerade as headings.

---

## Layout

- **Container Model:** Central column capped at `max-w-6xl` (`1152px`) with responsive horizontal gutters (`px-4 sm:px-6`).
- **Vertical Rhythm:** Major sections separated by consistent `py-16 sm:py-20` spacing and demarcated by 1px `#E5E3DF` dividers.
- **Bento Grid:** Balanced 2-column grid (`grid grid-cols-1 md:grid-cols-2 gap-6`) for featured projects and career experience.
- **Header:** Sticky top navigation (`sticky top-0 z-40`) with `bg-[#FDFCF8]/95` and `backdrop-blur-md` border.
- **Mobile Fluidity:** Touch targets maintain minimum `min-h-[44px]` to `min-h-[48px]`. No element may cause horizontal viewport overflow (`overflow-x-hidden`).

---

## Elevation & Depth

Depth is established strictly through **tonal layering and tactile 1px borders**, never through exaggerated drop shadows or colored ambient glows.

```
Layer 0: Alabaster Canvas (#FDFCF8)
  └── Layer 1: Bento Card (#FFFFFF) + 1px border (#E5E3DF) + shadow-sm
        └── Layer 2: Architecture Spec Drawer (#FAF8F5) + 1px border (#E5E3DF)
```

### Shadow Vocabulary
- **Ambient Rest (`shadow-sm`):** `0 1px 2px 0 rgba(0, 0, 0, 0.05)`. Used on primary bento cards and hero metrics.
- **Elevated Hover:** Subtle border transition from `#E5E3DF` to `stone-400` with micro-lift on interactive cards.

### Named Rules
- **The Zero-Glow Rule:** No radial gradient flares, glowing blur spheres, or colored backdrops behind typography.
- **The Single-Border Rule:** Avoid nested boxes sharing identical borders. Sub-containers must use tonal background shifting (`#FAF8F5`) rather than heavy nested outlines.

---

## Shapes

- **Bento Cards:** Sculpted outer corners with `rounded-[24px]` on mobile scaling to `rounded-[28px]` on desktop.
- **Buttons & Pills:** Pill silhouette (`rounded-full` / `9999px`) for all action triggers, download links, and status badges.
- **Architecture & Tech Chips:** Compact pills (`rounded-full` or `rounded-md`) for quick scanning.
- **Borders:** Consistent `1px solid #E5E3DF` across all surfaces.

---

## Components

### Buttons
- **Shape:** Full pill (`rounded-full`).
- **Primary:** Dark obsidian background (`#1C1917`), white text, `min-h-[48px]`, `px-6`, hover background `#292524`.
- **Secondary / Outline:** White background (`#FFFFFF`), 1px `#E5E3DF` border, `#1C1917` text, `min-h-[48px]`, `px-6`, hover `#F5F5F4`.
- **Icon / Mobile Controls:** Minimum `min-w-[44px] min-h-[44px]` touch target with centered icon.

### Tech Stack Chips
- **Style:** Compact pill container, 1px `#E5E3DF` border, white or subtle background, `text-xs font-semibold`.
- **Behavior:** Minimalist presentation featuring stack icon and label only—no bloated descriptive cards or extraneous rating stars.

### Bento Project Cards
- **Structure:** Two-tier card with project metadata header, body explanation, tech badges, expandable architecture specs, and direct store action buttons.
- **Elevation:** Flat white surface with tactile border, shifting to `#FAF8F5` inside the collapsible architecture specifications drawer.

### Recommendations (Blockquotes)
- **Structure:** Semantic `<figure>` containing `<blockquote>` text and `<figcaption>` author credentials.
- **Typography:** Pure neutral quotes with authentic citation links.

---

## Do's and Don'ts

### Do:
- **Do** use `#FDFCF8` as the background foundation and pure `#FFFFFF` for primary cards.
- **Do** maintain sequential heading levels (`<h1>` for title, `<h2>` for sections, `<h3>` for cards).
- **Do** ensure every interactive element meets at least $44 \times 44\text{px}$ touch target dimensions on mobile.
- **Do** use `<blockquote>` and `<figcaption>` for testimonials and quotes.
- **Do** display tech stack skills as compact icon + label chips.

### Don't:
- **Don't** add glowing neon blobs, blurry gradient spheres, or backdrop filters behind text.
- **Don't** use `truncate` or text overflow clipping on project descriptions.
- **Don't** create redundant nested box-within-a-box borders.
- **Don't** use low-contrast gray text that fails WCAG AA 4.5:1 contrast standards.
- **Don't** allow horizontal scroll on any viewport (`overflow-x-hidden`).
