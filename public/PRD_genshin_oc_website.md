# PRD: Genshin Impact OC Lore Website

## Overview

A static lore website for two original Genshin Impact characters — Dmitri Volkov and Lan Qingyu — designed to present ~80,000+ words of character bible content in a readable, navigable, visually immersive format. The site should feel like an in-universe wiki with the polish of a character showcase.

## Target User

- Genshin Impact OC community (artists, writers, RP partners)
- Anyone receiving a link to "check out my OCs"
- The creator themselves, as a living reference

## Success Metric

A visitor can understand who both characters are within 60 seconds of landing, and can deep-dive into any specific aspect (psychology, history, combat, relationships) within 2 clicks.

## Content Inventory

### Source Files (from `Characters/` directory)

| File | Character | Content | Word Count |
|------|-----------|---------|------------|
| Dmitri Volkov - Part 1 - Identity & Psychology.md | Dmitri | Name analysis, psychology, MBTI, Enneagram, attachment style, Dendro Vision | ~13,500 |
| Dmitri Volkov - Part 2 - History & Relationships.md | Dmitri | Worldview, backstory timeline, key relationships | ~28,000 |
| Dmitri Volkov - Part 3 - Behavior & Narrative Utility.md | Dmitri | Behavioral encyclopedia, writing guide, routines, micro-expressions | ~12,000 |
| Dmitri Volkov - VSONA Profile.md | Dmitri | Quick profile, personality sliders, stats, color palette, design notes | ~800 |
| Lan Qingyu - Part 1 - Identity & Psychology.md | Qingyu | Name analysis, psychology, personas, Dendro Vision | ~11,800 |
| Lan Qingyu - Part 2 - History & Relationships.md | Qingyu | Worldview, backstory timeline, key relationships | ~11,500 |
| Lan Qingyu - Part 3 - Behavior & Narrative Utility.md | Qingyu | Behavioral encyclopedia, writing guide, routines | ~9,000 |
| Lan Qingyu - VSONA Profile.md | Qingyu | Quick profile, personality sliders, stats, color palette, design notes | ~800 |
| Duo Dynamic - Dmitri & Qingyu.md | Both | Partnership analysis, complementarity table, dynamic breakdown | ~4,300 |
| genshin_oc_duo_mixed.md | Both | Original character sheet (mixed Indonesian/English), combat kits | ~4,000 |

**Total content: ~96,000 words across 10 files.**

### Images (to be added)

- Character art / portraits (per character)
- Possibly scene illustrations
- Stored in an `images/` or `public/assets/` directory, referenced by character

### Existing Metadata Per File

Every markdown file already has YAML frontmatter with:
- `title`, `aliases`, `tags`, `created`, `updated`, `status`, `word_count`, `part`, `related`
- Obsidian-style wikilinks (`[[...]]`) for cross-references
- Callout blocks (`> [!tip]`, `> [!info]`, `> [!quote]`)
- Tables (Quick Reference Cards, Complementarity Table, Personality Sliders, Stats, Color Palettes)

---

## Site Architecture

### Pages

```
/                                    → Landing page (both characters + duo teaser)
/characters/dmitri-volkov/           → Dmitri hub (quick ref card, intro, nav to parts)
/characters/dmitri-volkov/identity   → Part 1: Identity & Psychology
/characters/dmitri-volkov/history    → Part 2: History & Relationships
/characters/dmitri-volkov/behavior   → Part 3: Behavior & Narrative Utility
/characters/lan-qingyu/             → Qingyu hub (quick ref card, intro, nav to parts)
/characters/lan-qingyu/identity     → Part 1: Identity & Psychology
/characters/lan-qingyu/history      → Part 2: History & Relationships
/characters/lan-qingyu/behavior     → Part 3: Behavior & Narrative Utility
/duo/                               → Duo Dynamic page
/gallery/                           → Image gallery (when images are added)
```

### Navigation Structure

