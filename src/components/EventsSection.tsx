'use client';

import React, { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SchoolImage from './SchoolImage';
import { Calendar, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function EventsSection() {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Scroll Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-[#132A54] bg-[#EEF2F8] px-3.5 py-1.5 rounded-full mb-3">
              {t.events.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#132A54] tracking-tight mb-2">
              {t.events.heading}
            </h2>
            <p className="text-base text-[#44474F]">
              {t.events.subheading}
            </p>
          </div>

          {/* Left / Right scroll arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:bg-slate-50 text-slate-700 hover:text-[#1E3A8A] transition-all min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Previous events"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:bg-slate-50 text-slate-700 hover:text-[#1E3A8A] transition-all min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Next events"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth scrollbar-none snap-x snap-mandatory"
        >
          {t.events.items.map((event) => (
            <div
              key={event.id}
              className="min-w-[280px] sm:min-w-[340px] max-w-[340px] flex-shrink-0 snap-start rounded-3xl overflow-hidden bg-white border border-[#E8E3DA] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Event Image */}
              <div className="h-48 overflow-hidden relative bg-slate-200">
                <SchoolImage
                  src={`/images/${event.imageSlot}.jpg`}
                  alt={event.title}
                  width={600}
                  height={400}
                  category="event"
                  fallbackTitle={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#132A54] shadow-xs">
                  {event.category}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#132A54] group-hover:text-blue-900 transition-colors mb-2">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#44474F] leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-[#757780]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Student Co-curricular Activity</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
