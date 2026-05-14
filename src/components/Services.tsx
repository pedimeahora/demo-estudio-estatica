import { Car, Briefcase, Heart, Clock } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Car,
      title: 'Accidentes de Tránsito',
      description: 'Representación en reclamos por daños y perjuicios.',
    },
    {
      icon: Briefcase,
      title: 'Derecho Laboral',
      description: 'Asesoría en despidos, indemnizaciones y conflictos laborales.',
    },
    {
      icon: Heart,
      title: 'Derecho de Familia',
      description: 'Divorcios, tenencia, alimentos y sucesiones.',
    },
    {
      icon: Clock,
      title: 'Jubilaciones',
      description: 'Trámites previsionales y reclamos de beneficios.',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Nuestros Servicios
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <Icon size={40} className="text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
