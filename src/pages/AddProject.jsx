import { useState } from "react";
import axios from "axios";

function AddProject() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      await axios.post("https://bns-backend.onrender.com/api/projects", formData);
      alert("Project added!");
      setName("");
      setImage(null);
    } catch (error) {
      console.error("Upload error", error);
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Loading overlay */}
      {loading && (
        <div
          style={{
            position: "absolute",
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
          <span style={{ marginLeft: "10px" }}>Uploading...</span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Upload</button>
      </form>

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

export default AddProject;
