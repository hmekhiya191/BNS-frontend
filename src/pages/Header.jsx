import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isInHero, setIsInHero] = useState(false); // ✅ Track if inside Hero section

  useEffect(() => {
    const handleScroll = () => {
      let currentScroll = window.scrollY;
      
      // ✅ Detect when inside the Hero section
      const heroSection = document.querySelector(".hero-section");
if (heroSection) {
  const { top, bottom } = heroSection.getBoundingClientRect();
  const isVisible = top < window.innerHeight && bottom > 0;
  setIsInHero(isVisible);
} else {
  setIsInHero(false); // ✅ Reset if hero section doesn't exist
}


      // ✅ Hide header on scroll down, show on scroll up
      if (currentScroll > lastScrollTop) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollTop(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);





  return (
    <header className={`header ${hidden && !isMobileMenuOpen ? "hidden" : ""} ${isInHero ? "hero-active" : ""}`}>

      <Link to="/home" className="logo">
        <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833527/bns_logo-removebg-preview_cexv2u.png" alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="navbar">
        <Link to="/projects">Projects</Link>
        <Link to="/blog">About us</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Mobile Menu Trigger */}
      <div className="menu-text" onClick={() => setIsMobileMenuOpen(true)}>
        Menu
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>Close</button>
        <nav className="mobile-nav">
          <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>About us</Link>
          {/* <Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link> */}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>
        <div className="contact-info">
          <p>+91 73835 31548 / +91 91736 45216</p>
          <p>bhatti.n.shahsassociates@gmail.com</p>
        </div>
        <div className="social-links-header">
          <Link to="#">Twitter</Link>
          <Link to="#">LinkedIn</Link>
          <Link to="https://www.instagram.com/bhatti.n.shahsassociates?igsh=MXd0NDloNHluMjRjcQ==">Instagram</Link>
          <Link to="#">Facebook</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
