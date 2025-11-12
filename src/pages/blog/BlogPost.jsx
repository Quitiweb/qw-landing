import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import PostCard from '@/components/blog/PostCard';
import { postsMap, getSuggestedPosts, getPostBySlug } from '@/data/blogPosts';

function BlogPost() {
  const { slug } = useParams();
  const PostComponent = postsMap[slug];
  const metadata = getPostBySlug(slug);
  const suggestions = getSuggestedPosts(slug, 3);

  if (!PostComponent) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <PostComponent />
      {suggestions.length > 0 && (
        <section className="bg-[#050417] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-purple-300/80">Sigue leyendo</p>
              <h2 className="mt-2 text-3xl font-bold">
                Más artículos{metadata?.title ? ` desde Quitiweb` : ''}
              </h2>
              <p className="mt-2 max-w-xl text-gray-300">
                Explora otras historias y análisis sobre tecnología, cultura digital y estrategia.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 px-6 py-2 text-sm font-semibold text-purple-200 transition-colors hover:border-purple-400 hover:text-white"
            >
              Ir al blog
            </Link>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {suggestions.map((post) => (
              <PostCard key={post.slug} post={post} variant="compact" />
            ))}
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}

export default BlogPost;
