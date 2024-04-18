import React, { useEffect, useRef } from "react";
import Image1 from "../../favicons/image1.png";
import Image2 from "../../favicons/image2.png";
import Image3 from "../../favicons/image3.png";

function AnimationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bounce-in");
        } else {
          entry.target.classList.remove("bounce-in");
        }
      });
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="animation-section  ">
      <div className="row">
        <div className="col-md-6 p-0">
          <img className="w-100" src={Image1} alt="Image 1" />
        </div>
        <div className="col-md-6 p-0">
          <img className="w-100" src={Image2} alt="Image 2" />
          <img className="w-100" src={Image3} alt="Image 3" />
        </div>
      </div>
    </section>
  );
}

export default AnimationSection;
