import React from 'react';
import { LuCheckCircle, LuStore, LuBuilding2, LuWarehouse, LuCar } from 'react-icons/lu';
import MarketingButton from './MarketingButton';
import BeforeAfterSlider from './BeforeAfterSlider';
import shopBefore from '../assets/hero/shop-before-1.png';
import shopAfter from '../assets/hero/shop-after-1.png';
import residentialBefore from '../assets/hero/residential-building-before-1.png';
import residentialAfter from '../assets/hero/residential-building-after-1.png';
import storageUnitBefore from '../assets/hero/storage-unit-before-1.png';
import storageUnitAfter from '../assets/hero/storage-unit-after-1.png';
import garageBefore from '../assets/hero/garage-before-1.png';
import garageAfter from '../assets/hero/garage-after-1.png';

const Services = () => {
  const services = [
    {
      id: 'pre-opening',
      title: 'Čišćenje maloprodajnih objekata',
      subtitle: 'Pre-Opening & Post-Renovation',
      description: 'Profesionalno čišćenje prostora pred otvaranja ili nakon renoviranja marketa, prodavnica ili lokala.',
      features: [
        'Priprema prostora za prvo otvaranje',
        'Čišćenje posle renovacionih radova',
        'Uklanjanje građevinske prašine i ostataka',
        'Finalno poliranje za predstavu klijentima'
      ],
      icon: LuStore,
      beforeSrc: shopBefore,
      afterSrc: shopAfter,
    },
    {
      id: 'residential-buildings',
      title: 'Čišćenje stambenih zgrada',
      subtitle: 'Residential Building Cleaning',
      description: 'Kompletno čišćenje stambenih zgrada od ulaza do krova, zajedničkih prostora, liftova, stepeništa i fasada.',
      features: [
        'Čišćenje zajedničkih prostora i ulaza',
        'Odžavanje liftova i stepeništa',
        'Čišćenje fasada i prozora',
        'Redovno održavanje krovova i terasa'
      ],
      icon: LuBuilding2,
      beforeSrc: residentialBefore,
      afterSrc: residentialAfter,
    },
    {
      id: 'warehouse',
      title: 'Čišćenje magacinskih prostora i hala',
      subtitle: 'Warehouse & Hall Cleaning',
      description: 'Specijalizovano čišćenje magacina, skladišta i industrijskih hala po najvišim standardima.',
      features: [
        'Dubinsko čišćenje skladišnih prostora',
        'Čišćenje industrijskih hala',
        'Redovno održavanje magacina',
        'Profesionalna oprema za velike površine'
      ],
      icon: LuWarehouse,
      beforeSrc: storageUnitBefore,
      afterSrc: storageUnitAfter,
    },
    {
      id: 'garage',
      title: 'Čišćenje garažnih prostora',
      subtitle: 'Garage Cleaning',
      description: 'Profesionalno čišćenje garaža, podzemnih parkinga i garažnih prostora.',
      features: [
        'Čišćenje podzemnih i nadzemnih garaža',
        'Održavanje parking prostora',
        'Uklanjanje ulja, prašine i prljavštine',
        'Redovno održavanje za čist i bezbedan prostor'
      ],
      icon: LuCar,
      beforeSrc: garageBefore,
      afterSrc: garageAfter,
    }
  ];

  return (
    <section id="services" className="py-12 lg:py-20 bg-surface-0 relative overflow-hidden scroll-mt-24">
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-900 mb-6 leading-tight">
            Naše usluge čišćenja
          </h2>
          <p className="text-lg md:text-xl text-text-600 max-w-3xl mx-auto font-light leading-relaxed">
            Pružamo profesionalne usluge čišćenja za sve vrste objekata sa fokusom na kvalitet i pouzdanost
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            const hasBeforeAfter = service.beforeSrc && service.afterSrc;
            
            return (
              <div
                key={service.id}
                className="bg-surface-0 rounded-card shadow-card border border-border-200 overflow-hidden hover:shadow-card-hover transition-all duration-300 group"
              >
                {/* Service header: before/after slider or icon */}
                {hasBeforeAfter ? (
                  <div className="relative h-80 bg-surface-50 overflow-hidden rounded-t-card">
                    <BeforeAfterSlider
                      beforeSrc={service.beforeSrc}
                      afterSrc={service.afterSrc}
                      initialPosition={75}
                      variant="card"
                      fillHeight
                      skipIntro
                    />
                  </div>
                ) : (
                  <div className="relative h-48 bg-surface-50 flex items-center justify-center p-8">
                    <div className="p-6 rounded-card bg-brand-100 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-6xl text-brand-500" />
                    </div>
                  </div>
                )}

                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-text-900 mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base text-text-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <LuCheckCircle className="mt-0.5 flex-shrink-0 text-lg text-brand-500" />
                        <span className="text-base text-text-600 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <MarketingButton className="w-full">
                    Zatraži ponudu
                  </MarketingButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-base text-text-600 mb-4 leading-relaxed">
            Sve naše usluge uključuju profesionalni pristup, poštovanje rokova i posvećenost svakom projektu.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Nemački standardi kvaliteta',
              'Iskusni stručnjaci',
              'Pouzdan i profesionalan servis'
            ].map((text) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 bg-brand-100 px-4 py-2 rounded-badge text-sm font-semibold text-text-900 border border-border-200"
              >
                <LuCheckCircle className="text-brand-500" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
