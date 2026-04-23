import './Interests.css'

function Interests() {
  return (
    <section id="interests">
      <div className="section-label">//INTERESTS</div>
      <div className='section-title'>   grep -r "passions"  </div>
       

        <div className='interest-row'>

        <div className="interest-card">
          <span class="interest-icon">🐧</span>
          <div class="interest-name">Linux & OS</div>
          <div class="interest-sub">Kernel internals, scheduling, memory management</div>
        </div>

  <div class="interest-card">
      <span class="interest-icon">🌐</span>
      <div class="interest-name">Web Dev</div>
      <div class="interest-sub">Full stack apps, browser internals, performance</div>
    </div>
    <div class="interest-card">
      <span class="interest-icon">⚙️</span>
      <div class="interest-name">Systems</div>
      <div class="interest-sub">Low-level C/Rust, compilers, network stacks</div>
    </div>
    <div class="interest-card">
      <span class="interest-icon">🔓</span>
      <div class="interest-name">Open Source</div>
      <div class="interest-sub">Contributing, reading codebases, community</div>
    </div>
</div>
  
      </section>
  )
}

export default Interests
