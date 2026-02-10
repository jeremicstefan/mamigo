import React from 'react';
import PropTypes from 'prop-types';
import { LuPhone } from 'react-icons/lu';
import { SERBIA_CONTACT } from '../../constants/contact';
import BeforeAfterSlider from '../BeforeAfterSlider';
import MarketingButton from '../MarketingButton';
import PartnerCarousel from './PartnerCarousel';
import { beforeAfterPairs } from '../../data/beforeAfterPairs';

const Hero = ({ onContactClick }) => {
  const heroPair = beforeAfterPairs[0];

  const heroContent = (
    <>
      {/* German standard above headline */}
      <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
        <span className="text-xl" aria-hidden>🇩🇪</span>
        <span className="text-sm font-semibold text-white/90 tracking-wide">
          Nemački standard
        </span>
      </div>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none sm:leading-tight tracking-tight text-white mb-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
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
          href={SERBIA_CONTACT.phone.href}
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
      {/* HERO: before/after slider on all viewports + overlay + content */}
      <section className="relative w-full overflow-hidden">
        <div className="relative min-h-[50vh] md:min-h-[55vh] lg:min-h-[70vh]">
          {/* Before/after slider – mobile and desktop */}
          <div className="absolute inset-0 z-0">
            <BeforeAfterSlider
              beforeSrc={heroPair.beforeSrc}
              afterSrc={heroPair.afterSrc}
              initialPosition={50}
              variant="hero"
            />
          </div>

          {/* Overlay: uniform 40% dark across the whole hero */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{ background: 'rgba(0,0,0,0.4)' }}
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

      <PartnerCarousel />
    </>
  );
};

Hero.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};

export default Hero;
