"use client";

import { FaLightbulb, FaUsers, FaCode, FaGraduationCap } from "react-icons/fa";

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 px-6 py-20"
        >
            <div className="max-w-4xl text-center">
                {/* Encabezado */}
                <h2 className="text-4xl font-bold text-indigo-900 mb-6">About Me</h2>
                {/* Descripción */}
                <p className="text-lg leading-8 mb-8">
                    I'm a dedicated and passionate Mexican web developer focused on creating efficient, user-centered applications. My expertise spans both frontend and backend development, allowing me to build full-stack solutions that are visually appealing and functionally robust.
                </p>
                {/* Core Values */}
                <h3 className="text-3xl font-semibold text-indigo-800 mb-4">Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Innovación */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaLightbulb className="text-indigo-800 text-4xl mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold text-indigo-800 mb-2">Innovation</h4>
                        <p className="text-gray-700">
                            Constantly seeking new and better solutions to improve user experiences.
                        </p>
                    </div>
                    {/* Colaboración */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaUsers className="text-indigo-800 text-4xl mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold text-indigo-800 mb-2">Collaboration</h4>
                        <p className="text-gray-700">
                            Believing in the power of teamwork and open communication to achieve the best results.
                        </p>
                    </div>
                    {/* Compromiso con la calidad */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaCode className="text-indigo-800 text-4xl mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold text-indigo-800 mb-2">Commitment to Quality</h4>
                        <p className="text-gray-700">
                            Dedicated to writing clean, efficient, and maintainable code.
                        </p>
                    </div>
                    {/* Aprendizaje continuo */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaGraduationCap className="text-indigo-800 text-4xl mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold text-indigo-800 mb-2">Continuous Learning</h4>
                        <p className="text-gray-700">
                            Always expanding my skill set to stay at the forefront of web technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;