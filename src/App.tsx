import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience/Experience';
import { Education } from './components/Education/Education';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume/Resume';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;