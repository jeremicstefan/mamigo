import React, { useEffect } from 'react';
import { LuHelpCircle } from 'react-icons/lu';
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
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-900 mb-6 sm:mb-8 lg:mb-10 text-left">
        Često postavljana pitanja
      </h2>
      <div className="w-full max-w-full divide-y divide-border-200">
        {FAQ_ITEMS.map((item, index) => (
          <article
            key={index}
            className={`flex gap-3 sm:gap-4 py-4 sm:py-5 lg:py-6 ${index === 0 ? 'first:pt-0' : ''} ${index === FAQ_ITEMS.length - 1 ? 'last:pb-0' : ''}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <div className="flex-shrink-0 mt-1">
              <LuHelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-brand-500" aria-hidden />
            </div>
            <div className="min-w-0">
              <h3
                className="text-base sm:text-lg md:text-xl font-semibold text-text-900 mb-1.5 sm:mb-2"
                itemProp="name"
              >
                {item.question}
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-base text-text-600 leading-relaxed" itemProp="text">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default React.memo(FAQ);
