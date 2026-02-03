import React from 'react';
import { LuCheckCircle } from 'react-icons/lu';

const points = [
  'Standardizovane procedure i kontrolne liste',
  'Nemački standard kvaliteta',
  'Iskusni i stalno zaposleni tim',
  'Rad za firme, zgrade i upravnike objekata',
];

const ServiceGuarantee = () => (
  <section className="py-12 lg:py-16 bg-surface-0 border-t border-border-200">
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-text-900 mb-4 text-center">
        Zašto nam klijenti veruju
      </h2>
      <p className="text-base lg:text-lg text-text-600 text-center mb-6 leading-relaxed max-w-none">
        Sve naše usluge uključuju profesionalni pristup, poštovanje rokova i posvećenost svakom projektu.
      </p>
      <div className="flex flex-wrap justify-center gap-3 w-full">
        {points.map((text) => (
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
  </section>
);

export default ServiceGuarantee;
