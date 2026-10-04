'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const { t, meta, contact } = useLanguage();

  const mapEmbedUrl = `https://maps.google.com/maps?q=${meta.geo.latitude},${meta.geo.longitude}&hl=en&z=15&output=embed`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FDFBF7] relative border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-[#132A54] bg-[#EEF2F8] px-3.5 py-1.5 rounded-full mb-3">
            {t.contact.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#132A54] tracking-tight mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-base text-[#44474F]">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards, Addresses & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-7 border border-[#E8E3DA] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#132A54] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#132A54] mb-1">
                  School Address (Kalajharia-1)
                </h4>
                <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed">
                  {meta.fullAddress}
                </p>
                <div className="mt-2 text-[11px] font-mono text-emerald-700 font-semibold">
                  UDISE: {meta.udiseCode} • Block: {meta.block}
                </div>
                <div className="mt-3">
                  <a
                    href={meta.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D97706] hover:text-[#B45309] hover:underline min-h-[36px]"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>{t.contact.getDirections}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-white rounded-3xl p-7 border border-[#E8E3DA] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#132A54] mb-1">
                  Phone & Mobile
                </h4>
                <p className="text-sm text-[#1E293B]">
                  <a
                    href={`tel:${contact.phonePrimary.replace(/[^\d+]/g, '')}`}
                    className="hover:text-blue-700 font-semibold inline-block py-0.5"
                  >
                    {contact.phonePrimary}
                  </a>
                </p>
                <p className="text-xs text-emerald-700 font-medium mt-1">
                  WhatsApp Support: {contact.whatsappNumber}
                </p>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white rounded-3xl p-7 border border-[#E8E3DA] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#132A54] mb-1">
                  School Hours & Office Timings
                </h4>
                <p className="text-xs sm:text-sm text-[#1E293B] mb-2">
                  <span className="font-bold">Classes:</span> {contact.schoolTimings}
                </p>
                <p className="text-xs sm:text-sm text-[#1E293B]">
                  <span className="font-bold">Office:</span> {contact.officeHours}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-[#757780]">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <a href={`mailto:${contact.email}`} className="hover:underline">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Map & Directions */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E8E3DA] bg-slate-100 relative h-[380px] sm:h-[420px]">
              <iframe
                title="Gyan Sthali Public School Kalajharia Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#E8E3DA]">
                <div className="flex items-center gap-2 mb-1 text-[#132A54] font-bold text-sm">
                  <MapPin className="w-4 h-4 text-rose-600" />
                  <span>Gyan Sthali Public School</span>
                </div>
                <p className="text-xs text-[#44474F] mb-3">
                  Kalajharia-1, Karmatanr Vidyasagar, Jamtara – 815352
                </p>
                <a
                  href={meta.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs rounded-xl transition-colors min-h-[38px]"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Guided Visit Callout */}
            <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="font-bold text-[#132A54] text-sm mb-1">
                  Want to visit the campus during office hours?
                </h5>
                <p className="text-xs text-[#44474F]">
                  School coordinators are available from 8:00 AM – 2:00 PM (Monday to Saturday).
                </p>
              </div>
              <a
                href={meta.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#132A54] hover:bg-blue-900 text-white font-bold text-xs rounded-xl shadow-xs transition-colors min-h-[42px]"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>{t.contact.getDirections}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
