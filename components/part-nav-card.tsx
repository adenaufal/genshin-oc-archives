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
  const hoverBorder = accent === "crimson"
    ? "hover:border-crimson/30 dark:hover:border-crimson/40"
    : "hover:border-jade/30 dark:hover:border-jade/40"

  return (
    <Link
      href={href}
      className={`group block border border-vapor dark:border-vapor/30 p-6 transition-all duration-300 ${hoverBorder} lg:p-8`}
    >
      {/* Corner flourishes */}
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-4 h-4 border-l border-t border-vapor/30" />
        <div className="absolute -top-6 -right-6 w-4 h-4 border-r border-t border-vapor/30" />
        <div className="absolute -bottom-6 -left-6 w-4 h-4 border-l border-b border-vapor/30" />
        <div className="absolute -bottom-6 -right-6 w-4 h-4 border-r border-b border-vapor/30" />
      </div>

      <span className={`font-display text-[10px] uppercase tracking-[0.25em] ${accentText}`}>
        Book {number}
      </span>
      <h3 className="mt-3 font-serif text-title text-ink dark:text-ink transition-colors duration-300 group-hover:text-graphite">
        {title}
      </h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-graphite">
        {description}
      </p>
      {(wordCount || readingTime) && (
        <div className="mt-4 flex items-center gap-4">
          {wordCount && (
            <span className="font-display text-[9px] uppercase tracking-[0.15em] text-graphite">
              {wordCount} words
            </span>
          )}
          {readingTime && (
            <span className="font-display text-[9px] uppercase tracking-[0.15em] text-graphite">
              {readingTime}
            </span>
          )}
        </div>
      )}
      <div className="mt-5 flex items-center gap-2">
        <span className={`font-serif text-sm italic ${accentText} transition-transform duration-300 group-hover:translate-x-1`}>
          Begin Reading
        </span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`${accentText} transition-transform duration-300 group-hover:translate-x-1`} aria-hidden="true">
          <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  )
}
