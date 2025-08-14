import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react"; // ✅ MISSING IMPORT FIXED
import Header from "./pages/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProjectTitle from "./ProjectTitle";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminPage"; // The dashboard
import ProjectPage from "./projects/ProjectPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectTitle />} />
        <Route path="/projects/:id" element={<ProjectPage />} />

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin/login" replace />
            )
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin/login" replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
