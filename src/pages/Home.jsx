import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Discover from "../Discover";
import Projects from "../Projects-home";
import Hero from "../components/Hero";

const StatsSection = () => {
  const statsRef = useRef(null);
  const [counts, setCounts] = useState([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  const statsData = [
    { target: 78, label: "Projects" },
    { target: 12, label: "Cities worked in" },
    { target: 1, label: "Office" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const speed = 100;
      const intervals = statsData.map((stat, index) =>
        setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < stat.target) {
              newCounts[index] = Math.ceil(newCounts[index] + stat.target / speed);
            } else {
              clearInterval(intervals[index]);
              newCounts[index] = stat.target;
            }
            return newCounts;
          });
        }, 40)
      );
      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [isVisible]);

  return (
    <section className={`stats-section ${isVisible ? "visible" : ""}`} ref={statsRef}>
      {statsData.map((stat, index) => (
        <div className="stat" key={index}>
          <span className="number">{counts[index]}</span>
          <span className="label">{stat.label}</span>
        </div>
      ))}
      <div className="learn-more">
        <Link to="/blog">LEARN MORE ABOUT US →</Link>
      </div>
    </section>
  );
};

const Home = () => {
  const textSectionRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [fadeClass, setFadeClass] = useState("page-fade-in");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Text animation observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (textSectionRef.current) observer.observe(textSectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle fade-out on navigation
  const handleNavigation = (e, path) => {
    e.preventDefault();
    setFadeClass("page-fade-out");
    setTimeout(() => navigate(path), 300); // Matches CSS transition
  };

  return (
    <div className={fadeClass}>
      <Hero />
      <section className={`text-image-section ${textVisible ? "visible" : ""}`} ref={textSectionRef}>
        <p>
          <span className="text">We</span>
          <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833465/IMG_20250221_084221_j4ccll.jpg" alt="Architecture" />
          <span className="text">care about</span>
        </p>
        <p>
          <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754835955/front_1_Photo_-_1_vui66w.jpg" alt="Design" />
          <span className="text">creating beautiful</span>
        </p>
        <p>
          <span className="text">architecture,</span>
          <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833483/IMG_20250221_084325_kvgnks.jpg" alt="Development" />
          <span className="text">developing</span>
        </p>
        <p>
          <span className="text">projects</span>
          <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1755013720/WhatsApp_Image_2025-08-12_at_21.17.43_9dc4bc7f_jwszwp.jpg" alt="Projects" />
          <span className="text">that are individual,</span>
        </p>
        <p>
          <span className="text">inspiring, and</span>
          <img src="https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833519/IMG_20250221_084341_yt39ds.jpg" alt="Lifestyle" />
          <span className="text">enhancing</span>
        </p>
        <p>
          <span className="text">the lifestyle of users.</span>
        </p>
      </section>

      <StatsSection />
      <Projects />
      <Discover />
      <Footer />
    </div>
  );
};

export default Home;
