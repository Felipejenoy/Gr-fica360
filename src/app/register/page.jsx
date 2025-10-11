"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#0A0F2C] flex flex-col items-center justify-center text-white relative px-8">
      {/* Botón Atrás */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 bg-[#11183D] hover:bg-[#1B245A] text-white px-4 py-2 rounded-xl font-semibold transition flex items-center gap-2 border border-[#1B245A]"
      >
        ← Atrás
      </button>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Columna Izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center px-6"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8">
            GRÁFICA 360
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-lg leading-relaxed">
            Porque el talento creativo merece oportunidades reales: únete a
            nuestro equipo donde tus diseños, fotografías, ilustraciones y
            proyectos 3D se convierten en el motor de nuevas experiencias.
          </p>
        </motion.div>

        {/* Columna Derecha - Panel de Registro */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#11183D] rounded-2xl shadow-2xl p-8 md:p-10 flex flex-col w-full max-w-lg mx-auto"
        >
          {/* Formulario */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Campos que ocupan toda la fila */}
            <div className="col-span-2 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nombre(s)"
                required
                className="bg-[#1B245A] p-3 rounded-lg text-sm placeholder-gray-400 placeholder:font-light text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <input
                type="text"
                placeholder="Apellidos"
                required
                className="bg-[#1B245A] p-3 rounded-lg text-sm placeholder-gray-400 placeholder:font-light text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            {/* Columna Izquierda */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Documento de identidad (C.C.)"
                required
                className="bg-[#1B245A] p-3 rounded-lg text-sm placeholder-gray-400 placeholder:font-light text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Fecha de nacimiento (dd/mm/aaaa)"
                required
                className="bg-[#1B245A] p-3 rounded-lg text-sm placeholder-gray-400 placeholder:font-light text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                required
                className="bg-[#1B245A] p-3 rounded-lg text-sm placeholder-gray-400 placeholder:font-light text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Nivel académico"
                required
                className="bg-[#1B245A] p-3 rounded-lg text-sm placeholder-gray-400 placeholder:font-light text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Columna Derecha */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Lugar de expedición (ej: Cauca - Popayán)"
                required
                className="bg-[#1B245A] p-3 rounded-lg text-sm placeholder-gray-400 placeholder:font-light text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Dirección (ej: Popayán)"
                required
                className="bg-[#1B245A] p-3 rounded-lg text-sm placeholder-gray-400 placeholder:font-light text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Número de teléfono"
                required
                className="bg-[#1B245A] p-3 rounded-lg text-sm placeholder-gray-400 placeholder:font-light text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Experiencia laboral o semestre"
                required
                className="bg-[#1B245A] p-3 rounded-lg text-sm placeholder-gray-400 placeholder:font-light text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>

          {/* Botón de envío */}
          <button
            type="submit"
            className="mt-8 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition"
          >
            Registrarse
          </button>

          {/* Texto legal */}
          <p className="text-[7px] text-gray-400 text-justify mt-6 leading-relaxed">
            La solicitud de datos personales en un proceso de registro para empleo se justifica en la necesidad de garantizar transparencia,
            seguridad y eficiencia en la vinculación laboral. Estos datos permiten identificar plenamente al aspirante, verificar su autenticidad
            y confirmar que cumple con los requisitos legales y de edad para desempeñar un cargo. Asimismo, información como la dirección,
            el teléfono y el correo electrónico facilitan la comunicación y coordinación durante las etapas de selección. Por otra parte, estos
            datos se usaran para cumplir al clausula 1 de uso de informaciín de Grafica 360 (Identidad y Datos del Responsable 1. Al registrarse
            y proporcionar información en esta plataforma (incluyendo pero no limitado a datos de identificación, contacto, experiencia laboral
            y preferencias profesionales), el usuario otorga a Gráfica 360 el consentimiento libre, informado y voluntario para recopilar, almacenar, 
            tratar y compartir dichos datos con el fin de: relacionados con la formación académica y la experiencia laboral son fundamentales para evaluar 
            la idoneidad del candidato frente al perfil requerido por la organización. Por otra parte el uso de estos datos En
            conjunto, estos requerimientos permiten a la empresa llevar a cabo procesos de selección más confiables, ordenados y ajustados a
            la ley, garantizando tanto los derechos del aspirante como las necesidades de la institución
          </p>
        </motion.div>
      </div>
    </section>
  );
}
