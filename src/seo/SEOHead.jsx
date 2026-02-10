import { useEffect } from 'react';
import { SITE_META, LOCAL_BUSINESS_SCHEMA, ORGANIZATION_SCHEMA } from '../constants/seo';

const SEOHead = () => {
  useEffect(() => {
    document.title = SITE_META.title;

    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta('description', SITE_META.description);
    setMeta('og:title', SITE_META.title, true);
    setMeta('og:description', SITE_META.description, true);
    setMeta('og:type', SITE_META.type, true);
    setMeta('og:url', SITE_META.url, true);
    setMeta('og:locale', SITE_META.locale, true);

    const injectSchema = (id, schema) => {
      if (document.getElementById(id)) return;
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    injectSchema('local-business-schema', LOCAL_BUSINESS_SCHEMA);
    injectSchema('organization-schema', ORGANIZATION_SCHEMA);

    return () => {
      ['local-business-schema', 'organization-schema'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  return null;
};

export default SEOHead;
