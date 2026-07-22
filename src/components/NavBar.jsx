export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </nav>
  );
}