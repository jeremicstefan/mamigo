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
  <section className="py-12 lg:py-20 bg-surface-0 border-t border-border-200">
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-text-900 mb-10 lg:mb-12 text-center">
        Kako funkcioniše
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-500 mb-4">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-text-900 mb-2">{title}</h3>
            <p className="text-base text-text-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
