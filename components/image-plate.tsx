import Image from "next/image"

interface ImagePlateProps {
  src: string
  alt: string
  archiveId?: string
  caption?: string
  aspect?: "portrait" | "landscape"
  grayscale?: boolean
}

export function ImagePlate({
  src,
  alt,
  archiveId,
  caption,
  aspect = "landscape",
  grayscale = false,
}: ImagePlateProps) {
  return (
    <figure className="my-16">
      <div
        className={`relative w-full overflow-hidden border border-vapor ${
          aspect === "portrait" ? "aspect-[3/4]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-all duration-700 ${
            grayscale ? "grayscale hover:grayscale-0" : ""
          }`}
          sizes="(max-width: 680px) 100vw, 680px"
        />
      </div>
      <figcaption className="mt-3 flex items-center justify-between border-t border-vapor pt-3">
        {archiveId && (
          <span className="font-mono text-[10px] uppercase tracking-widest-custom text-graphite">
            {archiveId}
          </span>
        )}
        {caption && (
          <span className="font-mono text-[10px] uppercase tracking-widest-custom text-graphite">
            {caption}
          </span>
        )}
      </figcaption>
    </figure>
  )
}
