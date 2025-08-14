import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer"; // Adjust the path based on your project structure
import "./Project.css";

// Import images
import img1 from "../BNS project photo/03-9.jpg";
import img2 from "../BNS project photo/01-8.jpg";
import img3 from "../BNS project photo/02-10.jpg";
import img4 from "../BNS project photo/02-10.jpg";
import nextImg from "../BNS project photo/ghanshyamsinh night jpg.jpg";

const Project3 = () => {
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
        <img src={img1} alt="P.D. Gohil Hotel" className="header-image" />
      </div>

      {/* Title Section */}
      <div className="title-section">
        <div className="title-content">
          <h1 className="title">P.D. Gohil Hotel</h1>
          <img src={img1} alt="P.D. Gohil Hotel" className="title-image" />
          <p className="description">
            A luxurious hotel offering a blend of elegance and comfort. Featuring premium suites, a world-class dining experience, 
            and a grand lobby with modern aesthetics. The hotel is designed to provide an unforgettable stay with top-notch hospitality.
          </p>
        </div>
      </div>

      {/* Secondary Images Section */}
      <div className="secondary-section">
        <div className="secondary-image-container large">
          <img src={img2} alt="Luxury Room" className="secondary-image" />
        </div>
        <div className="secondary-image-container small">
          <img src={img3} alt="Lobby Area" className="secondary-image" />
        </div>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <p>
          The P.D. Gohil Hotel is an architectural marvel that combines contemporary design with comfort. 
          Every room is equipped with modern amenities, while the rooftop dining offers breathtaking views.
        </p>
      </div>

      {/* Full Image Section */}
      <div className="full-image-section">
        <img src={img4} alt="Hotel Dining Area" className="full-image" />
      </div>

      {/* Next Project Title */}
      <h2 className="next-project-title">Next Project</h2>

      {/* Next Project Section - Using Link Properly */}
      <Link to="/projects/project4" className="next-project-container">
        <div className="next-project-card">
          <div
            className="next-project-image"
            style={{ backgroundImage: `url(${nextImg})` }}
          ></div>
          <div className="next-project-text">
            <h2>Ghanshyam Villa</h2>
            <p>A tranquil escape with personal home theater.</p>
          </div>
        </div>
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Project3;
