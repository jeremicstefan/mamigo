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
      <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
        <span className="text-xl" aria-hidden>🇩🇪</span>
        <span className="text-sm font-semibold text-white/90 tracking-wide">
          Nemački standard
        </span>
      </div>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white mb-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
        Profesionalno čišćenje <span className="text-brand-500">bez komplikacija</span><span className="text-brand-500">.</span>
      </h1>
      <p className="text-lg sm:text-xl text-white font-semibold leading-relaxed max-w-xl [text-shadow:0_2px_4px_rgba(0,0,0,0.9),0_0_12px_rgba(0,0,0,0.8)]">
        Garaže, zgrade, poslovni, industrijski prostori.
      </p>
      <p className="text-lg sm:text-xl text-white font-semibold leading-relaxed mb-2 max-w-xl [text-shadow:0_2px_4px_rgba(0,0,0,0.9),0_0_12px_rgba(0,0,0,0.8)]">
        Beograd i ostatak Srbije.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
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
      <p className="text-sm text-white font-bold [text-shadow:0_2px_4px_rgba(0,0,0,0.9),0_0_12px_rgba(0,0,0,0.8)]">
        Dolazak za 24h · Besplatna procena · Račun za firme
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
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Desktop: before/after slider */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <BeforeAfterSlider
              beforeSrc={heroPair.beforeSrc}
              afterSrc={heroPair.afterSrc}
              initialPosition={50}
              variant="hero"
            />
          </div>

          {/* Overlay: 70% at center, fading to 50%, 25%, 0% toward edges */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 20%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.25) 80%, rgba(0,0,0,0) 100%)',
            }}
          />

          {/* Hero content: centered on both mobile and desktop */}
          <div className="relative z-10 flex flex-col justify-center items-center min-h-[50vh] md:min-h-[55vh] lg:min-h-[70vh] px-4 sm:px-6 lg:px-8 pointer-events-none">
            <div className="max-w-container mx-auto w-full flex flex-col items-center text-center">
              <div className="max-w-xl pt-10 pb-10 lg:pt-16 lg:pb-16 pointer-events-auto flex flex-col items-center text-center">
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
