import { SERBIA_CONTACT, COMPANY_NAME } from './contact';

export const SITE_META = {
  title: `${COMPANY_NAME} - Profesionalno čišćenje`,
  description:
    'Profesionalno čišćenje garaža, zgrada, poslovnih i industrijskih prostora. Beograd i ostatak Srbije. Nemački standard kvaliteta.',
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
