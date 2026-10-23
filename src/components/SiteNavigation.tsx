import React, { useState, useEffect, useRef } from 'react';
import { Heart, Menu, X, Star } from 'lucide-react';

interface SiteNavigationProps {
  onOpenSecret: () => void;
}

interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

export const SiteNavigation: React.FC<SiteNavigationProps> = ({ onOpenSecret }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('story-timeline');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const mobileTabRailRef = useRef<HTMLDivElement>(null);

  // Remaining active sections only - zero unwanted sections
  const navLinks: NavLinkItem[] = [
    { label: 'Chapters', href: '#story-timeline', id: 'story-timeline' },
    { label: 'Our Dreams', href: '#our-little-forever', id: 'our-little-forever' },
    { label: "When It's Just Us", href: '#intimate-moments', id: 'intimate-moments' },
    { label: 'Scrapbook', href: '#scrapbook-gallery', id: 'scrapbook-gallery' },
    { label: 'Letters', href: '#open-when-letters', id: 'open-when-letters' },
    { label: 'Cake', href: '#birthday-cake', id: 'birthday-cake' },
    { label: 'Final Letter', href: '#final-letter', id: 'final-letter' },
  ];

  // Track active section via scroll observer
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140; // offset for sticky navbar
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const handleLinkClick = (href: string, id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Birthday Story Navigation"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 80,
        backgroundColor: 'rgba(255, 248, 240, 0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(245, 198, 208, 0.55)',
        boxShadow: '0 2px 14px rgba(73, 52, 71, 0.05)',
      }}
    >
      {/* Top Navbar Row */}
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '66px',
          gap: '16px',
        }}
      >
        {/* Brand / Logo linking to hero */}
        <a
          href="#birthday-hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#birthday-hero', 'birthday-hero');
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'var(--plum)',
            flexShrink: 0,
            padding: '6px 0',
          }}
          aria-label="Back to birthday hero opening"
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--blush-light)',
              border: '1px solid var(--blush-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Heart size={16} color="var(--rose-dark)" fill="var(--blush)" />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.45rem',
              fontWeight: 700,
              letterSpacing: '0.01em',
              color: 'var(--plum)',
              whiteSpace: 'nowrap',
            }}
          >
            for my Barath ♡
          </span>
        </a>

        {/* Desktop Aligned Navigation Tabs */}
        <div
          className="desktop-nav-tabs"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const isHovered = hoveredTab === link.id;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href, link.id);
                }}
                onMouseEnter={() => setHoveredTab(link.id)}
                onMouseLeave={() => setHoveredTab(null)}
                aria-current={isActive ? 'true' : undefined}
                className="nav-tab-pill"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '38px',
                  padding: '0 16px',
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive || isHovered ? 'var(--rose-dark)' : 'var(--plum-muted)',
                  backgroundColor: isActive
                    ? 'var(--blush-light)'
                    : isHovered
                    ? '#FFFDF9'
                    : 'rgba(255, 255, 255, 0.55)',
                  border: isActive
                    ? '1.5px solid var(--rose)'
                    : isHovered
                    ? '1.5px solid var(--rose-light)'
                    : '1px solid rgba(240, 184, 196, 0.45)',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  lineHeight: 1,
                  boxShadow: isActive
                    ? '0 2px 8px rgba(199, 125, 145, 0.22)'
                    : isHovered
                    ? '0 2px 6px rgba(199, 125, 145, 0.12)'
                    : 'none',
                  transform: isHovered && !isActive ? 'translateY(-1px)' : 'none',
                  transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {link.label}
              </a>
            );
          })}

          {/* Secret Surprise Star Button */}
          <button
            onClick={onOpenSecret}
            type="button"
            className="secret-star-btn"
            aria-label="Open secret birthday note"
            title="A secret surprise for you"
            style={{
              height: '38px',
              width: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(252, 239, 210, 0.7)',
              border: '1.5px solid var(--gold)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              marginLeft: '4px',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
              flexShrink: 0,
            }}
          >
            <Star size={18} color="var(--gold-dark)" fill="var(--gold)" />
          </button>
        </div>

        {/* Mobile Nav Controls: Secret Star & Menu Toggle */}
        <div
          className="mobile-nav-toggle-group"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <button
            onClick={onOpenSecret}
            type="button"
            className="secret-star-btn"
            aria-label="Open secret birthday note"
            title="A secret surprise for you"
            style={{
              height: '38px',
              width: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(252, 239, 210, 0.7)',
              border: '1.5px solid var(--gold)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Star size={18} color="var(--gold-dark)" fill="var(--gold)" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            style={{
              height: '38px',
              width: '38px',
              backgroundColor: '#FFFDF9',
              border: '1.5px solid var(--blush-border)',
              borderRadius: '10px',
              color: 'var(--plum)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Horizontal Tab Rail (allows smooth horizontal scrolling without shrinking text) */}
      <div
        ref={mobileTabRailRef}
        className="mobile-tab-rail"
        role="tablist"
        aria-label="Story chapter tabs"
        style={{
          display: 'none',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px 10px 16px',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          borderTop: '1px solid rgba(245, 198, 208, 0.35)',
          backgroundColor: 'rgba(255, 252, 248, 0.96)',
        }}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <button
              key={link.href}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleLinkClick(link.href, link.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '34px',
                padding: '0 14px',
                fontSize: '0.84rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: isActive ? 700 : 600,
                color: isActive ? 'var(--rose-dark)' : 'var(--plum-muted)',
                backgroundColor: isActive ? 'var(--blush-light)' : '#FFFDF9',
                border: isActive
                  ? '1.5px solid var(--rose)'
                  : '1px solid rgba(240, 184, 196, 0.5)',
                borderRadius: '999px',
                whiteSpace: 'nowrap',
                lineHeight: 1,
                cursor: 'pointer',
                flexShrink: 0,
                boxShadow: isActive ? '0 2px 6px rgba(199, 125, 145, 0.2)' : 'none',
              }}
            >
              {link.label}
            </button>
          );
        })}
      </div>

      {/* Mobile Drawer (Accessible overlay list) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Navigation drawer"
          style={{
            padding: '16px 20px 24px 20px',
            backgroundColor: '#FFFDF9',
            borderTop: '1px solid rgba(245, 198, 208, 0.5)',
            boxShadow: '0 10px 25px rgba(73, 52, 71, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            animation: 'modalSlideUp 0.3s ease-out',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href, link.id);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--rose-dark)' : 'var(--plum)',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: isActive ? 'var(--blush-light)' : 'transparent',
                  border: isActive ? '1px solid var(--blush-border)' : '1px solid transparent',
                  transition: 'background-color 0.2s ease',
                }}
              >
                <span>{link.label}</span>
                {isActive && <Heart size={16} fill="var(--rose-dark)" color="var(--rose-dark)" />}
              </a>
            );
          })}
        </div>
      )}

      {/* Responsive Breakpoints & Focus Indicator Styles */}
      <style>{`
        .desktop-nav-tabs .nav-tab-pill:focus-visible,
        .mobile-tab-rail button:focus-visible,
        .secret-star-btn:focus-visible {
          outline: 2px solid var(--rose) !important;
          outline-offset: 2px !important;
        }

        .secret-star-btn:hover {
          transform: rotate(15deg) scale(1.08);
          background-color: var(--gold-glow) !important;
        }

        .mobile-tab-rail::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 1040px) {
          .desktop-nav-tabs {
            display: none !important;
          }
          .mobile-nav-toggle-group {
            display: flex !important;
          }
          .mobile-tab-rail {
            display: flex !important;
          }
        }

        @media (min-width: 1041px) {
          .mobile-nav-toggle-group {
            display: none !important;
          }
          .mobile-tab-rail {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default SiteNavigation;
