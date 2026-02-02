/**
 * Reusable before/after image pairs for sliders.
 * Hero uses the first pair; more sections can be added later.
 * Images are imported so Vite resolves paths correctly in dev and build.
 */
import beforeGarage from '../assets/hero/before-garage.png';
import afterGarage from '../assets/hero/after-garage.png';
import beforeStorage from '../assets/hero/storage-before-1.png';
import afterStorage from '../assets/hero/storage-after-1.png';

export const beforeAfterPairs = [
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
