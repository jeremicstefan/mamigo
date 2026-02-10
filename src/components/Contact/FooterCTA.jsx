import React from 'react';
import { LuPhone } from 'react-icons/lu';
import MarketingButton from '../MarketingButton';
import { SERBIA_CONTACT, COMPANY_NAME } from '../../constants/contact';

const FooterCTA = () => (
  <div className="mt-10 sm:mt-12 lg:mt-ds-16 flex-1 w-full pt-10 sm:pt-12 lg:pt-16 xl:pt-24 pb-10 sm:pb-12 lg:pb-ds-12 xl:pb-ds-20 bg-text-900 border-t border-text-800 flex flex-col justify-center min-h-0">
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-ds-4">
        Pridružite se desetinama zadovoljnih kompanija
      </h3>
      <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-ds-6 leading-relaxed max-w-2xl mx-auto">
        Poveravaju nam svoju higijenu još od 2014. godine. Do čiste kancelarije vas deli samo jedan&nbsp;klik.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
        <MarketingButton
          href="#contact"
          className="w-full sm:w-auto !bg-brand-500 !text-white hover:!bg-brand-600 !border-brand-500"
        >
          Pošaljite zahtev za saradnju
        </MarketingButton>
        <MarketingButton
          variant="secondary"
          href={SERBIA_CONTACT.phone.href}
          icon={<LuPhone className="w-5 h-5 text-brand-500" />}
          className="w-full sm:w-auto !border-white/30 !text-white hover:!bg-white/10"
        >
          {SERBIA_CONTACT.phone.display}
        </MarketingButton>
      </div>
      <p className="mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 border-t border-white/10 text-xs md:text-sm text-white/50">
        &copy; {new Date().getFullYear()} {COMPANY_NAME}. Profesionalno čišćenje – Beograd i Srbija.
      </p>
    </div>
  </div>
);

export default React.memo(FooterCTA);
