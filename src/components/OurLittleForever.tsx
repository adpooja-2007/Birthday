import React, { useState } from 'react';
import { birthdayConfig, type ForeverDream } from '../data/birthdayConfig';
import { BotanicalCorner } from './BotanicalFlourish';
import confetti from 'canvas-confetti';
import {
  ChevronDown,
  Mail,
  X,
  Heart,
  Eye,
  EyeOff
} from 'lucide-react';

export const OurLittleForever: React.FC = () => {
  const { ourLittleForever, hisNickname } = birthdayConfig;
  const [openedCards, setOpenedCards] = useState<Record<string, boolean>>({
    'forever-1': true, // Open first dream by default
  });
  const [favoriteDreams, setFavoriteDreams] = useState<Record<string, boolean>>({
    'forever-1': true,
    'forever-7': true,
  });
  const [envelopeOpen, setEnvelopeOpen] = useState<boolean>(false);

  const toggleCard = (id: string) => {
    setOpenedCards(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavoriteDreams(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleOpenAll = () => {
    const allOpen: Record<string, boolean> = {};
    ourLittleForever.dreams.forEach((dream: ForeverDream) => {
      allOpen[dream.id] = true;
    });
    setOpenedCards(allOpen);
  };

  const handleCloseAll = () => {
    setOpenedCards({});
  };

  const handleOpenEnvelope = () => {
    setEnvelopeOpen(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#F5C6D0', '#E8C987', '#C77D91', '#DCD6F7', '#FFFDF9'],
      });
    } catch {
      // safe fallback
    }
  };

  const openedCount = Object.values(openedCards).filter(Boolean).length;
  const totalCount = ourLittleForever.dreams.length;
  const progressPercent = Math.round((openedCount / totalCount) * 100);

  return (
    <section
      id="our-little-forever"
      aria-labelledby="our-forever-title"
      className="scrapbook-wash-forever"
      style={{
        padding: '100px 20px',
        position: 'relative',
        borderTop: '2px dashed rgba(240, 184, 196, 0.7)',
        borderBottom: '2px dashed rgba(240, 184, 196, 0.7)',
        overflow: 'hidden',
      }}
    >
      {/* Hand-drawn botanical corners */}
      <BotanicalCorner position="top-left" color="#8DA894" flowerColor="#E8A3B1" />
      <BotanicalCorner position="top-right" color="#8DA894" flowerColor="#E8A3B1" />

      <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ marginBottom: '44px', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--rose-dark)',
              backgroundColor: 'var(--blush-light)',
              padding: '6px 18px',
              borderRadius: '999px',
              border: '1px solid var(--blush-border)',
              marginBottom: '16px',
            }}
          >
            our little forever • secret bucket list
          </span>

          <h2
            id="our-forever-title"
            style={{
              fontFamily: 'var(--font-romantic)',
              fontSize: 'clamp(2.3rem, 4.4vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--burgundy)',
              margin: '12px auto 14px auto',
              lineHeight: 1.25,
            }}
          >
            {ourLittleForever.title}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.08rem, 2vw, 1.22rem)',
              color: 'var(--plum-dark)',
              maxWidth: '720px',
              margin: '0 auto 18px auto',
              lineHeight: 1.68,
            }}
          >
            {ourLittleForever.subtitle}
          </p>

          <div
            style={{
              fontFamily: 'var(--font-romantic)',
              fontSize: '1.45rem',
              color: 'var(--burgundy)',
              fontWeight: 700,
              backgroundColor: 'rgba(253, 236, 239, 0.85)',
              display: 'inline-block',
              padding: '6px 24px',
              borderRadius: '999px',
              border: '1.5px dashed var(--blush-border)',
              marginTop: '6px',
            }}
          >
            — written with all my love, for you {hisNickname} ♡
          </div>
        </div>

        {/* Progress Tracker & Controls */}
        <div
          style={{
            maxWidth: '620px',
            margin: '0 auto 44px auto',
            backgroundColor: '#FFFDF9',
            padding: '16px 24px',
            borderRadius: '20px',
            border: '1.5px solid var(--blush-border)',
            boxShadow: 'var(--shadow-paper)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--rose-dark)',
                }}
              >
                dreams unfolded:
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--plum)',
                }}
              >
                {openedCount} of {totalCount}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={handleOpenAll}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--rose-dark)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: '6px',
                }}
                aria-label="Unfold all dream cards"
              >
                <Eye size={14} />
                <span>unfold all</span>
              </button>

              <button
                type="button"
                onClick={handleCloseAll}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--plum-muted)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: '6px',
                }}
                aria-label="Fold all dream cards"
              >
                <EyeOff size={14} />
                <span>fold all</span>
              </button>
            </div>
          </div>

          <div
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: 'var(--blush-light)',
              borderRadius: '999px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--rose) 0%, var(--gold) 100%)',
                borderRadius: '999px',
                transition: 'width 0.4s ease-out',
              }}
            />
          </div>
        </div>

        {/* 10 Dreams Grid (Illustration-led, Clean Typography) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '28px',
            marginBottom: '70px',
          }}
        >
          {ourLittleForever.dreams.map((dream: ForeverDream) => {
            const isOpened = !!openedCards[dream.id];
            const isFav = !!favoriteDreams[dream.id];

            return (
              <div
                key={dream.id}
                onClick={() => toggleCard(dream.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpened}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(dream.id);
                  }
                }}
                style={{
                  backgroundColor: '#FFFDF9',
                  borderRadius: '24px',
                  padding: '24px',
                  border: isOpened
                    ? '2px solid var(--rose-dark)'
                    : '1.5px solid var(--blush-border)',
                  boxShadow: isOpened ? 'var(--shadow-card)' : 'var(--shadow-paper)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Favorite Button */}
                <button
                  type="button"
                  onClick={e => toggleFavorite(dream.id, e)}
                  aria-label={isFav ? 'Remove from favorites' : 'Mark as favorite dream'}
                  style={{
                    position: 'absolute',
                    top: '18px',
                    right: '18px',
                    background: isFav ? 'var(--blush-light)' : 'transparent',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: isFav ? 'var(--rose-dark)' : 'var(--plum-muted)',
                    transition: 'all 0.2s ease',
                    zIndex: 5,
                  }}
                >
                  <Heart size={19} fill={isFav ? 'var(--rose-dark)' : 'none'} />
                </button>

                {/* Card Header: Dream Number & Tag Pill */}
                <div style={{ marginBottom: '14px', paddingRight: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-romantic)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--rose-dark)',
                      }}
                    >
                      dream #{dream.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--burgundy)',
                        letterSpacing: '0.06em',
                        backgroundColor: 'var(--blush-light)',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        border: '1px solid rgba(245, 198, 208, 0.6)',
                      }}
                    >
                      {dream.tag}
                    </span>
                  </div>

                  {/* Card Title in Lucy Said Ok Personal Use */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-romantic)',
                      fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)',
                      fontWeight: 700,
                      color: 'var(--burgundy)',
                      lineHeight: 1.28,
                      margin: 0,
                    }}
                  >
                    {dream.title}
                  </h3>

                  {dream.shortDescription && (
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.98rem',
                        color: 'var(--plum-dark)',
                        fontStyle: 'italic',
                        marginTop: '8px',
                        marginBottom: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {dream.shortDescription}
                    </p>
                  )}
                </div>

                {/* Preview Hint when closed */}
                {!isOpened && (
                  <div
                    style={{
                      fontFamily: 'var(--font-romantic)',
                      fontSize: '1.3rem',
                      color: 'var(--plum-muted)',
                      marginTop: 'auto',
                      paddingTop: '10px',
                    }}
                  >
                    tap to unfold my secret wish for us...
                  </div>
                )}

                {/* Revealed Unfolded Secret Note */}
                {isOpened && (
                  <div
                    style={{
                      marginTop: '12px',
                      paddingTop: '16px',
                      borderTop: '1px dashed var(--blush-border)',
                      animation: 'modalSlideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    {/* Caricature Illustration */}
                    {dream.illustrationImage && (
                      <div
                        style={{
                          width: '100%',
                          borderRadius: '18px',
                          overflow: 'hidden',
                          marginBottom: '16px',
                          border: '2px solid var(--blush-border)',
                          backgroundColor: '#FAF4EB',
                          boxShadow: 'var(--shadow-paper)',
                        }}
                      >
                        <img
                          src={dream.illustrationImage}
                          alt={dream.altText || `Caricature illustration of Barath and Pooja: ${dream.title}`}
                          style={{
                            width: '100%',
                            maxHeight: '300px',
                            objectFit: 'contain',
                            display: 'block',
                            padding: '10px 10px 6px 10px',
                          }}
                        />
                        <div
                          style={{
                            backgroundColor: 'var(--blush-light)',
                            padding: '8px 14px',
                            textAlign: 'center',
                            borderTop: '1px solid rgba(245, 198, 208, 0.6)',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--font-romantic)',
                              fontSize: '1.25rem',
                              fontWeight: 700,
                              color: 'var(--burgundy)',
                            }}
                          >
                            {dream.tag} — dream #{dream.number}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Dream Message Text in High-Contrast Deep Plum */}
                    <div
                      style={{
                        backgroundColor: '#FFFDF9',
                        padding: '16px 18px',
                        borderRadius: '14px',
                        border: '1px solid rgba(245, 198, 208, 0.5)',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {dream.message.split('\n\n').map((para, pIdx) => (
                          <p
                            key={pIdx}
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '1.08rem',
                              color: 'var(--plum-dark)',
                              lineHeight: 1.72,
                              margin: 0,
                            }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>

                      {dream.note && (
                        <div
                          style={{
                            marginTop: '12px',
                            padding: '10px 14px',
                            backgroundColor: 'rgba(253, 236, 239, 0.7)',
                            borderRadius: '10px',
                            border: '1px dashed var(--blush-border)',
                            fontFamily: 'var(--font-romantic)',
                            fontSize: '1.35rem',
                            fontWeight: 700,
                            color: 'var(--burgundy)',
                            textAlign: 'center',
                          }}
                        >
                          "{dream.note}" ♡
                        </div>
                      )}

                      <div
                        style={{
                          marginTop: '12px',
                          paddingTop: '10px',
                          borderTop: '1px dashed rgba(245, 198, 208, 0.6)',
                          textAlign: 'right',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-romantic)',
                            fontSize: '1.35rem',
                            color: 'var(--burgundy)',
                            fontWeight: 700,
                          }}
                        >
                          only with you, {hisNickname} ♡
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Toggle Bar */}
                <div
                  style={{
                    marginTop: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: '4px',
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.2rem',
                    color: isOpened ? 'var(--rose-dark)' : 'var(--rose)',
                    fontWeight: 700,
                  }}
                >
                  <span>{isOpened ? 'fold card' : 'read my wish'}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpened ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            FINAL "OUR FOREVER" SECTION: HIGHLIGHTING THE HUG CARICATURE
            ========================================================= */}
        <div
          id="our-forever-highlight"
          style={{
            maxWidth: '820px',
            margin: '0 auto 60px auto',
            backgroundColor: '#FFFDF9',
            borderRadius: '28px',
            border: '2.5px solid var(--rose-dark)',
            padding: '40px 32px',
            boxShadow: 'var(--shadow-lg)',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--rose-dark)',
              backgroundColor: 'var(--blush-light)',
              padding: '6px 18px',
              borderRadius: '999px',
              border: '1px solid var(--blush-border)',
              display: 'inline-block',
              marginBottom: '18px',
            }}
          >
            the dream closest to my heart
          </span>

          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'var(--plum)',
              marginBottom: '16px',
              lineHeight: 1.25,
            }}
          >
            {ourLittleForever.ourForever.title}
          </h3>

          {/* Prominent Hugging Caricature in Reference Maroon Outfit */}
          <div
            style={{
              maxWidth: '520px',
              margin: '0 auto 28px auto',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '3px solid var(--blush-border)',
              backgroundColor: '#FAF2E9',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <img
              src={ourLittleForever.ourForever.image}
              alt={ourLittleForever.ourForever.altText}
              style={{
                width: '100%',
                maxHeight: '440px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <div
              style={{
                backgroundColor: 'var(--blush-light)',
                padding: '10px 20px',
                borderTop: '1.5px solid var(--blush-border)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--rose-dark)',
                }}
              >
                Pooja & Barath — our little forever ♡
              </span>
            </div>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.15rem, 2.2vw, 1.32rem)',
              color: '#2A1224',
              lineHeight: 1.78,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            "{ourLittleForever.ourForever.message}"
          </p>
        </div>

        {/* =========================================================
            THE FINAL SEALED ENVELOPE: "The dream I keep closest to my heart"
            ========================================================= */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              padding: '42px 34px',
              backgroundColor: '#FFFDF9',
              border: '2px solid rgba(232, 201, 135, 0.85)',
              borderRadius: '28px',
              boxShadow: 'var(--shadow-paper)',
              position: 'relative',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.45rem',
                fontWeight: 700,
                color: 'var(--rose-dark)',
                display: 'inline-block',
                backgroundColor: 'rgba(253, 236, 239, 0.8)',
                padding: '4px 18px',
                borderRadius: '999px',
                border: '1px dashed var(--blush-border)',
                marginBottom: '14px',
              }}
            >
              sealed with all my honesty ♡
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                fontWeight: 700,
                color: 'var(--plum)',
                marginBottom: '16px',
                lineHeight: 1.25,
              }}
            >
              {ourLittleForever.secretEnvelope.envelopeTitle}
            </h3>

            {!envelopeOpen ? (
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.12rem',
                    color: 'var(--plum-muted)',
                    maxWidth: '540px',
                    margin: '0 auto 28px auto',
                    lineHeight: 1.65,
                  }}
                >
                  I sometimes act all nonchalant on the outside, but here is what I truly feel when I look at you and dream of tomorrow.
                </p>

                <button
                  type="button"
                  onClick={handleOpenEnvelope}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px 36px',
                    borderRadius: '999px',
                    backgroundColor: 'var(--rose-dark)',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <Mail size={20} />
                  <span>Break the wax seal & read my letter</span>
                </button>
              </div>
            ) : (
              <div
                style={{
                  textAlign: 'left',
                  backgroundColor: '#FFFDF9',
                  padding: '24px 20px',
                  borderRadius: '20px',
                  border: '1px solid var(--blush-border)',
                  animation: 'modalSlideUp 0.4s ease-out',
                  position: 'relative',
                }}
              >
                <button
                  type="button"
                  onClick={() => setEnvelopeOpen(false)}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--blush-light)',
                    border: '1px solid var(--blush-border)',
                    color: 'var(--plum)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  aria-label="Fold back letter"
                >
                  <X size={18} />
                </button>

                <div
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.5rem',
                    color: 'var(--rose-dark)',
                    fontWeight: 700,
                    marginBottom: '16px',
                  }}
                >
                  {ourLittleForever.secretEnvelope.letterHeading}
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.14rem',
                    lineHeight: 1.82,
                    color: '#2A1224',
                    marginBottom: '20px',
                  }}
                >
                  {ourLittleForever.secretEnvelope.letterContent}
                </p>

                <div
                  style={{
                    textAlign: 'right',
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'var(--rose-dark)',
                  }}
                >
                  {ourLittleForever.secretEnvelope.signature}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurLittleForever;
