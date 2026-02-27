"use client"

import { useState } from "react"
import { TopNav } from "./top-nav"
import { CombatData } from "./combat-data"
import { PullQuote } from "./pull-quote"
import { SectionNav } from "./section-nav"

export function QingyuBehavior() {
  const [combatOpen, setCombatOpen] = useState(false)

  return (
    <>
      <TopNav label="Book III / Behavior" accentColor="jade" />

      <main className="relative pb-24 pt-32">
        {/* Scroll binding motif */}
        <div
          className="pointer-events-none absolute bottom-0 left-4 top-0 hidden w-px lg:block"
          style={{ backgroundColor: "rgba(42, 75, 66, 0.08)" }}
          aria-hidden="true"
        />

        <article className="mx-auto max-w-reading px-6 lg:pl-12 lg:pr-6">
          {/* Ref code */}
          <p className="font-display text-[10px] uppercase tracking-[0.2em] text-jade">
            REF: LIY-004 // Part 3
          </p>

          {/* Title */}
          <h1 className="mt-6 font-serif text-hero italic text-ink dark:text-ink">
            Behavior & Narrative Utility
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-display text-[10px] uppercase tracking-[0.2em] text-graphite">
            The Performance Manual
          </p>

          {/* Divider */}
          <div className="mt-12 hairline dark:bg-vapor/30" />

          {/* Intro */}
          <p className="mt-12 font-serif text-body-lg italic leading-relaxed text-graphite">
            {'Lan Qingyu does not behave — she performs. Every gesture, every expression, every carefully modulated vocal tone is a choice selected from a vast repertoire of possible performances. This section documents the behaviors that make the performance tangible, the tells that reveal its artificiality, and the rare moments when the mask slips to show what moves beneath.'}
          </p>

          <div className="mt-12 hairline dark:bg-vapor/30" />

          {/* Section: The Five Masks */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                The Five Masks in Practice
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Each of Qingyu\'s five layers manifests in distinct behavioral patterns. Understanding which mask is active — and at what cost — is essential for writing her consistently.'}
            </p>

            {/* Socialite Mask */}
            <div className="mt-8 border border-vapor dark:border-vapor/30 p-6">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-jade" />
                <h3 className="font-serif text-xl text-ink dark:text-ink">The Socialite Mask</h3>
              </div>
              <div className="mt-4 space-y-2 font-sans text-sm text-graphite">
                <p><strong className="text-ink dark:text-ink">Posture:</strong> Open, angled toward conversation partners, head tilted to indicate interest</p>
                <p><strong className="text-ink dark:text-ink">Gesture:</strong> Expressive hands, frequent but controlled touch (arm, shoulder, never intimate)</p>
                <p><strong className="text-ink dark:text-ink">Speech:</strong> Complex sentences, classical allusions, rhetorical questions as social glue</p>
                <p><strong className="text-ink dark:text-ink">Eye contact:</strong> Sustained, warm, creating impression of exclusive attention</p>
                <p><strong className="text-ink dark:text-ink">Energy cost:</strong> High — this is the most labor-intensive performance</p>
              </div>
            </div>

            {/* Broker Mask */}
            <div className="mt-6 border border-vapor dark:border-vapor/30 p-6">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-jade" />
                <h3 className="font-serif text-xl text-ink dark:text-ink">The Broker Mask</h3>
              </div>
              <div className="mt-4 space-y-2 font-sans text-sm text-graphite">
                <p><strong className="text-ink dark:text-ink">Posture:</strong> Still, controlled, occupying space with quiet confidence</p>
                <p><strong className="text-ink dark:text-ink">Gesture:</strong> Minimal, precise — a finger placed on a document, a hand raised to pause</p>
                <p><strong className="text-ink dark:text-ink">Speech:</strong> Direct, efficient, stripped of charm, occasionally intimidating</p>
                <p><strong className="text-ink dark:text-ink">Eye contact:</strong> Evaluative, measuring, occasionally cold</p>
                <p><strong className="text-ink dark:text-ink">Energy cost:</strong> Moderate — professional mode, well-practiced</p>
              </div>
            </div>

            {/* Strategist Mask */}
            <div className="mt-6 border border-vapor dark:border-vapor/30 p-6">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-jade" />
                <h3 className="font-serif text-xl text-ink dark:text-ink">The Strategist Mask</h3>
              </div>
              <div className="mt-4 space-y-2 font-sans text-sm text-graphite">
                <p><strong className="text-ink dark:text-ink">Posture:</strong> Relaxed but alert, casual positioning that maintains tactical advantage</p>
                <p><strong className="text-ink dark:text-ink">Gesture:</strong> Thought tells — touching jade hairpin, adjusting tea cup</p>
                <p><strong className="text-ink dark:text-ink">Speech:</strong> Candid within boundaries, witty, sharp observations</p>
                <p><strong className="text-ink dark:text-ink">Eye contact:</strong> Genuine engagement, occasional checking for reaction</p>
                <p><strong className="text-ink dark:text-ink">Energy cost:</strong> Moderate — closer to authentic, but still managed</p>
              </div>
            </div>

            {/* Survivor Mask */}
            <div className="mt-6 border border-vapor dark:border-vapor/30 p-6">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-jade" />
                <h3 className="font-serif text-xl text-ink dark:text-ink">The Survivor Mask</h3>
              </div>
              <div className="mt-4 space-y-2 font-sans text-sm text-graphite">
                <p><strong className="text-ink dark:text-ink">Posture:</strong> Coiled, compact, center of gravity lowered — the dock-district girl ready to run</p>
                <p><strong className="text-ink dark:text-ink">Gesture:</strong> Minimal, defensive — hands close to body, exits already mapped</p>
                <p><strong className="text-ink dark:text-ink">Speech:</strong> Clipped, accent hardens, classical allusions vanish entirely</p>
                <p><strong className="text-ink dark:text-ink">Eye contact:</strong> Hypervigilant scanning, tracking every movement in the room</p>
                <p><strong className="text-ink dark:text-ink">Energy cost:</strong> Low — this is instinct, not performance. The oldest mask, worn before she knew what masks were</p>
              </div>
            </div>

            {/* Child Mask */}
            <div className="mt-6 border border-vapor dark:border-vapor/30 p-6">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-jade" />
                <h3 className="font-serif text-xl text-ink dark:text-ink">The Child</h3>
              </div>
              <div className="mt-4 space-y-2 font-sans text-sm text-graphite">
                <p><strong className="text-ink dark:text-ink">Posture:</strong> Curled, small, shoulders drawn in — the body remembering what the mind has archived</p>
                <p><strong className="text-ink dark:text-ink">Gesture:</strong> Self-soothing — silk between fingers, arms wrapped around herself, touching the beauty mark</p>
                <p><strong className="text-ink dark:text-ink">Speech:</strong> Quiet, halting, sometimes silent entirely. When words come, they are simple</p>
                <p><strong className="text-ink dark:text-ink">Eye contact:</strong> Avoidant, or fixed on a single point — the thousand-yard stare of someone looking inward</p>
                <p><strong className="text-ink dark:text-ink">Energy cost:</strong> {'None — this is not a performance. This is what remains when every mask has failed. Seen by fewer than three living people'}</p>
              </div>
            </div>
          </section>

          {/* Section: Physical Tells */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Physical Tells
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu\'s tells are subtle — she has spent thirty years learning to eliminate them — but they exist. The key is knowing what to watch for when the performance is under strain.'}
            </p>

            {/* Tells */}
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-jade/20 dark:border-jade/30 pl-6">
                <h3 className="font-serif text-lg text-ink dark:text-ink">The Jade Hairpin</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                  {'The hairpin is her talisman. She touches it when thinking, adjusts it when anxious, grips it when afraid. Under extreme stress, she has been known to remove it entirely — hair down, defenses down — though this happens rarely and only when she feels truly safe.'}
                </p>
              </div>

              <div className="border-l-2 border-jade/20 dark:border-jade/30 pl-6">
                <h3 className="font-serif text-lg text-ink dark:text-ink">Hand Tremor</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                  {'A fine tremor appears under sustained pressure. She manages this by keeping hands occupied — tea preparation, document handling, any task that disguises the shaking as purposeful movement.'}
                </p>
              </div>

              <div className="border-l-2 border-jade/20 dark:border-jade/30 pl-6">
                <h3 className="font-serif text-lg text-ink dark:text-ink">Accent Regression</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                  {'Under extreme stress or genuine anger, traces of her dock-district accent surface: harder consonants, shorter vowels. She hates this. It is the linguistic equivalent of a crack in the mask.'}
                </p>
              </div>

              <div className="border-l-2 border-jade/20 dark:border-jade/30 pl-6">
                <h3 className="font-serif text-lg text-ink dark:text-ink">The Real Smile</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                  {'Qingyu\'s social smile reaches her eyes and activates specific muscles around them. Her real smile — seen by fewer than five living people — is different: it activates muscles around the mouth that her social smile never touches. It is asymmetrical, slightly surprised, and gone before it fully forms.'}
                </p>
              </div>
            </div>

            <PullQuote accent="jade">
              {'"When Qingyu stops performing, she does not become relaxed — she becomes exhausted. The mask is heavy, and she has been wearing it for thirty years."'}
            </PullQuote>
          </section>

          {/* Section: Social Navigation Patterns */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Social Navigation Patterns
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu moves through social spaces with the precision of a surgeon and the adaptability of a predator. Her approach varies by context but follows consistent patterns.'}
            </p>

            {/* Pattern 1 */}
            <h3 className="mt-8 font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
              Intelligence Gathering
            </h3>
            <p className="mt-4 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu extracts information through strategic generosity. She gives freely — advice, introductions, small favors — creating debts that she later calls in. The initial gift appears spontaneous; it is calculated. She chooses recipients based on potential future utility, planting seeds that may not bear fruit for years.'}
            </p>

            {/* Pattern 2 */}
            <h3 className="mt-8 font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
              Conflict Management
            </h3>
            <p className="mt-4 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu does not engage in direct confrontation if avoidable. Her preferred approach is redirection — guiding conflict into channels where it dissipates harmlessly or resolves in her favor. When confrontation is unavoidable, she prefers to win before the fight begins: blackmail, leverage, the quiet removal of options until surrender is the only remaining choice.'}
            </p>

            {/* Pattern 3 */}
            <h3 className="mt-8 font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
              Vulnerability Deployment
            </h3>
            <p className="mt-4 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu occasionally deploys calculated vulnerability — a confession of weariness, a moment of apparent doubt, a fleeting reference to her difficult past. These moments are always strategic, designed to create intimacy and lower defenses. The vulnerability is real (the material is drawn from genuine experience) but the timing is weaponized.'}
            </p>
          </section>

          {/* Section: Operational Tradecraft */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Operational Tradecraft
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu\'s intelligence work is not improvised — it is a system refined over two decades of practice, maintained with the discipline of a military operation and the elegance of a tea ceremony.'}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="border border-vapor dark:border-vapor/30 p-5">
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest-custom text-jade">Dead Drops</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-graphite">
                  {'Serviced on a rotating schedule, with locations changed monthly according to a system only she fully understands. Flower arrangements delivered by seemingly innocent vendors. Coded notes slipped under doors. Messages embedded in market transactions. The network is invisible to anyone who does not know what to look for.'}
                </p>
              </div>

              <div className="border border-vapor dark:border-vapor/30 p-5">
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest-custom text-jade">Cipher Rotation</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-graphite">
                  {'She uses multiple cipher systems, rotated based on the sensitivity of the information and the reliability of the courier. Her primary system is a polyalphabetic cipher keyed to passages from a specific edition of a Liyue poetry anthology. Without the key text and the knowledge of which passages correspond to which cipher wheels, her correspondence is indecipherable.'}
                </p>
              </div>

              <div className="border border-vapor dark:border-vapor/30 p-5">
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest-custom text-jade">Safe Houses</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-graphite">
                  {'A network of rented rooms, cooperative business owners, and discreet locations across the harbor. Meetings with informants take place in carefully selected locations — never the same place twice in succession, never anywhere that could be easily surveilled. She maintains at least two exit routes from every location she frequents.'}
                </p>
              </div>
            </div>

            <PullQuote accent="jade">
              {'\"An information network is a living thing, and it requires constant tending. Qingyu tends hers the way a gardener tends a poisonous but beautiful vine — with care, with respect, and with gloves.\"'}
            </PullQuote>
          </section>

          {/* Section: Daily Routines */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Daily Routines
              </h2>
            </div>

            {/* Morning */}
            <h3 className="mt-8 font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
              Morning — The Construction of Self
            </h3>
            <p className="mt-4 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu wakes before dawn, when the harbor is quiet and the world has not yet begun its demands. These hours are sacred — the only time she is entirely unobserved. She does not perform her morning tea ceremony for an audience; she performs it for herself, and the difference is everything.'}
            </p>

            <div className="mt-6 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h4 className="font-serif text-lg text-ink dark:text-ink">Skincare as Armor</h4>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'Skincare comes first — a meticulous regimen of Liyue herbal preparations, light oils, and cold water. She learned skin care not from any mother figure but from observation, watching the wealthy women of the harbor and reverse-engineering their luminosity. Her skin at forty-four is a testament to decades of disciplined maintenance, and she is not above a flicker of private vanity about it. The lower-class girl who once owned two sets of clothing now possesses dozens of silk robes, and if there is something compulsive in the abundance, she has never examined it closely enough to name it.'}
              </p>
            </div>

            <div className="mt-6 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h4 className="font-serif text-lg text-ink dark:text-ink">The Jade Hairpin Placement</h4>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'Hair follows: the platinum blonde is natural but requires careful management, and she styles it differently depending on the day\'s agenda. Up and ornamented with jade pins for formal social engagements. A softer, partially loose arrangement for intimate tea-house gatherings where she wants to project approachability. Pulled back severely for broker work, when beauty is a tool to be holstered rather than brandished. The hairpin\'s position is a signal — those who know her well can read the day\'s agenda from the angle of the jade alone.'}
              </p>
            </div>

            <div className="mt-6 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h4 className="font-serif text-lg text-ink dark:text-ink">The Private Tea Ceremony</h4>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'The morning tea ceremony is the single element of Qingyu\'s daily routine that is not a performance. She conducts it alone, always, in a small room containing nothing but a low table, a window facing east, and her tea implements — a set of celadon cups and a clay pot she has owned for over fifteen years, the most sentimentally valuable objects she possesses. The ceremony is unhurried. She heats the water to precise temperatures depending on the leaf. She watches the steam. She drinks in silence. For perhaps twenty minutes, she is simply present, and the tea is simply tea.'}
              </p>
              <p className="mt-3 font-sans text-xs italic text-jade">
                {'As of current canon, only Dmitri has received an invitation to share this private tea — and even he may not fully understand what it means.'}
              </p>
            </div>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Sword practice follows — three mornings a week with a blade master, maintaining skills that her public persona conceals. The training is rigorous, practical, focused on incapacitation rather than display. She has never needed to use these skills publicly. The fact that she maintains them anyway says something about how she expects her life to end.'}
            </p>

            {/* Daytime */}
            <h3 className="mt-8 font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
              Daytime — The Performance
            </h3>
            <p className="mt-4 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The working day is a continuous sequence of social performances: meetings with informants, negotiations with clients, attendance at social functions where she gathers intelligence through casual conversation. Every interaction is analyzed in real-time, assessed for utility, and filed for future reference.'}
            </p>

            {/* Evening */}
            <h3 className="mt-8 font-sans text-xs font-bold uppercase tracking-widest-custom text-graphite">
              Evening — The Unwinding
            </h3>
            <p className="mt-4 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'The transition from public to private is gradual and deliberate. Qingyu does not simply remove the mask; she peels it away layer by layer, checking at each stage that she is truly unobserved. The final layer — the one she wears even when alone — comes off only in the hour before sleep, and sometimes not even then.'}
            </p>

            <div className="mt-6 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h4 className="font-serif text-lg text-ink dark:text-ink">The Harbor at Night</h4>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'Evenings are when Liyue Harbor\'s social world comes alive, and consequently when Qingyu does her most important work. Dinners, performances at the Heyu Tea House, private gatherings hosted by merchants and officials — these are the events where guards drop, wine flows, and information surfaces like oil on water. She is a sought-after guest, known for her wit and her ability to make any gathering more interesting. Hosts compete for her attendance not realizing they are competing to be surveilled.'}
              </p>
            </div>

            <div className="mt-6 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h4 className="font-serif text-lg text-ink dark:text-ink">Network Activation</h4>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite">
                {'On nights dedicated to shadow work, the socialite vanishes entirely. Surveillance operations require patience and physical endurance that would surprise anyone who knows only the silk-draped tea-house version of Qingyu. She can hold a position for hours, motionless, watching a target\'s movements with the focused attention of a hunting cat. Document acquisition demands quick hands, quicker thinking, and an intimate knowledge of Liyue\'s architectural quirks. Clandestine meetings with high-value contacts happen in the small hours, in locations chosen for their acoustic privacy and multiple exit routes.'}
              </p>
            </div>

            <p className="mt-paragraph font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'She sleeps poorly. Insomnia has been her companion for decades — the price of a mind that never stops analyzing, evaluating, planning. She manages it with tea, with late-night walks along the harbor, with the private garden she tends when she cannot sleep. Some nights, she drinks alone — osmanthus wine, always, poured into a cup that is too fine for solitary drinking, because she refuses to treat herself as less deserving of beauty simply because no one is watching.'}
            </p>
          </section>

          {/* Section: Vulnerability Triggers */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Vulnerability Triggers
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Certain stimuli bypass Qingyu\'s defenses entirely, producing disproportionate emotional responses that she cannot fully control. These triggers represent the weak points in her psychological architecture.'}
            </p>

            <div className="mt-8 overflow-hidden border border-vapor dark:border-vapor/30">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-canvas dark:bg-canvas-secondary">
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Trigger
                    </th>
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Response
                    </th>
                    <th className="px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-widest-custom text-graphite">
                      Origin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-vapor dark:border-vapor/30">
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Children in poverty</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Fierce, disproportionate protectiveness</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Personal childhood experience</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-vapor/20 dark:bg-vapor/10">
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Being underestimated</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Cold fury, long-term revenge planning</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Lifetime of institutional dismissal</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30">
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Unexpected kindness</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Suspicion, confusion, guilt</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Transactional worldview collision</td>
                  </tr>
                  <tr className="border-b border-vapor dark:border-vapor/30 bg-vapor/20 dark:bg-vapor/10">
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Harbor bells at dawn</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Melancholy, nostalgia</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Childhood mornings, father\'s departures</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 font-serif text-sm text-ink dark:text-ink">Dmitri being injured</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Reaction exceeding professional concern</td>
                    <td className="px-5 py-3 font-sans text-sm text-graphite">Attachment exceeding parameters</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Writing Guide */}
          <section className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jade" />
              <h2 className="font-serif text-title italic text-ink dark:text-ink">
                Writing Guide
              </h2>
            </div>

            <p className="mt-8 font-serif text-body leading-relaxed text-ink dark:text-ink">
              {'Qingyu is challenging to write because her default mode is misdirection. Every line of dialogue has subtext. Every gesture has strategic purpose. The writer must know what she is actually feeling, what she is pretending to feel, and what she wants the observer to believe she is feeling — three different things, often in conflict.'}
            </p>

            <div className="mt-8 border-l-2 border-jade/20 dark:border-jade/30 pl-6">
              <h3 className="font-serif text-lg text-ink dark:text-ink">Key Principles</h3>
              <ul className="mt-4 space-y-3 font-sans text-sm text-graphite">
                <li>• Qingyu should always feel like more than what she appears to be</li>
                <li>• Even genuine warmth has an edge of calculation</li>
                <li>• Simplicity from Qingyu is a choice; she chooses nothing without purpose</li>
                <li>• Silence from her is more significant than speech</li>
                <li>• Her contradictions are the character — embrace them</li>
              </ul>
            </div>

            <PullQuote accent="jade">
              {'"Lan Qingyu speaks the way she thinks — in layers. There is always a surface meaning, always a subtext, always a calculation running beneath the beauty."'}
            </PullQuote>
          </section>

          {/* End divider */}
          <div className="mt-24 flex justify-center">
            <div className="h-px w-16 bg-vapor dark:bg-vapor/30" />
          </div>
        </article>

        {/* Bottom navigation */}
        <SectionNav
          prev={{ label: "History", href: "/characters/lan-qingyu/history" }}
          next={{ label: "Duo Dynamic", href: "/duo" }}
        />
      </main>

      <CombatData
        isOpen={combatOpen}
        onClose={() => setCombatOpen(false)}
        character="qingyu"
      />
    </>
  )
}
