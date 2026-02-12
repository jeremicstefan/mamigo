import { LuWarehouse, LuStore, LuHotel, LuBuilding2 } from 'react-icons/lu';
import storageUnitBefore from '../assets/services/storage-unit-before.webp';
import storageUnitAfter from '../assets/services/storage-unit-after.webp';
import officeBefore from '../assets/services/office-before.webp';
import officeAfter from '../assets/services/office-after.webp';
import hotelBefore from '../assets/services/hotel-before.webp';
import hotelAfter from '../assets/services/hotel-after.webp';
import kitchenBefore from '../assets/services/kitchen-before.webp';
import kitchenAfter from '../assets/services/kitchen-after.webp';
import gymBefore from '../assets/services/gym-before.webp';
import gymAfter from '../assets/services/gym-after.webp';
import residentialBefore from '../assets/services/residential-building-before.webp';
import residentialAfter from '../assets/services/residential-building-after.webp';

export const SERVICES = [
  {
    id: 'industrial',
    title: 'Čišćenje industrijskih objekata i magacina',
    subtitle: 'Industrial & Warehouse Cleaning',
    description: 'Pružamo specijalizovana rešenja za održavanje higijene u najzahtevnijim okruženjima, fokusirajući se na kontinuitet vašeg procesa rada i maksimalnu sigurnost.',
    features: [
      'Mašinsko pranje podova – efikasno uklanjanje tragova viljuškara, ulja i industrijskih premaza',
      'Uklanjanje teških zaprljanja – čišćenje metalnih konstrukcija, ventilacionih otvora i teško dostupnih mesta',
      'Implementacija eko-standarda – isključivo ekološki sertifikovana hemijska sredstva koja su biorazgradiva',
      'Sertifikovana oprema – mašine koje ispunjavaju najviše EU norme energetske efikasnosti i nivoa buke',
      'Fleksibilnost – termine čišćenja prilagođavamo vašim smenama, vikendima ili planiranim zastojima u proizvodnji',
    ],
    cta: 'Konsultujte se sa našim stručnjakom',
    icon: LuWarehouse,
    beforeSrc: storageUnitBefore,
    afterSrc: storageUnitAfter,
  },
  {
    id: 'commercial',
    title: 'Čišćenje i održavanje poslovnih prostora',
    subtitle: 'Office & Commercial Cleaning',
    description: 'Prilagođavamo se vašem poslovanju kroz dva osnovna modela usluga: dugoročno redovno održavanje i jednokratno specijalizovano čišćenje.',
    features: [
      'Dnevno čišćenje – za prostore sa visokom frekvencijom ljudi i stalnu reprezentativnost',
      'Nedeljno i periodično održavanje – optimalno u skladu sa potrebama vašeg tima',
      'Čišćenje nakon građevinskih radova i adaptacija – temeljno uklanjanje građevinske prašine i ostataka materijala',
      'Precizna dezinfekcija IT opreme i radnih površina ekološki sertifikovanim sredstvima',
    ],
    icon: LuStore,
    beforeSrc: officeBefore,
    afterSrc: officeAfter,
  },
  {
    id: 'hospitality',
    title: 'Čišćenje i održavanje komercijalnih objekata',
    subtitle: 'Hotels, Restaurants & Gyms',
    description: 'U sektorima gde je frekvencija posetilaca velika, higijena nije samo estetsko pitanje, već direktan faktor poverenja i bezbednosti vaših klijenata.',
    features: [
      'Hoteli i smeštajne jedinice – detaljno održavanje lobija, hodnika i zajedničkih prostorija',
      'Restorani i kuhinjski prostori – dubinska higijena podova i radnih zona sredstvima bezbednim za kontakt sa hranom',
      'Teretane i sportski centri – eliminacija bakterija i neprijatnih mirisa sa svih dodirnih površina i svlačionica',
      'Visokofrekventna dezinfekcija kritičnih tačaka – kvake, rukohvati, pultovi',
      'Diskretni rad van radnog vremena – noćne smene ili rani jutarnji časovi',
    ],
    icon: LuHotel,
    beforeSrc: hotelBefore,
    afterSrc: hotelAfter,
    slides: [
      { label: 'Hotel', beforeSrc: hotelBefore, afterSrc: hotelAfter },
      { label: 'Restoran', beforeSrc: kitchenBefore, afterSrc: kitchenAfter },
      { label: 'Teretana', beforeSrc: gymBefore, afterSrc: gymAfter },
    ],
  },
  {
    id: 'residential-buildings',
    title: 'Održavanje stepeništa i stambenih zajednica',
    subtitle: 'Residential Building Maintenance',
    description: 'Higijena zajedničkih prostorija direktno utiče na kvalitet života stanara i tržišnu vrednost same nekretnine. Transformišemo zapuštene ulaze u čiste i prijatne prostore za život.',
    features: [
      'Detaljno čišćenje stepeništa i hodnika – uklanjanje nečistoća sa svih vrsta podnih obloga',
      'Održavanje liftova – dezinfekcija kontrolnih tabli, čišćenje ogledala i metalnih površina',
      'Higijena ulaznih zona – čišćenje staklenih portala, ulaznih vrata i sandučića za poštu',
      'Redovna dezinfekcija rukohvata i gelendera',
      'Dugoročna saradnja – fleksibilni paketi prilagođeni upravnicima zgrada i skupštinama stanara',
    ],
    icon: LuBuilding2,
    beforeSrc: residentialBefore,
    afterSrc: residentialAfter,
  },
];

export const SERVICE_OPTIONS = [
  { value: '', label: 'Izaberite vrstu usluge' },
  ...SERVICES.map((s) => ({ value: s.id, label: s.title })),
  { value: 'other', label: 'Ostalo' },
];
