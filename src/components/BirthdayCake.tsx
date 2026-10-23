import React, { useState } from 'react';
import { birthdayConfig } from '../data/birthdayConfig';
import { BotanicalCorner } from './BotanicalFlourish';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw } from 'lucide-react';

export const BirthdayCake: React.FC = () => {
  const { cake, hisNickname } = birthdayConfig;
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);

  const handleMakeWish = () => {
    if (candlesBlown || isBlowing) return;
    setIsBlowing(true);

    // After brief blow animation, turn off flame and shoot pastel/golden confetti!
    setTimeout(() => {
      setCandlesBlown(true);
      setIsBlowing(false);

      // Trigger multi-stage delicate confetti
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#F5C6D0', '#C77D91', '#E8C987', '#DCD6F7', '#FFF8F0'],
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0.2, y: 0.65 },
          colors: ['#F5C6D0', '#E8C987', '#DCD6F7'],
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 0.8, y: 0.65 },
          colors: ['#C77D91', '#E8C987', '#FFFDF9'],
        });
      }, 250);
    }, 600);
  };

  const handleRelight = () => {
    setCandlesBlown(false);
  };

  return (
    <section
      id="birthday-cake"
      className="scrapbook-wash-cake"
      style={{
        padding: '96px 20px',
        position: 'relative',
        borderTop: '2px dashed rgba(240, 184, 196, 0.7)',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <BotanicalCorner position="top-left" color="#8DA894" flowerColor="#E8A3B1" />
      <BotanicalCorner position="top-right" color="#8DA894" flowerColor="#E8A3B1" />

      <div className="container" style={{ maxWidth: '820px', position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <span className="section-tag">a special moment</span>
          <h2 style={{ fontFamily: 'var(--font-romantic)', fontSize: 'clamp(2.2rem, 4.4vw, 3.2rem)', color: 'var(--burgundy)' }}>
            {cake.heading}
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', color: 'var(--plum-dark)', lineHeight: 1.68 }}>
            {cake.subheading}
          </p>
        </div>

        {/* Illustrated Cake Stage */}
        <div
          style={{
            position: 'relative',
            maxWidth: '460px',
            margin: '0 auto 28px auto',
            padding: '20px',
          }}
        >
          {/* Subtle Fairy Lights Glow around Cake */}
          <div
            style={{
              position: 'absolute',
              inset: '10px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(252, 239, 210, 0.6) 0%, rgba(255, 248, 240, 0) 70%)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />

          {/* Cake SVG Illustration Container */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              filter: candlesBlown ? 'none' : 'drop-shadow(0 0 16px rgba(232, 201, 135, 0.45))',
              transition: 'filter 0.6s ease',
            }}
          >
            {/* Embedded Cake SVG with Dynamic Candle Flames */}
            <svg
              viewBox="0 0 500 500"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Illustrated Birthday Cake"
            >
              <defs>
                <linearGradient id="cakeStandGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#FFFFFF" />
                  <stop offset="100%" stop-color="#EDE2D8" />
                </linearGradient>
                <linearGradient id="cakeTierGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#FCECEF" />
                  <stop offset="50%" stop-color="#FFF5F7" />
                  <stop offset="100%" stop-color="#F8DEE5" />
                </linearGradient>
                <linearGradient id="cakeFrostingGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#F5C6D0" />
                  <stop offset="100%" stop-color="#E896A9" />
                </linearGradient>
                <linearGradient id="cakeBerryGrad" x1="0" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stop-color="#FF597B" />
                  <stop offset="100%" stop-color="#D82148" />
                </linearGradient>
                <radialGradient id="cakeFlameGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#FFE682" stop-opacity="0.9" />
                  <stop offset="60%" stop-color="#FFA826" stop-opacity="0.4" />
                  <stop offset="100%" stop-color="#FF5900" stop-opacity="0" />
                </radialGradient>
              </defs>

              {/* Pedestal Stand */}
              <ellipse cx="250" cy="420" rx="160" ry="24" fill="#E8D5C8" opacity="0.6" />
              <path d="M220 390 L210 440 L290 440 L280 390 Z" fill="url(#cakeStandGrad)" stroke="#E8C987" strokeWidth="1.5" />
              <ellipse cx="250" cy="390" rx="190" ry="22" fill="url(#cakeStandGrad)" stroke="#E8C987" strokeWidth="2" />
              <ellipse cx="250" cy="386" rx="180" ry="18" fill="none" stroke="#F5C6D0" strokeWidth="2" strokeDasharray="6 6" />

              {/* Cake Bottom Layer */}
              <path d="M100 310 C100 310 100 380 100 380 C100 405 400 405 400 380 L400 310 Z" fill="url(#cakeTierGrad)" stroke="#F5C6D0" strokeWidth="1.5" />
              <ellipse cx="250" cy="310" rx="150" ry="24" fill="#FFF2F4" stroke="#F5C6D0" strokeWidth="1.5" />
              <path d="M100 312 C115 335 125 315 140 338 C155 350 165 320 185 342 C205 355 215 322 235 344 C255 352 265 320 285 340 C305 350 315 324 335 344 C355 352 368 318 385 336 C392 325 398 318 400 312 C400 312 360 326 250 326 C140 326 100 312 100 312 Z" fill="url(#cakeFrostingGrad)" />

              {/* Cake Top Layer */}
              <path d="M145 220 C145 220 145 290 145 290 C145 310 355 310 355 290 L355 220 Z" fill="url(#cakeTierGrad)" stroke="#F5C6D0" strokeWidth="1.5" />
              <ellipse cx="250" cy="220" rx="105" ry="18" fill="#FFF2F4" stroke="#F5C6D0" strokeWidth="1.5" />
              <path d="M145 222 C160 242 170 228 185 245 C200 255 210 230 228 250 C245 258 258 232 272 250 C288 256 300 232 315 248 C330 252 342 228 355 222 C355 222 320 234 250 234 C180 234 145 222 145 222 Z" fill="url(#cakeFrostingGrad)" />

              {/* Strawberries & Stars */}
              <g transform="translate(205, 202) rotate(-8)">
                <path d="M0 0 C-10 0 -16 10 -12 20 C-8 28 0 32 0 32 C0 32 8 28 12 20 C16 10 10 0 0 0 Z" fill="url(#cakeBerryGrad)" />
                <path d="M-6 -2 C-1 -4 0 0 0 0 C0 0 1 -4 6 -2 C4 -6 0 -7 0 -7 C0 -7 -4 -6 -6 -2 Z" fill="#698269" />
              </g>
              <g transform="translate(295, 204) rotate(10)">
                <path d="M0 0 C-10 0 -16 10 -12 20 C-8 28 0 32 0 32 C0 32 8 28 12 20 C16 10 10 0 0 0 Z" fill="url(#cakeBerryGrad)" />
                <path d="M-6 -2 C-1 -4 0 0 0 0 C0 0 1 -4 6 -2 C4 -6 0 -7 0 -7 C0 -7 -4 -6 -6 -2 Z" fill="#698269" />
              </g>

              {/* Candles */}
              {/* Candle 1 (Left - Lavender) */}
              <g transform="translate(195, 125)">
                <rect x="-4" y="0" width="8" height="60" rx="3" fill="#DCD6F7" stroke="#B3A9E8" strokeWidth="1" />
                <line x1="0" y1="0" x2="0" y2="-8" stroke="#493447" strokeWidth="1.5" />
                {!candlesBlown && (
                  <>
                    <circle className="candle-flame-glow" cx="0" cy="-16" r="16" fill="url(#cakeFlameGlow)" />
                    <path className="candle-flame" d="M0 -26 C-5 -19 -4 -12 0 -9 C4 -12 5 -19 0 -26 Z" fill="#FFC93C" />
                  </>
                )}
                {candlesBlown && (
                  <path d="M0 -8 Q2 -14 -2 -20 Q2 -26 0 -32" stroke="#B0A6B2" strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="2 3" />
                )}
              </g>

              {/* Candle 2 (Center - Golden) */}
              <g transform="translate(250, 105)">
                <rect x="-5" y="0" width="10" height="78" rx="3" fill="#E8C987" stroke="#CFA451" strokeWidth="1" />
                <line x1="0" y1="0" x2="0" y2="-9" stroke="#493447" strokeWidth="1.5" />
                {!candlesBlown && (
                  <>
                    <circle className="candle-flame-glow" cx="0" cy="-18" r="20" fill="url(#cakeFlameGlow)" />
                    <path className="candle-flame" d="M0 -30 C-6 -22 -5 -14 0 -10 C5 -14 6 -22 0 -30 Z" fill="#FFB703" />
                  </>
                )}
                {candlesBlown && (
                  <path d="M0 -9 Q-2 -16 2 -22 Q-2 -28 0 -36" stroke="#B0A6B2" strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="2 3" />
                )}
              </g>

              {/* Candle 3 (Right - Rose) */}
              <g transform="translate(305, 125)">
                <rect x="-4" y="0" width="8" height="60" rx="3" fill="#C77D91" stroke="#A85C70" strokeWidth="1" />
                <line x1="0" y1="0" x2="0" y2="-8" stroke="#493447" strokeWidth="1.5" />
                {!candlesBlown && (
                  <>
                    <circle className="candle-flame-glow" cx="0" cy="-16" r="16" fill="url(#cakeFlameGlow)" />
                    <path className="candle-flame" d="M0 -26 C-5 -19 -4 -12 0 -9 C4 -12 5 -19 0 -26 Z" fill="#FFC93C" />
                  </>
                )}
                {candlesBlown && (
                  <path d="M0 -8 Q2 -14 -2 -20 Q2 -26 0 -32" stroke="#B0A6B2" strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="2 3" />
                )}
              </g>
            </svg>
          </div>
        </div>

        {/* Interactive Make a Wish Button */}
        <div style={{ marginBottom: '24px' }}>
          {!candlesBlown ? (
            <button
              onClick={handleMakeWish}
              type="button"
              id="make-wish-btn"
              className="wax-seal-btn"
              disabled={isBlowing}
              style={{
                fontSize: '1.35rem',
                padding: '16px 36px',
              }}
            >
              <Sparkles size={20} />
              <span>{isBlowing ? 'blowing out candles...' : cake.buttonMakeWish}</span>
            </button>
          ) : (
            <button
              onClick={handleRelight}
              type="button"
              className="btn-secondary"
              style={{ fontSize: '1.2rem', padding: '10px 24px' }}
            >
              <RotateCcw size={16} />
              <span>{cake.buttonWishAgain}</span>
            </button>
          )}
        </div>

        {/* Revealed Birthday Wish Card */}
        {candlesBlown && (
          <div
            className="paper-card"
            style={{
              padding: '32px 28px',
              borderRadius: '24px',
              maxWidth: '620px',
              margin: '0 auto',
              backgroundColor: '#FFFDF9',
              border: '2px solid rgba(232, 201, 135, 0.7)',
              boxShadow: 'var(--shadow-float)',
              animation: 'modalSlideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-romantic)',
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--rose-dark)',
                marginBottom: '10px',
              }}
            >
              your birthday wish is sealed in the stars
            </div>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                lineHeight: 1.65,
                color: 'var(--plum)',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              "{cake.wishMessage}"
            </p>
            <div
              style={{
                marginTop: '16px',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.2rem',
                color: 'var(--plum-muted)',
              }}
            >
              {cake.wishAuthor.replace('your favorite human', hisNickname)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