- Top nav: Home | Dmitri Volkov | Lan Qingyu | Duo Dynamic | Gallery
- Character pages: sidebar with Part 1 / Part 2 / Part 3 + section anchors within each part
- Cross-character links: each character page links to their partner and the duo page
- Breadcrumbs on all inner pages

---

## Design Direction

### Visual Identity

White minimalist. The content is 96k words of literary-quality writing — the design should disappear and let the prose breathe. Think high-end editorial magazine or a beautifully typeset book, not a game wiki.

**Theme:** Light-first, clean, monochrome base with character accent colors used sparingly.

**Color System:**

| Token | Hex | Usage |
|-------|-----|-------|
| Background | #FFFFFF | Pure white base |
| Surface | #FAFAFA | Subtle card/panel backgrounds |
| Border | #E5E5E5 | Thin dividers, card borders |
| Text Primary | #171717 | Near-black body text |
| Text Secondary | #737373 | Muted gray for captions, metadata, timestamps |
| Text Tertiary | #A3A3A3 | Lightest text — tags, footnotes |
| Dmitri Accent | #8B0000 | Warning Crimson — used sparingly for his sections (links, highlights, palette strip) |
| Qingyu Accent | #1A3C34 | Antique Jade — used sparingly for her sections |
| Dendro Shared | #4A6B53 | Brocade Green — shared element, subtle nav accent |

Character accent colors appear only in: color palette strips, personality slider fills, section divider accents, and hover states on character-specific pages. The base UI stays monochrome.

**Typography:**
- Headings: Serif with literary character (Cormorant Garamond, Playfair Display, or Noto Serif) — the writing quality demands it
- Body: Clean sans-serif for long-form readability (DM Sans, Plus Jakarta Sans, or Geist)
- Monospace accents for metadata/tags (JetBrains Mono or Fira Code)
- Do NOT use Inter. Do NOT use default Tailwind blue.
- Generous line height (1.75-1.85) and max-width ~65ch for reading comfort

**Mood:** White, quiet, editorial. The design is a frame, not a feature. Generous whitespace. Thin borders. No gradients, no shadows unless absolutely necessary. The character art and the prose are the visual anchors — everything else recedes.

### Key UI Components

**Quick Reference Card (per character)**
- Rendered from the existing frontmatter table
- Character portrait image (left or top)
- Key stats in a clean grid: Name, Age, Region, Vision, Weapon, Constellation, Archetype
- 5-Word Summary as a tagline
- Character quote below
- Color palette strip at the bottom

**Personality Sliders**
- Render the VSONA slider data as actual visual bars/sliders
- Left pole label — bar — Right pole label
- Color-coded per character (crimson for Dmitri, jade for Qingyu)

**Stats Radar/Bars**
- Render the VSONA stats as horizontal bars or a simple radar chart
- Keep it clean, not gamified

**Complementarity Table (Duo page)**
- The existing table from the duo file, styled as a comparison layout
- Dmitri column | Dimension | Qingyu column | Together column
- Color-coded per character

**Callout Blocks**
- `> [!tip] Writer's Note` → styled callout with a subtle icon
- `> [!info] Navigation` → breadcrumb-style nav block
- `> [!quote]` → styled blockquote with attribution

**Table of Contents**
- Auto-generated from headings per page
- Sticky sidebar on desktop, collapsible on mobile
- Highlights current section on scroll

**Section Navigation**
- Previous/Next part links at bottom of each part page
- "Jump to partner" and "Jump to duo" cross-links

---

## Technical Stack

### Recommended: Astro + Tailwind CSS + monochrome-ui

**Why Astro:**
- Native markdown/MDX support with frontmatter
- Content Collections for type-safe content querying
- Static output (fast, free hosting)
- Component islands for interactive elements (sliders, gallery) without shipping JS for everything
- Built-in image optimization

