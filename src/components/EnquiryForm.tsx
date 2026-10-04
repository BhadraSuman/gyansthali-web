'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function EnquiryForm() {
  const { language, contact } = useLanguage();

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    grade: 'Nursery',
    message: '',
    botTrap: '', // Honeypot field for spam prevention
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const gradesList = [
    'Nursery',
    'LKG',
    'UKG',
    'Class 1',
    'Class 2',
    'Class 3',
    'Class 4',
    'Class 5',
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.botTrap) {
      // Silently discard spam bots
      setStatus('success');
      return;
    }

    if (!formData.studentName.trim() || !formData.parentName.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage(
        language === 'en'
          ? 'Please fill in student name, parent name, and contact phone number.'
          : 'कृपया छात्र का नाम, अभिभावक का नाम और फोन नंबर अवश्य भरें।'
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            studentName: formData.studentName,
            parentName: formData.parentName,
            phone: formData.phone,
            gradeApplying: formData.grade,
            message: formData.message,
            school: 'Gyan Sthali Public School, Kalajharia',
          }),
        });

        if (response.ok) {
          setStatus('success');
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        setStatus('error');
        setErrorMessage(
          language === 'en'
            ? 'Submission failed. Please call our school desk directly or message us on WhatsApp.'
            : 'फॉर्म जमा नहीं हो सका। कृपया सीधे विद्यालय कार्यालय में कॉल करें या व्हाट्सएप करें।'
        );
      }
    } else {
      // Graceful fallback for local test/demo without live API key
      setTimeout(() => {
        setStatus('success');
      }, 800);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-10 text-center animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-extrabold text-emerald-950 mb-2">
          {language === 'en' ? 'Admission Enquiry Received!' : 'नामांकन पूछताछ प्राप्त हुई!'}
        </h3>
        <p className="text-sm sm:text-base text-emerald-800 max-w-md mx-auto mb-6">
          {language === 'en'
            ? 'Thank you for your interest in Gyan Sthali Public School, Kalajharia. Our admissions counsellor will reach out to you within 24 hours.'
            : 'ज्ञान स्थली पब्लिक स्कूल, कालाझरिया में रुचि के लिए धन्यवाद। हमारे परामर्शदाता 24 घंटे में आपसे संपर्क करेंगे।'}
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData({
              studentName: '',
              parentName: '',
              phone: '',
              grade: 'Nursery',
              message: '',
              botTrap: '',
            });
            setStatus('idle');
          }}
          className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer min-h-[44px]"
        >
          {language === 'en' ? 'Submit Another Enquiry' : 'एक और पूछताछ भेजें'}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-[#E8E3DA]"
      noValidate
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#132A54] mb-1">
          {language === 'en' ? 'Direct Admission Enquiry' : 'सीधी नामांकन पूछताछ'}
        </h3>
        <p className="text-xs sm:text-sm text-[#757780]">
          {language === 'en'
            ? 'Fill out the details below. Our team in Kalajharia will assist you promptly.'
            : 'नीचे विवरण भरें। कालाझरिया स्थित हमारा कार्यालय शीघ्र संपर्क करेगा।'}
        </p>
      </div>

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-600 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Honeypot Spam Trap */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="botTrap">Do not fill this</label>
        <input
          type="text"
          id="botTrap"
          name="botTrap"
          tabIndex={-1}
          autoComplete="off"
          value={formData.botTrap}
          onChange={(e) => setFormData({ ...formData, botTrap: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
        {/* Student Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-1.5">
            {language === 'en' ? "Student's Full Name *" : 'छात्र का पूरा नाम *'}
          </label>
          <input
            type="text"
            required
            placeholder={language === 'en' ? 'e.g. Aarav Sharma' : 'उदा. आरव शर्मा'}
            value={formData.studentName}
            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-[#E8E3DA] focus:border-[#132A54] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all text-[#1E293B] placeholder:text-slate-400"
          />
        </div>

        {/* Parent Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-1.5">
            {language === 'en' ? "Parent / Guardian Name *" : 'अभिभावक का नाम *'}
          </label>
          <input
            type="text"
            required
            placeholder={language === 'en' ? 'e.g. Ramesh Sharma' : 'उदा. रमेश शर्मा'}
            value={formData.parentName}
            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-[#E8E3DA] focus:border-[#132A54] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all text-[#1E293B] placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-1.5">
            {language === 'en' ? 'Mobile / WhatsApp Number *' : 'मोबाइल / व्हाट्सएप नंबर *'}
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-[#E8E3DA] focus:border-[#132A54] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all text-[#1E293B] placeholder:text-slate-400"
          />
        </div>

        {/* Class Applying For */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-1.5">
            {language === 'en' ? 'Class Applying For' : 'प्रवेश हेतु कक्षा'}
          </label>
          <select
            value={formData.grade}
            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-[#E8E3DA] focus:border-[#132A54] focus:ring-2 focus:ring-blue-100 text-sm outline-none bg-white transition-all cursor-pointer text-[#1E293B]"
          >
            {gradesList.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message / Remarks */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-1.5">
          {language === 'en' ? 'Questions or Remarks (Optional)' : 'कोई विशेष प्रश्न या टिप्पणी (वैकल्पिक)'}
        </label>
        <textarea
          rows={3}
          placeholder={
            language === 'en'
              ? 'Tell us about the student or any specific transport / fee query...'
              : 'विद्यार्थी या वाहन/शुल्क संबंधी कोई विशेष जानकारी...'
          }
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-[#E8E3DA] focus:border-[#132A54] focus:ring-2 focus:ring-blue-100 text-sm outline-none resize-none transition-all text-[#1E293B] placeholder:text-slate-400"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 px-6 rounded-2xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 min-h-[48px] focus-visible:ring-2 focus-visible:ring-blue-900"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>{language === 'en' ? 'Submitting Enquiry...' : 'जमा किया जा रहा है...'}</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>{language === 'en' ? 'Submit Admission Enquiry' : 'पूछताछ फॉर्म जमा करें'}</span>
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-[#757780]">
        🔒 {language === 'en' ? 'Your information is confidential and will only be used for admission counseling.' : 'आपकी जानकारी सुरक्षित रखी जाएगी और केवल प्रवेश मार्गदर्शन हेतु प्रयुक्त होगी।'}
      </p>
    </form>
  );
}
