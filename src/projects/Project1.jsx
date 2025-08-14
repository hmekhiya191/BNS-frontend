import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer"; // Adjust the path based on your project structure
import "./Project.css";

// Import images
import img1 from "../BNS project photo/01.jpg";
import img2 from "../BNS project photo/bed room revised 1.jpg";
import img3 from "../BNS project photo/BED copy.jpg";
import img4 from "../BNS project photo/02-1.jpg";
import nextImg from "../BNS project photo/04 ALL LIGHT ON.jpg";

const Project1 = () => {
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
        <img src={img1} alt="Mahadev House" className="header-image" />
      </div>

      {/* Title Section */}
      <div className="title-section">
        <div className="title-content">
          <h1 className="title">Mahadev House</h1>
          <img src={img1} alt="Mahadev House" className="title-image" />
          <p className="description">
            A stunning architectural masterpiece blending modern design with traditional aesthetics.
            This elegant home features four spacious bedrooms, an open-concept living and dining area, 
            and a modern kitchen with high-end appliances. The master suite includes a private balcony and 
            an en-suite bathroom. Large windows bring in natural light, while a beautifully landscaped garden 
            and outdoor seating area provide a perfect retreat.
          </p>
        </div>
      </div>

      {/* Secondary Images Section */}
      <div className="secondary-section">
        <div className="secondary-image-container large">
          <img src={img2} alt="Interior View 1" className="secondary-image" />
        </div>
        <div className="secondary-image-container small">
          <img src={img3} alt="Interior View 2" className="secondary-image" />
        </div>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <p>
          Mahadev House is a perfect blend of contemporary architecture and natural elements.
          Designed to harmonize with its surroundings, this residence offers a unique living experience.
        </p>
      </div>

      {/* Full Image Section */}
      <div className="full-image-section">
        <img src={img4} alt="Full View of Mahadev House" className="full-image" />
      </div>

      {/* Next Project Title */}
      <h2 className="next-project-title">Next Project</h2>

      {/* Next Project Section - Using Link Properly */}
      <Link to="/projects/project2" className="next-project-container">
        <div className="next-project-card">
          <div
            className="next-project-image"
            style={{ backgroundImage: `url(${nextImg})` }}
          ></div>
          <div className="next-project-text">
            <h2>Anand Villa</h2>
            <p>Experience a blend of luxury and nature.</p>
          </div>
        </div>
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Project1;
