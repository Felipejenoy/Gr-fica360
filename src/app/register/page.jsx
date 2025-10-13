"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    documento: "",
    nacimiento: "",
    correo: "",
    nivel_academico: "",
    lugar_expedicion: "",
    direccion: "",
    telefono: "",
    experiencia: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nacimiento") {
      let v = value.replace(/\D/g, "");
      if (v.length >= 3 && v.length <= 4) v = v.slice(0, 2) + "/" + v.slice(2);
      else if (v.length > 4 && v.length <= 8)
        v = v.slice(0, 2) + "/" + v.slice(2, 4) + "/" + v.slice(4, 8);
      setFormData({ ...formData, nacimiento: v });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: userData, error: signUpError } = await supabase.auth.signUp({
        email: formData.correo,
        password: formData.password,
      });

      if (signUpError) {
        alert("❌ Error al registrar usuario: " + signUpError.message);
        return;
      }

      const { error: insertError } = await supabase.from("registers").insert([
        {
          nombre: formData.nombre,
          apellidos: formData.apellidos,
          documento: formData.documento,
          nacimiento: formData.nacimiento,
          correo: formData.correo,
          nivel_academico: formData.nivel_academico,
          lugar_expedicion: formData.lugar_expedicion,
          direccion: formData.direccion,
          telefono: formData.telefono,
          experiencia: formData.experiencia,
        },
      ]);

      if (insertError) {
        alert("⚠️ Error al guardar datos personales: " + insertError.message);
        return;
      }

      setShowModal(true);
    } catch (error) {
      alert("⚠️ Error inesperado: " + error.message);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    router.push("/login");
  };

  return (
    <section className="min-h-screen bg-[#0A0F2C] flex flex-col items-center justify-center text-white relative px-4 sm:px-8 py-10">
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#11183D] hover:bg-[#1B245A] text-white px-3 py-2 rounded-xl font-semibold transition flex items-center gap-2 border border-[#1B245A] text-sm sm:text-base"
      >
        ← Atrás
      </button>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Columna Izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center px-4 sm:px-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 sm:mb-8 leading-tight">
            GRÁFICA 360
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-md sm:max-w-lg leading-relaxed">
            Porque el talento creativo merece oportunidades reales: únete a
            nuestro equipo donde tus diseños, fotografías, ilustraciones y
            proyectos 3D se convierten en el motor de nuevas experiencias.
          </p>
        </motion.div>

        {/* Columna Derecha - Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#11183D] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col w-full max-w-lg mx-auto"
        >
          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6">
            {/* Nombre y Apellidos */}
            <input
              type="text"
              name="nombre"
              placeholder="Nombre(s)"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="input-field sm:col-span-2"
            />
            <input
              type="text"
              name="apellidos"
              placeholder="Apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
              className="input-field sm:col-span-2"
            />

            {/* Todos los demás en pares, bien alineados */}
            <input
              type="text"
              name="documento"
              placeholder="Documento de identidad (C.C.)"
              value={formData.documento}
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="text"
              name="lugar_expedicion"
              placeholder="Lugar de expedición (ej: Cauca - Popayán)"
              value={formData.lugar_expedicion}
              onChange={handleChange}
              required
              className="input-field"
            />

            <input
              type="text"
              name="nacimiento"
              placeholder="Fecha de nacimiento (dd/mm/aaaa)"
              value={formData.nacimiento}
              onChange={handleChange}
              maxLength="10"
              required
              className="input-field"
            />
            <input
              type="text"
              name="direccion"
              placeholder="Dirección (ej: Popayán)"
              value={formData.direccion}
              onChange={handleChange}
              required
              className="input-field"
            />

            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              value={formData.correo}
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="text"
              name="telefono"
              placeholder="Número de teléfono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="input-field"
            />

            <input
              type="text"
              name="nivel_academico"
              placeholder="Nivel académico"
              value={formData.nivel_academico}
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="text"
              name="experiencia"
              placeholder="Experiencia laboral o semestre"
              value={formData.experiencia}
              onChange={handleChange}
              required
              className="input-field"
            />

            {/* Contraseña */}
            <input
              type="password"
              name="password"
              placeholder="Crea una contraseña segura"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field sm:col-span-2"
            />
          </div>
          <button
            type="submit"
            className="mt-8 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition w-full"
          >
            Registrarse
          </button>
          <p className="text-[8px] sm:text-[10px] text-gray-400 text-justify mt-6 leading-relaxed">
            La solicitud de datos personales en un proceso de registro para empleo se justifica en la necesidad de garantizar transparencia,
            seguridad y eficiencia en la vinculación laboral...
          </p>
        </motion.form>
      </div>

      {/* 🔵 MODAL DE CONFIRMACIÓN */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#11183D] rounded-2xl p-8 max-w-md text-center border border-blue-500"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                ¡Registro exitoso en GRÁFICA 360! 🎨
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Hemos enviado un correo de confirmación a{" "}
                <span className="font-semibold text-blue-400">
                  {formData.correo}
                </span>
                .<br />
                Por favor, revisa tu bandeja de entrada o carpeta de spam y haz clic
                en el enlace para activar tu cuenta.
              </p>
              <p className="mt-4 text-gray-400 text-xs italic">
                Una vez confirmes tu correo, podrás iniciar sesión y continuar con tu registro.
              </p>

              <button
                onClick={handleModalClose}
                className="mt-6 bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold transition"
              >
                Entendido
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .input-field {
          background: #1b245a;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.98rem;
          color: white;
          width: 100%;
          outline: none;
          transition: 0.2s;
          margin-bottom: 0;
        }
        .input-field:focus {
          ring: 2px solid #3b82f6;
        }
      `}</style>
    </section>
  );
}
