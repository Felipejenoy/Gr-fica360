"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, User, Upload } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(true);
  const [userData, setUserData] = useState(null);

  const cuadros = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    titulo: `Archivo ${i + 1}`,
  }));

  useEffect(() => {
    const fetchUser = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        router.push("/login");
        return;
      }

      const email = sessionData.session.user.email;
      const { data: info, error } = await supabase
        .from("registers")
        .select("nombre, apellidos")
        .eq("correo", email)
        .single();

      if (!error && info) setUserData(info);
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0A0F2C] to-[#0B1A40] text-white flex flex-col">
      {/* Barra superior */}
      <header className="w-full flex items-center justify-between px-4 sm:px-6 py-4 bg-[#0A0F2C]/90 backdrop-blur-md border-b border-[#1B245A]">
        {/* Botón menú */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-blue-400 transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Menú principal */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#" className="hover:text-blue-400 transition">Diseñadores</a>
          <a href="#" className="hover:text-blue-400 transition">Catálogos</a>
          <a href="#" className="hover:text-blue-400 transition">Redes</a>
          <a href="#" className="hover:text-blue-400 transition">Trabaja con nosotros</a>
        </nav>

        {/* Perfil */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center bg-[#11183D] rounded-full px-4 py-1 border border-[#1B245A]">
            <input
              type="text"
              placeholder="Búsqueda"
              className="bg-transparent outline-none text-gray-300 placeholder-gray-500 text-sm"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <User
                size={34}
                className="p-1 bg-[#11183D] rounded-full border border-[#1B245A]"
              />
              <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0A0F2C]" />
            </div>

            <p className="text-[11px] text-gray-400 mt-1 text-center">
              {userData ? `${userData.nombre} ${userData.apellidos}` : "(cargando...)"}
            </p>

            <button
              onClick={handleLogout}
              className="text-[11px] mt-1 text-red-400 hover:text-red-500 transition"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Contenedor principal */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Menú lateral */}
        {menuOpen && (
          <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-56 bg-[#0E1A4F] p-4 sm:p-5 md:p-5 flex flex-col gap-4 sm:gap-5 md:gap-6 border-r border-[#1B245A]"
          >
            <div className="flex flex-col gap-2 text-sm">
              <p className="font-semibold text-gray-300">Mi portafolio</p>
              <ul className="flex flex-col gap-1 text-gray-400">
                <li className="hover:text-white cursor-pointer">Clientes</li>
                <li className="hover:text-white cursor-pointer">Mensajes</li>
                <li className="hover:text-white cursor-pointer">Ofertas de empleo</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="font-semibold text-gray-300">Herramientas</p>
              <ul className="flex flex-col gap-1 text-gray-400">
                <li className="hover:text-white cursor-pointer">Cotizaciones</li>
                <li className="hover:text-white cursor-pointer">Retos creativos</li>
                <li className="hover:text-white cursor-pointer">Etiquetas y categorías</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 text-sm mt-auto">
              <p className="font-semibold text-gray-300">Análisis</p>
              <ul className="flex flex-col gap-1 text-gray-400">
                <li className="hover:text-white cursor-pointer">Estadísticas</li>
                <li className="hover:text-white cursor-pointer">Valoraciones</li>
                <li className="hover:text-white cursor-pointer">Redes</li>
              </ul>
            </div>
          </motion.aside>
        )}

        {/* Área de contenido */}
        <main className="flex-1 p-4 sm:p-6 md:p-10 text-gray-300">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-4 sm:mb-6 text-white">
            Bienvenido a tu panel
          </h2>
          <p className="max-w-full sm:max-w-2xl leading-relaxed text-sm sm:text-base text-gray-400 mb-6 sm:mb-10">
            Aquí podrás gestionar tu portafolio, revisar mensajes de clientes,
            aplicar a ofertas de empleo, participar en retos creativos y consultar tus
            estadísticas de desempeño dentro de la plataforma de{" "}
            <span className="text-blue-400 font-semibold">Gráfica 360</span>.
          </p>

          {/* Cuadros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {cuadros.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="bg-[#11183D] border border-[#1B245A] rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition"
              >
                <Upload size={36} className="text-blue-400 mb-2 sm:mb-3" />
                <h3 className="text-white text-sm sm:text-base font-medium">{item.titulo}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Haz clic para subir</p>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
