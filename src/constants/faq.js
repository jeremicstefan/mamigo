export const FAQ_ITEMS = [
  {
    question: 'Da li radite vikendom?',
    answer: 'Da, po dogovoru radimo i vikendom.',
  },
  {
    question: 'Da li izdajete fakturu?',
    answer: 'Da, izdajemo fakturu za sve izvršene usluge.',
  },
  {
    question: 'Koliko traje čišćenje garaže?',
    answer: 'U zavisnosti od veličine i stanja, od nekoliko sati do jednog dana.',
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
