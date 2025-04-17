import { Link } from "react-router-dom";
import Experience from "../components/canvas/Experience";

const NotFound = () => {
  return (
    <>
      <div style={{ position: "fixed", width: "100%", height: "100vh", top: 0, left: 0, zIndex: -1 }}>
        <Experience />
      </div>
      <div className="section container">
        <div className="not-found">
          <h1 className="purple-gradient" style={{ fontSize: "6rem", marginBottom: "1rem" }}>
            404
          </h1>
          <h2 className="green-gradient" style={{ fontSize: "2rem", marginBottom: "2rem" }}>
            Page Not Found
          </h2>
          <p style={{ marginBottom: "2rem" }}>
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <button className="btn">Go Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;