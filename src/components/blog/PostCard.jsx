import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const formatDate = (date) =>
  new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));

function PostCard({ post, variant = 'default' }) {
  const isCompact = variant === 'compact';
  const containerClasses = isCompact
    ? 'flex-row gap-4 rounded-xl p-4'
    : 'flex-col rounded-3xl border border-white/5';

  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group relative flex ${containerClasses} glass-effect overflow-hidden transition-colors hover:bg-white/10`}
    >
      <div
        className={`relative overflow-hidden ${
          isCompact
            ? 'h-24 w-32 flex-shrink-0 rounded-lg'
            : 'aspect-[16/10] w-full'
        } bg-gradient-to-br from-purple-900/40 to-pink-900/40`}
      >
        <img
          src={post.image}
          alt={post.title}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            isCompact ? '' : 'rounded-t-2xl'
          }`}
          loading="lazy"
        />
        {!isCompact && (
          <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-semibold">
            {post.category}
          </span>
        )}
      </div>

      <div className={`${isCompact ? 'flex-1' : 'flex-1 p-6'}`}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3
          className={`mt-3 font-bold transition-colors group-hover:text-purple-400 ${
            isCompact ? 'text-base' : 'text-2xl'
          }`}
        >
          {post.title}
        </h3>

        {!isCompact && (
          <p className="mt-3 text-gray-300 line-clamp-3">{post.excerpt}</p>
        )}

        <div className={`mt-4 inline-flex items-center text-sm font-semibold text-purple-300`}>
          Leer artículo
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
