"use client";

import './i18n'; // Importa la configuración de i18n
import { useTranslation } from 'react-i18next'; // Hook para traducir textos
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Importa el componente Footer

export default function Page() {
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  return (
    <>
      <Navbar />
      <main>
        <Home title={t('home.title')} />
        <About title={t('about.title')} description={t('about.description')} />
        <Skills title={t('skills.title')} />
        <Projects title={t('projects.title')} />
        <Resume title={t('resume.title')} />
        <Contact title={t('contact.title')} />
      </main>
      <Footer text={t('footer.text')} /> {/* Footer con texto traducido */}
    </>
  );
}