import React from 'react';
import { LuPhone } from 'react-icons/lu';
import BeforeAfterSlider from './BeforeAfterSlider';
import MarketingButton from './MarketingButton';
import { beforeAfterPairs } from '../data/beforeAfterPairs';
import belgradeAirportGrayscale from '../assets/partners/belgrade-airport-grayscale.webp';
import transnaftaLogo from '../assets/partners/transnafta.webp';
import siemensLogo from '../assets/partners/siemens.webp';
import savaCentarLogo from '../assets/partners/sava-centar.webp';

const LOGO_HEIGHT = 176;
const LOGO_WIDTH = 300;

const Hero = ({ onContactClick }) => {
  const heroPair = beforeAfterPairs[0];
  const partnerLogos = [
    { name: 'Belgrade Airport', src: belgradeAirportGrayscale },
    { name: 'Transnafta', src: transnaftaLogo },
    { name: 'Siemens', src: siemensLogo },
    { name: 'Sava Centar', src: savaCentarLogo },
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
        Profesionalno čišćenje <span className="text-brand-500">bez nerviranja</span><span className="text-brand-500">.</span>
      </h1>
      <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed mb-2 max-w-xl">
        Garaže, zgrade, poslovni i industrijski prostori — Beograd i cela Srbija.
      </p>
      <p className="text-sm text-white/90 font-medium mb-6">
        Dolazak za 24h · Besplatna procena · Račun za firme
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <MarketingButton onClick={onContactClick}>
          Zatraži ponudu
        </MarketingButton>
        <MarketingButton
          variant="secondary"
          href="tel:+38163332833"
          icon={<LuPhone className="w-5 h-5 text-brand-500" />}
          className="!bg-white/10 !backdrop-blur-md !border !border-white/40 !text-white hover:!bg-white/20"
        >
          Pozovi odmah
        </MarketingButton>
      </div>
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
              className="absolute inset-0 w-full h-full object-cover object-center"
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
      <section className="bg-surface-0 py-8 sm:py-10 lg:py-12 border-t border-border-200 overflow-hidden relative">
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6 lg:mb-8">
            <p className="text-sm text-text-600 font-medium uppercase tracking-wide">
              Saradjujemo sa
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-surface-0 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-surface-0 to-transparent" />
            <div className="flex items-center animate-scroll" style={{ width: 'fit-content', minHeight: LOGO_HEIGHT, gap: 12 }}>
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
                <span
                  key={`partner-${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center opacity-70"
                  style={{ height: LOGO_HEIGHT, width: LOGO_WIDTH }}
                  aria-hidden
                >
                  <img
                    src={partner.src}
                    alt=""
                    className="max-h-full max-w-full w-auto h-auto object-contain object-center"
                    style={{ height: LOGO_HEIGHT, width: LOGO_WIDTH }}
                    loading="lazy"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
