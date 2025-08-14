import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer"; // Adjust the path based on your project structure
import "./Project.css";

// Import images
import img1 from "../BNS project photo/somani 11.jpg";
import img2 from "../BNS project photo/MASTER ROOM_Photo - 3.jpg";
import img3 from "../BNS project photo/MASTER ROOM_Photo - 4.jpg";
import img4 from "../BNS project photo/somani 06.jpg";
import nextImg from "../BNS project photo/SHANGHAVI LUMION TEST 6.jpg";

const Project6 = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.3 }
    );

    // Sections that need animations
    const animatedSections = document.querySelectorAll(
      ".secondary-section, .details-section, .full-image-section, .next-project-container, .next-project-title"
    );

    animatedSections.forEach((section) => observer.observe(section));

    // Immediately reveal first two sections
    document.querySelector(".header-section")?.classList.add("reveal");
    document.querySelector(".title-section")?.classList.add("reveal");

    return () => {
      animatedSections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="project-page">
      {/* Header Section */}
      <div className="header-section">
        <img src={img1} alt="Somani Home" className="header-image" />
      </div>

      {/* Title Section */}
      <div className="title-section">
        <div className="title-content">
          <h1 className="title">Somani Home</h1>
          <img src={img1} alt="Somani Home" className="title-image" />
          <p className="description">
            Somani Home is a beautifully designed luxury bungalow that blends modern aesthetics with timeless elegance. 
            Featuring premium interiors, spacious living areas, and exquisite detailing, it offers a comfortable yet stylish lifestyle.
          </p>
        </div>
      </div>

      {/* Secondary Images Section */}
      <div className="secondary-section">
        <div className="secondary-image-container large">
          <img src={img2} alt="Interior View" className="secondary-image" />
        </div>
        <div className="secondary-image-container small">
          <img src={img3} alt="Modern Living Room" className="secondary-image" />
        </div>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <p>
          Somani Home is designed with attention to detail, featuring an open-plan layout, 
          high ceilings, and a seamless connection between indoor and outdoor spaces. 
          The residence embodies elegance and sophistication, perfect for modern living.
        </p>
      </div>

      {/* Full Image Section */}
      <div className="full-image-section">
        <img src={img4} alt="Exterior View" className="full-image" />
      </div>

      {/* Next Project Title */}
      <h2 className="next-project-title">Next Project</h2>

      {/* Next Project Section - Using Link Properly */}
      <Link to="/projects/project7" className="next-project-container">
        <div className="next-project-card">
          <div
            className="next-project-image"
            style={{ backgroundImage: `url(${nextImg})` }}
          ></div>
          <div className="next-project-text">
            <h2>SHANGHAVI LUMION</h2>
            <p>A sustainable and eco-friendly farm house with greenery.</p>
          </div>
        </div>
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Project6;
