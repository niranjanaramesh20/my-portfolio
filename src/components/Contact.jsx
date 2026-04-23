import './Contact.css'

function Contact() {
  
  return (
    <section id="contact" className='contact'>
      <div className="section-label">//CONTACT</div>
      <div className='section-title'> ssh me@internet </div>

    <div className='contact-box'>
      <div className='contact-top'>
        <div className='dot' id="red"></div>
        <div className='dot' id="yellow"></div>
        <div className='dot' id="green"></div>
      </div>
      <div className='contact-body'>

        <div class="contact-line">
          <span class="contact-key">email</span>
          <span class="contact-sep">→</span>
          <a href="mailto:you@example.com" class="contact-val">niranjanaramesh2010.com</a>
        </div>
        <div class="contact-line">
          <span class="contact-key">github</span>
          <span class="contact-sep">→</span>
          <a href="https://github.com/niranjanaramesh20" target="_blank" class="contact-val">github.com/niranjanaramesh20</a>
        </div>
        <div class="contact-line">
          <span class="contact-key">linkedin</span>
          <span class="contact-sep">→</span>
          <a href="https://www.linkedin.com/in/niranjanaaramesh" target="_blank" class="contact-val">linkedin.com/in/niranjanaaramesh</a>
        </div>
      
        <div class="contact-line">
          <span class="contact-key">resume</span>
          <span class="contact-sep">→</span>
          <a href="/niranjana.pdf" target="_blank" rel="noreferrer" className="contact-val">
  View Resume
</a>
        </div>

      </div>
    </div>

    </section>
  )
}

export default Contact;
