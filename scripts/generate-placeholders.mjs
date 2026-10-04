import fs from 'fs';
import path from 'path';

const dir = path.resolve('public/images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const placeholders = [
  {
    name: 'hero-building',
    title: 'Gyan Sthali Public School Main Building',
    subtitle: 'Kalajharia Campus • Academic Excellence',
    size: '1920x1080',
    color1: '#1E3A8A',
    color2: '#0F172A',
    accent: '#F59E0B',
    type: 'building'
  },
  {
    name: 'campus-1',
    title: 'Senior Academic Block',
    subtitle: 'Modern Ventilated Classrooms & Corridors',
    size: '1200x800',
    color1: '#1E3A8A',
    color2: '#1E40AF',
    accent: '#F59E0B',
    type: 'building'
  },
  {
    name: 'campus-2',
    title: 'Lush Green Campus Lawns',
    subtitle: 'Eco-Friendly, Peaceful Learning Environment',
    size: '1200x800',
    color1: '#065F46',
    color2: '#047857',
    accent: '#10B981',
    type: 'nature'
  },
  {
    name: 'campus-3',
    title: 'Central Assembly Courtyard',
    subtitle: 'Morning Assemblies & Special Gatherings',
    size: '1200x800',
    color1: '#1E3A8A',
    color2: '#312E81',
    accent: '#F59E0B',
    type: 'building'
  },
  {
    name: 'campus-4',
    title: 'Science & Computer Labs',
    subtitle: 'Hands-on STEM Experimentation',
    size: '1200x800',
    color1: '#0F766E',
    color2: '#134E4A',
    accent: '#14B8A6',
    type: 'lab'
  },
  {
    name: 'campus-5',
    title: 'School Knowledge Library',
    subtitle: 'Rich Collection of Reference & Story Books',
    size: '1200x800',
    color1: '#7C2D12',
    color2: '#9A3412',
    accent: '#F97316',
    type: 'library'
  },
  {
    name: 'campus-6',
    title: 'Creative Arts & Activity Studio',
    subtitle: 'Nurturing Imagination & Talents',
    size: '1200x800',
    color1: '#4C1D95',
    color2: '#5B21B6',
    accent: '#8B5CF6',
    type: 'arts'
  },
  {
    name: 'classroom',
    title: 'Smart Interactive Classroom',
    subtitle: 'Digitally Enabled Pedagogical Environment',
    size: '1200x800',
    color1: '#1E3A8A',
    color2: '#2563EB',
    accent: '#F59E0B',
    type: 'classroom'
  },
  {
    name: 'playground',
    title: 'Sports Grounds & Play Area',
    subtitle: 'Cricket, Football, Athletics & Play Park',
    size: '1200x800',
    color1: '#15803D',
    color2: '#166534',
    accent: '#22C55E',
    type: 'sports'
  },
  {
    name: 'events-1',
    title: 'Annual Day Celebrations',
    subtitle: 'Cultural Dances, Drama & Music Performances',
    size: '1000x700',
    color1: '#831843',
    color2: '#9D174D',
    accent: '#F43F5E',
    type: 'event'
  },
  {
    name: 'events-2',
    title: 'Annual Sports Meet',
    subtitle: 'Track Events, Relay & Champion Trophies',
    size: '1000x700',
    color1: '#1E3A8A',
    color2: '#0284C7',
    accent: '#F59E0B',
    type: 'sports'
  },
  {
    name: 'events-3',
    title: 'Science & Art Exhibition',
    subtitle: 'Innovative Working Models & Creative Crafts',
    size: '1000x700',
    color1: '#0F766E',
    color2: '#0D9488',
    accent: '#2DD4BF',
    type: 'lab'
  },
  {
    name: 'events-4',
    title: 'Independence & Republic Day',
    subtitle: 'Tricolour Flag Hoisting & Patriotic Tributes',
    size: '1000x700',
    color1: '#C2410C',
    color2: '#15803D',
    accent: '#FFFFFF',
    type: 'national'
  }
];

