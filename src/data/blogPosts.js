// Configuración centralizada de posts del blog
// Este archivo contiene la metadata de todos los posts disponibles

import Mierdificacion from '@/pages/blog/posts/Mierdificacion';
import Mestanza from '@/pages/blog/posts/Mestanza';
import MierdificacionIA from '@/pages/blog/posts/MierdificacionIA';
import RobotsHumanoides from '@/pages/blog/posts/RobotsHumanoides';

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
  image: '/blog/mestanza.png',
    author: 'Quitiweb',
    tags: ['Activismo', 'Infraestructura', 'Málaga'],
    featured: true,
    component: Mestanza,
  },
  {
    id: 2,
    slug: 'mierdificacion-ia',
    title: 'El Fantasma de la "Mierdificación" en la IA',
    excerpt: 'Análisis sobre si las plataformas de IA (como ChatGPT o Gemini) seguirán el mismo ciclo de "enshittification" que las redes sociales.',
    date: '2025-11-10',
    readTime: '7 min',
    category: 'Inteligencia Artificial',
    image: '/blog/mierdificacion.png',
    author: 'Quitiweb',
    tags: ['IA', 'Monopolios', 'Futuro'],
    featured: false,
    component: MierdificacionIA,
  },
  {
    id: 3,
    slug: 'robots-humanoides',
    title: 'Robots Humanoides en Málaga: ¿Cuándo por 10.000€?',
    excerpt: 'Una estimación realista sobre cuándo podremos comprar un robot humanoide útil para el hogar en Málaga por unos 10.000€.',
    date: '2025-11-09',
    readTime: '6 min',
    category: 'Robótica',
    image: '/blog/mierdificacion.png',
    author: 'Quitiweb',
    tags: ['Robótica', 'IA', 'Futuro'],
    featured: false,
    component: RobotsHumanoides,
  },
  {
    id: 4,
    slug: 'mierdificacion',
    title: 'El Bucle de la "Enshittification"',
    excerpt: 'Por qué tus plataformas favoritas (Facebook, Google, Amazon...) parecen empeorar día tras día.',
    date: '2025-11-08',
    readTime: '8 min',
    category: 'Monopolios',
  image: '/blog/mierdificacion.png',
    author: 'Quitiweb',
    tags: ['Monopolios', 'Plataformas', 'Estrategia'],
    featured: false,
    component: Mierdificacion,
  },
];

// Mapeo de slugs a componentes para el router
export const postsMap = postsMetadata.reduce((acc, post) => {
  acc[post.slug] = post.component;
  return acc;
}, {});

// Lista ordenada por fecha descendente
export const getAllPosts = () =>
  [...postsMetadata].sort((a, b) => new Date(b.date) - new Date(a.date));

// Función para obtener los últimos N posts
export const getLatestPosts = (count = 3) => {
  return getAllPosts().slice(0, count);
};

// Función para obtener un post por slug
export const getPostBySlug = (slug) => {
  return postsMetadata.find(post => post.slug === slug);
};

// Función para obtener posts sugeridos excluyendo el actual
export const getSuggestedPosts = (slug, count = 4) => {
  return getAllPosts()
    .filter(post => post.slug !== slug)
    .slice(0, count);
};
