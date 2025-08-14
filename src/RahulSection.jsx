import { useEffect, useRef, useState } from "react";
import "./RahulSection.css";


const RahulSection = () => {
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
    <section ref={sectionRef} className={`rahul-section ${isVisible ? "animate" : ""}`}>
      {/* Right Side - Image */}
      <div className="image-container2">
        <img src={"https://res.cloudinary.com/dhhrwylyd/image/upload/v1754833548/Rahul_iyq0nt.jpg"} alt="Er. Rahul Bhatti" />
      </div>

      {/* Left Side - Text Content */}
      <div className="text-container2">
        <h1>Er. Rahul Bhatti – A Visionary in Architecture and Urban Planning</h1>
        <p>
          <strong>Er. Rahul Bhatti</strong> is the Founder of BHATTI & SHAH'S ASSOCIATES and a respected Executive Committee Member  
          of the Practicing Engineers, Architects, and Town Planners Association (PEATA), Bhavnagar.  
        </p>
        <p>
          Since 2018, he has been transforming Bhavnagar’s architectural landscape, blending innovation with timeless  
          design. With a drive to expand horizons, he took his expertise to Ahmedabad in 2022, where he continues  
          to shape contemporary structures that stand as testaments to functionality and aesthetic brilliance.  
        </p>
        <p>
          Through BHATTI & SHAH'S ASSOCIATES, Er. Rahul Bhatti is redefining modern architecture while ensuring sustainable,  
          culturally rich, and forward-thinking designs that elevate lifestyles and urban spaces.
        </p>
      </div>
    </section>
  );
};

export default RahulSection;
