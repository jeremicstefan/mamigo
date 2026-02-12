import React from 'react';
import { LuCheck } from 'react-icons/lu';
import { ACHIEVEMENTS, VALUES } from '../constants/about';

const About = () => (
  <section className="py-10 sm:py-12 lg:py-20 bg-surface-50 relative overflow-hidden scroll-mt-14 md:scroll-mt-20" aria-label="O nama">
    <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
        {/* Left Column - Text Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-900 mb-4 sm:mb-6 leading-tight">
            O nama
          </h2>

          <h3 className="text-lg sm:text-xl md:text-2xl text-brand-600 font-semibold mb-3 sm:mb-4 leading-snug">
            Tradicija, Sigurnost i Nemačka Preciznost
          </h3>

          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-text-600 mb-4 sm:mb-6 leading-relaxed">
            <p>
              Osnovani kao <strong>porodična firma 2014. godine</strong>, naš put je bio vođen jednom vizijom: podići standarde čišćenja na Balkanu na nivo zapadnoevropskog kvaliteta.
            </p>
            <p>
              Ono što nas izdvaja od konkurencije je <strong>implementacija direktnog nemačkog iskustva</strong> u svakom segmentu našeg poslovanja:
            </p>
          </div>

          {/* Key Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            {VALUES.map(({ title, desc }) => (
              <div key={title} className="flex items-start gap-2 md:gap-3">
                <LuCheck className="mt-1 text-base md:text-xl text-brand-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-900">{title}</h4>
                  <p className="text-sm text-text-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Achievements Grid */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-900 mb-4 sm:mb-6 text-center leading-snug">
            Naši rezultati
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {ACHIEVEMENTS.map((achievement, index) => (
              <div
                key={index}
                className="bg-surface-0 p-4 sm:p-5 lg:p-6 rounded-card text-center shadow-card hover:shadow-card-hover transition-shadow border border-border-200"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-brand-500">
                  {achievement.number}
                </div>
                <div className="text-sm sm:text-base font-semibold text-text-900 mb-0.5 sm:mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs sm:text-sm text-text-600">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>

          {/* Location Info */}
          <div className="mt-4 sm:mt-6 bg-surface-0 p-4 sm:p-5 lg:p-6 rounded-card shadow-card border border-border-200">
            <h4 className="text-sm sm:text-base font-semibold text-text-900 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="text-base md:text-xl">📍</span>
              Sedište Beograd – pokrivamo celu Srbiju
            </h4>
            <p className="text-sm md:text-base text-text-600 leading-relaxed">
              Radimo sa stambenim zajednicama, upravnicima zgrada, firmama,
              maloprodajnim lancima, hotelima i industrijskim pogonima. Isti
              nemački standardi kvaliteta – gde god da se nalazite.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
