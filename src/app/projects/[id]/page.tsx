"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "../projects"; // Importamos la lista de proyectos

const ProjectPage: React.FC = () => {
  const { id } = useParams(); // Obtener el ID del proyecto desde la URL
  const project = projects.find((p) => p.id === id); // Buscar el proyecto correspondiente

  if (!project) {
    return notFound(); // Si el proyecto no existe, muestra un error 404
  }

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="mx-auto">
        <h1 className="font-lulo text-[32px] sm:text-[45px] lg:text-[50px] text-black text-center">
          {project.title}
        </h1>
        <Image
          src={project.image}
          alt={project.title}
          width={700}
          height={500}
          className="rounded-lg shadow-lg my-8 mx-auto block  object-cover"
        />
        <p className="font-avenirLight text-font-5 text-gray-600 leading-relaxed mb-6">
          {project.description}
        </p>
        <h2 className="font-lulo text-[22px] sm:text-[28px] lg:text-[32px] text-black mb-4">
          Experiencia en el desarrollo
        </h2>
        <p className="font-avenirLight text-font-5 text-gray-600 leading-relaxed mb-6">
          {project.experience}
        </p>
        <h2 className="font-lulo text-[22px] sm:text-[28px] lg:text-[32px] text-black mb-4">
          Habilidades aplicadas
        </h2>
        <ul className="list-disc pl-5 text-font-5 text-gray-600">
          {project.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        {project.link && (
          <div className="text-center mt-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-dinLight text-font-1 uppercase rounded-full shadow-lg hover:font-bold hover:bg-black hover:scale-95 transition-transform duration-200 ease-in-out text-center"
              >
              Ver Proyecto
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectPage;
