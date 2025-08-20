import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  // Motion values for subtle movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 10 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 10 });

  const bgVideoRef = useRef(null);
  const fgVideoRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.05;
    const moveY = (clientY - window.innerHeight / 2) * 0.05;
    x.set(moveX);
    y.set(moveY);
  };

  useEffect(() => {
    const syncVideos = () => {
      if (bgVideoRef.current && fgVideoRef.current) {
        fgVideoRef.current.currentTime = bgVideoRef.current.currentTime;
      }
    };

    const interval = setInterval(syncVideos, 1000); // Sync every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section" onMouseMove={handleMouseMove}>
      {/* Background Video Wrapper with Overlay */}
      <div className="video-wrapper">
        <video
          ref={bgVideoRef}
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="https://res.cloudinary.com/dhhrwylyd/video/upload/v1755010795/BNS_title_ai6hro.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtly Moving Foreground Video */}
      <motion.video
        ref={fgVideoRef}
        className="foreground-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ x: smoothX, y: smoothY }}
      >
        <source src="https://res.cloudinary.com/dhhrwylyd/video/upload/v1755010795/BNS_title_ai6hro.mp4" type="video/mp4" />
      </motion.video>

      {/* Centered Text */}
      <div className="hero-text">
        <h1>Bhatti & Shah's associates</h1>
      </div>
    </div>
  );
};

export default Hero;
