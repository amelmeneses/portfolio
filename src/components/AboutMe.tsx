"use client";

import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 md:px-12 lg:px-24 bg-white flex flex-col md:flex-row items-center justify-between"
    >
      {/* Imagen */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/about-me.jpeg" //ruta de tu imagen
          alt="About Me"
          className="rounded-lg shadow-lg object-cover w-full max-w-sm md:max-w-md"
        />
      </div>

      {/* Contenido */}
      <div className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/2 text-center md:text-left">
        <h2 className="font-lulo text-font-2 text-black">Sobre Mí</h2>
        <p className="font-avenirLight text-font-1 text-gray-600 mt-4 leading-relaxed">
          Soy Amel Meneses, diseñadora UX-UI y desarrolladora web con una sólida
          formación en tecnología y diseño. Actualmente curso el séptimo semestre de
          Ingeniería en Sistemas de Información en la Pontificia Universidad Católica del Ecuador.
        </p>
        <p className="font-avenirLight text-font-1 text-gray-600 mt-4 leading-relaxed">
          Mi formación me ha permitido desarrollar habilidades en programación,
          bases de datos, modelado de sistemas y diseño centrado en el usuario,
          lo que me brinda una visión integral para resolver problemas tecnológicos
          de manera innovadora. Con una pasión por la innovación y el diseño, busco
          constantemente transformar ideas en soluciones digitales que conecten a las
          personas y potencien su experiencia en el entorno digital.
        </p>
        <p className="font-avenirLight text-font-1 text-gray-600 mt-4 leading-relaxed">
          Siempre estoy buscando nuevos desafíos y oportunidades para crecer.
        </p>
        <a
          href="/files/CV_Meneses_Amel.pdf" // Ruta del archivo PDF
          download // Este atributo fuerza la descarga del archivo
          className="inline-block mt-6 px-6 py-3 bg-black text-white font-dinLight text-font-1 uppercase rounded-full shadow-lg hover:bg-turquoise/80 transition-colors duration-300"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
