import FadeIn from "./FadeIn";

export default function Projects() {
  const projects = [
    {
      name: "ASBA Banking Middleware",
      tech: "Spring Boot • Oracle • Angular",
      desc: "Enterprise middleware handling IPO applications, CBS integration, and transaction processing.",
      github: "https://github.com/keval-chheda",
    },
    {
      name: "Kafka Microservices Demo",
      tech: "Spring Boot • Kafka",
      desc: "Event-driven architecture using producer and consumer services.",
      github: "https://github.com/keval-chheda",
    },
    {
      name: "Expense Microservice",
      tech: "Spring Boot • MongoDB • GraphQL",
      desc: "Microservice architecture for expense tracking.",
      github: "https://github.com/keval-chheda",
    },
  ];

  return (
    <section id="projects" className="bg-gray-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title animation */}
        <FadeIn>
          <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
        </FadeIn>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.name}>
              <div
                className="
                  bg-gray-900
                  p-6
                  rounded-lg
                  border
                  border-gray-800
                  hover:border-blue-500
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-blue-500/10
                  transition
                  duration-300
                "
              >
                <h3 className="text-xl text-blue-400 mb-2">{project.name}</h3>

                <p className="text-gray-400 mb-2">{project.tech}</p>

                <p className="text-gray-300 mb-4">{project.desc}</p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  View Code →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
