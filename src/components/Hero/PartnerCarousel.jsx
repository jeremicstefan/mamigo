import React, { useMemo } from 'react';
import { PARTNER_LOGOS, LOGO_HEIGHT, LOGO_WIDTH } from '../../constants/partners';

const PartnerCarousel = () => {
  const tripled = useMemo(
    () => [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS],
    []
  );

  return (
    <section className="bg-surface-0 py-8 sm:py-10 lg:py-12 border-t border-border-200 overflow-hidden relative">
      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-6 lg:mb-8">
          <p className="text-sm text-text-600 font-medium uppercase tracking-wide">
            Saradjujemo sa
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-surface-0 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-surface-0 to-transparent" />
          <div
            className="flex items-center animate-scroll"
            style={{ width: 'fit-content', minHeight: LOGO_HEIGHT, gap: 12 }}
          >
            {tripled.map((partner, index) => (
              <span
                key={`partner-${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center opacity-70"
                style={{ height: LOGO_HEIGHT, width: LOGO_WIDTH }}
                aria-hidden
              >
                <img
                  src={partner.src}
                  alt=""
                  className="max-h-full max-w-full w-auto h-auto object-contain object-center"
                  style={{ height: LOGO_HEIGHT, width: LOGO_WIDTH }}
                  loading="lazy"
                  onError={(e) => { e.target.style.opacity = '0.3'; }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PartnerCarousel);
