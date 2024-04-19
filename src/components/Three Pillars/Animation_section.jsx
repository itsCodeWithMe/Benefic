import React, { useEffect, useRef } from "react";
import Image1 from "../../favicons/image1.png";
import Image2 from "../../favicons/image2.png";
import Image3 from "../../favicons/image3.png";

function AnimationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const section = sectionRef.current;
      if (section) {
        section.classList.add("bounce-in");
        setTimeout(() => {
          section.classList.remove("bounce-in");
        }, 1000); // Remove the class after 1 second (adjust as needed for your animation timing)
      }
    }, 2500); // Repeat the animation every 3 seconds (adjust as needed)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="animation-section">
      <div className="row">
        <div className="col-md-5 p-0">
          <img className="" src={Image1} alt="Image 1" />
        </div>
        <div className="col-md-6 p-0">
          <img className="" src={Image2} alt="Image 2" />
          <img className="" src={Image3} alt="Image 3" />
        </div>
      </div>
    </section>
  );
}

export default AnimationSection;
