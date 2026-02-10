import { LuStore, LuBuilding2, LuWarehouse, LuCar } from 'react-icons/lu';
import shopBefore from '../assets/services/shop-before-1.webp';
import shopAfter from '../assets/services/shop-after-1.webp';
import residentialBefore from '../assets/services/residential-building-before-1.webp';
import residentialAfter from '../assets/services/residential-building-after-1.webp';
import storageUnitBefore from '../assets/services/storage-unit-before-1.webp';
import storageUnitAfter from '../assets/services/storage-unit-after-1.webp';
import garageBefore from '../assets/services/garage-before-1.webp';
import garageAfter from '../assets/services/garage-after-1.webp';

export const SERVICES = [
  {
    id: 'pre-opening',
    title: 'Maloprodajni objekti',
    subtitle: 'Pre-Opening & Post-Renovation',
    description: 'Profesionalno čišćenje prostora pred otvaranja ili nakon renoviranja marketa, prodavnica ili lokala.',
    features: [
      'Priprema prostora za prvo otvaranje',
      'Čišćenje posle renovacionih radova',
      'Uklanjanje građevinske prašine i ostataka',
      'Finalno poliranje za predstavu klijentima',
    ],
    icon: LuStore,
    beforeSrc: shopBefore,
    afterSrc: shopAfter,
  },
  {
    id: 'residential-buildings',
    title: 'Stambene zgrade',
    subtitle: 'Residential Building Cleaning',
    description: 'Kompletno čišćenje stambenih zgrada od ulaza do krova, zajedničkih prostora, liftova, stepeništa i fasada.',
    features: [
      'Čišćenje zajedničkih prostora i ulaza',
      'Odžavanje liftova i stepeništa',
      'Čišćenje fasada i prozora',
      'Redovno održavanje krovova i terasa',
    ],
    icon: LuBuilding2,
    beforeSrc: residentialBefore,
    afterSrc: residentialAfter,
  },
  {
    id: 'warehouse',
    title: 'Magacinski prostori i hale',
    subtitle: 'Warehouse & Hall Cleaning',
    description: 'Specijalizovano čišćenje magacina, skladišta i industrijskih hala po najvišim standardima.',
    features: [
      'Dubinsko čišćenje skladišnih prostora',
      'Čišćenje industrijskih hala',
      'Redovno održavanje magacina',
      'Profesionalna oprema za velike površine',
    ],
    icon: LuWarehouse,
    beforeSrc: storageUnitBefore,
    afterSrc: storageUnitAfter,
  },
  {
    id: 'garage',
    title: 'Garažni prostori',
    subtitle: 'Garage Cleaning',
    description: 'Profesionalno čišćenje svih vrsta garaža, podzemnih parkinga i garažnih prostora.',
    features: [
      'Čišćenje podzemnih i nadzemnih garaža',
      'Održavanje parking prostora',
      'Uklanjanje ulja, prašine i prljavštine',
      'Redovno održavanje za čist i bezbedan prostor',
    ],
    icon: LuCar,
    beforeSrc: garageBefore,
    afterSrc: garageAfter,
  },
];

export const SERVICE_OPTIONS = [
  { value: '', label: 'Izaberite vrstu usluge čišćenja' },
  ...SERVICES.map((s) => ({ value: s.id, label: s.title })),
  { value: 'commercial', label: 'Poslovni prostor' },
  { value: 'other', label: 'Ostalo' },
];
