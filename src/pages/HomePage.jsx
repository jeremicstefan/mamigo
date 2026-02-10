import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../components/Hero/Hero';
import ProcessSteps from '../components/ProcessSteps';
import Services from '../components/Services';
import ServiceTypeSection from '../components/ServiceTypeSection';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact/Contact';
import LazySection from '../components/UI/LazySection';

const HomePage = ({ onContactClick }) => (
  <main className="flex min-h-0 flex-1 flex-col pt-14 md:pt-20">
    <Hero onContactClick={onContactClick} />
    <LazySection placeholderClassName="min-h-[280px]">
      <ProcessSteps />
    </LazySection>
    <LazySection id="services" className="scroll-mt-14 md:scroll-mt-20" placeholderClassName="min-h-[420px]">
      <Services />
    </LazySection>
    <LazySection placeholderClassName="min-h-[320px]">
      <ServiceTypeSection onContactClick={onContactClick} />
    </LazySection>
    <LazySection id="about" className="scroll-mt-14 md:scroll-mt-20" placeholderClassName="min-h-[480px]">
      <About />
    </LazySection>
    <LazySection placeholderClassName="min-h-[320px]">
      <Testimonials />
    </LazySection>
    <LazySection id="contact" className="scroll-mt-14 md:scroll-mt-20" placeholderClassName="min-h-[520px]">
      <Contact />
    </LazySection>
  </main>
);

HomePage.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};

export default HomePage;