function generateSVG(p) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="grad_${p.name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.color1}" />
      <stop offset="100%" stop-color="${p.color2}" />
    </linearGradient>
    <pattern id="grid_${p.name}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="1"/>
      <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" fill-opacity="0.1"/>
    </pattern>
    <filter id="shadow_${p.name}" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="1200" height="800" fill="url(#grad_${p.name})" />
  <!-- Grid overlay -->
  <rect width="1200" height="800" fill="url(#grid_${p.name})" />

  <!-- Ambient light blobs -->
  <circle cx="200" cy="150" r="280" fill="${p.accent}" opacity="0.12" filter="blur(40px)" />
  <circle cx="1000" cy="650" r="320" fill="${p.color1}" opacity="0.2" filter="blur(50px)" />

  <!-- School Crest / Badge Icon at Center Top -->
  <g transform="translate(600, 260)" filter="url(#shadow_${p.name})">
    <circle cx="0" cy="0" r="85" fill="#FFFFFF" fill-opacity="0.12" stroke="${p.accent}" stroke-width="3" />
    <circle cx="0" cy="0" r="72" fill="#FFFFFF" fill-opacity="0.95" />
    <!-- Book & Sun Icon -->
    <path d="M -26 -12 C -12 -20 12 -20 26 -12 L 26 22 C 12 14 -12 14 -26 22 Z" fill="#1E3A8A" />
    <circle cx="0" cy="-28" r="8" fill="#F59E0B" />
    <path d="M 0 -22 L 0 -10" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" />
  </g>

  <!-- Central Typography Card -->
  <g transform="translate(600, 440)" text-anchor="middle">
    <!-- Category / Placeholder Tag -->
    <rect x="-180" y="-36" width="360" height="34" rx="17" fill="${p.accent}" opacity="0.22" />
    <rect x="-180" y="-36" width="360" height="34" rx="17" fill="none" stroke="${p.accent}" stroke-width="1.5" />
    <text x="0" y="-14" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" letter-spacing="2">
      PHOTO SLOT: ${p.name.toUpperCase()}
    </text>

    <!-- Main Title -->
    <text x="0" y="32" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="36" font-weight="800" fill="#FFFFFF" letter-spacing="0.5">
      ${p.title}
    </text>

    <!-- Subtitle -->
    <text x="0" y="72" font-family="'Inter', system-ui, sans-serif" font-size="20" font-weight="500" fill="#E2E8F0">
      ${p.subtitle}
    </text>

    <!-- Replacement hint -->
    <g transform="translate(0, 140)">
      <rect x="-240" y="-22" width="480" height="44" rx="22" fill="#000000" fill-opacity="0.35" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1"/>
      <text x="0" y="5" font-family="'Inter', system-ui, sans-serif" font-size="14" font-weight="500" fill="#CBD5E1">
        📷 Drop real photo into <tspan fill="#FDE68A" font-weight="700">/public/images/${p.name}.jpg</tspan> (${p.size})
      </text>
    </g>
  </g>

  <!-- School Branding Top Left -->
  <g transform="translate(60, 60)">
    <text x="0" y="24" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" letter-spacing="1.5">
      GYAN STHALI PUBLIC SCHOOL
    </text>
    <text x="0" y="46" font-family="'Inter', system-ui, sans-serif" font-size="13" font-weight="600" fill="${p.accent}" letter-spacing="2">
      KALAJHARIA • JHARKHAND
    </text>
  </g>

  <!-- Corner Border Flourish -->
  <path d="M 40 70 L 40 40 L 70 40" fill="none" stroke="${p.accent}" stroke-width="2" opacity="0.6"/>
  <path d="M 1130 40 L 1160 40 L 1160 70" fill="none" stroke="${p.accent}" stroke-width="2" opacity="0.6"/>
  <path d="M 40 730 L 40 760 L 70 760" fill="none" stroke="${p.accent}" stroke-width="2" opacity="0.6"/>
  <path d="M 1130 760 L 1160 760 L 1160 730" fill="none" stroke="${p.accent}" stroke-width="2" opacity="0.6"/>
</svg>`;
}

for (const p of placeholders) {
  const svgContent = generateSVG(p);
  // Write to public/images/[name].svg
  fs.writeFileSync(path.join(dir, `${p.name}.svg`), svgContent, 'utf-8');
}

console.log('Generated placeholder SVGs successfully.');
