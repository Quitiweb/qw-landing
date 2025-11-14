import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: 'Task Manager',
      url: 'task.quitiweb.com',
      description: 'Aplicación de gestión de tareas con interfaz intuitiva y sincronización en tiempo real.',
      image: '/projects/tareas-equilibradas.png',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      name: 'Menú Familiar',
      url: 'menu.quitiweb.com',
      description: 'Menú familiar personalizado para facilitar la planificación y organización de comidas en el hogar.',
      image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
      tags: ['Angular', 'Firebase', 'TypeScript'],
    },
    {
      name: 'Taxi Málaga',
      url: 'taxi.quitiweb.com',
      description: 'Tu servicio de taxi confiable y eficiente en Málaga.',
      image: 'https://i.imgur.com/vn8atfy.png',
      tags: ['Vue.js', 'PostgreSQL', 'AWS'],
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explora las aplicaciones y plataformas que he desarrollado
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass-effect rounded-3xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="flex flex-col justify-center space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{projects[currentIndex].name}</h3>
                      <a
                        href={`https://${projects[currentIndex].url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                      >
                        {projects[currentIndex].url}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {projects[currentIndex].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentIndex].tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      onClick={() => window.open(`https://${projects[currentIndex].url}`, '_blank')}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-fit"
                    >
                      Visitar Proyecto
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                    <img
                      className="w-full h-full object-cover"
                      alt={`Screenshot of ${projects[currentIndex].name}`}
                      src={projects[currentIndex].image}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6">
            <Button
              onClick={prevProject}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full glass-effect border-2 border-purple-400/50 hover:bg-purple-500/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6">
            <Button
              onClick={nextProject}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full glass-effect border-2 border-purple-400/50 hover:bg-purple-500/20"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
