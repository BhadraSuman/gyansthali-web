'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { LayoutDashboard, Users, UserCheck, ShieldCheck, CheckCircle2, Sparkles, ArrowRight, X, Laptop, BookOpen, Clock, CreditCard } from 'lucide-react';

export default function DigitalPlatformShowcase() {
  const { t, flags } = useLanguage();
  const [activeModal, setActiveModal] = useState<'parent' | 'teacher' | 'admin' | null>(null);

  if (!flags.showDigitalPlatformDemo) return null;

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#132A54] to-[#0A162C] text-white relative overflow-hidden">
      {/* Decorative aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.digitalPlatform.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight mb-4">
            {t.digitalPlatform.heading}
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            {t.digitalPlatform.subheading}
          </p>
        </div>

        {/* 3 Main Architecture Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.digitalPlatform.portals.map((portal, idx) => {
            const modalKey = idx === 0 ? null : idx === 1 ? 'parent' : 'admin';

            return (
              <div
                key={idx}
                className="rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                      {portal.badge}
                    </span>
                    {idx === 0 ? (
                      <Laptop className="w-5 h-5 text-blue-400" />
                    ) : idx === 1 ? (
                      <Users className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <LayoutDashboard className="w-5 h-5 text-amber-400" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {portal.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {portal.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {portal.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {modalKey ? (
                  <button
                    type="button"
                    onClick={() => setActiveModal(modalKey as any)}
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Interactive Portal Preview</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="text-center py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 rounded-xl border border-emerald-500/30">
                    Active Live Prototype
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Commercial Pitch Banner */}
        <div className="rounded-3xl p-8 bg-gradient-to-r from-amber-500/10 via-white/5 to-blue-500/10 border border-amber-400/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Want to see the complete Digital School Management Platform in action?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Presented by Uddipta Tech Solution for Gyan Sthali Public School, Kalajharia, Jamtara.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-2xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs sm:text-sm shadow-lg transition-all whitespace-nowrap min-h-[44px] flex items-center gap-2"
          >
            <span>Request Digital Platform Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Parent Portal Preview Modal */}
      {activeModal === 'parent' && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white text-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  Uddipta Tech Solution • Parent Portal Preview
                </span>
                <h3 className="text-xl font-bold text-[#132A54] mt-1">
                  Parent Dashboard: Student Profile (Class 4)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-3 bg-blue-50 rounded-2xl text-center">
                <span className="text-xs text-slate-500 block">Attendance</span>
                <span className="text-lg font-extrabold text-[#132A54]">96.4%</span>
              </div>
              <div className="p-3 bg-amber-50 rounded-2xl text-center">
                <span className="text-xs text-slate-500 block">Pending Homework</span>
                <span className="text-lg font-extrabold text-amber-700">1 Task</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded-2xl text-center">
                <span className="text-xs text-slate-500 block">Latest Exam</span>
                <span className="text-lg font-extrabold text-emerald-700">Grade A</span>
              </div>
              <div className="p-3 bg-purple-50 rounded-2xl text-center">
                <span className="text-xs text-slate-500 block">Fee Status</span>
                <span className="text-lg font-extrabold text-purple-700">Cleared</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Today's Mathematics Homework</span>
                  <span className="text-[11px] text-slate-500">Exercise 4.2: Multiplication word problems (Page 48)</span>
                </div>
                <span className="text-xs font-semibold text-amber-600">Due Tomorrow</span>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Quarterly Fee Receipt #GS-2026-48</span>
                  <span className="text-[11px] text-slate-500">Paid on 15 Sept 2026 • Verified Online</span>
                </div>
                <span className="text-xs font-bold text-emerald-600">Paid ✓</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 text-center mb-6">
              🔒 Parents can access this mobile-friendly portal with their registered mobile OTP anytime.
            </p>

            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="w-full py-3 bg-[#132A54] hover:bg-blue-900 text-white font-bold text-xs rounded-xl"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}

      {/* Admin Panel Preview Modal */}
      {activeModal === 'admin' && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white text-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  Uddipta Tech Solution • Admin Panel Preview
                </span>
                <h3 className="text-xl font-bold text-[#132A54] mt-1">
                  Principal & Office Management Console
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-3 bg-blue-50 rounded-2xl text-center">
                <span className="text-xs text-slate-500 block">Total Students</span>
                <span className="text-lg font-extrabold text-[#132A54]">154</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded-2xl text-center">
                <span className="text-xs text-slate-500 block">Teachers Present</span>
                <span className="text-lg font-extrabold text-emerald-700">8 / 8</span>
              </div>
              <div className="p-3 bg-amber-50 rounded-2xl text-center">
                <span className="text-xs text-slate-500 block">New Enquiries</span>
                <span className="text-lg font-extrabold text-amber-700">14 Leads</span>
              </div>
              <div className="p-3 bg-indigo-50 rounded-2xl text-center">
                <span className="text-xs text-slate-500 block">Active Notices</span>
                <span className="text-lg font-extrabold text-indigo-700">4 Published</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 text-xs text-slate-700 mb-6 space-y-2">
              <div className="font-bold text-[#132A54]">Admin Capabilities:</div>
              <div className="flex items-center gap-2">✓ 1-Click WhatsApp Broadcast to Parents for circulars & holidays</div>
              <div className="flex items-center gap-2">✓ Admission enquiries lead management & follow-up status</div>
              <div className="flex items-center gap-2">✓ Automatic receipt generation & pending fee alerts</div>
              <div className="flex items-center gap-2">✓ Photo gallery & website content editor without coding</div>
            </div>

            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="w-full py-3 bg-[#132A54] hover:bg-blue-900 text-white font-bold text-xs rounded-xl"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
