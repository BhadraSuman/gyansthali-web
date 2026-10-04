'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SchoolImage from './SchoolImage';
import { BookOpen, Laptop, School, Droplet, Sparkles, ShieldCheck, Bus, Activity, Check } from 'lucide-react';

export default function FacilitiesBento() {
  const { t } = useLanguage();

  const enabledItems = t.facilities.items.filter((item) => item.enabled);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-600" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-blue-600" />;
      case 'School':
        return <School className="w-5 h-5 text-indigo-600" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5 text-cyan-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
      case 'Bus':
        return <Bus className="w-5 h-5 text-amber-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-rose-600" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5 text-[#047857]" />;
    }
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#FDFBF7] relative border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-[#132A54] bg-[#EEF2F8] px-3.5 py-1.5 rounded-full mb-3">
            {t.facilities.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#132A54] tracking-tight mb-4">
            {t.facilities.heading}
          </h2>
          <p className="text-base text-[#44474F]">
            {t.facilities.subheading}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enabledItems.map((item, idx) => {
            const isLarge = idx === 0 || idx === 1;

            return (
              <div
                key={item.id}
                className={`group rounded-3xl overflow-hidden bg-white border border-[#E8E3DA] hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Visual Image Header using Real Photos */}
                <div className={`overflow-hidden relative bg-slate-200 ${isLarge ? 'h-64 sm:h-72' : 'h-48'}`}>
                  <SchoolImage
                    src={`/images/${item.imageSlot}.jpg`}
                    alt={item.title}
                    width={800}
                    height={450}
                    category="general"
                    fallbackTitle={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Icon Pill */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-white/80">
                    {getIcon(item.icon)}
                  </div>

                  {/* Verification Pill */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-white/80 text-[11px] font-bold text-[#132A54] flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>{item.verificationBadge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#132A54] mb-2 group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#44474F] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#757780]">
                    <span>Kalajharia Campus</span>
                    <span className="font-semibold text-emerald-700">{item.verificationBadge}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
