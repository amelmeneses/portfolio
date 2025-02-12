"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-[46vh] w-full flex items-center justify-center overflow-hidden bg-black"
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
      <div className="relative z-10 text-center w-full h-full">
        <div className="relative z-10 text-center bg-black/40 rounded-md px-[25px] h-full flex flex-col justify-center">
          <div className="pt-[75px]">
            <p className="font-avenirLight text-white text-[17px] leading-[1.4em] text-center uppercase">
            Nuestro papel es imaginar productos que no existen y hacerlos 
            </p>
            <h1 className="font-lulo text-[45px] md:text-[90px] text-white mt-4">  realidad</h1>
            <p className="font-avenirLight text-white text-[17px] leading-[1.4em] text-center uppercase">
            Christopher Stringer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
