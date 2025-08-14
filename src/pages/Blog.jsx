import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header"; 
import "./Blog.css";
import Testimonial from "../Testimonial";
import Discover from "../Discover";
import Footer from "../Footer";
import RahulSection from "../RahulSection";
import MeetSection from "../MeetSection";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Blog = () => {
  // ✅ Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      

      {/* About Section with Updated Animation */}
      <section className="about-section">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <motion.span custom={0} variants={textVariants}>
            BHATTI & SHAH's <br />
          </motion.span>
          <motion.span custom={1} variants={textVariants}>
            <span className="gradient-text">INNOVATIVE</span> AND <br />
          </motion.span>
          <motion.span custom={2} variants={textVariants}>PROGRESSIVE <br /></motion.span>
          <motion.span custom={3} variants={textVariants}>PRACTICE.</motion.span>
        </motion.p>
      </section>

<section className="bs-showcase-section">
  <div className="bs-showcase-container">
    {/* Left Text */}
    <motion.div
      className="bs-showcase-text"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
     <h1>What is Bhatti & Shah’s Associates?</h1>
<p>
  Bhatti & Shah’s Associates is not just an architecture firm — it's a creative powerhouse where ideas are transformed into immersive experiences since 2018. 
  <br /><br />
  Rooted in a philosophy that merges innovation with timeless design, we specialize in crafting purposeful spaces that elevate everyday living. 
  From minimalist interiors to landmark exteriors, every project is a reflection of our belief that architecture should inspire, engage, and endure.
  <br /><br />
  With a collaborative approach and a passion for contextual storytelling, Bhatti & Shah’s Associates redefines spatial design for the modern world — where aesthetics meet utility, and every detail speaks.
</p>

    </motion.div>

    {/* Right Image Collage */}
    <motion.div
      className="bs-showcase-images"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833519/IMG_20250221_084341_yt39ds.jpg" className="bs-img img11" alt="img1" />
      <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833465/IMG_20250221_084221_j4ccll.jpg" className="bs-img img22" alt="img2" />
      <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1755013720/WhatsApp_Image_2025-08-12_at_21.17.43_9dc4bc7f_jwszwp.jpg" className="bs-img img33" alt="img3" />
      <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754835955/front_1_Photo_-_1_vui66w.jpg" className="bs-img img44" alt="img4" />
      <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833543/IMG_20250221_084835_ijky2g.jpg" className="bs-img img55" alt="img5" />
    </motion.div>
  </div>
</section>



      <RahulSection />
      <MeetSection />


      <section className="why-choose-section">
  <h2 className="why-choose-title">Why Choose Us</h2>
  <div className="why-choose-grid">
    <div className="choose-card">
      <h3>Creative Vision</h3>
      <p>We combine modern aesthetics with timeless design principles to create unique architectural spaces.</p>
    </div>
    <div className="choose-card">
      <h3>Client-Centered Approach</h3>
      <p>Your needs and vision are at the core of everything we do. We collaborate with you at every step.</p>
    </div>
    <div className="choose-card">
      <h3>Expert Team</h3>
      <p>Our architects and designers are industry professionals with years of experience and creativity.</p>
    </div>
    <div className="choose-card">
      <h3>Proven Results</h3>
      <p>From residential to commercial, our projects speak volumes of our quality and commitment.</p>
    </div>
  </div>
</section>

      <Testimonial />
      <Discover />
      <Footer />
    </div>
  );
};

export default Blog;
