"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-turquoise via-white to-turquoise"
    >
      {/* Fondo del Hero */}
      <div className="absolute inset-0">
        <img
          src="/path-to-your-background.jpg" // Reemplaza con la ruta de tu imagen
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-10 text-center">
        <p className="font-avenirLight text-black text-[17px] leading-[1.4em] text-center uppercase">
          Diseñar es dar vida a las
        </p>
        <h1 className="font-lulo text-font-3 text-black mt-4">
          Ideas
        </h1>
        <div className="mt-8">
          <a
            href="#contact"
            className="px-6 py-3 bg-black text-white font-dinLight text-font-1 uppercase rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
