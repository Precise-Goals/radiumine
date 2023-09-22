import React, { useState } from 'react';
import Navbar from './containers/navbar'; // Update the path to your Navbar component
import Task from './containers/task';
import ParticleBackground from '../src/components/Particles/Particle'
import './App.css';


function App() {
  const [sectionClassName, setSectionClassName] = useState("Forrest"); // Initialize the section class name

  // Function to change the section class name
  const changeSectionClassName = (newClassName) => {
    setSectionClassName(newClassName);
  };

  return (
    <div className="App">
      <section className={sectionClassName}>
        <div className='particles'><ParticleBackground /></div>
        <Navbar changeSectionClassName={changeSectionClassName} />
        <Task />
      </section>
    </div>
  );
}

export default App;
