import React from 'react';
import { LuCalendar, LuUsers, LuCheckCircle, LuPhone } from 'react-icons/lu';
import BeforeAfterSlider from './BeforeAfterSlider';
import MarketingButton from './MarketingButton';
import { beforeAfterPairs } from '../data/beforeAfterPairs';
import belgradeAirportGrayscale from '../assets/partners/belgrade-airport-grayscale.png';
import transnaftaLogo from '../assets/partners/transnafta.png';
import siemensLogo from '../assets/partners/siemens.png';
import savaCentarLogo from '../assets/partners/sava-centar.png';

const LOGO_HEIGHT = 176;
const LOGO_WIDTH = 300;

const Hero = ({ onContactClick }) => {
  const heroPair = beforeAfterPairs[0];
  const partnerLogos = [
    { name: 'Belgrade Airport', src: belgradeAirportGrayscale, href: 'https://www.beg.aero' },
    { name: 'Transnafta', src: transnaftaLogo, href: 'https://www.transnafta.rs' },
    { name: 'Siemens', src: siemensLogo, href: 'https://www.siemens.com' },
    { name: 'Sava Centar', src: savaCentarLogo, href: 'https://www.savacentar.rs' },
  ];

  const heroContent = (
    <>
      {/* German standard above headline */}
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-white/40 bg-white/5 backdrop-blur-md">
        <span className="text-xl" aria-hidden>🇩🇪</span>
        <span className="text-sm font-semibold text-white/90 tracking-wide">
          Nemački standard
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-5">
        Profesionalno čišćenje{' '}
        <span className="text-brand-500">bez komplikacija.</span>
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
    </>
  );

  return (
    <>
      {/* HERO: mobile = static image + overlay + content; desktop = slider + overlay + content */}
      <section className="relative w-full overflow-hidden">
        <div className="relative min-h-[50vh] md:min-h-[55vh] lg:min-h-[70vh]">
          {/* Mobile: static hero image (slider disabled) */}
          <div className="absolute inset-0 z-0 md:hidden">
            <img
              src={heroPair.afterSrc}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-left"
              loading="eager"
            />
          </div>

          {/* Desktop: before/after slider */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <BeforeAfterSlider
              beforeSrc={heroPair.beforeSrc}
              afterSrc={heroPair.afterSrc}
              initialPosition={75}
              variant="hero"
            />
          </div>

          {/* Overlay: gradient so text is readable on both mobile and desktop */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.08) 100%)',
            }}
          />

          {/* Hero content: overlaid on both mobile and desktop */}
          <div className="relative z-10 flex flex-col justify-center min-h-[50vh] md:min-h-[55vh] lg:min-h-[70vh] px-4 sm:px-6 lg:px-8 pointer-events-none">
            <div className="max-w-container mx-auto w-full">
              <div className="max-w-xl pt-10 pb-10 lg:pt-16 lg:pb-16 pointer-events-auto">
                {heroContent}
              </div>
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
            <div className="flex items-center animate-scroll" style={{ width: 'fit-content', minHeight: LOGO_HEIGHT, gap: 12 }}>
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
                <a
                  key={`partner-${partner.name}-${index}`}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                  style={{ height: LOGO_HEIGHT, width: LOGO_WIDTH }}
                  aria-label={partner.name}
                >
                  <img
                    src={partner.src}
                    alt=""
                    className="max-h-full max-w-full w-auto h-auto object-contain object-center"
                    style={{ height: LOGO_HEIGHT, width: LOGO_WIDTH }}
                    aria-hidden
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
