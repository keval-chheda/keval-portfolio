import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="group relative bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-lg transition duration-500 hover:border-blue-500/60 hover:bg-white/10 hover:shadow-blue-500/30 hover:shadow-xl hover:-translate-y-1">
            {/* glowing accent line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 opacity-40 group-hover:opacity-100 group-hover:shadow-blue-500 group-hover:shadow-lg transition duration-500 rounded-l-xl"></div>

            <h2 className="text-3xl font-bold mb-6 group-hover:text-blue-400 transition duration-300">
              About Me
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Senior Java Backend Engineer with 5+ years of experience building
              scalable enterprise banking and logistics systems. Specialized in
              Spring Boot microservices, distributed systems, and
              high-performance backend architecture. Experienced in designing
              REST APIs, integrating core banking systems, optimizing database
              performance, and troubleshooting production systems. Passionate
              about system design, concurrency, and building reliable software.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
