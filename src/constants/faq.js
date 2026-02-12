export const FAQ_ITEMS = [
  {
    question: 'Koje vrste objekata čistite?',
    answer: 'Specijalizovani smo za širok spektar komercijalnih prostora. To uključuje moderne kancelarije, stambene zgrade (održavanje ulaza i stepeništa), industrijske hale, magacine, kao i maloprodajne objekte. Zahvaljujući iskustvu od 2014. godine, imamo razvijene protokole za svaku od ovih niša.',
  },
  {
    question: 'Šta podrazumeva "nemačko iskustvo" u vašem radu?',
    answer: 'To znači da ne improvizujemo. Naš pristup se zasniva na četiri stuba: precizni procesi gde svaki radnik ima jasnu ček-listu zadataka, vrhunska oprema i alati koji su standard u Nemačkoj, isključivo biorazgradiva i ekološki sertifikovana hemija (nemački certifikati), i strogo poštovanje rokova i termina koje je za nas svetinja.',
  },
  {
    question: 'Da li moram da obezbedim opremu i sredstva za čišćenje?',
    answer: 'Ne. Naš tim dolazi potpuno opremljen. Koristimo profesionalne industrijske usisivače, mašine za podove i ekološka sredstva koja su uključena u cenu usluge. Vi se fokusirate na svoj posao, a mi na higijenu.',
  },
  {
    question: 'Kako garantujete bezbednost naših poslovnih tajni i imovine?',
    answer: 'Kao odgovorna porodična firma, poverenje klijenata smatramo svojim najvećim kapitalom. Sigurnost vašeg radnog prostora i zaštitu poslovnih informacija garantujemo kroz strogo definisane nivoe kontrole: provereni kadar koji prolazi rigorozne bezbednosne provere, pravno obavezujući ugovor o tajnosti podataka za svakog člana tima, primena specifično nemačkog iskustva u zaštiti podataka i bezbednosnim protokolima, i specijalizovana obuka o diskreciji i pravilnom rukovanju u zonama visokog rizika (kancelarije uprave, arhive, serverske sobe). Vaša imovina i poslovne tajne su kod nas apsolutno zaštićene, što potvrđuje i naša desetogodišnja reputacija bez ijednog bezbednosnog incidenta.',
  },
  {
    question: 'Koliko često preporučujete profesionalno čišćenje?',
    answer: 'Frekvencija zavisi od tipa objekta. Za kancelarije sa više od 10 zaposlenih preporučujemo dnevno održavanje, dok je za stambene zgrade optimalno čišćenje jednom do dva puta nedeljno. Industrijski objekti se obično održavaju prema specifičnom planu koji pravimo nakon besplatnog uvida u stanje terena.',
  },
  {
    question: 'Da li su vaša sredstva bezbedna za zaposlene sa alergijama?',
    answer: 'Apsolutno. To je jedan od razloga zašto smo uveli ekološke materijale. Naša sredstva nemaju oštre hemijske mirise koji mogu iritirati disajne puteve ili izazvati alergijske reakcije, što ih čini idealnim za prostore gde ljudi borave 8 ili više sati.',
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
