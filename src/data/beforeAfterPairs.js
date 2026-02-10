/**
 * Reusable before/after image pairs for sliders.
 * Hero uses the first pair; more sections can be added later.
 * Images are imported so Vite resolves paths correctly in dev and build.
 */
import heroBefore from '../assets/hero/hero-before-option-2-flipped.webp';
import heroAfter from '../assets/hero/hero-after-option-2-flipped.webp';
import beforeGarage from '../assets/services/garage-before.webp';
import afterGarage from '../assets/services/garage-after.webp';
import beforeStorage from '../assets/services/storage-before.webp';
import afterStorage from '../assets/services/storage-after.webp';

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
