import FadeIn from "./FadeIn"

export default function SystemDesign() {

    const topics = [

        "Microservices Architecture",

        "Event Driven Architecture",

        "Kafka Messaging",

        "REST API Design",

        "Database Design",

        "Scalability Patterns",

        "Concurrency Handling",

        "Performance Optimization"

    ]

    return (

        <section className="bg-gray-900 text-white p-12">
<FadeIn>
            <div className="max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold mb-6">
                    System Design Expertise
                </h2>

                <div className="flex flex-wrap gap-3">

                    {

                        topics.map(topic => (

                            <span
                                key={topic}
                                className="bg-blue-600 px-4 py-2 rounded"
                            >
                                {topic}
                            </span>

                        ))

                    }

                </div>

            </div>
            </FadeIn>

        </section>

    )

}