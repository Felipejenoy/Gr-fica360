"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { CheckCircle, XCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.push("/dashboard");
      }
    };
    checkSession();
  }, [router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    setLoading(false);

    if (error) {
      setToast({
        type: "error",
        message: "❌ Credenciales incorrectas o usuario no encontrado.",
      });
      return;
    }

    setToast({
      type: "success",
      message: "✅ Bienvenido de nuevo a Gráfica 360",
    });

    setTimeout(() => {
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <section className="min-h-screen bg-[#0A0F2C] flex flex-col items-center justify-center text-white relative px-4 sm:px-8">
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-4 sm:left-6 bg-[#11183D] hover:bg-[#1B245A] text-white px-4 py-2 rounded-xl font-semibold transition flex items-center gap-2 border border-[#1B245A]"
      >
        ← Atrás
      </button>

      <div className="w-full max-w-7xl min-h-[90vh] grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14 bg-[#111830] rounded-3xl p-8 md:p-20 shadow-2xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center px-4 md:px-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 sm:mb-8">BIENVENIDO</h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 leading-relaxed max-w-md md:max-w-lg">
            Inicia sesión y continúa formando parte del equipo creativo de{" "}
            <span className="font-semibold text-white">Gráfica 360</span>, donde la inspiración se convierte en proyectos reales.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#11183D] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col w-full max-w-lg mx-auto"
        >
          <div className="flex flex-col gap-4 sm:gap-5">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#1B245A] p-4 sm:p-5 rounded-lg text-lg sm:text-xl md:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-[#1B245A] p-4 sm:p-5 rounded-lg text-lg sm:text-xl md:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className={`mt-4 ${
                loading ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"
              } text-white font-semibold py-4 sm:py-5 rounded-lg text-lg sm:text-xl md:text-base transition`}
            >
              {loading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 text-center mt-6">
            ¿No tienes cuenta?{" "}
            <Link href="/register" className="text-blue-400 hover:underline font-medium">
              Regístrate aquí
            </Link>
          </p>
        </motion.form>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.message}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-5 py-3 rounded-xl border shadow-2xl flex items-center gap-2 text-sm font-medium backdrop-blur-md
              ${
                toast.type === "success"
                  ? "bg-[#11183D]/95 border-blue-500 text-blue-400"
                  : "bg-[#1B245A]/95 border-red-500 text-red-400"
              }`}
          >
            {toast.type === "success" ? (
              <CheckCircle size={18} className="text-blue-400" />
            ) : (
              <XCircle size={18} className="text-red-400" />
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
