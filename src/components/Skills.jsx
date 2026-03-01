export default function Skills() {

  const skills = {

    Backend: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "Microservices",
      "REST APIs"
    ],

    AdvancedJava: [
      "Multithreading",
      "Concurrency",
      "ExecutorService",
      "CompletableFuture",
      "JVM"
    ],

    SystemDesign: [
      "Kafka",
      "Event Driven Architecture",
      "CQRS",
      "Saga Pattern"
    ],

    Database: [
      "Oracle",
      "MySQL",
      "MongoDB"
    ],

    Frontend: [
      "Angular",
      "React",
      "JavaScript"
    ]

  }

  return (
    <section id="skills" className="bg-gray-900 text-white p-10">

      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      {
        Object.entries(skills).map(([category, items]) => (

          <div key={category} className="mb-4">

            <h3 className="text-xl text-blue-400">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3 mt-2">

              {
                items.map(skill => (

                  <span
                    className="bg-gray-700 px-3 py-1 rounded"
                    key={skill}
                  >
                    {skill}
                  </span>

                ))
              }

            </div>

          </div>

        ))
      }

    </section>
  )
}