export default function GithubStats() {
  const username = "keval-chheda";

  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">GitHub Activity</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* stats */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-blue-500/50 transition">
            <img
              src={`https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`}
              alt="GitHub stats"
              className="w-full"
            />
          </div>

          {/* languages */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-blue-500/50 transition">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`}
              alt="Top languages"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
