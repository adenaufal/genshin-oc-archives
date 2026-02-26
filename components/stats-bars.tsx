"use client"

import { useEffect, useRef, useState } from "react"

interface StatData {
  name: string
  value: number
}

interface StatsBarsProps {
  stats: StatData[]
  accent: "crimson" | "jade"
}

export function StatsBars({ stats, accent }: StatsBarsProps) {
  const [animate, setAnimate] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const fillColor = accent === "crimson" ? "bg-crimson/80" : "bg-jade/80"
  const textColor = accent === "crimson" ? "text-crimson" : "text-jade"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col gap-5">
      {stats.map((stat) => (
        <div key={stat.name}>
          <div className="flex items-baseline justify-between">
            <span className="font-sans text-xs font-medium uppercase tracking-widest-custom text-graphite">
              {stat.name}
            </span>
            <span className={`font-mono text-sm ${textColor}`}>
              {stat.value}
            </span>
          </div>
          <div className="mt-2 h-1 w-full bg-vapor">
            <div
              className={`h-full ${fillColor} transition-all duration-1000 ease-out`}
              style={{ width: animate ? `${stat.value}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
