"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiGithub, SiVisualstudiocode, SiFirebase, SiMysql, SiNextdotjs, SiBootstrap } from "react-icons/si";

const Skills = ({ title }: { title: string }) => {
    const currentlyUsing = [
        { icon: <SiNextdotjs />, color: "#000000" },
        { icon: <SiTypescript />, color: "#2563eb" },
        { icon: <SiTailwindcss />, color: "#2dd4bf" },
        { icon: <FaGitAlt />, color: "#f97316" },
        { icon: <SiGithub />, color: "#181717" },
        { icon: <SiVisualstudiocode />, color: "#0078d7" },
        { icon: <FaNodeJs />, color: "#68a063" },
        { icon: <SiMongodb />, color: "#4db33d" },
    ];

    const previouslyUsed = [
        { icon: <FaHtml5 />, color: "#ea580c" },
        { icon: <FaCss3Alt />, color: "#2563eb" },
        { icon: <FaJs />, color: "#eab308" },
        { icon: <FaReact />, color: "#06b6d4" },
        { icon: <SiBootstrap />, color: "#7952b3" },
        { icon: <SiFirebase />, color: "#ffca28" },
        { icon: <SiExpress />, color: "#gray" },
        { icon: <SiMysql />, color: "#00758f" },
        { icon: <FaDatabase />, color: "#336791" },
    ];

    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col items-center justify-center bg-indigo-100 text-gray-900 px-6 py-20"
        >
            <div className="max-w-4xl text-center">
                {/* Título */}
                <h2 className="text-4xl font-bold text-indigo-900 mb-6">{title}</h2>
                {/* Descripción */}
                <p className="text-lg leading-8 mb-8">
                    A showcase of the technologies I currently use and those I have worked with in the past.
                </p>
                {/* Currently Using */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center mb-8">
                    <h3 className="text-xl font-semibold text-indigo-800 mb-4">Currently Using</h3>
                    <div className="flex justify-center flex-wrap gap-4">
                        {currentlyUsing.map((tech, index) => (
                            <span
                                key={index}
                                className="text-4xl"
                                style={{ color: tech.color }}
                            >
                                {tech.icon}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Previously Used */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold text-indigo-800 mb-4">Previously Used</h3>
                    <div className="flex justify-center flex-wrap gap-4">
                        {previouslyUsed.map((tech, index) => (
                            <span
                                key={index}
                                className="text-4xl"
                                style={{ color: tech.color }}
                            >
                                {tech.icon}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;