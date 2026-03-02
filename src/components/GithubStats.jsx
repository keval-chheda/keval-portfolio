import FadeIn from "./FadeIn";

export default function GithubStats() {
  const username = "keval-chheda";

  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">GitHub Activity</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* stats */}
          <FadeIn>
            <div
              className="
                    group
                    bg-white/5
                    p-4
                    rounded-xl
                    border border-white/10
                    transition-all duration-300
                    hover:border-blue-400
                    hover:shadow-lg
                    hover:shadow-blue-500/30
                    hover:-translate-y-1
                  "
            >
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight`}
                className="w-full transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </FadeIn>

          {/* languages */}
          <FadeIn>
            <div
              className="
                group
                bg-white/5
                p-4
                rounded-xl
                border border-white/10
                transition-all duration-300
                hover:border-blue-400
                hover:shadow-lg
                hover:shadow-blue-500/30
                hover:-translate-y-1
              "
            >
              <img
                src={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=tokyonight`}
                alt="Top languages"
                className="w-full transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
