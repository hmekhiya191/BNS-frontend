import { useEffect, useRef, useState } from "react";
import "./MeetSection.css";


const MeetSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stops observing after animation runs once
        }
      },
      { threshold: 0.25 } // Trigger when 25% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`meet-section ${isVisible ? "animate" : ""}`}>
      {/* Left Side - Text Content */}
<div className="text-container2">
  <h1>Er. Meet Shah – Mastering Site Engineering & Project Management</h1>
  <p>
    <strong>Er. Meet Shah</strong> serves as the Site Engineer and Project Manager at BHATTI & SHAH'S ASSOCIATES,  
    where he is responsible for on-site execution, structural coordination, and overall project delivery.
  </p>
  <p>
    Since 2018, he has played a key role in translating architectural visions into functional realities— 
    managing construction teams, subcontractors, and vendors while ensuring compliance with technical specifications, safety norms, and budget constraints.
  </p>
  <p>
    With a deep understanding of civil engineering practices and on-site dynamics, he excels in interpreting blueprints,  
    resolving site-level challenges, and maintaining workflow efficiency from foundation to finish.
  </p>
  <p>
    Er. Meet Shah also oversees construction logistics, quality assurance, resource allocation, and client coordination—  
    bringing synergy between design teams and ground-level execution through proactive project management.
  </p>
</div>



      {/* Right Side - Images */}
      <div className="image-container2">
        <img src={"https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833549/Meet2_ssr9dj.jpg"} alt="Er. Meet Shah" id="meet"/>
        <img src={"https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833549/Meet2_ssr9dj.jpg"} alt="Er. Meet Shah" id="meet2"/>
      </div>
    </section>
  );
};

export default MeetSection;
