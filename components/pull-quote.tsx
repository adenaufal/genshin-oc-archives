interface PullQuoteProps {
  children: React.ReactNode
  accent?: "crimson" | "jade"
}

export function PullQuote({ children, accent = "crimson" }: PullQuoteProps) {
  const borderColor = accent === "crimson" ? "border-crimson/20" : "border-jade/20"
  const textColor = accent === "crimson" ? "text-ink" : "text-ink"

  return (
    <blockquote className={`my-16 border-l-2 ${borderColor} py-4 pl-8`}>
      <p className={`font-serif text-2xl italic leading-relaxed ${textColor} lg:text-3xl`}>
        {children}
      </p>
    </blockquote>
  )
}
