import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="max-w-4xl mx-auto p-5 sm:p-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Volver a Quitiweb</span>
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default BlogLayout;
