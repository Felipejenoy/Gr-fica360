"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
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
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#0B1120] text-white">
      {/* 🔙 Botón de volver */}
      <Link
        href="/"
        className="absolute top-6 left-6 bg-[#11183d] hover:bg-[#1a2a6b] text-white px-4 py-2 rounded-xl font-semibold transition flex items-center gap-2"
      >
        ← Atrás
      </Link>

      {/* 🟦 Contenedor principal */}
      <div className="w-[95%] max-w-8xl min-h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-14 bg-[#111830] rounded-3xl p-14 md:p-20 shadow-2xl">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-extrabold mb-8">GRÁFICA 360</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            Bienvenido de nuevo. Inicia sesión para continuar colaborando con
            nuestro equipo creativo, donde tus ideas y talento hacen parte del
            motor que impulsa{" "}
            <span className="font-semibold text-white">
              nuevas experiencias.
            </span>
          </p>
        </div>

        {/* Columna derecha (formulario) */}
        <form
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
        </form>
      </div>
    </main>
  );
}
