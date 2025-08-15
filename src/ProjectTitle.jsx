import { useEffect, useRef, useState } from "react";
import axios from "axios";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import "./ProjectTitle.css";

const ProjectTitle = () => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState({});
  const [loading, setLoading] = useState(true);

  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const bgRef = useRef(null);

  const navigate = useNavigate();

  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "https://bns-backend.onrender.com";

  // 🔁 Fetch projects and control loader
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/projects`);
        setProjects(response.data);
        if (response.data.length > 0) {
          setActiveProject(response.data[0]);
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      } finally {
        // ✅ Hide loader after fetching (success or fail)
        setLoading(false);
      }
    };
    fetchProjects();
  }, [API_BASE_URL]);

  // ✨ GSAP animation when projects are loaded
  useEffect(() => {
    if (projects.length === 0) return;

    // Main container animation
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power2.out",
    });

    // Titles animation
    gsap.from(textRefs.current, {
      opacity: 0,
      y: 15,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Background image animation
    gsap.from(bgRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
  }, [projects]);

  // Smooth fade-out before navigation
  const handleNavigation = (id) => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => navigate(`/projects/${id}`),
    });
  };

  if (!projects.length && !loading) {
    return (
      <div style={{ padding: "2rem" }}>
        No projects found. Go to /admin to upload some.
      </div>
    );
  }

  return (
    <>
      {/* Loader overlay */}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <img
            src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1755195782/BNS_logo-removebg-preview_1_iusydp.png"
            alt="Loading..."
            style={{
              width: "120px",
              height: "120px",
              animation: "pulse 1.5s infinite",
            }}
          />
        </div>
      )}

      {/* Main content */}
      {!loading && (
        <div ref={containerRef} className="project-container">
          <div className="project-titles">
            <div className="scrollable">
              {projects.map((project, index) => (
                <div
                  key={project._id}
                  ref={(el) => (textRefs.current[index] = el)}
                  className={`project-link ${
                    activeProject._id === project._id ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveProject(project)}
                  onClick={() => handleNavigation(project._id)}
                  style={{ cursor: "pointer" }}
                >
                  <h2>{project.name}</h2>
                  {activeProject._id === project._id && (
                    <span className="arrow">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="background">
            {activeProject?.image && (
              <img
                ref={bgRef}
                src={activeProject.image}
                alt={activeProject.name || "Project Preview"}
                className="bg-image"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectTitle;
