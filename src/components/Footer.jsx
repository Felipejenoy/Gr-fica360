"use client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer 
     id="footer"
    className="bg-[#0A0F2C] text-white py-12 px-10 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Sección izquierda */}
        <div className="flex flex-col md:flex-row gap-20">
          {/* Servicios Principales */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios Principales</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Diseño de marca</li>
              <li>Creación de nombre</li>
              <li>Diseño 3D</li>
              <li>Fotografía</li>
              <li>Ilustración</li>
              <li>Edición</li>
            </ul>
          </div>

          {/* Política */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Política.</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Preferencias de cookies</li>
              <li>Modelación de negocios</li>
              <li>Informes Anuales</li>
              <li>Asistencia</li>
            </ul>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-6 self-center md:self-start">
          <a
            href="#"
            className="bg-white text-[#0A0F2C] w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="border border-white text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 hover:text-[#0A0F2C] transition"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
