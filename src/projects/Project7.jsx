import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer"; // Adjust the path based on your project structure
import "./Project.css";

// Import images
import img1 from "../BNS project photo/SHANGHAVI LUMION TEST 4.jpg";
import img2 from "../BNS project photo/SHANGHAVI LUMION TEST 6.jpg";
import img3 from "../BNS project photo/SHANGHAVI LUMION TEST 4.jpg";
import img4 from "../BNS project photo/SHANGHAVI LUMION TEST 6.jpg";
import nextImg from "../BNS project photo/01.jpg"; // Replace with the actual next project image

const Project7 = () => {
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
        <img src={img1} alt="Shanghavi Lumion Farmhouse" className="header-image" />
      </div>

      {/* Title Section */}
      <div className="title-section">
        <div className="title-content">
          <h1 className="title">Shanghavi Lumion Farmhouse</h1>
          <img src={img1} alt="Shanghavi Lumion Farmhouse" className="title-image" />
          <p className="description">
            A sustainable and eco-friendly farmhouse designed to blend harmoniously with nature. 
            Featuring lush greenery, open spaces, and modern eco-conscious architecture, it offers a 
            peaceful retreat with luxurious comforts.
          </p>
        </div>
      </div>

      {/* Secondary Images Section */}
      <div className="secondary-section">
        <div className="secondary-image-container large">
          <img src={img2} alt="Outdoor Garden" className="secondary-image" />
        </div>
        <div className="secondary-image-container small">
          <img src={img3} alt="Eco-Friendly Living Space" className="secondary-image" />
        </div>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <p>
          Shanghavi Lumion Farmhouse is designed with sustainability in mind, incorporating natural materials,
          energy-efficient systems, and a serene landscape that promotes a healthy and peaceful lifestyle.
          This farmhouse is the perfect escape from the busy urban life.
        </p>
      </div>

      {/* Full Image Section */}
      <div className="full-image-section">
        <img src={img4} alt="Farmhouse View" className="full-image" />
      </div>

      {/* Next Project Title */}
      <h2 className="next-project-title">Next Project</h2>

      {/* Next Project Section - Using Link Properly */}
      <Link to="/projects/project1" className="next-project-container">
        <div className="next-project-card">
          <div
            className="next-project-image"
            style={{ backgroundImage: `url(${nextImg})` }}
          ></div>
          <div className="next-project-text">
            <h2>Mahadev House</h2>
            <p> A stunning architectural masterpiece blending modern design with traditional aesthetics.</p>
          </div>
        </div>
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Project7;
