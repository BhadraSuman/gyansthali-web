'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SchoolImage from './SchoolImage';
import Lightbox from './Lightbox';
import { Maximize2, Sparkles } from 'lucide-react';

export default function GallerySection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = t.gallery.categories;

  // Filter items based on selected category (matches either English or Hindi key)
  const filteredItems = t.gallery.items.filter((item) => {
    if (selectedCategory === 'All' || selectedCategory === 'सभी') return true;
    return item.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-[#132A54] bg-[#EEF2F8] px-3.5 py-1.5 rounded-full mb-3">
            {t.gallery.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#132A54] tracking-tight mb-3">
            {t.gallery.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#44474F]">
            {t.gallery.subheading}
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all min-h-[44px] cursor-pointer ${
                  isSelected
                    ? 'bg-[#132A54] text-white shadow-md'
                    : 'bg-[#FDFBF7] hover:bg-slate-200/80 text-[#1E293B] border border-[#E8E3DA]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/80 bg-slate-100 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 aspect-[4/3]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View photo: ${item.title}`}
            >
              <SchoolImage
                src={`/images/${item.imageSlot}.jpg`}
                alt={item.title}
                width={800}
                height={600}
                fallbackTitle={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Hover Overlay with Caption & Zoom Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                      {item.category}
                    </span>
                    <h3 className="text-white text-base sm:text-lg font-bold leading-tight mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
}
