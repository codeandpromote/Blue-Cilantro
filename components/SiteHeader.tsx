'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { RESTAURANT_INFO } from '@/lib/menu-data';

const NAV_ITEMS = [
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Mandatory Demo Website Notice Bar */}
      <div
        role="region"
        aria-label="Demonstration website notice"
        className="w-full bg-[#11161C] text-[#F1F5F9] border-b border-white/10"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 h-7 sm:h-8 flex items-center justify-center text-center">
          <p className="text-[11px] sm:text-xs font-normal tracking-[0.02em] whitespace-nowrap">
            <span className="sm:hidden">
              Demo Website — Concept for {RESTAURANT_INFO.name}
            </span>
            <span className="hidden sm:inline">
              Demo Website — Concept showcase prepared for {RESTAURANT_INFO.name}, Grand Cayman.
            </span>
          </p>
        </div>
      </div>

      {/* Primary 3-Zone Navigation Bar */}
      <div className="w-full bg-[#FAF9F7]/95 backdrop-blur-md border-b border-[#E4E1DA]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 h-[60px] sm:h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#top"
            className="font-serif text-2xl sm:text-[26px] font-medium tracking-[-0.015em] text-[#14181E] whitespace-nowrap shrink-0 hover:text-[#1E3A8A] transition-colors duration-150"
          >
            {RESTAURANT_INFO.name}
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A525D]"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#14181E] transition-colors duration-150 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[#1E3A8A] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single primary action (desktop) + accessible menu toggle (mobile) */}
          <div className="flex items-center shrink-0">
            <a
              href="#visit"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#14181E] hover:bg-[#1E3A8A] transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Reserve a Table
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-panel"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#14181E] hover:text-[#1E3A8A] transition-colors duration-150"
            >
              {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-panel"
          aria-label="Mobile navigation"
          className="md:hidden bg-[#FAF9F7] border-b border-[#E4E1DA] px-4 py-5 shadow-sm"
        >
          <ul className="flex flex-col divide-y divide-[#E4E1DA]">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3.5 text-base font-medium text-[#14181E] hover:text-[#1E3A8A] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <a
              href="#visit"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full py-3 px-5 text-sm font-medium text-white bg-[#14181E] hover:bg-[#1E3A8A] transition-colors"
            >
              Reserve a Table
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
