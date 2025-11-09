import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Mierdificacion from './posts/Mierdificacion';

// Mapeo de slugs a componentes
const posts = {
  'mierdificacion': Mierdificacion,
  // Aquí puedes añadir más posts en el futuro
  // 'otro-post': OtroPost,
};

function BlogPost() {
  const { slug } = useParams();
  const PostComponent = posts[slug];

  if (!PostComponent) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <PostComponent />
      <Footer />
    </>
  );
}

export default BlogPost;
