import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Socials from './components/Socials';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App text-black'>
      <Navbar />
      <Hero />
      <Socials />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
