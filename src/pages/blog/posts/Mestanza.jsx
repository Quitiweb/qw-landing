import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import BlogLayout from '@/components/BlogLayout';

const heroStats = [
  {
    label: 'Inversión oficial',
    value: '106 M€',
    detail: 'Presupuesto estimado por la Junta de Andalucía.'
  },
  {
    label: 'Alternativa ciudadana',
    value: '40 M€',
    detail: 'Coste de propuestas alternativas impulsadas por la plataforma vecinal.'
  },
  {
    label: 'Población afectada',
    value: '1 M+',
    detail: 'Habitantes que podrían verse influidos por la ubicación de la EDAR.'
  }
];

const conflictBlocks = [
  {
    icon: '💧',
    title: 'La postura oficial',
    description:
      'La Junta defiende la EDAR Málaga Norte como infraestructura urgente para cumplir con las directivas europeas y frenar sanciones millonarias por vertidos.'
  },
  {
    icon: '🌳',
    title: 'La voz ciudadana',
    description:
      'La plataforma “Salvemos la Vega de Mestanza” denuncia el impacto sobre el último valle fértil de Málaga y reclama alternativas menos invasivas.'
  }
];

const impactHighlights = [
  {
    title: 'Riesgo de inundación',
    accent: 'from-cyan-500/30 to-blue-500/30',
    badge: 'Hidrología',
    bullets: [
      'La vega funciona como esponja natural ante las crecidas del Guadalhorce.',
      'Una plataforma de hormigón de 4 metros alteraría el flujo y empujaría el agua hacia 9 núcleos de población.'
    ]
  },
  {
    title: 'Ecocidio en cifras',
    accent: 'from-emerald-500/30 to-lime-500/30',
    badge: 'Medio ambiente',
    bullets: [
      '22.000 árboles frutales desaparecerían junto al mosaico agrícola histórico.',
      'Más de 300 familias verían comprometido su sustento directo.',
      'Se perdería la última vega viva próxima a la capital malagueña.'
    ]
  }
];

