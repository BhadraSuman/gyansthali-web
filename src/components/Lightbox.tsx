'use client';

import React, { useEffect, useCallback, useState } from 'react';
import SchoolImage from './SchoolImage';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSlot: string;
}

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0); // Loop
    }
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1); // Loop
    }
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext(); // Swiped left -> next
    } else if (diff < -50) {
      handlePrev(); // Swiped right -> prev
    }
    setTouchStart(null);
  };

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none animate-in fade-in duration-200"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar: Counter & Close */}
      <div className="flex items-center justify-between z-10 w-full max-w-6xl mx-auto">
        <div className="text-white/80 text-sm font-semibold">
          {currentIndex + 1} / {items.length} •{' '}
          <span className="text-amber-400">{currentItem.category}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Center Area */}
      <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-4">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-2 sm:-left-12 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Active Image */}
        <div className="max-h-[75vh] max-w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center">
          <SchoolImage
            src={`/images/${currentItem.imageSlot}.jpg`}
            alt={currentItem.title}
            width={1200}
            height={800}
            fallbackTitle={currentItem.title}
            className="max-h-[75vh] w-auto object-contain rounded-2xl"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-2 sm:-right-12 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Bar: Title Caption */}
      <div className="text-center z-10 max-w-xl mx-auto w-full">
        <h3 className="text-white text-base sm:text-lg font-bold">
          {currentItem.title}
        </h3>
        <p className="text-xs text-white/60 mt-1">
          Gyan Sthali Public School, Kalajharia
        </p>
      </div>
    </div>
  );
}
