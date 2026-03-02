export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* KC LOGO */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div
              className="
              w-10 h-10
              flex items-center justify-center
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-cyan-400
              font-bold
              text-black
              shadow-lg
              shadow-blue-500/30
              group-hover:shadow-blue-500/60
              group-hover:scale-110
              transition duration-300
            "
            >
              KC
            </div>

            <span
              className="
              text-gray-400
              group-hover:text-blue-400
              transition
            "
            >
              Keval Chheda
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="text-gray-500 text-sm text-center">
            © {year} Keval Chheda
            <span className="block md:inline md:ml-2">
              Built with React + Tailwind
            </span>
          </div>
        </div>

        {/* bottom glow line */}
        <div
          className="
          mt-8
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-blue-500/40
          to-transparent
        "
        ></div>
      </div>
    </footer>
  );
}
