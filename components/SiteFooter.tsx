import { RESTAURANT_INFO } from '@/lib/menu-data';

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#11161C] text-[#CBD5E1] border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl font-medium text-white">
              {RESTAURANT_INFO.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#A3AEBE] max-w-sm">
              French, Mediterranean, and Asian fine dining by Executive Chef {RESTAURANT_INFO.chef}{' '}
              on Seven Mile Beach, Grand Cayman.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="md:col-span-3 flex flex-col gap-2.5 text-sm"
          >
            <p className="text-xs font-medium text-[#94A3B8] mb-1">Explore</p>
            <a href="#story" className="w-fit hover:text-white transition-colors">
              Story &amp; Bar
            </a>
            <a href="#menu" className="w-fit hover:text-white transition-colors">
              Curated Menus
            </a>
            <a href="#gallery" className="w-fit hover:text-white transition-colors">
              Photography
            </a>
            <a href="#visit" className="w-fit hover:text-white transition-colors">
              Reservations &amp; Hours
            </a>
          </nav>

          <div className="md:col-span-4 text-sm space-y-2">
            <p className="text-xs font-medium text-[#94A3B8] mb-2">Location &amp; Contact</p>
            <p className="text-[#E2E8F0]">{RESTAURANT_INFO.streetAddress}</p>
            <p className="text-[#A3AEBE]">{RESTAURANT_INFO.cityCountry}</p>
            <p className="pt-1 tabular-nums">
              <a
                href={RESTAURANT_INFO.phoneHref}
                className="text-white hover:text-[#93C5FD] transition-colors"
              >
                {RESTAURANT_INFO.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            Demonstration concept website designed for {RESTAURANT_INFO.name}, Grand Cayman. Not an
            official e-commerce storefront.
          </p>
          <p>Built to WCAG 2.1 AA accessibility standards.</p>
        </div>
      </div>
    </footer>
  );
}
