import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer"; // Adjust the path based on your project structure
import "./Project.css";

// Import images
import img1 from "../BNS project photo/ghanshyamsinh night jpg.jpg";
import img2 from "../BNS project photo/HT1.jpg";
import img3 from "../BNS project photo/ghanshyamsinh day jpg.jpg";
import img4 from "../BNS project photo/HT 002.jpg";
import nextImg from "../BNS project photo/FINAL 07.jpg";

const Project4 = () => {
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
        <img src={img1} alt="Ghanshyam Villa" className="header-image" />
      </div>

      {/* Title Section */}
      <div className="title-section">
        <div className="title-content">
          <h1 className="title">Ghanshyam Villa</h1>
          <img src={img1} alt="Ghanshyam Villa" className="title-image" />
          <p className="description">
            A luxurious modern villa featuring a personal home theater, elegant interiors, and breathtaking views. 
            Designed for comfort and entertainment, this villa boasts spacious bedrooms, a state-of-the-art kitchen, 
            and a beautifully landscaped outdoor area.
          </p>
        </div>
      </div>

      {/* Secondary Images Section */}
      <div className="secondary-section">
        <div className="secondary-image-container large">
          <img src={img2} alt="Living Room" className="secondary-image" />
        </div>
        <div className="secondary-image-container small">
          <img src={img3} alt="Bedroom View" className="secondary-image" />
        </div>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <p>
          Ghanshyam Villa offers a perfect blend of luxury and technology. 
          The private home theater is designed for an immersive cinematic experience, while the open spaces 
          and modern interiors provide a serene and comfortable living environment.
        </p>
      </div>

      {/* Full Image Section */}
      <div className="full-image-section">
        <img src={img4} alt="Home Theater" className="full-image" />
      </div>

      {/* Next Project Title */}
      <h2 className="next-project-title">Next Project</h2>

      {/* Next Project Section - Using Link Properly */}
      <Link to="/projects/project5" className="next-project-container">
        <div className="next-project-card">
          <div
            className="next-project-image"
            style={{ backgroundImage: `url(${nextImg})` }}
          ></div>
          <div className="next-project-text">
            <h2>Krishna farm</h2>
            <p>An exclusive retreat party plot with guest rooms.</p>
          </div>
        </div>
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Project4;
