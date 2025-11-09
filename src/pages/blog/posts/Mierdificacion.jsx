import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BlogLayout from '@/components/BlogLayout';

function Mierdificacion() {
  useEffect(() => {
    // Cargar Chart.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    script.onload = () => {
      initChart();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initChart = () => {
    const ctx = document.getElementById('enshittificationChart')?.getContext('2d');
    if (!ctx || !window.Chart) return;

    const gradientPurple = ctx.createLinearGradient(0, 0, 0, 400);
    gradientPurple.addColorStop(0, 'rgba(192, 132, 252, 0.6)');
    gradientPurple.addColorStop(1, 'rgba(192, 132, 252, 0)');

    const gradientPink = ctx.createLinearGradient(0, 0, 0, 400);
    gradientPink.addColorStop(0, 'rgba(244, 114, 182, 0.6)');
    gradientPink.addColorStop(1, 'rgba(244, 114, 182, 0)');

    const gradientCyan = ctx.createLinearGradient(0, 0, 0, 400);
    gradientCyan.addColorStop(0, 'rgba(34, 211, 238, 0.6)');
    gradientCyan.addColorStop(1, 'rgba(34, 211, 238, 0)');

    new window.Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Fase 1: Atraer Usuarios', 'Fase 2: Atraer Negocios', 'Fase 3: Extraer Valor'],
        datasets: [
          {
            label: 'Valor para Usuarios',
            data: [100, 90, 20],
            borderColor: 'rgba(192, 132, 252, 1)',
            backgroundColor: gradientPurple,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: 'rgba(192, 132, 252, 1)',
            pointRadius: 5,
          },
          {
            label: 'Valor para Negocios',
            data: [20, 100, 30],
            borderColor: 'rgba(244, 114, 182, 1)',
            backgroundColor: gradientPink,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: 'rgba(244, 114, 182, 1)',
            pointRadius: 5,
          },
          {
            label: 'Valor para Plataforma',
            data: [10, 40, 100],
            borderColor: 'rgba(34, 211, 238, 1)',
            backgroundColor: gradientCyan,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: 'rgba(34, 211, 238, 1)',
            pointRadius: 5,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { size: 14, family: 'Inter' },
              color: 'rgba(255, 255, 255, 0.9)'
            }
          },
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: { size: 16, family: 'Inter' },
            bodyFont: { size: 14, family: 'Inter' }
          }
        },
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 100,
            title: {
              display: true,
              text: 'Valor (Relativo)',
              font: { size: 14, family: 'Inter' },
              color: 'rgba(255, 255, 255, 0.7)'
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.6)'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          x: {
            ticks: {
              color: 'rgba(255, 255, 255, 0.6)',
              font: { size: 12, family: 'Inter' }
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    });
  };

  return (
    <BlogLayout>
      <Helmet>
        <html lang="es" />
        <title>El Bucle de la "Enshittification" | Quitiweb</title>
        <link rel="canonical" href="https://quitiweb.com/blog/mierdificacion" />
        <meta
          name="description"
          content="Por qué tus plataformas favoritas (Facebook, Google, Amazon...) parecen empeorar día tras día."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <article className="max-w-4xl mx-auto p-5 sm:p-8 text-white">

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            El Bucle de la "Enshittification"
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Por qué tus plataformas favoritas (Facebook, Google, Amazon...) parecen empeorar día tras día.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="text-3xl mr-3">🌀</span> ¿Qué es la "Enshittification"?
          </h2>
          <p className="text-base text-white/80 mb-4">
            Es un término acuñado por el escritor y activista <strong className="text-purple-400">Cory Doctorow</strong>. Describe el patrón predecible en el que las plataformas online mueren:
          </p>
          <ol className="list-decimal list-inside glass-effect p-6 rounded-lg space-y-3">
            <li className="text-white/90"><strong className="gradient-text">Primero,</strong> son buenas para sus usuarios (para atraerlos).</li>
            <li className="text-white/90"><strong className="gradient-text">Luego,</strong> abusan de sus usuarios para beneficiar a sus clientes empresariales (para ganar dinero).</li>
            <li className="text-white/90"><strong className="gradient-text">Finalmente,</strong> abusan de sus clientes empresariales para quedarse con todo el valor para sí mismas (para sus accionistas).</li>
          </ol>
          <p className="mt-4 text-white/80">
            Es un proceso de tres fases donde el valor se transfiere sistemáticamente de los participantes del ecosistema (tú y los negocios) a la propia plataforma.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
            <span className="text-3xl mr-3">📊</span> El Proceso en 3 Fases
          </h2>
          <p className="text-base text-white/80 mb-6 text-center max-w-2xl mx-auto">
            Este gráfico visualiza cómo se mueve el valor. Al principio, la plataforma te da mucho (Fase 1). Al final, te exprime a ti y a los negocios para su propio beneficio (Fase 3).
          </p>
          <div className="glass-effect p-4 sm:p-6 rounded-lg">
            <div className="relative w-full max-w-[600px] mx-auto h-[300px] md:h-[400px]">
              <canvas id="enshittificationChart"></canvas>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Respuestas a tus Reflexiones
          </h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="glass-effect p-6 rounded-lg hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-purple-400 mb-3 flex items-center">
                <span className="text-3xl mr-3">💰</span> ¿Es culpa del sistema?
              </h3>
              <p className="text-white/80">
                En gran medida, sí. Este comportamiento no surge de la "maldad" individual, sino de los <strong className="text-white">incentivos del sistema</strong>.
              </p>
              <p className="mt-2 text-white/80">
                Las plataformas que cotizan en bolsa tienen una obligación legal (fiduciaria) con sus accionistas: maximizar el beneficio. En un mercado saturado (cuando ya no pueden captar más usuarios), la única manera de crecer es extrayendo más valor de los usuarios existentes.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-pink-400 mb-3 flex items-center">
                <span className="text-3xl mr-3">⛓️</span> ¿Es entonces inevitable?
              </h3>
              <p className="text-white/80">
                Es una tendencia muy fuerte, pero no absolutamente inevitable. Depende de dos factores:
              </p>
              <ol className="list-decimal list-inside space-y-1 mt-2 text-white/80">
                <li><strong className="text-white">La Competencia:</strong> Si cambiarte a otra plataforma fuera fácil (bajo "coste de cambio"), las empresas no podrían empeorar mucho el servicio.</li>
                <li><strong className="text-white">El "Foso" (Lock-in):</strong> Las plataformas crean "fosos" para atraparte. Tu red social está en Facebook. Tus playlists están en Spotify. Tus reseñas están en Amazon.</li>
              </ol>
              <p className="mt-2 text-white/80">
                La "enshittification" ocurre cuando el "foso" es lo suficientemente profundo como para que te quedes, aunque el servicio empeore.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Tu analogía: El Supermercado vs. El Peaje
          </h2>
          <p className="text-base text-white/80 mb-6 text-center max-w-2xl mx-auto">
            Tu punto sobre Netflix y Spotify es clave. Has identificado dos comportamientos diferentes, y es vital distinguirlos.
          </p>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="glass-effect p-6 rounded-lg border-l-4 border-cyan-400 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
                <span className="text-3xl mr-3">🛒</span> El "Paseo por el Supermercado"
              </h3>
              <p className="text-white/80">
                Esto es <strong className="text-white">Upselling (Venta sugestiva)</strong>. Como dices, Netflix o Spotify quieren que "pasees" por su catálogo para que descubras (y consumas) más contenido.
              </p>
              <p className="mt-2 text-white/80">
                El objetivo es <strong className="text-white">aumentar tu implicación</strong>. Quieren que sientas que la suscripción "merece la pena" porque siempre hay algo nuevo. El servicio principal (ver/escuchar) no empeora.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg border-l-4 border-pink-400 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-pink-400 mb-3 flex items-center">
                <span className="text-3xl mr-3">🔒</span> El "Peaje" (Enshittification)
              </h3>
              <p className="text-white/80">
                Esto es <strong className="text-white">Rent-seeking (Extracción de renta)</strong>. Aquí, la plataforma <strong className="text-white">empeora activamente</strong> el servicio para forzarte a pagar más o para extraer valor de los negocios.
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-white/80">
                <li><strong className="text-white">Amazon:</strong> Los resultados de búsqueda ya no te muestran el mejor producto, sino el producto "patrocinado" (un anuncio). El servicio (búsqueda) empeora para ti.</li>
                <li><strong className="text-white">Facebook:</strong> Una protectora de animales consigue 10.000 fans. Facebook reduce su alcance para que solo 100 lo vean, forzando a la protectora a "pagar un peaje" (publicidad) para llegar a su propia audiencia.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
            <span className="text-3xl mr-3">⏳</span> ¿A la larga, "rompen el saco"?
          </h2>
          <p className="text-base text-white/80 mb-4">
            Esta es la gran pregunta. ¿Es avaricia autodestructiva?
          </p>
          <div className="glass-effect p-6 rounded-lg space-y-3">
            <p className="text-white/80">
              Sí, la "enshittification" <strong className="text-white">crea la oportunidad</strong> para que un nuevo competidor aparezca. Cuando Facebook se llena de anuncios y contenido basura, TikTok (que está en Fase 1) parece una alternativa fresca.
            </p>
            <p className="text-white/80">
              El ciclo puede volver a empezar. La plataforma "cutrificada" se vuelve tan mala que la gente está dispuesta a <strong className="text-white">pagar el alto coste de cambiarse</strong> (perder sus redes, su historial, sus datos).
            </p>
            <p className="text-white/80">
              Sin embargo, las grandes plataformas lo saben, y su estrategia no es solo "el foso". Es también <strong className="text-white">comprar a la competencia</strong> (Facebook comprando Instagram y WhatsApp) o usar su poder para aplastarla (Google favoreciendo sus propios servicios en las búsquedas).
            </p>
          </div>
        </section>

        <footer className="text-center mt-16 pt-8 border-t border-white/20">
          <h3 className="text-xl font-bold gradient-text mb-3 flex items-center justify-center">
            <span className="text-3xl mr-3">🤔</span> Conclusión
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            No es solo "avaricia". Es la <strong className="text-white">consecuencia lógica de un sistema que exige crecimiento infinito</strong> a empresas que ya no pueden crecer orgánicamente. El patrón es reconocible y predecible. La pregunta no es "si" ocurrirá, sino "cuándo".
          </p>
        </footer>

      </article>
    </BlogLayout>
  );
}

export default Mierdificacion;
