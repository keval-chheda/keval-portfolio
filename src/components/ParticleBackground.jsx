import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 300); // delay prevents layout shift
    return () => clearTimeout(timer);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  if (!mounted) return null;

  return (
    <Particles
      id="particles"
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: { value: 45 },
          color: { value: "#3b82f6" },
          links: {
            enable: true,
            color: "#3b82f6",
            distance: 140,
            opacity: 0.25,
          },
          move: {
            enable: true,
            speed: 0.7,
          },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
