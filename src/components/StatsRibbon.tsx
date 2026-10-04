'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, Users, BookOpen, School } from 'lucide-react';

export default function StatsRibbon() {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 'Users':
        return <Users className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 'School':
      default:
        return <School className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
    }
  };

  return (
    <section
      id="stats"
      className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="School Key Statistics"
    >
      <div className="bg-[#132A54] text-white rounded-3xl shadow-xl p-5 sm:p-8 md:p-10 border border-blue-900/60 overflow-hidden relative">
        {/* Subtle background glow from Stitch theme */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {t.stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors ${
                idx % 2 === 0 ? '' : ''
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-2.5 shadow-inner border border-white/15">
                {getIcon(stat.icon)}
              </div>
              
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight mb-1">
                {stat.value}
              </div>

              <div className="text-xs sm:text-sm font-semibold text-blue-100">
                {stat.label}
              </div>

              {stat.footnote && (
                <div className="text-[10px] sm:text-[11px] text-blue-300/80 mt-1 font-mono">
                  {stat.footnote}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
