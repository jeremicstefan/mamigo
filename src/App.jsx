import React, { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import MarketingButton from './components/MarketingButton';
import logo from './assets/hero/mamigo-hausmeister-spray-logo 1.png';

const LANGUAGES = [
  { code: 'sr', label: '🇷🇸' },
  { code: 'de', label: '🇩🇪' },
  { code: 'en', label: '🇬🇧' },
];

function App() {
  const [lang, setLang] = useState('sr');
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface-0">
      {/* Navigation Header: logo left, nav center, phone + lang right */}
      <nav className="fixed top-0 w-full bg-surface-0/60 backdrop-blur-sm border-b border-border-200/50 z-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-28 gap-4">
            {/* Left: logo */}
            <div className="flex items-center justify-start min-w-0">
              <a href="#" className="flex-shrink-0 flex items-center" aria-label="MAMIGO Hausmeister - početna">
                <img src={logo} alt="MAMIGO Hausmeister" className="h-20 sm:h-24 w-auto object-contain" />
              </a>
            </div>

            {/* Center: nav links - fixed width, centered */}
            <div className="hidden md:flex flex-1 items-center justify-center min-w-0">
              <div className="flex items-center gap-1">
                <a href="#services" className="text-text-600 hover:text-text-900 px-4 py-2 rounded-button text-sm font-medium transition-colors hover:bg-surface-50 w-24 text-center">
                  Usluge
                </a>
                <a href="#about" className="text-text-600 hover:text-text-900 px-4 py-2 rounded-button text-sm font-medium transition-colors hover:bg-surface-50 w-24 text-center">
                  O nama
                </a>
                <a href="#contact" className="text-text-600 hover:text-text-900 px-4 py-2 rounded-button text-sm font-medium transition-colors hover:bg-surface-50 w-24 text-center">
                  Kontakt
                </a>
              </div>
            </div>

            {/* Right: phone + language switcher */}
            <div className="flex items-center justify-end gap-4 min-w-0">
              <a href="tel:+38163332833" className="hidden sm:inline-flex text-sm font-semibold text-text-900 hover:text-brand-500 transition-colors whitespace-nowrap">
                +381 63 33 28 33
              </a>
              <div className="flex rounded-lg border border-border-200 overflow-hidden bg-surface-50" role="group" aria-label="Jezik">
                {LANGUAGES.map(({ code, label }) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    className={`px-2.5 py-1.5 text-base transition-all sm:px-3 sm:py-2 sm:text-lg ${lang === code ? 'bg-brand-500' : 'hover:bg-surface-100 opacity-60 hover:opacity-100'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="md:hidden">
                <MarketingButton onClick={scrollToContact} size="compact">
                  Kontakt
                </MarketingButton>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28">
        <Hero onContactClick={scrollToContact} />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
