import { Link } from "react-router-dom";
import Experience from "../components/canvas/Experience";

const Home = () => {
  return (
    <>
      <div style={{ position: "fixed", width: "100%", height: "100vh", top: 0, left: 0, zIndex: -1 }}>
        <Experience />
      </div>
      <div className="section container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="home-content"
        >
          <h1 className="purple-gradient" style={{ fontSize: "4rem", marginBottom: "1rem" }}>
            Mariam Ibrahim
          </h1>
          <motion.h2 
            className="green-gradient" 
            style={{ fontSize: "2.5rem", marginBottom: "2rem" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Software Engineer
          </motion.h2>
          <motion.p 
            style={{ maxWidth: "600px", marginBottom: "2.5rem", fontSize: "1.2rem", lineHeight: 1.6 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm a software engineering student at the University of Calgary, passionate about building
            creative and innovative applications with modern web technologies, 3D graphics, and user-centric design.
          </motion.p>
          
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/projects">
              <button className="btn">View My Projects</button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-outline" style={{ marginLeft: "1rem" }}>Get In Touch</button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="tech-stack"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3>Tech Stack</h3>
            <div className="tech-icons">
              <span>React</span>
              <span>Three.js</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>Java</span>
              <span>C++</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;