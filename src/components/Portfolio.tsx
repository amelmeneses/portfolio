"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../app/projects/projects";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <h2 className="font-lulo text-[26px] sm:text-[40px] lg:text-font-2 text-black">
          Portafolio
        </h2>
        <p className="font-avenirLight text-font-5 text-gray-600 mt-4">
          Algunos de mis proyectos más destacados
        </p>
      </div>

      {/* Galería de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="block">
            <div className="project-box relative group overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-dinLight font-bold text-font-5 text-center">
                  {project.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
