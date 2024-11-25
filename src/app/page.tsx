import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}