"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiGithub, SiVisualstudiocode, SiFirebase, SiMysql } from "react-icons/si";

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col items-center justify-center bg-indigo-100 text-gray-900 px-6 py-20"
        >
            <div className="max-w-4xl text-center">
                {/* Título */}
                <h2 className="text-4xl font-bold text-indigo-900 mb-6">My Skills</h2>
                {/* Descripción */}
                <p className="text-lg leading-8 mb-8">
                    Here are some of the technologies and tools I use to build efficient and scalable web applications.
                </p>
                {/* Habilidades */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Frontend */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-indigo-800 mb-4">Frontend</h3>
                        <div className="flex justify-center flex-wrap gap-4">
                            <FaHtml5 className="text-orange-600 text-4xl" title="HTML5" />
                            <FaCss3Alt className="text-blue-600 text-4xl" title="CSS3" />
                            <FaJs className="text-yellow-500 text-4xl" title="JavaScript" />
                            <FaReact className="text-cyan-500 text-4xl" title="React.js" />
                            <SiTypescript className="text-blue-600 text-4xl" title="TypeScript" />
                            <SiTailwindcss className="text-teal-400 text-4xl" title="Tailwind CSS" />
                        </div>
                    </div>
                    {/* Backend */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-indigo-800 mb-4">Backend</h3>
                        <div className="flex justify-center flex-wrap gap-4">
                            <FaNodeJs className="text-green-600 text-4xl" title="Node.js" />
                            <SiExpress className="text-gray-700 text-4xl" title="Express.js" />
                            <SiFirebase className="text-yellow-400 text-4xl" title="Firebase" />
                        </div>
                    </div>
                    {/* Databases */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-indigo-800 mb-4">Databases</h3>
                        <div className="flex justify-center flex-wrap gap-4">
                            <SiMongodb className="text-green-500 text-4xl" title="MongoDB" />
                            <SiMysql className="text-blue-600 text-4xl" title="MySQL" />
                            <FaDatabase className="text-indigo-600 text-4xl" title="SQL Databases" />
                        </div>
                    </div>
                    {/* Tools */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-indigo-800 mb-4">Tools</h3>
                        <div className="flex justify-center flex-wrap gap-4">
                            <FaGitAlt className="text-orange-500 text-4xl" title="Git" />
                            <SiGithub className="text-gray-800 text-4xl" title="GitHub" />
                            <SiVisualstudiocode className="text-blue-500 text-4xl" title="Visual Studio Code" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;