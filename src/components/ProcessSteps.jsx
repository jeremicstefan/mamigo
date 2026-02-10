import React from 'react';
import { LuClipboardCheck, LuTruck, LuCheckCircle } from 'react-icons/lu';

const steps = [
  {
    icon: LuClipboardCheck,
    title: 'Besplatna procena',
    description: 'Dolazimo na lice mesta ili procenu radimo na osnovu slika.',
  },
  {
    icon: LuTruck,
    title: 'Dolazak ekipe i opreme',
    description: 'Naš tim dolazi sa kompletnom profesionalnom opremom.',
  },
  {
    icon: LuCheckCircle,
    title: 'Predaja čistog prostora',
    description: 'Prostor vraćamo u savršeno stanje, bez vašeg angažovanja.',
  },
];

const ProcessSteps = () => (
  <section className="py-10 sm:py-12 lg:py-20 bg-surface-0 border-t border-border-200">
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-900 mb-6 sm:mb-8 lg:mb-12 text-center">
        Kako funkcioniše
      </h2>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 [&>*]:min-w-[200px] [&>*]:flex-1 [&>*]:max-w-[360px]">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-100 text-brand-500 mb-3 sm:mb-4">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-text-900 mb-1.5 sm:mb-2">{title}</h3>
            <p className="text-sm sm:text-base text-text-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default React.memo(ProcessSteps);
