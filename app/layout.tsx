import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, DM_Sans, Cactus_Classical_Serif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

const cactusClassical = Cactus_Classical_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cactus",
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Archives | Volkov & Qingyu",
  description:
    "A digital archive presenting the lore of Dmitri Volkov and Lan Qingyu with the reverence of a museum monograph.",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F0E8" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1714" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${cactusClassical.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-canvas text-ink font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
