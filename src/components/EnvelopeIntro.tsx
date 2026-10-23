import React, { useState } from 'react';
import { birthdayConfig } from '../data/birthdayConfig';
import { CoupleCaricature } from './CoupleCaricature';
import { BotanicalCorner } from './BotanicalFlourish';
import { Heart, Sparkles, ArrowRight, Mail } from 'lucide-react';

interface EnvelopeIntroProps {
  onEnter: () => void;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const { intro } = birthdayConfig;

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);
    // After opening animation finishes, reveal note and enable transition
    setTimeout(() => {
      setHasRevealed(true);
    }, 700);
  };

  return (
    <section
      aria-label="Welcome screen"
      className="scrapbook-wash-hero"
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        overflow: 'hidden',
      }}
    >
      {/* Hand-drawn botanical corners */}
      <BotanicalCorner position="top-left" color="#8DA894" flowerColor="#E8A3B1" />
      <BotanicalCorner position="top-right" color="#8DA894" flowerColor="#E8A3B1" />

      {/* Background Floating Stars & Decorative Doodles */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <span style={{ position: 'absolute', top: '8%', left: '10%', color: 'var(--gold)', fontSize: '24px' }}>✦</span>
        <span style={{ position: 'absolute', top: '15%', right: '12%', color: 'var(--rose)', fontSize: '20px' }}>♡</span>
        <span style={{ position: 'absolute', top: '45%', left: '6%', color: 'var(--sage)', fontSize: '18px' }}>❀</span>
        <span style={{ position: 'absolute', top: '75%', right: '8%', color: 'var(--gold)', fontSize: '22px' }}>★</span>
        <span style={{ position: 'absolute', bottom: '10%', left: '14%', color: 'var(--rose)', fontSize: '24px' }}>♡</span>
      </div>

      <div
        className="container"
        style={{
          maxWidth: '780px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Top Tagline */}
        <div
          style={{
            fontFamily: 'var(--font-romantic)',
            fontSize: '1.75rem',
            fontWeight: 700,
            color: 'var(--burgundy)',
            marginBottom: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Sparkles size={18} color="var(--gold-dark)" />
          {intro.badge}
          <Sparkles size={18} color="var(--gold-dark)" />
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontFamily: 'var(--font-romantic)',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            color: 'var(--burgundy)',
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}
        >
          {intro.heading}
        </h1>

        {/* Supporting Copy */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)',
            color: 'var(--plum-dark)',
            maxWidth: '580px',
            margin: '0 auto 34px auto',
            lineHeight: 1.62,
          }}
        >
          {intro.subheading}
        </p>

        {/* The Illustrated Caricature Scrapbook Hero Composition */}
        <div style={{ margin: '0 auto 36px auto', position: 'relative' }}>
          {/* Decorative stamp accent */}
          <div
            className="postage-stamp"
            style={{
              position: 'absolute',
              top: '-16px',
              right: '8%',
              width: '64px',
              height: '74px',
              transform: 'rotate(8deg)',
              zIndex: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFFDF9',
              borderRadius: '2px',
            }}
          >
            <div style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--rose)' }}>
              SPECIAL
            </div>
            <Heart size={20} color="var(--rose)" fill="var(--blush)" />
            <div style={{ fontSize: '9px', fontFamily: 'var(--font-hand)', color: 'var(--plum-muted)' }}>
              POSTAGE
            </div>
          </div>

          {/* Doodles pointing towards the characters */}
          <div
            style={{
              position: 'absolute',
              left: '4%',
              top: '40%',
              fontFamily: 'var(--font-hand)',
              fontSize: '1.25rem',
              color: 'var(--rose-dark)',
              transform: 'rotate(-8deg)',
              zIndex: 12,
              display: 'none',
            }}
            className="md:block"
          >
            my favorite human ➔
          </div>

          <CoupleCaricature
            size="md"
            showDecorations={true}
            caption="my favorite human ♡"
            badgeText="just for you"
            tilt={-1.5}
          />
        </div>

        {/* The Interactive Pink Love Envelope */}
        <div style={{ marginTop: '20px', marginBottom: '28px' }}>
          <div className="envelope-stage">
            <div
              className={`envelope-wrapper ${isOpen ? 'is-open' : ''}`}
              onClick={handleOpenEnvelope}
              role="button"
              tabIndex={0}
              aria-label={isOpen ? "Letter opened" : "Open birthday surprise envelope"}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenEnvelope();
                }
              }}
            >
              {/* Top Flap */}
              <div className="envelope-flap" />

              {/* Heart Wax Seal */}
              <div className="wax-seal">
                <Heart size={24} fill="#FFF8F0" />
              </div>

              {/* Front Pocket */}
              <div className="envelope-pocket" />

              {/* Hidden Letter revealed on click */}
              <div className="envelope-letter">
                <div style={{ fontFamily: 'var(--font-hand)', fontSize: '1.25rem', color: 'var(--rose-dark)', fontWeight: 700, marginBottom: '6px' }}>
                  dear birthday boy ♡
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    color: 'var(--plum)',
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  "{intro.envelopeNote}"
                </p>
                <div style={{ marginTop: '8px', fontFamily: 'var(--font-hand)', fontSize: '1.1rem', color: 'var(--rose-dark)', fontWeight: 700, textAlign: 'right', width: '100%' }}>
                  — with love, Pooja ♡
                </div>
              </div>
            </div>
          </div>

          {!isOpen && (
            <div
              style={{
                marginTop: '16px',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.2rem',
                color: 'var(--plum-muted)',
              }}
            >
              tap the heart seal or click below ↓
            </div>
          )}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          {!hasRevealed ? (
            <button
              onClick={handleOpenEnvelope}
              className="wax-seal-btn"
              type="button"
              id="open-envelope-btn"
            >
              <Mail size={20} />
              {intro.buttonText}
            </button>
          ) : (
            <button
              onClick={onEnter}
              className="wax-seal-btn"
              type="button"
              id="step-inside-btn"
              style={{
                backgroundColor: 'var(--rose-dark)',
                animation: 'gentleGlow 2s infinite ease-in-out',
              }}
            >
              <span>step into our universe ♡</span>
              <ArrowRight size={22} />
            </button>
          )}

          {/* Skip Intro */}
          <button
            onClick={onEnter}
            className="btn-secondary"
            type="button"
            style={{ fontSize: '1.1rem', opacity: 0.85 }}
          >
            {intro.skipText}
          </button>
        </div>
      </div>
    </section>
  );
};
