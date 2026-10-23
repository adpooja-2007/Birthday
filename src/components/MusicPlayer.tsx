import React, { useState, useRef, useEffect } from 'react';
import { birthdayConfig } from '../data/birthdayConfig';
import { Disc, Volume2 } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const { music } = birthdayConfig;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthTimerRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Gentle music-box chime notes (Happy Birthday melody in gentle chime frequencies)
  const chimeNotes = [
    261.63, 261.63, 293.66, 261.63, 349.23, 329.63, // Happy birthday to you
    261.63, 261.63, 293.66, 261.63, 392.00, 349.23, // Happy birthday to you
    261.63, 261.63, 523.25, 440.00, 349.23, 329.63, 293.66, // Happy birthday dear...
    466.16, 466.16, 440.00, 349.23, 392.00, 349.23  // Happy birthday to you
  ];

  const playChimeNote = (freq: number) => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  };

  const startChimeLoop = () => {
    let noteIdx = 0;
    const playNext = () => {
      playChimeNote(chimeNotes[noteIdx]);
      noteIdx = (noteIdx + 1) % chimeNotes.length;
      synthTimerRef.current = window.setTimeout(playNext, 650);
    };
    playNext();
  };

  const stopChimeLoop = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current && music.audioSrc) {
        audioRef.current.pause();
      }
      stopChimeLoop();
      setIsPlaying(false);
    } else {
      stopChimeLoop();
      if (audioRef.current && music.audioSrc && music.enabled) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // If custom audio file fails to load or is not yet placed, fallback to gentle music-box
          startChimeLoop();
          setIsPlaying(true);
        });
      } else {
        startChimeLoop();
        setIsPlaying(true);
      }
    }
  };

  // Start playback upon the visitor's first interaction with the website (e.g. opening envelope)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isPlaying && audioRef.current && music.audioSrc && music.enabled) {
        stopChimeLoop();
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // If browser policy requires explicit user action, floating vinyl button remains ready
        });
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [music, isPlaying]);

  useEffect(() => {
    return () => {
      stopChimeLoop();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const candidateSources = [
    music.audioSrc,
    '/audio/lover.mp3',
    '/audio/Lover.mp3',
    '/audio/lover.m4a',
    '/audio/lover.wav',
    '/audio/our-song.mp3'
  ];
  const [sourceIdx, setSourceIdx] = useState(0);

  const handleAudioError = () => {
    if (sourceIdx < candidateSources.length - 1) {
      setSourceIdx(prev => prev + 1);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={candidateSources[sourceIdx]}
        loop
        preload="auto"
        onError={handleAudioError}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Floating Vinyl Player Button */}
      <button
        onClick={toggleMusic}
        type="button"
        className={`music-toggle-btn ${isPlaying ? 'is-playing' : ''}`}
        aria-label={isPlaying ? 'Pause background music' : `Play ${music.title} by ${music.artist}`}
        title={isPlaying ? `Pause ${music.title}` : `Play ${music.title} by ${music.artist}`}
      >
        {isPlaying ? (
          <Volume2 size={22} color="var(--rose-dark)" />
        ) : (
          <Disc size={24} color="var(--plum)" />
        )}
      </button>
    </>
  );
};


