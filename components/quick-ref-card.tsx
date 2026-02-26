import Image from "next/image"

interface QuickRefData {
  name: string
  chosenName?: string
  pronouns: string
  age: number | string
  height: string
  origin: string
  vision: string
  weapon: string
  constellation: string
  summary: string
  quote: string
  portrait: string
  palette: { hex: string; name: string }[]
}

interface QuickRefCardProps {
  data: QuickRefData
  accent: "crimson" | "jade"
}

export function QuickRefCard({ data, accent }: QuickRefCardProps) {
  const accentText = accent === "crimson" ? "text-crimson" : "text-jade"
  const accentBorder = accent === "crimson" ? "border-crimson/20 dark:border-crimson/30" : "border-jade/20 dark:border-jade/30"

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
      {/* Portrait */}
      <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden border border-vapor dark:border-vapor/30 lg:w-72">
        {/* Corner flourishes */}
        <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-vapor/50 z-10" />
        <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-vapor/50 z-10" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-vapor/50 z-10" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-vapor/50 z-10" />
        
        <Image
          src={data.portrait}
          alt={`${data.name} portrait`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 288px"
          priority
        />
      </div>

      {/* Info grid */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className={`font-display text-[10px] uppercase tracking-[0.25em] ${accentText}`}>
            Character Record
          </span>
          <div className="h-px flex-1 bg-vapor" />
        </div>
        
        <h2 className="font-serif text-display text-ink dark:text-ink">
          {data.name}
        </h2>
        <p className="mt-2 font-serif text-base italic text-graphite">
          {data.summary}
        </p>

        {/* Stats grid */}
        <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-6">
          {[
            { label: data.chosenName ? "Chosen Name" : "Full Name", value: data.name },
            { label: "Pronouns", value: data.pronouns },
            { label: "Age", value: String(data.age) },
            { label: "Height", value: data.height },
            { label: "Origin", value: data.origin },
            { label: "Vision", value: data.vision },
            { label: "Weapon", value: data.weapon },
            { label: "Constellation", value: data.constellation },
          ].map((item) => (
            <div key={item.label}>
              <dt className="font-display text-[10px] uppercase tracking-[0.15em] text-graphite">
                {item.label}
              </dt>
              <dd className="mt-1 font-serif text-lg text-ink dark:text-ink">
                {item.value}
              </dd>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className={`mt-10 border-l-2 ${accentBorder} py-3 pl-6`}>
          <p className="font-serif text-base italic leading-relaxed text-graphite">
            "{data.quote.replace(/"/g, '')}"
          </p>
        </blockquote>

        {/* Color palette strip */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display text-[10px] uppercase tracking-[0.15em] text-graphite">
              Color Study
            </span>
            <div className="h-px flex-1 bg-vapor" />
          </div>
          <div className="flex gap-4">
            {data.palette.map((color) => (
              <div key={color.hex} className="flex flex-col items-center gap-2">
                <div
                  className="h-10 w-10 border border-vapor dark:border-vapor/30 shadow-sm"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
                <span className="font-display text-[9px] uppercase tracking-wider text-graphite">
                  {color.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
