import FadeIn from "./FadeIn";
import { Server, Database, Cloud, Wrench, Cpu } from "lucide-react";

export default function Skills() {
  const groups = [
    {
      title: "Backend Development",
      icon: <Server size={28} />,
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "Microservices",
        "REST APIs",
        "Kafka",
        "OAuth2",
      ],
    },

    {
      title: "Concurrency & JVM",
      icon: <Cpu size={28} />,
      skills: [
        "Multithreading",
        "ExecutorService",
        "CompletableFuture",
        "Synchronization",
        "JVM Memory Model",
      ],
    },

    {
      title: "Databases",
      icon: <Database size={28} />,
      skills: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },

    {
      title: "Cloud & DevOps",
      icon: <Cloud size={28} />,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
    },

    {
      title: "Tools & Testing",
      icon: <Wrench size={28} />,
      skills: ["Git", "Maven", "JUnit", "Postman", "Agile"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-16">Technical Skills</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <FadeIn key={index}>
              <div className="group bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg transition duration-300 hover:-translate-y-3 hover:border-blue-500/60 hover:bg-white/10 hover:shadow-blue-500/30 hover:shadow-xl animate-[float_6s_ease-in-out_infinite]">
                {/* icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                    {group.icon}
                  </div>

                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>

                {/* skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-800 rounded-md border border-gray-700 transition duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
