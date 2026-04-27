import React from 'react';
import { Helmet } from 'react-helmet';
import BlogLayout from '@/components/BlogLayout';

const ideas = [
  {
    name: 'Algorithmics Málaga Teatinos',
    city: 'Málaga',
    type: 'Curso estable',
    ages: '6-7 años',
    url: 'https://es.alg.academy/fundamentos-de-programacion',
    reason:
      'Encaja muy bien para empezar: pensamiento lógico, secuencias, resolución de problemas y primeros juegos/animaciones con Scratch Jr.',
  },
  {
    name: 'Technomatic Málaga',
    city: 'Málaga',
    type: 'Extraescolares y campamentos',
    ages: 'Niños y jóvenes',
    url: 'https://www.technomaticmalaga.com/',
    reason:
      'Tiene robótica, programación, competiciones y campamentos tecnológicos. El enfoque práctico y de proyecto suena mucho más interesante que la típica clase pasiva.',
  },
  {
    name: 'EducaGamer',
    city: 'Málaga y provincia',
    type: 'Cursos y campamentos',
    ages: '6-8 años en algunos programas',
    url: 'https://educagamer.com/',
    reason:
      'Me gusta porque sí aparece un tramo de edad muy útil para Hugo: programación para niños de 6 a 8 años, además de propuestas de videojuegos y creatividad digital.',
  },
  {
    name: 'Centro de Ciencia Principia',
    city: 'Málaga',
    type: 'Centro de ciencia / visitas / talleres',
    ages: 'Familiar',
    url: 'https://www.principia-malaga.com/',
    reason:
      'No es solo “mirar cosas”: tiene sala de experimentos, módulos interactivos, planetario, noches de astronomía y talleres. Buena mezcla de ciencia, espacio y juego.',
  },
  {
    name: 'OXO Museo del Videojuego',
    city: 'Málaga',
    type: 'Museo / posible agenda de eventos',
    ages: 'Familiar',
    url: 'https://oxomuseo.com/malaga/',
    reason:
      'Ya hemos estado y, aunque el museo de Málaga es pequeño, puede merecer la pena vigilar su agenda por si montan talleres, encuentros o actividades temporales.',
  },
  {
    name: 'Edubotika',
    city: 'Córdoba',
    type: 'Curso anual y formación tecnológica',
    ages: 'Chicos y chicas / sedes presenciales y online',
    url: 'https://edubotika.com/',
    reason:
      'Tiene programación y robótica con Scratch, Minecraft, Arduino, robots reales e IA. Es de las opciones más claras que he encontrado para tener Córdoba bien cubierta.',
  },
  {
    name: 'Junior Ingeniería Córdoba',
    city: 'Córdoba',
    type: 'STEAM / campamentos / talleres',
    ages: 'Principalmente 8-16 años, con talleres familiares puntuales',
    url: 'https://www.junioringenieria.es/cordoba/',
    reason:
      'Ahora mismo me parece más adecuado para vigilarlo que para meter a Hugo ya sin más, porque la franja fuerte arranca un poco más arriba. Aun así, sus talleres y campamentos pueden cuadrar.',
  },
  {
    name: 'Parque de las Ciencias',
    city: 'Granada',
    type: 'Museo / planetario / talleres',
    ages: 'Familiar',
    url: 'https://www.parqueciencias.com/',
    reason:
      'No está en Málaga, pero sí a distancia razonable para una salida potente. Tiene contenido permanente, talleres, planetario, Biodomo y propuestas educativas por edades.',
  },
];

