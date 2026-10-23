import React from 'react';
import { birthdayConfig } from '../data/birthdayConfig';
import { CoupleCaricature } from './CoupleCaricature';
import { BotanicalCorner } from './BotanicalFlourish';
import { Calendar, Sparkles, ChevronDown } from 'lucide-react';

interface BirthdayHeroProps {
  onScrollToTimeline: () => void;
}

export const BirthdayHero: React.FC<BirthdayHeroProps> = ({ onScrollToTimeline }) => {
  const { hero, birthdayDate, hisNickname } = birthdayConfig;

  return (
    <header
      id="birthday-hero"
      className="scrapbook-wash-hero"
      style={{
        position: 'relative',
        padding: '76px 20px 84px 20px',
        borderBottom: '2px dashed rgba(240, 184, 196, 0.7)',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Hand-drawn Botanical Leaf & Rosebud Corner Accents */}
      <BotanicalCorner position="top-left" color="#8DA894" flowerColor="#E8A3B1" />
      <BotanicalCorner position="top-right" color="#8DA894" flowerColor="#E8A3B1" />

      {/* Decorative Ribbon & Stars in Background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      >
        <span style={{ position: 'absolute', top: '14%', left: '9%', color: 'var(--gold)', fontSize: '20px' }}>✦</span>
        <span style={{ position: 'absolute', top: '22%', right: '11%', color: 'var(--rose)', fontSize: '18px' }}>♡</span>
        <span style={{ position: 'absolute', bottom: '16%', left: '12%', color: 'var(--sage)', fontSize: '18px' }}>❀</span>
        <span style={{ position: 'absolute', bottom: '22%', right: '13%', color: 'var(--gold)', fontSize: '20px' }}>✦</span>
      </div>

      <div className="container" style={{ maxWidth: '840px', position: 'relative', zIndex: 10 }}>
        {/* Subtle Birthday Date & Nickname Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#FFFDF9',
            padding: '6px 20px',
            borderRadius: 'var(--radius-pill)',
            border: '1.5px solid var(--blush-border)',
            marginBottom: '22px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <Calendar size={15} color="var(--burgundy)" />
          <span
            style={{
              fontFamily: 'var(--font-romantic)',
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--burgundy)',
              letterSpacing: '0.02em',
            }}
          >
            {birthdayDate} &bull; {hisNickname}
          </span>
          <Sparkles size={15} color="var(--gold-dark)" />
        </div>

        {/* Main Hero Birthday Heading in Lucy Said Ok Personal Use */}
        <h1
          style={{
            fontFamily: 'var(--font-romantic)',
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
            fontWeight: 700,
            color: 'var(--burgundy)',
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
            whiteSpace: 'pre-line',
            marginBottom: '18px',
          }}
        >
          {hero.heading}
        </h1>

        {/* Supporting Readable Text in DM Sans */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.08rem, 2.2vw, 1.22rem)',
            color: 'var(--plum-dark)',
            maxWidth: '640px',
            margin: '0 auto 40px auto',
            lineHeight: 1.68,
          }}
        >
          {hero.subheading}
        </p>

        {/* Couple Caricature Composition */}
        <div style={{ marginBottom: '44px', display: 'flex', justifyContent: 'center' }}>
          <CoupleCaricature
            size="lg"
            showDecorations={true}
            caption="another year of you &bull; another year of us ♡"
            badgeText="birthday edition"
            tilt={1}
          />
        </div>

        {/* Handwritten Scroll Invitation */}
        <div>
          <button
            onClick={onScrollToTimeline}
            className="btn-secondary"
            type="button"
            style={{
              padding: '12px 30px',
              fontSize: '1.35rem',
              backgroundColor: '#FFFDF9',
              boxShadow: 'var(--shadow-sm)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span>{hero.scrollInvite}</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </header>
  );
};

