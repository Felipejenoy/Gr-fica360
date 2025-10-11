'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";

export default function Hero() {

  // 🔹 Función para hacer scroll suave a la sección "Catálogos"
  const scrollToCatalogos = (e) => {
    e.preventDefault();
    const section = document.getElementById("catalogos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // 🔹 Función para hacer scroll suave a la sección "TrabajaConNosotros"
  const scrollToTrabajaConNosotros = (e) => {
    e.preventDefault();
    const section = document.getElementById("trabajaConNosotros");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[85vh] flex flex-col bg-[#0A0F2C]">
      {/* NAVBAR FIJO */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0F2C]/95 backdrop-blur-md border-b border-gray-700 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-2xl">&#9776;</button>
          <ul className="hidden md:flex gap-8 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">Diseñadores</li>

            {/* 🔹 Aquí se usa la función scrollToCatalogos */}
            <li
              onClick={scrollToCatalogos}
              className="hover:text-gray-300 cursor-pointer"
            >
              Catálogos
            </li>

            <li className="hover:text-gray-300 cursor-pointer">Redes</li>
            <li 
             onClick={scrollToTrabajaConNosotros}
             className="hover:text-gray-300 cursor-pointer">
              Trabaja con nosotros
            </li>

            <li className="hover:text-gray-300 cursor-pointer">Búsqueda</li>
          </ul>
        </div>
        <div className="flex gap-4">
   <Link href="/register" passHref>
  <button className="bg-white text-[#0A0F2C] font-semibold px-6 py-2 rounded-full hover:bg-gray-200">
    Registrarse
  </button>
</Link>
    <Link href="/login" passHref>
     <button className="bg-white text-[#0A0F2C] font-semibold px-6 py-2 rounded-full hover:bg-gray-200">
      Iniciar sesión
    </button>
    </Link>
  </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-32 md:py-44 flex-grow">
        {/* IZQUIERDA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            GRÁFICA 360
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Todo diseño, todas las miradas.
          </p>
        </motion.div>

        {/* DERECHA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10 flex-1"
        >
          <ul className="text-lg space-y-3 list-disc list-inside">
            <li>Fotografía</li>
            <li>Edición</li>
            <li>Ilustración</li>
            <li>Diseño 3D</li>
          </ul>

          {/* Imagen de ejemplo */}
         <div className="w-[400px] h-[400px] bg-gray-700 rounded-2xl overflow-hidden">
       <Image
        src="/images/Diseño3D/FtPortada.png"
        alt="Imagen de ejemplo"
       width={2048}
        height={2048}
       className="object-cover w-full h-full"
       />
       </div>

        </motion.div>
      </div>
    </section>
  );
}
