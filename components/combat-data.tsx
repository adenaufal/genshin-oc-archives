"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface CombatDataProps {
  isOpen: boolean
  onClose: () => void
  character: "volkov" | "qingyu"
}

const volkovData = {
  appendix: "V",
  accent: "crimson" as const,
  vision: { label: "Vision", value: "Dendro", note: "The Iron Forest" },
  weapon: { label: "Weapon", value: "Claymore", note: "Heavy Strike" },
  constellation: { label: "Constellation", value: "Silva Ferrum", note: "Iron of the Forest" },
  image: "/images/volkov_cover.webp",
  imageCaption: "Vision Housing",
  affiliation: "Exiled",
  title: "Former Captain",
  nation: "Snezhnaya",
  birthday: "Unknown",
  height: "180cm",
  voiceActor: "TBD",
}

const qingyuData = {
  appendix: "VI",
  accent: "jade" as const,
  vision: { label: "Vision", value: "Dendro", note: "The Mist Serpent" },
  weapon: { label: "Weapon", value: "Sword", note: "Precise Slash" },
  constellation: { label: "Constellation", value: "Serpens Nebula", note: "Veiled in Mist" },
  image: "/images/qinyu_cover.webp",
  imageCaption: "Vision Housing",
  affiliation: "Independent",
  title: "Intelligence Broker",
  nation: "Liyue",
  birthday: "Unknown",
  height: "167cm",
  voiceActor: "TBD",
}

