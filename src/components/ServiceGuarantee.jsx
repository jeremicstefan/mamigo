import React from 'react';
import CheckBadge from './UI/CheckBadge';

const GUARANTEE_POINTS = [
  'Standardizovane procedure i kontrolne liste',
  'Nemački standard kvaliteta',
  'Iskusni i stalno zaposleni tim',
  'Rad za firme, zgrade i upravnike objekata',
];

const ServiceGuarantee = () => (
  <section className="py-10 sm:py-12 lg:py-16 bg-surface-0 border-t border-border-200">
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-900 mb-3 sm:mb-4 text-center">
        Zašto nam klijenti veruju
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-text-600 text-center mb-4 sm:mb-6 leading-relaxed max-w-none">
        Sve naše usluge uključuju profesionalni pristup, poštovanje rokova i posvećenost svakom projektu.
      </p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full">
        {GUARANTEE_POINTS.map((text) => (
          <CheckBadge key={text} text={text} />
        ))}
      </div>
    </div>
  </section>
);

export default ServiceGuarantee;
