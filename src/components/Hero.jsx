import React from 'react';
import { LuCalendar, LuUsers, LuCheckCircle, LuPhone } from 'react-icons/lu';
import BeforeAfterSlider from './BeforeAfterSlider';
import MarketingButton from './MarketingButton';
import { beforeAfterPairs } from '../data/beforeAfterPairs';

const Hero = ({ onContactClick }) => {
  const heroPair = beforeAfterPairs[0];
  const companies = [
    'Siemens', 'Transnafta', 'Airport Nikola Tesla', 'Kongresszentrum Sava',
    'Weksviertel MK7', 'Bender Campus', 'Einkaufszentrum Erding', 'Kindergarten',
    'Rinker-Areal', 'Siemens', 'Transnafta', 'Airport Nikola Tesla',
  ];

  return (
    <>
      {/* HERO: full-width background with overlaid content */}
      <section className="relative w-full overflow-hidden min-h-[55vh] lg:min-h-[70vh]">
        {/* Background: full-bleed before/after slider */}
        <div className="absolute inset-0 z-0">
          <BeforeAfterSlider
            beforeSrc={heroPair.beforeSrc}
            afterSrc={heroPair.afterSrc}
            initialPosition={75}
            variant="hero"
          />
        </div>

        {/* Overlay: left-to-right gradient, stronger on left so text is more prominent */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.04) 100%)',
          }}
        />

        {/* Content layer: pointer-events-none so slider receives drag; only the text block captures events */}
        <div className="relative z-10 flex flex-col justify-center min-h-[55vh] lg:min-h-[70vh] px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="max-w-container mx-auto w-full">
            <div className="max-w-xl pt-10 pb-10 lg:pt-16 lg:pb-16 pointer-events-auto">
              {/* German standard above headline */}
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-white/40 bg-white/5 backdrop-blur-md">
                <span className="text-xl" aria-hidden>🇩🇪</span>
                <span className="text-sm font-semibold text-white/90 tracking-wide">
                  Nemački standard
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-5">
                Profesionalno čišćenje{' '}
                <span className="text-brand-500">bez nerviranja.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed mb-6 max-w-xl">
                Garaže, poslovni prostori, magacini i zgrade — Beograd i cela Srbija. Dođemo, očistimo, organizujemo, završimo.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                {[
                  { label: 'Od 2014', icon: LuCalendar },
                  { label: '30+ zaposlenih', icon: LuUsers },
                  { label: '100% zadovoljstvo', icon: LuCheckCircle },
                ].map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-badge text-sm font-semibold bg-white/5 backdrop-blur-md border border-white/40 text-white"
                  >
                    <Icon className="w-4 h-4 text-brand-500" />
                    {label}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <MarketingButton onClick={onContactClick}>
                  Zatraži ponudu
                </MarketingButton>
                <MarketingButton
                  variant="secondary"
                  href="tel:+38163332833"
                  icon={<LuPhone className="w-5 h-5 text-brand-500" />}
                  className="!bg-white/10 !backdrop-blur-md !border !border-white/40 !text-white hover:!bg-white/20"
                >
                  +381 63 33 28 33
                </MarketingButton>
              </div>
              <p className="text-sm text-white/80">
                Odgovaramo u roku od 24h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Carousel */}
      <section className="bg-surface-0 py-12 border-t border-border-200 overflow-hidden relative">
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-text-600 font-medium uppercase tracking-wide">
              Saradjujemo sa
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-surface-0 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-surface-0 to-transparent" />
            <div className="flex gap-16 items-center animate-scroll" style={{ width: 'fit-content' }}>
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`company-${index}`}
                  className="flex-shrink-0 px-4 py-2 text-text-600 font-medium text-base whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
