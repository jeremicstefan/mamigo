import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LuClock, LuCalendar } from 'react-icons/lu';

const BlogCard = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    onClick={() => window.scrollTo(0, 0)}
    className="group bg-surface-0 rounded-card border border-border-200 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
  >
    <div className="aspect-[16/9] overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
    <div className="p-5 sm:p-6">
      <div className="flex items-center gap-4 text-xs text-text-600 mb-3">
        <span className="flex items-center gap-1">
          <LuCalendar className="w-3.5 h-3.5" />
          {new Date(post.date).toLocaleDateString('sr-Latn-RS', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </span>
        <span className="flex items-center gap-1">
          <LuClock className="w-3.5 h-3.5" />
          {post.readTime}
        </span>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-text-900 mb-2 group-hover:text-brand-600 transition-colors leading-snug">
        {post.title}
      </h3>
      <p className="text-sm sm:text-base text-text-600 leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>
    </div>
  </Link>
);

BlogCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(BlogCard);
