const About = () => {
  return (
    <div className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="purple-gradient" style={{ marginBottom: "2rem" }}>
          About Me
        </h1>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Software Engineering student at the Schulich School of Engineering, University of Calgary, 
              with an expected graduation in May 2027. I'm passionate about creating innovative software solutions 
              and continuously expanding my technical skills.
            </p>
            
            <h2 className="green-gradient" style={{ margin: "2rem 0 1rem" }}>Skills & Technologies</h2>
            
            <div className="skills-section">
              <div className="skill-category">
                <h3>Programming Languages</h3>
                <ul>
                  <li>C, C++</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>HTML, CSS</li>
                  <li>SQL</li>
                  <li>RISC-V Assembly</li>
                  <li>MATLAB</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Technologies & Tools</h3>
                <ul>
                  <li>React (Three Fiber)</li>
                  <li>Flask</li>
                  <li>Node.js, Express</li>
                  <li>MySQL</li>
                  <li>Arduino</li>
                  <li>Git, GitHub, BitBucket</li>
                  <li>Development IDEs & Tools</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Concepts</h3>
                <ul>
                  <li>Object-Oriented Programming</li>
                  <li>Full-Stack Web Development</li>
                  <li>Data Structures & Algorithms</li>
                  <li>UI/UX Design</li>
                  <li>Machine Learning (Basics)</li>
                </ul>
              </div>
            </div>
            
            <h2 className="green-gradient" style={{ margin: "2rem 0 1rem" }}>Education</h2>
            <div className="education">
              <h3>Bachelor of Science – Software Engineering</h3>
              <p>Schulich School of Engineering, University of Calgary</p>
              <p>Aug 2022 – May 2027 (Expected Graduation)</p>
              
              <h4 style={{ marginTop: "1rem" }}>Awards</h4>
              <ul>
                <li>Alexander Rutherford Scholarship</li>
                <li>Jason Lang Scholarship</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;