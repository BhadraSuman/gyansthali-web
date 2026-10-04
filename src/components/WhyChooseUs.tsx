'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Award, ShieldCheck, Monitor, Trophy, HeartHandshake, UserCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Award':
        return <Award className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-blue-600" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-500" />;
      case 'UserCheck':
      default:
        return <UserCheck className="w-6 h-6 text-[#1E3A8A]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-[#132A54] bg-[#EEF2F8] px-3.5 py-1.5 rounded-full mb-3">
            {t.whyChooseUs.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#132A54] tracking-tight mb-4">
            {t.whyChooseUs.heading}
          </h2>
          <p className="text-base text-[#44474F]">
            {t.whyChooseUs.subheading}
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.whyChooseUs.features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-[#FDFBF7] hover:bg-white border border-[#E8E3DA] hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-blue-50/80 shadow-xs border border-[#E8E3DA] flex items-center justify-center mb-6 transition-colors">
                  {getIcon(feature.icon)}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-[#132A54] mb-3 group-hover:text-blue-900 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#44474F] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#757780]">
                <span>Gyan Sthali Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