function Mestanza() {
  const [activeTab, setActiveTab] = useState('cost');
  const [population, setPopulation] = useState(735000);
  const [isChartReady, setIsChartReady] = useState(false);
  const chartsRef = useRef({ cost: null, capacity: null });

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
    initCharts(activeTab);

    return () => {
      destroyCharts();
    };
  }, [isChartReady, activeTab]);

  useEffect(() => {
    if (!isChartReady) return;
    const capacityChart = chartsRef.current.capacity;
    if (capacityChart) {
      const capacityData = getCapacityData(population);
      capacityChart.data.datasets[0].data = capacityData.datasets[0].data;
      capacityChart.update();
    }
  }, [population, isChartReady]);

  const destroyCharts = () => {
    Object.values(chartsRef.current).forEach((chart) => {
      chart?.destroy();
    });
    chartsRef.current = { cost: null, capacity: null };
  };

  const initCharts = (tab) => {
    const Chart = window.Chart;
    if (!Chart) return;

    if (tab === 'cost') {
      const ctx = document.getElementById('mestanzaCostChart')?.getContext('2d');
      if (ctx) {
        chartsRef.current.cost?.destroy();

        const gradientCitizen = ctx.createLinearGradient(0, 0, 0, 320);
        gradientCitizen.addColorStop(0, 'rgba(192, 132, 252, 0.8)');
        gradientCitizen.addColorStop(1, 'rgba(192, 132, 252, 0.1)');

        const gradientJunta = ctx.createLinearGradient(0, 0, 0, 320);
        gradientJunta.addColorStop(0, 'rgba(244, 114, 182, 0.8)');
        gradientJunta.addColorStop(1, 'rgba(244, 114, 182, 0.1)');

        const gradientTotal = ctx.createLinearGradient(0, 0, 0, 320);
        gradientTotal.addColorStop(0, 'rgba(34, 211, 238, 0.8)');
        gradientTotal.addColorStop(1, 'rgba(34, 211, 238, 0.1)');

        chartsRef.current.cost = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: [
              'Alternativa ciudadana',
              'Proyecto oficial',
              'Coste total asumido'
            ],
            datasets: [
              {
                label: 'Millones de euros',
                data: [40, 106, 131],
                backgroundColor: [gradientCitizen, gradientJunta, gradientTotal],
                borderColor: ['#C084FC', '#F472B6', '#22D3EE'],
                borderWidth: 2,
                borderRadius: 16,
                barThickness: 28
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            layout: {
              padding: 12
            },
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                backgroundColor: 'rgba(7, 13, 31, 0.85)',
                titleColor: '#FFFFFF',
                bodyColor: '#E2E8F0',
                borderColor: 'rgba(192, 132, 252, 0.4)',
                borderWidth: 1,
                callbacks: {
                  label: (context) => ` ${context.formattedValue} M€`
                }
              }
            },
            scales: {
              x: {
                grid: {
                  color: 'rgba(148, 163, 184, 0.15)'
                },
                ticks: {
                  color: 'rgba(226, 232, 240, 0.9)',
                  callback: (value) => `${value} M€`
                }
              },
              y: {
                grid: {
                  display: false
                },
                ticks: {
                  color: '#E2E8F0',
                  font: {
                    weight: '600'
                  }
                }
              }
            }
          }
        });
      }
    }

    if (tab === 'capacity') {
      const ctx = document.getElementById('mestanzaCapacityChart')?.getContext('2d');
      if (ctx) {
        chartsRef.current.capacity?.destroy();
        chartsRef.current.capacity = new Chart(ctx, {
          type: 'doughnut',
          data: getCapacityData(population),
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: '#E2E8F0',
                  boxWidth: 14,
                  boxHeight: 14,
                  padding: 18
                }
              },
              tooltip: {
                backgroundColor: 'rgba(7, 13, 31, 0.85)',
                titleColor: '#FFFFFF',
                bodyColor: '#E2E8F0',
                callbacks: {
                  label: (context) => {
                    const value = context.parsed;
                    return `${context.label}: ${new Intl.NumberFormat('es-ES').format(value)}`;
                  }
                }
              }
            }
          }
        });
      }
    }
  };

  const getCapacityData = (value) => {
    const max = 1_000_000;
    const remaining = Math.max(max - value, 0);
    return {
      labels: ['Población cubierta', 'Capacidad restante s/ 1M'],
      datasets: [
        {
          data: [value, remaining],
          backgroundColor: ['rgba(192, 132, 252, 0.85)', 'rgba(148, 163, 184, 0.3)'],
          borderColor: ['#C084FC', '#94A3B8'],
          borderWidth: 1.5,
          hoverOffset: 6
        }
      ]
    };
  };

  return (
    <BlogLayout>
      <Helmet>
        <html lang="es" />
        <title>Vega Mestanza: El corazón de un conflicto | Quitiweb</title>
        <link rel="canonical" href="https://quitiweb.com/blog/mestanza" />
        <meta
          name="description"
          content="Radiografía interactiva del proyecto EDAR Málaga Norte y su impacto sobre la Vega de Mestanza: costes, capacidad real y consecuencias medioambientales."
        />
      </Helmet>

      <article className="relative mx-auto max-w-5xl px-5 pb-20 text-white sm:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-purple-900/40 via-transparent to-black/10" />

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/30 via-slate-900/30 to-indigo-900/40 px-6 py-16 text-center shadow-xl sm:px-10">
          <div className="absolute inset-0 -z-10 opacity-60">
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-purple-500/40 blur-3xl" />
            <div className="absolute bottom-4 right-6 h-52 w-52 rounded-full bg-cyan-400/30 blur-3xl" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-200/80">
            Análisis Especial
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Vega Mestanza: el corazón de un conflicto entre progreso y patrimonio
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200/90">
            Mientras la administración busca cumplir a contrarreloj con las exigencias europeas, la ciudadanía defiende el último valle fértil de Málaga. ¿Qué hay realmente en juego?
          </p>

          <dl className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-effect rounded-2xl border border-white/10 p-5">
                <dt className="text-xs uppercase tracking-widest text-purple-200/80">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-bold text-white">{stat.value}</dd>
                <p className="mt-2 text-sm text-slate-300">{stat.detail}</p>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          {conflictBlocks.map((block) => (
            <div
              key={block.title}
              className="glass-effect h-full rounded-3xl border border-white/10 p-8 shadow-lg transition-colors hover:border-purple-400/40"
            >
              <div className="flex items-center gap-4 text-purple-200">
                <span className="text-4xl" aria-hidden>{block.icon}</span>
                <h2 className="text-2xl font-semibold text-white">{block.title}</h2>
              </div>
              <p className="mt-4 text-base text-slate-200/90">{block.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-20">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Argumentos enfrentados bajo la lupa</h2>
              <p className="mt-3 max-w-xl text-slate-300">
                Compara los números oficiales con los de la ciudadanía y experimenta con la capacidad real del proyecto según la población a la que debería dar servicio.
              </p>
            </div>
            <div className="inline-flex self-center rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple-200">
              Datos interactivos
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/5 bg-white/[0.04] p-2 shadow-inner">
            <div className="flex flex-wrap gap-2 rounded-2xl bg-black/20 p-2">
              <button
                type="button"
                onClick={() => setActiveTab('cost')}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-colors sm:flex-none sm:px-8 ${
                  activeTab === 'cost'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                    : 'text-slate-300 hover:bg-white/10'
                }`}
              >
                💰 Coste del proyecto
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('capacity')}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-colors sm:flex-none sm:px-8 ${
                  activeTab === 'capacity'
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/10'
                }`}
              >
                👥 Dimensionamiento
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className={`space-y-6 ${activeTab === 'cost' ? 'block' : 'hidden'}`}>
                <header className="text-center">
                  <h3 className="text-2xl font-semibold text-white">Comparativa de inversiones</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Con 131 M€ la ciudadanía calcula que podrían pagarse 20 años de sanciones europeas sin sacrificar la vega. ¿Tiene sentido económico la obra propuesta?
                  </p>
                </header>
                <div className="mx-auto h-72 w-full max-w-2xl">
                  <canvas id="mestanzaCostChart" />
                </div>
              </div>

              <div className={`${activeTab === 'capacity' ? 'block' : 'hidden'}`}>
                <header className="text-center">
                  <h3 className="text-2xl font-semibold text-white">¿Para cuánta gente se construye?</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    El rango oficial oscila entre 50.000 y 1.000.000 de habitantes. Ajusta la previsión para ver cuánto margen real queda.
                  </p>
                </header>
                <div className="mx-auto mt-6 grid gap-8 md:grid-cols-[minmax(0,400px)_1fr] md:items-center">
                  <div className="h-72">
                    <canvas id="mestanzaCapacityChart" />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <p className="text-sm uppercase tracking-widest text-purple-200/80">Población a servir</p>
                    <p className="mt-2 text-4xl font-bold text-white">
                      {new Intl.NumberFormat('es-ES').format(population)} habitantes
                    </p>
                    <p className="mt-3 text-sm text-slate-300">
                      Mueve el control para explorar escenarios entre 50.000 y 1.000.000 de personas.
                    </p>
                    <div className="mt-6">
                      <input
                        type="range"
                        min={50000}
                        max={1000000}
                        step={5000}
                        value={population}
                        onChange={(event) => setPopulation(Number(event.target.value))}
                        className="w-full accent-purple-400"
                      />
                      <div className="mt-2 flex justify-between text-xs text-slate-400">
                        <span>50K</span>
                        <span>500K</span>
                        <span>1M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-8 md:grid-cols-2">
          {impactHighlights.map((card) => (
            <article
              key={card.title}
              className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${card.accent} p-8 shadow-lg`}
            >
              <div className="absolute inset-0 -z-10 opacity-40">
                <div className="absolute right-[-3rem] top-[-3rem] h-48 w-48 rounded-full bg-white/10 blur-3xl" />
              </div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                {card.badge}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-white">{card.title}</h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-100">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-white/60" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-20 rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-white">Conclusiones estratégicas</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-lg font-semibold text-purple-200">Lo que dicen los datos</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200/90">
                <li>• Invertir 106 M€ para evitar sanciones de 131 M€ abre la puerta a soluciones menos intrusivas.</li>
                <li>• El dimensionamiento real sigue sin una memoria técnica pública que lo avale.</li>
                <li>• El riesgo hidrológico no cuenta con simulaciones recientes que contemplen el cambio climático.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-lg font-semibold text-purple-200">Qué esperar a corto plazo</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200/90">
                <li>• Transparencia: la ciudadanía exige publicar los estudios comparativos de ubicaciones.</li>
                <li>• Gobernanza: urge un comité mixto que incluya agricultores, técnicos y administración.</li>
                <li>• Innovación: hay margen para soluciones modulares o descentralizadas que reduzcan el impacto.</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-base text-slate-200/80">
            La urgencia de depurar aguas residuales no está en duda. Lo que se discute es si sacrificar la Vega de Mestanza es la mejor respuesta cuando existen alternativas menos traumáticas y más alineadas con una Málaga resiliente.
          </p>
        </section>
      </article>
    </BlogLayout>
  );
}

export default Mestanza;