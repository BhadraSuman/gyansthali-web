'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SchoolImage from './SchoolImage';
import { Target, Eye, Quote, Award } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden border-b border-[#E8E3DA]">
      {/* Decorative background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-[#132A54] bg-[#EEF2F8] px-3.5 py-1.5 rounded-full mb-3">
            {t.about.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#132A54] tracking-tight">
            {t.about.heading}
          </h2>
        </div>

        {/* Row 1: Story Narrative & 3-Image Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          
          {/* 3-Image Collage using Real Google Maps Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[480px]">
              
              {/* Primary Image: Classroom block & courtyard */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-200">
                <SchoolImage
                  src="/images/campus-1.jpg"
                  alt="Classroom building and open courtyard"
                  width={600}
                  height={450}
                  category="building"
                  fallbackTitle="Classroom Building"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlapping Top-Right Image: Entrance wall */}
              <div className="absolute -top-8 -right-4 sm:-right-8 w-44 sm:w-56 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 hidden sm:block">
                <SchoolImage
                  src="/images/campus-2.jpg"
                  alt="Main entrance wall with Gyan Sthali nameboard"
                  width={300}
                  height={300}
                  category="general"
                  fallbackTitle="School Entrance Wall"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlapping Bottom-Left Image: Staff at gate */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 w-44 sm:w-52 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 hidden sm:block">
                <SchoolImage
                  src="/images/campus-3.jpg"
                  alt="Teachers and staff members at school gate"
                  width={350}
                  height={260}
                  category="general"
                  fallbackTitle="Staff at School Gate"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-[#E8E3DA] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D97706]" />
                <span className="text-xs font-bold text-[#1E293B]">Kalajharia, Jamtara</span>
              </div>

            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#132A54] mb-5 leading-snug">
              Nurturing Potential, Building Character
            </h3>
            <p className="text-base sm:text-lg text-[#44474F] leading-relaxed mb-8">
              {t.about.story}
            </p>

            {/* Mission & Vision Twin Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#E8E3DA] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#132A54] flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-[#132A54] text-lg mb-2">
                  {t.about.missionTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#44474F] leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#E8E3DA] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-[#132A54] text-lg mb-2">
                  {t.about.visionTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#44474F] leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Row 2: Principal's Message Card */}
        <div className="bg-gradient-to-br from-white to-[#F0F3FF] rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E8E3DA] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-blue-200/30 pointer-events-none">
            <Quote className="w-24 h-24 rotate-180" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            
            {/* Principal Circular Photo Slot */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg border-4 border-amber-400/80 bg-slate-200 relative">
                <SchoolImage
                  src={t.about.principal.image}
                  alt={t.about.principal.name}
                  width={200}
                  height={200}
                  fallbackTitle="Principal Desk"
                  category="building"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-2 text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
                {t.about.principal.badge}
              </span>
            </div>

            {/* Principal Quote & Signature */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-base sm:text-lg text-[#1E293B] italic leading-relaxed mb-4 font-serif">
                {t.about.principal.quote}
              </p>
              <div className="border-t border-[#E8E3DA] pt-3">
                <div className="font-bold text-[#132A54] text-base sm:text-lg">
                  {t.about.principal.name}
                </div>
                <div className="text-xs sm:text-sm text-[#757780] font-medium">
                  {t.about.principal.title}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
