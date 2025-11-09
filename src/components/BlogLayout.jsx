import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function BlogLayout({ children }) {
  return (
    <div className="min-h-screen">
      <nav className="max-w-4xl mx-auto p-5 sm:p-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver a Quitiweb</span>
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default BlogLayout;
