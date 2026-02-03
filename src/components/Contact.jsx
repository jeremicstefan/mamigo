import React, { useState, useEffect } from 'react';
import { LuPhone, LuHelpCircle, LuCheckCircle, LuChevronDown } from 'react-icons/lu';
import MarketingButton from './MarketingButton';
import logo from '../assets/hero/mamigo-hausmeister-logo.png';

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Da li radite vikendom?', acceptedAnswer: { '@type': 'Answer', text: 'Da, po dogovoru radimo i vikendom.' } },
    { '@type': 'Question', name: 'Da li izdajete fakturu?', acceptedAnswer: { '@type': 'Answer', text: 'Da, izdajemo fakturu za sve izvršene usluge.' } },
    { '@type': 'Question', name: 'Koliko traje čišćenje garaže?', acceptedAnswer: { '@type': 'Answer', text: 'U zavisnosti od veličine i stanja, od nekoliko sati do jednog dana.' } },
  ],
};

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(FAQ_SCHEMA);
    script.id = 'faq-schema';
    if (!document.getElementById('faq-schema')) document.head.appendChild(script);
    return () => {
      const el = document.getElementById('faq-schema');
      if (el) el.remove();
    };
  }, []);
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
    <section id="contact" className="flex min-h-0 flex-1 flex-col justify-start items-center pt-10 sm:pt-12 lg:pt-ds-20 pb-0 bg-surface-0 relative overflow-hidden scroll-mt-14 md:scroll-mt-20">
      <div className="relative z-10 flex flex-col justify-start items-center w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - centered */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-ds-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-900 mb-4 sm:mb-6 leading-tight">
            Kontaktirajte nas
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-600 max-w-3xl mx-auto font-light leading-relaxed">
            Spremni smo da odgovorimo na sva Vaša pitanja i pružimo besplatnu procenu za Vaše potrebe čišćenja
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-ds-12 h-fit w-full">
          {/* Contact Information: Serbia first (active); Germany below as disabled / social proof */}
          <div className="flex flex-col justify-start gap-5 sm:gap-6 lg:gap-8 w-full max-w-lg lg:max-w-none text-left">
            {/* Srbija — active contact */}
            <div className="bg-surface-0 p-4 sm:p-5 lg:p-6 rounded-card border border-border-200 shadow-card">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-900 mb-4 sm:mb-5 lg:mb-6 flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl" aria-hidden>🇷🇸</span>
                Srbija
              </h3>
              <dl className="space-y-2 sm:space-y-3">
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
            <div className="bg-surface-50 p-4 sm:p-5 lg:p-6 rounded-card border border-border-200 opacity-75 pointer-events-none select-none mt-0" aria-hidden="false">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-500 mb-4 sm:mb-5 lg:mb-6 flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl" aria-hidden>🇩🇪</span>
                Nemačka
              </h3>
              <dl className="space-y-2 sm:space-y-3 text-text-500">
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
            <div className="bg-surface-0 p-4 sm:p-5 lg:p-6 rounded-card border border-border-200 shadow-card flex flex-wrap items-start justify-center text-center py-5 sm:py-6 mt-0">
              <img src={logo} alt="MAMIGO Hausmeister" className="h-24 sm:h-28 lg:h-[140px] w-auto object-contain mx-auto" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-0 p-4 sm:p-5 lg:p-8 rounded-card border border-border-200 shadow-card h-fit w-full max-w-lg lg:max-w-none">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-900 mb-4 sm:mb-6">
              Zatražite besplatnu ponudu
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
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
                  Vrsta usluge čišćenja
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClasses} pr-10 appearance-none`}
                  >
                    <option value="">Izaberite vrstu usluge čišćenja</option>
                    <option value="pre-opening">Maloprodajni objekti</option>
                    <option value="residential-buildings">Stambene zgrade</option>
                    <option value="warehouse">Magacinski prostori i hale</option>
                    <option value="garage">Garažni prostori</option>
                    <option value="commercial">Poslovni prostor</option>
                    <option value="other">Ostalo</option>
                  </select>
                  <LuChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-600 pointer-events-none" aria-hidden />
                </div>
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
          </div>
        </div>

        {/* Full width under both columns: checkmarked badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 w-full">
          {['Odgovaramo u roku od 24h', 'Bez obaveze', 'Moguće je poslati i slike prostora', 'Pouzdan i profesionalan servis'].map((text) => (
            <span
              key={text}
              className="inline-flex items-center gap-2 bg-brand-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-badge text-xs sm:text-sm font-semibold text-text-900 border border-border-200"
            >
              <LuCheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* FAQ - full width, lots of space above/below */}
      <div className="max-w-container w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-16 pb-0 mt-10 sm:mt-12 lg:mt-16 mb-10 sm:mb-12 lg:mb-16 border-t border-border-200">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-900 mb-6 sm:mb-8 lg:mb-10 text-left">
          Često postavljana pitanja
        </h2>
        <div className="w-full max-w-full divide-y divide-border-200">
          <article className="flex gap-3 sm:gap-4 py-4 sm:py-5 lg:py-6 first:pt-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <div className="flex-shrink-0 mt-1">
              <LuHelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-brand-500" aria-hidden />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-text-900 mb-1.5 sm:mb-2" itemProp="name">Da li radite vikendom?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-base text-text-600 leading-relaxed" itemProp="text">Da, po dogovoru radimo i vikendom.</p>
              </div>
            </div>
          </article>
          <article className="flex gap-3 sm:gap-4 py-4 sm:py-5 lg:py-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <div className="flex-shrink-0 mt-1">
              <LuHelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-brand-500" aria-hidden />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-text-900 mb-1.5 sm:mb-2" itemProp="name">Da li izdajete fakturu?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-base text-text-600 leading-relaxed" itemProp="text">Da, izdajemo fakturu za sve izvršene usluge.</p>
              </div>
            </div>
          </article>
          <article className="flex gap-3 sm:gap-4 py-4 sm:py-5 lg:py-6 last:pb-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <div className="flex-shrink-0 mt-1">
              <LuHelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-brand-500" aria-hidden />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-text-900 mb-1.5 sm:mb-2" itemProp="name">Koliko traje čišćenje garaže?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-base text-text-600 leading-relaxed" itemProp="text">U zavisnosti od veličine i stanja, od nekoliko sati do jednog dana.</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Bottom CTA - Full-width dark theme; flex-1 fills any gap so no white space below */}
      <div className="mt-10 sm:mt-12 lg:mt-ds-16 flex-1 w-full pt-10 sm:pt-12 lg:pt-16 xl:pt-24 pb-10 sm:pb-12 lg:pb-ds-12 xl:pb-ds-20 bg-text-900 border-t border-text-800 flex flex-col justify-center min-h-0">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-ds-4">
            Spremni za saradnju?
          </h3>
          <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-ds-6 leading-relaxed max-w-2xl mx-auto">
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
          <p className="mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 border-t border-white/10 text-xs md:text-sm text-white/50">
            © {new Date().getFullYear()} MAMIGO Hausmeister. Profesionalno čišćenje – Beograd i Srbija.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
