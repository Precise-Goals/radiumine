import React, { useState } from 'react';
import Navbar from './containers/navbar'; // Update the path to your Navbar component
import Task from './containers/task';
import ParticleBackground from '../src/components/Particles/Particle'
import Footer from './containers/footer';
import './App.css';
import Time from './containers/time'
import { Blogs } from './components/Blogs/Blogs';

function App() {
  const [sectionClassName, setSectionClassName] = useState("Obsidian"); // Initialize the section class name
  const changeSectionClassName = (newClassName) => {
    setSectionClassName(newClassName);
  };

  return (
    <div className="App" id='topper'>
      <div className='circle1'></div>
      <p className='nhi'>Swtich To Pc, laptop or bigger screens for using Early access of this app</p>
      <section className={sectionClassName} >
        <div className='particles'><ParticleBackground /></div>
        <Navbar changeSectionClassName={changeSectionClassName} />
        <Task />
        <Time/>
        <Blogs/>
      </section>
      <div className='footer'>
        <Footer/>
      </div>
      <p className='looks'>Made by sarthak 2023</p>
      <div className='circle2'></div>
    </div>
  );
}

export default App;
