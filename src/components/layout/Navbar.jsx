import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="purple-gradient">Mariam</span>
        </Link>

        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/projects" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/about" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>

        <div className="navbar-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;