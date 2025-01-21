"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define el tipo para los proyectos
type Project = {
  id: number;
  title: string;
  description: string;
  tasks: string[];
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Proyecto Social Gals",
    description: "Prototipo funcional personal para poner en práctica destrezas adquiridas en figma.",
    tasks: ["Diseño UX-UI", "Animaciones figma"],
    image: "/images/mockup1.png",
    link: "https://www.figma.com/proto/QlZ4sQtCv0qA6zU4cuGeXZ/Proyecto-Social-Media",
  },
  {
    id: 2,
    title: "Proyecto Playbooker",
    description: "Proyecto para poner en práctica destrezas adquiridas para realizar diseño en desktop además de ser el diseño para el proyecto de titulación.",
    tasks: ["Reserva de canchas", "Implementación React", "Manejo de base de datos"],
    image: "/images/mockup3.png",
    link: "https://www.figma.com/proto/7i50rFlYxCdY2bIptZdeBZ/Proyecto-2",
  },
  {
    id: 3,
    title: "Proyecto Hopper",
    description: "Proyecto para poner en práctica destrezas adquiridas para realizar diseño de juegos además de análisis.",
    tasks: ["Gamificación", "Análisis de UX-UI"],
    image: "/images/mockup2.png",
    link: "https://www.figma.com/proto/zaSsEUYU4qkBeKx9dYnS7T/Juego-2",
  },
  {
    id: 4,
    title: "Proyecto Gea",
    description: "Diseño de interfaz para el desarrollo de la app.",
    tasks: ["Diseño UX-UI", "Interfaz intuitiva"],
    image: "/images/mockup4.png",
    link: "https://www.figma.com/proto/iCekYCX0NOSADbQoY5jjRh/proyecto-parques",
  },
  {
    id: 5,
    title: "Proyecto Justlift",
    description: "Corrección de ciertos componentes e información como el formulario, horarios entre otros detalles.",
    tasks: ["Drupal", "Corrección de información", "Añadir componentes", "Implementación del hero, footer y header"],
    image: "/images/mockup5.png",
    link: "https://justlift.com.ec/",
  },
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <h2 className="font-lulo text-[26px] sm:text-[40px] lg:text-font-2 text-black">Portafolio</h2>
        <p className="font-avenirLight text-font-5 text-gray-600 mt-4">Algunos de mis proyectos más destacados</p>
      </div>

      {/* Galería de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-box relative group overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer"
            onClick={() => openModal(project)}
          >
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-dinLight font-bold text-font-5 text-center">{project.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-white w-[90%] md:w-[60%] lg:w-[40%] rounded-lg shadow-lg overflow-hidden animate-slideIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center bg-gray-100 px-4 py-2 border-b">
              <h3 className="font-lulo text-font-7">{selectedProject.title}</h3>
              <button
                onClick={closeModal}
                className="text-black text-xl font-bold hover:text-red-500 transition"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={400}
                height={400}
                className="w-full h-[400px] object-cover rounded-md mb-4"
              />
              <p className="font-avenirLight text-font-6 text-gray-600 mb-4">{selectedProject.description}</p>
              <ul className="list-disc pl-5 mb-4 text-font-6 text-gray-600">
                {selectedProject.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-turquoise text-white rounded-md hover:bg-turquoise/80 transition-colors duration-300"
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
