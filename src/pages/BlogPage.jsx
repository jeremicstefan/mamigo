import React from 'react';
import { Link } from 'react-router-dom';
import { LuPhone } from 'react-icons/lu';
import { BLOG_POSTS } from '../constants/blog';
import { SERBIA_CONTACT } from '../constants/contact';
import BlogCard from '../components/Blog/BlogCard';
import MarketingButton from '../components/MarketingButton';

const BlogPage = () => (
  <main className="flex min-h-0 flex-1 flex-col pt-14 md:pt-20">
    <section className="py-10 sm:py-12 lg:py-20 bg-surface-0">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-900 mb-4 sm:mb-6 leading-tight">
            Blog
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-600 max-w-3xl mx-auto font-light leading-relaxed">
            Saveti za održavanje i zanimljivosti iz sveta čistoće – vaš centar za edukaciju i najbolje prakse
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center py-10 sm:py-12 bg-surface-50 rounded-card border border-border-200">
          <h2 className="text-xl sm:text-2xl font-bold text-text-900 mb-3">
            Potrebno vam je profesionalno čišćenje?
          </h2>
          <p className="text-base text-text-600 mb-6 max-w-xl mx-auto leading-relaxed">
            Besplatna procena, dolazak u roku od 24h i oprema iz Nemačke.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/#contact">
              <MarketingButton>Zatraži ponudu</MarketingButton>
            </Link>
            <MarketingButton
              variant="secondary"
              href={SERBIA_CONTACT.phone.href}
              icon={<LuPhone className="w-5 h-5 text-brand-500" />}
            >
              {SERBIA_CONTACT.phone.display}
            </MarketingButton>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default BlogPage;
