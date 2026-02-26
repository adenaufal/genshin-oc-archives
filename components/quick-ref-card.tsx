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
        <p className={`font-mono text-caption uppercase tracking-widest-custom ${accentText}`}>
          Quick Reference
        </p>
        <h2 className="mt-2 font-serif text-display text-ink dark:text-ink">
          {data.name}
        </h2>
        <p className="mt-2 font-sans text-sm italic text-graphite">
          {data.summary}
        </p>

        {/* Stats grid */}
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
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
              <dt className="font-sans text-[11px] font-medium uppercase tracking-widest-custom text-graphite">
                {item.label}
              </dt>
              <dd className="mt-1 font-serif text-lg text-ink dark:text-ink">
                {item.value}
              </dd>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className={`mt-8 border-l-2 ${accentBorder} py-2 pl-6`}>
          <p className="font-serif text-base italic leading-relaxed text-graphite">
            {data.quote}
          </p>
        </blockquote>

        {/* Color palette strip */}
        <div className="mt-8">
          <p className="font-mono text-[10px] uppercase tracking-widest-custom text-graphite">
            Palette
          </p>
          <div className="mt-3 flex gap-3">
            {data.palette.map((color) => (
              <div key={color.hex} className="flex flex-col items-center gap-2">
                <div
                  className="h-8 w-8 border border-vapor dark:border-vapor/30"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
                <span className="font-mono text-[9px] uppercase text-graphite">
                  {color.hex}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
