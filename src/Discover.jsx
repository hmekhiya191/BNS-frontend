import React, { useEffect, useRef } from "react";
import "./Discover.css";

const Discover = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
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

  return (
    <section ref={sectionRef} className="discover-work">
      <div className="text-overlay">
        <p>
          DISCOVER
          <br />
          OUR
          <br />
          WORK
        </p>
      </div>
      <div className="image-container">
        <img src={"https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833543/IMG_20250221_084835_ijky2g.jpg"} className="img img1" alt="Project 1" />
        <img src={"https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833478/IMG_20250221_084239_obtsbh.jpg"} className="img img2" alt="Project 2" />
        <img src={"https://res.cloudinary.com/dhhrwylyd/image/upload/v1754835955/front_1_Photo_-_1_vui66w.jpg"} className="img img3" alt="Project 3" />
        <img src={"https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833497/IMG_20250221_084306_zxooky.jpg"} className="img img4" alt="Project 4" />
        <img src={"https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833496/IMG_20250221_084758_m6wzkb.jpg"} className="img img5" alt="Project 5" />
        <img src={"https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833519/IMG_20250221_084341_yt39ds.jpg"} className="img img6" alt="Project 6" />
      </div>
    </section>
  );
};

export default Discover;
