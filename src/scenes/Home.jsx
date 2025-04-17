import { Link } from "react-router-dom";
import Experience from "../components/canvas/Experience";

const Home = () => {
  return (
    <>
      <div style={{ position: "fixed", width: "100%", height: "100vh", top: 0, left: 0, zIndex: -1 }}>
        <Experience />
      </div>
      <div className="section container">
        <div className="home-content">
          <h1 className="purple-gradient" style={{ fontSize: "4rem", marginBottom: "1rem" }}>
            Mariam Ibrahim
          </h1>
          <h2 
            className="green-gradient" 
            style={{ fontSize: "2.5rem", marginBottom: "2rem" }}
          >
            Software Engineer
          </h2>
          <p 
            style={{ maxWidth: "600px", marginBottom: "2.5rem", fontSize: "1.2rem", lineHeight: 1.6 }}
          >
            Hi! I'm a software engineering student at the University of Calgary, passionate about building
            creative and innovative applications with modern web technologies, 3D graphics, and user-centric design.
          </p>
          
          <div className="cta-buttons">
            <Link to="/projects">
              <button className="btn">View My Projects</button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-outline" style={{ marginLeft: "1rem" }}>Get In Touch</button>
            </Link>
          </div>
          
          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <div className="tech-icons">
              <span>React</span>
              <span>Three.js</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>Java</span>
              <span>C++</span>
              <span>Flask</span>
              <span>Node.js</span>
              <span>MySQL</span>
              <span>Git</span>
              <span>Express</span>
              <span>HTML/CSS</span>
              <span>SQL</span>
              <span>Arduino</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;