export function CombatData({ isOpen, onClose, character }: CombatDataProps) {
  const data = character === "volkov" ? volkovData : qingyuData
  const accentClass = data.accent === "crimson" ? "text-crimson" : "text-jade"
  const borderClass = data.accent === "crimson" ? "border-crimson" : "border-jade"
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/10 backdrop-blur-sm dark:bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        ref={panelRef}
        className="absolute bottom-0 right-0 top-0 w-full overflow-y-auto border-l border-vapor dark:border-vapor/30 bg-canvas/95 backdrop-blur-md dark:bg-canvas-secondary/95 sm:w-[420px]"
        style={{ animation: "slideInRight 0.4s ease-out" }}
        role="dialog"
        aria-modal="true"
        aria-label="Combat capabilities"
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <p className={`font-display text-[10px] font-medium uppercase tracking-[0.25em] ${accentClass}`}>
                Appendix {data.appendix}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-medium italic text-ink dark:text-ink">
                Combat Capabilities
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-graphite transition-colors hover:text-ink dark:text-graphite dark:hover:text-ink-secondary"
              aria-label="Close panel"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Vision */}
          <div className="mt-10 border-t border-vapor dark:border-vapor/30 pt-6">
            <div className="flex items-center justify-between">
              <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                {data.vision.label}
              </p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-graphite" aria-hidden="true">
                <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1" />
                <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="currentColor" strokeWidth="1" />
                <path d="M4.93 4.93l2.83 2.83M12.24 12.24l2.83 2.83M4.93 15.07l2.83-2.83M12.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="0.75" />
              </svg>
            </div>
            <p className={`mt-2 font-serif text-2xl font-medium ${accentClass}`}>
              {data.vision.value}
            </p>
            <p className="mt-1 font-serif text-sm italic text-graphite">
              {data.vision.note}
            </p>
          </div>

          {/* Weapon */}
          <div className="mt-6 border-t border-vapor dark:border-vapor/30 pt-6">
            <div className="flex items-center justify-between">
              <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                {data.weapon.label}
              </p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-graphite" aria-hidden="true">
                <path d="M3 17L15 5M15 5h-5M15 5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="mt-2 font-serif text-2xl font-medium text-ink dark:text-ink">
              {data.weapon.value}
            </p>
            <p className="mt-1 font-serif text-sm italic text-graphite">
              {data.weapon.note}
            </p>
          </div>

          {/* Constellation */}
          <div className="mt-6 border-t border-vapor dark:border-vapor/30 pt-6">
            <div className="flex items-center justify-between">
              <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                {data.constellation.label}
              </p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-graphite" aria-hidden="true">
                <circle cx="10" cy="4" r="1.5" stroke="currentColor" strokeWidth="1" />
                <circle cx="4" cy="12" r="1.5" stroke="currentColor" strokeWidth="1" />
                <circle cx="16" cy="12" r="1.5" stroke="currentColor" strokeWidth="1" />
                <circle cx="10" cy="16" r="1.5" stroke="currentColor" strokeWidth="1" />
                <path d="M10 5.5v5M5.5 12h9M10 14.5v-3" stroke="currentColor" strokeWidth="0.75" />
              </svg>
            </div>
            <p className="mt-2 font-serif text-2xl font-medium italic text-ink dark:text-ink">
              {data.constellation.value}
            </p>
            <p className="mt-1 font-serif text-sm italic text-graphite">
              {data.constellation.note}
            </p>
          </div>

          {/* Image plate */}
          <div className="mt-8 overflow-hidden">
            <div className="relative aspect-[16/7] w-full border border-vapor dark:border-vapor/30">
              <Image
                src={data.image}
                alt={`${character === "volkov" ? "Dmitri Volkov" : "Lan Qingyu"} vision detail`}
                fill
                className="object-cover grayscale"
                sizes="400px"
              />
              <span className="absolute bottom-2 right-2 font-display text-[9px] font-medium uppercase tracking-[0.15em] text-white/90 drop-shadow">
                {data.imageCaption}
              </span>
            </div>
          </div>

          {/* Affiliation */}
          <div className="mt-8">
            <div className={`flex items-center gap-2 border-l-2 ${borderClass} pl-3`}>
              <span className={`font-display text-[10px] font-medium uppercase tracking-[0.2em] ${accentClass}`}>
                Standing
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                  Affiliation
                </p>
                <p className="mt-2 font-serif text-lg font-medium text-ink dark:text-ink">
                  {data.affiliation}
                </p>
              </div>
              <div>
                <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                  Title
                </p>
                <p className="mt-2 font-serif text-lg font-medium text-ink dark:text-ink">
                  {data.title}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-dashed border-vapor dark:border-vapor/30 pt-6">
              <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                Nation of Origin
              </p>
              <div className="flex items-center justify-between">
                <p className="mt-2 font-serif text-lg font-medium text-ink dark:text-ink">
                  {data.nation}
                </p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={accentClass} aria-hidden="true">
                  <path d="M8 1C8 1 3 5 3 9a5 5 0 0010 0c0-4-5-8-5-8z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Physical Details */}
          <div className="mt-8">
            <div className={`flex items-center gap-2 border-l-2 ${borderClass} pl-3`}>
              <span className={`font-display text-[10px] font-medium uppercase tracking-[0.2em] ${accentClass}`}>
                Particulars
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                  Birthday
                </p>
                <p className="mt-2 font-serif text-lg font-medium text-ink dark:text-ink">{data.birthday}</p>
              </div>
              <div>
                <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                  Height
                </p>
                <p className="mt-2 font-serif text-lg font-medium text-ink dark:text-ink">{data.height}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
                Voice (EN)
              </p>
              <p className="mt-2 font-serif text-lg font-medium text-ink dark:text-ink">{data.voiceActor}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 border-t border-vapor dark:border-vapor/30 pt-4">
            <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-graphite">
              Record Status
            </p>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rotate-45 ${data.accent === "crimson" ? "bg-crimson" : "bg-jade"}`} />
                <span className={`font-display text-[10px] font-medium uppercase tracking-[0.2em] ${accentClass}`}>
                  Verified
                </span>
              </div>
              <span className="font-display text-[9px] font-medium uppercase tracking-[0.15em] text-graphite">
                {character === "volkov" ? "Snezhnaya Archives" : "Liyue Registry"}
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
