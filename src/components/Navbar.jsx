export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">kevalchheda.com</h1>

        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#profiles">Profiles</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}