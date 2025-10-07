'use client';
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Espacios para tus imágenes */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.02 }}
              className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all duration-300"
            >
              <span className="text-gray-600 text-sm">Tu imagen aquí</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}