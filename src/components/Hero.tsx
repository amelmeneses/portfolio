"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Fondo del Hero con animación de loop infinito */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[200%] h-full bg-cover bg-no-repeat animate-infinityLoop"
          style={{
            backgroundImage: "url('/images/cielo.jpg')", // Ruta de la imagen
            backgroundPosition: "center bottom", // Usamos la mitad inferior
            backgroundSize: "100% 100%",
          }}
        ></div>
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-10 text-center">
        <p className="font-avenirLight text-black text-[17px] leading-[1.4em] text-center uppercase">
          Diseñar es dar vida a las
        </p>
        <h1 className="font-lulo text-[55px] md:text-[110px] text-black mt-4">Ideas</h1>
      </div>
    </section>
  );
};

export default Hero;
