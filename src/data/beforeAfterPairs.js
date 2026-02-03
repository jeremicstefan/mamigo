/**
 * Reusable before/after image pairs for sliders.
 * Hero uses the first pair; more sections can be added later.
 * Images are imported so Vite resolves paths correctly in dev and build.
 */
import heroBefore from '../assets/hero/hero-before.webp';
import heroAfter from '../assets/hero/hero-after.webp';
import beforeGarage from '../assets/hero/garage-before-1.webp';
import afterGarage from '../assets/hero/garage-after-1.webp';
import beforeStorage from '../assets/hero/storage-before-1.webp';
import afterStorage from '../assets/hero/storage-after-1.webp';

export const beforeAfterPairs = [
  {
    title: 'Pre i posle',
    beforeSrc: heroBefore,
    afterSrc: heroAfter,
  },
  {
    title: 'Magacin / skladište',
    beforeSrc: beforeStorage,
    afterSrc: afterStorage,
  },
  {
    title: 'Garaža',
    beforeSrc: beforeGarage,
    afterSrc: afterGarage,
  },
];
