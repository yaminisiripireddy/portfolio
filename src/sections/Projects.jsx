export default function Projects() {
  const projects = [
  {
    title: "User Authentication System",
    tech: "Java • Servlets • JSP • JDBC • MySQL",
    desc:
      "Developed a secure user authentication web application with user registration, login, OTP verification, and password reset.",
    github:
      "https://github.com/yaminisiripireddy/User_Authentication_System",
  },

  {
    title: "React Todo Application",
    tech: "React • JavaScript • CSS • Vite",
    desc:
      "Built a responsive task management application with CRUD operations, React Hooks, and Local Storage support.",
    github:
      "https://github.com/yaminisiripireddy/Todo-List-App",
  },

  {
    title: "Portfolio Website",
    tech: "React • JavaScript • CSS",
    desc:
      "Designed and developed a responsive portfolio website to showcase projects, skills, and technical experience.",
    github:
      "https://github.com/yaminisiripireddy/Portfolio",
  },
];
  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <h2>Featured Projects</h2>
        <p>Some of my recent work.</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p className="tech">{project.tech}</p>

            <p>{project.desc}</p>

          <button><a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn">
              View on GitHub
            </a></button>
          </div>
        ))}
      </div>
    </section>
  );
}