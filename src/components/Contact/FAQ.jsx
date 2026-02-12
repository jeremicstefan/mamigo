import React, { useEffect } from 'react';
import { LuHelpCircle, LuChevronDown } from 'react-icons/lu';
import { FAQ_ITEMS, FAQ_SCHEMA } from '../../constants/faq';

const FAQ = () => {
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

  return (
    <div className="max-w-container w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-16 pb-0 mt-10 sm:mt-12 lg:mt-16 mb-10 sm:mb-12 lg:mb-16 border-t border-border-200">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-900 mb-2 sm:mb-3 text-left">
        Često postavljana pitanja
      </h2>
      <p className="text-base text-text-600 font-light leading-relaxed mb-6 sm:mb-8 lg:mb-10">
        Dobijamo mnogo pitanja o tome kako radimo i šta nas izdvaja. Ovde su odgovori na ona najučestalija, kako biste lakše odlučili o saradnji sa nama.
      </p>
      <div className="w-full max-w-full divide-y divide-border-200">
        {FAQ_ITEMS.map((item, index) => (
          <details
            key={index}
            className="group"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <summary className="flex items-center justify-between gap-3 sm:gap-4 py-4 sm:py-5 lg:py-6 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <LuHelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-brand-500 flex-shrink-0" aria-hidden />
                <h3
                  className="text-base sm:text-lg md:text-xl font-semibold text-text-900"
                  itemProp="name"
                >
                  {item.question}
                </h3>
              </div>
              <LuChevronDown
                className="w-5 h-5 text-text-600 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <div
              className="pb-4 sm:pb-5 lg:pb-6 pr-8"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p className="text-base text-text-600 leading-relaxed" itemProp="text">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default React.memo(FAQ);
