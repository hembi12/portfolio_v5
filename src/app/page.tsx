import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}