'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Bell, Calendar, FileText, ArrowRight, X, AlertCircle } from 'lucide-react';

export default function NoticeBoard() {
  const { t } = useLanguage();
  const [selectedNotice, setSelectedNotice] = useState<typeof t.notices.items[0] | null>(null);

  return (
    <section id="notices" className="py-20 bg-[#FDFBF7] relative border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 text-xs font-bold mb-3">
            <Bell className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
            <span>{t.notices.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#132A54] tracking-tight mb-3">
            {t.notices.heading}
          </h2>
          <p className="text-base text-[#44474F]">
            {t.notices.subheading}
          </p>
        </div>

        {/* Notice Board Pinboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.notices.items.map((notice) => (
            <div
              key={notice.id}
              className={`rounded-2xl p-6 sm:p-7 bg-white border transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between ${
                notice.isUrgent
                  ? 'border-l-4 border-l-amber-500 border-[#E8E3DA]'
                  : 'border-l-4 border-l-[#132A54] border-[#E8E3DA]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#757780]">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{notice.date}</span>
                  </div>

                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      notice.isUrgent
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-blue-50 text-[#132A54]'
                    }`}
                  >
                    {notice.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#132A54] mb-2 leading-snug">
                  {notice.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#44474F] leading-relaxed mb-4">
                  {notice.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedNotice(notice)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#132A54] hover:text-blue-900 cursor-pointer min-h-[36px]"
                >
                  <span>View Full Notice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {notice.pdfAvailable && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <FileText className="w-3 h-3" />
                    <span>Circular Available</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Notice Modal */}
      {selectedNotice && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedNotice(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-5 sm:p-8 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  {selectedNotice.category} • {selectedNotice.date}
                </span>
                <h3 className="text-xl font-bold text-[#132A54] mt-1">
                  {selectedNotice.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E8E3DA] text-sm text-[#1E293B] leading-relaxed mb-6">
              {selectedNotice.summary}
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500">
                Issued by Office of Administration • Gyan Sthali Public School, Kalajharia-1, Jamtara
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="px-5 py-2.5 rounded-xl bg-[#132A54] text-white text-xs font-bold cursor-pointer hover:bg-blue-900 transition-colors"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
