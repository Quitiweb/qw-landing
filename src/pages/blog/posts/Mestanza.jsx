import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import BlogLayout from '@/components/BlogLayout';

function Mestanza() {
  const [activeTab, setActiveTab] = useState('costo');
  const [population, setPopulation] = useState(735000);
  const [capacityChart, setCapacityChart] = useState(null);

  useEffect(() => {
    // Cargar Chart.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    script.onload = () => {
      initCharts();
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (capacityChart && window.Chart) {
      updateCapacityChart(population);
    }
  }, [population, capacityChart]);

  const initCharts = () => {
    if (!window.Chart) return;

    // Cost Chart
    const costCtx = document.getElementById('costChart')?.getContext('2d');
    if (costCtx) {
      new window.Chart(costCtx, {
        type: 'bar',
        data: {
          labels: ['Alternativa (Ciudadanos)', 'Proyecto Oficial (Junta)', 'Coste Total (Ciudadanos)'],
          datasets: [{
            label: 'Coste en Millones de €',
            data: [40, 106, 131],
            backgroundColor: [
              'rgba(94, 140, 97, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(201, 75, 75, 0.7)'
            ],
            borderColor: [
              '#5E8C61',
              '#FF9F40',
              '#C94B4B'
            ],
            borderWidth: 2
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return ` ${context.raw} Millones de €`;
                }
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Millones de Euros (€)'
              }
            }
          }
        }
      });
    }

    // Capacity Chart
    const capacityCtx = document.getElementById('capacityChart')?.getContext('2d');
    if (capacityCtx) {
      const chart = new window.Chart(capacityCtx, {
        type: 'doughnut',
        data: getCapacityData(population),
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  let label = context.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed !== null) {
                    label += new Intl.NumberFormat('es-ES').format(context.parsed);
                  }
                  return label;
                }
              }
            }
          }
        }
      });
      setCapacityChart(chart);
    }
  };

  const getCapacityData = (pop) => {
    const maxPopulation = 1000000;
    return {
      labels: ['Población a Servir', 'Capacidad Restante (s/ 1M)'],
      datasets: [{
        data: [pop, maxPopulation - pop],
        backgroundColor: ['#5E8C61', '#EAE7E1'],
        hoverOffset: 4
      }]
    };
  };

  const updateCapacityChart = (pop) => {
    if (capacityChart) {
      capacityChart.data = getCapacityData(pop);
      capacityChart.update();
    }
  };

  return (
    <BlogLayout>
      <Helmet>
        <html lang="es" className="scroll-smooth" />
        <title>Análisis Interactivo: Conflicto EDAR Vega Mestanza | Quitiweb</title>
        <link rel="canonical" href="https://quitiweb.com/blog/mestanza" />
        <meta
          name="description"
          content="Progreso contra Patrimonio. La lucha por la última vega fértil de Málaga frente a una infraestructura declarada de urgencia."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <style>{`\n        .bg-custom-main { background-color: #FDFBF7; }\n        .bg-custom-secondary { background-color: #F8F5F0; }\n        .text-custom-accent-green { color: #5E8C61; }\n        .bg-custom-accent-green { background-color: #5E8C61; }\n        .border-custom-accent-green { border-color: #5E8C61; }\n        .text-custom-accent-terracotta { color: #A98C6D; }\n        .bg-custom-accent-terracotta { background-color: #A98C6D; }\n        .border-custom-accent-terracotta { border-color: #A98C6D; }\n        .tab-btn.active {\n          border-color: #5E8C61;\n          background-color: #5E8C61;\n          color: white;\n        }\n        .chart-container {\n          position: relative;\n          height: 350px;\n          width: 100%;\n          max-width: 500px;\n          margin: auto;\n        }\n      `}</style>

      <article className="bg-custom-main text-gray-800">

        {/* Hero Section */}
        <section className="text-center py-16 md:py-24 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="block">Vega Mestanza: El Corazón de un Conflicto</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500">
            Progreso contra Patrimonio. La lucha por la última vega fértil de Málaga frente a una infraestructura declarada de urgencia.
          </p>
          <div className="mt-8">
            <a href="#conflicto" className="inline-block bg-custom-accent-green text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
              Explorar el Análisis
            </a>
          </div>
        </section>

        {/* Section 1: El Conflicto */}
        <section id="conflicto" className="py-16 bg-custom-secondary rounded-xl px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">Dos Visiones Enfrentadas</h2>
            <p className="mt-2 text-gray-600">
              El proyecto de la EDAR Málaga Norte enfrenta la necesidad de cumplir con la normativa medioambiental europea contra la defensa de un espacio de alto valor ecológico y agrícola.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-custom-accent-green">
              <div className="flex items-center mb-4">
                <span className="text-3xl">💧</span>
                <h3 className="text-2xl font-bold ml-4">La Postura Oficial: Una Necesidad Urgente</h3>
              </div>
              <p className="text-gray-700">
                La Junta de Andalucía defiende la EDAR como una obra "imprescindible" para acabar con los vertidos contaminantes al río Guadalhorce, evitar multas millonarias de la UE y cumplir con las directivas europeas de aguas residuales.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-custom-accent-terracotta">
              <div className="flex items-center mb-4">
                <span className="text-3xl">🌳</span>
                <h3 className="text-2xl font-bold ml-4">La Queja Ciudadana: Salvar la Vega</h3>
              </div>
              <p className="text-gray-700">
                La plataforma "Salvemos la Vega de Mestanza" se opone a la ubicación por considerarla un "ecocidio". Denuncian el impacto devastador en la "última vega fértil viva" de Málaga, el riesgo de inundaciones y proponen alternativas más sostenibles y económicas.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Argumentos a Examen */}
        <section id="argumentos" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">Argumentos a Examen</h2>
            <p className="mt-2 text-gray-600">
              Analizamos los puntos clave de la discordia: la capacidad real del proyecto y su coste económico. Interactúa con los datos para entender las diferencias entre ambas posturas.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="mb-6 border-b border-gray-200">
              <nav className="flex space-x-2 sm:space-x-4" aria-label="Tabs">
                <button
                  className={`tab-btn font-medium py-3 px-4 rounded-t-lg border-b-2 ${activeTab === 'costo' ? 'active' : ''}`}
                  onClick={() => setActiveTab('costo')}
                >
                  💰 El Coste Real
                </button>
                <button
                  className={`tab-btn font-medium py-3 px-4 rounded-t-lg border-b-2 ${activeTab === 'capacidad' ? 'active' : ''}`}
                  onClick={() => setActiveTab('capacidad')}
                >
                  👥 Dimensión y Capacidad
                </button>
              </nav>
            </div>

            {activeTab === 'costo' && (
              <div className="tab-content">
                <h3 className="text-xl font-semibold mb-4 text-center">Comparativa de Costes del Proyecto</h3>
                <p className="text-center text-gray-500 mb-6">
                  Existe una gran disparidad entre el presupuesto oficial, el coste total estimado por los opositores y el coste que tendrían las supuestas alternativas.
                </p>
                <div className="chart-container mx-auto">
                  <canvas id="costChart"></canvas>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Los ciudadanos argumentan que con 131M€ se podrían pagar las multas de la UE durante 20 años.
                </p>
              </div>
            )}

            {activeTab === 'capacidad' && (
              <div className="tab-content">
                <h3 className="text-xl font-semibold mb-4 text-center">¿Para cuánta gente es la depuradora?</h3>
                <p className="text-center text-gray-500 mb-6">
                  Las cifras oficiales sobre la población a la que servirá la EDAR varían enormemente, desde 50.000 hasta más de 1 millón de habitantes.
                </p>
                <div className="chart-container mx-auto">
                  <canvas id="capacityChart"></canvas>
                </div>
                <div className="max-w-md mx-auto mt-4">
                  <label htmlFor="population-slider" className="block mb-2 text-sm font-medium text-gray-900">
                    Población a servir: <span className="font-bold text-custom-accent-green">{new Intl.NumberFormat('es-ES').format(population)}</span>
                  </label>
                  <input
                    id="population-slider"
                    type="range"
                    min="50000"
                    max="1000000"
                    value={population}
                    step="5000"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    onChange={(e) => setPopulation(parseInt(e.target.value))}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Impacto Real */}
        <section id="impacto" className="py-16 bg-custom-secondary rounded-xl px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">El Impacto Real sobre el Terreno</h2>
            <p className="mt-2 text-gray-600">
              Más allá de las cifras, las consecuencias de construir en la Vega de Mestanza son el núcleo de la preocupación ciudadana. Se centran en el riesgo de inundación y la pérdida irreparable de biodiversidad y actividad económica.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Inundabilidad */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-custom-accent-terracotta">
                Riesgo de Inundación: Un "Tapón" de Hormigón
              </h3>
              <p className="mb-6">
                La vega actúa como una esponja natural que absorbe las crecidas del río Guadalhorce. Construir una plataforma impermeable de 4 metros de altura cambiaría la dinámica del agua.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Situación Actual: La Vega Absorbe</h4>
                  <div className="flex items-center p-3 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50">
                    <div className="text-2xl mr-3">🏞️</div>
                    <div className="flex-1 text-sm">
                      El río se desborda sobre la vega, que absorbe el agua lentamente, protegiendo las zonas bajas.
                    </div>
                  </div>
                </div>
                <div className="text-center font-bold text-2xl text-gray-400">⬇️</div>
                <div>
                  <h4 className="font-semibold mb-2">Con la EDAR: El Agua se Desvía</h4>
                  <div className="flex items-center p-3 border-2 border-dashed border-red-300 rounded-lg bg-red-50">
                    <div className="text-2xl mr-3">🏭</div>
                    <div className="flex-1 text-sm">
                      Una plataforma de hormigón bloquea el paso. El agua se acelera y desvía, amenazando a 9 núcleos de población.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ecocidio */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-custom-accent-green">Ecocidio en Cifras</h3>
              <p className="mb-6">
                La construcción supondría la desaparición de un paisaje y un modo de vida con un valor incalculable para la zona.
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-4xl">🌳</span>
                  <div className="ml-4">
                    <div className="text-2xl font-bold">22.000</div>
                    <div className="text-gray-600">Árboles frutales (naranjos y limoneros) serían talados.</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-4xl">👨‍👩‍👧‍👦</span>
                  <div className="ml-4">
                    <div className="text-2xl font-bold">300</div>
                    <div className="text-gray-600">Familias de agricultores perderían su sustento directo.</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-4xl">🏞️</span>
                  <div className="ml-4">
                    <div className="text-2xl font-bold">1</div>
                    <div className="text-gray-600">"Última vega viva" cerca de Málaga, un pulmón verde y patrimonio natural.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Conclusion */}
        <section id="conclusion" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">Conclusión del Análisis</h2>
            <p className="mt-2 text-gray-600">
              Tras contrastar toda la información, esta es la conclusión objetiva extraída del informe.
            </p>
          </div>
          <div className="bg-white max-w-4xl mx-auto p-8 rounded-xl shadow-lg border-l-4 border-custom-accent-green">
            <p className="text-lg text-gray-800 leading-relaxed">
              Si bien la necesidad de una depuradora es <strong>innegable y urgente</strong> para cumplir la ley y proteger el medio ambiente, la elección de la Vega de Mestanza como ubicación parece responder más a criterios de <strong>oportunidad administrativa</strong> que a una evaluación rigurosa de impacto y coste-beneficio.
            </p>
            <br />
            <p className="text-lg text-gray-800 leading-relaxed">
              Las quejas ciudadanas sobre el <strong>riesgo de inundación</strong>, la <strong>destrucción de un ecosistema agrícola único</strong> y el <strong>elevado coste</strong> del proyecto no son infundadas y merecen una respuesta técnica y transparente por parte de las administraciones implicadas. El debate debe centrarse en buscar la mejor solución, no solo la más rápida.
            </p>
          </div>
        </section>

      </article>
    </BlogLayout>
  );
}

export default Mestanza;