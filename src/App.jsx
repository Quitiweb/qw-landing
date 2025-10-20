import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import Blog from '@/components/Blog';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Arquitecto Informático | Soluciones Tecnológicas Infinitas</title>
        <meta name="description" content="Servicios profesionales de arquitectura informática para hacer crecer tu empresa a nivel tecnológico. Soluciones innovadoras y escalables." />
      </Helmet>
      <div className="min-h-screen overflow-x-hidden">
        <Hero />
        <Services />
        <ProjectsCarousel />
        <Blog />
        <Newsletter />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
