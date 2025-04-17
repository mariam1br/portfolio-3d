import Experience from "../components/canvas/Experience";

const Contact = () => {
  return (
    <>
      <div style={{ position: "fixed", width: "100%", height: "100vh", top: 0, left: 0, zIndex: -1 }}>
        <Experience />
      </div>
      <div className="section container">
        <div className="contact-content">
          <h1 className="purple-gradient" style={{ marginBottom: "2rem" }}>
            Get In Touch
          </h1>
          
          <div className="contact-info-centered">
            <p>
              I'm always open to new opportunities, collaborations, or just a friendly chat about technology.
              Feel free to reach out to me directly via:
            </p>
            
            <div className="contact-method">
              <h3>Email</h3>
              <a href="mailto:mariamfraht@gmail.com">mariamfraht@gmail.com</a>
            </div>
            
            <div className="contact-method">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/mariamibrahim0" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/mariamibrahim0
              </a>
            </div>
            
            <div className="contact-method">
              <h3>GitHub</h3>
              <a href="https://github.com/mariam1br" target="_blank" rel="noopener noreferrer">
                github.com/mariam1br
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;