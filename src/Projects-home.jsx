import React, { useState, useEffect, useRef } from "react";
import "./Projects-home.css";

const projectData = [
  {
    title: "Mahadev House",
    description: "Residential modern conversion in the city center.",
    mainImage: "https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833519/IMG_20250221_084341_yt39ds.jpg",
    sideImages: [
      "https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833497/IMG_20250221_084306_zxooky.jpg",
      "https://res.cloudinary.com/dhhrwylyd/image/upload/v1755013435/IMG-20250812-WA0010_mlkpdl.jpg",
    ],
  },
  {
    title: "P.D. Gohil",
    description: "fine Hotel With resurant area with beautiful personal rooms",
    mainImage: "https://res.cloudinary.com/dhhrwylyd/image/upload/v1755013437/IMG-20250812-WA0011_ngyoen.jpg",
    sideImages: [
      "https://res.cloudinary.com/dhhrwylyd/image/upload/v1755013434/IMG-20250812-WA0012_eab9ds.jpg",
      "https://res.cloudinary.com/dhhrwylyd/image/upload/v1755013435/IMG-20250812-WA0014_c9bhu9.jpg",
    ],
  },
  {
    title: "Anand Villa",
    description: "Luxury redefined in every frame and finish.",
    mainImage: "https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833465/IMG_20250221_084221_j4ccll.jpg",
    sideImages: [
      "https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833483/IMG_20250221_084325_kvgnks.jpg",
      "https://res.cloudinary.com/dhhrwylyd/image/upload/v1754835955/front_1_Photo_-_1_vui66w.jpg",
    ],
  },
  {
    title: "Somani Home",
    description: "A masterpiece of sophistication and tranquility.",
    mainImage: "https://res.cloudinary.com/dhhrwylyd/image/upload/v1755013719/WhatsApp_Image_2025-08-12_at_21.17.43_5e795a9f_bln3bo.jpg",
    sideImages: [
      "https://res.cloudinary.com/dhhrwylyd/image/upload/v1755013720/WhatsApp_Image_2025-08-12_at_21.17.43_9dc4bc7f_jwszwp.jpg",
      "https://res.cloudinary.com/dhhrwylyd/image/upload/v1755013721/WhatsApp_Image_2025-08-12_at_21.17.44_376c244e_jvhzi7.jpg",
    ],
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next"); // "next" or "prev"
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleProjectChange = (newDirection) => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    setIsAnimating(true);
    setDirection(newDirection);

    setTimeout(() => {
      setCurrentProject((prev) => {
        if (newDirection === "next") {
          return (prev + 1) % projectData.length;
        } else {
          return prev === 0 ? projectData.length - 1 : prev - 1;
        }
      });
    }, 600); // Matches CSS animation time

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  return (
    <section ref={sectionRef} className={`projects-section ${isVisible ? "visible" : ""}`}>
      <div className="content-wrapper">
        {/* Project Title */}
        <div className={`project-title ${isAnimating ? (direction === "next" ? "slide-out-left" : "slide-out-right") : "slide-in-left"}`}>
          <h2>
            {projectData[currentProject].title.split(" ")[0]} <br />
            <span>{projectData[currentProject].title.split(" ").slice(1).join(" ")}</span>
          </h2>
        </div>

        {/* Main Image */}
        <div className={`main-image ${isAnimating ? (direction === "next" ? "slide-out-left" : "slide-out-right") : "slide-in-left"}`}>
          <img src={projectData[currentProject].mainImage} alt="Main Project" />
        </div>

        {/* Side Images */}
        <div className="side-images">
          {projectData[currentProject].sideImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Side Image ${index + 1}`}
              className={isAnimating ? (direction === "next" ? "slide-out-left" : "slide-out-right") : "slide-in-left"}
            />
          ))}
        </div>

        {/* Project Description */}
        <p className={`project-description ${isAnimating ? (direction === "next" ? "slide-out-left" : "slide-out-right") : "slide-in-left"}`}>
          {projectData[currentProject].description}
        </p>

        {/* Navigation Buttons */}
        <div className="navigation">
          <button className="prev" onClick={() => handleProjectChange("prev")}>← PREV</button>
          <button className="next" onClick={() => handleProjectChange("next")}>NEXT →</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
