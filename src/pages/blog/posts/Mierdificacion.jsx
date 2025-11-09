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

    const gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
    gradientBlue.addColorStop(0, 'rgba(59, 130, 246, 0.6)');
    gradientBlue.addColorStop(1, 'rgba(59, 130, 246, 0)');

    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 400);
    gradientGreen.addColorStop(0, 'rgba(16, 185, 129, 0.6)');
    gradientGreen.addColorStop(1, 'rgba(16, 185, 129, 0)');

    const gradientRed = ctx.createLinearGradient(0, 0, 0, 400);
    gradientRed.addColorStop(0, 'rgba(239, 68, 68, 0.6)');
    gradientRed.addColorStop(1, 'rgba(239, 68, 68, 0)');

    new window.Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Fase 1: Atraer Usuarios', 'Fase 2: Atraer Negocios', 'Fase 3: Extraer Valor'],
        datasets: [
          {
            label: 'Valor para Usuarios',
            data: [100, 90, 20],
            borderColor: 'rgba(59, 130, 246, 1)',
            backgroundColor: gradientBlue,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: 'rgba(59, 130, 246, 1)',
            pointRadius: 5,
          },
          {
            label: 'Valor para Negocios',
            data: [20, 100, 30],
            borderColor: 'rgba(16, 185, 129, 1)',
            backgroundColor: gradientGreen,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: 'rgba(16, 185, 129, 1)',
            pointRadius: 5,
          },
          {
            label: 'Valor para Plataforma',
            data: [10, 40, 100],
            borderColor: 'rgba(239, 68, 68, 1)',
            backgroundColor: gradientRed,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: 'rgba(239, 68, 68, 1)',
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
              font: { size: 14, family: 'Inter' }
            }
          },
          tooltip: {
            enabled: true,
            backgroundColor: '#000',
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
              font: { size: 14, family: 'Inter' }
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

      <article className="max-w-4xl mx-auto p-5 sm:p-8 text-stone-900">

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            El Bucle de la "Enshittification"
          </h1>
          <p className="text-lg text-stone-700 max-w-2xl mx-auto">
            Por qué tus plataformas favoritas (Facebook, Google, Amazon...) parecen empeorar día tras día.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
            <span className="text-3xl mr-3">🌀</span> ¿Qué es la "Enshittification"?
          </h2>
          <p className="text-base text-stone-700 mb-4">
            Es un término acuñado por el escritor y activista <strong>Cory Doctorow</strong>. Describe el patrón predecible en el que las plataformas online mueren:
          </p>
          <ol className="list-decimal list-inside bg-white p-6 rounded-lg shadow-sm border border-stone-200 space-y-3">
            <li className="text-stone-800"><strong className="text-indigo-600">Primero,</strong> son buenas para sus usuarios (para atraerlos).</li>
            <li className="text-stone-800"><strong className="text-indigo-600">Luego,</strong> abusan de sus usuarios para beneficiar a sus clientes empresariales (para ganar dinero).</li>
            <li className="text-stone-800"><strong className="text-indigo-600">Finalmente,</strong> abusan de sus clientes empresariales para quedarse con todo el valor para sí mismas (para sus accionistas).</li>
          </ol>
          <p className="mt-4 text-stone-700">
            Es un proceso de tres fases donde el valor se transfiere sistemáticamente de los participantes del ecosistema (tú y los negocios) a la propia plataforma.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-800 mb-2 flex items-center">
            <span className="text-3xl mr-3">📊</span> El Proceso en 3 Fases
          </h2>
          <p className="text-base text-stone-700 mb-6 text-center max-w-2xl mx-auto">
            Este gráfico visualiza cómo se mueve el valor. Al principio, la plataforma te da mucho (Fase 1). Al final, te exprime a ti y a los negocios para su propio beneficio (Fase 3).
          </p>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-stone-200">
            <div className="relative w-full max-w-[600px] mx-auto h-[300px] md:h-[400px]">
              <canvas id="enshittificationChart"></canvas>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">
            Respuestas a tus Reflexiones
          </h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
              <h3 className="text-xl font-bold text-indigo-700 mb-3 flex items-center">
                <span className="text-3xl mr-3">💰</span> ¿Es culpa del sistema?
              </h3>
              <p className="text-stone-700">
                En gran medida, sí. Este comportamiento no surge de la "maldad" individual, sino de los <strong>incentivos del sistema</strong>.
              </p>
              <p className="mt-2 text-stone-700">
                Las plataformas que cotizan en bolsa tienen una obligación legal (fiduciaria) con sus accionistas: maximizar el beneficio. En un mercado saturado (cuando ya no pueden captar más usuarios), la única manera de crecer es extrayendo más valor de los usuarios existentes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
              <h3 className="text-xl font-bold text-indigo-700 mb-3 flex items-center">
                <span className="text-3xl mr-3">⛓️</span> ¿Es entonces inevitable?
              </h3>
              <p className="text-stone-700">
                Es una tendencia muy fuerte, pero no absolutamente inevitable. Depende de dos factores:
              </p>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li><strong>La Competencia:</strong> Si cambiarte a otra plataforma fuera fácil (bajo "coste de cambio"), las empresas no podrían empeorar mucho el servicio.</li>
                <li><strong>El "Foso" (Lock-in):</strong> Las plataformas crean "fosos" para atraparte. Tu red social está en Facebook. Tus playlists están en Spotify. Tus reseñas están en Amazon.</li>
              </ol>
              <p className="mt-2 text-stone-700">
                La "enshittification" ocurre cuando el "foso" es lo suficientemente profundo como para que te quedes, aunque el servicio empeore.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">
            Tu analogía: El Supermercado vs. El Peaje
          </h2>
          <p className="text-base text-stone-700 mb-6 text-center max-w-2xl mx-auto">
            Tu punto sobre Netflix y Spotify es clave. Has identificado dos comportamientos diferentes, y es vital distinguirlos.
          </p>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                <span className="text-3xl mr-3">🛒</span> El "Paseo por el Supermercado"
              </h3>
              <p className="text-blue-900">
                Esto es <strong>Upselling (Venta sugestiva)</strong>. Como dices, Netflix o Spotify quieren que "pasees" por su catálogo para que descubras (y consumas) más contenido.
              </p>
              <p className="mt-2 text-blue-900">
                El objetivo es <strong>aumentar tu implicación</strong>. Quieren que sientas que la suscripción "merece la pena" porque siempre hay algo nuevo. El servicio principal (ver/escuchar) no empeora.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                <span className="text-3xl mr-3">🔒</span> El "Peaje" (Enshittification)
              </h3>
              <p className="text-red-900">
                Esto es <strong>Rent-seeking (Extracción de renta)</strong>. Aquí, la plataforma <strong>empeora activamente</strong> el servicio para forzarte a pagar más o para extraer valor de los negocios.
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-red-900">
                <li><strong>Amazon:</strong> Los resultados de búsqueda ya no te muestran el mejor producto, sino el producto "patrocinado" (un anuncio). El servicio (búsqueda) empeora para ti.</li>
                <li><strong>Facebook:</strong> Una protectora de animales consigue 10.000 fans. Facebook reduce su alcance para que solo 100 lo vean, forzando a la protectora a "pagar un peaje" (publicidad) para llegar a su propia audiencia.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-800 mb-2 flex items-center">
            <span className="text-3xl mr-3">⏳</span> ¿A la larga, "rompen el saco"?
          </h2>
          <p className="text-base text-stone-700 mb-4">
            Esta es la gran pregunta. ¿Es avaricia autodestructiva?
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 space-y-3">
            <p className="text-stone-700">
              Sí, la "enshittification" <strong>crea la oportunidad</strong> para que un nuevo competidor aparezca. Cuando Facebook se llena de anuncios y contenido basura, TikTok (que está en Fase 1) parece una alternativa fresca.
            </p>
            <p className="text-stone-700">
              El ciclo puede volver a empezar. La plataforma "cutrificada" se vuelve tan mala que la gente está dispuesta a <strong>pagar el alto coste de cambiarse</strong> (perder sus redes, su historial, sus datos).
            </p>
            <p className="text-stone-700">
              Sin embargo, las grandes plataformas lo saben, y su estrategia no es solo "el foso". Es también <strong>comprar a la competencia</strong> (Facebook comprando Instagram y WhatsApp) o usar su poder para aplastarla (Google favoreciendo sus propios servicios en las búsquedas).
            </p>
          </div>
        </section>

        <footer className="text-center mt-16 pt-8 border-t border-stone-300">
          <h3 className="text-xl font-bold text-indigo-700 mb-3 flex items-center justify-center">
            <span className="text-3xl mr-3">🤔</span> Conclusión
          </h3>
          <p className="text-stone-700 max-w-2xl mx-auto">
            No es solo "avaricia". Es la <strong>consecuencia lógica de un sistema que exige crecimiento infinito</strong> a empresas que ya no pueden crecer orgánicamente. El patrón es reconocible y predecible. La pregunta no es "si" ocurrirá, sino "cuándo".
          </p>
        </footer>

      </article>
    </BlogLayout>
  );
}

export default Mierdificacion;
