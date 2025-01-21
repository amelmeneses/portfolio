"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Fondo del Hero con animación de loop infinito */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 w-[200%] h-full bg-cover bg-no-repeat animate-infinityLoop"
          style={{
            backgroundImage: "url('/images/cielo.jpg')", // Ruta de la imagen
            backgroundPosition: "center bottom", // Usamos la mitad inferior
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-10 text-center">
        <p className="font-avenirLight text-black text-[17px] leading-[1.4em] text-center uppercase">
          Diseñar es dar vida a las
        </p>
        <h1 className="font-lulo text-[110px] text-black mt-4">Ideas</h1>
        <div className="mt-8">
          <a
            href="https://wa.me/593999223244?text=Hola%20Amel,%20me%20encantaría%20saber%20más%20sobre%20tu%20trabajo!" // Cambia el número de teléfono
            target="_blank"
            rel="noopener noreferrer"
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