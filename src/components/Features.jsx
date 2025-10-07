'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section className="bg-[#0A0F2C] border-t border-gray-700 px-6 md:px-16 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        {/* Texto + switches */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 text-sm text-gray-300">
          <span className="font-semibold text-white">Acuerdo de privacidad</span>

          {/* Personalización */}
          <div className="flex items-center gap-3">
            <span>Personalización</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>

          {/* Analítica */}
          <div className="flex items-center gap-3">
            <span>Analítica</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>

          {/* Publicidad dirigida */}
          <div className="flex items-center gap-3">
            <span>Publicidad dirigida</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-4 justify-end">
          <button className="px-5 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm">
            Rechazar
          </button>
          <button className="px-5 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm">
            Guardar
          </button>
          <button className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 text-sm">
            Aceptar todo
          </button>
        </div>
      </motion.div>
    </section>
  );
}
