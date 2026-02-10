import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../components/Hero/Hero';
import ProcessSteps from '../components/ProcessSteps';
import Services from '../components/Services';
import ServiceTypeSection from '../components/ServiceTypeSection';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/Blog/BlogPreview';
import Contact from '../components/Contact/Contact';
import LazySection from '../components/UI/LazySection';

const HomePage = ({ onContactClick }) => (
  <main className="flex min-h-0 flex-1 flex-col pt-14 md:pt-20">
    <Hero onContactClick={onContactClick} />
    <LazySection placeholderClassName="min-h-[280px]">
      <ProcessSteps />
    </LazySection>
    <div id="services" className="scroll-mt-14 md:scroll-mt-20">
      <Services />
    </div>
    <ServiceTypeSection onContactClick={onContactClick} />
    <div id="about" className="scroll-mt-14 md:scroll-mt-20">
      <About />
    </div>
    <Testimonials />
    <div id="blog" className="scroll-mt-14 md:scroll-mt-20">
      <BlogPreview />
    </div>
    <div id="contact" className="scroll-mt-14 md:scroll-mt-20">
      <Contact />
    </div>
  </main>
);

HomePage.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};

export default HomePage;
