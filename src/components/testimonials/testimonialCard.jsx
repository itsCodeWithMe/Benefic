import React from "react";

const TestimonialsSlider = ({ heading, span, para }) => {
  return (
    <div className="item">
      <h3>
        {heading}
        <span className="profession">{span}</span>
      </h3>
      <p>{para}</p>
    </div>
  );
};

export default TestimonialsSlider;
