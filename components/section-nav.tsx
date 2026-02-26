import Link from "next/link"

interface NavItem {
  label: string
  href: string
}

interface SectionNavProps {
  prev: NavItem | null
  next: NavItem | null
}

export function SectionNav({ prev, next }: SectionNavProps) {
  return (
    <nav
      className="mx-auto mt-24 flex max-w-reading items-center justify-between px-6"
      aria-label="Page navigation"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.2em] text-graphite transition-colors hover:text-ink dark:hover:text-ink-secondary"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M10 3L5 8l5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Prev: {prev.label}
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.2em] text-graphite transition-colors hover:text-ink dark:hover:text-ink-secondary"
        >
          {next.label}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
