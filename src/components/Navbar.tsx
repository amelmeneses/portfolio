import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Nombre y Título */}
        <div>
          <h1 className="font-lulo text-font-0">
            Amel Meneses
          </h1>
          <p className="font-avenirLight text-font-9 text-gray-500">
            Diseñadora UX-UI | Desarrolladora Web
          </p>
        </div>

        {/* Enlaces de Navegación */}
        <ul className="flex space-x-8 text-gray-600">
          <li>
            <a
              href="#hero"
              className="font-dinLight text-font-1 hover:text-blue-500 transition-colors duration-300"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-dinLight text-font-1 hover:text-blue-500 transition-colors duration-300"
            >
              Sobre Mí
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="font-dinLight text-font-1 hover:text-blue-500 transition-colors duration-300"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-dinLight text-font-1 hover:text-blue-500 transition-colors duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
