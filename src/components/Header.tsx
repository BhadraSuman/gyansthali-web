'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, Menu, X, Globe, Sparkles, ChevronRight } from 'lucide-react';

export default function Header() {
  const { language, toggleLanguage, t, meta, contact, flags } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.academics, href: '#academics' },
    { label: t.nav.facilities, href: '#facilities' },
    { label: t.nav.notices, href: '#notices' },
    { label: t.nav.faculty, href: '#faculty' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.admissions, href: '#admissions' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header shadow-xs py-2 sm:py-2.5'
          : 'bg-[#FDFBF7]/95 md:bg-[#FDFBF7]/90 md:backdrop-blur-sm py-3 sm:py-3.5 border-b border-[#E8E3DA]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Logo & School Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl p-0.5"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 bg-white rounded-xl shadow-xs border border-[#E8E3DA] p-1 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="/images/logo.svg"
                alt="Gyan Sthali Public School Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm sm:text-base lg:text-lg leading-tight tracking-tight text-[#132A54] group-hover:text-blue-900 transition-colors">
                Gyan Sthali
              </span>
              <span className="text-[11px] sm:text-xs font-sans font-semibold text-[#757780] tracking-wide truncate max-w-[170px] sm:max-w-none">
                Public School • Kalajharia
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 text-xs font-bold text-[#1E293B] hover:text-[#132A54] hover:bg-white rounded-lg transition-all focus-visible:ring-2 focus-visible:ring-amber-500 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D97706] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Language Toggle, Phone, Apply CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Language Switcher */}
            {flags.enableBilingualToggle && (
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={`Switch language to ${language === 'en' ? 'Hindi' : 'English'}`}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-[#132A54] bg-[#EEF2F8] hover:bg-blue-100/80 rounded-full border border-blue-200 transition-all min-h-[38px] cursor-pointer"
                title="Toggle English / हिन्दी"
              >
                <Globe className="w-3.5 h-3.5 text-amber-600" />
                <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
              </button>
            )}

            {/* Quick Call Button (Desktop) */}
            <a
              href={`tel:${contact.phonePrimary.replace(/[^\d+]/g, '')}`}
              aria-label={`Call school at ${contact.phonePrimary}`}
              className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-[#1E293B] hover:text-[#132A54] bg-white hover:bg-slate-50 border border-[#E8E3DA] px-3 py-2 rounded-xl transition-colors min-h-[38px] shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.nav.callUs}</span>
            </a>

            {/* Apply Now Primary CTA */}
            <a
              href="#admissions"
              className="inline-flex items-center gap-1.5 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs sm:text-sm px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all min-h-[38px] focus-visible:ring-2 focus-visible:ring-blue-900"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span className="hidden xs:inline">{t.nav.applyNow}</span>
              <span className="xs:hidden">Apply</span>
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-[#132A54] hover:bg-white rounded-xl min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation with backdrop */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 top-[58px] sm:top-[62px] bg-slate-900/60 backdrop-blur-xs z-50 animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#FDFBF7] w-full max-w-xs sm:max-w-sm ml-auto h-full p-5 sm:p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer School Banner */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#E8E3DA]">
                <img src="/images/logo.svg" alt="Logo" className="w-10 h-10 object-contain" />
                <div>
                  <h4 className="font-serif font-bold text-[#132A54] text-base leading-tight">
                    {meta.name}
                  </h4>
                  <p className="text-xs text-[#757780] font-medium">Kalajharia, Jamtara • Est. 2007</p>
                </div>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 text-sm font-bold text-[#1E293B] hover:text-[#132A54] hover:bg-white rounded-xl transition-colors min-h-[46px]"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-4 pb-12 border-t border-[#E8E3DA] space-y-2.5">
              <a
                href={`tel:${contact.phonePrimary.replace(/[^\d+]/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-[#E8E3DA] text-[#1E293B] font-bold rounded-xl text-xs min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call: {contact.phonePrimary}</span>
              </a>
              <a
                href="#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#D97706] hover:bg-[#B45309] text-white font-bold rounded-xl text-xs shadow-xs min-h-[44px]"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.nav.applyNow} (Session 2026-27)</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
