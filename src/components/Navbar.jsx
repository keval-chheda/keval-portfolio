export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      w-full
      bg-gray-900/80
      backdrop-blur-md
      text-white
      z-50
      shadow-lg
    "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold">kevalchheda.com</h1>

        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#profiles">Profiles</a>
        </div>
      </div>
    </nav>
  );
}
