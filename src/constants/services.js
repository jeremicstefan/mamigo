import { LuStore, LuBuilding2, LuWarehouse, LuCar, LuHotel, LuDumbbell, LuHeartPulse } from 'react-icons/lu';
import shopBefore from '../assets/services/shop-before.webp';
import shopAfter from '../assets/services/shop-after.webp';
import residentialBefore from '../assets/services/residential-building-before.webp';
import residentialAfter from '../assets/services/residential-building-after.webp';
import storageUnitBefore from '../assets/services/storage-unit-before.webp';
import storageUnitAfter from '../assets/services/storage-unit-after.webp';
import garageBefore from '../assets/services/garage-before.webp';
import garageAfter from '../assets/services/garage-after.webp';
import hotelBefore from '../assets/services/hotel-before.webp';
import hotelAfter from '../assets/services/hotel-after.webp';
import kitchenBefore from '../assets/services/kitchen-before.webp';
import kitchenAfter from '../assets/services/kitchen-after.webp';
import gymBefore from '../assets/services/gym-before.webp';
import gymAfter from '../assets/services/gym-after.webp';
import clinicBefore from '../assets/services/clinic-before.webp';
import clinicAfter from '../assets/services/clinic-after.webp';

export const SERVICES = [
  {
    id: 'industrial',
    title: 'Industrijski objekti i magacini',
    subtitle: 'Industrial & Warehouse Cleaning',
    description: 'Održavanje higijene u industrijskim pogonima, halama, skladištima i logističkim centrima – profesionalnom opremom i uz strogo poštovanje HTZ protokola, bez ometanja vaše proizvodnje.',
    features: [
      'Mašinsko pranje industrijskih podova, uklanjanje premaza, ulja i smola',
      'Čišćenje metalnih konstrukcija, ventilacionih sistema i teško dostupnih zona',
      'Isključivo biorazgradiva i ekološki sertifikovana sredstva',
      'Fleksibilan raspored – rad vikendom, noću ili u pauzama proizvodnje',
    ],
    icon: LuWarehouse,
    beforeSrc: storageUnitBefore,
    afterSrc: storageUnitAfter,
  },
  {
    id: 'commercial',
    title: 'Poslovni prostori',
    subtitle: 'Office & Commercial Cleaning',
    description: 'Dva modela saradnje za kancelarije i poslovne objekte: dugoročno ugovorno održavanje sa stalnim terminima ili jednokratno dubinsko čišćenje i čišćenje nakon adaptacija.',
    features: [
      'Redovno dnevno, nedeljno ili mesečno održavanje kancelarija',
      'Dubinsko čišćenje i priprema prostora nakon građevinskih radova',
      'Dezinfekcija IT opreme, radnih površina i sanitarnih čvorova',
      'Ekološki sertifikovana sredstva bezbedna za zaposlene i posetioce',
    ],
    icon: LuStore,
    beforeSrc: shopBefore,
    afterSrc: shopAfter,
  },
  {
    id: 'residential-buildings',
    title: 'Stambene zgrade',
    subtitle: 'Residential Building Maintenance',
    description: 'Kompletno održavanje zajedničkih prostora stambenih zgrada – stepeništa, hodnika, liftova i ulaznih zona – po nemačkim standardima koji podižu kvalitet života stanara.',
    features: [
      'Pranje i dezinfekcija stepeništa, hodnika, rukohvata i gelendera',
      'Čišćenje i dezinfekcija liftova, staklenih portala i sandučića',
      'Održavanje ulaznih zona, podnih obloga i zajedničkih prostorija',
      'Dugoročni paketi prilagođeni upravnicima zgrada i skupštinama stanara',
    ],
    icon: LuBuilding2,
    beforeSrc: residentialBefore,
    afterSrc: residentialAfter,
  },
  {
    id: 'garage',
    title: 'Garažni prostori',
    subtitle: 'Garage & Parking Cleaning',
    description: 'Mašinsko čišćenje podzemnih i nadzemnih garaža, parkinga i prilaznih rampi – uklanjanje uljnih mrlja, prašine i prljavštine za bezbedan i uredan prostor.',
    features: [
      'Mašinsko pranje betonskih i epoksidnih podova industrijskom opremom',
      'Uklanjanje uljnih mrlja, gumenih tragova i akumulirane prljavštine',
      'Čišćenje i održavanje prilaznih rampi, stubova i signalizacije',
      'Periodično ili jednokratno čišćenje prema potrebama objekta',
    ],
    icon: LuCar,
    beforeSrc: garageBefore,
    afterSrc: garageAfter,
  },
  {
    id: 'hospitality',
    title: 'Hoteli i smeštajni objekti',
    subtitle: 'Hotel & Accommodation Cleaning',
    description: 'Prilagođeni programi čišćenja za hotele, hostele i apartmane – visokofrekventna dezinfekcija i diskretno održavanje gde je higijena direktan faktor poverenja gostiju.',
    features: [
      'Održavanje lobija, hodnika, soba i smeštajnih jedinica po hotelskim standardima',
      'Visokofrekventna dezinfekcija dodirnih tačaka – kvake, pultovi, rukohvati, tasteri',
      'Ekološka i hipoalergenska sredstva bezbedna za goste i osoblje',
      'Diskretni rad prilagođen popunjenosti – noćne smene, van špica, vikendi',
    ],
    icon: LuHotel,
    beforeSrc: hotelBefore,
    afterSrc: hotelAfter,
  },
  {
    id: 'restaurants',
    title: 'Restorani i ugostiteljski objekti',
    subtitle: 'Restaurant & Catering Cleaning',
    description: 'Dubinska higijena profesionalnih kuhinja, trpezarija i kafića – sredstvima bezbednim za kontakt sa hranom i prema protokolima za pripremu HACCP inspekcija.',
    features: [
      'Temeljno čišćenje kuhinja, radnih površina i priprema za inspekciju',
      'Odmašćivanje napa, ventilacije, roštilja i friteza profesionalnom hemijom',
      'Dezinfekcija podova, sanitarnih čvorova i prostora za goste',
      'Rad u noćnim terminima da ne ometa dnevni ritam poslovanja',
    ],
    icon: LuStore,
    beforeSrc: kitchenBefore,
    afterSrc: kitchenAfter,
  },
  {
    id: 'fitness',
    title: 'Teretane i sportski centri',
    subtitle: 'Gym & Sports Facility Cleaning',
    description: 'Eliminacija bakterija, alergena i neprijatnih mirisa sa sprava, podova i svlačionica – sredstvima bez agresivnih hemikalija, bezbednim za korisnike.',
    features: [
      'Kompletna dezinfekcija sprava, tegova i svih dodirnih površina',
      'Dubinsko čišćenje svlačionica, tuš kabina i mokrog čvora',
      'Neutralisanje neprijatnih mirisa i alergena iz prostora',
      'Hipoalergenska sredstva bez jakih mirisa, bezbedna za sportiste',
    ],
    icon: LuDumbbell,
    beforeSrc: gymBefore,
    afterSrc: gymAfter,
  },
  {
    id: 'medical',
    title: 'Klinike i ordinacije',
    subtitle: 'Medical Facility Cleaning',
    description: 'Stroga dezinfekcija čekaonica, ordinacija i medicinskih prostora po najvišim zdravstvenim standardima – sa evidentiranjem svake intervencije i dokumentovanim procedurama.',
    features: [
      'Dezinfekcija čekaonica, ordinacija i medicinskih stolova po protokolu',
      'Čišćenje osetljivih površina sredstvima odobrenim za zdravstvene ustanove',
      'Redovno održavanje sa pisanom evidencijom i kontrolom kvaliteta',
      'Biorazgradiva i hipoalergenska sredstva bezbedna za pacijente i osoblje',
    ],
    icon: LuHeartPulse,
    beforeSrc: clinicBefore,
    afterSrc: clinicAfter,
  },
];

export const SERVICE_OPTIONS = [
  { value: '', label: 'Izaberite vrstu usluge' },
  ...SERVICES.map((s) => ({ value: s.id, label: s.title })),
  { value: 'other', label: 'Ostalo' },
];
