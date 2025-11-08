import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      const defaultPosts = [
        {
          id: 1,
          title: 'El Bucle de la Enshittification',
          excerpt: 'Por qué tus plataformas favoritas (Facebook, Google, Amazon...) parecen empeorar día tras día.',
          date: '2025-11-08',
          readTime: '8 min',
          category: 'Capitalismo',
          image: 'public/thumbnail.kk.quitiweb.com.png',
          url: 'https://kk.quitiweb.com/',
        },
        {
          id: 2,
          title: 'Optimización de Bases de Datos en Producción',
          excerpt: 'Técnicas avanzadas para mejorar el rendimiento de tus bases de datos.',
          date: '2024-01-10',
          readTime: '6 min',
          category: 'Bases de Datos',
          image: 'Database optimization dashboard with performance metrics and query analysis',
        },
        {
          id: 3,
          title: 'Seguridad en Aplicaciones Cloud',
          excerpt: 'Mejores prácticas para proteger tus aplicaciones en la nube.',
          date: '2024-01-05',
          readTime: '10 min',
          category: 'Seguridad',
          image: 'Cloud security concept with encryption shields and secure connections',
        },
      ];
      localStorage.setItem('blogPosts', JSON.stringify(defaultPosts));
      setPosts(defaultPosts);
    }
  }, []);

  const handleReadMore = (post) => {
    if (post.url) {
      window.open(post.url, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: "🚧 Esta función aún no está implementada",
        description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
      });
    }
  };

  return (
    <section id="blog" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Blog <span className="gradient-text">Personal</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comparto conocimientos y experiencias sobre tecnología y arquitectura de software
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group cursor-pointer"
              onClick={() => post.url && handleReadMore(post)}
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={post.title}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  onClick={() => handleReadMore(post)}
                  className="text-purple-400 hover:text-purple-300 p-0 h-auto font-semibold group/btn"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
