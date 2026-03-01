import profile from "../assets/profile.jpg"

export default function Hero() {

    return (
        <section className="bg-gray-950 text-white pt-24 pb-16">

            <div className="max-w-6xl mx-auto flex items-center gap-10">

                <img
                    src={profile}
                    className="w-48 h-48 rounded-full border-4 border-blue-500"
                />

                <div>

                    <h1 className="text-5xl font-bold mb-4">
                        Keval Chheda
                    </h1>

                    <h2 className="text-2xl text-blue-400 mb-4">
                        Senior Java Fullstack Developer
                    </h2>

                    <p className="text-gray-300 mb-6">

                        5+ years building scalable banking and enterprise systems
                        using Spring Boot, Microservices, and Angular.

                        Specialized in System Design, Concurrency, and Distributed Systems.

                    </p>

                    <div className="space-x-4">

                        <a
                            href="https://github.com/keval-chheda"
                            target="_blank"
                            className="bg-blue-600 px-4 py-2 rounded"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/keval-chheda/"
                            target="_blank"
                            className="bg-gray-700 px-4 py-2 rounded"
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>

            </div>

        </section>
    )
}