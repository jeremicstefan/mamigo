import React from 'react';
import { LuChevronDown, LuCheckCircle } from 'react-icons/lu';
import MarketingButton from '../MarketingButton';
import { useContactForm } from '../../hooks/useContactForm';
import { SERVICE_OPTIONS } from '../../constants/services';

const INPUT_CLASSES =
  'w-full px-3 py-2.5 md:px-4 md:py-3 text-base border border-border-200 rounded-input bg-surface-0 text-text-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all';
const INPUT_ERROR_CLASSES = 'border-red-500 focus:ring-red-500 focus:border-red-500';

const ContactForm = () => {
  const { formData, errors, status, handleChange, handleSubmit, resetStatus } =
    useContactForm();

  if (status === 'success') {
    return (
      <div className="bg-surface-0 p-4 sm:p-5 lg:p-8 rounded-card border border-border-200 shadow-card h-fit w-full lg:flex-1 lg:min-w-0">
        <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
          <LuCheckCircle className="w-12 h-12 text-brand-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-900 mb-2">
            Hvala na poruci!
          </h3>
          <p className="text-base text-text-600 mb-6">
            Kontaktiraćemo Vas uskoro.
          </p>
          <MarketingButton variant="secondary" onClick={resetStatus}>
            Pošalji novu poruku
          </MarketingButton>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-0 p-4 sm:p-5 lg:p-8 rounded-card border border-border-200 shadow-card h-fit w-full lg:flex-1 lg:min-w-0">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-900 mb-4 sm:mb-6">
        Zatražite besplatnu ponudu
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-900 mb-1">
            Ime i prezime *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`${INPUT_CLASSES} ${errors.name ? INPUT_ERROR_CLASSES : ''}`}
            placeholder="Vaše ime i prezime"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-900 mb-1">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`${INPUT_CLASSES} ${errors.email ? INPUT_ERROR_CLASSES : ''}`}
            placeholder="vas.email@primer.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-900 mb-1">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={INPUT_CLASSES}
            placeholder="+381 XX XXX XXXX"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text-900 mb-1">
            Vrsta usluge čišćenja
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`${INPUT_CLASSES} pr-10 appearance-none`}
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <LuChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-600 pointer-events-none" aria-hidden />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-900 mb-1">
            Poruka *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className={`${INPUT_CLASSES} ${errors.message ? INPUT_ERROR_CLASSES : ''}`}
            placeholder="Opišite Vaše potrebe čišćenja..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          ></textarea>
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-600 text-center" role="alert">
            Došlo je do greške pri slanju. Molimo pokušajte ponovo.
          </p>
        )}

        <MarketingButton type="submit" className="w-full" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Slanje...' : 'Pošalji poruku'}
        </MarketingButton>
      </form>
    </div>
  );
};

export default ContactForm;
