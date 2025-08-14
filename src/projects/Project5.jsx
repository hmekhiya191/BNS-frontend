import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer"; // Adjust the path based on your project structure
import "./Project.css";

// Import images
import img1 from "../BNS project photo/FINAL 07.jpg";
import img2 from "../BNS project photo/FINAL 04.jpg";
import img3 from "../BNS project photo/FINAL 02-2.jpg";
import img4 from "../BNS project photo/FINAL 07.jpg";
import nextImg from "../BNS project photo/somani 11.jpg";

const Project5 = () => {
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
        <img src={img1} alt="Krishna Farm" className="header-image" />
      </div>

      {/* Title Section */}
      <div className="title-section">
        <div className="title-content">
          <h1 className="title">Krishna Farm</h1>
          <img src={img1} alt="Krishna Farm" className="title-image" />
          <p className="description">
            Krishna Farm is a stunning party plot with elegant guest rooms. 
            Designed for large gatherings and luxurious stays, it offers a beautifully landscaped venue, 
            perfect for weddings, corporate events, and grand celebrations.
          </p>
        </div>
      </div>

      {/* Secondary Images Section */}
      <div className="secondary-section">
        <div className="secondary-image-container large">
          <img src={img2} alt="Event Space" className="secondary-image" />
        </div>
        <div className="secondary-image-container small">
          <img src={img3} alt="Guest Room" className="secondary-image" />
        </div>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <p>
          Krishna Farm provides a premium experience with world-class amenities. 
          The lush gardens, and luxurious accommodations make it an ideal destination 
          for celebrations and relaxation.
        </p>
      </div>

      {/* Full Image Section */}
      <div className="full-image-section">
        <img src={img4} alt="Grand Party Area" className="full-image" />
      </div>

      {/* Next Project Title */}
      <h2 className="next-project-title">Next Project</h2>

      {/* Next Project Section - Using Link Properly */}
      <Link to="/projects/project6" className="next-project-container">
        <div className="next-project-card">
          <div
            className="next-project-image"
            style={{ backgroundImage: `url(${nextImg})` }}
          ></div>
          <div className="next-project-text">
            <h2>Somani Home</h2>
            <p>Luxury Bunglow with asthetic stylings.</p>
          </div>
        </div>
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Project5;
