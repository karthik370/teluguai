import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="glass-nav">
      {/* Logo */}
      <Link to="/" className="glass-logo">Telugu AI</Link>
      {/* Desktop Menu */}
      <div className="desktop-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      {/* Mobile Hamburger */}
      <div className="hamburger-row">
        <button
          onClick={toggleMenu}
          className="hamburger-btn"
          aria-expanded={isMenuOpen}
        >
          <svg className="hamburger-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-list">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/features" onClick={toggleMenu}>Features</MobileNavLink>
            <MobileNavLink to="/blog" onClick={toggleMenu}>Blog</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink component
const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link 
    to={to}
    className="nav-link"
  >
    {children}
  </Link>
);

// Mobile NavLink component
const MobileNavLink: React.FC<{ to: string; onClick: () => void; children: React.ReactNode }> = ({ to, onClick, children }) => (
  <Link 
    to={to}
    onClick={onClick}
    className="mobile-nav-link"
  >
    {children}
  </Link>
);

export default Navigation;
