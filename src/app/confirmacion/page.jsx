"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ConfirmacionPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://forms.gle/VPoYxZ8dvQEmPVe97";
    }, 4000); // ⏱️ Redirige a los 4 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0A0F2C] text-white text-center px-6">
      <div className="max-w-md bg-[#11183D] p-10 rounded-2xl shadow-xl border border-[#1B245A]">
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          ¡Correo confirmado! ✅
        </h1>
        <p className="text-gray-300 mb-4">
          Gracias por verificar tu cuenta en <strong>GRÁFICA 360</strong>.
        </p>

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-sm text-gray-400"
        >
          Vamos a realizarte una pequeña encuesta para conocer tus intereses...
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="mt-6"
        >
          <span className="text-blue-400 font-medium">Redirigiendo al formulario</span>
          <span className="text-blue-500"> ⟳</span>
        </motion.div>
      </div>
    </section>
  );
}
