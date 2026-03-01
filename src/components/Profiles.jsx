import FadeIn from "./FadeIn";
import {
  Github,
  Linkedin,
  Code,
  Trophy,
  BookOpen,
  Youtube,
} from "lucide-react";

export default function Profiles() {
  const profiles = [
    {
      name: "GitHub",
      icon: <Github size={28} />,
      url: "https://github.com/keval-chheda",
      desc: "Open source projects and backend microservices",
    },

    {
      name: "LinkedIn",
      icon: <Linkedin size={28} />,
      url: "https://linkedin.com/in/keval-chheda",
      desc: "Professional experience and career journey",
    },

    {
      name: "LeetCode",
      icon: <Code size={28} />,
      url: "https://leetcode.com/u/kevalchheda/",
      desc: "DSA and problem solving practice",
    },

    {
      name: "GeeksForGeeks",
      icon: <BookOpen size={28} />,
      url: "https://www.geeksforgeeks.org/user/kevalchheda/",
      desc: "Technical learning and coding practice",
    },

    {
      name: "HackerRank",
      icon: <Trophy size={28} />,
      url: "https://www.hackerrank.com/profile/kevalchheda",
      desc: "Programming certifications and challenges",
    },

    {
      name: "StackOverflow",
      icon: <Code size={28} />,
      url: "https://stackoverflow.com/users/16738701/kevalchheda",
      desc: "Developer community contributions",
    },

    {
      name: "Hashnode",
      icon: <BookOpen size={28} />,
      url: "https://hashnode.com/@kevalchheda",
      desc: "Technical blogs and backend engineering content",
    },

    {
      name: "Dev.to",
      icon: <BookOpen size={28} />,
      url: "https://dev.to/kevalchheda",
      desc: "Engineering articles and tutorials",
    },

    {
      name: "YouTube",
      icon: <Youtube size={28} />,
      url: "https://www.youtube.com/c/KevalChheda",
      desc: "Technical videos and tutorials",
    },
  ];

  return (
    <section
      id="profiles"
      className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-16">Coding Profiles</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <FadeIn key={index}>
              <a
                href={profile.url}
                target="_blank"
                className="group block bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg transition duration-300 hover:-translate-y-3 hover:border-blue-500/60 hover:bg-white/10 hover:shadow-blue-500/30 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-3 text-blue-400 group-hover:scale-110 transition">
                  {profile.icon}

                  <h3 className="text-lg font-semibold">{profile.name}</h3>
                </div>

                <p className="text-gray-400 text-sm">{profile.desc}</p>

                <div className="mt-4 text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition">
                  Visit profile →
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
