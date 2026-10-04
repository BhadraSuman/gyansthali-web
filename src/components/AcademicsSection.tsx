'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SchoolImage from './SchoolImage';
import { BookOpen, CheckCircle, Clock, Sparkles } from 'lucide-react';

export default function AcademicsSection() {
  const { t } = useLanguage();
  const [activeStageId, setActiveStageId] = useState(t.academics.stages[0]?.id || 'early-years');

  const activeStage = t.academics.stages.find((s) => s.id === activeStageId) || t.academics.stages[0];

  return (
    <section id="academics" className="py-20 lg:py-28 bg-white relative border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-[#132A54] bg-[#EEF2F8] px-3.5 py-1.5 rounded-full mb-3">
            {t.academics.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#132A54] tracking-tight mb-4">
            {t.academics.heading}
          </h2>
          <p className="text-base text-[#44474F]">
            {t.academics.subheading}
          </p>
        </div>

        {/* Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {t.academics.highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FDFBF7] p-5 rounded-2xl border border-[#E8E3DA] flex items-center gap-3.5"
            >
              <div className="p-2 rounded-xl bg-amber-50 text-amber-700 flex-shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#1E293B] leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Stage Selector Tabs */}
        <div className="flex justify-start sm:justify-center mb-8 sm:mb-10 overflow-x-auto pb-2 no-scrollbar px-1">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 gap-1.5 shadow-inner flex-nowrap">
            {t.academics.stages.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  type="button"
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[44px] cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#132A54] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  {stage.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Details & Side Image */}
        {activeStage && (
          <div className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E8E3DA] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Stage Info */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-[#132A54] text-xs font-bold">
                  {activeStage.grades}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-[#757780] bg-white px-3 py-1 rounded-full border border-slate-200">
                  <Clock className="w-3.5 h-3.5" />
                  {activeStage.ageGroup}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#132A54] mb-4">
                {activeStage.title}
              </h3>

              <div className="mb-6">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-2">
                  Pedagogical Focus
                </h4>
                <p className="text-base text-[#1E293B] leading-relaxed">
                  {activeStage.focus}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-3">
                  Core Subjects & Curriculum Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStage.subjects.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E8E3DA] text-xs sm:text-sm font-semibold text-[#1E293B]"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Image using Real Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-100 relative group">
                <SchoolImage
                  src={t.academics.sideImage}
                  alt="Students learning at Gyan Sthali Kalajharia"
                  width={600}
                  height={450}
                  category="classroom"
                  fallbackTitle="Classroom Learning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white text-xs font-semibold">
                  Foundational & Upper Primary Learning • Gyan Sthali
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
