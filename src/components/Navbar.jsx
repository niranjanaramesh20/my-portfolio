import "./Navbar.css"

function Navbar() {
  return (
  
      <nav className="navbar">
        <h3 className="logo">Portfolio</h3>
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>
        <h3>RESUME</h3>
      </nav>
  );
}

export default Navbar;