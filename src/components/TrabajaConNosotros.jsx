import React from 'react';

export default function TrabajaConNosotros() {
  return (
    <section
      id="trabajaConNosotros"
      className="bg-[#0c1b3a] text-white py-16 px-6 flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-8 md:space-y-0"
    >
      {/* Imagen / tarjeta de fotografía */}
      <div className="bg-white text-[#0c1b3a] font-bold text-2xl md:text-3xl w-64 h-72 flex items-center justify-center rounded-2xl shadow-lg">
        FOTOGRAFÍA
      </div>

      {/* Texto principal */}
      <div className="max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          “Haz crecer tu talento, mientras hacemos crecer las marcas.”
        </h2>

        <h3 className="text-lg font-semibold mb-2">¿Quiénes somos?</h3>
        <p className="text-sm md:text-base leading-relaxed">
          Somos una Agencia de Marketing Digital con cobertura en toda Colombia.
          Ofrecemos un servicio personalizado para medianas y grandes empresas,
          diseñando estrategias efectivas que potencian su crecimiento.
          ¡Impulsa tu marca con soluciones de marketing innovadoras y de alto impacto!
        </p>

        {/* Redes sociales */}
        <div className="flex space-x-4 mt-6">
          <a href="#" aria-label="Facebook" className="hover:opacity-75 transition">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-75 transition">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
