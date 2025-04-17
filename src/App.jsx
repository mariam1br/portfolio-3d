import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from "./components/layout/Navbar";
import Home from "./scenes/Home";
import Projects from "./scenes/Projects";
import About from "./scenes/About";
import Contact from "./scenes/Contact";
import NotFound from "./scenes/NotFound";
import Loader from "./components/interface/Loader";
import "./styles/index.css";

function App() {
  const [loading, setLoading] = useState(true);
  
  // Prevent scroll when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);
  
  return (
    <BrowserRouter>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;