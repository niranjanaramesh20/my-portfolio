import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Home.css"

function Home() {
  return (
    <div className="home" id="home">
        <div className="home-left">
          <p>Hi, I'm </p>
          <h1>Niranjana</h1>
      <p>a software developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive web applications.</p>
    <div className="social-icons">
    
    <FaGithub />
    <FaLinkedin />
    <FaXTwitter />
    </div>
        </div>
        <div className="home-right"></div>
    </div>
  );
}

export default Home;