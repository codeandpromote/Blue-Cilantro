import Image from 'next/image';
import { RESTAURANT_INFO } from '@/lib/menu-data';
import { CLAY_OVEN_IMAGE, GBP_BAR_IMAGE } from './gallery-assets';
import MenuJumpLink from './MenuJumpLink';

export default function StorySection() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="w-full scroll-mt-24"
    >
      {/* Part 1: Culinary Philosophy on Crisp Gallery White */}
      <div className="w-full bg-white border-t border-[#E4E1DA] py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-[#1E3A8A] mb-3">
                Culinary Philosophy
              </p>
              <h2
                id="story-heading"
                className="font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.12] tracking-[-0.015em] font-medium text-[#14181E] [text-wrap:balance]"
              >
                An East-Meets-West Pantry Rooted in Grand Cayman
              </h2>
              <p className="mt-6 text-[15.5px] leading-[1.75] text-[#4A525D]">
                For over a decade along Seven Mile Beach, Executive Chef {RESTAURANT_INFO.chef} has
                shaped Blue Cilantro around deliberate contrast: line-caught Cayman wahoo and local
                snapper dressed in French emulsions, tandoor-blistered flatbreads paired with four
                house-crafted chutneys, and classical European cuts enlivened by coastal spice.
              </p>
              <p className="mt-4 text-[15.5px] leading-[1.75] text-[#4A525D]">
                Every service—from crisp midday lunches and multi-course evening tastings to Grand
                Cayman’s signature Sunday à la carte brunch—is designed to feel unhurried, deeply
                hospitable, and accessible to every guest at the table.
              </p>

              {/* Editorial Pillar List — Natural editorial numbering, hairline dividers */}
              <ol className="mt-10 divide-y divide-[#E4E1DA] border-t border-b border-[#E4E1DA]">
                <li className="py-4 flex items-baseline justify-between gap-4">
                  <span className="font-serif text-lg font-medium text-[#14181E]">
                    01. Clay Oven &amp; House Chutneys
                  </span>
                  <span className="text-xs text-[#596270] shrink-0">Baked to Order</span>
                </li>
                <li className="py-4 flex items-baseline justify-between gap-4">
                  <span className="font-serif text-lg font-medium text-[#14181E]">
                    02. Daily Local Catch &amp; Raw Bar
                  </span>
                  <span className="text-xs text-[#596270] shrink-0">Cayman Waters</span>
                </li>
                <li className="py-4 flex items-baseline justify-between gap-4">
                  <span className="font-serif text-lg font-medium text-[#14181E]">
                    03. International Cellar &amp; Pairings
                  </span>
                  <span className="text-xs text-[#596270] shrink-0">Curated for Spice</span>
                </li>
              </ol>
            </div>

            <div className="lg:col-span-7">
              <figure>
                <div className="relative w-full aspect-[4/3] bg-[#F2F0EC] overflow-hidden">
                  <Image
                    src={CLAY_OVEN_IMAGE.src}
                    alt={CLAY_OVEN_IMAGE.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#596270]">
                  <span>Clay Oven Flatbreads with Mint-Cilantro, Roasted Garlic &amp; Sweet Plum Chutneys</span>
                  <span>Signature Table Prelude</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Architectural Mineral-Slate Contrast Band Featuring Original Google Business Profile Photograph */}
      <div className="w-full bg-[#11161C] text-[#F8FAFC] py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
            <div className="lg:col-span-8">
              <figure>
                <div className="relative w-full aspect-[16/9] bg-[#1B222C] overflow-hidden">
                  <Image
                    src={GBP_BAR_IMAGE.src}
                    alt={GBP_BAR_IMAGE.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#A3AEBE] tracking-[0.01em]">
                  <span>Original Venue Photograph · Google Business Profile</span>
                  <span>The Illuminated Blue Perspex Bar · Fidelity Financial Centre</span>
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-4">
              <p className="text-sm font-medium text-[#93C5FD] tracking-[0.02em] mb-3">
                The Lounge &amp; Bar
              </p>
              <h3 className="font-serif text-[clamp(1.85rem,3vw,2.6rem)] leading-[1.15] font-medium text-white [text-wrap:balance]">
                Evening Aperitifs at the Blue Perspex Bar
              </h3>
              <p className="mt-5 text-[15px] leading-[1.75] text-[#CBD5E1] tracking-[0.01em]">
                Anchored by stacked natural slate and our luminous frosted-blue Perspex counter, the
                bar invites guests for pre-dinner martinis, Spicy Mango Caipiroshkas infused with
                island scotch bonnet, and rare pours from our international wine cellar.
              </p>
              <div className="mt-8 pt-6 border-t border-white/15">
                <MenuJumpLink
                  service="drinks"
                  label="View Bar & Cellar Selections"
                  className="inline-flex items-center text-sm font-medium text-white border-b border-white/40 pb-1 hover:border-[#93C5FD] hover:text-[#93C5FD] transition-colors duration-150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
