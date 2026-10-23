import React from 'react';
import { birthdayConfig } from '../data/birthdayConfig';

interface CoupleCaricatureProps {
  size?: 'sm' | 'md' | 'lg';
  showDecorations?: boolean;
  caption?: string;
  badgeText?: string;
  className?: string;
  tilt?: number; // degrees
}

export const CoupleCaricature: React.FC<CoupleCaricatureProps> = ({
  size = 'md',
  showDecorations = true,
  caption = "you & me · my favorite little universe ♡",
  badgeText,
  className = '',
  tilt = 0,
}) => {
  const { caricature } = birthdayConfig;

  // Resolve artwork path based on mode
  let imageSrc = `${import.meta.env.BASE_URL}images/our-caricature.svg`;
  let altText = 'Illustrated caricature of us together';

  if (caricature.mode === 'solo') {
    imageSrc = `${import.meta.env.BASE_URL}images/solo-caricature.svg`;
    altText = 'Illustrated caricature of birthday boy';
  } else if (caricature.mode === 'placeholder') {
    imageSrc = `${import.meta.env.BASE_URL}images/placeholder-caricature.svg`;
    altText = 'Personalized caricature placeholder';
  } else if (caricature.mode === 'custom' && caricature.customImagePath) {
    imageSrc = caricature.customImagePath;
    altText = 'Personalized couple illustration';
  }

  const styleDimension = size === 'sm' ? 240 : size === 'lg' ? 440 : 340;

  return (
    <div
      className={`relative inline-block select-none ${className}`}
      style={{
        transform: tilt !== 0 ? `rotate(${tilt}deg)` : undefined,
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {/* Decorative Washi Tape at Top */}
      {showDecorations && (
        <div className="washi-tape washi-tape-gold" style={{ top: '-14px', zIndex: 10 }} />
      )}

      {/* Floating decorative elements around the illustration */}
      {showDecorations && (
        <>
          {/* Top Left Floating Star */}
          <div
            style={{
              position: 'absolute',
              top: '-16px',
              left: '-16px',
              color: 'var(--gold)',
              fontSize: '22px',
              zIndex: 10,
              animation: 'twinkleStar 3s ease-in-out infinite',
            }}
          >
            ✦
          </div>

          {/* Top Right Floating Heart */}
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              right: '-14px',
              color: 'var(--rose)',
              fontSize: '20px',
              zIndex: 10,
              animation: 'float 4s ease-in-out infinite',
            }}
          >
            ♡
          </div>

          {/* Bottom Left Doodle Accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '-20px',
              color: 'var(--lavender-dark)',
              fontSize: '18px',
              fontFamily: 'var(--font-hand)',
              fontWeight: 700,
              transform: 'rotate(-15deg)',
              zIndex: 10,
            }}
          >
            xoxo
          </div>
        </>
      )}

      {/* Main Illustration Paper Card */}
      <div
        className="paper-card"
        style={{
          padding: '16px 16px 20px 16px',
          backgroundColor: '#FFFDF9',
          border: '2px solid rgba(245, 198, 208, 0.6)',
          borderRadius: '24px',
          maxWidth: `${styleDimension}px`,
          width: '100%',
          boxShadow: 'var(--shadow-paper-hover)',
          margin: '0 auto',
        }}
      >
        {/* Optional Top Badge Tag */}
        {badgeText && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '16px',
              backgroundColor: 'var(--blush-light)',
              color: 'var(--rose-dark)',
              fontFamily: 'var(--font-hand)',
              fontSize: '1.05rem',
              fontWeight: 700,
              padding: '2px 10px',
              borderRadius: '999px',
              border: '1px solid var(--blush-border)',
              zIndex: 5,
            }}
          >
            {badgeText}
          </div>
        )}

        {/* Artwork Image Element */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1 / 1',
            borderRadius: '18px',
            overflow: 'hidden',
            backgroundColor: '#FFF9F5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={imageSrc}
            alt={altText}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              padding: '6px',
            }}
            onError={(e) => {
              // Graceful fallback to SVG if custom PNG not found
              const target = e.currentTarget;
              if (target.src !== window.location.origin + '/images/our-caricature.svg') {
                target.src = '/images/our-caricature.svg';
              }
            }}
          />
        </div>

        {/* Handwritten Annotation Caption */}
        {caption && (
          <div
            style={{
              marginTop: '12px',
              textAlign: 'center',
              fontFamily: 'var(--font-romantic)',
              fontSize: '1.35rem',
              color: 'var(--burgundy)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              lineHeight: 1.25,
            }}
          >
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};
