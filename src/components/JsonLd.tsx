import React from 'react';
import { schoolConfig } from '@/config/content.config';

export default function JsonLd() {
  const schoolSchema = {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: schoolConfig.meta.name,
    alternateName: schoolConfig.meta.googleMapsName,
    url: 'https://gyansthali-kalajharia.edu.in',
    logo: 'https://gyansthali-kalajharia.edu.in/images/logo.svg',
    image: 'https://gyansthali-kalajharia.edu.in/images/hero-building.jpg',
    description:
      'Gyan Sthali Public School in Kalajharia-1, Karmatanr Vidyasagar, Jamtara, Jharkhand (UDISE: 20191509702). Established in 2007, offering quality education for Early Years through Upper Primary (LKG to Class VIII).',
    address: {
      '@type': 'PostalAddress',
      streetAddress: schoolConfig.meta.fullAddress,
      addressLocality: schoolConfig.meta.locality,
      addressRegion: schoolConfig.meta.state,
      postalCode: schoolConfig.meta.pin,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: schoolConfig.meta.geo.latitude,
      longitude: schoolConfig.meta.geo.longitude,
    },
    hasMap: schoolConfig.meta.googleMapsUrl,
    telephone: schoolConfig.contact.phonePrimary,
    email: schoolConfig.contact.email,
    openingHours: 'Mo-Sa 07:30-13:30',
    sameAs: [
      schoolConfig.social.facebook,
      schoolConfig.social.youtube,
      schoolConfig.social.instagram,
      schoolConfig.meta.googleMapsUrl,
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: schoolConfig.en.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question.replace(/^\[EDIT\]\s*/, ''),
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.replace(/^\[EDIT\]\s*/, ''),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
