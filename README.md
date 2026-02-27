![The Archives — Volkov & Qingyu](public/images/og-image.png)

# The Archives — Volkov & Qingyu

A digital archive presenting the lore of two Genshin Impact original characters — **Dmitri Volkov** and **Lan Qingyu** — with the reverence of a museum monograph.

[Live Site](https://genshin-chrientmip.pages.dev) · [Report Issue](https://github.com/adenaufal/genshin-oc-archives/issues)

</div>

---

## About

The Archives is a static character bible website built for two interconnected Genshin Impact OCs:

- **Dmitri Alexeyevich Volkov** — A Snezhnayan deserter carrying a Dendro Vision and the weight of two hundred lives. Known as *The Iron Forest*.
- **Lan Qingyu (兰青羽)** — A Liyue information broker who wears five masks and removes none. Known as *The Mist Serpent*.

Each character has four dedicated pages — **Hub**, **Identity**, **History**, and **Behavior** — plus a shared **Duo Dynamic** page exploring their partnership and a **Gallery** page.

The site is designed with a classical archival aesthetic: serif typography, muted parchment tones, and the quiet authority of a museum catalog.

## Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org/) (App Router, static export)
- **UI** — [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling** — [Tailwind CSS 3](https://tailwindcss.com/) with custom design tokens
- **Animation** — [Motion](https://motion.dev/) (scroll-reveal, AnimatePresence, staggered entrances)
- **Fonts** — Cormorant Garamond (serif), DM Sans (sans), Cactus Classical Serif (display)
- **Hosting** — Cloudflare Pages

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── characters/
│   ├── dmitri-volkov/       # Hub, Identity, History, Behavior
│   └── lan-qingyu/          # Hub, Identity, History, Behavior
├── duo/                     # Duo Dynamic page
├── gallery/                 # Character gallery
└── layout.tsx               # Root layout with metadata & fonts

components/                  # All page components & shared UI
assets/lore/                 # Source markdown lore files (~50k words)
public/images/               # Character portraits & OG image
```

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `crimson` | `#8B2D2D` | Volkov accent |
| `jade` | `#2A4B42` | Qingyu accent |
| `gold` | `#B8860B` | Neutral / shared accent |
| `ink` | `#1A1A1A` | Primary text |
| `graphite` | `#6B6B6B` | Secondary text |
| `parchment` | `#F5F0E8` | Background |

## License

This project contains original fictional characters and lore. The code is open source, but the character designs, artwork, and written lore content are © adenaufal. Please don't reuse the OC content without permission.
