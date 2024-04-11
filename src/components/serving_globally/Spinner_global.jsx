import React from "react";

function Spinner_global({
  image,
  text,
  para,
  initialHeading,
  initialHeadingBool,
}) {
  return (
    <div className="col-md-3 position-relative uspsection">
      <img className="spin w-100  " src={image} alt="" />
      <p className="text-white text-center fw-600  ">
        <span className="fw-500">{initialHeadingBool && initialHeading}</span>
        {text} <span className="fw-500">{para}</span>
      </p>
    </div>
  );
}

export default Spinner_global;
