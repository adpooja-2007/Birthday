import React, { useState } from 'react';
import { birthdayConfig } from '../data/birthdayConfig';
import { BotanicalCorner } from './BotanicalFlourish';
import confetti from 'canvas-confetti';
import { Heart, Lock, Unlock, Mail, X } from 'lucide-react';

export const IntimateMoments: React.FC = () => {
  const config = birthdayConfig.intimateMoments;
  const [openedCards, setOpenedCards] = useState<Record<string, boolean>>({});
  const [isFinalNoteOpen, setIsFinalNoteOpen] = useState(false);

  const toggleCard = (id: string) => {
    setOpenedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleOpenFinalNote = () => {
    if (!isFinalNoteOpen) {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#F5C6D0', '#E8C987', '#C77D91', '#FAF2E9'],
      });
    }
    setIsFinalNoteOpen(true);
  };

  return (
    <section
      id="intimate-moments"
      className="scrapbook-wash-intimate"
      style={{
        padding: '96px 20px',
        position: 'relative',
        borderTop: '2px dashed rgba(228, 224, 245, 0.9)',
        borderBottom: '2px dashed rgba(228, 224, 245, 0.9)',
        overflow: 'hidden',
      }}
      aria-label={config.title}
    >
      {/* Hand-drawn botanical corners with twilight lavender tint */}
      <BotanicalCorner position="top-left" color="#9D92D8" flowerColor="#E8A3B1" />
      <BotanicalCorner position="top-right" color="#9D92D8" flowerColor="#E8A3B1" />

      {/* Illustrated Moon & Soft Cloud Twilight Atmosphere */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '25px',
          right: '8%',
          pointerEvents: 'none',
          opacity: 0.55,
          zIndex: 1,
        }}
      >
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Crescent Moon with Golden Glow */}
          <path
            d="M 50 15 C 38 18 30 30 32 42 C 34 54 44 63 56 62 C 45 60 38 48 40 36 C 42 26 48 18 50 15 Z"
            fill="#E6CA85"
            opacity="0.85"
          />
          {/* Little sparkling night star */}
          <circle cx="68" cy="22" r="2" fill="#E6CA85" />
          <circle cx="20" cy="38" r="1.5" fill="#E6CA85" />

          {/* Soft drifting whimsical clouds */}
          <path
            d="M 18 58 C 12 58 6 64 6 70 C 6 76 12 80 18 80 L 85 80 C 94 80 100 74 100 68 C 100 62 94 56 86 58 C 84 50 76 46 68 48 C 62 44 52 46 48 52 C 42 50 34 52 32 58 Z"
            fill="rgba(228, 224, 245, 0.5)"
            stroke="rgba(157, 146, 216, 0.3)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '999px',
              backgroundColor: '#FFFDF9',
              border: '1.5px solid var(--blush-border)',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '18px',
            }}
          >
            <Lock size={15} style={{ color: 'var(--burgundy)' }} />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--burgundy)',
                letterSpacing: '0.04em',
              }}
            >
              {config.lockCaption}
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-romantic)',
              fontSize: 'clamp(2.2rem, 4.6vw, 3.3rem)',
              fontWeight: 700,
              color: 'var(--burgundy)',
              lineHeight: 1.25,
              marginBottom: '16px',
            }}
          >
            {config.title}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.08rem, 2vw, 1.22rem)',
              color: 'var(--plum-dark)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.68,
            }}
          >
            {config.subtitle}
          </p>
        </div>

        {/* 7 Diary Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '24px',
            marginBottom: '60px',
          }}
        >
          {config.cards.map(card => {
            const isOpen = !!openedCards[card.id];

            return (
              <div
                key={card.id}
                style={{
                  backgroundColor: '#FFFDF9',
                  borderRadius: '22px',
                  border: isOpen
                    ? '2px solid var(--rose-dark)'
                    : '1.5px solid var(--blush-border)',
                  boxShadow: isOpen ? 'var(--shadow-card)' : 'var(--shadow-paper)',
                  padding: '24px',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}
                onClick={() => toggleCard(card.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(card.id);
                  }
                }}
              >
                {/* Header: Number & Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-romantic)',
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: 'var(--rose-dark)',
                    }}
                  >
                    moment #{card.number}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--burgundy)',
                      backgroundColor: 'var(--blush-light)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      border: '1px solid rgba(245, 198, 208, 0.6)',
                    }}
                  >
                    {card.tag}
                  </span>
                </div>

                {/* Card Title in Lucy Said Ok Personal Use */}
                <h3
                  style={{
                    fontFamily: 'var(--font-romantic)',
                    fontSize: 'clamp(1.45rem, 2.4vw, 1.75rem)',
                    fontWeight: 700,
                    color: 'var(--burgundy)',
                    lineHeight: 1.28,
                    marginBottom: '14px',
                  }}
                >
                  {card.title}
                </h3>

                {/* Content / Hint */}
                {isOpen ? (
                  <div
                    style={{
                      marginTop: '8px',
                      paddingTop: '16px',
                      borderTop: '1px dashed var(--blush-border)',
                      animation: 'modalSlideUp 0.3s ease-out',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.05rem',
                        lineHeight: 1.72,
                        color: 'var(--plum-dark)',
                        marginBottom: '16px',
                      }}
                    >
                      {card.message}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-romantic)',
                          fontSize: '1.25rem',
                          color: 'var(--burgundy)',
                          fontWeight: 700,
                        }}
                      >
                        always yours ♡
                      </span>

                      <button
                        type="button"
                        onClick={e => {
                          e.stopPropagation();
                          toggleCard(card.id);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--plum-muted)',
                          fontSize: '0.88rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          padding: '4px 8px',
                        }}
                        aria-label={`Close ${card.title}`}
                      >
                        fold back ↑
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--rose-dark)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-romantic)',
                        fontSize: '1.3rem',
                        color: 'var(--plum-muted)',
                      }}
                    >
                      tap to read my diary...
                    </span>
                    <Heart size={16} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Sealed Note */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {!isFinalNoteOpen ? (
            <div
              onClick={handleOpenFinalNote}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenFinalNote();
                }
              }}
              style={{
                backgroundColor: '#FFFDF9',
                borderRadius: '24px',
                border: '2px solid var(--rose-dark)',
                padding: '36px 28px',
                boxShadow: 'var(--shadow-card)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--blush-light)',
                  border: '2px solid var(--rose-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 18px auto',
                  color: 'var(--rose-dark)',
                }}
              >
                <Unlock size={28} />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-romantic)',
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.1rem)',
                  fontWeight: 700,
                  color: 'var(--burgundy)',
                  lineHeight: 1.25,
                  marginBottom: '10px',
                }}
              >
                {config.finalNote.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-romantic)',
                  fontSize: '1.35rem',
                  color: 'var(--rose-dark)',
                  marginBottom: '20px',
                }}
              >
                a sealed letter from my heart to yours ♡
              </p>

              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 30px',
                  borderRadius: '999px',
                  backgroundColor: 'var(--burgundy)',
                  color: '#FFFFFF',
                  border: 'none',
                  fontFamily: 'var(--font-romantic)',
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <Mail size={18} />
                <span>Open my heart's letter</span>
              </button>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: '#FFFDF9',
                borderRadius: '24px',
                border: '2px solid var(--blush-border)',
                padding: '40px 32px',
                boxShadow: 'var(--shadow-float)',
                textAlign: 'left',
                position: 'relative',
                animation: 'modalSlideUp 0.4s ease-out',
              }}
            >
              <button
                type="button"
                onClick={() => setIsFinalNoteOpen(false)}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--blush-light)',
                  border: '1px solid var(--blush-border)',
                  color: 'var(--burgundy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                aria-label="Close letter"
              >
                <X size={18} />
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '18px',
                  color: 'var(--rose-dark)',
                }}
              >
                <Heart size={20} fill="var(--rose-dark)" />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--burgundy)',
                  }}
                >
                  just between us
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-romantic)',
                  fontSize: 'clamp(1.7rem, 3.4vw, 2.2rem)',
                  fontWeight: 700,
                  color: 'var(--burgundy)',
                  lineHeight: 1.25,
                  marginBottom: '22px',
                }}
              >
                {config.finalNote.title}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginBottom: '28px',
                }}
              >
                {config.finalNote.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.08rem',
                      lineHeight: 1.75,
                      color: 'var(--plum-dark)',
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div
                style={{
                  paddingTop: '20px',
                  borderTop: '1px dashed var(--blush-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-romantic)',
                    fontSize: '1.65rem',
                    fontWeight: 700,
                    color: 'var(--burgundy)',
                  }}
                >
                  {config.finalNote.signature}
                </span>

                <button
                  type="button"
                  onClick={() => setIsFinalNoteOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--plum-muted)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: '6px 12px',
                  }}
                >
                  Fold back letter ↑
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default IntimateMoments;
