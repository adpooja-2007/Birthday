import React from 'react';
import { birthdayConfig } from '../data/birthdayConfig';
import { BotanicalCorner, BotanicalDivider } from './BotanicalFlourish';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';

interface FinalLetterProps {
  onReplay: () => void;
}

export const FinalLetter: React.FC<FinalLetterProps> = ({ onReplay }) => {
  const { finalLetter, hisName, myName } = birthdayConfig;

  return (
    <section
      id="final-letter"
      className="scrapbook-wash-letter"
      style={{
        padding: '100px 20px 80px 20px',
        position: 'relative',
        borderTop: '2px dashed rgba(240, 184, 196, 0.7)',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Hand-drawn botanical corners */}
      <BotanicalCorner position="top-left" color="#8DA894" flowerColor="#E8A3B1" />
      <BotanicalCorner position="top-right" color="#8DA894" flowerColor="#E8A3B1" />

      <div className="container" style={{ maxWidth: '780px', position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '36px' }}>
          <span className="section-tag">from the bottom of my heart</span>
          <h2 style={{ fontFamily: 'var(--font-romantic)', fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)', color: 'var(--burgundy)' }}>
            {finalLetter.heading}
          </h2>
        </div>

        {/* The Folded Letter on Textured Paper */}
        <div
          className="scrapbook-card scrapbook-double-border"
          style={{
            padding: '48px 36px 40px 36px',
            backgroundColor: '#FFFDF9',
            borderRadius: '24px',
            boxShadow: 'var(--shadow-float)',
            textAlign: 'left',
            position: 'relative',
            margin: '0 auto 60px auto',
          }}
        >
          {/* Top Washi Tape */}
          <div className="washi-tape washi-tape-gold" style={{ top: '-14px' }} />

          {/* Letterhead Date & Salutation */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1.5px solid rgba(245, 198, 208, 0.5)',
              paddingBottom: '14px',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-romantic)',
                fontSize: '1.65rem',
                fontWeight: 700,
                color: 'var(--burgundy)',
              }}
            >
              {finalLetter.salutation.replace('my favorite person', hisName)}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-romantic)',
                fontSize: '1.3rem',
                color: 'var(--plum-muted)',
              }}
            >
              {finalLetter.date}
            </div>
          </div>

          {/* Letter Body Paragraphs */}
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              lineHeight: 1.8,
              color: 'var(--plum-dark)',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            {finalLetter.paragraphs.map((p, i) => (
              <p key={i} style={{ margin: 0, textIndent: '1.5rem', color: 'var(--plum-dark)' }}>
                {p}
              </p>
            ))}
          </div>

          {/* Closing & Signature */}
          <div
            style={{
              marginTop: '36px',
              textAlign: 'right',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.4rem',
                color: 'var(--plum-dark)',
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              "{finalLetter.closing}"
            </div>
            <div
              style={{
                fontFamily: 'var(--font-romantic)',
                fontSize: '1.9rem',
                fontWeight: 700,
                color: 'var(--burgundy)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>{finalLetter.signature} {myName}</span>
              <Heart size={20} color="var(--rose)" fill="var(--blush)" />
            </div>
          </div>

          {/* Postscript note */}
          {finalLetter.postscript && (
            <div
              style={{
                marginTop: '30px',
                paddingTop: '16px',
                borderTop: '1px dashed var(--blush-border)',
                fontFamily: 'var(--font-romantic)',
                fontSize: '1.35rem',
                color: 'var(--plum-dark)',
              }}
            >
              {finalLetter.postscript}
            </div>
          )}
        </div>

        {/* Botanical Divider */}
        <BotanicalDivider style={{ margin: '0 auto 40px auto' }} />

        {/* Closing Composition with Forever Couple Caricature */}
        <div style={{ marginBottom: '44px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              maxWidth: '400px',
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '2px solid var(--blush-border)',
              backgroundColor: '#FAF4EB',
              boxShadow: 'var(--shadow-polaroid)',
            }}
          >
            <img
              src="/images/our-forever.png"
              alt="Pooja and Barath forever beach sunset kiss"
              style={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'contain',
                display: 'block',
                padding: '10px 10px 6px 10px',
              }}
            />
            <div
              style={{
                backgroundColor: 'var(--blush-light)',
                padding: '10px 16px',
                textAlign: 'center',
                borderTop: '1.5px solid var(--blush-border)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-romantic)',
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: 'var(--burgundy)',
                }}
              >
                happily ever after — forever & always ♡
              </span>
            </div>
          </div>
        </div>

        {/* Replay Surprise & Back to Top Actions */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <button
            onClick={onReplay}
            type="button"
            className="wax-seal-btn"
            style={{ fontSize: '1.35rem', padding: '12px 30px' }}
          >
            <Sparkles size={18} />
            <span>experience surprise again ♡</span>
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            type="button"
            className="btn-secondary"
            style={{ fontSize: '1.25rem', padding: '10px 24px', backgroundColor: '#FFFDF9' }}
          >
            <ArrowUp size={16} />
            <span>back to top</span>
          </button>
        </div>

        {/* Footer Credit */}
        <footer
          style={{
            marginTop: '60px',
            fontFamily: 'var(--font-romantic)',
            fontSize: '1.35rem',
            color: 'var(--plum-light)',
          }}
        >
          made with all my love by Pooja for {hisName} &bull; a little universe, just for you ♡
        </footer>
      </div>
    </section>
  );
};
