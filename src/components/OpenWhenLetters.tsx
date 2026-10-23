import React, { useState, useEffect } from 'react';
import { birthdayConfig, type OpenWhenLetter } from '../data/birthdayConfig';
import { BotanicalCorner } from './BotanicalFlourish';
import { Heart, Sparkles, Moon, Smile, Star, X, MailOpen } from 'lucide-react';

const EnvelopeStamp: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case 'moon':
      return <Moon size={16} color="var(--night-accent)" />;
    case 'smile':
      return <Smile size={16} color="var(--rose-dark)" />;
    case 'star':
      return <Star size={16} color="var(--gold-dark)" />;
    case 'sparkle':
      return <Sparkles size={16} color="var(--gold)" />;
    case 'heart':
    default:
      return <Heart size={16} color="var(--rose)" fill="var(--blush)" />;
  }
};

export const OpenWhenLetters: React.FC = () => {
  const { letters, lettersHeading, lettersSubheading } = birthdayConfig;
  const [activeLetter, setActiveLetter] = useState<OpenWhenLetter | null>(null);

  // Close letter on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLetter(null);
      }
    };
    if (activeLetter) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeLetter]);

  return (
    <section
      id="open-when-letters"
      className="scrapbook-wash-letters"
      style={{
        padding: '96px 20px',
        position: 'relative',
        borderTop: '2px dashed rgba(240, 184, 196, 0.7)',
        overflow: 'hidden',
      }}
    >
      <BotanicalCorner position="top-left" color="#8DA894" flowerColor="#E8A3B1" />
      <BotanicalCorner position="top-right" color="#8DA894" flowerColor="#E8A3B1" />

      <div className="container" style={{ maxWidth: '1040px', position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">sealed with love</span>
          <h2 style={{ fontFamily: 'var(--font-romantic)', fontSize: 'clamp(2.2rem, 4.4vw, 3.2rem)', color: 'var(--burgundy)' }}>
            {lettersHeading}
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', color: 'var(--plum-dark)', lineHeight: 1.68 }}>
            {lettersSubheading}
          </p>
        </div>

        {/* Envelopes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {letters.map((letter) => (
            <div
              key={letter.id}
              onClick={() => setActiveLetter(letter)}
              role="button"
              tabIndex={0}
              aria-label={`Open letter: ${letter.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveLetter(letter);
                }
              }}
              className="paper-card"
              style={{
                backgroundColor: '#FFFDF9',
                borderRadius: '16px',
                padding: '24px 20px 20px 20px',
                border: '1.5px solid rgba(245, 198, 208, 0.7)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '210px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Envelope Flap visual lining */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '8px',
                  backgroundColor: letter.envelopeColor,
                  borderBottom: '1px solid rgba(73, 52, 71, 0.1)',
                }}
              />

              {/* Top Row: Postal Stamp & Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: 'var(--rose-dark)',
                    letterSpacing: '0.06em',
                    backgroundColor: 'var(--blush-light)',
                    padding: '3px 10px',
                    borderRadius: '999px',
                  }}
                >
                  {letter.category}
                </span>

                {/* Postage Stamp Icon */}
                <div
                  className="postage-stamp"
                  style={{
                    width: '32px',
                    height: '38px',
                    padding: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'rotate(4deg)',
                  }}
                >
                  <EnvelopeStamp icon={letter.stampIcon} />
                </div>
              </div>

              {/* Title & Preview */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-romantic)',
                    fontSize: 'clamp(1.45rem, 2.2vw, 1.7rem)',
                    fontWeight: 700,
                    color: 'var(--burgundy)',
                    marginBottom: '8px',
                    lineHeight: 1.25,
                  }}
                >
                  {letter.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.98rem',
                    color: 'var(--plum-dark)',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {letter.previewSnippet}
                </p>
              </div>

              {/* Envelope Wax Heart Action Bottom */}
              <div
                style={{
                  marginTop: '18px',
                  paddingTop: '12px',
                  borderTop: '1px dashed var(--cream-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-romantic)',
                    fontSize: '1.25rem',
                    color: 'var(--burgundy)',
                    fontWeight: 700,
                  }}
                >
                  <MailOpen size={16} />
                  <span>break the seal to read</span>
                </div>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: letter.envelopeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 4px rgba(73, 52, 71, 0.1)',
                  }}
                >
                  <Heart size={14} color="#FFF8F0" fill="#FFF8F0" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Letter Reading Modal */}
      {activeLetter && (
        <div
          className="modal-overlay"
          onClick={() => setActiveLetter(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeLetter.title}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: '36px 32px 32px 32px',
              maxWidth: '540px',
              backgroundImage: 'radial-gradient(circle at 50% 0%, #FFFDF9 0%, #FFF5EC 100%)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLetter(null)}
              type="button"
              aria-label="Close letter"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#FAF2E9',
                border: '1px solid var(--blush-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--plum)',
              }}
            >
              <X size={20} />
            </button>

            {/* Top Stamp / Label */}
            <div style={{ textAlign: 'center', marginBottom: '18px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--rose)',
                }}
              >
                ♡ {activeLetter.category} ♡
              </span>
              <h2
                style={{
                  fontSize: '1.9rem',
                  fontWeight: 600,
                  color: 'var(--plum)',
                  marginTop: '4px',
                }}
              >
                {activeLetter.title}
              </h2>
            </div>

            {/* Letter Body */}
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                lineHeight: 1.7,
                color: 'var(--plum)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '16px 8px',
                borderTop: '1px solid rgba(245, 198, 208, 0.4)',
                borderBottom: '1px solid rgba(245, 198, 208, 0.4)',
              }}
            >
              {activeLetter.content.map((para, i) => (
                <p key={i} style={{ margin: 0 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Signature */}
            <div
              style={{
                marginTop: '24px',
                textAlign: 'right',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.45rem',
                color: 'var(--rose-dark)',
                fontWeight: 700,
              }}
            >
              {activeLetter.signature}
              <div style={{ fontSize: '1.6rem', color: 'var(--plum)' }}>
                {birthdayConfig.myName} ♡
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
