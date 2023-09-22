import React from "react";
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import '../../App.css'
function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
   
     <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
              options={{
            background: {
              color: 'transparent',
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                resize: true
              },
            },
            particles: {
              color: {
                value: "#878e9ea3",
              },
              number: {
                density: {
                  enable: true,
                  area: 1080
                },
                limit: 25,
                value: 15,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 1,
                  sync: true,
                },
                random: {
                  enable: true,
                  minimumValue: 0.01,
                },
                value: 0.6,
              },
              shape: {
                type: 'circle',
       
              },
              size: {
                random: {
                  enable: true,
                  minimumValue:2
                },
                value: 7 
              }
            }
          }}
      />  
  </div>
  );
}
 
export default App;