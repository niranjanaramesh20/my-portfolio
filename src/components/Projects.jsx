import './Projects.css'
import jwelesImage from '../../assets/jweles.png'

function Projects() {
  return (
    <section id="projects" className='projects'>
      <div className="section-label">//PROJECTS</div>
     <div className='section-title'> ls - /projects/ </div>
<div className="proj-grid">

<div class="project-card">

      <div class="project-lang">C · Systems</div>
      <div class="project-name">bare-metal OS</div>
      <p class="project-desc">A minimal bare-metal OS built from scratch. Boots directly on x86 hardware and prints “Hello, World” without relying on any operating system.</p>
      <div class="project-links">
      </div>
    </div>

    <div class="project-card">
   
      <div class="project-lang"> Web</div>
      <div class="project-name">TP - travels</div>
      <p class="project-desc">A modern travel website interface with search functionality, destination listings, and itinerary cards. Designed using HTML and CSS.</p>
      <div class="project-links">
        <a href="https://github.com/niranjanaramesh20/tp-travels" class="project-link">GitHub</a>
  
      </div>
    </div>

    <div class="project-card">

      <div class="project-lang">Web </div>
      <img src={jwelesImage} alt="Jweles project preview" class="project-image" />
      <div class="project-name">Jweles</div>
      <p class="project-desc">
        A landing page for a jewelry brand, showcasing products with a clean and elegant design. Built using HTML and CSS, it features responsive layouts and visually appealing elements to attract customers.
      </p>
      <div class="project-links">
        <a href="https://github.com/niranjanaramesh20/vrindhara" class="project-link">GitHub</a>
        <a
          href="https://niranjanaramesh20.github.io/Jweles/"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          Live
        </a>
      </div>
    </div>
</div>
    </section>
  )
}

export default Projects
