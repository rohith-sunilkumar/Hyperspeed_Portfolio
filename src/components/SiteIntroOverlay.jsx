'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const greetings = [
  { text: 'Hello', lang: 'English' },
  { text: 'नमस्ते', lang: 'Hindi' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'Bonjour', lang: 'French' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: '안녕하세요', lang: 'Korean' },
  { text: 'Ciao', lang: 'Italian' },
  { text: 'مرحبا', lang: 'Arabic' },
  { text: '你好', lang: 'Chinese' },
  { text: 'Olá', lang: 'Portuguese' },
  { text: 'Hallo', lang: 'German' },
  { text: 'Welcome', lang: 'Final' },
];

export default function SiteIntroOverlay({ onComplete }) {
  // Phases: 'greetings' | 'signature' | 'fading' | 'done'
  const [phase, setPhase] = useState('greetings');
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const videoRef = useRef(null);
  const fallbackTimerRef = useRef(null);

  // Disable body scroll while intro is playing
  useEffect(() => {
    if (phase !== 'done') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [phase]);

  // Phase 1: Cycle through multilingual greetings
  useEffect(() => {
    if (phase !== 'greetings') return;

    const interval = setInterval(() => {
      setCurrentGreeting((prev) => {
        if (prev >= greetings.length - 1) {
          clearInterval(interval);
          // Hold on "Welcome" briefly, then transition to signature video
          setTimeout(() => {
            setPhase('signature');
          }, 700);
          return prev;
        }
        return prev + 1;
      });
    }, 260);

    return () => clearInterval(interval);
  }, [phase]);

  const finishIntro = useCallback(() => {
    setPhase((currentPhase) => {
      if (currentPhase === 'done' || currentPhase === 'fading') return currentPhase;
      setTimeout(() => {
        setPhase('done');
        if (onComplete) onComplete();
      }, 600);
      return 'fading';
    });
  }, [onComplete]);

  // Phase 2: Start signature video when entering signature phase
  useEffect(() => {
    if (phase === 'signature') {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current
          .play()
          .catch(() => {
            // If autoplay fails, fallback after timeout
            fallbackTimerRef.current = setTimeout(() => {
              finishIntro();
            }, 4000);
          });
      }

      // Safety timeout in case video stalls or fails to trigger onEnded
      fallbackTimerRef.current = setTimeout(() => {
        finishIntro();
      }, 7000);
    }

    return () => {
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, [phase, finishIntro]);

  const handleSkip = () => {
    finishIntro();
  };

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-white transition-opacity duration-700 ease-out select-none ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Discreet Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 sm:top-8 sm:right-10 z-20 text-[11px] font-mono tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors uppercase px-3 py-1.5 rounded-full hover:bg-neutral-100/80 cursor-pointer"
        aria-label="Skip introduction"
      >
        Skip ✕
      </button>

      {/* ─── Phase 1: Apple-style Multilingual Greetings ─── */}
      <AnimatePresence mode="wait">
        {phase === 'greetings' && (
          <motion.div
            key="greetings-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.35, ease: 'easeInOut' } }}
            className="flex flex-col items-center justify-center text-center px-4"
          >
            <h1
              key={currentGreeting}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-neutral-950 animate-greeting-in"
            >
              {greetings[currentGreeting].text}
            </h1>

            {/* Subtle progress indicator dots */}
            <div className="mt-8 flex justify-center gap-1.5 sm:gap-2">
              {greetings.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-200 ${
                    i === currentGreeting
                      ? 'w-6 sm:w-8 bg-neutral-950'
                      : i < currentGreeting
                      ? 'w-1.5 sm:w-2 bg-neutral-300'
                      : 'w-1.5 sm:w-2 bg-neutral-200'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Phase 2: Handwritten Signature Animation Video ─── */}
      <AnimatePresence>
        {phase === 'signature' && (
          <motion.div
            key="signature-container"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl px-6 flex flex-col items-center justify-center relative"
          >
            <video
              ref={videoRef}
              src="/signature.mp4"
              playsInline
              muted
              autoPlay
              onEnded={finishIntro}
              className="w-full h-auto object-contain pointer-events-none mix-blend-multiply"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
