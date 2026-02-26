import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-vapor dark:border-vapor/30 px-6 py-12 lg:px-12" role="contentinfo">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <Link href="/" className="font-serif text-xl italic text-ink transition-colors hover:text-graphite">
            The Archives
          </Link>
          <p className="mt-1 font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
            A Character Study
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 sm:justify-end" aria-label="Footer navigation">
          <Link href="/characters/dmitri-volkov" className="font-serif text-sm italic text-graphite transition-colors hover:text-crimson">
            Volkov
          </Link>
          <Link href="/characters/lan-qingyu" className="font-serif text-sm italic text-graphite transition-colors hover:text-jade">
            Qingyu
          </Link>
          <Link href="/duo" className="font-serif text-sm italic text-graphite transition-colors hover:text-ink">
            The Duo
          </Link>
          <Link href="/gallery" className="font-serif text-sm italic text-graphite transition-colors hover:text-ink">
            Gallery
          </Link>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-10 flex max-w-5xl items-center justify-center gap-4 border-t border-vapor dark:border-vapor/30 pt-6">
        <div className="h-px w-8 bg-vapor" />
        <span className="font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
          Curated with Care
        </span>
        <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
        <span className="font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
          MMXXVI
        </span>
        <div className="h-px w-8 bg-vapor" />
      </div>
    </footer>
  )
}
