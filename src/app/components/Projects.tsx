"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

const projects = [
    {
        title: "Portfolio Website",
        description: "A modern portfolio website built with React, Tailwind CSS, and TypeScript.",
        image: "/images/portfolio.png", // Cambiar por la ruta correcta
        liveLink: "#",
        codeLink: "#",
        technologies: [
            { icon: <FaReact />, key: "react", color: "#06b6d4" },
            { icon: <FaHtml5 />, key: "html5", color: "#ea580c" },
            { icon: <FaCss3Alt />, key: "css3", color: "#2563eb" },
            { icon: <SiTailwindcss />, key: "tailwind", color: "#2dd4bf" },
            { icon: <SiTypescript />, key: "typescript", color: "#2563eb" },
        ],
    },
    {
        title: "E-commerce Store",
        description: "An e-commerce platform with a fully functional cart, built using MERN stack.",
        image: "/images/ecommerce.png", // Cambiar por la ruta correcta
        liveLink: "#",
        codeLink: "#",
        technologies: [
            { icon: <FaReact />, key: "react", color: "#06b6d4" },
            { icon: <FaJs />, key: "javascript", color: "#eab308" },
            { icon: <FaGitAlt />, key: "git", color: "#f97316" },
            { icon: <FaHtml5 />, key: "html5", color: "#ea580c" },
        ],
    },
    {
        title: "Landing Page",
        description: "A responsive and visually appealing landing page built with Vite, React, and Tailwind CSS.",
        image: "/images/landingpage.png", // Cambiar por la ruta correcta
        liveLink: "#",
        codeLink: "#",
        technologies: [
            { icon: <FaReact />, key: "react", color: "#06b6d4" },
            { icon: <SiVite />, key: "vite", color: "#646cff" },
            { icon: <SiTailwindcss />, key: "tailwind", color: "#2dd4bf" },
            { icon: <FaHtml5 />, key: "html5", color: "#ea580c" },
        ],
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 text-gray-900 px-6 py-20"
        >
            <div className="max-w-6xl text-center">
                {/* Título */}
                <h2 className="text-4xl font-bold text-indigo-900 mb-6">My Projects</h2>
                {/* Descripción */}
                <p className="text-lg leading-8 mb-8">
                    Here are some of the projects I've worked on, showcasing my skills in frontend, backend, and full-stack development.
                </p>
                {/* Proyectos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 relative"
                        >
                            {/* Encabezado de ventana estilo Mac */}
                            <div className="flex items-center justify-start px-4 py-2 bg-indigo-400 border-b border-gray-300">
                                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            {/* Imagen con overlay */}
                            <div className="relative w-full h-48">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                {/* Overlay con enlaces */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link
                                        href={project.liveLink}
                                        className="mb-2 px-4 py-2 bg-indigo-700 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:bg-indigo-500 hover:text-white transition-all duration-200"
                                    >
                                        Live Demo
                                    </Link>
                                    <Link
                                        href={project.codeLink}
                                        className="px-4 py-2 border-2 border-indigo-700 text-indigo-700 font-bold rounded-full shadow-lg hover:shadow-2xl hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all duration-200"
                                    >
                                        View Code
                                    </Link>
                                </div>
                            </div>
                            {/* Contenido */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-indigo-800 mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                {/* Tecnologías utilizadas */}
                                <div className="flex justify-center gap-4 mt-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech.key}
                                            className="text-3xl"
                                            style={{ color: tech.color }}
                                            title={tech.key}
                                        >
                                            {tech.icon}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;