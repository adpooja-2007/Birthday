import React from 'react';

interface BotanicalCornerProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  flowerColor?: string;
}

export const BotanicalCorner: React.FC<BotanicalCornerProps> = ({
  position,
  className = '',
  style = {},
  color = '#8DA894', // Soft sage green
  flowerColor = '#E8A3B1', // Soft blush pink
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'scaleX(-1)';
      case 'bottom-left':
        return 'scaleY(-1)';
      case 'bottom-right':
        return 'scale(-1, -1)';
      case 'top-left':
      default:
        return 'none';
    }
  };

  const getPositionStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'absolute',
      width: '80px',
      height: '80px',
      pointerEvents: 'none',
      zIndex: 1,
      opacity: 0.55,
      transform: getTransform(),
    };

    switch (position) {
      case 'top-left':
        return { ...base, top: '8px', left: '8px' };
      case 'top-right':
        return { ...base, top: '8px', right: '8px' };
      case 'bottom-left':
        return { ...base, bottom: '8px', left: '8px' };
      case 'bottom-right':
        return { ...base, bottom: '8px', right: '8px' };
    }
  };

  return (
    <div
      aria-hidden="true"
      className={`botanical-corner ${className}`}
      style={{ ...getPositionStyles(), ...style }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Main curved botanical vine stem */}
        <path
          d="M 6 92 C 12 60 32 30 78 8"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Secondary branch */}
        <path
          d="M 22 56 C 42 50 62 60 76 74"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Delicate leaves along stem */}
        <path
          d="M 18 64 C 10 52 16 42 24 50 C 24 56 22 62 18 64 Z"
          fill={color}
          opacity="0.75"
        />
        <path
          d="M 34 40 C 26 30 34 22 42 28 C 42 34 38 40 34 40 Z"
          fill={color}
          opacity="0.8"
        />
        <path
          d="M 52 24 C 48 12 58 8 64 16 C 64 22 58 26 52 24 Z"
          fill={color}
          opacity="0.75"
        />
        <path
          d="M 46 54 C 54 44 64 50 62 58 C 56 60 50 58 46 54 Z"
          fill={color}
          opacity="0.7"
        />
        <path
          d="M 62 66 C 70 58 78 64 76 70 C 70 72 64 70 62 66 Z"
          fill={color}
          opacity="0.65"
        />

        {/* Hand-drawn little blush rosebuds */}
        <circle cx="82" cy="8" r="4.5" fill={flowerColor} opacity="0.9" />
        <circle cx="80" cy="9" r="2.5" fill="#FFFDF9" opacity="0.7" />
        <circle cx="78" cy="76" r="3.5" fill={flowerColor} opacity="0.85" />
        
        {/* Golden dew drop accents */}
        <circle cx="28" cy="38" r="1.5" fill="#E6CA85" opacity="0.8" />
        <circle cx="56" cy="18" r="1.5" fill="#E6CA85" opacity="0.8" />
      </svg>
    </div>
  );
};

export const BotanicalDivider: React.FC<{ style?: React.CSSProperties }> = ({ style = {} }) => {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '28px auto',
        maxWidth: '320px',
        opacity: 0.65,
        ...style,
      }}
    >
      <svg viewBox="0 0 240 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '24px' }}>
        <path d="M 10 12 L 85 12" stroke="#BCD0C2" strokeWidth="1" strokeDasharray="3 3" />
        {/* Left vine leaves */}
        <path d="M 70 12 C 78 8 82 12 80 14" stroke="#8DA894" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 85 12 C 92 6 98 10 95 13" stroke="#8DA894" strokeWidth="1.2" strokeLinecap="round" />

        {/* Central delicate romantic heart bud */}
        <path
          d="M 120 16 C 114 10 110 6 114 3 C 117 0.5 120 3 120 5 C 120 3 123 0.5 126 3 C 130 6 126 10 120 16 Z"
          fill="#E8A3B1"
          stroke="#C77D91"
          strokeWidth="0.8"
        />

        {/* Right vine leaves */}
        <path d="M 145 12 C 148 6 154 10 151 13" stroke="#8DA894" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 160 12 C 168 8 172 12 170 14" stroke="#8DA894" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 165 12 L 230 12" stroke="#BCD0C2" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </div>
  );
};
