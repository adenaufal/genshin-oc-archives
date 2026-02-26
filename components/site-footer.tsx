import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-vapor px-6 py-12 lg:px-12" role="contentinfo">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        {/* Brand */}
        <div>
          <Link href="/" className="font-serif text-lg italic text-ink transition-colors hover:text-graphite">
            The Archives
          </Link>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest-custom text-graphite">
            Volkov & Qingyu
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 sm:justify-end" aria-label="Footer navigation">
          <Link href="/characters/dmitri-volkov" className="font-mono text-[10px] uppercase tracking-widest-custom text-graphite transition-colors hover:text-crimson">
            Volkov
          </Link>
          <Link href="/characters/lan-qingyu" className="font-mono text-[10px] uppercase tracking-widest-custom text-graphite transition-colors hover:text-jade">
            Qingyu
          </Link>
          <Link href="/duo" className="font-mono text-[10px] uppercase tracking-widest-custom text-graphite transition-colors hover:text-ink">
            Duo
          </Link>
          <Link href="/gallery" className="font-mono text-[10px] uppercase tracking-widest-custom text-graphite transition-colors hover:text-ink">
            Gallery
          </Link>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-8 flex max-w-5xl items-center justify-between border-t border-vapor pt-6">
        <span className="font-mono text-[10px] uppercase tracking-widest-custom text-graphite">
          The Literary Journal \u2014 System Documentation
        </span>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-jade" />
          <span className="font-mono text-[10px] uppercase tracking-widest-custom text-graphite">
            Online
          </span>
        </div>
      </div>
    </footer>
  )
}
