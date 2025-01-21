"use client";

import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Proyecto Social Gals",
    description: "Prototipo funcional personal para poner en práctica destresas adquiridas en figma.",
    tasks: ["Diseño UX-UI", "Amimaciones figma"],
    image: "/images/mockup1.png",
    link: "https://www.figma.com/proto/QlZ4sQtCv0qA6zU4cuGeXZ/Proyecto-Social-Media?page-id=119%3A3464&node-id=119-3465&node-type=frame&viewport=348%2C543%2C0.25&t=MHGhxTXfEnPqpfVx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=206%3A4318&show-proto-sidebar=1",
  },
  {
    id: 2,
    title: "Proyecto Playbooker",
    description: "Proyecto para poner en práctica destresas adquiridas para realizar diseño en desktop además de ser el diseño para el proyecto de titulación.",
    tasks: ["Reserva de canchas", "Implementación react", "Manejo de base de datos"],
    image: "/images/mockup3.png",
    link: "https://www.figma.com/proto/7i50rFlYxCdY2bIptZdeBZ/Proyecto-2?page-id=1%3A3&node-id=27-5049&viewport=4778%2C1289%2C0.17&t=BtoVzqI9albrDahv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=27%3A5049",
  },
  {
    id: 3,
    title: "Proyecto Hopper",
    description: "Proyecto para poner en práctica destresas adquiridas para realizar diseño de juegos ademas de analisis.",
    tasks: ["Gamificación", "Analisis de UX-UI"],
    image: "/images/mockup2.png",
    link: "https://www.figma.com/proto/zaSsEUYU4qkBeKx9dYnS7T/Juego-2?page-id=0%3A1&node-id=1-4&p=f&viewport=-337%2C0%2C0.13&t=0y3nZkkLwbiSW4Kw-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A4",
  },
  {
    id: 4,
    title: "Proyecto Gea",
    description: "Descripción del proyecto Gea.",
    tasks: ["Diseño UX-UI", "Interfaz intuitiva"],
    image: "/images/mockup4.png",
    link: "https://www.figma.com/proto/iCekYCX0NOSADbQoY5jjRh/proyecto-parques?page-id=119%3A4648&node-id=119-5009&starting-point-node-id=119%3A4849&scaling=scale-down&content-scaling=fixed&t=SJHiJY6hHAtnskyo-1",
  },
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
            className="project-box relative group overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer"
            onClick={() => openModal(project)} // Abrir modal con datos del proyecto
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

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[60%] lg:w-[40%] rounded-lg shadow-lg overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center bg-gray-100 px-4 py-2 border-b">
              <h3 className="font-lulo text-font-7 project-modal-title">{selectedProject.title}</h3>
              <button
                onClick={closeModal}
                className="text-black text-xl font-bold hover:text-red-500 transition"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 project-modal-box">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-[400px] object-cover rounded-md mb-4 project-modal-image"
              />
              <p className="font-avenirLight text-font-6 text-gray-600 mb-4 project-modal-description">
                {selectedProject.description}
              </p>
              <ul className="list-disc pl-5 mb-4 text-font-6 text-gray-600 project-modal-tasks">
                {selectedProject.tasks.map((task: string, index: number) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-turquoise text-white rounded-md hover:bg-turquoise/80 transition-colors duration-300 project-modal-link"
                >
                  Ver proyecto
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
