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

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Columna Izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            GRÁFICA 360
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-md leading-relaxed">
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
          className="bg-[#11183D] rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col w-full max-w-md mx-auto"
        >
          {/* Formulario */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Campos que ocupan toda la fila */}
            <div className="col-span-2 flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-300">
                Nombre(s) <span className="text-[#FF4D4D]">*</span>
              </label>
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                required
                className="bg-[#1B245A] p-2.5 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />

              <label className="text-xs font-medium text-gray-300">
                Apellidos <span className="text-[#FF4D4D]">*</span>
              </label>
              <input
                type="text"
                placeholder="Ingresa tus apellidos"
                required
                className="bg-[#1B245A] p-2.5 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            {/* Columna Izquierda */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-300">
                Documento de identidad (C.C.){" "}
                <span className="text-[#FF4D4D]">*</span>
              </label>
              <input
                type="text"
                placeholder="Ej: 1001234567"
                required
                className="bg-[#1B245A] p-2.5 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="text-xs font-medium text-gray-300">
                Fecha de nacimiento <span className="text-[#FF4D4D]">*</span>
              </label>
              <input
                type="text"
                placeholder="dd/mm/aaaa"
                required
                className="bg-[#1B245A] p-2.5 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="text-xs font-medium text-gray-300">
                Correo electrónico <span className="text-[#FF4D4D]">*</span>
              </label>
              <input
                type="email"
                placeholder="ejemplo@email.com"
                required
                className="bg-[#1B245A] p-2.5 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="text-xs font-medium text-gray-300">
                Nivel académico <span className="text-[#FF4D4D]">*</span>
              </label>
              <input
                type="text"
                placeholder="Ej: Técnico, Universitario, etc."
                required
                className="bg-[#1B245A] p-2.5 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Columna Derecha */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-300">
                Lugar de expedición <span className="text-[#FF4D4D]">*</span>
              </label>
              <input
                type="text"
                placeholder="Ej: Cauca - Popayán"
                required
                className="bg-[#1B245A] p-2.5 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="text-xs font-medium text-gray-300">
                Dirección <span className="text-[#FF4D4D]">*</span>
              </label>
              <input
                type="text"
                placeholder="Ej: Calle 5 #10-20, Popayán"
                required
                className="bg-[#1B245A] p-2.5 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="text-xs font-medium text-gray-300">
                Número de teléfono <span className="text-[#FF4D4D]">*</span>
              </label>
              <input
                type="text"
                placeholder="Ej: 3101234567"
                required
                className="bg-[#1B245A] p-2.5 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="text-xs font-medium text-gray-300">
                Experiencia laboral o semestre{" "}
                <span className="text-[#FF4D4D]">*</span>
              </label>
              <input
                type="text"
                placeholder="Ej: 2 años o 5° semestre"
                required
                className="bg-[#1B245A] p-2.5 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>

          {/* Botón de envío */}
          <button
            type="submit"
            className="mt-6 bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-md font-semibold text-sm transition"
          >
            Registrarse
          </button>

          {/* Texto legal */}
          <p className="text-[10px] text-gray-400 text-justify mt-4 leading-relaxed">
            Al registrarse y proporcionar información en esta plataforma, el
            usuario otorga a Gráfica 360 el consentimiento libre, informado y
            voluntario para recopilar, almacenar y tratar los datos con el fin
            de ofrecer servicios relacionados con empleo y política, generar
            estadísticas y difundir información relevante. El registro implica
            la aceptación de los términos de privacidad y condiciones de uso
            establecidos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
