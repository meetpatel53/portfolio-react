import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/proflephoto.jpeg";

function Home() {
  return (
    <section className="page hero-page">


      <div className="hero-content">
        <p className="eyebrow"></p>
        <h1>Meet Patel</h1>
        <h2> Computer Science Student | Frontend Developer | Web Developer </h2>
        <p>I build responsive web applications with clean interfaces, thoughtful user experiences, and a growing interest in artificial intelligence. My work focuses on practical products that feel fast, useful, and easy to understand.</p>


        <div className="hero-actions">
          <a className="btn primary" href="/Meet-Patel-Resume.txt" download>Resume</a>
          
        </div>
        <div className="social-row" aria-label="Social profiles">
          <a href="https://github.com/meetpatel53" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/meet-patel-634763304/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:meetpatel9969gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
   
   
      <div className="hero-visual">
        <div className="profile-card">
          <img src={profileImage} alt="Meet Patel" />
        </div>
      </div>
    </section>
  );
}

export default Home;
