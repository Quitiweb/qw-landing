import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Arquitectura Informática de Vanguardia</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Posibilidades{' '}
          <span className="gradient-text">Infinitas</span>
          <br />
          para tu Empresa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Transformo ideas en soluciones tecnológicas escalables. 
          Arquitectura informática que impulsa el crecimiento de tu negocio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/50 transition-all hover:scale-105"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Ver Proyectos
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('services')}
            className="glass-effect border-2 border-purple-400/50 hover:bg-purple-500/20 px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
          >
            <Code2 className="w-5 h-5 mr-2" />
            Mis Servicios
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: '10+', label: 'Proyectos Completados' },
            { number: '100%', label: 'Satisfacción Cliente' },
            { number: '∞', label: 'Posibilidades' },
          ].map((stat, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
