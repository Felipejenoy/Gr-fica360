export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">Grafica360</h1>
        <ul className="flex gap-6 font-semibold">
          <li><a href="#diseñadores" className="hover:text-blue-400 transition">Diseñadores</a></li>
          <li><a href="#Catalogos" className="hover:text-blue-400 transition">Catálogos</a></li>
          <li><a href="#redes" className="hover:text-blue-400 transition">Redes</a></li>
          <li><a href="#trabaja" className="hover:text-blue-400 transition">Trabaja con nosotros</a></li>
          <li><a href="#busqueda" className="hover:text-blue-400 transition">Búsqueda</a></li>
          <li><a href="#register" className="hover:text-blue-400 transition">Registrarse</a></li>
          <li><a href="#login" className="hover:text-blue-400 transition">Iniciar sesión</a></li>
        </ul>
      </div>
    </nav>
  );
}
