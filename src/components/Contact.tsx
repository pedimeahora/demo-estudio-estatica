import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Contacto
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Phone size={40} className="mx-auto text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h4>
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              +54 9 11 1234-5678
            </a>
          </div>

          <div className="text-center">
            <Mail size={40} className="mx-auto text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Email</h4>
            <a
              href="mailto:info@giangreco.com.ar"
              className="text-blue-600 hover:underline"
            >
              info@giangreco.com.ar
            </a>
          </div>

          <div className="text-center">
            <MapPin size={40} className="mx-auto text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Ubicación</h4>
            <p className="text-gray-600">CABA, Buenos Aires</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            Consulta Gratuita
          </h4>
          <p className="text-gray-700 mb-6">
            Contáctanos hoy y recibe una consulta inicial sin costo ni compromiso. Estamos aquí para ayudarte.
          </p>
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Iniciar Contacto por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
