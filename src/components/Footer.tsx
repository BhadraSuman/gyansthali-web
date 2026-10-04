'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUp, MapPin, Phone, Mail, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const { t, meta, contact, social } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#00153A] text-white pt-16 pb-24 md:pb-12 overflow-hidden border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: School Identity & Blurb */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-2xl p-1 shadow-md flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/logo.svg"
                  alt="Gyan Sthali Public School Crest"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white tracking-tight">
                  {meta.name}
                </h3>
                <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  Kalajharia, Jamtara • Est. 2007
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {t.footer.blurb}
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-amber-300 font-mono mb-6">
              {t.footer.udiseInfo}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-base text-amber-400 mb-4">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-400 transition-colors">
                  {t.nav.academics}
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors">
                  {t.nav.facilities}
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:text-amber-400 transition-colors">
                  {t.nav.notices}
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-amber-400 transition-colors">
                  {t.nav.faculty}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-400 transition-colors">
                  {t.nav.admissions}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academics & Stages */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-base text-amber-400 mb-4">
              {t.footer.academicsTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>Early Years (LKG & UKG)</li>
              <li>Primary School (Classes I – V)</li>
              <li>Upper Primary (Classes VI – VIII)</li>
              <li>Foundational Phonics & Numeracy</li>
              <li>Bilingual Classroom Instruction</li>
              <li>Sports, Drill & Cultural Activities</li>
            </ul>
          </div>

          {/* Col 4: Campus Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-base text-amber-400 mb-4">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{contact.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${contact.phonePrimary.replace(/[^\d+]/g, '')}`} className="hover:text-white">
                  {contact.phonePrimary}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="pt-2 text-xs text-amber-300/80 font-mono">
                UDISE: {meta.udiseCode}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Designed Line & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {meta.name}, Kalajharia. {t.footer.copyright}.
          </div>

          <div className="flex items-center gap-1.5 text-slate-300">
            <span>Powered by <strong className="text-amber-400">Uddipta Tech Solution</strong></span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors py-2 px-3 rounded-lg hover:bg-slate-800 cursor-pointer min-h-[44px]"
            aria-label="Back to top of page"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
