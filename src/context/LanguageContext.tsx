'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { schoolConfig, SchoolContent } from '@/config/content.config';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: SchoolContent['en'];
  meta: SchoolContent['meta'];
  contact: SchoolContent['contact'];
  social: SchoolContent['social'];
  flags: SchoolContent['flags'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('gs_lang') as Language;
      if (saved && (saved === 'en' || saved === 'hi')) {
        setLanguageState(saved);
      }
    } catch {
      // Ignore localStorage errors (e.g. private browsing)
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('gs_lang', lang);
    } catch {
      // Ignore localStorage errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const t = schoolConfig[language] || schoolConfig.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        meta: schoolConfig.meta,
        contact: schoolConfig.contact,
        social: schoolConfig.social,
        flags: schoolConfig.flags
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
