import React, { useEffect } from 'react';
import { X, Heart } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  caption: string;
  date?: string;
  imageUrl?: string;
  tag?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  title,
  caption,
  date,
  imageUrl,
  tag,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: '24px',
          maxWidth: '560px',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close lightbox"
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
            transition: 'background-color 0.2s ease',
            zIndex: 10,
          }}
        >
          <X size={20} />
        </button>

        {/* Polaroid frame inside modal */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            padding: '16px 16px 20px 16px',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-polaroid)',
            border: '1px solid rgba(73, 52, 71, 0.08)',
          }}
        >
          {imageUrl ? (
            <div
              style={{
                width: '100%',
                maxHeight: '380px',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#FAF2E9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={imageUrl}
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          ) : (
            /* Illustrated Story Accent Frame in Lightbox */
            <div
              style={{
                width: '100%',
                height: '240px',
                borderRadius: '8px',
                backgroundColor: '#FFF5EC',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                border: '2px dashed var(--blush-border)',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFDF9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Heart size={28} color="var(--rose)" fill="var(--blush)" />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--plum)',
                }}
              >
                illustrated scrapbook memory
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'var(--plum-muted)',
                  maxWidth: '320px',
                }}
              >
                Personal photo can be added via <code>birthdayConfig.ts</code>
              </div>
            </div>
          )}

          {/* Details & Caption */}
          <div style={{ marginTop: '18px', textAlign: 'center' }}>
            {tag && (
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--blush-light)',
                  color: 'var(--rose-dark)',
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  padding: '2px 12px',
                  borderRadius: '999px',
                  marginBottom: '8px',
                }}
              >
                #{tag}
              </span>
            )}
            <h3
              style={{
                fontSize: '1.6rem',
                fontWeight: 600,
                color: 'var(--plum)',
                marginBottom: '6px',
              }}
            >
              {title}
            </h3>
            {date && (
              <div
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.15rem',
                  color: 'var(--rose)',
                  marginBottom: '10px',
                }}
              >
                {date}
              </div>
            )}
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: 'var(--plum)',
                lineHeight: 1.5,
                fontStyle: 'italic',
                maxWidth: '460px',
                margin: '0 auto',
              }}
            >
              "{caption}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
