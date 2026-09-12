import "./App.css";
import vikas from "./assets/vikas.jpg";
import resume from "./assets/vikas cv.pdf";
function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      {/* Navbar */}
<nav className="navbar">
  <div className="logo">VP.</div>

  <input type="checkbox" id="menu-toggle" className="menu-toggle" />

  <label htmlFor="menu-toggle" className="menu-icon">
    ☰
  </label>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#education">Education</a>
    <a href="#certifications">Certifications</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="small-title">HELLO, I'M</p>

          <h1>
           ᴍʀ.vιĸααѕ <span> ραтιℓ</span>
          </h1>

          <h2>Software Developer</h2>

          <p className="description">
            BCA Graduate | MCA Student | Aspiring IT Professional
          </p>

          <div className="buttons">
  <a href="#projects" className="primary-btn">
    View My Work
  </a>

  <a
  href={resume}
  download="Vikas_Rajendra_Patil_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
>
  Download Resume
</a>
  <a
    href="https://github.com/Vikas770"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary-btn"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/%E1%B4%8D%CA%80-v%CE%B9%C4%B8%CE%B1%D1%95-%CF%81%CE%B1%D1%82%CE%B9%E2%84%93-a38157287/"
    className="secondary-btn"
  >
    LinkedIn
  </a>
</div>
        </div>

        <div className="hero-image">
          <div className="image-glow"></div>
          <img src={vikas} alt="Vikas Patil" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">Who I Am</h2>

        <div className="about-card">
          <p>
            I am Vikas Rajendra Patil, a BCA graduate and MCA student
            passionate about software development and technology.
          </p>

          <p>
            I enjoy learning programming, building web applications,
            solving problems and developing my technical skills.
          </p>

          <p>
            I am currently looking for opportunities where I can learn,
            contribute and grow as an IT professional.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-label">MY SKILLS</p>

        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">PHP</div>
          <div className="skill">MySQL</div>
          <div className="skill">Java</div>
          <div className="skill">Python</div>
          <div className="skill">Git & GitHub</div>
          <div className="skill">MS Office</div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <p className="section-label">MY JOURNEY</p>

        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>MCA</h3>
          <p>Godavari Institute Of Management & Research, Jalgaon</p>
          <span>Currently Pursuing</span>
        </div>

        <div className="education-card">
          <h3>BCA</h3>
          <p>Completed in 2025</p>
          <span>Graduated</span>
        </div>
      </section>

      {/* Certifications */}
<section id="certifications" className="section">
  <p className="section-label">MY ACHIEVEMENTS</p>

  <h2 className="section-title">Certifications</h2>

  <div className="certifications-grid">

    <div className="certificate-card">
      <div className="certificate-icon">🏆</div>
      <h3>Java Programming</h3>
      <p>Technical Certification</p>
    </div>

    <div className="certificate-card">
      <div className="certificate-icon">🏆</div>
      <h3>Python Programming</h3>
      <p>Technical Certification</p>
    </div>

    <div className="certificate-card">
      <div className="certificate-icon">🏆</div>
      <h3>Web Development</h3>
      <p>Technical Certification</p>
    </div>

  </div>
</section>

      {/* Projects */}
      <section id="projects" className="section">
  <p className="section-label">MY WORK</p>

  <h2 className="section-title">Featured Projects</h2>

  <div className="projects-grid">

    <div className="project-card">
      <div className="project-number">01</div>

      <h3>Complaint Management System</h3>

      <p>
        A dynamic web-based Complaint Management System designed
        for efficient complaint submission, tracking and resolution.
        The project focuses on usability, responsiveness and an
        organized complaint workflow.
      </p>

      <div className="project-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>PHP</span>
        <span>MySQL</span>
      </div>

      <div className="project-links">
        <span>December 2024</span>
      </div>
    </div>

    <div className="project-card">
      <div className="project-number">02</div>

      <h3>Personal Portfolio Website</h3>

      <p>
        A modern responsive developer portfolio showcasing my
        education, technical skills, projects, certifications,
        resume and contact information.
      </p>

      <div className="project-tags">
        <span>React</span>
        <span>JavaScript</span>
        <span>CSS</span>
        <span>Vite</span>
      </div>

      <div className="project-links">
        <span>Personal Project</span>
      </div>
    </div>

  </div>
</section>

      {/* Contact */}
<section id="contact" className="section contact">
  <p className="section-label">GET IN TOUCH</p>

  <h2 className="section-title">Let's Connect</h2>

  <p className="contact-text">
    I'm open to opportunities, internships and software development
    roles. Feel free to get in touch with me.
  </p>

  <div className="contact-grid">

    <a
      href="mailto:vikaspatil9562@gmail.com"
      className="contact-card"
    >
      <span className="contact-icon">✉</span>
      <h3>Email</h3>
      <p>vikaspatil9562@gmail.com</p>
    </a>

    <a
      href="tel:+919356738342"
      className="contact-card"
    >
      <span className="contact-icon">☎</span>
      <h3>Phone</h3>
      <p>+91 9356738342</p>
    </a>

    <a
      href="https://github.com/Vikas770"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">◉</span>
      <h3>GitHub</h3>
      <p>Vikas770</p>
    </a>

    <a
      href="https://www.linkedin.com/in/vikas-patil"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">in</span>
      <h3>LinkedIn</h3>
      <p>Connect with me</p>
    </a>

  </div>
</section>

      {/* Footer */}
      <footer>
        <p>© 2026 Vikas Rajendra Patil. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;