function HugoTecnologiaAndalucia() {
  return (
    <BlogLayout>
      <Helmet>
        <html lang="es" />
        <title>Planes tech para niños en Málaga, Córdoba y cerca | Quitiweb</title>
        <link rel="canonical" href="https://quitiweb.com/blog/hugo-tecnologia-andalucia" />
        <meta
          name="description"
          content="Una selección curada de cursos, talleres, museos y planes tecnológicos para niños pequeños en Málaga, Córdoba y cerca, pensada desde el caso real de un niño de 7 años."
        />
      </Helmet>

      <article className="mx-auto max-w-5xl px-5 pb-20 text-white sm:px-8">
        <header className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-950/60 via-slate-900 to-cyan-950/60 px-6 py-14 text-center shadow-2xl sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/70">Guía práctica · 27 abril 2026</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
            Planes tech para niños en <span className="gradient-text">Málaga, Córdoba y cerca</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-200/90">
            Si tienes un peque al que le empiezan a tirar los robots, el espacio, la programación o los videojuegos, el problema no es la falta de ideas: es no enterarse a tiempo de lo que merece la pena. Así que he empezado a montar el mapa que me gustaría tener a mano para Hugo.
          </p>
        </header>

        <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
          <h2 className="text-2xl font-bold">La idea no es acumular enlaces: es separar el grano de la paja</h2>
          <div className="mt-5 space-y-4 text-white/85">
            <p>
              Hay mucha oferta que suena bien en una landing y luego se queda en humo, edades mal afinadas o actividades demasiado genéricas. Para un niño de 7 años, a mí me interesa otra cosa: sitios donde pueda tocar, construir, jugar, equivocarse y salir con ganas de volver.
            </p>
            <p>
              Por eso este primer recopilatorio mezcla tres tipos de plan: <strong>cursos estables</strong>, <strong>talleres o campamentos que conviene vigilar</strong> y <strong>espacios visitables</strong> que merecen una escapada en familia.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold">Lo más interesante que hay ahora mismo</h2>
            <span className="text-sm text-white/60">Selección inicial, curada a mano</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {ideas.map((item, index) => (
              <article key={item.name} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/70">#{String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-2 text-2xl font-semibold">{item.name}</h3>
                  </div>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {item.city}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/75">
                  <span className="rounded-full bg-white/10 px-3 py-1">{item.type}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">{item.ages}</span>
                </div>

                <p className="mt-5 text-white/85">{item.reason}</p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold text-fuchsia-100 transition-colors hover:border-fuchsia-300 hover:text-white"
                >
                  Ver sitio oficial
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
            <h2 className="text-2xl font-bold">Qué probaría yo primero con Hugo</h2>
            <ol className="mt-5 space-y-4 text-white/85">
              <li>
                <strong className="text-white">1. Un curso suave de entrada.</strong> Si la motivación sigue alta, lo sensato es empezar con una opción claramente adaptada a 6-8 años, tipo Algorithmics o EducaGamer.
              </li>
              <li>
                <strong className="text-white">2. Un sitio donde tocar ciencia de verdad.</strong> Principia en Málaga y el Parque de las Ciencias en Granada son buenos antídotos contra la tecnología en modo pantalla pura.
              </li>
              <li>
                <strong className="text-white">3. Vigilar campamentos y talleres cortos.</strong> Technomatic, EVAD y otros actores locales pueden sacar actividades muy buenas… pero muchas veces hay que enterarse justo cuando salen.
              </li>
            </ol>
          </article>

          <aside className="rounded-3xl border border-amber-300/20 bg-amber-400/10 p-8 shadow-xl">
            <h2 className="text-xl font-bold text-amber-100">Nota importante</h2>
            <p className="mt-4 text-amber-50/90">
              No todo lo que aparece aquí es un “evento de este fin de semana”. Parte del valor está en tener fichados los lugares y escuelas que conviene revisar a menudo para no llegar tarde a una inscripción interesante.
            </p>
          </aside>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-950/40 to-cyan-950/40 p-8 shadow-xl">
          <h2 className="text-2xl font-bold">Esto no se queda en un post suelto</h2>
          <p className="mt-4 text-white/85">
            La idea es ir manteniendo este radar vivo: detectar cursos, talleres, museos, puertas abiertas y campamentos que encajen con niños pequeños en Málaga, Córdoba y alrededor. Si aparece algo realmente bueno, lo iré añadiendo o sacaré un recopilatorio nuevo con lo que merezca de verdad la pena.
          </p>
          <p className="mt-4 text-white/70">
            Si tú también andas buscando este tipo de planes, guarda esta página. Mi intención no es publicar por publicar, sino construir un sitio al que volver cuando te preguntes: <em>“¿hay algo chulo este mes para un peque al que le tiran los robots, el espacio o hacer jueguecillos?”</em>
          </p>
        </section>
      </article>
    </BlogLayout>
  );
}

export default HugoTecnologiaAndalucia;
