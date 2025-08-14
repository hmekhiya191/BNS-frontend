import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminPage.css";

function AdminPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [projects, setProjects] = useState([]);
  const [detailForms, setDetailForms] = useState({});
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false); // ✅ Loading state
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://bns-backend.onrender.com/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!name || !image) return alert("Enter name and image");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      setLoading(true);
      await axios.post("https://bns-backend.onrender.com/api/projects", formData);
      setName("");
      setImage(null);
      fetchProjects();
    } catch (err) {
      console.error("Upload failed", err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const toggleDetailForm = (projectId) => {
    setDetailForms((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  const handleDetailChange = (e, projectId) => {
    const { name, value, files } = e.target;
    setDetails((prev) => ({
      ...prev,
      [projectId]: {
        ...prev[projectId],
        [name]: files ? files[0] : value,
      },
    }));
  };

  const handleDetailSubmit = async (e, projectId) => {
    e.preventDefault();
    const data = new FormData();
    const detail = details[projectId];

    Object.keys(detail || {}).forEach((key) => {
      if (detail[key]) {
        data.append(key, detail[key]);
      }
    });

    try {
      setLoading(true);
      await axios.put(
        `https://bns-backend.onrender.com/api/projects/${projectId}/details`,
        data
      );
      alert("Details uploaded ✅");
      setDetailForms((prev) => ({ ...prev, [projectId]: false }));
      setDetails((prev) => ({ ...prev, [projectId]: {} }));
      fetchProjects();
    } catch (err) {
      console.error("Details upload failed", err);
      alert("❌ Failed to upload project details.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (projectId) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      setLoading(true);
      await axios.delete(`http://bns-backend.onrender.com/api/projects/${projectId}`);
      fetchProjects();
      alert("Project deleted 🗑️");
    } catch (err) {
      console.error("Delete failed", err);
      alert("❌ Failed to delete project.");
    } finally {
      setLoading(false);
    }
  };

  const token = localStorage.getItem("token");
  axios.get("http://bns-backend.onrender.com/admin", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <div className="admin-container" style={{ position: "relative" }}>
      {/* ✅ Full-page loading overlay */}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "20px",
            zIndex: 9999,
          }}
        >
          <div className="loader"></div>
          <span style={{ marginLeft: "10px" }}>Please wait...</span>
        </div>
      )}

      <h2>🛠️ Admin Panel</h2>

      {/* Upload title section */}
      <form className="admin-form" onSubmit={handleUpload}>
        <input
          type="text"
          value={name}
          placeholder="Project Title"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Upload Title</button>
      </form>

      <h3>📋 Project List</h3>
      {projects.map((project) => (
        <div className="project-item" key={project._id}>
          <img src={project.image} alt={project.name} width="100" />
          <strong>{project.name}</strong>
          <div className="admin-buttons">
            <button onClick={() => toggleDetailForm(project._id)}>
              {detailForms[project._id] ? "Cancel" : "✏️ Edit / Add Details"}
            </button>
            <button onClick={() => navigate(`/projects/${project._id}`)}>
              🔗 View
            </button>
            <button onClick={() => handleDelete(project._id)}>🗑️ Delete</button>
          </div>

          {detailForms[project._id] && (
            <form
              className="details-form"
              onSubmit={(e) => handleDetailSubmit(e, project._id)}
            >
              <textarea
                name="description"
                placeholder="Project Description"
                onChange={(e) => handleDetailChange(e, project._id)}
                required
              />
              <textarea
                name="slogan"
                placeholder="Project Slogan (40vh section)"
                onChange={(e) => handleDetailChange(e, project._id)}
                required
              />
              <input
                type="file"
                name="headerImage"
                onChange={(e) => handleDetailChange(e, project._id)}
                required
              />
              <input
                type="file"
                name="titleImage"
                onChange={(e) => handleDetailChange(e, project._id)}
                required
              />
              <input
                type="file"
                name="secondaryImage1"
                onChange={(e) => handleDetailChange(e, project._id)}
                required
              />
              <input
                type="file"
                name="secondaryImage2"
                onChange={(e) => handleDetailChange(e, project._id)}
                required
              />
              <input
                type="file"
                name="fullImage"
                onChange={(e) => handleDetailChange(e, project._id)}
                required
              />
              <input
                type="text"
                name="nextTitle"
                placeholder="Next Project Title"
                onChange={(e) => handleDetailChange(e, project._id)}
              />
              <input
                type="text"
                name="nextDescription"
                placeholder="Next Project Description"
                onChange={(e) => handleDetailChange(e, project._id)}
              />
              <input
                type="file"
                name="nextImage"
                onChange={(e) => handleDetailChange(e, project._id)}
              />
              <button type="submit">✅ Save Details</button>
            </form>
          )}
        </div>
      ))}

      {/* Loader animation styles */}
      <style>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #fff;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default AdminPage;
