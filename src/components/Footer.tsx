export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="text-lg font-bold mb-4">Estudio Jurídico Giangreco</h5>
            <p className="text-gray-400">
              Asesoría legal profesional, cercana y accesible para todos.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">Servicios</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-white transition-colors">Accidentes de Tránsito</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Derecho Laboral</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Derecho de Familia</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Jubilaciones</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">Enlaces</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#por-que" className="hover:text-white transition-colors">Por qué nosotros</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Estudio Jurídico Giangreco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
