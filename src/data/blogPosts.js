// Configuración centralizada de posts del blog
// Este archivo contiene la metadata de todos los posts disponibles

import Mierdificacion from '@/pages/blog/posts/Mierdificacion';
import Mestanza from '@/pages/blog/posts/Mestanza';
import MierdificacionIA from '@/pages/blog/posts/MierdificacionIA';
import RobotsHumanoides from '@/pages/blog/posts/RobotsHumanoides';
import Snails from '@/pages/blog/posts/Snails';
import HugoTecnologiaAndalucia from '@/pages/blog/posts/HugoTecnologiaAndalucia';
import CernNuevaFisica from '@/pages/blog/posts/CernNuevaFisica';
import IAEconomiaNoCuadra from '@/pages/blog/posts/IAEconomiaNoCuadra';
import TarifaLuzPVPC from '@/pages/blog/posts/TarifaLuzPVPC';
import MalagaCapitalIADES from '@/pages/blog/posts/MalagaCapitalIADES';
import AyudasReformaCocinaBano from '@/pages/blog/posts/AyudasReformaCocinaBano';
import ClaudeUnificaPymes from '@/pages/blog/posts/ClaudeUnificaPymes';

// Metadata de los posts para el carrusel y listados
export const postsMetadata = [
  {
    id: 12,
    slug: 'claude-panel-control-pyme',
    title: 'Claude quiere convertirse en el panel de control de tu pyme',
    excerpt: 'Resumen claro del nuevo paquete de Claude para pequeñas empresas: conectores, aprobaciones humanas y la promesa de gestionar operaciones desde una sola pestaña.',
    date: '2026-05-26',
    readTime: '5 min',
    category: 'Inteligencia Artificial',
    image: '/blog/claude-panel-control-pyme.svg',
    author: 'Quitiweb',
    tags: ['IA', 'Claude', 'Pymes', 'Automatización', 'Anthropic'],
    featured: true,
    component: ClaudeUnificaPymes,
  },
  {
    id: 11,
    slug: 'ayudas-reformar-cocina-bano-eficiencia-energetica',
    title: 'Ayudas para reformar cocina o baño y eficiencia energética: qué hay de verdad tras los 21.400 €',
    excerpt: 'La cifra existe, pero no como la están vendiendo. Guía completa con ayudas reales, requisitos, plazos y pasos para solicitar subvenciones o deducciones por rehabilitación energética.',
    date: '2026-05-20',
    readTime: '8 min',
    category: 'Vivienda',
    image: '/blog/ayudas-reformar-cocina-bano-eficiencia-energetica.svg',
    author: 'Quitiweb',
    tags: ['Vivienda', 'Reformas', 'Eficiencia energética', 'Ayudas', 'IRPF'],
    featured: true,
    component: AyudasReformaCocinaBano,
  },
  {
    id: 10,
    slug: 'malaga-capital-ia-des-2026',
    title: 'Málaga vuelve a venderse como capital de la IA con el DES 2026',
    excerpt: 'Resumen claro de la décima edición del Digital Enterprise Show en Málaga y de lo que realmente dice este evento sobre el papel de la ciudad en la economía de la IA.',
    date: '2026-05-15',
    readTime: '5 min',
    category: 'Málaga tech',
    image: '/blog/malaga-capital-ia-des-2026.svg',
    author: 'Quitiweb',
    tags: ['Málaga', 'IA', 'DES', 'Eventos', 'Tecnología'],
    featured: true,
    component: MalagaCapitalIADES,
  },
  {
    id: 9,
    slug: 'bruselas-tarifa-regulada-luz-espana',
    title: 'Bruselas presiona para acabar con la tarifa regulada de la luz en España',
    excerpt: 'Resumen en español de la presión de la Comisión Europea sobre la PVPC, el posible impacto en la factura y por qué el Gobierno no parece dispuesto a mover ficha de golpe.',
    date: '2026-05-11',
    readTime: '5 min',
    category: 'Energía',
    image: '/blog/bruselas-tarifa-regulada-luz-espana.svg',
    author: 'Quitiweb',
    tags: ['Energía', 'España', 'PVPC', 'UE'],
    featured: true,
    component: TarifaLuzPVPC,
  },
  {
    id: 8,
    slug: 'economia-ia-no-cuadra',
    title: 'La economía de la IA no cuadra (y Copilot lo acaba de admitir)',
    excerpt: 'Resumen claro del análisis de Ed Zitron sobre por qué las suscripciones de IA no salen y por qué el giro de GitHub Copilot al pago por uso puede ser solo el principio.',
    date: '2026-05-07',
    readTime: '6 min',
    category: 'Inteligencia Artificial',
    image: '/blog/economia-ia-no-cuadra.svg',
    author: 'Quitiweb',
    tags: ['IA', 'Copilot', 'Economía', 'SaaS'],
    featured: true,
    component: IAEconomiaNoCuadra,
  },
  {
    id: 7,
    slug: 'cern-grieta-modelo-estandar',
    title: 'Último experimento del CERN: una grieta en el modelo estándar',
    excerpt: 'El LHCb detecta una anomalía en la desintegración de mesones B que podría apuntar a nueva física más allá del modelo estándar, aunque aún falta confirmación definitiva.',
    date: '2026-04-28',
    readTime: '5 min',
    category: 'Ciencia',
    image: '/blog/cern-grieta-modelo-estandar.svg',
    author: 'Quitiweb',
    tags: ['CERN', 'Física', 'Modelo estándar', 'LHCb'],
    featured: true,
    component: CernNuevaFisica,
  },
  {
    id: 6,
    slug: 'hugo-tecnologia-andalucia',
    title: 'Planes tech para niños en Málaga, Córdoba y cerca',
    excerpt: 'Cursos, talleres, museos y escapadas que sí merece la pena vigilar si tienes un peque de 7 años al que le tiran los robots, la programación o el espacio.',
    date: '2026-04-27',
    readTime: '8 min',
    category: 'Familia tech',
    image: '/blog/hugo-tecnologia-andalucia.svg',
    author: 'Quitiweb',
    tags: ['Málaga', 'Córdoba', 'Niños', 'Robótica', 'Programación'],
    featured: true,
    component: HugoTecnologiaAndalucia,
  },
  {
    id: 5,
    slug: 'snails',
    title: 'El Don de los Caracoles: la gran evasión',
    excerpt: 'Caracoles, oficinas vacías y un vacío legal de 1963 para borrar £286.000 en tasas comerciales cada año.',
    date: '2025-12-06',
    readTime: '9 min',
    category: 'Crónica',
    image: '/blog/snails.png',
    author: 'Quitiweb',
    tags: ['Evasión fiscal', 'Reino Unido', 'Historias'],
    featured: false,
    component: Snails,
  },
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
  image: '/blog/mierdificacion-ia.png',
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
  image: '/blog/robots-humanoides.png',
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
