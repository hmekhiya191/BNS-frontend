import React, { useEffect, useState } from "react";
import "./Footer.css";


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${isVisible ? "visible" : ""}`}>
      <div className="footer-content">
        <h2 className="footer-title">
          Let's create <span className="highlight">beautiful</span> spaces together!
        </h2>
        <div className="link-footer">
          <a href="#" className="social">Facebook</a>
          <a href="#" className="social">LinkedIn</a>
          <a href="#" className="logo-footer">
            <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833527/bns_logo-removebg-preview_cexv2u.png" alt="Logo" />
          </a>
          <a href="https://www.instagram.com/bhatti.n.shahsassociates?igsh=MXd0NDloNHluMjRjcQ==" className="social">Instagram</a>
          <a href="#" className="social">Twitter</a>
        </div>
      </div>

    </footer>
    
  );
};

export default Footer;
