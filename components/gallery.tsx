"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { TopNav } from "./top-nav"

type FilterKey = "all" | "volkov" | "qingyu"

interface GalleryItem {
  src: string
  alt: string
  character: "volkov" | "qingyu"
  type: string
  caption: string
  aspect: "portrait" | "landscape" | "square"
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/volkov_portrait.webp",
    alt: "Dmitri Volkov portrait",
    character: "volkov",
    type: "Portrait",
    caption: "Plate I. Portrait Study — The Iron Forest",
    aspect: "portrait",
  },
  {
    src: "/images/qinyu_portrait.webp",
    alt: "Lan Qingyu portrait",
    character: "qingyu",
    type: "Portrait",
    caption: "Plate II. Portrait Study — The Mist Serpent",
    aspect: "portrait",
  },
  {
    src: "/images/volkov_fullbody.webp",
    alt: "Dmitri Volkov full body reference",
    character: "volkov",
    type: "Reference",
    caption: "Plate III. Full Reference — Volkov",
    aspect: "portrait",
  },
  {
    src: "/images/qinyu_fullbody.webp",
    alt: "Lan Qingyu full body reference",
    character: "qingyu",
    type: "Reference",
    caption: "Plate IV. Full Reference — Qingyu",
    aspect: "portrait",
  },
  {
    src: "/images/volkov_cover.webp",
    alt: "Dmitri Volkov cover illustration",
    character: "volkov",
    type: "Cover",
    caption: "Plate V. Cover Illustration — Volkov",
    aspect: "landscape",
  },
  {
    src: "/images/qinyu_cover.webp",
    alt: "Lan Qingyu cover illustration",
    character: "qingyu",
    type: "Cover",
    caption: "Plate VI. Cover Illustration — Qingyu",
    aspect: "landscape",
  },
  {
    src: "/images/volkov_marketingdrip.webp",
    alt: "Dmitri Volkov marketing illustration",
    character: "volkov",
    type: "Illustration",
    caption: "Plate VII. Marketing Illustration — Volkov",
    aspect: "portrait",
  },
  {
    src: "/images/qinyu_marketingdrip.webp",
    alt: "Lan Qingyu marketing illustration",
    character: "qingyu",
    type: "Illustration",
    caption: "Plate VIII. Marketing Illustration — Qingyu",
    aspect: "portrait",
  },
]

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Plates" },
  { key: "volkov", label: "Volkov" },
  { key: "qingyu", label: "Qingyu" },
]

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
  index,
  total,
}: {
  item: GalleryItem
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  index: number
  total: number
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-sm dark:bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-10 text-canvas/70 transition-colors hover:text-canvas"
        aria-label="Close lightbox"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 text-canvas/50 transition-colors hover:text-canvas"
        aria-label="Previous image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 text-canvas/50 transition-colors hover:text-canvas"
        aria-label="Next image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Image */}
      <div className="relative mx-16 max-h-[85vh] max-w-[85vw]">
        <Image
          src={item.src}
          alt={item.alt}
          width={1200}
          height={item.aspect === "landscape" ? 800 : 1600}
          className="max-h-[80vh] w-auto object-contain"
          sizes="85vw"
          priority
        />
        <div className="mt-4 flex items-center justify-between">
          <p className="font-display text-[9px] uppercase tracking-[0.15em] text-canvas/60">
            {item.caption}
          </p>
          <p className="font-display text-[9px] uppercase tracking-[0.15em] text-canvas/40">
            {index + 1} / {total}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function GalleryCard({ item, index, onClick }: { item: GalleryItem; index: number; onClick: () => void }) {
  const reduce = useReducedMotion()

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : (index % 3) * 0.1 }}
      className="group relative cursor-pointer overflow-hidden border border-vapor dark:border-vapor/30 text-left transition-all duration-300 hover:border-graphite/30 dark:hover:border-graphite/50"
    >
      <div className={`relative w-full ${
        item.aspect === "landscape" ? "aspect-[16/10]" : "aspect-[3/4]"
      }`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex items-center justify-between border-t border-vapor dark:border-vapor/30 p-3">
        <span className="font-display text-[9px] uppercase tracking-[0.15em] text-graphite">
          {item.caption.split(".")[0]}.
        </span>
        <span className={`font-display text-[9px] uppercase tracking-[0.15em] ${
          item.character === "volkov" ? "text-crimson" : "text-jade"
        }`}>
          {item.type}
        </span>
      </div>
    </motion.button>
  )
}

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.character === activeFilter)

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    )
  }, [filtered.length])

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    )
  }, [filtered.length])

  return (
    <>
      <TopNav label="Gallery" />

      <main className="pb-24 pt-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col items-center">
            <p className="font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
              Visual Archive
            </p>
            <h1 className="mt-4 font-serif text-hero italic text-ink dark:text-ink">
              Gallery
            </h1>
            <p className="mt-4 font-sans text-sm text-graphite">
              Character art, reference plates, and illustrations
            </p>
          </div>

          {/* Filters */}
          <div className="mt-12 flex items-center justify-center gap-6">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`font-display text-[10px] uppercase tracking-[0.2em] transition-colors ${
                  activeFilter === f.key ? "text-ink dark:text-ink" : "text-graphite hover:text-ink dark:hover:text-ink-secondary"
                }`}
              >
                {f.label}
                {activeFilter === f.key && (
                  <div className="mx-auto mt-2 h-px w-full bg-ink dark:bg-ink" />
                )}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="mt-6 text-center font-display text-[9px] uppercase tracking-[0.15em] text-graphite">
            {filtered.length} {filtered.length === 1 ? "plate" : "plates"}
          </p>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
            {filtered.map((item, i) => (
              <GalleryCard
                key={item.src}
                item={item}
                index={i}
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <Lightbox
            item={filtered[lightboxIndex]}
            onClose={() => setLightboxIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
            index={lightboxIndex}
            total={filtered.length}
          />
        )}
      </AnimatePresence>
    </>
  )
}
