import React from 'react';
import { LuCheckCircle } from 'react-icons/lu';
import MarketingButton from './MarketingButton';
import BeforeAfterSlider from './BeforeAfterSlider';
import { SERVICES } from '../constants/services';

const Services = () => (
  <section className="py-10 sm:py-12 lg:py-20 bg-surface-0 relative overflow-hidden scroll-mt-14 md:scroll-mt-20" aria-label="Usluge">
    <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-10 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-900 mb-4 sm:mb-6 leading-tight">
          Naše usluge čišćenja
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-text-600 max-w-3xl mx-auto font-light leading-relaxed px-0">
          Specijalizovani za industrijske, poslovne i stambene objekte – sa opremom i standardima iz Nemačke
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        {SERVICES.map((service) => {
          const IconComponent = service.icon;
          const hasBeforeAfter = service.beforeSrc && service.afterSrc;

          return (
            <div
              key={service.id}
              className="bg-surface-0 rounded-card shadow-card border border-border-200 overflow-hidden hover:shadow-card-hover transition-all duration-300 group flex flex-col"
            >
              {/* Service header: before/after slider or icon */}
              {hasBeforeAfter ? (
                <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 bg-surface-50 overflow-hidden rounded-t-card">
                  <BeforeAfterSlider
                    beforeSrc={service.beforeSrc}
                    afterSrc={service.afterSrc}
                    initialPosition={75}
                    variant="card"
                    fillHeight
                    introWhenVisible
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
              <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-900 mb-3 sm:mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-text-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6 lg:mb-8">
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
                <MarketingButton className="w-full mt-auto">
                  Zatraži ponudu
                </MarketingButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
