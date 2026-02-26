interface PullQuoteProps {
  children: React.ReactNode
  accent?: "crimson" | "jade"
}

export function PullQuote({ children, accent = "crimson" }: PullQuoteProps) {
  const borderColor = accent === "crimson" ? "border-crimson/20 dark:border-crimson/30" : "border-jade/20 dark:border-jade/30"

  return (
    <blockquote className={`my-16 border-l-2 ${borderColor} py-4 pl-8`}>
      <p className="font-serif text-2xl italic leading-relaxed text-ink dark:text-ink lg:text-3xl">
        {children}
      </p>
    </blockquote>
  )
}
