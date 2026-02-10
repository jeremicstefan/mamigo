import React from 'react';
import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import { BLOG_POSTS } from '../../constants/blog';
import BlogCard from './BlogCard';

/** Shows latest 2 blog posts on homepage with link to full blog */
const BlogPreview = () => (
  <section className="py-10 sm:py-12 lg:py-20 bg-surface-50 border-t border-border-200">
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-8 sm:mb-10 lg:mb-12">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-900 mb-2 sm:mb-3 leading-tight">
            Blog
          </h2>
          <p className="text-base sm:text-lg text-text-600 font-light leading-relaxed">
            Želite čistiji i zdraviji prostor? Pročitajte naše vodiče ili nas kontaktirajte za stručni savet.
          </p>
        </div>
        <Link
          to="/blog"
          onClick={() => window.scrollTo(0, 0)}
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-500 transition-colors"
        >
          Svi članci
          <LuArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        {BLOG_POSTS.slice(0, 2).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-6 text-center sm:hidden">
        <Link
          to="/blog"
          onClick={() => window.scrollTo(0, 0)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-500 transition-colors"
        >
          Svi članci
          <LuArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default React.memo(BlogPreview);
