import React, { useMemo } from 'react';
import { LuQuote } from 'react-icons/lu';
import { TESTIMONIALS } from '../../constants/about';

const TestimonialMarquee = () => {
  const tripled = useMemo(
    () => [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS],
    []
  );

  return (
    <section className="bg-surface-0 py-6 sm:py-8 lg:py-10 border-t border-border-200 overflow-hidden relative">
      <div className="relative">
        <div className="text-center mb-4 sm:mb-5 lg:mb-6">
          <p className="text-sm text-text-600 font-medium uppercase tracking-wide">
            Rekli su o nama
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-surface-0 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-surface-0 to-transparent" />
          <div
            className="flex items-stretch animate-scroll"
            style={{ width: 'fit-content', gap: 16 }}
          >
            {tripled.map((testimonial, index) => (
              <div
                key={`testimonial-${index}`}
                className="flex-shrink-0 w-72 sm:w-80 bg-surface-50 border border-border-200 rounded-xl p-4 sm:p-5 flex flex-col"
              >
                <LuQuote className="text-lg text-brand-500/40 mb-2 flex-shrink-0" />
                <p className="text-sm text-text-700 leading-relaxed italic flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <span className="text-xs font-semibold text-text-900 mt-3 pt-2 border-t border-border-200">
                  — {testimonial.source}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TestimonialMarquee);
