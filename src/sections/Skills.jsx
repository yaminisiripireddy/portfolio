export default function Skills() {
  const skillData = {
    Languages: ["Java", "JavaScript", "HTML5", "CSS3", "SQL"],
    Frontend: ["React.js", "Bootstrap", "Responsive Design"],
    Backend: [
      "Core Java",
      "Spring Boot (Learning)",
      "Spring Data JPA (Learning)",
      "REST APIs (Learning)"
    ],
    Database: ["MySQL"],
    Tools: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman"]
  };

  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h2>Technical Skills</h2>
        <p>Technologies I use and currently learning.</p>
      </div>

      <div className="skills-grid">
        {Object.entries(skillData).map(([category, items]) => (
          <div className="skill-card" key={category}>
            <h3>{category}</h3>

            <div className="skill-list">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}