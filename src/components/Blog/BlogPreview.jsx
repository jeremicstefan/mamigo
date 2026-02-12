import React from 'react';
import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import { BLOG_POSTS } from '../../constants/blog';
import BlogCard from './BlogCard';

/** Shows latest 2 blog posts on homepage with link to full blog */
const BlogPreview = () => (
  <section className="py-10 sm:py-12 lg:py-20 bg-surface-50 border-t border-border-200">
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-900 mb-2 sm:mb-3 leading-tight">
          Saveti za Održavanje i Zanimljivosti iz Sveta Čistoće
        </h2>
        <p className="text-base sm:text-lg text-text-600 font-light leading-relaxed">
          Vaš centar za edukaciju i najbolje prakse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        {BLOG_POSTS.slice(0, 2).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-8 sm:mt-10 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-brand-600 border-2 border-brand-500 rounded-button hover:bg-brand-500 hover:text-white transition-all"
        >
          Pogledaj sve blogove
          <LuArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default React.memo(BlogPreview);
