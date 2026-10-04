'use client';

import React, { useState } from 'react';
import { Image as ImageIcon, School, BookOpen, Trophy, Sparkles, Building2 } from 'lucide-react';

interface SchoolImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fallbackTitle?: string;
  category?: 'building' | 'sports' | 'classroom' | 'event' | 'general';
}

export default function SchoolImage({
  src,
  alt,
  width = 1200,
  height = 800,
  className = '',
  priority = false,
  fallbackTitle,
  category = 'general'
}: SchoolImageProps) {
  // Try real image first, then fallback SVG, then inline CSS fallback
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);

  // Derive SVG fallback name from src (e.g. /images/hero-building.jpg -> /images/hero-building.svg)
  const svgFallback = src.replace(/\.(jpg|jpeg|png|webp)$/i, '.svg');

  const handleError = () => {
    if (currentSrc !== svgFallback && !hasError) {
      // Try local SVG placeholder
      setCurrentSrc(svgFallback);
    } else {
      // Both failed, show designed inline fallback
      setHasError(true);
    }
  };

  const getIcon = () => {
    switch (category) {
      case 'building':
        return <Building2 className="w-8 h-8 text-amber-400" />;
      case 'sports':
        return <Trophy className="w-8 h-8 text-amber-400" />;
      case 'classroom':
        return <BookOpen className="w-8 h-8 text-amber-400" />;
      case 'event':
        return <Sparkles className="w-8 h-8 text-amber-400" />;
      default:
        return <School className="w-8 h-8 text-amber-400" />;
    }
  };

  if (hasError) {
    return (
      <div
        className={`relative overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#0F172A] text-white ${className}`}
        style={{ minHeight: height ? `${Math.min(height, 300)}px` : '240px' }}
      >
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 bg-notebook-dots opacity-20 pointer-events-none" />
        
        {/* Glowing aura */}
        <div className="absolute w-32 h-32 rounded-full bg-amber-400/15 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-xs">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mb-3 shadow-md">
            {getIcon()}
          </div>
          <span className="text-xs uppercase font-bold tracking-wider text-amber-300 mb-1">
            Gyan Sthali Public School
          </span>
          <p className="text-sm font-semibold text-white/95 line-clamp-2">
            {fallbackTitle || alt || 'Campus Visual'}
          </p>
          <span className="mt-2 text-[11px] text-slate-300/80 bg-black/25 px-2.5 py-1 rounded-full border border-white/10 font-mono">
            {src.replace('/images/', '')}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={handleError}
      className={`object-cover transition-transform duration-500 ${className}`}
    />
  );
}
