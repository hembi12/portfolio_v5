"use client";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {
    return (
        <>
            <Navbar />
            <main>
                <Home text="Héctor Martil" />
                <About title="About Me" description="I’m a dedicated and passionate Mexican web developer focused on creating efficient, user-centered applications. My expertise spans both frontend and backend development, allowing me to build full-stack solutions that are visually appealing and functionally robust." />
                <Skills title="My Skills" />
                <Projects title="My Projects" />
                <Resume title="Resume" />
                <Contact title="Contact Me" />
            </main>
            <Footer />
        </>
    );
}