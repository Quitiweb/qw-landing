import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import PostCard from '@/components/blog/PostCard';
import { getAllPosts } from '@/data/blogPosts';

const formatDateLong = (date) =>
  new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

const collectTags = (posts) => {
  const unique = new Set();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => unique.add(tag));
  });
  return Array.from(unique);
};

function BlogHome() {
  const posts = useMemo(() => getAllPosts(), []);
  const [featured, ...rest] = posts;
  const tags = useMemo(() => collectTags(posts), [posts]);

  return (
    <div className="min-h-screen bg-[#050417] text-white">
      <Helmet>
        <html lang="es" />
        <title>Blog | Quitiweb</title>
        <link rel="canonical" href="https://quitiweb.com/blog" />
        <meta
          name="description"
          content="Artículos y análisis sobre arquitectura informática, innovación tecnológica y estrategias digitales escritos por Quitiweb."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog | Quitiweb" />
        <meta
          property="og:description"
          content="Perspectivas sobre tecnología aplicada al crecimiento empresarial, automatización y cultura digital."
        />
        <meta property="og:url" content="https://quitiweb.com/blog" />
        {featured?.image && <meta property="og:image" content={featured.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Quitiweb" />
        <meta
          name="twitter:description"
          content="Estrategia, producto y arquitectura informática para empresas que quieren ir más allá."
        />
        {featured?.image && <meta name="twitter:image" content={featured.image} />}
      </Helmet>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-pink-900/10" />

        <div className="relative mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
          <header className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1 text-sm font-semibold text-purple-300">
              Blog de Quitiweb
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
              Ideas para construir tecnología significativa
            </h1>
            <p className="mt-4 text-lg text-gray-300 md:text-xl">
              Arquitectura informática, estrategia digital y casos reales para inspirar tus próximos proyectos.
            </p>
          </header>

          <div className="grid gap-10 pb-20 lg:grid-cols-[310px_1fr]">
            <aside className="order-2 space-y-8 lg:order-1">
              <div className="glass-effect rounded-3xl p-6">
                <h2 className="text-lg font-semibold text-purple-200">Últimos artículos</h2>
                <div className="mt-6 space-y-5">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="group block rounded-2xl p-4 transition-colors hover:bg-white/5"
                    >
                      <p className="text-xs uppercase tracking-wide text-purple-300/80">{post.category}</p>
                      <p className="mt-2 text-sm font-semibold text-white group-hover:text-purple-300">
                        {post.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">{formatDateLong(post.date)}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {tags.length > 0 && (
                <div className="glass-effect rounded-3xl p-6">
                  <h2 className="text-lg font-semibold text-purple-200">Temas recurrentes</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </aside>

            <main className="order-1 space-y-12 lg:order-2">
              {featured && (
                <Link
                  to={`/blog/${featured.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                >
                  <div className="relative h-72 w-full overflow-hidden sm:h-[420px]">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex flex-wrap items-center gap-3 text-sm text-purple-200/90">
                        <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                          Destacado
                        </span>
                        <span>{formatDateLong(featured.date)}</span>
                        <span>• {featured.readTime}</span>
                      </div>
                      <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                        {featured.title}
                      </h2>
                      <p className="mt-3 max-w-2xl text-base text-gray-200 md:text-lg">{featured.excerpt}</p>
                    </div>
                  </div>
                </Link>
              )}

              <div className="grid gap-8 md:grid-cols-2">
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl">
          <Newsletter />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogHome;
