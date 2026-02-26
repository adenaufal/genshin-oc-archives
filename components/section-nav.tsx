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
      className="mx-auto mt-20 flex max-w-reading items-center justify-between gap-4 px-6"
      aria-label="Page navigation"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col items-start gap-1 rounded-lg p-3 transition-colors hover:bg-vapor/30"
        >
          <span className="flex items-center gap-2 font-display text-[10px] font-medium uppercase tracking-[0.15em] text-graphite">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            >
              <path
                d="M8 2L3 7l5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Previous
          </span>
          <span className="font-serif text-base font-medium text-ink">
            {prev.label}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col items-end gap-1 rounded-lg p-3 transition-colors hover:bg-vapor/30"
        >
          <span className="flex items-center gap-2 font-display text-[10px] font-medium uppercase tracking-[0.15em] text-graphite">
            Next
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path
                d="M5 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-serif text-base font-medium text-ink text-right">
            {next.label}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
