'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7] relative border-b border-[#E8E3DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-[#132A54] bg-[#EEF2F8] px-3.5 py-1.5 rounded-full mb-3">
            {t.faq.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#132A54] tracking-tight mb-4">
            {t.faq.heading}
          </h2>
          <p className="text-base text-[#44474F]">
            {t.faq.subheading}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E3DA] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500 min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-xl bg-blue-50 text-[#132A54] flex-shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-[#132A54] leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#132A54]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#44474F] leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
