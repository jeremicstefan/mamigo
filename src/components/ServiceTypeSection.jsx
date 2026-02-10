import React from 'react';
import PropTypes from 'prop-types';
import { LuZap, LuCalendarCheck } from 'react-icons/lu';
import MarketingButton from './MarketingButton';

const ServiceTypeSection = ({ onContactClick }) => (
  <section className="py-10 sm:py-12 lg:py-20 bg-surface-50 border-t border-border-200">
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-900 mb-6 sm:mb-8 lg:mb-12 text-center">
        Jednokratno ili ugovorno čišćenje
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 w-full">
        <div className="bg-surface-0 p-4 sm:p-5 lg:p-8 xl:p-10 rounded-card border border-border-200 flex flex-col justify-center">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 min-h-[3rem]">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-500 flex-shrink-0">
              <LuZap className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-text-900">Jednokratno čišćenje</h3>
          </div>
          <ul className="space-y-2 sm:space-y-2.5 text-text-600 text-sm sm:text-base lg:text-lg list-disc list-outside pl-12 sm:pl-16 ml-0">
            <li className="pl-1">Idealno za hitne intervencije</li>
            <li className="pl-1">Generalno čišćenje</li>
            <li className="pl-1">Čišćenje nakon radova</li>
          </ul>
        </div>
        <div className="bg-surface-0 p-4 sm:p-5 lg:p-8 xl:p-10 rounded-card border border-border-200 flex flex-col justify-center">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 min-h-[3rem]">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-500 flex-shrink-0">
              <LuCalendarCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-text-900">Ugovorno održavanje</h3>
          </div>
          <ul className="space-y-2 sm:space-y-2.5 text-text-600 text-sm sm:text-base lg:text-lg list-disc list-outside pl-12 sm:pl-16 ml-0">
            <li className="pl-1">Redovno mesečno održavanje</li>
            <li className="pl-1">Stalni termini</li>
            <li className="pl-1">Povoljniji uslovi za firme i zgrade</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 sm:mt-8 lg:mt-10">
        <MarketingButton onClick={onContactClick}>Zatraži ponudu</MarketingButton>
      </div>
    </div>
  </section>
);

ServiceTypeSection.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};

export default React.memo(ServiceTypeSection);
