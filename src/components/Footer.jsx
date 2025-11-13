import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Arquitecto Informático</h3>
            <p className="text-gray-400">
              Transformando ideas en soluciones tecnológicas escalables y eficientes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-purple-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Sígueme</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Quitiweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-purple-500/20 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rafaelruizromero/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-purple-500/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Quitiweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-purple-500/20 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:quiti.kites@gmail.com"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-purple-500/20 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {currentYear} Arquitecto Informático. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
