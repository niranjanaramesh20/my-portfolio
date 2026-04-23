import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import "./Home.css"

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-prompt">$ whoami</div>
          <h1 className="hero-name">
            <span className="line1">Niranjana</span>
            <span className="line2">Ramesh.</span>
          </h1>

          <div className="hero-title">
            <span className="tag">CSE Student</span>
            <span className="tag">Web Developer</span>
            <span className="tag">Linux Enthusiast</span>
            <span className="tag">Systems Programmer</span>
          </div>

          <p className="hero-desc">
            Building close to the metal and far from boring.
            C when I want control, JavaScript when I want chaos. <br />
            Still learning, still building.
          </p>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/niranjanaramesh20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/niranjanaaramesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

            <a href="mailto:niranjanaramesh2010@gmail.com">
        <MdEmail />
      </a>

        </div>
      </div>
    </section>
  )
}

export default Home
