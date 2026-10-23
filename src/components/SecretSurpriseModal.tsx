import React, { useEffect } from 'react';
import { birthdayConfig } from '../data/birthdayConfig';
import confetti from 'canvas-confetti';
import { X, Star } from 'lucide-react';

interface SecretSurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecretSurpriseModal: React.FC<SecretSurpriseModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { secretSurprise, hisNickname } = birthdayConfig;

  useEffect(() => {
    if (isOpen) {
      // Gentle mini confetti burst when secret found!
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.5 },
        colors: ['#E8C987', '#F5C6D0', '#DCD6F7'],
      });
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Secret surprise love note"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: '36px 30px',
          maxWidth: '480px',
          textAlign: 'center',
          backgroundColor: '#FFFDF9',
          border: '2px solid var(--gold)',
          boxShadow: 'var(--glow-gold), var(--shadow-float)',
        }}
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close secret note"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '34px',
            height: '34px',
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
          <X size={18} />
        </button>

        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'var(--blush-light)',
            border: '2px solid var(--gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto',
            boxShadow: 'var(--glow-gold)',
          }}
        >
          <Star size={30} color="var(--gold-dark)" fill="var(--gold)" />
        </div>

        <span
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.35rem',
            fontWeight: 700,
            color: 'var(--rose-dark)',
          }}
        >
          {secretSurprise.badge}
        </span>

        <h3
          style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: 'var(--plum)',
            marginTop: '6px',
            marginBottom: '16px',
          }}
        >
          {secretSurprise.title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            lineHeight: 1.65,
            color: 'var(--plum)',
            fontStyle: 'italic',
            marginBottom: '20px',
          }}
        >
          "{secretSurprise.message.replace('my love', hisNickname)}"
        </p>

        <div
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.4rem',
            color: 'var(--rose-dark)',
            fontWeight: 700,
          }}
        >
          {secretSurprise.signature}
        </div>
      </div>
    </div>
  );
};
