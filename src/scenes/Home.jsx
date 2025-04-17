import Experience from "../components/canvas/Experience";

const Home = () => {
  return (
    <>
      <div style={{ position: "fixed", width: "100%", height: "100vh", top: 0, left: 0, zIndex: -1 }}>
        <Experience />
      </div>
      <div className="section container">
        <h1 className="purple-gradient" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Mariam Ibrahim
        </h1>
        <h2 className="green-gradient" style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          Software Engineer
        </h2>
        <p style={{ maxWidth: "600px", marginBottom: "2rem", fontSize: "1.1rem" }}>
          I'm a software engineering student at the University of Calgary, passionate about building
          creative and innovative applications with modern technologies.
        </p>
        <button className="btn">Explore My Work</button>
      </div>
    </>
  );
};

export default Home;