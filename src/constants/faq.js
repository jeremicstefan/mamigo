export const FAQ_ITEMS = [
  {
    question: 'Koje vrste objekata čistite?',
    answer: 'Specijalizovani smo za kancelarije, stambene zgrade, industrijske hale, magacine, garaže, maloprodajne objekte, hotele, restorane, teretane i medicinske ordinacije. Imamo razvijene protokole za svaku od ovih niša.',
  },
  {
    question: 'Šta podrazumeva "nemačko iskustvo" u vašem radu?',
    answer: 'Precizni procesi sa jasnim ček-listama, vrhunska oprema koja je standard u Nemačkoj, isključivo ekološki sertifikovana hemija i strogo poštovanje dogovorenih rokova i termina.',
  },
  {
    question: 'Da li moram da obezbedim opremu i sredstva za čišćenje?',
    answer: 'Ne. Naš tim dolazi potpuno opremljen – profesionalni industrijski usisivači, mašine za podove i ekološka sredstva su uključeni u cenu usluge.',
  },
  {
    question: 'Da li su vaša sredstva bezbedna za zaposlene sa alergijama?',
    answer: 'Apsolutno. Koristimo ekološka sredstva bez oštrih hemijskih mirisa koja ne iritiraju disajne puteve, idealna za prostore gde ljudi borave 8 ili više sati.',
  },
  {
    question: 'Koliko često preporučujete profesionalno čišćenje?',
    answer: 'Za kancelarije sa više od 10 zaposlenih preporučujemo dnevno održavanje, za stambene zgrade jednom do dva puta nedeljno, a za industrijske objekte pravimo specifičan plan nakon besplatnog uvida.',
  },
  {
    question: 'Da li radite vikendom?',
    answer: 'Da, po dogovoru radimo i vikendom. Termine prilagođavamo vašim smenama i radnom vremenu.',
  },
  {
    question: 'Da li izdajete fakturu?',
    answer: 'Da, izdajemo fakturu za sve izvršene usluge.',
  },
];

export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};
