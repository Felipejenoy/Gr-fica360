'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#0A0F2C] flex flex-col items-center justify-center text-white relative px-8">
      
      {/* Botón Atrás */}
      <button
        onClick={() => router.push('/')}
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
            Porque el talento creativo merece oportunidades reales: únete a nuestro equipo donde tus diseños, fotografías, ilustraciones y proyectos 3D se convierten en el motor de nuevas experiencias.
          </p>
        </motion.div>

        {/* Columna Derecha - Panel de Registro */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#11183D] rounded-2xl shadow-2xl p-8 md:p-10 flex flex-col w-full max-w-lg mx-auto"
        >
          

          {/* Formulario */}
<form className="grid grid-cols-1 md:grid-cols-2 gap-5">
  {/* Campos que ocupan toda la fila */}
  <div className="col-span-2 flex flex-col gap-4">
    <input
      type="text"
      placeholder="Nombre(s)"
      className="bg-[#1B245A] p-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
    />
    <input
      type="text"
      placeholder="Apellidos"
      className="bg-[#1B245A] p-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
    />
  </div>

  {/* Columna Izquierda */}
  <div className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="Documento de identidad (C.C.)"
      className="bg-[#1B245A] p-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      placeholder="Fecha de nacimiento (dd/mm/aaaa)"
      className="bg-[#1B245A] p-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="email"
      placeholder="Correo electrónico"
      className="bg-[#1B245A] p-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      placeholder="Nivel académico"
      className="bg-[#1B245A] p-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Columna Derecha */}
  <div className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="Lugar de expedición (ej: Cauca - Popayán)"
      className="bg-[#1B245A] p-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      placeholder="Dirección(ej: Popayán)"
      className="bg-[#1B245A] p-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      placeholder="Número de teléfono"
      className="bg-[#1B245A] p-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      placeholder="Experiencia laboral o semestre"
      className="bg-[#1B245A] p-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <p className="text-[11px] text-gray-400 text-justify mt-6 leading-relaxed">
            Al registrarse y proporcionar información en esta plataforma, el usuario otorga a Gráfica 360 el consentimiento libre, informado y voluntario para recopilar, almacenar y tratar los datos con el fin de ofrecer servicios relacionados con empleo y política, generar estadísticas y difundir información relevante. El registro implica la aceptación de los términos de privacidad y condiciones de uso establecidos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