**Why monochrome-ui ([github.com/vaneenige/monochrome-ui](https://github.com/vaneenige/monochrome-ui)):**
- Headless (no CSS shipped) — we style everything with Tailwind to match the white minimalist theme
- 2.2kB gzipped, zero dependencies — no bundle bloat on a static site
- HTML-first with optional React wrappers — works with Astro's island architecture
- WCAG 2.2 AA compliant out of the box — accessibility handled at the component level
- Provides exactly the interactive patterns we need:
  - **Accordion** — for collapsible character bible sections (each Part has 6+ major sections)
  - **Collapsible** — for Writer's Notes, spoiler reveals (Qingyu's redacted birth name), long tables
  - **Tabs** — for character hub pages (Quick Ref / VSONA / Parts navigation)
  - **Menu** — for character dropdown nav, mobile navigation
- DOM is the source of truth (reads ARIA attributes directly) — no state management overhead
- Event delegation via global listeners — no per-component initialization

**Why NOT a heavier framework:**
- This is a read-heavy site with ~96k words. No auth, no database, no user input.
- Next.js/Nuxt would be overkill. Astro generates pure HTML/CSS with JS only where needed.

### Key Dependencies

| Package | Purpose |
|---------|---------|
| `astro` | Core framework |
| `tailwindcss` | Styling |
| `monochrome-ui` | Headless interactive components (accordion, collapsible, tabs, menu) |
| `@astrojs/mdx` | MDX support for interactive components in markdown |
| `remark-gfm` | GitHub-flavored markdown (tables, strikethrough) |
| Custom remark plugin | Convert Obsidian `[[wikilinks]]` to proper `<a>` tags |
| Custom remark plugin | Convert `> [!type]` callouts to styled HTML |
| `astro-icon` | Icon library (use Phosphor or Tabler, NOT Lucide) |
| `@astrojs/sitemap` | SEO |

### monochrome-ui Component Mapping

| Site Feature | monochrome-ui Component | Notes |
|-------------|------------------------|-------|
| Character bible sections | Accordion | Each Part page has 6+ collapsible sections. Default: first section open. |
| Writer's Notes | Collapsible | Collapsed by default — reader expands if they want meta-commentary. |
| Spoiler content | Collapsible | For redacted info like Qingyu's birth name. Styled with a "reveal" prompt. |
| Character hub tabs | Tabs | Quick Reference / VSONA Profile / Parts Navigation as tab panels. |
| Top navigation | Menu | Character dropdowns with Part links. Mobile: full menu. |
| Mobile TOC | Collapsible | Table of contents collapsed into a sticky bar on mobile. |

### Content Pipeline

1. Copy markdown files from `Characters/` into `src/content/characters/`
2. Define Astro Content Collection schema matching existing frontmatter
3. Custom remark plugins handle:
   - `[[Wikilink]]` → `<a href="/characters/...">` conversion
   - `> [!tip]` / `> [!info]` / `> [!quote]` → styled callout components
   - Table enhancement (responsive wrapper, styled headers)
4. Images go in `public/images/characters/` or use Astro's `src/assets/` for optimization

### Content Collection Schema

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const characters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    aliases: z.array(z.string()).optional(),
    tags: z.array(z.string()),
    created: z.string(),
    updated: z.string(),
    status: z.string(),
    word_count: z.number(),
    part: z.string().optional(),
    type: z.string().optional(),
    related: z.array(z.string()).optional(),
  }),
});

