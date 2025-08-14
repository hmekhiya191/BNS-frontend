import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer"; // Adjust the path based on your project structure
import "./Project.css";

// Import images
import img1 from "../BNS project photo/04 ALL LIGHT ON.jpg";
import img2 from "../BNS project photo/bed room revised 4.jpg";
import img3 from "../BNS project photo/DIGVIJAYSINH 02.jpg";
import img4 from "../BNS project photo/DIGVIJAYSINH 12.jpg";
import nextImg from "../BNS project photo/03-9.jpg";

const Project2 = () => {
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
        <img src={img1} alt="Anand Villa" className="header-image" />
      </div>

      {/* Title Section */}
      <div className="title-section">
        <div className="title-content">
          <h1 className="title">Anand Villa</h1>
          <img src={img1} alt="Anand Villa" className="title-image" />
          <p className="description">
            A luxurious modern villa designed for comfort and elegance. Featuring five bedrooms, a spacious living room, 
            and an open-plan kitchen with high-end finishes. The master suite includes a private balcony, while the outdoor 
            area boasts a beautiful pool and garden, creating a perfect retreat for relaxation.
          </p>
        </div>
      </div>

      {/* Secondary Images Section */}
      <div className="secondary-section">
        <div className="secondary-image-container large">
          <img src={img2} alt="Master Bedroom" className="secondary-image" />
        </div>
        <div className="secondary-image-container small">
          <img src={img3} alt="Living Room" className="secondary-image" />
        </div>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <p>
          Anand Villa is designed to offer a seamless blend of luxury and nature. 
          With high ceilings, floor-to-ceiling windows, and premium interior finishes, 
          this home ensures a sophisticated living experience.
        </p>
      </div>

      {/* Full Image Section */}
      <div className="full-image-section">
        <img src={img4} alt="Full View of Anand Villa" className="full-image" />
      </div>

      {/* Next Project Title */}
      <h2 className="next-project-title">Next Project</h2>

      {/* Next Project Section - Using Link Properly */}
      <Link to="/projects/project3" className="next-project-container">
        <div className="next-project-card">
          <div
            className="next-project-image"
            style={{ backgroundImage: `url(${nextImg})` }}
          ></div>
          <div className="next-project-text">
            <h2>P.D. Gohil Hotel</h2>
            <p>A modern sanctuary designed for peaceful  dining & living.</p>
          </div>
        </div>
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Project2;
