import React from 'react';
import { birthdayConfig } from '../data/birthdayConfig';
import { BotanicalCorner, BotanicalDivider } from './BotanicalFlourish';
import { Calendar, Heart } from 'lucide-react';

export const StoryTimeline: React.FC = () => {
  const { timeline, timelineHeading, timelineSubheading, timelineTag, timelineClosing } = birthdayConfig;

  return (
    <section
      id="story-timeline"
      className="scrapbook-wash-timeline"
      style={{
        padding: '100px 20px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '2px dashed rgba(240, 184, 196, 0.7)',
      }}
      aria-label="Our Love Story Timeline"
    >
      {/* Hand-drawn botanical corners */}
      <BotanicalCorner position="top-left" color="#8DA894" flowerColor="#E8A3B1" />
      <BotanicalCorner position="top-right" color="#8DA894" flowerColor="#E8A3B1" />

      <div className="container" style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            {timelineTag || "Our Chapter"}
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-romantic)',
              fontSize: 'clamp(2.2rem, 4.4vw, 3.4rem)',
              fontWeight: 700,
              color: 'var(--burgundy)',
              margin: '12px auto 16px auto',
              lineHeight: 1.25,
            }}
          >
            {timelineHeading}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.08rem, 2vw, 1.22rem)',
              color: 'var(--plum-dark)',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.68,
            }}
          >
            {timelineSubheading}
          </p>
        </div>

        {/* Chronological Timeline Container */}
        <div style={{ position: 'relative', marginTop: '40px' }}>
          {/* Connecting Vertical Line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '30px',
              bottom: '40px',
              left: '27px',
              width: '2px',
              background: 'repeating-linear-gradient(to bottom, #C77D91, #C77D91 6px, transparent 6px, transparent 12px)',
              zIndex: 1,
            }}
          />

          {/* Timeline Chapter Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {timeline.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '24px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {/* Timeline Node Badge with Chapter Number */}
                <div
                  style={{
                    flexShrink: 0,
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFDF9',
                    border: '2.5px solid var(--rose-dark)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '6px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-hand)',
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: 'var(--rose-dark)',
                    }}
                  >
                    0{item.chapterNumber}
                  </span>
                </div>

                {/* Timeline Chapter Scrapbook Card */}
                <article
                  style={{
                    flex: 1,
                    backgroundColor: '#FFFDF9',
                    padding: '32px 30px',
                    borderRadius: '24px',
                    border: '1.5px solid var(--blush-border)',
                    boxShadow: 'var(--shadow-paper)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    position: 'relative',
                  }}
                >
                  {/* Card Header: Chapter Label, Date, & Title */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-romantic)',
                          fontSize: '1.4rem',
                          fontWeight: 700,
                          color: 'var(--rose-dark)',
                        }}
                      >
                        Chapter 0{item.chapterNumber}
                      </span>

                      {item.date && (
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            color: 'var(--burgundy)',
                            backgroundColor: 'var(--blush-light)',
                            padding: '4px 14px',
                            borderRadius: '999px',
                            border: '1.5px solid var(--blush-border)',
                          }}
                        >
                          <Calendar size={13} />
                          <span>{item.date}</span>
                        </div>
                      )}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-romantic)',
                        fontSize: 'clamp(1.65rem, 2.8vw, 2.1rem)',
                        fontWeight: 700,
                        color: 'var(--burgundy)',
                        lineHeight: 1.25,
                        margin: '6px 0 0 0',
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Story Description with Multiple Paragraphs */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {item.description.split('\n\n').map((para, pIdx) => (
                      <p
                        key={pIdx}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '1.05rem',
                          color: 'var(--plum-dark)',
                          lineHeight: 1.72,
                          margin: 0,
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Fully Visible Caricature Illustration (Never Cropped) */}
                  {item.photoUrl && (
                    <div
                      style={{
                        marginTop: '10px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        border: '2px solid var(--blush-border)',
                        backgroundColor: '#FAF4EB',
                        boxShadow: 'var(--shadow-paper)',
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          minHeight: '280px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '14px 14px 8px 14px',
                        }}
                      >
                        <img
                          src={item.photoUrl}
                          alt={`Caricature illustration for Chapter ${item.chapterNumber}: ${item.title}`}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '400px',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                            display: 'block',
                            borderRadius: '12px',
                          }}
                        />
                      </div>

                      {item.captionNote && (
                        <div
                          style={{
                            backgroundColor: 'var(--blush-light)',
                            padding: '10px 18px',
                            textAlign: 'center',
                            borderTop: '1.5px solid var(--blush-border)',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--font-romantic)',
                              fontSize: '1.35rem',
                              fontWeight: 700,
                              color: 'var(--burgundy)',
                            }}
                          >
                            {item.captionNote} ♡
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Botanical Divider */}
        <BotanicalDivider style={{ margin: '60px auto 30px auto' }} />

        {/* =========================================================
            CLOSING LOVE STORY MESSAGE CARD: "And this is only the beginning..."
            ========================================================= */}
        {timelineClosing && (
          <div
            style={{
              marginTop: '40px',
              backgroundColor: '#FFFDF9',
              borderRadius: '28px',
              border: '2px solid var(--blush-border)',
              padding: '44px 34px',
              boxShadow: 'var(--shadow-float)',
              position: 'relative',
            }}
          >
            {/* Header Badge */}
            <div style={{ textAlign: 'center', marginBottom: '18px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--rose-dark)',
                  backgroundColor: 'var(--blush-light)',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  border: '1px solid var(--blush-border)',
                  display: 'inline-block',
                }}
              >
                our journey continues
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-romantic)',
                  fontSize: 'clamp(2.1rem, 4vw, 2.8rem)',
                  fontWeight: 700,
                  color: 'var(--burgundy)',
                  marginTop: '14px',
                  marginBottom: '10px',
                  lineHeight: 1.25,
                }}
              >
                {timelineClosing.heading}
              </h3>
            </div>

            {/* Fully Visible Closing Couple Caricature */}
            {timelineClosing.image && (
              <div
                style={{
                  maxWidth: '440px',
                  margin: '0 auto 28px auto',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '2px solid var(--blush-border)',
                  backgroundColor: '#FAF4EB',
                  boxShadow: 'var(--shadow-paper)',
                }}
              >
                <img
                  src={timelineClosing.image}
                  alt={timelineClosing.altText}
                  style={{
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    display: 'block',
                    padding: '12px 12px 8px 12px',
                  }}
                />
                <div
                  style={{
                    backgroundColor: 'var(--blush-light)',
                    padding: '8px 16px',
                    textAlign: 'center',
                    borderTop: '1px solid var(--blush-border)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-romantic)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--burgundy)',
                    }}
                  >
                    Pooja & Barath — chapter by chapter ♡
                  </span>
                </div>
              </div>
            )}

            {/* Paragraphs */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                maxWidth: '740px',
                margin: '0 auto 24px auto',
              }}
            >
              {timelineClosing.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.08rem',
                    lineHeight: '1.75',
                    color: 'var(--plum-dark)',
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Signature */}
            <div
              style={{
                textAlign: 'right',
                maxWidth: '740px',
                margin: '20px auto 0 auto',
                paddingTop: '16px',
                borderTop: '1px dashed var(--blush-border)',
                fontFamily: 'var(--font-romantic)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--burgundy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '8px',
              }}
            >
              <span>{timelineClosing.signature}</span>
              <Heart size={20} fill="var(--rose-dark)" color="var(--rose-dark)" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default StoryTimeline;
