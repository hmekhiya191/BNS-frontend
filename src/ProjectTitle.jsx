import { useEffect, useRef, useState } from "react";
import axios from "axios";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import "./ProjectTitle.css";

const ProjectTitle = () => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const bgRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Get backend URL from .env (frontend)
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://bns-backend.onrender.com";

  // 🔁 Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/projects`);
        setProjects(response.data);
        setActiveProject(response.data[0]);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };
    fetchProjects();
  }, [API_BASE_URL]);

  // ✨ GSAP animation on mount
  useEffect(() => {
    if (projects.length === 0) return;

    gsap.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power2.out",
    });

    gsap.from(textRefs.current, {
      opacity: 0,
      y: 15,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      onStart: () => {
        textRefs.current.forEach((el) => {
          gsap.fromTo(el, { color: "#888" }, { color: "#000", duration: 1.5, ease: "power2.out" });
        });
      },
    });

    gsap.from(bgRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
  }, [projects]);

  if (!projects.length || !activeProject) {
    return <div style={{ padding: "2rem" }}>No projects found. Go to /admin to upload some.</div>;
  }

  return (
    <div ref={containerRef} className="project-container">
      <div className="project-titles">
        <div className="scrollable">
          {projects.map((project, index) => (
            <div
              key={project._id}
              ref={(el) => (textRefs.current[index] = el)}
              className={`project-link ${activeProject._id === project._id ? "active" : ""}`}
              onMouseEnter={() => setActiveProject(project)}
              onClick={() => navigate(`/projects/${project._id}`)}
              style={{ cursor: "pointer" }}
            >
              <h2>{project.name}</h2>
              {activeProject._id === project._id && <span className="arrow">→</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="background">
        <img
          ref={bgRef}
          src={activeProject.image}
          alt="Project Preview"
          className="bg-image"
        />
      </div>
    </div>
  );
};

export default ProjectTitle;
