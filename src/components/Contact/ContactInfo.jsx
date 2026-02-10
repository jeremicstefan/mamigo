import React from 'react';
import { SERBIA_CONTACT, GERMANY_CONTACT } from '../../constants/contact';
import logo from '../../assets/hero/mamigo-hausmeister-logo.png';

const ContactInfo = () => (
  <div className="flex flex-col justify-start gap-5 sm:gap-6 lg:gap-8 w-full lg:max-w-md lg:flex-shrink-0 text-left">
    {/* Srbija — active contact */}
    <div className="bg-surface-0 p-4 sm:p-5 lg:p-6 rounded-card border border-border-200 shadow-card">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-900 mb-4 sm:mb-5 lg:mb-6 flex items-center gap-2 sm:gap-3">
        <span className="text-xl sm:text-2xl" aria-hidden>🇷🇸</span>
        Srbija
      </h3>
      <dl className="space-y-2 sm:space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
          <dt className="text-sm font-medium text-text-600 sm:w-24 flex-shrink-0">{SERBIA_CONTACT.headquarters.label}</dt>
          <dd className="text-base text-text-900">{SERBIA_CONTACT.headquarters.address}</dd>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
          <dt className="text-sm font-medium text-text-600 sm:w-24 flex-shrink-0">{SERBIA_CONTACT.office.label}</dt>
          <dd className="text-base text-text-900">{SERBIA_CONTACT.office.address}</dd>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <dt className="text-sm font-medium text-text-600 sm:w-24 flex-shrink-0">Telefon</dt>
          <dd>
            <a href={SERBIA_CONTACT.phone.href} className="text-base font-semibold text-brand-500 hover:text-brand-600 transition-colors">
              {SERBIA_CONTACT.phone.display}
            </a>
          </dd>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <dt className="text-sm font-medium text-text-600 sm:w-24 flex-shrink-0">E-mail</dt>
          <dd>
            <a href={SERBIA_CONTACT.email.href} className="text-base font-semibold text-brand-500 hover:text-brand-600 transition-colors">
              {SERBIA_CONTACT.email.display}
            </a>
          </dd>
        </div>
      </dl>
    </div>

    {/* Nemačka — disabled / social proof */}
    <div className="bg-surface-50 p-4 sm:p-5 lg:p-6 rounded-card border border-border-200 opacity-75 pointer-events-none select-none mt-0" aria-hidden="false">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-500 mb-4 sm:mb-5 lg:mb-6 flex items-center gap-2 sm:gap-3">
        <span className="text-xl sm:text-2xl" aria-hidden>🇩🇪</span>
        Nemačka
      </h3>
      <dl className="space-y-2 sm:space-y-3 text-text-500">
        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
          <dt className="text-sm font-medium text-text-500 sm:w-24 flex-shrink-0">{GERMANY_CONTACT.address.label}</dt>
          <dd className="text-base">{GERMANY_CONTACT.address.address}</dd>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <dt className="text-sm font-medium text-text-500 sm:w-24 flex-shrink-0">Telefon</dt>
          <dd className="text-base">{GERMANY_CONTACT.phone.display}</dd>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <dt className="text-sm font-medium text-text-500 sm:w-24 flex-shrink-0">E-mail</dt>
          <dd className="text-base">{GERMANY_CONTACT.email.display}</dd>
        </div>
      </dl>
    </div>

    {/* Logo below Germany contact info */}
    <div className="bg-surface-0 p-4 sm:p-5 lg:p-6 rounded-card border border-border-200 shadow-card flex flex-wrap items-start justify-center text-center py-5 sm:py-6 mt-0">
      <img
        src={logo}
        alt="MAMIGO Hausmeister"
        className="h-24 sm:h-28 lg:h-[140px] w-auto object-contain mx-auto"
        loading="lazy"
        onError={(e) => { e.target.style.opacity = '0.3'; }}
      />
    </div>
  </div>
);

export default React.memo(ContactInfo);
