import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"; // Make sure to create & import this file

const AdminLogin = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
const res = await axios.post("https://bns-backend.onrender.com/api/admin/login", {
  email,
  password,
});



      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
      navigate("/admin/dashboard");
    } catch (err) {
      setErrorMsg("Invalid email or password.");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2 className="admin-login-title">Admin Login</h2>
        <form className="admin-login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="admin-login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="admin-login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="admin-login-button">
            Login
          </button>
          {errorMsg && <p className="admin-login-error">{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
    