import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';

function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#050417]">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 p-5 sm:p-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-300 transition-colors hover:text-pink-400 group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Volver a Quitiweb</span>
        </Link>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 transition-colors hover:border-purple-400 hover:text-white"
        >
          <BookOpen size={18} />
          Ir al Blog
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default BlogLayout;
