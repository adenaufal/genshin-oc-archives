import Link from "next/link"

interface PartNavCardProps {
  number: string
  title: string
  description: string
  href: string
  accent: "crimson" | "jade"
  wordCount?: string
  readingTime?: string
}

export function PartNavCard({ number, title, description, href, accent, wordCount, readingTime }: PartNavCardProps) {
  const accentText = accent === "crimson" ? "text-crimson" : "text-jade"
  const accentBg = accent === "crimson" ? "bg-crimson" : "bg-jade"
  const accentBorder = accent === "crimson" 
    ? "border-crimson/30 hover:border-crimson" 
    : "border-jade/30 hover:border-jade"
  const accentHoverBg = accent === "crimson" 
    ? "hover:bg-crimson hover:text-canvas" 
    : "hover:bg-jade hover:text-canvas"

  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-lg border-2 ${accentBorder} bg-canvas-secondary/30 p-6 transition-all duration-300 ${accentHoverBg} lg:p-8`}
    >
      {/* Number badge */}
      <div className={`absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full ${accentBg} text-canvas`}>
        <span className="font-display text-xs font-bold">{number}</span>
      </div>

      <div className="pr-10">
        <span className={`font-display text-[10px] font-medium uppercase tracking-[0.2em] ${accentText} group-hover:text-current`}>
          Part {number}
        </span>
        <h3 className="mt-2 font-serif text-xl font-medium text-ink dark:text-ink group-hover:text-current">
          {title}
        </h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-graphite group-hover:text-canvas/90">
          {description}
        </p>
        
        {(wordCount || readingTime) && (
          <div className="mt-4 flex items-center gap-3 text-graphite group-hover:text-canvas/80">
            {readingTime && (
              <span className="flex items-center gap-1.5 font-display text-[10px] uppercase tracking-[0.1em]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
                  <path d="M6 3v3l2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
                {readingTime}
              </span>
            )}
          </div>
        )}
        
        <div className="mt-5 flex items-center gap-2">
          <span className={`font-serif text-sm font-medium italic ${accentText} group-hover:text-current`}>
            Read Chapter
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`${accentText} transition-transform duration-300 group-hover:translate-x-1 group-hover:text-current`}>
            <path d="M3 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
