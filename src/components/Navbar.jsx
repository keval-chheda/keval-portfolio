import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);

      setScrolled(window.scrollY > 50);

      const sections = [
        "about",
        "experience",
        "skills",
        "projects",
        "profiles",
        "contact",
      ];

      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (!element) return;

        const top = element.offsetTop - 120;
        const bottom = top + element.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "profiles", label: "Profiles" },
    { id: "contact", label: "Contact" },
  ];

  const NavLink = ({ id, label }) => (
    <a
      href={`#${id}`}
      onClick={() => setMenuOpen(false)}
      className={`
        relative
        transition
        duration-300
        block
        ${
          activeSection === id
            ? "text-blue-400"
            : "text-gray-300 hover:text-blue-400"
        }
      `}
    >
      {label}
    </a>
  );

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300
        ${scrolled ? "bg-gray-900/95 shadow-xl" : "bg-gray-900/70"}
      `}
    >
      {/* progress bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div
            className="
            w-9 h-9 flex items-center justify-center
            rounded-full bg-gradient-to-r from-blue-500 to-cyan-400
            font-bold text-black shadow-lg shadow-blue-500/30
            group-hover:scale-110 transition duration-300
          "
          >
            KC
          </div>

          <span className="font-semibold text-gray-200 group-hover:text-blue-400 transition">
            kevalchheda.com
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink key={item.id} {...item} />
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`
            w-6 h-[2px] bg-white transition
            ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}
          `}
          />

          <span
            className={`
            w-6 h-[2px] bg-white transition
            ${menuOpen ? "opacity-0" : ""}
          `}
          />

          <span
            className={`
            w-6 h-[2px] bg-white transition
            ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}
          `}
          />
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`
        md:hidden overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-[400px]" : "max-h-0"}
      `}
      >
        <div
          className="
          bg-gray-900 border-t border-white/10
          px-6 py-4 flex flex-col gap-4
        "
        >
          {navItems.map((item) => (
            <NavLink key={item.id} {...item} />
          ))}
        </div>
      </div>
    </nav>
  );
}
