import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! This is a demo form, so no message was actually sent.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  
  return (
    <div className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="contact-content"
      >
        <h1 className="purple-gradient" style={{ marginBottom: "2rem" }}>
          Get In Touch
        </h1>
        
        <div className="contact-container">
          <div className="contact-info">
            <p>
              I'm always open to new opportunities, collaborations, or just a friendly chat about technology.
              Feel free to reach out to me through this form or directly via:
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
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;