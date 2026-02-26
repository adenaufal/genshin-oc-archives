import { TitleCard } from "@/components/title-card"
import { Dossier } from "@/components/dossier"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main>
      <TitleCard />
      <Dossier />
      <SiteFooter />
    </main>
  )
}
