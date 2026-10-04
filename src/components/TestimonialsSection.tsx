'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const { t, flags } = useLanguage();

  if (!flags.showTestimonials || !t.testimonials.items || t.testimonials.items.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-[#1E3A8A] bg-blue-100/70 px-3.5 py-1.5 rounded-full mb-3">
            {t.testimonials.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.testimonials.heading}
          </h2>
          <p className="text-base text-slate-600">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {t.testimonials.items.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFAF7] rounded-3xl p-8 border border-slate-200/80 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1E3A8A] font-extrabold flex items-center justify-center text-sm shadow-xs">
                  {item.parentName.replace(/\[EDIT\]\s*/, '').charAt(0) || 'P'}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    {item.parentName}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.relation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
