import "./Navbar.css"

function Navbar() {
  return (
    <main className="navbar">
      <div className="logo">
      <a href="#home">~/niranjana</a>
      </div>
      <nav className="nav-link">
        <a href="#interests">./interests</a>
        <a href="#projects">./projects</a>
        <a href="#contact">./contact</a>
      </nav>

    </main>
  )
}

export default Navbar
