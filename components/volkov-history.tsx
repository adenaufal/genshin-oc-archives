"use client"

import { useState } from "react"
import { TopNav } from "./top-nav"
import { CombatData } from "./combat-data"
import { PullQuote } from "./pull-quote"
import { SectionNav } from "./section-nav"
import { ImagePlate } from "./image-plate"

export function VolkovHistory() {
  const [combatOpen, setCombatOpen] = useState(false)

  return (
    <>
      <TopNav label="Book II / History" accentColor="crimson" />

      <main className="pb-24 pt-32">
        <article className="mx-auto max-w-reading px-6">
          {/* Ref code */}
          <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">
            REF: SNEZ-088 // Part 2
          </p>

          {/* Title */}
          <h1 className="mt-6 font-serif text-hero italic text-ink dark:text-ink">
            History & Relationships
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
            The Journey from Soldier to Deserter
          </p>

          {/* Divider */}
          <div className="mt-12 hairline dark:bg-vapor/30" />

          {/* Section: Origin Story */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Origin: The Post
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Dmitri was born in a military settlement in northern Snezhnaya called "the Post" — wooden barracks, training yard, mess hall, perimeter wall. His mother, Irina, was a civilian supply coordinator described as "water" to his father Alexei\'s "granite" — warm, gentle, the anomaly in Dmitri\'s life. She died of respiratory illness when Dmitri was three. His earliest memories are fragments: warmth, a singing voice, soft hands, the smell of cooking.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Three-year-old Dmitri searched the house for her for nearly a week. The lesson was immediate and permanent: people disappear. Warmth is temporary. The things you need most are the things most likely to be taken from you.'}
            </p>

            <details className="mt-8 border border-vapor dark:border-vapor/30">
              <summary className="cursor-pointer px-5 py-4 font-display text-[10px] uppercase tracking-[0.2em] text-crimson hover:text-ink transition-colors">
                Childhood & Military Training (Ages 6–17)
              </summary>
              <div className="border-t border-vapor dark:border-vapor/30 px-5 py-5 space-y-paragraph">
                <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
                  {'Training began at six under his father. Exceptional physical aptitude was noticed by age eight. At ten, during a border skirmish, Alexei put a woodcutting axe in his hands and told him to guard the root cellar where younger children hid. He stood at that door for six hours, gripping the axe until his hands bled. His hands had to be pried from the handle.'}
                </p>
                <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
                  {'His "courage" was actually a freeze response — catatonic terror that happened to place him exactly where he needed to be. Everyone interpreted it as bravery. The distinction would haunt him for decades.'}
                </p>
                <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
                  {'Alexei died slowly over several months when Dmitri was seventeen, from injuries sustained years earlier in border defense that never properly healed. He refused medical treatment beyond basic pain management. His last words were practical instructions: "The axe needs sharpening. And fix the fence on the north side — the posts are rotting." Love expressed through maintenance. Dmitri felt nothing at the moment of death. He sharpened the axe. He fixed the fence. He arranged the burial with military efficiency.'}
                </p>
              </div>
            </details>
          </section>

          {/* Section: Worldview */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Worldview & Philosophy
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Dmitri Alexeyevich Volkov is not a man given to grand philosophical declarations. He distrusts rhetoric on principle — he has seen too many eloquent commanders order atrocities with beautiful words. Yet beneath his stoic exterior lies a deeply considered moral architecture, built not from books or teachings but from the accumulated weight of every battle fought, every order followed, and every life he failed to save.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'His beliefs are few, but they are load-bearing walls. Remove any one of them, and the entire structure of his identity threatens to collapse.'}
            </p>
          </section>

          {/* Belief 1 */}
          <section className="mt-12">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest-custom text-crimson">
              Core Belief 1
            </h3>
            <PullQuote accent="crimson">
              {'"A sword that only knows how to cut will eventually run out of things worth cutting."'}
            </PullQuote>

            <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Strength exists to protect, not to dominate. This belief crystallized during the final campaign — the one that broke him — but its roots stretch back further. Dmitri was raised in a military culture that venerated strength as an end unto itself. The erosion began slowly: a village burned not because it posed a strategic threat, but because a commander wanted to send a message. A prisoner beaten not for intelligence, but because the interrogator enjoyed it.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The final collapse came when he watched an entire village put to the torch on suspicion alone. No confirmed enemies. No strategic value. Standing in the snow, watching families flee burning homes, Dmitri understood: strength without purpose was just violence. Violence without restraint was just cruelty. And cruelty was the one thing he could no longer serve.'}
            </p>
          </section>

          {/* Belief 2 */}
          <section className="mt-12">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest-custom text-crimson">
              Core Belief 2
            </h3>
            <PullQuote accent="crimson">
              {'"Tell me nothing. Show me everything."'}
            </PullQuote>

            <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Trust is earned through action, not words. Military life taught Dmitri the value of reliability, but it also taught him how easily words could be weaponized. He served under commanders who gave rousing speeches about honor and brotherhood while sending soldiers into meat grinders for political advancement.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The incident that hardened this belief involved Colonel Vasily Morozov, who personally assured Dmitri\'s unit that a mission had been cleared of civilian presence. The intelligence was wrong, or deliberately falsified. When they breached the target, they found not enemy combatants but a makeshift hospital. After that, Dmitri stopped listening to what people said and started watching what they did.'}
            </p>
          </section>

          {/* Belief 3 */}
          <section className="mt-12">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest-custom text-crimson">
              Core Belief 3
            </h3>
            <PullQuote accent="crimson">
              {'"I\'ve seen what fear does to people. It hollows them out. Leaves nothing but the shape of a person with all the living scooped away."'}
            </PullQuote>

            <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Every person deserves the chance to live without fear. This is the belief that triggered his desertion and, in a very real sense, the belief that gave him his Vision. The night of the village burning, Dmitri looked into the eyes of a child — a girl, no more than five — and saw a fear so total, so absolute, that it had gone beyond terror into blank emptiness.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'In that moment, Dmitri understood that fear of this magnitude was not a natural condition to be endured but an atrocity to be opposed. Every person deserves, at minimum, the chance to exist without that kind of soul-destroying terror. His Dendro Vision manifested that night — not in violence, but in the vines that erupted to shield the refugees as he chose conscience over command.'}
            </p>
          </section>

          {/* Section: The Desertion */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                The Desertion
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The events of the Morepesok campaign are the fulcrum upon which Dmitri\'s entire adult life turns. Understanding what happened there — not just the external facts, but the internal experience of choosing conscience over command — is essential to understanding everything that followed.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'It began with an order: clear the village. The official designation was "suspected enemy sympathizers," but the intelligence was thin to the point of nonexistence. Dmitri\'s unit was commanded to burn the settlement and drive the inhabitants into the winter. He watched commanders he had respected implement the order with mechanical efficiency.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'When the first torch was lit, something in Dmitri broke — or perhaps, something finally healed. In the moments before his desertion, he experienced what he later described as "the loudest silence of my life." Every voice of authority went quiet. And in that silence, his own voice said: "This is wrong, and I will not be part of it."'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'He did not simply walk away. He took the refugees with him — approximately two hundred civilians, half of them children — and he used his own body as a shield between them and the pursuing soldiers. His Vision manifested in that moment: vines erupting from frozen ground, thorn barriers rising in impossible defiance of the season, the element of growth answering a man who had finally chosen to nurture rather than destroy.'}
            </p>
          </section>

          {/* The Morozov Incident */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                The Morozov Incident
              </h2>
            </div>

            <div className="mt-8 border border-vapor dark:border-vapor/30 p-6">
              <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">
                Field Report — Classified
              </p>
              <div className="mt-4 h-px bg-vapor dark:bg-vapor/30" />
              <p className="mt-4 font-serif text-body leading-relaxed text-ink dark:text-ink">
                {'Colonel Vasily Morozov personally assured Dmitri\'s unit that a particular mission had been cleared of civilian presence. The intelligence was wrong, or more likely, deliberately falsified to ensure the unit wouldn\'t hesitate. When Dmitri\'s squad breached the target compound, they found not enemy combatants but a makeshift hospital.'}
              </p>
              <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
                {'The aftermath is something Dmitri still cannot discuss without his hands beginning to shake. After that day, he stopped listening to what people said and started watching what they did. The incident hardened his second core belief into something load-bearing and permanent.'}
              </p>
            </div>
          </section>

          {/* The Deserter-Hunter */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                The Deserter-Hunter
              </h2>
            </div>

            <div className="mt-8 border-l-2 border-crimson/20 dark:border-crimson/30 pl-6">
              <p className="font-serif text-body leading-relaxed text-ink dark:text-ink">
                {'Snezhnaya does not forgive desertion. The first hunter found him three months after the flight south. The fight lasted eleven minutes and left a long, thin scar from Dmitri\'s right collarbone to his left hip — a diagonal line that he carries like a second signature.'}
              </p>
              <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
                {'Dmitri won. The second and third hunters fared no better. When asked about the Snezhnayan military\'s position on his desertion, his response is characteristically terse: "They have sent three. None of them wished to continue the conversation."'}
              </p>
            </div>
          </section>

          {/* The Journey South */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                The Journey South
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Dmitri led the refugees south and east through Snezhnayan wilderness over several months. He used his newly manifested Dendro abilities to create windbreaks, deter predators, and coax edible roots from frozen soil. The journey was brutal, but every civilian survived.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'At parting, some wept. A few pressed gifts into his hands: a carved wooden token, a hand-knitted scarf, a child\'s drawing of a man with a big sword and green vines. He kept all of them. He keeps them still — carried in a leather pouch at the bottom of his pack, the only possessions he would risk his life to retrieve.'}
            </p>
          </section>

          {/* Trauma Layers */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Trauma Architecture
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Dmitri\'s psychological damage is not a single wound but a geological formation — layers of trauma deposited over decades, each one compressing and transforming the ones beneath it.'}
            </p>

            <details className="mt-8 border border-vapor dark:border-vapor/30">
              <summary className="cursor-pointer px-5 py-4 font-display text-[10px] uppercase tracking-[0.2em] text-crimson hover:text-ink transition-colors">
                The Five Trauma Layers
              </summary>
              <div className="border-t border-vapor dark:border-vapor/30 px-5 py-5 space-y-4">
                <div className="border border-vapor dark:border-vapor/30 p-4">
                  <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">Layer 1 — Ages 0–3</p>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-ink dark:text-ink">{"Mother's death. Capacity damaged: ability to form secure bonds."}</p>
                </div>
                <div className="border border-vapor dark:border-vapor/30 p-4">
                  <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">Layer 2 — Ages 3–15</p>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-ink dark:text-ink">{"Chronic hypervigilance in border settlement. Capacity damaged: ability to feel safe without active threat."}</p>
                </div>
                <div className="border border-vapor dark:border-vapor/30 p-4">
                  <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">Layer 3 — Ages 15–27</p>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-ink dark:text-ink">{"Twelve years of military service, combat exposure, and moral injury. Capacity damaged: trust in institutions and authority."}</p>
                </div>
                <div className="border border-vapor dark:border-vapor/30 p-4">
                  <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">Layer 4 — Ages 20–27</p>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-ink dark:text-ink">{"Betrayal trauma — the institution was both protector and source of harm. Capacity damaged: identity framework."}</p>
                </div>
                <div className="border border-vapor dark:border-vapor/30 p-4">
                  <p className="font-display text-[10px] uppercase tracking-[0.2em] text-crimson">Layer 5 — Age 30</p>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-ink dark:text-ink">{"PTSD crisis — two months alone in a forest, dissociative episode. Capacity damaged: integration of past and present."}</p>
                </div>
              </div>
            </details>

            <p className="mt-6 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Sensory triggers include the smell of smoke, metal-on-metal sounds, flat winter light, children crying, and sudden physical contact from behind. Each trigger can activate a different layer, producing responses that range from heightened alertness to full dissociative episodes.'}
            </p>
          </section>

          {/* Values Hierarchy */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Values Hierarchy
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Dmitri\'s values exist in a clear hierarchy, derived from observing his behavior across dozens of scenarios. It represents what he does, not necessarily what he says.'}
            </p>

            <div className="mt-8 overflow-x-auto border border-vapor dark:border-vapor/30">
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-canvas dark:bg-canvas-secondary">
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Rank
                    </th>
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Value
                    </th>
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Strength
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-vapor dark:border-vapor/30">
                    <td className="px-5 py-3 font-serif text-sm text-crimson">1</td>
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Protection of innocents</td>
                    <td className="px-5 py-3 font-sans text-sm text-ink dark:text-ink">Absolute</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-vapor/20 dark:bg-vapor/10">
                    <td className="px-5 py-3 font-serif text-sm text-crimson">2</td>
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Personal honor/integrity</td>
                    <td className="px-5 py-3 font-sans text-sm text-ink dark:text-ink">Very strong</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30">
                    <td className="px-5 py-3 font-serif text-sm text-crimson">3</td>
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Loyalty to trusted individuals</td>
                    <td className="px-5 py-3 font-sans text-sm text-ink dark:text-ink">Strong</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-vapor/20 dark:bg-vapor/10">
                    <td className="px-5 py-3 font-serif text-sm text-crimson">4</td>
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Freedom/independence</td>
                    <td className="px-5 py-3 font-sans text-sm text-ink dark:text-ink">Moderate</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 font-serif text-sm text-crimson">5</td>
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Self-preservation</td>
                    <td className="px-5 py-3 font-sans text-sm text-ink dark:text-ink">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'This hierarchy produces predictable behavior patterns. Dmitri will sacrifice everything — his life included — to protect innocents. He will break contracts, betray employers, and walk into certain death if he believes it will protect those who cannot protect themselves. His low self-preservation worries those who care about him, and rightly so.'}
            </p>
          </section>

          {/* Key Relationships */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Key Relationships
              </h2>
            </div>

            {/* Sergeant Yuri Petrov */}
            <div className="mt-8 border-l-2 border-crimson/20 dark:border-crimson/30 pl-6">
              <h3 className="font-serif text-xl text-ink dark:text-ink">Sergeant Yuri Petrov</h3>
              <p className="mt-2 font-display text-[9px] uppercase tracking-[0.15em] text-graphite">
                Mentor, Deceased
              </p>
              <p className="mt-4 font-serif text-body leading-relaxed text-graphite">
                {'The strongest fighter Dmitri ever knew, and the only one who used that strength exclusively in service of those under his command. Petrov taught Dmitri everything that matters: the claymore forms, the morning tea ritual, the difference between a soldier and a warrior. He died in combat when Dmitri was twenty-four, and his loss is still the standard against which Dmitri measures all other grief.'}
              </p>
            </div>

            {/* Lan Qingyu */}
            <div className="mt-8 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h3 className="font-serif text-xl text-ink dark:text-ink">Lan Qingyu</h3>
              <p className="mt-2 font-display text-[9px] uppercase tracking-[0.15em] text-graphite">
                Professional Partner
              </p>
              <p className="mt-4 font-serif text-body leading-relaxed text-graphite">
                {'Dmitri trusts Qingyu. Not blindly — he is not stupid — but fundamentally. He trusts her competence, her judgment, and her commitment to their partnership. Despite her profession as a spy, despite their philosophical differences, he has extended to her a degree of loyalty that surprises even him. She gives him purpose, a reason to stay present, and the challenge of a mind that operates in ways he cannot predict.'}
              </p>
            </div>
          </section>

          {/* Image plate */}
          <ImagePlate
            src="/images/volkov_cover.webp"
            alt="Dmitri Volkov in combat attire"
            archiveId="Archive ID: V08-C"
            caption="Figure 2: Field Operations // Snezhnayan Campaign"
            aspect="landscape"
            grayscale
          />

          {/* Mortality */}
          <section className="mt-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Death and Mortality
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Dmitri has made peace with his own mortality — genuinely, thoroughly, and perhaps too completely. Death does not frighten him. It does not motivate him. It is simply a fact of his existence, as unremarkable as the weather.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'This acceptance was not achieved through philosophical contemplation. It was achieved through saturation. Dmitri has been so close to death so many times that it has become familiar. And familiar things lose their power to terrify. He does not welcome death, but he does not resist it either.'}
            </p>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'What does frighten him is the death of others — specifically, the deaths of those he fails to protect. Every person who died on his watch represents a failure that death cannot erase. Dmitri does not fear dying; he fears dying with the knowledge that he could have done more.'}
            </p>
          </section>

          {/* End divider */}
          <div className="mt-24 flex justify-center">
            <div className="h-px w-16 bg-vapor dark:bg-vapor/30" />
          </div>
        </article>

        {/* Bottom navigation */}
        <SectionNav
          prev={{ label: "Identity", href: "/characters/dmitri-volkov/identity" }}
          next={{ label: "Behavior", href: "/characters/dmitri-volkov/behavior" }}
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
