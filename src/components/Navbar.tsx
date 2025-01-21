"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMenuToggle = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300); // Duración de la animación (0.3s)
    } else {
      setIsOpen(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Nombre y Título */}
        <div>
          <h1 className="font-lulo text-font-0">Amel Meneses</h1>
          <p className="font-avenirLight text-font-9 text-gray-500">
            Diseñadora UX-UI | Desarrolladora Web
          </p>
        </div>

        {/* Icono de hamburguesa */}
        <button
          className="text-black focus:outline-none md:hidden"
          onClick={handleMenuToggle}
        >
          {isOpen ? (
            <span className="text-2xl font-bold">&times;</span>
          ) : (
            <div className="space-y-2">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          )}
        </button>

        {/* Menú de navegación para desktop */}
        <ul className="hidden md:flex space-x-8 text-gray-600">
          <li>
            <a
              href="#hero"
              className="font-dinLight text-font-1 hover:text-turquoise transition-colors duration-300"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-dinLight text-font-1 hover:text-turquoise transition-colors duration-300"
            >
              Sobre Mí
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="font-dinLight text-font-1 hover:text-turquoise transition-colors duration-300"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-dinLight text-font-1 hover:text-turquoise transition-colors duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Menú desplegable para mobile */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white ${
            isAnimating ? "animate-slideOut" : "animate-slideIn"
          }`}
        >
          {/* Botón de cierre */}
          <button
            className="absolute top-6 right-6 text-4xl font-bold text-black focus:outline-none"
            onClick={handleMenuToggle}
          >
            &times;
          </button>

          {/* Menú con líneas de separación */}
          <div className="flex flex-col space-y-4 w-full max-w-xs">
            <a
              href="#hero"
              className="font-dinLight text-font-1 text-center text-gray-600 hover:text-turquoise transition-colors duration-300 border-b border-gray-200"
              onClick={handleMenuToggle}
            >
              Inicio
            </a>
            <a
              href="#about"
              className="font-dinLight text-font-1 text-center text-gray-600 hover:text-turquoise transition-colors duration-300 border-b border-gray-200"
              onClick={handleMenuToggle}
            >
              Sobre Mí
            </a>
            <a
              href="#portfolio"
              className="font-dinLight text-font-1 text-center text-gray-600 hover:text-turquoise transition-colors duration-300 border-b border-gray-200"
              onClick={handleMenuToggle}
            >
              Portafolio
            </a>
            <a
              href="#contact"
              className="font-dinLight text-font-1 text-center text-gray-600 hover:text-turquoise transition-colors duration-300 border-b border-gray-200"
              onClick={handleMenuToggle}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
