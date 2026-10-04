'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsRibbon from '@/components/StatsRibbon';
import AboutSection from '@/components/AboutSection';
import NoticeBoard from '@/components/NoticeBoard';
import AcademicsSection from '@/components/AcademicsSection';
import FacilitiesBento from '@/components/FacilitiesBento';
import FacultySection from '@/components/FacultySection';
import WhyChooseUs from '@/components/WhyChooseUs';
import EventsSection from '@/components/EventsSection';
import GallerySection from '@/components/GallerySection';
import AdmissionsSection from '@/components/AdmissionsSection';
import DigitalPlatformShowcase from '@/components/DigitalPlatformShowcase';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCta from '@/components/FloatingCta';

export default function HomePage() {
  return (
    <>
      {/* 1. Sticky Header with Bilingual Toggle */}
      <Header />

      {/* Main Landmark */}
      <main id="main-content" className="flex-1">
        {/* 2. Hero with Newsreader Typography & Arch Frame */}
        <Hero />

        {/* 3. Quick Stats Ribbon (Est. 2007, 150+* Students, LKG - VIII, 9 Classrooms) */}
        <StatsRibbon />

        {/* 4. About Us & Our Journey (Est. 2007) */}
        <AboutSection />

        {/* 5. Official Notice Board (Admissions 2026-27, Exams, RTE Quota) */}
        <NoticeBoard />

        {/* 6. Academics Wings (Early Years LKG/UKG, Primary I-V, Upper Primary VI-VIII) */}
        <AcademicsSection />

        {/* 7. Facilities Bento Grid (Classrooms, Digiboard, Library, Water, Toilets, Boundary, Van) */}
        <FacilitiesBento />

        {/* 8. Meet Our Teachers (Faculty Directory Placeholder Grid) */}
        <FacultySection />

        {/* 9. Why Choose Gyan Sthali (6 Distinct Pillars) */}
        <WhyChooseUs />

        {/* 10. Student Life & Events (Annual Day, Celebrations, Sports) */}
        <EventsSection />

        {/* 10. Photo Gallery with Real Google Maps Photos & Lightbox */}
        <GallerySection />

        {/* 11. Admissions 2026-27 & Enquiry Form */}
        <AdmissionsSection />

        {/* 12. Digital School Platform Showcase (Powered by Uddipta Tech Solution) */}
        <DigitalPlatformShowcase />

        {/* 13. Frequently Asked Questions (Accordion + JSON-LD) */}
        <FaqSection />

        {/* 14. Contact & Location with Google Maps Coordinates */}
        <ContactSection />
      </main>

      {/* 15. Footer with UDISE info and Uddipta Tech Solution branding */}
      <Footer />

      {/* 16. Floating CTAs (Mobile Sticky Bar & Desktop WhatsApp) */}
      <FloatingCta />
    </>
  );
}
