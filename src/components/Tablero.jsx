import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

// Las casillas se leen en directo de tablero.quitiweb.com, así que la
// sección se actualiza cada mañana sin tener que volver a publicar esta web.
const TABLERO_URL = 'https://tablero.quitiweb.com';
const MAX_CASILLAS = 6;

const formatDate = (date) =>
  new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));

const fetchJson = async (path) => {
  const response = await fetch(`${TABLERO_URL}/${path}`);
  if (!response.ok) throw new Error(`${path}: ${response.status}`);
  return response.json();
};

const Tablero = () => {
  const [casillas, setCasillas] = useState([]);
  const [estado, setEstado] = useState('cargando');

  useEffect(() => {
    let activo = true;

    const cargar = async () => {
      try {
        const indice = await fetchJson('datos/indice.json');
        const ultimas = (indice.entradas || []).slice(0, MAX_CASILLAS);
        const entradas = await Promise.all(
          ultimas.map(async ({ id }) => ({ id, ...(await fetchJson(`datos/entradas/${id}.json`)) }))
        );
        if (activo) {
          setCasillas(entradas);
          setEstado('listo');
        }
      } catch (error) {
        if (activo) setEstado('error');
      }
    };

    cargar();
    return () => {
      activo = false;
    };
  }, []);

  return (
    <section id="tablero" className="relative px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/10 via-transparent to-purple-900/10" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">El Tablero</p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Una casilla <span className="gradient-text">cada mañana</span>
            </h2>
            <p className="mt-3 max-w-xl text-lg text-gray-300">
              Cuaderno de ideas de Rafael y Claude. Solo vemos una porción del tablero: cada día, una pregunta, lo que otros han pensado sobre ella, lo que pensamos nosotros y lo que queda por ver.
            </p>
          </motion.div>

          <a
            href={TABLERO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center self-start rounded-full border border-purple-500/40 bg-purple-500/10 px-6 py-2 text-sm font-semibold text-purple-200 transition-colors hover:border-purple-400 hover:text-white"
          >
            Abrir el tablero
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="relative">
          {casillas.length > 0 ? (
            <div className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-4 pt-2 sm:px-0" style={{ scrollbarWidth: 'thin' }}>
              {casillas.map((casilla, index) => (
                <motion.div
                  key={casilla.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative min-w-[280px] max-w-sm flex-1"
                >
                  <a
                    href={`${TABLERO_URL}/#e-${casilla.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                      <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-semibold text-white">
                        Entrada {casilla.numero}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(casilla.fecha)}
                      </span>
                    </div>
                    {casilla.hilo && (
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-purple-300">{casilla.hilo}</p>
                    )}
                    <h3 className="mt-2 text-2xl font-semibold text-white transition-colors group-hover:text-purple-300">
                      {casilla.titulo}
                    </h3>
                    <p className="mt-3 text-gray-300 line-clamp-3">{casilla.resumen}</p>
                    {casilla.pregunta && (
                      <p className="mt-4 flex-1 border-l-2 border-purple-400/40 pl-3 text-sm italic text-gray-400 line-clamp-3">
                        {casilla.pregunta}
                      </p>
                    )}
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-purple-300">
                      Leer la casilla
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="glass-effect rounded-3xl border border-white/5 p-10 text-center text-gray-300">
              {estado === 'cargando'
                ? 'Abriendo el cuaderno…'
                : 'Las casillas se leen en tablero.quitiweb.com. Ábrelo para ver la de hoy.'}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tablero;
