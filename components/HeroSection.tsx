import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { RESTAURANT_INFO } from '@/lib/menu-data';
import { HERO_IMAGE } from './gallery-assets';

export default function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="w-full bg-[#FAF9F7] pt-8 sm:pt-12 lg:pt-16 pb-14 sm:pb-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Asymmetric Luxury Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-8 lg:gap-12">
          {/* Typographic Column */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <p className="text-sm font-medium text-[#1E3A8A] tracking-[0.02em] mb-4">
                {RESTAURANT_INFO.corridor} · Grand Cayman
              </p>

              <h1
                id="hero-heading"
                className="font-serif text-[clamp(2.5rem,4.5vw,4.15rem)] leading-[1.06] tracking-[-0.02em] font-medium text-[#14181E] [text-wrap:balance]"
              >
                French, Mediterranean &amp; Asian Fine Dining
              </h1>

              <p className="mt-6 text-[16px] leading-[1.7] text-[#4A525D] max-w-[44ch]">
                Led by Executive Chef {RESTAURANT_INFO.chef}, Blue Cilantro pairs classical French
                technique and Mediterranean brightness with aromatic Indian and Asian spices—served
                beside our signature Blue Perspex Bar at Fidelity Financial Centre.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-6">
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-[#14181E] hover:bg-[#1E3A8A] transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
                >
                  Explore the Menu
                </a>

                <a
                  href={RESTAURANT_INFO.openTableUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#14181E] border-b border-[#14181E]/40 pb-1 hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
                >
                  <span>Reserve on OpenTable</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-10 lg:mt-12 pt-6 border-t border-[#E4E1DA]">
              <p className="text-xs text-[#596270] leading-relaxed">
                {RESTAURANT_INFO.chefCredential}
              </p>
            </div>
          </div>

          {/* Dominant Photographic Carrier */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[520px] bg-[#1D242D] overflow-hidden">
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                referrerPolicy="no-referrer"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Full-Width Architectural Essentials Strip Below Hero Split */}
        <dl className="mt-12 lg:mt-16 pt-8 border-t border-[#E4E1DA] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
          <div>
            <dt className="text-xs font-medium text-[#596270]">Address</dt>
            <dd className="mt-1.5 text-sm font-medium text-[#14181E]">
              {RESTAURANT_INFO.streetAddress}
            </dd>
          </div>

          <div>
            <dt className="text-xs font-medium text-[#596270]">Dining Hours</dt>
            <dd className="mt-1.5 text-sm font-medium text-[#14181E] tabular-nums">
              Lunch 11:00–2:30 · Dinner 6:00–10:00
            </dd>
          </div>

          <div>
            <dt className="text-xs font-medium text-[#596270]">Guest Recognition</dt>
            <dd className="mt-1.5 text-sm font-medium text-[#14181E] tabular-nums">
              {RESTAURANT_INFO.googleRating} / 5 on Google · {RESTAURANT_INFO.googleReviewCount} Reviews
            </dd>
          </div>

          <div>
            <dt className="text-xs font-medium text-[#596270]">Accessibility</dt>
            <dd className="mt-1.5 text-sm font-medium text-[#14181E]">
              Step-Free Wheelchair Entrance
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
