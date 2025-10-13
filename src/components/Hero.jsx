'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Scroll suave a secciones
  const scrollToCatalogos = (e) => {
    e.preventDefault();
    document.getElementById('catalogos')?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const scrollToTrabajaConNosotros = (e) => {
    e.preventDefault();
    document.getElementById('trabajaConNosotros')?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
  

  return (
    <section className="min-h-[85vh] flex flex-col bg-[#0A0F2C]">
      {/* 🔹 NAVBAR FIJO */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0F2C]/95 backdrop-blur-md border-b border-gray-700 px-5 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Botón hamburguesa visible solo en móvil */}
          <button
            className="text-3xl text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Menú Desktop */}
          <ul className="hidden md:flex gap-8 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">Diseñadores</li>
            <li
              onClick={scrollToCatalogos}
              className="hover:text-gray-300 cursor-pointer"
            >
              Catálogos
            </li>
            <li className="hover:text-gray-300 cursor-pointer">Redes</li>
            <li
              onClick={scrollToTrabajaConNosotros}
              className="hover:text-gray-300 cursor-pointer"
            >
              Trabaja con nosotros
            </li>
            <li className="hover:text-gray-300 cursor-pointer">Búsqueda</li>
          </ul>
        </div>

        {/* Botones login/register */}
        <div className="hidden md:flex gap-4">
          <Link href="/register" passHref>
            <button className="bg-white text-[#0A0F2C] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
              Registrarse
            </button>
          </Link>
          <Link href="/login" passHref>
            <button className="bg-white text-[#0A0F2C] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </nav>

      {/* 🔸 MENÚ MÓVIL */}
      {menuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-full bg-[#0A0F2C] border-t border-gray-700 z-40 py-4 animate-slideDown">
          <ul className="flex flex-col items-center gap-4 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">Diseñadores</li>
            <li onClick={scrollToCatalogos} className="hover:text-gray-300 cursor-pointer">
              Catálogos
            </li>
            <li className="hover:text-gray-300 cursor-pointer">Redes</li>
            <li
              onClick={scrollToTrabajaConNosotros}
              className="hover:text-gray-300 cursor-pointer"
            >
              Trabaja con nosotros
            </li>
            <li className="hover:text-gray-300 cursor-pointer">Búsqueda</li>
            <div className="flex flex-col gap-3 mt-3">
              <Link href="/register" passHref>
                <button className="bg-white text-[#0A0F2C] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition w-48">
                  Registrarse
                </button>
              </Link>
              <Link href="/login" passHref>
                <button className="bg-white text-[#0A0F2C] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition w-48">
                  Iniciar sesión
                </button>
              </Link>
            </div>
          </ul>
        </div>
      )}

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-32 md:py-44 flex-grow text-center md:text-left">
        {/* IZQUIERDA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 mb-10 md:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            GRÁFICA 360
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-md mx-auto md:mx-0">
            Todo diseño, todas las miradas.
          </p>
        </motion.div>

        {/* DERECHA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10 flex-1"
        >
          <ul className="text-base sm:text-lg space-y-2 md:space-y-3 list-disc list-inside">
            <li>Fotografía</li>
            <li>Edición</li>
            <li>Ilustración</li>
            <li>Diseño 3D</li>
          </ul>

          {/* Imagen */}
          <div className="w-[250px] sm:w-[320px] md:w-[400px] h-[250px] sm:h-[320px] md:h-[400px] bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
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

      {/* 🔹 Animación simple para el menú móvil */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
