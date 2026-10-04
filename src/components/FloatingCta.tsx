'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';

export default function FloatingCta() {
  const { contact, t } = useLanguage();

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <aside aria-label="Quick WhatsApp Contact" className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with School on WhatsApp"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all group border-2 border-white min-h-[48px]"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 fill-white" />
          </div>
          <span className="text-sm tracking-wide">WhatsApp</span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Action Bar (Screen width <= 768px) */}
      <nav
        aria-label="Mobile Quick Actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl px-3 py-2"
      >
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto items-center">
          
          {/* 1. Direct Call */}
          <a
            href={`tel:${contact.phonePrimary.replace(/[^\d+]/g, '')}`}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors min-h-[48px]"
            aria-label="Call school"
          >
            <Phone className="w-4 h-4 text-emerald-600 mb-0.5" />
            <span className="text-[11px] font-bold">Call</span>
          </a>

          {/* 2. WhatsApp */}
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/60 transition-colors min-h-[48px]"
            aria-label="Message on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366] mb-0.5" />
            <span className="text-[11px] font-bold">WhatsApp</span>
          </a>

          {/* 3. Apply Now */}
          <a
            href="#admissions"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-extrabold shadow-xs transition-colors min-h-[48px]"
            aria-label="Apply for admissions"
          >
            <Sparkles className="w-4 h-4 mb-0.5" />
            <span className="text-[11px] font-extrabold">Apply</span>
          </a>

        </div>
      </nav>
    </>
  );
}
