"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ConfirmacionPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("https://forms.gle/VPoYxZ8dvQEmPVe97");
    }, 4000); // 4 segundos antes de redirigir
    return () => clearTimeout(timer);
  }, [router]);
 // 
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#0A0F2C] text-white px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#11183D] p-10 rounded-2xl shadow-lg max-w-md"
      >
        <h1 className="text-3xl font-bold mb-4 text-[#3b82f6]">
          ✅ Correo confirmado
        </h1>
        <p className="text-gray-300 mb-4">
          Tu correo ha sido verificado correctamente.
        </p>
        <p className="text-gray-400 text-sm mb-6">
          Ahora realizaremos una pequeña encuesta para conocer tus intereses.
        </p>

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-sm text-gray-500"
        >
          Redirigiendo...
        </motion.div>
      </motion.div>
    </section>
  );
}
