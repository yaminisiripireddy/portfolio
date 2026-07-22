import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-tag">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Yamini Siripireddy</span>
        </h1>

        <h2>Aspiring Java Full Stack Developer</h2>

        <p className="hero-desc">
          Passionate Computer Science Engineering student with hands-on
          experience in Java, React, MySQL and modern web development.
          Currently learning Spring Boot, Spring Data JPA and REST APIs
          through the Infosys Springboard Java Full Stack Virtual Internship.
          I enjoy building clean, responsive and user-friendly applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#resume" className="btn-outline">
            Resume
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="Developer" />
      </div>
    </section>
  );
}