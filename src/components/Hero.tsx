'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SchoolImage from './SchoolImage';
import { Sparkles, ChevronDown, CheckCircle2, ShieldCheck, Heart, BookOpen } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-x-hidden bg-gradient-to-b from-[#F0F3FF] via-[#FDFBF7] to-white"
    >
      {/* Subtle notebook grid texture */}
      <div className="absolute inset-0 bg-notebook-grid opacity-30 pointer-events-none" />
      
      {/* Ambient gradient glow circles */}
      <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Verified UDISE & Est. Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-[11px] sm:text-xs font-bold shadow-xs mb-5 sm:mb-6 hover:bg-amber-100 transition-colors max-w-full">
              <span className="flex h-2 w-2 rounded-full bg-[#D97706] animate-pulse flex-shrink-0" />
              <span className="truncate">{t.hero.badge}</span>
            </div>

            {/* Main Hero Headline (Newsreader Serif) */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-[#132A54] leading-[1.15] sm:leading-[1.12] tracking-tight mb-4 sm:mb-5">
              {t.hero.headline}
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-[#44474F] font-normal leading-relaxed max-w-2xl mb-7 sm:mb-8">
              {t.hero.subheadline}
            </p>

            {/* Two Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <a
                href="#admissions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm rounded-2xl shadow-sm hover:shadow-md transition-all min-h-[48px] focus-visible:ring-2 focus-visible:ring-blue-900 text-center"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>{t.hero.ctaPrimary}</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-[#132A54] font-bold text-sm rounded-2xl border-2 border-[#132A54]/25 hover:border-[#132A54] shadow-xs hover:shadow-md transition-all min-h-[48px] focus-visible:ring-2 focus-visible:ring-amber-500 text-center"
              >
                <BookOpen className="w-4 h-4 text-[#132A54]" />
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Reassurance points */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 sm:gap-3 w-full pt-4 border-t border-[#E8E3DA]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#047857] flex-shrink-0" />
                <span>UDISE: 20191509702</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#047857] flex-shrink-0" />
                <span>Classes LKG – VIII</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#047857] flex-shrink-0" />
                <span>Bilingual Teaching</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Arch Collage with Real Photos from Google Maps */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-2 lg:mt-0">
            
            {/* Main Arch-shaped photo frame */}
            <div className="relative w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[380px]">
              <div className="arch-frame overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[3/4] relative z-10 group">
                <SchoolImage
                  src="/images/hero-building.jpg"
                  alt="Gyan Sthali Public School Kalajharia Campus Assembly"
                  width={800}
                  height={1060}
                  priority={true}
                  category="building"
                  fallbackTitle="Main Campus Assembly"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Soft gradient bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#132A54]/85 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white text-[11px] sm:text-xs font-serif font-bold drop-shadow-md">
                  Gyan Sthali Public School • Kalajharia, Jamtara
                </div>
              </div>

              {/* Overlapping Secondary Photo Card (Bottom Left): Classroom Block */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-8 z-20 w-32 sm:w-44 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 hidden sm:block">
                <SchoolImage
                  src="/images/campus-1.jpg"
                  alt="Classroom block and courtyard"
                  width={400}
                  height={300}
                  category="classroom"
                  fallbackTitle="Classroom Building"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Small Photo Card (Top Right): School Entrance Wall */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-8 z-20 w-28 sm:w-36 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 hidden sm:block">
                <SchoolImage
                  src="/images/campus-2.jpg"
                  alt="Main entrance gate and yellow boundary wall"
                  width={360}
                  height={270}
                  category="building"
                  fallbackTitle="Main Entrance Gate"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Pill Chip 1: Safe Campus */}
              <div className="absolute top-1/4 -left-2 sm:-left-6 z-30 bg-white/95 backdrop-blur-md py-1.5 sm:py-2 px-3 sm:px-3.5 rounded-2xl shadow-lg border border-[#E8E3DA] flex items-center gap-1.5 sm:gap-2 animate-soft-float max-w-[85vw]">
                <div className="p-1 sm:p-1.5 rounded-xl bg-emerald-100 text-emerald-800 flex-shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-[#1E293B] whitespace-nowrap truncate">
                  {t.hero.floatingChips.chip1}
                </div>
              </div>

              {/* Floating Pill Chip 2: Caring Teachers */}
              <div className="absolute bottom-1/4 -right-2 sm:-right-6 z-30 bg-white/95 backdrop-blur-md py-1.5 sm:py-2 px-3 sm:px-3.5 rounded-2xl shadow-lg border border-[#E8E3DA] flex items-center gap-1.5 sm:gap-2 animate-soft-float-delayed max-w-[85vw]">
                <div className="p-1 sm:p-1.5 rounded-xl bg-amber-100 text-amber-900 flex-shrink-0">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-[#1E293B] whitespace-nowrap truncate">
                  {t.hero.floatingChips.chip2}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Scroll Cue at bottom */}
        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-center">
          <a
            href="#stats"
            className="group flex flex-col items-center text-xs font-bold text-[#757780] hover:text-[#132A54] transition-colors"
          >
            <span>{t.hero.scrollPrompt}</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 animate-bounce mt-1 group-hover:text-blue-900" />
          </a>
        </div>

      </div>
    </section>
  );
}
