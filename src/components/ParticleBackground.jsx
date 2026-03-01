import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      /* ensures particles stay inside Hero section */
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
      options={{
        fullScreen: false,

        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              area: 800,
            },
          },

          color: {
            value: "#3b82f6",
          },

          links: {
            enable: true,
            color: "#3b82f6",
            distance: 140,
            opacity: 0.25,
            width: 1,
          },

          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            outModes: {
              default: "out",
            },
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: {
              min: 1,
              max: 2.5,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}
