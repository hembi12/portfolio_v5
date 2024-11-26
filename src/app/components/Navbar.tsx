"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaHome, FaUserAlt, FaTools, FaProjectDiagram, FaFileAlt, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "projects", "resume", "contact"];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Declaración explícita del tipo para las claves
    const icons: { [key: string]: JSX.Element } = {
        home: <FaHome className="text-white text-lg mr-2" />,
        about: <FaUserAlt className="text-white text-lg mr-2" />,
        skills: <FaTools className="text-white text-lg mr-2" />,
        projects: <FaProjectDiagram className="text-white text-lg mr-2" />,
        resume: <FaFileAlt className="text-white text-lg mr-2" />,
        contact: <FaEnvelope className="text-white text-lg mr-2" />,
    };

    return (
        <nav className="bg-indigo-950 text-white p-4 shadow-lg fixed w-full z-20">
            <div className="container mx-auto flex justify-between items-center">
                {/* Sección izquierda: Iniciales */}
                <div className="text-xl font-bold">HM</div>

                {/* Botón hamburguesa */}
                <button
                    id="hamburgerButton"
                    onClick={toggleMenu}
                    className="lg:hidden flex items-center text-white focus:outline-none"
                >
                    {isMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>

                {/* Menú principal */}
                <div
                    id="offCanvasMenu"
                    className={`lg:flex flex-col lg:flex-row lg:space-x-6 lg:items-center absolute lg:static top-0 left-0 h-screen lg:h-auto w-2/3 lg:w-auto bg-indigo-950 transition-transform ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0`}
                >
                    {/* Título del menú y línea divisoria */}
                    <div className="block lg:hidden p-4 text-xl font-semibold border-b border-gray-700">
                        Menu
                    </div>
                    <ul className="flex flex-col lg:flex-row lg:space-x-6 lg:items-center mt-4 lg:mt-0">
                        {["home", "about", "skills", "projects", "resume", "contact"].map((section) => (
                            <li key={section} className="text-left py-4 lg:py-0 px-4 lg:px-0 flex items-center">
                                {isMenuOpen && icons[section]}
                                <Link
                                    href={`#${section}`}
                                    className={`transition-all ${
                                        activeSection === section
                                            ? "text-indigo-200 font-bold underline"
                                            : "hover:text-indigo-200"
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </li>
                        ))}
                        {/* Dropdown de idioma */}
                        <li className="relative text-left py-4 lg:py-0 px-4 lg:px-0">
                            <div className="inline-block">
                                <button
                                    id="dropdownButton"
                                    onClick={toggleDropdown}
                                    className="flex items-center hover:text-indigo-200 focus:outline-none"
                                >
                                    <span>Language</span>
                                    <svg
                                        className={`w-4 h-4 ml-1 transition-transform ${
                                            isDropdownOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <ul
                                        id="dropdownMenu"
                                        className="absolute left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none mt-2 w-32 bg-indigo-800 rounded-lg shadow-lg"
                                    >
                                        <li className="flex items-center px-4 py-2 hover:bg-indigo-400">
                                            <span className="mr-2">🇺🇸</span>
                                            <Link href="#" onClick={() => setIsDropdownOpen(false)}>English</Link>
                                        </li>
                                        <li className="flex items-center px-4 py-2 hover:bg-indigo-400">
                                            <span className="mr-2">🇲🇽</span>
                                            <Link href="#" onClick={() => setIsDropdownOpen(false)}>Spanish</Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;