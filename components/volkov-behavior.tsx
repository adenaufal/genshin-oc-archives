"use client"

import { useState } from "react"
import { TopNav } from "./top-nav"
import { CombatData } from "./combat-data"
import { PullQuote } from "./pull-quote"
import { SectionNav } from "./section-nav"
import { ImagePlate } from "./image-plate"

export function VolkovBehavior() {
  const [combatOpen, setCombatOpen] = useState(false)

  return (
    <>
      <TopNav label="Book III / Behavior" accentColor="crimson" />

      <main className="pb-24 pt-32">
        <article className="mx-auto max-w-reading px-6">
          {/* Ref code */}
          <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">
            REF: SNEZ-088 // Part 3
          </p>

          {/* Title */}
          <h1 className="mt-6 font-serif text-hero italic text-ink dark:text-ink">
            Behavior & Narrative Utility
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
            The Field Manual
          </p>

          {/* Divider */}
          <div className="mt-12 hairline dark:bg-vapor/30" />

          {/* Intro */}
          <p className="mt-12 font-serif text-body-lg italic leading-relaxed text-graphite">
            {'Behavior is where character becomes tangible. Dmitri\'s ISTJ function stack, his Enneagram 6w5 vigilance, his dismissive-avoidant attachment, his PTSD — none of it matters if it doesn\'t manifest in the way he checks a room\'s exits, the way he chops firewood at three in the morning, the way his jaw tightens when someone says something kind.'}
          </p>

          <div className="mt-12 hairline dark:bg-vapor/30" />

          {/* Section: Daily Routines */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Daily Routines
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Dmitri wakes before dawn. Always. This is not a choice — it is a physiological fact, hardwired by twelve years of military reveille and reinforced by a nervous system that interprets deep sleep as a vulnerability. He does not use an alarm. His body simply knows when the light changes.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The morning routine is invariable. Physical training for one hour — weighted carries, bodyweight exercises, sword forms with Petrov\'s claymore. Weapon maintenance follows, conducted with ritual precision. Then the perimeter check, whether he is in a campsite, an inn, or a client\'s compound.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Breakfast is functional. Food is fuel. He eats light and late — half a rice ball at dawn is what he considers sufficient. The one exception is tea — not the elaborate ceremony of Liyue culture, but a simple preparation of herbs steeped for exactly four minutes. He drinks it slowly, and this is what passes for comfort.'}
            </p>

            {/* Subsection: Walks Ahead */}
            <h3 className="mt-12 font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
              Positioning: Walks Ahead
            </h3>

            <p className="mt-4 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'When traveling with others, Dmitri walks ahead. Always. Not beside, not behind — ahead, by exactly three to five paces. This is not rudeness; it is tactical positioning. The point man absorbs the first contact. He places himself between the unknown and whoever follows. If asked to walk beside someone, he will comply for approximately ninety seconds before drifting forward again. The habit is involuntary.'}
            </p>

            {/* Subsection: Evening */}
            <h3 className="mt-12 font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
              The Evening Watch
            </h3>

            <p className="mt-4 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Camp setup is the closest thing Dmitri has to creative expression. He selects positions with scientific precision — back to a cliff or dense vegetation, clear sightlines on approaches, proximity to water. He uses his Dendro Vision to enhance natural defenses: thorn barriers grown across vulnerable approaches, seed-pod trip lines, vine-woven shelters.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The evening watch is Dmitri\'s natural element. While others sleep, he sits at the fire\'s edge with the claymore across his knees, conducting rolling perimeter assessments. He is, in these hours, most completely himself — vigilance is not performance but purpose.'}
            </p>

            {/* Subsection: Night */}
            <h3 className="mt-12 font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
              The Battle That Never Ends
            </h3>

            <p className="mt-4 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Sleep is Dmitri\'s adversary. He sleeps in his clothes, with his boots on or within arm\'s reach. The claymore lies beside the bedroll, positioned for a draw that his muscle memory can execute before his conscious mind engages.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'On good nights, he achieves four to five hours of fragmented sleep. On bad nights — nights with flashbacks, nights with the smell of smoke on the wind — he does not sleep at all. The nightmares, when they come, are full sensory reconstructions. He wakes rigid: every muscle locked, breathing stopped, hands clenched so tightly that his nails leave marks.'}
            </p>
          </section>

          {/* Section: Physical Tells */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Physical Tells
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The body does not lie. It can be disciplined, controlled, trained into submission — and Dmitri\'s body has been all of these things — but beneath the military posture, his flesh tells stories that his mouth will not.'}
            </p>

            {/* Tells table */}
            <div className="mt-8 overflow-x-auto border border-vapor dark:border-vapor/30">
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-canvas dark:bg-canvas-secondary">
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      State
                    </th>
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Physical Sign
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-vapor dark:border-vapor/30">
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Lying</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Speech becomes too perfect, too fluent</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-vapor/20 dark:bg-vapor/10">
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">High emotion</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Jaw clenches, muscle tic below left ear</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30">
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Happiness</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Shoulders drop ~2cm, almost-smile</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-vapor/20 dark:bg-vapor/10">
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Anger</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Voice goes quiet, absolute stillness</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Sadness</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Eye distance, postural erosion, withdraws</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <PullQuote accent="crimson">
              {'"You will never see Dmitri Volkov cry. Not because he does not weep, but because he has learned to time his grief to moonless nights and empty rooms."'}
            </PullQuote>
          </section>

          {/* Section: Habits and Quirks */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Habits and Quirks
              </h2>
            </div>

            {/* Nervous Habits */}
            <h3 className="mt-8 font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
              Nervous Habits
            </h3>

            <div className="mt-4 space-y-4">
              <div className="border-l-2 border-vapor dark:border-vapor/30 pl-4">
                <p className="font-serif text-base font-medium text-ink dark:text-ink">The Weapon Check</p>
                <p className="mt-1 font-sans text-sm text-graphite">
                  {'Under stress, his dominant hand drifts to the claymore hilt — not to draw, but to confirm. He does this dozens of times daily.'}
                </p>
              </div>

              <div className="border-l-2 border-vapor dark:border-vapor/30 pl-4">
                <p className="font-serif text-base font-medium text-ink dark:text-ink">Jaw Clenching</p>
                <p className="mt-1 font-sans text-sm text-graphite">
                  {'When suppressing emotion, his jaw sets with visible force. This has caused dental damage over the years.'}
                </p>
              </div>

              <div className="border-l-2 border-vapor dark:border-vapor/30 pl-4">
                <p className="font-serif text-base font-medium text-ink dark:text-ink">Exit Counting</p>
                <p className="mt-1 font-sans text-sm text-graphite">
                  {'In any enclosed space, Dmitri catalogs exits upon entry and recounts them under stress.'}
                </p>
              </div>
            </div>

            {/* Comfort Behaviors */}
            <h3 className="mt-12 font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
              Comfort Behaviors
            </h3>

            <div className="mt-4 space-y-4">
              <div className="border-l-2 border-vapor dark:border-vapor/30 pl-4">
                <p className="font-serif text-base font-medium text-ink dark:text-ink">Weapon Maintenance</p>
                <p className="mt-1 font-sans text-sm text-graphite">
                  {'When anxious, grieving, or unable to sleep, he cleans the claymore. He has cleaned it three times in a single night during bad episodes.'}
                </p>
              </div>

              <div className="border-l-2 border-vapor dark:border-vapor/30 pl-4">
                <p className="font-serif text-base font-medium text-ink dark:text-ink">Dendro Communion</p>
                <p className="mt-1 font-sans text-sm text-graphite">
                  {'Time spent in contact with growing things — hands on bark, feet on earth — produces a measurable calming effect. He calls it "scouting." It is therapy.'}
                </p>
              </div>

              <div className="border-l-2 border-vapor dark:border-vapor/30 pl-4">
                <p className="font-serif text-base font-medium text-ink dark:text-ink">Chopping Wood</p>
                <p className="mt-1 font-sans text-sm text-graphite">
                  {'When emotions exceed what stillness can manage, he seeks wood to chop. Innkeepers who host him find their wood stores inexplicably full come morning.'}
                </p>
              </div>
            </div>

            {/* Private Habits */}
            <h3 className="mt-12 font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
              Private Habits (Unwitnessed)
            </h3>

            <p className="mt-4 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'In absolute solitude, Dmitri talks to his dead mentor. Not in the conversational way of someone with an imaginary friend, but in the terse, reporting style of a soldier debriefing his commanding officer. "Took a contract in the Chasm border region. Caravan escort. Twelve civilians, six wagons. Route was clean. No casualties."'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'He is mortified by this habit. If anyone witnessed it, he would deny it with a ferocity that would itself constitute a confession.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Wherever he stays for more than a few days, he grows things. Not deliberately — or not admittedly deliberately. A window box develops herb seedlings. A campsite shows new growth for weeks after his departure. He has left a trail of tiny gardens across Teyvat.'}
            </p>

            <div className="mt-6 border-l-2 border-crimson/20 dark:border-crimson/30 pl-6">
              <p className="font-serif text-base font-medium text-ink dark:text-ink">Talks to Plants</p>
              <p className="mt-1 font-sans text-sm text-graphite">
                {'In absolute solitude, Dmitri talks to his plants. Not in the conversational way of someone with a hobby, but in the same terse, reporting style he uses for everything: "You need more water. The soil is too compact. I will fix it." He would be mortified if anyone witnessed this. The plants, for their part, respond to his Dendro resonance with visible enthusiasm.'}
              </p>
            </div>
          </section>

          {/* Image plate */}
          <ImagePlate
            src="/images/volkov_marketingdrip.webp"
            alt="Dmitri Volkov character artwork"
            archiveId="Archive ID: V08-D"
            caption="Figure 3: Character Reference // Marketing Drip"
            aspect="portrait"
          />

          {/* Section: Stress Responses */}
          <section className="mt-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Stress Responses
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Dmitri\'s baseline stress level would be considered clinical anxiety in a civilian. For him, it is Tuesday. The key indicator that stress has moved from baseline to elevated is tempo change — movements develop a fractional increase in speed, conversations become shorter, the accent thickens marginally.'}
            </p>

            {/* Stress levels */}
            <div className="mt-8 space-y-6">
              <div className="border border-vapor dark:border-vapor/30 p-5">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">
                  High Stress
                </p>
                <p className="mt-3 font-serif text-body leading-relaxed text-ink dark:text-ink">
                  {'The most notable behavioral change is the absence of visible distress. Dmitri becomes calmer, stiller, more precisely controlled — the eye of his own storm. His voice flattens to operational monotone. His movements become economical to the point of mechanical perfection. This is dissociative distancing: the experiencing self separates from the acting self.'}
                </p>
              </div>

              <div className="border border-vapor dark:border-vapor/30 p-5">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">
                  Post-Stress Recovery
                </p>
                <p className="mt-3 font-serif text-body leading-relaxed text-ink dark:text-ink">
                  {'When the stress event resolves, Dmitri does not relax — he collapses internally while maintaining external composure. A fine tremor appears in his hands. Appetite loss persists for hours. Verbal shutdown reduces speech to near-silence. The silence can persist for hours; he is processing.'}
                </p>
              </div>
            </div>
          </section>

          {/* Section: PTSD Episodes */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                PTSD Episode Anatomy
              </h2>
            </div>

            <details className="mt-8 border border-vapor dark:border-vapor/30">
              <summary className="cursor-pointer px-5 py-4 font-display text-[10px] uppercase tracking-[0.2em] text-crimson hover:text-ink transition-colors">
                Triggers / Escalation / Recovery
              </summary>
              <div className="border-t border-vapor dark:border-vapor/30 px-5 py-5 space-y-4">
                <div className="border border-vapor dark:border-vapor/30 p-4">
                  <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">Triggers</p>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-ink dark:text-ink">
                    {'Smell of smoke (especially burning wood or fabric), metal-on-metal sounds, flat winter light, children crying, sudden physical contact from behind. Each trigger can activate a different trauma layer.'}
                  </p>
                </div>
                <div className="border border-vapor dark:border-vapor/30 p-4">
                  <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">Escalation</p>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-ink dark:text-ink">
                    {'The experiencing self separates from the acting self. Body continues to function — he can fight, walk, speak — but the person behind the eyes has temporarily vacated. His breathing pattern shifts to a combat cadence: four counts in, seven counts hold, eight counts out. His posture curls inward, shoulders hunching, head dropping — a protective fetal instinct that horrifies him when he becomes aware of it.'}
                  </p>
                </div>
                <div className="border border-vapor dark:border-vapor/30 p-4">
                  <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">Recovery</p>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-ink dark:text-ink">
                    {'A fine tremor appears in his hands. Appetite loss persists for hours. Verbal shutdown reduces speech to near-silence. He seeks physical grounding: hands on bark, feet on earth, the weight of the claymore across his knees. Recovery can take minutes or days depending on the layer activated.'}
                  </p>
                </div>
              </div>
            </details>
          </section>

          {/* Section: Dialogue Samples */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Dialogue Samples
              </h2>
            </div>

            <div className="mt-8 border border-vapor dark:border-vapor/30 p-6">
              <p className="font-sans text-xs italic leading-relaxed text-graphite">
                {'Under Stress — During Combat'}
              </p>
              <div className="mt-4 h-px bg-vapor dark:bg-vapor/30" />
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-crimson">Dmitri</span>
                  <div>
                    <span className="font-sans text-xs italic text-graphite">[to civilians] </span>
                    <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">Wall. Now. Stay low. Do not move until I say.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-crimson">Dmitri</span>
                  <div>
                    <span className="font-sans text-xs italic text-graphite">[barely audible] </span>
                    <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">Three left flank. Two right. Archer on the ridge. Archer first.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-right font-display text-[9px] uppercase tracking-[0.15em] text-crimson">Dmitri</span>
                  <div>
                    <span className="font-sans text-xs italic text-graphite">[after combat, breathing hard] </span>
                    <span className="font-serif text-sm leading-relaxed text-ink dark:text-ink">Clear. Is anyone injured.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border border-vapor dark:border-vapor/30 p-6">
              <p className="font-sans text-xs italic leading-relaxed text-graphite">
                {'Internal Monologue — Liyue Market'}
              </p>
              <div className="mt-4 h-px bg-vapor dark:bg-vapor/30" />
              <p className="mt-4 font-serif text-sm italic leading-relaxed text-ink dark:text-ink">
                {'The market smells like cardamom and woodsmoke. Everything in Liyue smells like something — spices, incense, the harbor salt. Snezhnaya smelled like iron and pine and cold so sharp it had no smell at all, just the absence of warmth in your lungs.'}
              </p>
              <p className="mt-3 font-serif text-sm italic leading-relaxed text-ink dark:text-ink">
                {'The child is staring at me again. Third stall on the left, hiding behind her mother\'s skirt. Small. Maybe six. She has been watching me for eleven minutes. I have been pretending not to notice because noticing would frighten her and frightening children is — no. I do not frighten children. That is a line.'}
              </p>
            </div>
          </section>

          {/* Section: Writing Guide */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Writing Guide
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Dmitri experiences the full range of human emotions. He simply lacks the vocabulary and behavioral templates to express most of them in ways others can interpret. The result is a man who is often misread as emotionless when he is, in fact, experiencing emotional states of considerable intensity.'}
            </p>

            <div className="mt-8 border-l-2 border-crimson/20 dark:border-crimson/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">When Grateful</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'Dmitri does not say "thank you" easily. Instead, he reciprocates through action: equipment maintained, watches covered, positions defended with marginally more attentiveness. The reciprocity is never announced. It simply appears.'}
              </p>
            </div>

            <div className="mt-6 border-l-2 border-crimson/20 dark:border-crimson/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">When Protective</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'His most fluent emotional state. He becomes expansive — awareness broadens to encompass everyone under his care. His voice becomes clear and authoritative. He is physically gentle with the protected while becoming more violent toward threats.'}
              </p>
            </div>

            <div className="mt-6 border-l-2 border-crimson/20 dark:border-crimson/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">When Ashamed</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'Every behavioral system locks into its most controlled setting. Parade-ground rigid posture. Monosyllabic speech. Eye contact ceases entirely. Self-care deteriorates — he extends watches, trains past benefit, punishes himself through exertion.'}
              </p>
            </div>

            <PullQuote accent="crimson">
              {'"The most powerful scenes are not the ones where he expresses emotion freely. They are the ones where emotion is visible despite his best efforts to contain it."'}
            </PullQuote>
          </section>

          {/* End divider */}
          <div className="mt-24 flex justify-center">
            <div className="h-px w-16 bg-vapor dark:bg-vapor/30" />
          </div>
        </article>

        {/* Bottom navigation */}
        <SectionNav
          prev={{ label: "History", href: "/characters/dmitri-volkov/history" }}
          next={{ label: "Duo Dynamic", href: "/duo" }}
        />
      </main>

      <CombatData
        isOpen={combatOpen}
        onClose={() => setCombatOpen(false)}
        character="volkov"
      />
    </>
  )
}
