import React, { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Before/After image slider. Position changes ONLY while dragging (pointer captured).
 * - after image = base layer
 * - before image = on top, clipped by position (0 = all after, 1 = all before)
 * - initial = 0..1, default 0.5; initialPosition = 0..100 (overrides initial)
 */
const STEP = 0.02;
const INTRO_DURATION_MS = 3500;
const INTRO_SETTLE_MS = 700; // smooth move from end (0) to middle (0.5)
// Ease-in-out cubic for smoother start/end
const INTRO_EASE = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  initial = 0.5,
  initialPosition,
  beforeLabel = '',
  afterLabel = '',
  /** Optional: fill parent height (e.g. in a fixed h-64 card). Default: aspect-[3/4] */
  fillHeight = false,
  /** Optional: use as full-bleed hero (absolute inset-0 in parent) */
  variant = 'card',
  /** Optional: skip intro animation (e.g. for cards) */
  skipIntro = false,
}) => {
  const initialValue = initialPosition != null ? initialPosition / 100 : initial;
  // Hero intro: start at 1 (all before), then animate right→left to 0 (all after), then jump to middle
  const heroIntroStart = 1;
  const [position, setPosition] = useState(skipIntro || variant !== 'hero' ? initialValue : heroIntroStart);
  const [isDragging, setIsDragging] = useState(false);
  const [introDone, setIntroDone] = useState(skipIntro || variant !== 'hero');
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  const clamp = useCallback((p) => Math.max(0, Math.min(1, p)), []);

  // Hero intro: smooth right→left (1 → 0), then smooth settle to middle (0.5)
  useEffect(() => {
    if (introDone || variant !== 'hero' || skipIntro) return;
    const start = performance.now();
    const totalMs = INTRO_DURATION_MS + INTRO_SETTLE_MS;
    const tick = (now) => {
      const elapsed = now - start;
      if (elapsed < INTRO_DURATION_MS) {
        const progress = elapsed / INTRO_DURATION_MS;
        const eased = INTRO_EASE(progress);
        setPosition(heroIntroStart - eased); // 1 → 0
      } else if (elapsed < totalMs) {
        const settleProgress = (elapsed - INTRO_DURATION_MS) / INTRO_SETTLE_MS;
        const eased = INTRO_EASE(settleProgress);
        setPosition(0 + 0.5 * eased); // 0 → 0.5
      } else {
        setPosition(0.5);
        setIntroDone(true);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [variant, skipIntro, introDone]);

  // Card sliders: reset to middle when they leave the viewport so before/after are always visible when you come back
  useEffect(() => {
    if (variant !== 'card' || !containerRef.current) return;
    const el = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) setPosition(0.5);
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [variant]);

  const updateFromClientX = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const p = rect.width <= 0 ? 0.5 : clamp(x / rect.width);
    setPosition(p);
  }, [clamp]);

  const onPointerDown = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(true);
      containerRef.current?.setPointerCapture(e.pointerId);
      updateFromClientX(e.clientX);
    },
    [updateFromClientX]
  );

  const onPointerMove = useCallback(
    (e) => {
      if (!isDragging) return;
      updateFromClientX(e.clientX);
    },
    [isDragging, updateFromClientX]
  );

  const onPointerUp = useCallback((e) => {
    containerRef.current?.releasePointerCapture(e.pointerId);
    setIsDragging(false);
  }, []);

  const onPointerCancel = useCallback((e) => {
    containerRef.current?.releasePointerCapture(e.pointerId);
    setIsDragging(false);
  }, []);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setPosition((p) => clamp(p - STEP));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setPosition((p) => clamp(p + STEP));
      }
    },
    [clamp]
  );

  const isHero = variant === 'hero';
  const cardFill = variant === 'card' && fillHeight;

  return (
    <div
      ref={containerRef}
      className={`
        relative w-full overflow-hidden select-none touch-none
        ${isHero ? 'absolute inset-0 h-full' : cardFill ? 'h-full' : 'aspect-[3/4]'}
        ${!isHero && !cardFill ? 'rounded-card bg-black' : ''}
      `}
      style={!isHero ? { maxWidth: '100%' } : undefined}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      {/* Base: after image - object-left ensures alignment with clip on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={afterSrc}
          alt="Posle"
          className="w-full h-full object-cover object-left"
          loading="eager"
          draggable={false}
        />
        {afterLabel && (
          <span
            className="absolute top-2 left-2 text-xs font-semibold rounded px-2 py-1 bg-black/50 text-white backdrop-blur-sm"
            aria-hidden
          >
            {afterLabel}
          </span>
        )}
      </div>

      {/* Top: before image, clipped - object-left matches after for alignment */}
      <div
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
        style={{ clipPath: `inset(0 ${(1 - position) * 100}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt="Pre"
          className="w-full h-full object-cover object-left"
          loading="eager"
          draggable={false}
        />
        {beforeLabel && (
          <span
            className="absolute top-2 right-2 text-xs font-semibold rounded px-2 py-1 bg-black/50 text-white backdrop-blur-sm"
            aria-hidden
          >
            {beforeLabel}
          </span>
        )}
      </div>

      {/* Handle: center of touch area aligns with clip-path; object-left on images keeps split accurate */}
      <div
        tabIndex={0}
        role="slider"
        aria-label="Before and after comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position * 100)}
        className={`
          absolute top-0 bottom-0 z-20 flex items-center justify-center
          w-11 min-w-[44px] cursor-ew-resize touch-manipulation
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black
          ${isDragging ? 'cursor-grabbing' : ''}
          ${!isDragging && (variant !== 'hero' || introDone) ? 'transition-[left] duration-150 ease-out' : ''}
        `}
        style={{
          left: `${position * 100}%`,
          transform: 'translateX(-50%)',
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
          onPointerDown(e);
        }}
        onKeyDown={onKeyDown}
      >
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_4px_rgba(0,0,0,0.8)]"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
          aria-hidden
        />
        <div
          className="relative z-10 w-10 h-10 rounded-full border-2 border-white bg-white/10 shadow-[0_0_8px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3)]"
          aria-hidden
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
