'use client';
import { motion } from 'framer-motion';

export default function Catalogos() {
  const items = [
    { titulo: 'Fotos' },
    { titulo: 'Edición' },
    { titulo: 'Ilustración' },
    { titulo: 'Diseño 3D' },
  ];

  return (
    <section
    id="catalogos"
    className="py-20 bg-gradient-to-b from-[#0A0F2C] to-[#111A4D] text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Catálogos
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-56 h-36 bg-white rounded-lg mb-4 shadow-md"></div>
              <h3 className="font-semibold">{item.titulo}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
