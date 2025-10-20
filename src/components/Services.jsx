import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Lock, Zap, Globe, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Arquitectura Cloud',
      description: 'Diseño e implementación de infraestructuras cloud escalables y resilientes.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      title: 'Bases de Datos',
      description: 'Optimización y diseño de sistemas de almacenamiento de alto rendimiento.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Lock,
      title: 'Seguridad',
      description: 'Implementación de protocolos de seguridad y protección de datos.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Optimización',
      description: 'Mejora del rendimiento y eficiencia de sistemas existentes.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Globe,
      title: 'Aplicaciones Web',
      description: 'Desarrollo de aplicaciones web modernas y escalables.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Cpu,
      title: 'Microservicios',
      description: 'Arquitecturas distribuidas y sistemas de microservicios.',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Servicios <span className="gradient-text">Profesionales</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
