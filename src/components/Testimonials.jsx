import React from 'react';
import { LuQuote } from 'react-icons/lu';
import { TESTIMONIALS } from '../constants/about';
import CheckBadge from './UI/CheckBadge';

const TRUST_POINTS = [
  'Standardizovane procedure i kontrolne liste',
  'Oprema i sredstva iz Nemačke',
  'Iskusni i stalno zaposleni tim',
  'Bez ijednog bezbednosnog incidenta',
];

const Testimonials = () => (
  <section className="py-10 sm:py-12 lg:py-20 bg-surface-0 border-t border-border-200">
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-900 mb-4 sm:mb-6 leading-tight">
          Poverenje koje se gradi godinama
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-text-600 max-w-3xl mx-auto font-light leading-relaxed">
          Tokom više od decenije rada, postali smo partneri brojnim kompanijama, od malih preduzeća do velikih industrijskih kompleksa. Naša najbolja reklama su čisti prostori i zadovoljni klijenti.
        </p>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12">
        {TRUST_POINTS.map((text) => (
          <CheckBadge key={text} text={text} />
        ))}
      </div>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className="bg-surface-50 p-5 sm:p-6 rounded-card border border-border-200 flex flex-col"
          >
            <LuQuote className="text-2xl text-brand-500/40 mb-3 flex-shrink-0" />
            <blockquote className="text-base text-text-700 leading-relaxed mb-4 flex-1 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="text-sm font-semibold text-text-900 pt-3 border-t border-border-200">
              — {testimonial.source}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default React.memo(Testimonials);
