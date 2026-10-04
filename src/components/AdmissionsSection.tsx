'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import EnquiryForm from './EnquiryForm';
import { MessageSquare, FileCheck2, Info, ArrowRight, Check } from 'lucide-react';

export default function AdmissionsSection() {
  const { t, contact } = useLanguage();

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-[#FDFBF7] relative border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-[#132A54] bg-[#EEF2F8] px-3.5 py-1.5 rounded-full mb-3">
            {t.admissions.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#132A54] tracking-tight mb-3">
            {t.admissions.heading}
          </h2>
          <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold mb-3 border border-amber-300">
            {t.admissions.session}
          </div>
          <p className="text-base text-[#44474F]">
            {t.admissions.subheading}
          </p>
        </div>

        {/* 4-Step Visual Timeline */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {t.admissions.steps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="bg-white p-7 rounded-3xl border border-[#E8E3DA] shadow-xs hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#132A54] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm group-hover:scale-105 transition-transform">
                    {step.stepNumber}
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#132A54] mb-2 group-hover:text-blue-900 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#44474F] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-12 z-20 text-slate-300 pointer-events-none">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Grid: Documents & Fee Info vs. Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left: Required Documents Checklist & Fee Note & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Documents Checklist Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-xs border border-[#E8E3DA]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center flex-shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#132A54]">
                    Required Documents
                  </h4>
                  <p className="text-xs text-[#757780]">Keep ready for verification</p>
                </div>
              </div>

              <ul className="space-y-3">
                {t.admissions.documentsChecklist.map((doc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E293B]">
                    <div className="p-1 rounded-full bg-emerald-50 text-emerald-700 mt-0.5 flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-snug">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fee Note Card */}
            <div className="bg-[#EEF2F8] border border-blue-200/80 rounded-3xl p-6 flex items-start gap-3.5">
              <Info className="w-5 h-5 text-[#132A54] flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-bold text-[#132A54] mb-1">
                  Transparent & Fair Fee Structure
                </h5>
                <p className="text-xs sm:text-sm text-[#44474F] leading-relaxed">
                  {t.admissions.feeNote}
                </p>
              </div>
            </div>

            {/* Large WhatsApp Admission Button */}
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-3xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-xl transition-all min-h-[60px] group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold leading-tight">
                    {t.admissions.whatsappCtaText}
                  </div>
                  <div className="text-xs text-emerald-100 font-medium">
                    Chat with Principal / Office on WhatsApp
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

          {/* Right: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

        </div>

      </div>
    </section>
  );
}
