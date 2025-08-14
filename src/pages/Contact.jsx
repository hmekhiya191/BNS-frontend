import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Contact.css";
import DropUs from "../DropUs";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloaded");
    }
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [attachment, setAttachment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // 🔹 Controls the success message visibility

  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowSuccess(false); // Hide previous success message

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    if (attachment) {
      formDataToSend.append("attachment", attachment);
    }

    try {
      await axios.post("https://bns-backend.onrender.com/send-email", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setShowSuccess(true); // 🔹 Show success message
      setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds

      setFormData({ firstName: "", lastName: "", email: "", phone: "", inquiryType: "", message: "" });
      setAttachment(null);
    } catch (error) {
      console.error("Axios error:", error.response?.data || error.message);
      alert("Failed to send email. Check the console for errors.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DropUs />
      <section className="contact-section2">
        <p className="contact-title">Get In Touch</p>
        <p className="contact-description">
          Please fill in your details below, and our team will reach out to arrange a personalized visit.
        </p>

        {/* SUCCESS MESSAGE BLOCK */}
        {showSuccess && (
          <div className="success-message">
            ✅ Your message has been sent successfully!
          </div>
        )}

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First Name *" required value={formData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name *" required value={formData.lastName} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email *" required value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <input type="tel" name="phone" placeholder="Phone Number *" required value={formData.phone} onChange={handleChange} />

            <select name="inquiryType" required value={formData.inquiryType} onChange={handleChange}>
              <option value="">Inquiry Type *</option>
              <option value="appointment">Appointment</option>
              <option value="job">Job-Related</option>
              <option value="projects">Project-Related</option>
              <option value="others">Others</option>
            </select>

            <input type="file" name="attachment" accept=".pdf,.doc,.docx,.jpg,.png" onChange={handleFileChange} />
          </div>

          <div className="message-box">
            <textarea name="message" placeholder="Type Your Message Here *" rows="5" required value={formData.message} onChange={handleChange}></textarea>
          </div>
        </form>

        {/* Submit Button */}
        <div className="submit-btn-container">
          <button 
            type="button" 
            className="submit-btn" 
            onClick={() => formRef.current.requestSubmit()} 
            disabled={loading}
          >
            {loading ? <span className="loader"></span> : "Submit"}
          </button>
        </div>
        {/* 👇 Add this line before closing section */}
<div className="contact-copyright">
  © {new Date().getFullYear()} Bhatti & Shah's Associates
</div>
      </section>
    </>
  );
};

export default Contact;
