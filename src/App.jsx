import React, { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import MarketingButton from './components/MarketingButton';
import logo from './assets/hero/mamigo-hausmeister-logo 1.png';

const LANGUAGES = [
  { code: 'sr', label: '🇷🇸' },
  { code: 'de', label: '🇩🇪' },
  { code: 'en', label: '🇬🇧' },
];

const NAV_LINKS = [
  { href: '#services', label: 'Usluge' },
  { href: '#about', label: 'O nama' },
  { href: '#contact', label: 'Kontakt' },
];

function App() {
  const [lang, setLang] = useState('sr');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    setMobileMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-surface-0">
      {/* Navigation Header: logo left, nav center, phone + lang right */}
      <nav className="fixed top-0 w-full bg-surface-0/60 backdrop-blur-sm border-b border-border-200/50 z-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-20 md:h-28 gap-4">
            {/* Left: logo */}
            <div className="flex items-center justify-start min-w-0">
              <a href="#" className="flex-shrink-0 flex items-center" aria-label="MAMIGO Hausmeister - početna">
                <img src={logo} alt="MAMIGO Hausmeister" className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
              </a>
            </div>

            {/* Center: nav links - fixed width, centered (desktop) */}
            <div className="hidden md:flex flex-1 items-center justify-center min-w-0">
              <div className="flex items-center gap-1">
                {NAV_LINKS.map(({ href, label }) => (
                  <a key={href} href={href} className="text-text-600 hover:text-text-900 px-4 py-2 rounded-button text-sm font-medium transition-colors hover:bg-surface-50 w-24 text-center">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: phone + language switcher + mobile menu button */}
            <div className="flex items-center justify-end gap-4 min-w-0">
              <a href="tel:+38163332833" className="hidden sm:inline-flex text-sm font-semibold text-text-900 hover:text-brand-500 transition-colors whitespace-nowrap">
                +381 63 33 28 33
              </a>
              <div className="hidden sm:flex rounded-lg border border-border-200 overflow-hidden bg-surface-50" role="group" aria-label="Jezik">
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
              <button
                type="button"
                onClick={() => setMobileMenuOpen((o) => !o)}
                className="md:hidden ml-auto p-2 -m-2 rounded-button text-text-900 hover:bg-surface-50 touch-manipulation"
                aria-label={mobileMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu - drops below nav */}
      {mobileMenuOpen && (
        <>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            aria-label="Zatvori meni"
          />
          <div
            className="fixed left-0 right-0 top-20 z-50 md:hidden bg-surface-0 shadow-xl border-b border-border-200 px-4 py-3 flex flex-col gap-1"
            aria-hidden="false"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollToSection(href); }}
                className="block py-2.5 px-3 text-sm font-medium text-text-900 hover:bg-surface-50 rounded-button touch-manipulation"
              >
                {label}
              </a>
            ))}
            <a
              href="tel:+38163332833"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1 py-3 px-4 text-sm font-semibold text-brand-500 hover:bg-surface-50 rounded-button touch-manipulation border-t border-border-200 pt-3"
            >
              +381 63 33 28 33
            </a>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="flex min-h-0 flex-1 flex-col pt-20 md:pt-28">
        <Hero onContactClick={scrollToContact} />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
