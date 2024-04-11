import React from "react";
import Spinner_global from "./Spinner_global";
import Spinner_frame1 from "../../favicons/Frame1.png";
import Spinner_frame2 from "../../favicons/Frame2.png";
import Spinner_frame3 from "../../favicons/Frame3.png";
import Spinner_frame4 from "../../favicons/Frame4.png";
import Techarrow from "../../favicons/images/techarrow.svg";
import Serving_JSON from "../../json/serving_globally.json";

function Serving_globally() {
  return (
    <section className="serving_globally my-5">
      <div className="container">
        <h2 className="mb-3 fw-600">{Serving_JSON.Attributes.Heading}</h2>
        <p className="mb-5">{Serving_JSON.Attributes.Para}</p>

        <div className="global_section bg-green p-5 mb-5">
          <div className="row">
            {Object.keys(Serving_JSON.Spinning_section).map((key, index) => (
              <Spinner_global
                key={key}
                image={eval(`Spinner_frame${index + 1}`)}
                text={Serving_JSON.Spinning_section[key].heading}
                para={Serving_JSON.Spinning_section[key].para}
                initialHeading={
                  Serving_JSON.Spinning_section[key].initialHeading
                }
                initialHeadingBool={
                  Serving_JSON.Spinning_section[key].initialHeadingBool
                }
              />
            ))}
          </div>
        </div>
        <button className="serving_button text-black fw-500 px-3 py-2 mx-0 mb-5">
          Get a Quote
          <img src={Techarrow} />
        </button>
      </div>
    </section>
  );
}

export default Serving_globally;
