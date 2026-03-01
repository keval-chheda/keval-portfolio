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
    <section className="bg-gray-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-10">GitHub Projects</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <FadeIn key={repo.id}>
              <div
                className="
                  bg-gray-900
                  p-6
                  rounded-lg
                  border border-gray-800
                  hover:border-blue-500
                  transition
                "
              >
                <h3 className="text-xl text-blue-400 mb-2">{repo.name}</h3>

                <p className="text-gray-300 mb-3">
                  {repo.description || "No description"}
                </p>

                <div className="flex justify-between text-sm text-gray-400 mb-3">
                  <span>⭐ {repo.stargazers_count}</span>

                  <span>{repo.language}</span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  View Repository →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