export const collections = { characters };
```

---

## Page Specifications

### Landing Page (`/`)

**Purpose:** First impression. Show both characters, establish the vibe, invite exploration.

**Sections:**
1. Hero — Site title, atmospheric background, one-line hook ("Two Dendro wielders. One iron, one silk.")
2. Character Cards — Side by side. Portrait, name, constellation title, 5-word summary, quote, "Explore →" link. Dmitri's card uses his crimson/platinum palette, Qingyu's uses jade/honey.
3. Duo Teaser — Brief excerpt from the duo dynamic intro + "Read their story →" link
4. Quick Stats Comparison — A condensed version of the complementarity table

### Character Hub (`/characters/[slug]/`)

**Purpose:** Overview + navigation into the 3 parts.

**Sections:**
1. Character header — Portrait, Quick Reference Card, quote, color palette strip
2. VSONA section — Personality sliders (visual), stats bars, concept intro
3. Part navigation — 3 cards linking to each part with title + writer's note excerpt
4. Cross-links — Partner character, duo page

### Character Part Pages (`/characters/[slug]/[part]`)

**Purpose:** The actual deep-read content.

**Layout:**
- Sticky sidebar TOC (desktop) / collapsible TOC (mobile)
- Full markdown content rendered with styled callouts, tables, blockquotes
- Previous/Next part navigation at bottom
- Estimated reading time in header
- "Back to [Character] overview" breadcrumb

### Duo Page (`/duo/`)

**Purpose:** The relationship analysis.

**Sections:**
1. Header — Both character portraits side by side, partnership status
2. How They Met — narrative excerpt
3. Complementarity Table — full styled comparison
4. Dynamic analysis sections — rendered from the duo markdown
5. Links to both character hubs

### Gallery (`/gallery/`)

**Purpose:** Image showcase (future).

**Sections:**
1. Filterable grid — by character, by type (portrait, scene, concept art)
2. Lightbox view for full-size images
3. Artist credit per image

---

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Mobile (<768px) | Single column, collapsible TOC, stacked character cards, hamburger nav |
| Tablet (768-1024px) | Two-column where appropriate, sidebar TOC slides in |
| Desktop (>1024px) | Full layout, sticky sidebar TOC, side-by-side character cards |

Long-form content pages must be comfortable to read on mobile — max line width ~65ch, generous line height (1.7-1.8), adequate paragraph spacing.

---

## Deployment

- Host on Vercel, Netlify, or GitHub Pages (all free for static sites)
- Custom domain optional
- No server-side requirements — pure static output

---

## Implementation Phases

### Phase 1: Foundation
- Astro project setup with Tailwind
- Design system tokens (colors, typography, spacing)
- Content Collection schema
- Basic layout components (nav, footer, page shell)
- Custom remark plugins (wikilinks, callouts)

### Phase 2: Core Pages
- Landing page
- Character hub pages (Dmitri + Qingyu)
- Character part pages (6 total)
- Duo page
- Sidebar TOC component

### Phase 3: Interactive Components
- Personality slider visualizations
- Stats bars/radar
- Quick Reference Card component
- Color palette strip component
- Complementarity table component

### Phase 4: Polish
- Responsive testing
- Optional dark mode toggle (light-first, dark as secondary)
- Reading time calculation
- SEO metadata
- Open Graph images per character
- Page transitions/animations

### Phase 5: Gallery + Images
- Image optimization pipeline
- Gallery page with filtering
- Character portraits integrated into hub pages
- Lightbox component

---

## Design Pipeline (Gemini → v0 → Build)

Use Gemini for free visual exploration, v0 only for final code generation.

### Gemini (explore freely, iterate as much as needed)

Use Gemini to generate visual prototypes and reference images before touching v0:

1. **Page layout mockups** — "Show me a white minimalist character profile page with serif headings, a portrait on the left, stats grid on the right, thin borders, lots of whitespace"
2. **Component explorations** — "Show me a personality slider component on a white background with a thin crimson fill bar, left/right pole labels in gray"
3. **Typography testing** — "Show me Cormorant Garamond headings with DM Sans body text on a white page, long-form literary content"
4. **Landing page variations** — "Show me 3 different layouts for a two-character showcase landing page, white minimalist, editorial feel"
5. **Color accent testing** — "Show me how crimson (#8B0000) and jade (#1A3C34) accents look as thin underlines and hover states on a white page"

Iterate until you have a clear visual target for each major component/page. Screenshot the ones you like.

### v0 (use strategically, one component per prompt)

Feed v0 the Gemini screenshot + design tokens + specific component request. Aim for 5-8 total v0 prompts:

| v0 Prompt | Input | Output |
|-----------|-------|--------|
| 1. Character Quick Reference Card | Gemini screenshot + VSONA data structure + color tokens | React + Tailwind component |
| 2. Personality Sliders + Stats Bars | Gemini screenshot + slider data format | React + Tailwind component |
| 3. Landing Page Hero + Character Cards | Gemini screenshot + site structure | Full page layout |
| 4. Reading Page Layout (sidebar TOC + content) | Gemini screenshot + callout examples | Page template |
| 5. Duo Comparison Table | Gemini screenshot + complementarity table data | Styled table component |
| 6. Navigation (top nav + mobile menu) | Gemini screenshot + page structure | Nav component (integrate with monochrome-ui Menu) |
| 7. Gallery Grid + Lightbox (Phase 5) | Gemini screenshot + image data structure | Gallery component |

### Build (Claude Code / Cursor)

Take v0 output and integrate into the Astro project:
- Refactor v0 React components into Astro components where possible (static parts)
- Keep React only for interactive islands (sliders, tabs, accordion via monochrome-ui)
- Apply design system tokens consistently
- Wire up Content Collections to feed data into components

---

## Open Questions

1. **Domain name?** — Needed before deployment. | Find something memorable, relevant, and ideally with a .com or .io TLD. Consider character names, thematic elements (Dendro, duality), or something more abstract.
2. **Character art availability** — How many images, what formats, any artist credits needed? | It is already available at assets/characters/ in the repo, but we need to confirm how many will be used and if they need optimization for web.
3. **Future characters?** — Is this a 2-character site forever, or will more OCs be added? (Affects nav architecture.) | For now it's just Dmitri and Qingyu, but we should design the architecture to be scalable in case more characters are added later.
4. **Language** — The original character sheet (`genshin_oc_duo_mixed.md`) mixes Indonesian and English. Is the site English-only? | Yes, the site will be English-only for consistency and broader accessibility. We can provide translations in the future if needed, but the primary content will be in English.
5. **Spoiler handling** — Some content (like Qingyu's birth name being [REDACTED]) is intentionally hidden. Should the site have spoiler/reveal toggles? | Yes, we can use monochrome-ui's Collapsible component to create spoiler sections that are collapsed by default, with a clear "Reveal" button. This allows us to maintain the mystery while still providing access for those who want it.
6. **Fan interaction** — Comments? Guestbook? Or purely read-only showcase? | For now, the site will be purely read-only to maintain the focus on the content and avoid moderation overhead. We can consider adding a guestbook or comment section in the future if there is demand for it, but it is not part of the initial scope.
7. **Analytics?** — Do we want to track visitor behavior (e.g., which pages are most popular, time spent on page)? | We can add basic analytics (like Google Analytics or Plausible) to track visitor behavior and understand which content is resonating most. This can help inform future updates or additions to the site. However, we should be transparent about any data collection and ensure it complies with privacy standards.
8. **SEO** — Do we want to optimize for search engines, or is this more of a private showcase? | We should implement basic SEO best practices (meta tags, sitemap, clean URLs) to ensure the site is discoverable by search engines. This will help others find the content when searching for Genshin Impact OCs or related topics. However, we can keep it simple and focus on organic discovery rather than aggressive SEO tactics.
9. **Maintenance** — Who will maintain the site? Will there be regular updates or is this a one-time launch? | The creator will maintain the site, with the ability to update content as needed (e.g., adding new characters, updating existing profiles). We should set up a simple content management process to make it easy to add or modify content in the future.
10. **Monetization?** — Any plans to monetize the site (ads, Patreon, merchandise)? | For now, the site will be non-commercial and focused on showcasing the characters and their lore. We can consider monetization options in the future if there is significant traffic or demand, but it is not part of the initial scope.
