import profile from "../assets/profile.jpg";
import ParticleBackground from "./ParticleBackground";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Terminal from "./Terminal";

export default function Hero() {
  const [showTerminal, setShowTerminal] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-shrink-0 relative group cursor-pointer">
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <img
            src={profile}
            alt="Keval Chheda"
            className="relative w-52 h-52 rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/30 transition duration-500 ease-out group-hover:scale-110 group-hover:shadow-blue-500/60"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-[500px] text-center md:text-left">
          <h1
            onClick={() => setShowTerminal(true)}
            className="text-5xl font-bold mb-3 cursor-pointer hover:text-blue-400 transition duration-300"
          >
            KEVAL CHHEDA
          </h1>
          <div className="h-[32px]">
            <TypeAnimation
              sequence={[
                "Senior Java Backend Engineer",
                2000,
                "Spring Boot Microservices Developer",
                2000,
                "System Design Enthusiast",
                2000,
                "Distributed Systems Engineer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-2xl text-blue-400"
            />
          </div>

          <p className="text-gray-300 mt-4 mb-6">
            Building enterprise banking and logistics systems using Spring Boot,
            Kafka, Microservices, and distributed system architecture with focus
            on scalability and performance.
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="/KevalChheda_JavaFullStackDeveloper.pdf"
              target="_blank"
              className="relative px-5 py-2 rounded-lg bg-gray-900 border border-green-500 hover:shadow-green-500/50 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition duration-300"
            >
              Resume
            </a>

            <a
              href="https://github.com/keval-chheda"
              target="_blank"
              className="relative px-5 py-2 rounded-lg bg-gray-900 border border-gray-500 hover:shadow-gray-400/50 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/keval-chheda"
              target="_blank"
              className="relative px-5 py-2 rounded-lg bg-gray-900 border border-blue-500 hover:shadow-blue-500/50 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <Terminal show={showTerminal} onClose={() => setShowTerminal(false)} />
    </section>
  );
}
