import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import BlogLayout from '@/components/BlogLayout';

const protagonistCards = [
  {
    icon: '👴🏻',
    title: 'Terry Ball',
    description: 'Ex vendedor de zapatos, experto en vacíos legales y con una memoria enciclopédica de normativas agrícolas británicas.'
  },
  {
    icon: '🇮🇹',
    title: '“Giuseppe”',
    description: 'Ex convicto napolitano que cuida las cajas de caracoles en Lancashire como “favor” personal.'
  },
  {
    icon: '🏢',
    title: 'Consejo de Westminster',
    description: 'El enemigo recurrente. Reclama £286k en impuestos cada año y siempre llega un poco tarde.'
  }
];

const schemeSteps = [
  'Crear una empresa fantasma sin activos ni historial (“Snail Primary Products Ltd”).',
  'Alquilar una planta de oficinas vacía por una tarifa irrisoria.',
  'Llenar las salas con cajas, caracoles y lechuga fresca.',
  'Solicitar exención por “piscifactoría” porque la ley considera a los caracoles como peces.',
  'Cuando llega el recaudador, liquidar la empresa y renacer como otra distinta (técnica Ave Fénix).'
];

const empireScenarios = {
  legend: {
    label: 'Leyenda urbana',
    data: [15, 35, 40, 10],
    summary: 'El relato épico de Terry: algunos caracoles reales, muchas empresas fantasma y toneladas de audacia.'
  },
  audit: {
    label: 'Auditoría 2024',
    data: [8, 45, 15, 32],
    summary: 'Versión oficial filtrada: menos caracoles, más papeleo y bastante burocracia para sostener el mito.'
  }
};

