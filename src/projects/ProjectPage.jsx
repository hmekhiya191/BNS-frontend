// src/projects/ProjectPage.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import "./ProjectPage.css";

function ProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  // ✅ Use env for API URL
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://bns-backend.onrender.com";

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/projects/${id}`);
        setProject(res.data);
        window.scrollTo(0, 0);
      } catch (err) {
        console.error("Failed to fetch project", err);
      }
    };
    fetchProject();
  }, [id, API_BASE_URL]);

  useEffect(() => {
    if (!project) return;

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

    const animatedSections = document.querySelectorAll(
      ".secondary-section, .details-section, .full-image-section, .next-project-container, .next-project-title, .slogan-section"
    );

    animatedSections.forEach((section) => observer.observe(section));
    document.querySelector(".header-section")?.classList.add("reveal");
    document.querySelector(".title-section")?.classList.add("reveal");

    return () => {
      animatedSections.forEach((section) => observer.unobserve(section));
    };
  }, [project]);

  if (!project) return <div style={{ padding: "2rem" }}>Loading...</div>;

  // ✅ Helper: Use Cloudinary URL if present, else fallback to local uploads folder
  const getImageUrl = (img) => {
    if (!img) return "";
    return img.startsWith("http") ? img : `${API_BASE_URL}/uploads/${img}`;
  };

  return (
    <div className="project-page">
      {/* Header Image */}
      <div className="header-section">
        <img src={getImageUrl(project.headerImage)} alt={project.name} className="header-image" />
      </div>

      {/* Title & Description */}
      <div className="title-section">
        <div className="title-content">
          <h1 className="title">{project.name}</h1>
          <img src={getImageUrl(project.titleImage)} alt={project.name} className="title-image" />
          <p className="description">{project.description}</p>
        </div>
      </div>

      {/* Secondary Images */}
      <div className="secondary-section">
        <div className="secondary-image-container large">
          <img src={getImageUrl(project.secondaryImage1)} alt="Interior View 1" className="secondary-image" />
        </div>
        <div className="secondary-image-container small">
          <img src={getImageUrl(project.secondaryImage2)} alt="Interior View 2" className="secondary-image" />
        </div>
      </div>

      {/* Slogan or Description Section */}
      {project.slogan && (
        <div className="slogan-section">
          <p className="slogan-text">{project.slogan}</p>
        </div>
      )}

      {/* Full Image */}
      <div className="full-image-section">
        <img src={getImageUrl(project.fullImage)} alt="Full View" className="full-image" />
      </div>

      {/* Next Project */}
      {project.nextTitle && (
        <>
          <h2 className="next-project-title">Next Project</h2>
          <Link to="/projects" className="next-project-container">
            <div className="next-project-card">
              <div
                className="next-project-image"
                style={{ backgroundImage: `url(${getImageUrl(project.nextImage)})` }}
              ></div>
              <div className="next-project-text">
                <h2>{project.nextTitle}</h2>
                <p>{project.nextDescription}</p>
              </div>
            </div>
          </Link>
        </>
      )}

      <Footer />
    </div>
  );
}

export default ProjectPage;
