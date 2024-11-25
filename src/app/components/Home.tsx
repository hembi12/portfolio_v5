"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaChevronDown } from "react-icons/fa";

const Home = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: [
                "Web Developer",
                "Frontend Developer",
                "Backend Developer",
                "Junior Developer",
                "Full Stack Enthusiast",
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section
            id="home"
            className="h-screen flex flex-col items-center justify-center bg-indigo-100 text-white text-center px-6"
        >
            {/* Nombre */}
            <h1 className="text-5xl sm:text-7xl lg:text-7xl font-bold text-indigo-900 mb-4">
                Héctor Martil
            </h1>
            {/* Animación de texto */}
            <span
                ref={typedElement}
                className="text-2xl sm:text-3xl lg:text-3xl font-medium text-indigo-700"
            ></span>
            {/* Botones */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-indigo-700 font-bold text-white shadow-lg hover:bg-indigo-500 hover:text-white hover:shadow-2xl transition-all duration-200 rounded-full"
                >
                    My Projects
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border-2 border-indigo-700 font-bold text-indigo-700 hover:bg-indigo-500 shadow-lg hover:border-indigo-400 hover:text-white hover:shadow-2xl  transition-all duration-200 rounded-full"
                >
                    Contact Me
                </a>
            </div>
            {/* Icono Chevron */}
            <div className="absolute bottom-10">
                <FaChevronDown className="text-indigo-700 animate-bounce text-3xl hover:text-indigo-500" />
            </div>
        </section>
    );
};

export default Home;