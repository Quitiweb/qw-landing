// Configuración centralizada de posts del blog
// Este archivo contiene la metadata de todos los posts disponibles

import Mierdificacion from '@/pages/blog/posts/Mierdificacion';
import Mestanza from '@/pages/blog/posts/Mestanza';

// Metadata de los posts para el carrusel y listados
export const postsMetadata = [
  {
    id: 1,
    slug: 'mestanza',
    title: 'Vega Mestanza: El Corazón de un Conflicto',
    excerpt: 'Progreso contra Patrimonio. La lucha por la última vega fértil de Málaga frente a una infraestructura declarada de urgencia.',
    date: '2025-11-11',
    readTime: '12 min',
    category: 'Activismo',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800',
    component: Mestanza,
  },
  {
    id: 2,
    slug: 'mierdificacion',
    title: 'El Bucle de la "Enshittification"',
    excerpt: 'Por qué tus plataformas favoritas (Facebook, Google, Amazon...) parecen empeorar día tras día.',
    date: '2025-11-08',
    readTime: '8 min',
    category: 'Capitalismo',
    image: '/thumbnail.kk.quitiweb.com.png',
    component: Mierdificacion,
  },
];

// Mapeo de slugs a componentes para el router
export const postsMap = postsMetadata.reduce((acc, post) => {
  acc[post.slug] = post.component;
  return acc;
}, {});

// Función para obtener los últimos N posts
export const getLatestPosts = (count = 3) => {
  return postsMetadata
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

// Función para obtener un post por slug
export const getPostBySlug = (slug) => {
  return postsMetadata.find(post => post.slug === slug);
};
