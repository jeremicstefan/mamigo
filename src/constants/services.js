import { LuStore, LuBuilding2, LuWarehouse, LuCar, LuHotel, LuDumbbell, LuHeartPulse } from 'react-icons/lu';
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
    id: 'industrial',
    title: 'Industrijski objekti i magacini',
    subtitle: 'Industrial & Warehouse Cleaning',
    description: 'Specijalizovana rešenja za održavanje higijene u najzahtevnijim okruženjima – hale, pogoni, skladišta i logistički centri.',
    features: [
      'Mašinsko pranje podova i uklanjanje industrijskih premaza',
      'Čišćenje metalnih konstrukcija i ventilacionih otvora',
      'Priprema objekata nakon izgradnje ili renoviranja',
      'Rad uz poštovanje HTZ protokola i bez ometanja proizvodnje',
    ],
    icon: LuWarehouse,
    beforeSrc: storageUnitBefore,
    afterSrc: storageUnitAfter,
  },
  {
    id: 'commercial',
    title: 'Poslovni prostori',
    subtitle: 'Office & Commercial Cleaning',
    description: 'Dnevno, nedeljno ili periodično održavanje kancelarija i poslovnih objekata – prilagođeno vašem radnom ritmu.',
    features: [
      'Redovno i dubinsko čišćenje kancelarija',
      'Dezinfekcija IT opreme i radnih površina',
      'Čišćenje nakon građevinskih radova i adaptacija',
      'Ekološki sertifikovana sredstva bezbedna za zaposlene',
    ],
    icon: LuStore,
    beforeSrc: shopBefore,
    afterSrc: shopAfter,
  },
  {
    id: 'residential-buildings',
    title: 'Stambene zgrade',
    subtitle: 'Residential Building Maintenance',
    description: 'Profesionalno održavanje ulaza, stepeništa, liftova i zajedničkih prostorija po standardima koji podižu kvalitet života stanara.',
    features: [
      'Čišćenje stepeništa, hodnika i ulaznih zona',
      'Dezinfekcija liftova, rukohvata i gelendera',
      'Održavanje staklenih portala i sandučića',
      'Fleksibilni paketi za upravnike i skupštine stanara',
    ],
    icon: LuBuilding2,
    beforeSrc: residentialBefore,
    afterSrc: residentialAfter,
  },
  {
    id: 'garage',
    title: 'Garažni prostori',
    subtitle: 'Garage & Parking Cleaning',
    description: 'Profesionalno čišćenje podzemnih i nadzemnih garaža, parkinga i garažnih prostora.',
    features: [
      'Mašinsko pranje podova i uklanjanje uljnih mrlja',
      'Čišćenje podzemnih i nadzemnih garaža',
      'Održavanje parking prostora i prilaznih rampi',
      'Redovno održavanje za čist i bezbedan prostor',
    ],
    icon: LuCar,
    beforeSrc: garageBefore,
    afterSrc: garageAfter,
  },
  {
    id: 'hospitality',
    title: 'Hoteli i restorani',
    subtitle: 'Hospitality Cleaning',
    description: 'Prilagođeni programi čišćenja za ugostiteljske objekte gde je higijena direktan faktor poverenja vaših gostiju.',
    features: [
      'Održavanje lobija, hodnika i smeštajnih jedinica',
      'Dubinska higijena kuhinjskih zona bezbednim sredstvima',
      'Dezinfekcija kritičnih tačaka – kvake, pultovi, rukohvati',
      'Diskretni rad van radnog vremena ili u noćnim smenama',
    ],
    icon: LuHotel,
    // Slike će biti dodate kad budu spremne
    beforeSrc: null,
    afterSrc: null,
  },
  {
    id: 'fitness',
    title: 'Teretane i sportski centri',
    subtitle: 'Gym & Sports Facility Cleaning',
    description: 'Eliminacija bakterija i neprijatnih mirisa sa svih dodirnih površina, podnih obloga i svlačionica.',
    features: [
      'Dezinfekcija sprava i dodirnih površina',
      'Čišćenje svlačionica i tuš kabina',
      'Neutralisanje alergena i neprijatnih mirisa',
      'Sredstva bez agresivnih mirisa, bezbedna za korisnike',
    ],
    icon: LuDumbbell,
    beforeSrc: null,
    afterSrc: null,
  },
  {
    id: 'medical',
    title: 'Klinike i ordinacije',
    subtitle: 'Medical Facility Cleaning',
    description: 'Izuzetan nivo higijene i stroga dezinfekcija čekaonica, ordinacija i medicinskih prostora.',
    features: [
      'Stroga dezinfekcija čekaonica i ordinacija',
      'Čišćenje osetljivih medicinskih površina',
      'Higijena po najvišim zdravstvenim standardima',
      'Redovno održavanje sa evidentiranjem svake intervencije',
    ],
    icon: LuHeartPulse,
    beforeSrc: null,
    afterSrc: null,
  },
];

export const SERVICE_OPTIONS = [
  { value: '', label: 'Izaberite vrstu usluge' },
  ...SERVICES.map((s) => ({ value: s.id, label: s.title })),
  { value: 'other', label: 'Ostalo' },
];
