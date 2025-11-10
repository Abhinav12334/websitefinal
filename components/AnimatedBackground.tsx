import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AnimatedBackground: React.FC = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
          },
        },
        particles: {
          number: { value: 70, density: { enable: true, area: 800 } },
          color: { value: ["#00FFFF", "#8E2DE2", "#FF00CC"] },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.8, direction: "none", outModes: "out" },
          links: { enable: true, color: "#00FFFF", opacity: 0.15, distance: 150 },
        },
        detectRetina: true,
      }}
    />
  );
};

export default AnimatedBackground;
