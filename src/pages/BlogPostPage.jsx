import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LuArrowLeft, LuClock, LuCalendar, LuPhone } from 'react-icons/lu';
import { BLOG_POSTS, blogPostingSchema } from '../constants/blog';
import { SERBIA_CONTACT } from '../constants/contact';
import BlogContent from '../components/Blog/BlogContent';
import BlogCard from '../components/Blog/BlogCard';
import MarketingButton from '../components/MarketingButton';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  useEffect(() => {
    if (!post) return;

    document.title = post.seoTitle;

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

    setMeta('description', post.seoDescription);
    setMeta('og:title', post.seoTitle, true);
    setMeta('og:description', post.seoDescription, true);
    setMeta('og:type', 'article', true);

    const schemaId = 'blog-posting-schema';
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = schemaId;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(blogPostingSchema(post));

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [post]);

  if (!post) {
    return (
      <main className="flex min-h-0 flex-1 flex-col pt-14 md:pt-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-text-900 mb-4">
            Post nije pronađen
          </h1>
          <Link
            to="/blog"
            onClick={() => window.scrollTo(0, 0)}
            className="text-brand-600 hover:text-brand-500 font-medium"
          >
            &larr; Nazad na blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-0 flex-1 flex-col pt-14 md:pt-20">
      {/* Hero image */}
      <div className="w-full aspect-[21/9] sm:aspect-[21/7] overflow-hidden bg-surface-50">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
        {/* Back link */}
        <Link
          to="/blog"
          onClick={() => window.scrollTo(0, 0)}
          className="inline-flex items-center gap-1.5 text-sm text-text-600 hover:text-brand-600 font-medium mb-6 transition-colors"
        >
          <LuArrowLeft className="w-4 h-4" />
          Nazad na blog
        </Link>

        {/* Title + meta */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-900 mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-text-600 mb-8 sm:mb-10 pb-6 border-b border-border-200">
          <span className="flex items-center gap-1.5">
            <LuCalendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('sr-Latn-RS', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <LuClock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        {/* Content */}
        <BlogContent sections={post.sections} />

        {/* CTA */}
        <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-border-200 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-text-900 mb-3">
            Želite čistiji i zdraviji prostor?
          </h3>
          <p className="text-base text-text-600 mb-6 max-w-xl mx-auto leading-relaxed">
            Kontaktirajte nas za stručni savet ili zakažite besplatan uvid u objekat.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
            <Link to="/#contact" className="w-full sm:w-auto">
              <MarketingButton className="w-full sm:w-auto">Zatražite besplatnu ponudu</MarketingButton>
            </Link>
            <MarketingButton
              variant="secondary"
              href={SERBIA_CONTACT.phone.href}
              icon={<LuPhone className="w-5 h-5 text-brand-500" />}
              className="w-full sm:w-auto"
            >
              {SERBIA_CONTACT.phone.display}
            </MarketingButton>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-surface-50 border-t border-border-200 py-10 sm:py-12 lg:py-16">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-900 mb-6 sm:mb-8">
              Pročitajte još
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogPostPage;
