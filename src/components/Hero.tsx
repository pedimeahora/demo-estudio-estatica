import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Asesoría Legal Cercana
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Soluciones legales claras, resultados concretos. Especialistas en accidentes de tránsito, laboral, familia y jubilaciones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
          >
            Consulta Gratuita por WhatsApp
          </a>
          <a
            href="#contacto"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg border border-blue-600"
          >
            Más Información
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="mx-auto text-gray-600" />
        </div>
      </div>
    </section>
  );
}
