import type { Metadata, Viewport } from 'next';
import { Newsreader, Outfit } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import JsonLd from '@/components/JsonLd';

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Gyan Sthali Public School, Kalajharia | UDISE 20191509702 | Jamtara, Jharkhand',
  description:
    'Gyan Sthali Public School, Kalajharia, Karmatanr Vidyasagar, Jamtara (UDISE: 20191509702). Established 2007. Admissions open for session 2026-27 from LKG to Class VIII.',
  keywords: [
    'Gyan Sthali Public School',
    'Gyan Sthali Kalajharia',
    'Gyan Sthali Jamtara',
    'UDISE 20191509702',
    'Karmatanr Vidyasagar school',
    'School in Kalajharia',
    'Primary and Upper Primary School Jamtara',
    'Admissions LKG to Class 8 Kalajharia',
  ],
  authors: [{ name: 'Gyan Sthali Public School' }],
  creator: 'Uddipta Tech Solution',
  metadataBase: new URL('https://gyansthali-kalajharia.edu.in'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gyansthali-kalajharia.edu.in',
    siteName: 'Gyan Sthali Public School, Kalajharia',
    title: 'Gyan Sthali Public School, Kalajharia | Est. 2007',
    description:
      'Where learning inspires. Where character grows. Discover our campus, classes LKG to VIII, and verified facilities in Kalajharia, Jamtara.',
    images: [
      {
        url: '/images/hero-building.jpg',
        width: 1200,
        height: 630,
        alt: 'Gyan Sthali Public School Kalajharia Campus Assembly',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gyan Sthali Public School, Kalajharia (UDISE 20191509702)',
    description:
      'Where learning inspires. Where character grows. Admissions open for session 2026-27 in Kalajharia, Jamtara.',
    images: ['/images/hero-building.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#132a54',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FDFBF7] text-[#1E293B] antialiased selection:bg-amber-100 selection:text-amber-900">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
