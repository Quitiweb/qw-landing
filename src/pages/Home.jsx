import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import Blog from '@/components/Blog';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

function Home() {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Quitiweb | Arquitectura informática y soluciones digitales</title>
        <link rel="canonical" href="https://quitiweb.com" />
        <meta
          name="description"
          content="Arquitecto informático especializado en diseñar y escalar productos digitales, automatizaciones y plataformas cloud a medida para empresas ambiciosas."
        />
        <meta
          name="keywords"
          content="arquitectura informática, transformación digital, automatización, software a medida, consultoría tecnológica"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Quitiweb" />
        <meta property="og:title" content="Quitiweb | Arquitectura informática y soluciones digitales" />
        <meta
          property="og:description"
          content="Consultoría tecnológica para impulsar productos digitales escalables, integraciones cloud y automatizaciones que aceleran tu negocio."
        />
        <meta property="og:url" content="https://quitiweb.com" />
        <meta
          property="og:image"
          content="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/119580eb-abd9-4191-b93a-f01938786700/public"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quitiweb | Arquitectura informática y soluciones digitales" />
        <meta
          name="twitter:description"
          content="Soluciones digitales a medida, arquitectura cloud y automatizaciones diseñadas para escalar tu empresa."
        />
        <meta
          name="twitter:image"
          content="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/119580eb-abd9-4191-b93a-f01938786700/public"
        />
      </Helmet>
      <Hero />
      <Services />
      <ProjectsCarousel />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
