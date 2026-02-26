"use client"

import { useEffect, useRef, useState } from "react"

interface SliderData {
  trait: string
  value: number
  leftPole: string
  rightPole: string
}

interface PersonalitySlidersProps {
  sliders: SliderData[]
  accent: "crimson" | "jade"
}

function SliderRow({ data, accent, animate }: { data: SliderData; accent: "crimson" | "jade"; animate: boolean }) {
  const fillColor = accent === "crimson" ? "bg-crimson" : "bg-jade"
  const textColor = accent === "crimson" ? "text-crimson" : "text-jade"

  return (
    <div className="py-5">
      <div className="flex items-baseline justify-between">
        <span className={`font-display text-[10px] uppercase tracking-[0.2em] ${textColor}`}>
          {data.trait}
        </span>
        <span className="font-serif text-sm italic text-graphite">
          {data.value}%
        </span>
      </div>
      <div className="mt-3 flex items-center gap-4">
        <span className="w-20 shrink-0 text-right font-serif text-sm italic text-graphite">
          {data.leftPole}
        </span>
        <div className="relative h-[2px] flex-1 bg-vapor dark:bg-vapor/30">
          <div
            className={`absolute inset-y-0 left-0 ${fillColor} transition-all duration-1000 ease-out`}
            style={{ width: animate ? `${data.value}%` : "0%" }}
          />
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 ${fillColor} transition-all duration-1000 ease-out`}
            style={{ left: animate ? `${data.value}%` : "0%" }}
          />
        </div>
        <span className="w-20 shrink-0 font-serif text-sm italic text-graphite">
          {data.rightPole}
        </span>
      </div>
    </div>
  )
}

export function PersonalitySliders({ sliders, accent }: PersonalitySlidersProps) {
  const [animate, setAnimate] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
    <div ref={ref} className="divide-y divide-vapor dark:divide-vapor/30">
      {sliders.map((slider) => (
        <SliderRow key={slider.trait} data={slider} accent={accent} animate={animate} />
      ))}
    </div>
  )
}
