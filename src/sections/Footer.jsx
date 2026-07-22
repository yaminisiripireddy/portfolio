export default function Footer() {
  return (
    <footer className="footer">

      <h2>Let's Connect</h2>

      <p className="footer-text">
        Thank you for visiting my portfolio.
        I'm actively looking for Java Full Stack Developer opportunities and
        would love to connect with recruiters and fellow developers.
      </p>

      <div className="footer-links">

        <a
          href="https://github.com/yaminisiripireddy"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/yamini-siripireddy-21394832b"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn
        </a>

      </div>

      <div className="footer-contact">

        <p>
          📧
          <a href="mailto:siripireddyyamini@gmail.com">
            {" "}
            siripireddyyamini@gmail.com
          </a>
        </p>

        <p>
          📞
          <a href="tel:+917993968137">
            {" "}
            +91 7993968137
          </a>
        </p>

        <p>📍 Kadapa, Andhra Pradesh, India</p>

      </div>

      <hr />

      <p className="copyright">
        © 2026 <strong>Yamini Siripireddy</strong>. All Rights Reserved.
      </p>

      <p className="built">
        Built with ❤️ using React
      </p>

    </footer>
  );
}