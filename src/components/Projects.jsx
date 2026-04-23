import './Projects.css'

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
      <div class="project-name">Vrindhara</div>
      <p class="project-desc">A responsive e-commerce website for jewelry built using HTML, CSS and JavaScript, featuring product listings and a clean grid based layout.</p>
      <div class="project-links">
        <a href="https://github.com/niranjanaramesh20/vrindhara" class="project-link">GitHub</a>
      </div>
    </div>
</div>
    </section>
  )
}

export default Projects
