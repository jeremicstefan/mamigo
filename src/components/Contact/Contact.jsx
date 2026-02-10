import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import FAQ from './FAQ';
import FooterCTA from './FooterCTA';
import CheckBadge from '../UI/CheckBadge';

const TRUST_BADGES = [
  'Odgovaramo u roku od 24h',
  'Bez obaveze',
  'Moguće je poslati i slike prostora',
  'Pouzdan i profesionalan servis',
];

const Contact = () => (
  <section
    className="flex min-h-0 flex-1 flex-col justify-start items-center pt-10 sm:pt-12 lg:pt-ds-20 pb-0 bg-surface-0 relative overflow-hidden scroll-mt-14 md:scroll-mt-20"
    aria-label="Kontakt"
  >
    <div className="relative z-10 flex flex-col justify-start items-center w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-ds-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-900 mb-4 sm:mb-6 leading-tight">
          Dogovorite besplatnu konsultaciju
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-text-600 max-w-3xl mx-auto font-light leading-relaxed">
          Spremni ste da vaš prostor zablista? Naš tim stručnjaka je spreman da napravi plan održavanja specifično za vaše potrebe.
        </p>
      </div>

      {/* Two columns layout */}
      <div className="w-full max-w-2xl mx-auto lg:max-w-none lg:mx-0">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-ds-12 h-fit w-full">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 w-full">
        {TRUST_BADGES.map((text) => (
          <CheckBadge
            key={text}
            text={text}
            iconClassName="w-4 h-4 text-brand-500 flex-shrink-0"
          />
        ))}
      </div>
    </div>

    <FAQ />
    <FooterCTA />
  </section>
);

export default Contact;