function Snails() {
  const [isChartReady, setIsChartReady] = useState(false);
  const [monthlyFee, setMonthlyFee] = useState(1250);
  const [scenario, setScenario] = useState('legend');
  const chartsRef = useRef({ cost: null, empire: null });

  const annualTerryCost = monthlyFee * 12;

  useEffect(() => {
    if (window.Chart) {
      setIsChartReady(true);
      return () => destroyCharts();
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    script.onload = () => setIsChartReady(true);
    document.body.appendChild(script);

    return () => {
      destroyCharts();
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!isChartReady) return;
    initCharts();

    return () => {
      destroyCharts();
    };
  }, [isChartReady]);

  useEffect(() => {
    const costChart = chartsRef.current.cost;
    if (costChart) {
      costChart.data.datasets[0].data = [286000, annualTerryCost];
      costChart.update();
    }
  }, [annualTerryCost]);

  useEffect(() => {
    const empireChart = chartsRef.current.empire;
    if (empireChart) {
      empireChart.data.datasets[0].data = empireScenarios[scenario].data;
      empireChart.update();
    }
  }, [scenario]);

  const destroyCharts = () => {
    Object.values(chartsRef.current).forEach((chart) => chart?.destroy());
    chartsRef.current = { cost: null, empire: null };
  };

  const initCharts = () => {
    const Chart = window.Chart;
    if (!Chart) return;

    const costCtx = document.getElementById('snailsCostChart')?.getContext('2d');
    if (costCtx) {
      chartsRef.current.cost?.destroy();

      const gradientTax = costCtx.createLinearGradient(0, 0, 0, 320);
      gradientTax.addColorStop(0, 'rgba(248, 113, 113, 0.9)');
      gradientTax.addColorStop(1, 'rgba(248, 113, 113, 0.15)');

      const gradientSnail = costCtx.createLinearGradient(0, 0, 0, 320);
      gradientSnail.addColorStop(0, 'rgba(129, 140, 248, 0.9)');
      gradientSnail.addColorStop(1, 'rgba(129, 140, 248, 0.15)');

      chartsRef.current.cost = new Chart(costCtx, {
        type: 'bar',
        data: {
          labels: ['Pagar tasas comerciales', 'Contratar a Terry'],
          datasets: [
            {
              label: 'Coste anual (£)',
              backgroundColor: [gradientTax, gradientSnail],
              borderColor: ['#f87171', '#818cf8'],
              borderWidth: 2,
              borderRadius: 18,
              data: [286000, annualTerryCost]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(6, 11, 30, 0.9)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1,
              callbacks: {
                label: (context) => ` £${context.parsed.y.toLocaleString('en-GB')}`
              }
            }
          },
          scales: {
            x: {
              ticks: { color: 'rgba(226, 232, 240, 0.9)' },
              grid: { display: false }
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: 'rgba(226, 232, 240, 0.7)',
                callback: (value) => `£${(value / 1000).toFixed(0)}k`
              },
              grid: { color: 'rgba(148, 163, 184, 0.15)' }
            }
          }
        }
      });
    }

    const empireCtx = document.getElementById('snailsEmpireChart')?.getContext('2d');
    if (empireCtx) {
      chartsRef.current.empire?.destroy();

      chartsRef.current.empire = new Chart(empireCtx, {
        type: 'doughnut',
        data: {
          labels: ['Caracoles reales', 'Empresas fantasma', 'Audacia pura', 'Burocracia'],
          datasets: [
            {
              data: empireScenarios[scenario].data,
              backgroundColor: ['#34d399', '#cbd5f5', '#facc15', '#f472b6'],
              hoverOffset: 8,
              borderWidth: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '68%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: 'rgba(226, 232, 240, 0.9)',
                usePointStyle: true,
                pointStyle: 'circle'
              }
            },
            tooltip: {
              backgroundColor: 'rgba(6, 11, 30, 0.9)',
              callbacks: {
                label: (context) => `${context.label}: ${context.parsed}%`
              }
            }
          }
        }
      });
    }
  };

  return (
    <BlogLayout>
      <Helmet>
        <html lang="es" />
        <title>El Don de los Caracoles: la gran evasión | Quitiweb</title>
        <link rel="canonical" href="https://quitiweb.com/blog/snails" />
        <meta
          name="description"
          content="Cómo Terry Ball y sus caracoles evitan las tasas comerciales británicas convirtiendo oficinas vacías en &quot;piscifactorías&quot; improvisadas."
        />
      </Helmet>

      <article className="relative mx-auto max-w-5xl px-5 pb-20 text-white sm:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-indigo-950 to-black" />

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/70 via-indigo-900/50 to-slate-950/70 px-6 py-16 text-center shadow-2xl sm:px-12">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-16 left-10 h-48 w-48 rounded-full bg-purple-500/30 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-200/70">Crónica clandestina</p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            El Don de los Caracoles: la gran evasión fiscal de Terry Ball
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-200/90">
            Oficinas vacías, cajas con moluscos y una ley agrícola de 1963. Así funciona el plan para convertir rascacielos londinenses en piscifactorías improvisadas y borrar £286.000 de impuestos cada año.
          </p>
          <motion.span
            aria-hidden
            className="absolute bottom-6 left-0 text-4xl"
            animate={{ x: ['-10%', '110%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            🐌
          </motion.span>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {protagonistCards.map((card) => (
            <article key={card.title} className="glass-effect rounded-3xl border border-white/10 p-6 shadow-xl">
              <span className="text-4xl" aria-hidden>
                {card.icon}
              </span>
              <h2 className="mt-4 text-xl font-semibold">{card.title}</h2>
              <p className="mt-2 text-sm text-slate-200/90">{card.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
          <header className="flex flex-col gap-3 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-200/70">Manual operativo</p>
              <h2 className="text-3xl font-bold">El bucle del caracol en cinco movimientos</h2>
            </div>
            <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-100">
              Vacío legal en acción
            </span>
          </header>
          <ol className="mt-8 space-y-4">
            {schemeSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-2xl border border-white/5 bg-black/30 p-5"
              >
                <span className="text-3xl font-bold text-purple-300">{index + 1}</span>
                <p className="text-slate-200/90">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-950/80 p-6 shadow-2xl">
            <header className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-200/60">Simulador de costes</p>
              <h2 className="mt-2 text-2xl font-bold">¿Cuánto cuesta contratar a Terry?</h2>
              <p className="mt-3 text-sm text-slate-300">
                Ajusta su tarifa mensual de "mantenimiento" y compara contra las tasas comerciales de Westminster.
              </p>
            </header>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
              <label className="text-xs uppercase tracking-[0.3em] text-purple-200/60">Tarifa mensual</label>
              <p className="mt-1 text-3xl font-bold">£{monthlyFee.toLocaleString('en-GB')}</p>
              <input
                type="range"
                min={500}
                max={2500}
                step={250}
                value={monthlyFee}
                onChange={(event) => setMonthlyFee(Number(event.target.value))}
                className="mt-4 w-full accent-purple-400"
              />
              <div className="mt-2 flex justify-between text-xs text-slate-400">
                <span>£500</span>
                <span>£1.5k</span>
                <span>£2.5k</span>
              </div>
            </div>
            <div className="mt-6 h-72">
              <canvas id="snailsCostChart" />
            </div>
            <p className="mt-3 text-xs text-slate-400 text-center">
              *£286k es la tasa comercial anual estimada para oficinas prime de Londres.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-gradient-to-b from-indigo-900/70 to-slate-950/80 p-6 shadow-2xl">
            <header className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-200/60">Imperio caracol</p>
              <h2 className="mt-2 text-2xl font-bold">Ingredientes del negocio</h2>
              <p className="mt-3 text-sm text-slate-300">
                Alterna entre la historia oficial y la versión de Terry para ver cómo se reparte la mezcla.
              </p>
            </header>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {Object.entries(empireScenarios).map(([key, value]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setScenario(key)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    scenario === key
                      ? 'border-purple-400 bg-purple-500/20 text-white'
                      : 'border-white/20 text-slate-300 hover:border-purple-300/50'
                  }`}
                >
                  {value.label}
                </button>
              ))}
            </div>
            <div className="mt-6 h-72">
              <canvas id="snailsEmpireChart" />
            </div>
            <p className="mt-4 text-sm text-center text-slate-200/80">{empireScenarios[scenario].summary}</p>
          </article>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
          <h2 className="text-2xl font-bold">¿Por qué lo hacen los propietarios?</h2>
          <p className="mt-3 text-slate-200/90">
            Para un rascacielos vacío, Terry es una póliza barata contra multas. Con un contrato, la propiedad se etiqueta como "granjas de peces" y los £286k desaparecen. El propietario paga una tarifa plana a Terry y conserva el activo listo para la próxima gran promotora.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-lg font-semibold text-amber-300">Beneficio financiero</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
                <li>• Ahorro inmediato del 95% en tasas comerciales.</li>
                <li>• Oficinas vacías manteniendo valor sin inquilinos incómodos.</li>
                <li>• Terry asume el papeleo y la “carga legal”.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-lg font-semibold text-purple-300">Riesgos aceptados</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
                <li>• Posibles inspecciones sorpresa del consejo.</li>
                <li>• Necesidad de “mover” los caracoles cuando cierra la empresa fantasma.</li>
                <li>• Dependencia de un vacío legal que podría cerrarse cualquier año.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-black p-8 shadow-2xl">
          <h2 className="text-2xl font-bold">La filosofía de Terry</h2>
          <blockquote className="mt-4 border-l-4 border-purple-400/80 pl-5 text-lg text-slate-100">
            “Cumplo 80 años el mes que viene y no tengo nada a mi nombre. ¿Qué van a hacer? No puedes quitarle nada a la nada”.
          </blockquote>
          <p className="mt-4 text-slate-200/90">
            Vive en una caravana en Lancashire, bebe cerveza con ex mafiosos y dedica sus últimos años a volver locos a los recaudadores. No es solo dinero: es travesura, venganza y una lección sobre cómo la burocracia siempre deja grietas.
          </p>
        </section>

        <footer className="mt-16 text-center text-sm text-slate-400">
          Basado en “The Snail Farm Don” (The Guardian, 2025). Adaptado para Quitiweb con visualizaciones interactivas.
        </footer>
      </article>
    </BlogLayout>
  );
}

export default Snails;
