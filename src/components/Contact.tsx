"use client";

import React from "react";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 text-center"
    >
      <h2 className="font-lulo text-[26px] sm:text-[40px] lg:text-font-2 text-black mb-8">Contáctame</h2>
      <p className="font-avenirLight text-font-5 text-gray-600 mb-8">
        Estoy disponible para nuevos proyectos y colaboraciones. Puedes
        contactarme a través de las siguientes plataformas:
      </p>
      <div className="flex justify-center items-center space-x-8">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/amel-m-687571306" // Reemplaza con tu URL de LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-turquoise transition-colors duration-300 text-4xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* Correo */}
        <a
          href="mailto:amelmeneses@gmail.com" // dirección de correo
          className="text-gray-600 hover:text-turquoise transition-colors duration-300 text-4xl"
          aria-label="Correo Electrónico"
        >
          <FaEnvelope />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/593999223244" //  número de WhatsApp en formato internacional
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-turquoise transition-colors duration-300 text-4xl"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default Contact;
