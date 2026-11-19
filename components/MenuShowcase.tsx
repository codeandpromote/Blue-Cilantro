'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { MotionConfig, motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';
import {
  MENU_ITEMS,
  SERVICE_TABS,
  type ServicePeriod,
} from '@/lib/menu-data';
import {
  DIETARY_LABELS,
  filterMenuItems,
  formatCaymanPrice,
  groupItemsByCourse,
  type DietaryFilter,
} from '@/lib/menu-utils';

const DIETARY_OPTIONS: { id: DietaryFilter; label: string }[] = [
  { id: 'all', label: 'All Dishes' },
  { id: 'seafood', label: 'Seafood' },
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'gluten-free', label: 'Gluten-Free' },
  { id: 'clay-oven', label: 'Clay Oven' },
];

export default function MenuShowcase() {
  const [activeService, setActiveService] = useState<ServicePeriod>('dinner');
  const [dietaryFilter, setDietaryFilter] = useState<DietaryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentServiceMeta = useMemo(
    () => SERVICE_TABS.find((t) => t.id === activeService) ?? SERVICE_TABS[0],
    [activeService]
  );

  const filteredItems = useMemo(
    () => filterMenuItems(MENU_ITEMS, activeService, dietaryFilter, searchQuery),
    [activeService, dietaryFilter, searchQuery]
  );

  const courseGroups = useMemo(
    () => groupItemsByCourse(filteredItems, activeService),
    [filteredItems, activeService]
  );

  const hasActiveFilters = dietaryFilter !== 'all' || searchQuery.trim().length > 0;

  const handleTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const next = (index + 1) % SERVICE_TABS.length;
      setActiveService(SERVICE_TABS[next].id);
      tabRefs.current[next]?.focus();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const prev = (index - 1 + SERVICE_TABS.length) % SERVICE_TABS.length;
      setActiveService(SERVICE_TABS[prev].id);
      tabRefs.current[prev]?.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      setActiveService(SERVICE_TABS[0].id);
      tabRefs.current[0]?.focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      const last = SERVICE_TABS.length - 1;
      setActiveService(SERVICE_TABS[last].id);
      tabRefs.current[last]?.focus();
    }
  };

  const resetFilters = () => {
    setDietaryFilter('all');
    setSearchQuery('');
  };

  useEffect(() => {
    const handleSelectMenu = (event: Event) => {
      const customEvent = event as CustomEvent<ServicePeriod>;
      if (customEvent.detail) {
        setActiveService(customEvent.detail);
        setDietaryFilter('all');
        setSearchQuery('');
      }
    };
    window.addEventListener('blue-cilantro:select-menu', handleSelectMenu);
    return () => window.removeEventListener('blue-cilantro:select-menu', handleSelectMenu);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="menu"
        aria-labelledby="menu-heading"
        className="w-full bg-[#FAF9F7] py-20 sm:py-28 border-t border-[#E4E1DA] scroll-mt-24"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Editorial Menu Header */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#1E3A8A] mb-3">
              Curated Menus
            </p>
            <h2
              id="menu-heading"
              className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] leading-[1.1] tracking-[-0.015em] font-medium text-[#14181E] [text-wrap:balance]"
            >
              Seasonal Selections from the Kitchen &amp; Cellar
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#4A525D]">
              Explore our dining room offerings across lunch, evening service, multi-course
              tastings, Sunday brunch, and the Blue Perspex Bar.
            </p>
          </div>

          {/* Service Period Tabs (Accessible Tablist) */}
          <div className="mt-10 border-b border-[#E4E1DA] overflow-x-auto">
            <div
              role="tablist"
              aria-label="Dining service menus"
              className="flex items-center gap-6 sm:gap-9 min-w-max"
            >
              {SERVICE_TABS.map((tab, index) => {
                const isSelected = tab.id === activeService;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    id={`tab-${tab.id}`}
                    role="tab"
                    type="button"
                    aria-selected={isSelected}
                    aria-controls={`panel-${tab.id}`}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => setActiveService(tab.id)}
                    onKeyDown={(e) => handleTabKeyDown(e, index)}
                    className={`relative pb-4 pt-2 text-sm sm:text-[15px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 min-h-[44px] ${
                      isSelected
                        ? 'text-[#14181E]'
                        : 'text-[#596270] hover:text-[#14181E]'
                    }`}
                  >
                    {tab.label}
                    {isSelected && (
                      <motion.span
                        layoutId="active-menu-tab-underline"
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#1E3A8A]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Service Metadata + Interactive Filters */}
          <div className="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E4E1DA]">
            <div className="max-w-xl">
              <p className="text-xs font-medium text-[#596270] tabular-nums">
                {currentServiceMeta.hours}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4A525D]">
                {currentServiceMeta.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Interactive Dietary Filter Controls */}
              <div
                role="group"
                aria-label="Filter menu by dietary preference"
                className="flex flex-wrap items-center gap-1 p-1 bg-[#F2F0EC] border border-[#E4E1DA]"
              >
                {DIETARY_OPTIONS.map((option) => {
                  const active = dietaryFilter === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setDietaryFilter(option.id)}
                      className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 min-h-[36px] ${
                        active
                          ? 'bg-white text-[#14181E] shadow-xs'
                          : 'text-[#4A525D] hover:text-[#14181E]'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>

              {/* Accessible Live Dish Search */}
              <div className="relative min-w-[220px]">
                <label htmlFor="menu-search-input" className="sr-only">
                  Search dishes or ingredients
                </label>
                <Search
                  className="w-4 h-4 text-[#596270] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="menu-search-input"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter dishes or ingredients"
                  className="w-full h-[44px] pl-9 pr-9 text-sm bg-white border border-[#DCD8CF] text-[#14181E] placeholder:text-[#6B7280] focus:border-[#1E3A8A] focus:outline-none transition-colors"
                />
                {searchQuery.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear dish search"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 inline-flex items-center justify-center text-[#596270] hover:text-[#14181E]"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Menu Panel */}
          <div
            id={`panel-${activeService}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeService}`}
            className="mt-10"
          >
            <div className="sr-only" aria-live="polite">
              Showing {filteredItems.length} {filteredItems.length === 1 ? 'selection' : 'selections'} in {currentServiceMeta.label}.
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeService}-${dietaryFilter}-${searchQuery.trim().toLowerCase()}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                {courseGroups.length === 0 ? (
                  <div className="py-16 px-6 bg-white border border-[#E4E1DA] text-center">
                    <p className="font-serif text-2xl text-[#14181E]">
                      No dishes match your current filter
                    </p>
                    <p className="mt-2 text-sm text-[#4A525D] max-w-md mx-auto">
                      Try clearing your search or dietary selection to view the complete{' '}
                      {currentServiceMeta.label.toLowerCase()} menu, or speak with our kitchen about
                      bespoke dietary preparations.
                    </p>
                    {hasActiveFilters && (
                      <button
                        type="button"
                        onClick={resetFilters}
                        className="mt-6 inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#14181E] hover:bg-[#1E3A8A] transition-colors min-h-[44px]"
                      >
                        Clear filters
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="space-y-14">
                    {courseGroups.map((group) => (
                      <div key={group.course}>
                        <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-[#14181E]/15">
                          <h3 className="font-serif text-2xl sm:text-[28px] font-medium text-[#14181E]">
                            {group.course}
                          </h3>
                          <span className="text-xs text-[#596270] tabular-nums">
                            {group.items.length}{' '}
                            {group.items.length === 1 ? 'selection' : 'selections'}
                          </span>
                        </div>

                        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
                          {group.items.map((item) => (
                            <li
                              key={item.id}
                              className="pb-6 border-b border-[#E4E1DA] flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-baseline justify-between gap-4">
                                  <h4 className="font-serif text-[21px] leading-snug font-medium text-[#14181E]">
                                    {item.name}
                                  </h4>
                                  <span className="text-sm font-medium text-[#14181E] tabular-nums whitespace-nowrap shrink-0">
                                    {formatCaymanPrice(item.priceCents, item.priceUnit)}
                                  </span>
                                </div>
                                <p className="mt-2 text-sm leading-[1.68] text-[#4A525D]">
                                  {item.description}
                                </p>
                              </div>

                              {(item.dietary.length > 0 || item.featured) && (
                                <p className="mt-3 text-xs text-[#596270] flex flex-wrap items-center gap-x-2 gap-y-1">
                                  {item.featured && (
                                    <span className="text-[#1E3A8A] font-medium">
                                      House Signature
                                    </span>
                                  )}
                                  {item.featured && item.dietary.length > 0 && (
                                    <span aria-hidden="true">·</span>
                                  )}
                                  {item.dietary.map((tag, tagIdx) => (
                                    <span key={tag} className="inline-flex items-center gap-2">
                                      <span>{DIETARY_LABELS[tag]}</span>
                                      {tagIdx < item.dietary.length - 1 && (
                                        <span aria-hidden="true">·</span>
                                      )}
                                    </span>
                                  ))}
                                </p>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Menu Footnote */}
            <p className="mt-12 pt-6 border-t border-[#E4E1DA] text-xs leading-relaxed text-[#596270] max-w-3xl">
              Sample menu selections presented in Cayman Islands Dollars (CI$). Offerings evolve
              with daily island fishing catches and seasonal produce. Please let our team know of
              any food allergies or dietary accommodations when reserving.
            </p>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
