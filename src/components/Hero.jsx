import profile from "../assets/profile.jpg";
import profileJava from "../assets/profile-java.jpg";
import ParticleBackground from "./ParticleBackground";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Hero() {
  const [javaMode, setJavaMode] = useState(false);
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* PARTICLE BACKGROUND */}
      <div className="absolute inset-0 w-full h-full">
        <ParticleBackground />
      </div>

      {/* MAIN CONTENT CONTAINER (LOCKED WIDTH → NO SHIFTING) */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
            {/* LEFT SIDE TEXT */}
            <div className="flex-1 text-center md:text-left">
              {/* ELITE ANIMATED NAME */}
              <h1 className="font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                <span
                  className={`
      bg-clip-text
      text-transparent
      transition-all
      duration-500
      ${
        javaMode
          ? "bg-gradient-to-r from-orange-400 via-yellow-300 to-red-500 animate-pulse drop-shadow-[0_0_40px_rgba(255,140,0,0.9)]"
          : "bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-shimmer drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
      }
    `}
                >
                  KEVAL CHHEDA
                </span>
              </h1>
              {/* FIXED HEIGHT → PREVENT TEXT SHIFT */}
              <div className="h-[40px] mb-4">
                <TypeAnimation
                  sequence={[
                    "Senior Java Backend Engineer",
                    2000,
                    "Spring Boot Microservices Expert",
                    2000,
                    "Distributed Systems Engineer",
                    2000,
                    "Kafka Event-Driven Architect",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="text-blue-400 font-semibold text-lg sm:text-xl md:text-2xl"
                />
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8">
                Designing and building scalable enterprise banking and logistics
                systems using Spring Boot, Kafka, Microservices, and distributed
                architecture focused on performance, resilience, and
                reliability.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="/KevalChheda_JavaFullStackDeveloper.pdf"
                  target="_blank"
                  className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 hover:shadow-green-500/40 hover:shadow-lg transition duration-300 font-medium"
                >
                  Resume
                </a>

                <a
                  href="https://github.com/keval-chheda"
                  target="_blank"
                  className="px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/40 hover:shadow-lg transition duration-300 font-medium"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/keval-chheda"
                  target="_blank"
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/40 hover:shadow-lg transition duration-300 font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex-1 flex justify-center">
              <div className="relative flex items-center justify-center">
                {/* GLOW BACKGROUND */}
                <div className="absolute w-[260px] sm:w-[340px] md:w-[380px] lg:w-[460px] h-[260px] sm:h-[340px] md:h-[380px] lg:h-[460px] bg-blue-500 opacity-30 blur-3xl rounded-full"></div>

                {/* FIXED IMAGE SIZE → PREVENT SHIFT */}
                {/* FLIP CONTAINER */}
                <div
                  className="relative w-52 sm:w-72 md:w-80 lg:w-[420px] h-52 sm:h-72 md:h-80 lg:h-[420px] group cursor-pointer"
                  onMouseEnter={() => setJavaMode((prev) => !prev)}
                >
                  {" "}
                  {/* glow */}
                  <div className="absolute inset-0 bg-blue-500 opacity-30 blur-3xl rounded-full"></div>
                  {/* first image */}
                  <img
                    src={profile}
                    alt="Keval Chheda"
                    className="absolute w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/30 transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* second image */}
                  <img
                    src={profileJava}
                    alt="Java Keval"
                    className="absolute w-full h-full object-cover rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-400/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
