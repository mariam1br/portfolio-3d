import Experience from "../components/canvas/Experience";

const projectData = [
  {
    id: 1,
    title: "MoodMingle",
    description: "Smart Activity Recommender Web App using React, Flask, and MySQL",
    tags: ["React", "Flask", "MySQL", "Google Gemini AI"],
    date: "Mar 2025",
    link: "https://moodmingle-1w1q.onrender.com/" // Replace with your actual project link
  },
  {
    id: 2,
    title: "Disaster Relief Service",
    description: "Java-based system with SQL database for managing disaster relief operations",
    tags: ["Java", "SQL", "OOP"],
    date: "Apr 2024",
  },
  {
    id: 3,
    title: "Ancient Beauty",
    description: "E-Commerce website for skincare products using React",
    tags: ["React", "HTML", "JSON", "APIs"],
    date: "Jan 2024",
  },
  {
    id: 4,
    title: "Airline Information Management System",
    description: "C++ based airline reservation system",
    tags: ["C++", "OOP", "File Handling"],
    date: "Dec 2023",
  },
  {
    id: 5,
    title: "Flappy Bird Mini Game",
    description: "Arduino-based game with Python logic",
    tags: ["Python", "Arduino", "Hardware Integration"],
    date: "Mar 2023",
  }
];

const ProjectCard = ({ project }) => {
  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-card-link"
    >
      <div className="project-card">
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <span className="project-date">{project.date}</span>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <>
      <div style={{ position: "fixed", width: "100%", height: "100vh", top: 0, left: 0, zIndex: -1 }}>
        <Experience />
      </div>
      <div className="section container">
        <h1 className="purple-gradient" style={{ marginBottom: "2rem" }}>
          My Projects
        </h1>
        <div className="projects-grid">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;