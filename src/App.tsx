import { useState } from 'react';
import './App.css';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import About from './components/sections/About';
import Governed from './components/sections/Governed';
import Footer from './components/sections/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <About />
      <Governed />
      <Footer />
    </div>
  );
}

export default App;
