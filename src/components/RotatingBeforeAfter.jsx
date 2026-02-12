import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import BeforeAfterSlider from './BeforeAfterSlider';

const INTERVAL_MS = 6000;

const RotatingBeforeAfter = ({ slides }) => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const startRef = useRef(Date.now());

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    startRef.current = Date.now();
    setProgress(0);

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(elapsed / INTERVAL_MS, 1);
      setProgress(pct);

      if (pct >= 1) {
        clearInterval(timerRef.current);
        setActive((prev) => (prev + 1) % slides.length);
      }
    }, 30);
  }, [slides.length]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [active, startTimer]);

  const handleClick = (index) => {
    if (index === active) return;
    clearInterval(timerRef.current);
    setActive(index);
  };

  const currentSlide = slides[active];

  return (
    <div className="relative h-full w-full">
      <BeforeAfterSlider
        key={active}
        beforeSrc={currentSlide.beforeSrc}
        afterSrc={currentSlide.afterSrc}
        initialPosition={75}
        variant="card"
        fillHeight
        introWhenVisible
      />

      {/* Badge overlay */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 sm:gap-2">
        {slides.map((slide, index) => {
          const isActive = index === active;
          return (
            <button
              key={slide.label}
              type="button"
              onClick={() => handleClick(index)}
              className={`
                relative overflow-hidden text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200
                backdrop-blur-md
                ${isActive
                  ? 'bg-white/95 text-text-900 shadow-lg'
                  : 'bg-black/40 text-white/90 hover:bg-black/60'
                }
              `}
            >
              <span className="relative z-10">{slide.label}</span>
              {/* Progress fill — grows from left to right behind text */}
              {isActive && (
                <span
                  className="absolute inset-0 bg-brand-500/20 origin-left transition-none"
                  style={{ transform: `scaleX(${progress})` }}
                  aria-hidden
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

RotatingBeforeAfter.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      beforeSrc: PropTypes.string.isRequired,
      afterSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(RotatingBeforeAfter);
