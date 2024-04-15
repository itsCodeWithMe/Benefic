import React, { useEffect } from "react";
import Image1 from "../../favicons/image1.png";
import Image2 from "../../favicons/image2.png";
import Image3 from "../../favicons/image3.png";


function AnimationSection() {
  useEffect(() => {
    const images = document.querySelectorAll('.animation-section img');

    window.addEventListener('scroll', () => {
      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          image.classList.add('zoomed');
        } else {
          image.classList.remove('zoomed');
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <section className="animation-section">
      <div>
        <img src={Image1} alt="Image 1" />
      </div>
      <div>
        <img src={Image2} alt="Image 2" />
        <img src={Image3} alt="Image 3" />
      </div>
    </section>
  );
}

export default AnimationSection;
