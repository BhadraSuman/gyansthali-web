'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { GraduationCap, Award, BookOpen, Clock, Info } from 'lucide-react';

export default function FacultySection() {
  const { t } = useLanguage();

  return (
    <section id="faculty" className="py-20 bg-white relative border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-[#132A54] bg-[#EEF2F8] px-3.5 py-1.5 rounded-full mb-3">
            {t.faculty.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#132A54] tracking-tight mb-3">
            {t.faculty.heading}
          </h2>
          <p className="text-base text-[#44474F]">
            {t.faculty.subheading}
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900">
            <Info className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
            <span>{t.faculty.notice}</span>
          </div>
        </div>

        {/* Teachers Placeholder Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.faculty.members.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-[#FDFBF7] rounded-3xl p-6 border border-[#E8E3DA] hover:border-blue-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Placeholder Slot */}
                <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 border-2 border-dashed border-slate-300 flex items-center justify-center mb-5 overflow-hidden group-hover:border-amber-500 transition-colors">
                  <GraduationCap className="w-10 h-10 text-slate-400 group-hover:text-amber-600 transition-colors" />
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-base font-bold text-[#132A54] group-hover:text-blue-900 transition-colors">
                    {teacher.name}
                  </h3>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full inline-block mt-1">
                    {teacher.designation}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-[#44474F] border-t border-slate-200/80 pt-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{teacher.subject}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span>{teacher.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{teacher.experience}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-dashed border-slate-200 text-center">
                <span className="text-[11px] font-mono text-slate-400">
                  Profile Slot • Photo & Bio
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
