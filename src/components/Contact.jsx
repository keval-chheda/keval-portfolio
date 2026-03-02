import FadeIn from "./FadeIn";
import { useState } from "react";

export default function Contact() {
  const email = "kevalchheda.kc123@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/keval-chheda",
      color: "hover:border-blue-500 hover:shadow-blue-500/30",
    },
    {
      name: "GitHub",
      url: "https://github.com/keval-chheda",
      color: "hover:border-gray-400 hover:shadow-gray-400/30",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/kevalchheda/",
      color: "hover:border-yellow-500 hover:shadow-yellow-500/30",
    },
    {
      name: "Dev.to",
      url: "https://dev.to/kevalchheda",
      color: "hover:border-green-500 hover:shadow-green-500/30",
    },
  ];

  return (
    <section id="contact" className="bg-gray-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-10 text-center">Contact</h2>
        </FadeIn>

        {/* EMAIL CARD */}
        <FadeIn>
          <div
            className="
            group
            bg-white/5
            border border-white/10
            rounded-xl
            p-6
            mb-8
            text-center
            hover:border-blue-500
            hover:shadow-lg
            hover:shadow-blue-500/30
            transition duration-300
          "
          >
            <p className="text-gray-400 mb-2">Email</p>

            <div className="text-xl font-semibold mb-4">{email}</div>

            <button
              onClick={copyEmail}
              className="
                px-5 py-2
                bg-blue-600
                rounded-lg
                hover:bg-blue-700
                transition
              "
            >
              {copied ? "Copied ✓" : "Copy Email"}
            </button>
          </div>
        </FadeIn>

        {/* SOCIAL LINKS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {links.map((link) => (
            <FadeIn key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`
                  block
                  text-center
                  p-5
                  bg-white/5
                  border border-white/10
                  rounded-xl
                  transition duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  ${link.color}
                `}
              >
                {link.name}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
