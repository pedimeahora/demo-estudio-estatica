import { CheckCircle2 } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    'Experiencia de más de 15 años en derecho civil y laboral',
    'Comunicación clara: explicamos sin jerga legal innecesaria',
    'Resultados concretos en más del 90% de nuestros casos',
    'Consulta inicial gratuita y sin compromiso',
    'Disponibilidad 24/7 a través de WhatsApp',
    'Honorarios transparentes y accesibles',
  ];

  return (
    <section id="por-que" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">
              ¿Por qué elegirnos?
            </h3>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-lg p-8">
            <h4 className="text-2xl font-bold mb-4">
              Nuestro Compromiso
            </h4>
            <p className="text-lg leading-relaxed">
              No somos solo abogados. Somos defensores de tus derechos. Entendemos que cada caso es personal y único. Por eso, tratamos a cada cliente como si fuera parte de nuestra familia, dedicando tiempo y atención genuina a resolver tu situación legal.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Nuestro objetivo es que entiendas exactamente qué está pasando, cuáles son tus opciones y hacia dónde vamos. Sin sorpresas, sin jerga innecesaria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
