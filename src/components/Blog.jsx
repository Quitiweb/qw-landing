import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getLatestPosts } from '@/data/blogPosts';

const formatDate = (date) =>
  new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));

const Blog = () => {
  const posts = getLatestPosts(6);
  const hasPosts = posts.length > 0;

  return (
    <section id="blog" className="relative px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-pink-900/10" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">Blog</p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Historias y análisis <span className="gradient-text">desde la trinchera</span>
            </h2>
            <p className="mt-3 max-w-xl text-lg text-gray-300">
              Reflexiones sobre tecnología, sociedad y futuros posibles: desde inteligencia artificial y robótica hasta psicología, filosofía y cultura digital.
            </p>
          </motion.div>

          <Link
            to="/blog"
            className="inline-flex items-center justify-center self-start rounded-full border border-purple-500/40 bg-purple-500/10 px-6 py-2 text-sm font-semibold text-purple-200 transition-colors hover:border-purple-400 hover:text-white"
          >
            Ver todos los artículos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="relative">
          {hasPosts ? (
            <div className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-4 pt-2 sm:px-0" style={{ scrollbarWidth: 'thin' }}>
              {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative min-w-[280px] max-w-sm flex-1"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-purple-500/10 to-pink-500/10 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white transition-colors group-hover:text-purple-300">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-gray-300 line-clamp-3">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-purple-300">
                      Leer artículo
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
              ))}
            </div>
          ) : (
            <div className="glass-effect rounded-3xl border border-white/5 p-10 text-center text-gray-300">
              Muy pronto compartiré los primeros artículos. Mientras tanto, puedes seguir las novedades en el boletín.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
