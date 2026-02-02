import React, { useState } from 'react';
import { LuPhone, LuMail } from 'react-icons/lu';
import MarketingButton from './MarketingButton';
import logo from '../assets/hero/mamigo-hausmeister-logo 1.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Hvala na poruci! Kontaktiraćemo Vas uskoro.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const inputClasses = `
    w-full px-3 py-2.5 md:px-4 md:py-3 text-base border border-border-200 rounded-input
    bg-surface-0 text-text-900
    focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500
    transition-all
  `.trim().replace(/\s+/g, ' ');

  return (
    <section id="contact" className="flex min-h-0 flex-1 flex-col pt-ds-12 lg:pt-ds-20 pb-0 bg-surface-0 relative overflow-hidden scroll-mt-14 md:scroll-mt-20">
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - centered */}
        <div className="text-center mb-ds-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-900 mb-6 leading-tight">
            Kontaktirajte nas
          </h2>
          <p className="text-lg md:text-xl text-text-600 max-w-3xl mx-auto font-light leading-relaxed">
            Spremni smo da odgovorimo na sva Vaša pitanja i pružimo besplatnu procenu za Vaše potrebe čišćenja
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-ds-12">
          {/* Contact Information: Serbia first (active); Germany below as disabled / social proof */}
          <div className="text-left space-y-10">
            {/* Srbija — active contact */}
            <div className="bg-surface-0 p-6 rounded-card border border-border-200 shadow-card">
              <h3 className="text-xl md:text-2xl font-bold text-text-900 mb-6 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>🇷🇸</span>
                Srbija
              </h3>
              <dl className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <dt className="text-sm font-medium text-text-600 sm:w-24 flex-shrink-0">Sedište</dt>
                  <dd className="text-base text-text-900">
                    Prvomajska 56/65; 11080 Beograd
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <dt className="text-sm font-medium text-text-600 sm:w-24 flex-shrink-0">Kancelarija</dt>
                  <dd className="text-base text-text-900">
                    Save Maškovića 5, 11041 Beograd
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <dt className="text-sm font-medium text-text-600 sm:w-24 flex-shrink-0">Telefon</dt>
                  <dd>
                    <a href="tel:+38163332833" className="text-base font-semibold text-brand-500 hover:text-brand-600 transition-colors">
                      +381 63 33 28 33
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <dt className="text-sm font-medium text-text-600 sm:w-24 flex-shrink-0">E-mail</dt>
                  <dd>
                    <a href="mailto:office@mamigotrockenbau.com" className="text-base font-semibold text-brand-500 hover:text-brand-600 transition-colors">
                      office@mamigotrockenbau.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Nemačka — disabled / social proof */}
            <div className="bg-surface-50 p-6 rounded-card border border-border-200 opacity-75 pointer-events-none select-none" aria-hidden="false">
              <h3 className="text-xl md:text-2xl font-bold text-text-500 mb-6 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>🇩🇪</span>
                Nemačka
              </h3>
              <dl className="space-y-3 text-text-500">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <dt className="text-sm font-medium text-text-500 sm:w-24 flex-shrink-0">Adresa</dt>
                  <dd className="text-base">
                    Südliche Münchner Str. 60 C, 81023 Grünwald
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <dt className="text-sm font-medium text-text-500 sm:w-24 flex-shrink-0">Telefon</dt>
                  <dd className="text-base">+49 176 30490422</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <dt className="text-sm font-medium text-text-500 sm:w-24 flex-shrink-0">E-mail</dt>
                  <dd className="text-base">office@mamigotrockenbau.com</dd>
                </div>
              </dl>
            </div>

            {/* Logo below Germany contact info */}
            <div className="bg-surface-0 p-6 rounded-card border border-border-200 shadow-card flex flex-wrap items-start justify-center text-center py-8">
              <img src={logo} alt="MAMIGO Hausmeister" className="h-[200px] w-auto object-contain mx-auto" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-0 p-8 rounded-card border border-border-200 shadow-card">
            <h3 className="text-xl md:text-2xl font-bold text-text-900 mb-6">
              Zatražite besplatnu ponudu
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
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
                  className={inputClasses}
                  placeholder="Vaše ime i prezime"
                />
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
                  className={inputClasses}
                  placeholder="vas.email@primer.com"
                />
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
                  className={inputClasses}
                  placeholder="+381 XX XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-text-900 mb-1">
                  Vrsta usluge
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Izaberite uslugu</option>
                  <option value="pre-opening">Čišćenje maloprodajnih objekata</option>
                  <option value="residential-buildings">Čišćenje stambenih zgrada</option>
                  <option value="warehouse">Čišćenje magacinskih prostora i hala</option>
                  <option value="garage">Čišćenje garažnih prostora</option>
                  <option value="other">Ostalo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-900 mb-1">
                  Poruka
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={inputClasses}
                  placeholder="Opišite Vaše potrebe čišćenja..."
                ></textarea>
              </div>

              <MarketingButton type="submit" className="w-full">
                Pošalji poruku
              </MarketingButton>
            </form>

            <p className="text-sm text-text-600 mt-4">
              * Obavezna polja. Kontaktiraćemo Vas u roku od 24 sata.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA - Full-width dark theme; flex-1 fills any gap so no white space below */}
      <div className="mt-ds-16 flex-1 w-full pt-16 lg:pt-24 pb-ds-12 lg:pb-ds-20 bg-text-900 border-t border-text-800 flex flex-col justify-center min-h-0">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-ds-4">
            Spremni za saradnju?
          </h3>
          <p className="text-base text-white/80 mb-ds-6 leading-relaxed max-w-2xl mx-auto">
            Pozovite nas odmah ili pošaljite poruku. Naši stručnjaci će Vam pružiti
            besplatnu procenu i odgovoriti na sva pitanja.
          </p>
          <MarketingButton
            variant="secondary"
            href="tel:+38163332833"
            icon={<LuPhone className="w-5 h-5 text-brand-500" />}
            className="!border-white/30 !text-white hover:!bg-white/10"
          >
            +381 63 33 28 33
          </MarketingButton>
          <p className="mt-8 md:mt-12 pt-6 border-t border-white/10 text-xs md:text-sm text-white/50">
            © {new Date().getFullYear()} MAMIGO Hausmeister. Profesionalno čišćenje – Beograd i Srbija.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
