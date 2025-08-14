import React from "react";
import "./Dropus.css"; // Ensure this CSS file is properly linked
import { Link } from "react-router-dom";

const DropUs = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-content">
          <div className="right-content2">
            <h1>DROP <br /> US A LINE</h1>
          </div>
          <div className="left-content">
            <p>We would love to hear from you, so don't hesitate to say hi!</p>
            <p>+91 73835 31548 / +91 91736 45216<br />bhatti.n.shahsassociates@gmail.com</p>

            <div className="addresses">
              <div>
                <strong>Bhatti & Shah's Associates</strong><br />
                207-Earth Arron Complex, Upon Crev Eatable,<br />
                Ghogha Circle, Bhavnagar, Gujarat
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <Link to="#" target="_blank">X</Link>
              <Link to="#" target="_blank">LinkedIn</Link>
              <Link to="https://www.instagram.com/bhatti.n.shahsassociates?igsh=MXd0NDloNHluMjRjcQ==" target="_blank">Instagram</Link>
              <Link to="#" target="_blank">Facebook</Link>
            </div>
          </div>

          <div className="right-content">
            <h1>DROP <br /> US A LINE</h1>
          </div>
        </div>

        <div className="gallery">
          <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833465/IMG_20250221_084221_j4ccll.jpg" alt="Gallery Image" className="gallery-img" />
          <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754835955/front_1_Photo_-_1_vui66w.jpg" alt="Gallery Image" className="gallery-img" />
          <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833519/IMG_20250221_084341_yt39ds.jpg" alt="Gallery Image" className="gallery-img" />
          <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1755013720/WhatsApp_Image_2025-08-12_at_21.17.43_9dc4bc7f_jwszwp.jpg" alt="Gallery Image" className="gallery-img" />
        </div>
      </section>
    </>
  );
};

export default DropUs;
