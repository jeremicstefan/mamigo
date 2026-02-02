import React from 'react';
import { LuCheck } from 'react-icons/lu';

const About = () => {
  const achievements = [
    {
      number: '2014',
      label: 'Godina osnivanja',
      description: 'Početak naše priče sa fokusom na kvalitet'
    },
    {
      number: '30+',
      label: 'Stručnih zaposlenih',
      description: 'Tim iskusnih profesionalaca'
    },
    {
      number: '🇩🇪',
      label: 'Nemački standardi',
      description: 'Kvalitet i preciznost u svakom detalju'
    },
    {
      number: '100%',
      label: 'Zadovoljnih klijenata',
      description: 'Pouzdanost i poverenje koje gradimo'
    }
  ];

  const values = [
    { title: 'Profesionalni pristup', desc: 'Sistematičan i pažljiv rad' },
    { title: 'Poštovanje rokova', desc: 'Pouzdanost i tačnost' },
    { title: 'Posvećenost projektu', desc: 'Fokus na rezultate' },
    { title: 'Nemački standardi', desc: 'Kvalitet iznad svega' },
  ];

  return (
    <section id="about" className="py-8 md:py-12 lg:py-20 bg-surface-50 relative overflow-hidden scroll-mt-16 md:scroll-mt-24">
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-text-900 mb-3 md:mb-6 leading-tight">
              O nama
            </h2>
            <h3 className="text-base md:text-xl lg:text-2xl text-text-600 font-semibold mb-3 md:mb-4 leading-snug">
              Naša priča – Porodična kompanija sa dugogodišnjim iskustvom
            </h3>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-text-600 mb-4 md:mb-6 leading-relaxed">
              <p>
                Mamigo je porodična kompanija koja posluje od 2014. godine,
                pružajući profesionalne usluge čišćenja po najvišim nemačkim standardima kvaliteta.
              </p>
              <p>
                Sa dugogodišnjim iskustvom u Nemačkoj, sada donosimo istu posvećenost,
                profesionalni pristup i poštovanje rokova u Srbiji. Naš tim od preko 30
                stručnih zaposlenih garantuje da svaki projekat bude završen na vreme i
                po najvišim standardima.
              </p>
            </div>

            {/* Trust Statement */}
            <div className="p-4 md:p-6 rounded-card mb-4 md:mb-6 border-l-4 border-l-brand-500 bg-surface-0">
              <blockquote className="text-sm md:text-base text-text-900 font-medium italic leading-relaxed">
                "Poverenje klijenata gradimo profesionalnim radom i poštovanjem dogovora.
                Svaki projekat tretiramo sa punom pažnjom i posvećenošću."
              </blockquote>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {values.map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-2 md:gap-3">
                  <LuCheck className="mt-1 text-base md:text-xl text-brand-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-text-900">{title}</h4>
                    <p className="text-xs md:text-sm text-text-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Achievements Grid */}
          <div>
            <h3 className="text-base md:text-xl lg:text-2xl font-bold text-text-900 mb-4 md:mb-6 text-center leading-snug">
              Naši rezultati
            </h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-surface-0 p-4 md:p-6 rounded-card text-center shadow-card hover:shadow-card-hover transition-shadow border border-border-200"
                >
                  <div className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 text-brand-500">
                    {achievement.number}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-text-900 mb-0.5 md:mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-xs md:text-sm text-text-600">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Location Info */}
            <div className="mt-4 md:mt-6 bg-surface-0 p-4 md:p-6 rounded-card shadow-card border border-border-200">
              <h4 className="text-sm md:text-base font-semibold text-text-900 mb-2 md:mb-3 flex items-center gap-2">
                <span className="text-base md:text-xl">📍</span>
                Sedište Beograd – sada čistimo ceo region
              </h4>
              <p className="text-sm md:text-base text-text-600 leading-relaxed">
                Sa našim iskustvom iz Nemačke, pokrivamo celu Srbiju pružajući
                iste visoke standarde kvaliteta svim našim klijentima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
