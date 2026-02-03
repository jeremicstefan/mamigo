import React, { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import Hero from './components/Hero';
import ProcessSteps from './components/ProcessSteps';
import Services from './components/Services';
import ServiceTypeSection from './components/ServiceTypeSection';
import ServiceGuarantee from './components/ServiceGuarantee';
import About from './components/About';
import Contact from './components/Contact';
import MarketingButton from './components/MarketingButton';
import LazySection from './components/UI/LazySection';
import logo from './assets/hero/mamigo-hausmeister-logo.png';

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
      <nav className={`fixed top-0 w-full z-[60] bg-surface-0 md:bg-surface-0/60 md:backdrop-blur-sm ${mobileMenuOpen ? 'border-b-0' : 'border-b border-border-200/50'}`}>
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-20 gap-2">
            {/* Left: logo - wrapper has no bg so transparent logo assets show correctly */}
            <div className="flex items-center justify-start min-w-0 bg-transparent">
              <a href="#" className="flex-shrink-0 flex items-center bg-transparent" aria-label="MAMIGO Hausmeister - početna">
                <img src={logo} alt="MAMIGO Hausmeister" className="h-12 sm:h-14 md:h-20 w-auto object-contain" loading="eager" />
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

            {/* Right: phone + language switcher (desktop) / hamburger (mobile) */}
            <div className="flex items-center justify-end gap-4 min-w-0">
              <a href="tel:+38163332833" className="hidden md:inline-flex text-sm font-semibold text-text-900 hover:text-brand-500 transition-colors whitespace-nowrap">
                +381 63 33 28 33
              </a>
              <div className="hidden rounded-lg border border-border-200 overflow-hidden bg-surface-50" role="group" aria-label="Jezik">
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
                className="md:hidden ml-2 p-2 -m-2 rounded-button text-text-900 hover:bg-surface-50 touch-manipulation shrink-0"
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
            className="fixed inset-0 z-[45] bg-black/20 md:hidden"
            aria-label="Zatvori meni"
          />
          <div
            className="fixed left-0 right-0 top-14 z-[50] md:hidden bg-surface-0 rounded-b-2xl border border-t-0 border-border-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)] px-4 py-3 flex flex-col gap-1"
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
              className="py-3 px-4 text-sm font-semibold text-brand-500 hover:bg-surface-50 rounded-button touch-manipulation"
            >
              +381 63 33 28 33
            </a>
            <div className="hidden flex rounded-lg border border-border-200 overflow-hidden bg-surface-50 mt-2" role="group" aria-label="Jezik">
              {LANGUAGES.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`flex-1 px-3 py-2 text-base transition-all ${lang === code ? 'bg-brand-500 text-white' : 'bg-surface-50 hover:bg-surface-100 text-text-600'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="flex min-h-0 flex-1 flex-col pt-14 md:pt-20">
        <Hero onContactClick={scrollToContact} />
        <LazySection placeholderClassName="min-h-[280px]">
          <ProcessSteps />
        </LazySection>
        <LazySection id="services" className="scroll-mt-14 md:scroll-mt-20" placeholderClassName="min-h-[420px]">
          <Services />
        </LazySection>
        <LazySection placeholderClassName="min-h-[320px]">
          <ServiceTypeSection onContactClick={scrollToContact} />
        </LazySection>
        <LazySection placeholderClassName="min-h-[220px]">
          <ServiceGuarantee />
        </LazySection>
        <LazySection id="about" className="scroll-mt-14 md:scroll-mt-20" placeholderClassName="min-h-[480px]">
          <About />
        </LazySection>
        <LazySection id="contact" className="scroll-mt-14 md:scroll-mt-20" placeholderClassName="min-h-[520px]">
          <Contact />
        </LazySection>
      </main>
    </div>
  );
}

export default App;
