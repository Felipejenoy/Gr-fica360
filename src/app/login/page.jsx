"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de inicio de sesión:", formData);
    router.push("/dashboard");
  };

  return (
    <section className="min-h-screen bg-[#0B1120] flex flex-col items-center justify-center text-white relative px-8">
      {/* Botón Atrás */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 bg-[#11183D] hover:bg-[#1B245A] text-white px-4 py-2 rounded-xl font-semibold transition flex items-center gap-2 border border-[#1B245A]"
      >
        ← Atrás
      </button>

      {/* Contenedor principal */}
      <div className="w-full max-w-8xl min-h-[90vh] grid grid-cols-1 md:grid-cols-2 items-center gap-14 bg-[#111830] rounded-3xl p-14 md:p-20 shadow-2xl overflow-hidden">
        {/* Columna izquierda (texto con animación) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-6xl font-extrabold mb-8">BIENVENIDO</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            Inicia sesión y continúa formando parte del equipo creativo de{" "}
            <span className="font-semibold text-white">Gráfica 360</span>, donde
            la inspiración se convierte en proyectos reales.
          </p>
        </motion.div>

        {/* Columna derecha (formulario con animación) */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col justify-center bg-[#0E1630] p-12 md:p-16 rounded-2xl shadow-lg"
        >
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#151C3A] text-white p-4 rounded-lg mb-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#11183d]"
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
            className="bg-[#151C3A] text-white p-4 rounded-lg mb-8 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#11183d]"
          />

          <button
            type="submit"
            className="bg-[#11183d] hover:bg-[#1c2b7a] text-white font-semibold py-4 rounded-lg text-lg transition"
          >
            Iniciar sesión
          </button>

          <p className="text-sm text-gray-400 text-center mt-5">
            ¿No tienes cuenta?{" "}
            <Link
              href="/register"
              className="text-blue-400 hover:underline font-medium"
            >
              Regístrate aquí
            </Link>
          </p>
        </motion.form>
      </div>
    </section>
  );
}
