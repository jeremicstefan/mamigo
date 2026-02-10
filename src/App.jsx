import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import MobileMenu from './components/Navbar/MobileMenu';
import Hero from './components/Hero/Hero';
import ProcessSteps from './components/ProcessSteps';
import Services from './components/Services';
import ServiceTypeSection from './components/ServiceTypeSection';
import ServiceGuarantee from './components/ServiceGuarantee';
import About from './components/About';
import Contact from './components/Contact/Contact';
import LazySection from './components/UI/LazySection';
import SEOHead from './seo/SEOHead';

function App() {
  const [lang, setLang] = useState('sr');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = useCallback((href) => {
    setMobileMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToContact = useCallback(() => {
    setMobileMenuOpen(false);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((o) => !o);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-surface-0">
      <SEOHead />
      <Navbar
        lang={lang}
        onLangChange={setLang}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
      />

      {mobileMenuOpen && (
        <MobileMenu
          lang={lang}
          onLangChange={setLang}
          onClose={closeMobileMenu}
          onNavigate={scrollToSection}
        />
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
