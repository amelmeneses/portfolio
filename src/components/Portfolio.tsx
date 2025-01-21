"use client";

import React from "react";

const projects = [
  { id: 1, title: "Proyecto Social Gals", image: "/images/mockup1.png" },
  { id: 2, title: "Proyecto Playbooker", image: "/images/mockup3.png" },
  { id: 3, title: "Proyecto Hopper", image: "/images/mockup2.png" },
  { id: 4, title: "Proyecto Gea", image: "/images/mockup4.png" },
];

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50"
    >
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <h2 className="font-lulo text-font-2 text-black">Portafolio</h2>
        <p className="font-avenirLight text-font-5 text-gray-600 mt-4">
          Algunos de mis proyectos más destacados
        </p>
      </div>

      {/* Galería de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-box relative group overflow-hidden rounded-lg shadow-lg aspect-square"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-dinLight text-font-5 text-center">
                {project.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
