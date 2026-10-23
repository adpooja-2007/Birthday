import React, { useState } from 'react';
import './styles/animations.css';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { SiteNavigation } from './components/SiteNavigation';
import { BirthdayHero } from './components/BirthdayHero';
import { StoryTimeline } from './components/StoryTimeline';
import { OurLittleForever } from './components/OurLittleForever';
import { IntimateMoments } from './components/IntimateMoments';
import { MemoryGallery } from './components/MemoryGallery';
import { OpenWhenLetters } from './components/OpenWhenLetters';
import { BirthdayCake } from './components/BirthdayCake';
import { FinalLetter } from './components/FinalLetter';
import { SecretSurpriseModal } from './components/SecretSurpriseModal';
import { MusicPlayer } from './components/MusicPlayer';

export const App: React.FC = () => {
  const [inIntro, setInIntro] = useState(true);
  const [secretModalOpen, setSecretModalOpen] = useState(false);

  const handleEnterExperience = () => {
    setInIntro(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplay = () => {
    setInIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {inIntro ? (
        /* Screen 1: The Interactive Opening Envelope Experience */
        <EnvelopeIntro onEnter={handleEnterExperience} />
      ) : (
        /* Screens 2-8: The Full Illustrated Storybook Journey */
        <div style={{ animation: 'modalFadeIn 0.6s ease-out' }}>
          {/* Top Sticky Navigation with Aligned Chapter Tabs & Secret Trigger */}
          <SiteNavigation onOpenSecret={() => setSecretModalOpen(true)} />

          <main id="main-content">
            {/* 1. Birthday Hero with Couple Caricature Composition */}
            <BirthdayHero onScrollToTimeline={() => scrollToSection('#story-timeline')} />

            {/* 2. Chronological Illustrated Love Story Chapters */}
            <StoryTimeline />

            {/* 3. Our Little Forever - A thousand little things I want to do with you, Barath */}
            <OurLittleForever />

            {/* 4. The feelings I have when it's just us - Intimate Diary Cards & Secret Heart Note */}
            <IntimateMoments />

            {/* 5. Scrapbook Gallery with Polaroids & Lightbox */}
            <MemoryGallery />

            {/* 6. Open-When Letters with Reading Modal */}
            <OpenWhenLetters />

            {/* 7. Interactive Birthday Cake with Candle Blow & Confetti */}
            <BirthdayCake />

            {/* 8. Final Folded Letter & Closing Caricature */}
            <FinalLetter onReplay={handleReplay} />
          </main>
        </div>
      )}

      {/* Secret Surprise Love Note Modal */}
      <SecretSurpriseModal
        isOpen={secretModalOpen}
        onClose={() => setSecretModalOpen(false)}
      />

      {/* Optional Music Vinyl Controller (available across both screens) */}
      <MusicPlayer />
    </div>
  );
};

export default App;
