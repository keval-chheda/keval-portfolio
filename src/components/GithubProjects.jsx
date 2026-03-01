import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

export default function GithubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/keval-chheda/repos?sort=updated")
      .then((res) => res.json())

      .then((data) => {
        const filtered = data.filter((repo) => !repo.fork).slice(0, 6);

        setRepos(filtered);
      });
  }, []);

  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-14 text-center">
            GitHub Projects
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <FadeIn key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  relative
                  block
                  p-[1px]
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-500/30
                  via-transparent
                  to-cyan-500/30
                  hover:from-blue-500
                  hover:to-cyan-400
                  transition duration-500
                "
              >
                {/* CARD */}
                <div
                  className="
                    h-full
                    bg-gray-900/80
                    backdrop-blur-md
                    rounded-xl
                    p-6
                    border border-gray-800
                    group-hover:border-blue-400/50
                    group-hover:-translate-y-2
                    group-hover:shadow-2xl
                    group-hover:shadow-blue-500/30
                    transition duration-500
                  "
                >
                  {/* NAME */}
                  <h3
                    className="
                    text-xl
                    font-semibold
                    text-blue-400
                    mb-3
                    group-hover:text-cyan-300
                    transition
                  "
                  >
                    {repo.name}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 text-sm mb-4 min-h-[48px]">
                    {repo.description ||
                      "Enterprise backend / microservice project"}
                  </p>

                  {/* STATS */}
                  <div className="flex justify-between items-center text-sm">
                    <span
                      className="
                      px-3 py-1
                      rounded-full
                      bg-yellow-500/10
                      text-yellow-400
                      border border-yellow-500/20
                    "
                    >
                      ⭐ {repo.stargazers_count}
                    </span>

                    <span
                      className="
                      px-3 py-1
                      rounded-full
                      bg-blue-500/10
                      text-blue-400
                      border border-blue-500/20
                    "
                    >
                      {repo.language || "Code"}
                    </span>
                  </div>

                  {/* GITHUB LINK */}
                  <div
                    className="
                    mt-5
                    text-sm
                    text-gray-400
                    group-hover:text-cyan-300
                    transition
                  "
                  >
                    View Repository →
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
