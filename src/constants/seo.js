import { SERBIA_CONTACT, COMPANY_NAME } from './contact';

export const SITE_META = {
  title: `${COMPANY_NAME} - Profesionalno čišćenje`,
  description:
    'Profesionalno čišćenje zgrada, poslovnih i industrijskih prostora, garaža, hotela i restorana. Oprema i standardi iz Nemačke. Beograd i cela Srbija.',
  url: 'https://mamigo.rs',
  locale: 'sr_RS',
  type: 'website',
};

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY_NAME,
  description: SITE_META.description,
  telephone: SERBIA_CONTACT.phone.display,
  email: SERBIA_CONTACT.email.display,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Prvomajska 56/65',
    addressLocality: 'Beograd',
    postalCode: '11080',
    addressCountry: 'RS',
  },
  areaServed: { '@type': 'Country', name: 'Serbia' },
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Usluge profesionalnog čišćenja',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Čišćenje industrijskih objekata i magacina' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Čišćenje poslovnih prostora' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Održavanje stambenih zgrada' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Čišćenje garažnih prostora' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Čišćenje hotela' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Čišćenje restorana i profesionalnih kuhinja' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Čišćenje teretana i sportskih centara' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Čišćenje klinika i ordinacija' } },
    ],
  },
};

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_NAME,
  url: SITE_META.url,
  telephone: SERBIA_CONTACT.phone.display,
  email: SERBIA_CONTACT.email.display,
  foundingDate: '2014',
};
