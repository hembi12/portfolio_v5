"use client";

import { FaLightbulb, FaUsers, FaCode, FaGraduationCap } from "react-icons/fa";

const About = ({ title, description }: { title: string; description: string }) => {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 text-gray-900 px-6 py-20"
        >
            <div className="max-w-4xl text-center">
                {/* Encabezado */}
                <h2 className="text-4xl font-bold text-indigo-900 mb-6">{title}</h2>
                {/* Descripción */}
                <p className="text-lg leading-8 mb-8">{description}</p>
                {/* Core Values */}
                <h3 className="text-3xl font-semibold text-indigo-800 mb-4">Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Innovación */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaLightbulb className="text-indigo-800 text-4xl mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold text-indigo-800 mb-2">Innovation</h4>
                        <p className="text-gray-700">
                            Embracing creativity to deliver unique and impactful solutions.
                        </p>
                    </div>
                    {/* Colaboración */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaUsers className="text-indigo-800 text-4xl mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold text-indigo-800 mb-2">Collaboration</h4>
                        <p className="text-gray-700">
                            Working together to achieve common goals with mutual respect.
                        </p>
                    </div>
                    {/* Compromiso con la calidad */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaCode className="text-indigo-800 text-4xl mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold text-indigo-800 mb-2">Commitment to Quality</h4>
                        <p className="text-gray-700">
                            Delivering high-quality work with attention to detail and excellence.
                        </p>
                    </div>
                    {/* Aprendizaje continuo */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaGraduationCap className="text-indigo-800 text-4xl mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold text-indigo-800 mb-2">Continuous Learning</h4>
                        <p className="text-gray-700">
                            Growing and evolving by acquiring new skills and knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;