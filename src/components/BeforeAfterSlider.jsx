import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

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

const HINT_VISIBLE_MS = 2000;

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
  /** Optional: skip intro animation (e.g. for cards without intro) */
  skipIntro = false,
  /** Optional: run hero-style intro when slider scrolls into view (for cards) */
  introWhenVisible = false,
  /** Optional: 'eager' for hero (above fold), 'lazy' for cards */
  imageLoading = undefined,
}) => {
  const loading = imageLoading ?? (variant === 'hero' ? 'eager' : 'lazy');
  const initialValue = initialPosition != null ? initialPosition / 100 : initial;
  const heroIntroStart = 1;
  const runIntroOnMount = variant === 'hero' && !skipIntro;
  const runIntroWhenVisible = variant === 'card' && introWhenVisible;
  const startAtIntro = runIntroOnMount || runIntroWhenVisible;
  const [position, setPosition] = useState(startAtIntro ? heroIntroStart : initialValue);
  const [isDragging, setIsDragging] = useState(false);
  const [introDone, setIntroDone] = useState(!startAtIntro);
  const [introTriggered, setIntroTriggered] = useState(runIntroOnMount);
  const [hintVisible, setHintVisible] = useState(variant === 'hero');
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  // Hero: hide hint after 2s or on first interaction
  useEffect(() => {
    if (variant !== 'hero' || !hintVisible) return;
    const t = setTimeout(() => setHintVisible(false), HINT_VISIBLE_MS);
    return () => clearTimeout(t);
  }, [variant, hintVisible]);

  const clamp = useCallback((p) => Math.max(0, Math.min(1, p)), []);

  // Hero or card intro: smooth 1 → 0 (reveal after), then settle to middle (0.5)
  useEffect(() => {
    if (introDone || !introTriggered) return;
    if (variant === 'hero' && skipIntro) return;
    if (variant === 'card' && !introWhenVisible) return;
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
  }, [variant, skipIntro, introWhenVisible, introDone, introTriggered]);

  // Card: when introWhenVisible, trigger intro when slider scrolls into view
  useEffect(() => {
    if (!runIntroWhenVisible || !containerRef.current) return;
    const el = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !introTriggered) setIntroTriggered(true);
      },
      { rootMargin: '80px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [runIntroWhenVisible, introTriggered]);

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
      setHintVisible(false);
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

  const handleImageError = useCallback((e) => {
    e.target.style.opacity = '0.3';
  }, []);

  const isHero = variant === 'hero';
  const cardFill = variant === 'card' && fillHeight;
  const objectPos = isHero ? 'object-center' : 'object-left';

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
      {/* Base: after image - object-center for hero, object-left for cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={afterSrc}
          alt="Prostor posle čišćenja"
          className={`w-full h-full object-cover ${objectPos}`}
          loading={loading}
          draggable={false}
          onError={handleImageError}
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

      {/* Top: before image, clipped - object position matches after for alignment */}
      <div
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
        style={{ clipPath: `inset(0 ${(1 - position) * 100}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt="Prostor pre čišćenja"
          className={`w-full h-full object-cover ${objectPos}`}
          loading={loading}
          draggable={false}
          onError={handleImageError}
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

      {/* Hero only: full-width bottom track (same height as circle) – whole bar is draggable */}
      {isHero && (
        <div
          className="absolute bottom-0 left-0 right-0 h-12 z-10 cursor-ew-resize touch-manipulation bg-black/30 border-t border-white/20"
          aria-hidden
        />
      )}

      {/* Handle: full-height line; hero = circle on bottom track, cards = circle centered */}
      <div
        tabIndex={0}
        role="slider"
        aria-label="Before and after comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position * 100)}
        className={`
          absolute top-0 bottom-0 z-20 flex flex-col items-center
          w-11 min-w-[44px] cursor-ew-resize touch-manipulation
          ${isHero ? 'justify-end pb-3' : 'justify-center'}
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black
          ${isDragging ? 'cursor-grabbing' : ''}
          ${!isDragging && introDone ? 'transition-[left] duration-150 ease-out' : ''}
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
        {variant === 'hero' && hintVisible && (
          <span
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs text-white/90 whitespace-nowrap px-2 py-1 rounded bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            aria-hidden
          >
            Prevuci levo / desno
          </span>
        )}
      </div>
    </div>
  );
};

BeforeAfterSlider.propTypes = {
  beforeSrc: PropTypes.string.isRequired,
  afterSrc: PropTypes.string.isRequired,
  initial: PropTypes.number,
  initialPosition: PropTypes.number,
  beforeLabel: PropTypes.string,
  afterLabel: PropTypes.string,
  fillHeight: PropTypes.bool,
  variant: PropTypes.oneOf(['card', 'hero']),
  skipIntro: PropTypes.bool,
  introWhenVisible: PropTypes.bool,
  imageLoading: PropTypes.oneOf(['eager', 'lazy']),
};

export default BeforeAfterSlider;
