import FadeIn from "./FadeIn";
import accenture from "../assets/company/accenture.png";
import infrasoft from "../assets/company/infrasoft.png";
import capgemini from "../assets/company/capgemini.png";

export default function Experience() {
  const jobs = [
    {
      company: "Accenture",
      logo: accenture,
      role: "Senior Analyst – Java Full Stack Developer",
      period: "Sep 2024 – Present",
      location: "Mumbai, India",
      current: true,
      points: [
        "Working on FedEx logistics platform with 95+ Spring Boot microservices handling logistics workflows.",
        "Developing scalable REST APIs and improving system performance and reliability.",
        "Performing SQL tuning, debugging production incidents, and root cause analysis.",
        "Enhancing distributed system resilience and microservice observability.",
      ],
    },
    {
      company: "Infrasoft Technologies",
      logo: infrasoft,
      role: "Associate Consultant – Java Full Stack Developer",
      period: "Jun 2023 – Sep 2024",
      location: "Mumbai, India",
      current: false,
      points: [
        "Developed BFSI middleware systems including ASBA, PPF, and Gold Bond platforms.",
        "Built CBS integration services using Spring Boot and Oracle databases.",
        "Deployed and supported applications on Linux environments.",
        "Improved release stability and deployment workflows.",
      ],
    },
    {
      company: "Capgemini",
      logo: capgemini,
      role: "Software Engineer – Java Full Stack Developer",
      period: "Mar 2021 – Jun 2023",
      location: "Mumbai, India",
      current: false,
      points: [
        "Developed enterprise microservices using Spring Boot and Spring Cloud.",
        "Implemented OAuth2 authentication and secure REST APIs.",
        "Built frontend modules using React.",
        "Maintained and supported production systems.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-16">Professional Experience</h2>
        </FadeIn>

        {/* timeline line */}
        <div className="relative border-l border-blue-500/30">
          {jobs.map((job, index) => (
            <FadeIn key={index}>
              <div className="group relative ml-8 mb-14">
                {/* timeline dot */}
                <span className="absolute -left-[38px] top-6 w-5 h-5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 transition duration-300 group-hover:scale-125 group-hover:shadow-blue-500/90"></span>

                {/* card */}
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:bg-white/10 hover:shadow-blue-500/30 hover:shadow-xl">
                  {/* header */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-12 h-12 object-contain bg-white rounded-md p-1 transition duration-300 group-hover:scale-110"
                    />

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{job.company}</h3>

                        {job.current && (
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/40">
                            Current
                          </span>
                        )}
                      </div>

                      <p className="text-gray-400 text-sm">{job.role}</p>
                    </div>
                  </div>

                  {/* period */}
                  <p className="text-blue-400 text-sm mb-4">
                    {job.period} • {job.location}
                  </p>

                  {/* points */}
                  <ul className="space-y-2 text-gray-300">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
