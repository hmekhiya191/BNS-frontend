import { useEffect, useRef, useState } from "react";
import "./Testimonial.css"; // Import the CSS file

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      quote:
        "“Bhatti & Shah's associates were absolutely brilliant in every aspect. Incredibly thorough and their designs were both innovative and thoughtful. I would highly recommend them.”",
      author: "Mukundbhai Mekhiya, Private client",
    },
    {
      quote:
        "“Working with Bhatti & Shah's associates was an amazing experience. Their attention to detail and creative solutions were beyond expectations.”",
      author: "Sandeepbhai Parekh - Bath Gallary",
    },
    {
      quote:
        "“The best architectural team! They transformed our vision into reality while keeping everything functional and beautiful in a manner of time.”",
      author: "Nirish Tank, Business Owner",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // 50% visibility required to trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const updateTestimonial = (newIndex) => {
    setIsAnimating(true); // Start exit animation
    setTimeout(() => {
      setIndex(newIndex);
      setIsAnimating(false); // Start enter animation
    }, 300); // Delay for smooth transition
  };

  return (
    <section ref={sectionRef} className={`testimonial-section ${isVisible ? "animate" : ""}`}>
      <div className="testimonial">
        <p className={`quote ${isAnimating ? "fade-out" : "fade-in"}`}>
          {testimonials[index].quote}
        </p>
        <p className={`author ${isAnimating ? "fade-out" : "fade-in"}`}>
          {testimonials[index].author}
        </p>
      </div>

      <button
        className="prev-btn"
        onClick={() =>
          updateTestimonial((index - 1 + testimonials.length) % testimonials.length)
        }
      >
        ← PREV
      </button>
      <button
        className="next-btn"
        onClick={() => updateTestimonial((index + 1) % testimonials.length)}
      >
        NEXT →
      </button>
    </section>
  );
};

export default Testimonial;
