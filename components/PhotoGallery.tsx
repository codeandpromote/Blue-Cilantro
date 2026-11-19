'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GALLERY_PHOTOS } from './gallery-assets';

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastOpenedIndexRef = useRef<number | null>(null);

  const selectedPhoto = selectedIndex !== null ? GALLERY_PHOTOS[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    lastOpenedIndexRef.current = selectedIndex;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      } else if (event.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_PHOTOS.length
        );
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  const closeLightbox = () => {
    const returnIdx = lastOpenedIndexRef.current;
    setSelectedIndex(null);
    if (returnIdx !== null) {
      requestAnimationFrame(() => {
        triggerRefs.current[returnIdx]?.focus();
      });
    }
  };

  const showPrev = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
    );
  };

  const showNext = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_PHOTOS.length
    );
  };

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="w-full bg-white py-20 sm:py-28 border-t border-[#E4E1DA] scroll-mt-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#1E3A8A] mb-3">
              Atmosphere &amp; Plates
            </p>
            <h2
              id="gallery-heading"
              className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] leading-[1.1] tracking-[-0.015em] font-medium text-[#14181E] [text-wrap:balance]"
            >
              Inside the Dining Room &amp; Kitchen
            </h2>
          </div>
          <p className="text-sm text-[#596270] max-w-sm">
            Select any photograph to inspect full-frame details with keyboard or touch navigation.
          </p>
        </div>

        {/* Asymmetric Editorial Photography Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-5">
          {GALLERY_PHOTOS.map((photo, index) => {
            const isHeroTile = index === 0;
            return (
              <button
                key={photo.id}
                ref={(el) => {
                  triggerRefs.current[index] = el;
                }}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View photograph: ${photo.title} — ${photo.category}`}
                className={`group relative text-left overflow-hidden bg-[#1D242D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A8A] ${
                  photo.spanClass
                } ${isHeroTile ? 'min-h-[340px] md:min-h-[540px]' : 'aspect-[4/3]'}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    isHeroTile
                      ? '(max-width: 768px) 100vw, 58vw'
                      : '(max-width: 768px) 100vw, 45vw'
                  }
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                {/* Measured Scrim for WCAG AA Contrast on Media Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                  <p className="text-xs text-[#E2E8F0] tracking-[0.02em]">
                    {photo.category}
                  </p>
                  <p className="mt-1 font-serif text-xl sm:text-2xl font-medium leading-snug text-white">
                    {photo.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Dialog */}
      {selectedPhoto && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-photo-title"
          className="fixed inset-0 z-50 bg-[#0B0F14]/99 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
        >
          {/* Top Bar */}
          <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between gap-4 text-white">
            <p className="text-xs sm:text-sm text-[#CBD5E1] tabular-nums">
              {selectedIndex + 1} / {GALLERY_PHOTOS.length} · {selectedPhoto.category}
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery lightbox"
              className="inline-flex items-center justify-center w-11 h-11 text-white border border-white/25 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Center Image Stage */}
          <div className="relative max-w-[1100px] w-full mx-auto my-4 flex-1 min-h-[260px] flex items-center justify-center">
            <div className="relative w-full h-full max-h-[68vh] aspect-[16/10]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="90vw"
                referrerPolicy="no-referrer"
                className="object-contain"
              />
            </div>
          </div>

          {/* Caption & Navigation Controls */}
          <div className="max-w-[1280px] w-full mx-auto pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="max-w-2xl">
              <h3
                id="lightbox-photo-title"
                className="font-serif text-2xl font-medium text-white"
              >
                {selectedPhoto.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#CBD5E1] leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous photograph"
                className="inline-flex items-center justify-center gap-1.5 px-4 h-11 text-sm font-medium text-white border border-white/25 hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                <span>Previous</span>
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next photograph"
                className="inline-flex items-center justify-center gap-1.5 px-4 h-11 text-sm font-medium text-white border border-white/25 hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
