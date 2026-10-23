import React, { useState } from 'react';
import { birthdayConfig, type ScrapbookItem } from '../data/birthdayConfig';
import { BotanicalCorner } from './BotanicalFlourish';
import { Lightbox } from './Lightbox';
import { Sparkles, Heart } from 'lucide-react';

export const MemoryGallery: React.FC = () => {
  const { scrapbookItems, scrapbookHeading, scrapbookSubheading } = birthdayConfig;
  const [activeItem, setActiveItem] = useState<ScrapbookItem | null>(null);

  return (
    <section
      id="scrapbook-gallery"
      className="scrapbook-wash-gallery"
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
          <span className="section-tag">scrapbook moments</span>
          <h2 style={{ fontFamily: 'var(--font-romantic)', fontSize: 'clamp(2.2rem, 4.4vw, 3.2rem)', color: 'var(--burgundy)' }}>
            {scrapbookHeading}
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', color: 'var(--plum-dark)', lineHeight: 1.68 }}>
            {scrapbookSubheading}
          </p>
        </div>

        {/* Polaroid Scrapbook Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '36px 28px',
            marginTop: '36px',
          }}
        >
          {scrapbookItems.map((item) => (
            <div
              key={item.id}
              style={{
                position: 'relative',
                transform: `rotate(${item.rotation}deg)`,
                transition: 'transform 0.3s ease',
              }}
            >
              {/* Top Washi Tape or Sticker Accent */}
              {item.stickerType === 'tape' && (
                <div className="washi-tape washi-tape-gold" style={{ top: '-10px' }} />
              )}
              {item.stickerType === 'stamp' && (
                <div className="washi-tape washi-tape-lavender" style={{ top: '-10px' }} />
              )}
              {item.stickerType === 'pin' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--rose)',
                    boxShadow: '0 2px 6px rgba(73, 52, 71, 0.3)',
                    border: '2px solid #FFFFFF',
                    zIndex: 5,
                  }}
                />
              )}
              {item.stickerType === 'flower' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '12px',
                    fontFamily: 'var(--font-hand)',
                    fontSize: '18px',
                    color: 'var(--rose)',
                    zIndex: 5,
                  }}
                >
                  ✿
                </div>
              )}

              {/* Polaroid Frame */}
              <div
                className="polaroid-frame"
                onClick={() => setActiveItem(item)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveItem(item);
                  }
                }}
              >
                {/* Photo or Illustrated Memory Card */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    backgroundColor: '#FFF2E7',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #F0E4D8',
                    position: 'relative',
                  }}
                >
                  {item.photoUrl ? (
                    <img
                      src={item.photoUrl}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    /* Tasteful Illustrated Card for No-Photo State */
                    <div
                      style={{
                        padding: '16px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          backgroundColor: '#FFFDF9',
                          border: '1px solid var(--blush-border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: 'var(--shadow-sm)',
                        }}
                      >
                        <Heart size={20} color="var(--rose)" fill="var(--blush)" />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-hand)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: 'var(--plum)',
                        }}
                      >
                        {item.title}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.78rem',
                          color: 'var(--rose-dark)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        #{item.tag}
                      </span>
                    </div>
                  )}

                  {/* Subtle tap overlay cue */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '6px',
                      right: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontFamily: 'var(--font-hand)',
                      fontSize: '0.95rem',
                      color: 'var(--plum-muted)',
                      backgroundColor: 'rgba(255, 255, 255, 0.75)',
                      padding: '1px 6px',
                      borderRadius: '4px',
                    }}
                  >
                    <Sparkles size={11} color="var(--gold-dark)" />
                    <span>tap to zoom</span>
                  </div>
                </div>

                {/* Handwritten Polaroid Caption */}
                <div className="caption">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={activeItem !== null}
        onClose={() => setActiveItem(null)}
        title={activeItem?.title || ''}
        caption={activeItem?.caption || ''}
        date={activeItem?.date}
        imageUrl={activeItem?.photoUrl}
        tag={activeItem?.tag}
      />
    </section>
  );
};
