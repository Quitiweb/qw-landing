import React from 'react';
import { Helmet } from 'react-helmet';
import BlogLayout from '@/components/BlogLayout';

function IAEconomiaNoCuadra() {
  return (
    <BlogLayout>
      <Helmet>
        <html lang="es" />
        <title>La economía de la IA no cuadra (y Copilot lo acaba de admitir) | Quitiweb</title>
        <link rel="canonical" href="https://quitiweb.com/blog/economia-ia-no-cuadra" />
        <meta
          name="description"
          content="Resumen claro y ameno del artículo de Ed Zitron sobre por qué las suscripciones de IA no son sostenibles y por qué GitHub Copilot es solo el principio."
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="La economía de la IA no cuadra (y Copilot lo acaba de admitir)" />
        <meta
          property="og:description"
          content="GitHub Copilot pasa a cobrar por uso y deja al descubierto un problema más grande: muchas suscripciones de IA están vendiendo una ilusión económica."
        />
        <meta property="og:url" content="https://quitiweb.com/blog/economia-ia-no-cuadra" />
        <meta property="og:image" content="https://quitiweb.com/blog/economia-ia-no-cuadra.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La economía de la IA no cuadra (y Copilot lo acaba de admitir)" />
        <meta
          name="twitter:description"
          content="Qué está pasando con Copilot, por qué las suscripciones de IA no salen y qué puede venir ahora."
        />
        <meta name="twitter:image" content="https://quitiweb.com/blog/economia-ia-no-cuadra.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <article className="max-w-4xl mx-auto p-5 sm:p-8 text-white">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            La economía de la IA no cuadra (y Copilot lo acaba de admitir)
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            GitHub Copilot empieza a cobrar por uso y, de golpe, queda a la vista algo que llevaba tiempo oliendo raro: muchas herramientas de IA no estaban vendiendo software sostenible, sino compute subvencionado con envoltorio bonito.
          </p>
        </header>

        <section className="mb-12">
          <div className="glass-effect p-6 rounded-2xl">
            <p className="text-white/90 text-lg">
              <strong>Resumen rápido:</strong> Ed Zitron sostiene que el modelo típico de <strong>suscripción mensual para IA generativa no tiene sentido económico</strong>. Según su tesis, empresas como OpenAI, Anthropic o Microsoft han acostumbrado al mercado a consumir mucha más computación de la que pagan, ocultando el coste real detrás de límites difusos, “mensajes”, “créditos” o “requests”. El cambio de Copilot a precio por uso sería una señal de que la fiesta empieza a apagarse.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">La idea central, en limpio</h2>
          <p className="text-white/80 mb-4">
            La crítica no va de si la IA funciona mejor o peor. Va de otra cosa: <strong>de números</strong>. Si un usuario paga 20 euros al mes, pero su uso real cuesta bastante más en tokens, GPUs e inferencia, el negocio solo aguanta mientras alguien acepte perder dinero para inflar adopción.
          </p>
          <p className="text-white/80">
            Y ahí entra Copilot. Microsoft ha anunciado que deja atrás parte del modelo plano y se mueve hacia facturación basada en uso real. Dicho sin maquillaje: <strong>ya no compensa seguir subvencionando según qué hábitos de consumo</strong>.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Por qué este artículo importa</h2>
          <div className="space-y-4">
            <div className="glass-effect p-6 rounded-2xl border-l-4 border-purple-400">
              <h3 className="text-xl font-bold text-purple-300 mb-2">1. Copilot no sería una excepción, sino un aviso</h3>
              <p className="text-white/80">
                La tesis del artículo es que Microsoft no está corrigiendo un detalle de pricing: está enseñando el problema estructural. Si la compañía mejor posicionada para aguantar pérdidas empieza a cerrar el grifo, el resto del sector tiene bastante menos margen.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-2xl border-l-4 border-pink-400">
              <h3 className="text-xl font-bold text-pink-300 mb-2">2. Las suscripciones han ocultado el coste real</h3>
              <p className="text-white/80">
                El usuario medio no compra “tokens”; compra la sensación de tener una herramienta casi ilimitada. Esa opacidad ha sido útil para crecer rápido, pero también ha educado al mercado en una expectativa probablemente imposible de mantener.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-2xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold text-cyan-300 mb-2">3. El problema empeora con los usos “agentic”</h3>
              <p className="text-white/80">
                No cuesta lo mismo una respuesta breve que una sesión larga tocando repos enteros, herramientas, contexto y varias iteraciones. Cuanto más se vende la IA como agente autónomo, más se dispara la factura de fondo.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">La metáfora que mejor lo explica</h2>
          <p className="text-white/80 mb-4">
            Zitron usa una comparación muy gráfica: sería como si Uber te cobrara una cuota ridícula por montones de viajes, mientras la gasolina costase una barbaridad y la pagara Uber de su bolsillo. Tarde o temprano, esa cuenta explota.
          </p>
          <p className="text-white/80">
            En IA pasa algo parecido. El usuario ve una app útil. La empresa ve <strong>consumo variable, difícil de predecir y carísimo</strong>. Y eso encaja fatal con una suscripción plana pensada para costes más estables.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Lo más jugoso del análisis</h2>
          <ul className="space-y-3 text-white/80 list-disc list-inside">
            <li>Muchas herramientas de IA habrían crecido gracias a <strong>compute subvencionado</strong>, no porque su precio reflejara su coste real.</li>
            <li>Los modelos nuevos, sobre todo los que “razonan” más o encadenan más pasos, <strong>no siempre abaratan el uso</strong>; a veces lo encarecen.</li>
            <li>El usuario perdona más los fallos cuando siente que está “dentro de la tarifa”. Si cada desvarío del modelo costara 10 o 15 euros, la tolerancia sería otra historia.</li>
            <li>Si las grandes empresas empiezan a ver el gasto real en tokens, puede que el relato de “hacemos mucho más con menos” se enfríe bastante rápido.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Mi lectura: aquí hay una señal seria</h2>
          <p className="text-white/80 mb-4">
            Creo que el valor del artículo no está en el tono incendiario —que lo tiene— sino en la pregunta incómoda que deja encima de la mesa: <strong>¿qué parte del boom de la IA depende de precios artificialmente bajos?</strong>
          </p>
          <p className="text-white/80 mb-4">
            Si la adopción masiva se ha construido sobre una subvención encubierta, el siguiente capítulo es bastante previsible: más límites, más planes híbridos, más cobro por uso y más frustración de usuarios que pensaban que el buffet era infinito.
          </p>
          <p className="text-white/80">
            Eso no significa que la IA “se acabe”. Significa algo más terrenal: <strong>vamos a descubrir cuánto cuesta de verdad</strong>. Y cuando eso pase, muchas promesas tendrán que pasar el filtro más aburrido y más importante de todos: el ROI.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Qué conviene vigilar ahora</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glass-effect p-5 rounded-2xl">
              <h3 className="font-bold text-purple-300 mb-2">Precios por token</h3>
              <p className="text-white/75 text-sm">
                Si cada vez aparecen más visibles en productos de consumo, mala señal para la tarifa plana clásica.
              </p>
            </div>
            <div className="glass-effect p-5 rounded-2xl">
              <h3 className="font-bold text-pink-300 mb-2">Recortes encubiertos</h3>
              <p className="text-white/75 text-sm">
                Menos contexto, límites más duros o modelos peores para contener costes sin decirlo demasiado alto.
              </p>
            </div>
            <div className="glass-effect p-5 rounded-2xl">
              <h3 className="font-bold text-cyan-300 mb-2">ROI real en empresas</h3>
              <p className="text-white/75 text-sm">
                La pregunta ya no es “¿mola?” sino “¿ahorra o genera más de lo que quema?”.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Conclusión corta</h2>
          <p className="text-white/80">
            El artículo de Zitron pone palabras a una intuición cada vez más extendida: la IA actual puede ser útil, sí, pero su modelo económico sigue oliendo a prototipo financiado a pérdidas. Y cuando el mercado empiece a cobrar el coste real, veremos qué productos eran sólidos y cuáles eran solo una demo carísima con buena prensa.
          </p>
        </section>

        <footer className="mt-16 pt-8 border-t border-white/20 text-white/75">
          <p className="mb-3">
            <strong>Artículo original:</strong>{' '}
            <a
              href="https://www.wheresyoured.at/ais-economics-dont-make-sense/"
              target="_blank"
              rel="noreferrer"
              className="text-purple-300 hover:text-purple-200 underline"
            >
              Ed Zitron — “AI's Economics Don't Make Sense”
            </a>
          </p>
          <p>
            Este post es un resumen comentado y en español, pensado para lectura rápida y con foco en las implicaciones prácticas del cambio de pricing en herramientas como GitHub Copilot.
          </p>
        </footer>
      </article>
    </BlogLayout>
  );
}

export default IAEconomiaNoCuadra;
